import { useRouter } from 'next/navigation';
import { 
    what_is_my_type, 
    permanently_set_my_type 
} from "@/utils/api_utils";

export async function route_to_my_dash(router) {
    let my_user_type = await what_is_my_type();
    switch(my_user_type) {
        case "seller":
            router.push('/b/dash')
            break;
        case "buyer":
            router.push('/s/dash')
            break;
        case "admin":
            break;
        default:
            router.push('/')
    }
}