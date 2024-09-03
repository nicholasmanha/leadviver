'use client'

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";
import { Button } from "@/_components/button";
import { useRouter } from 'next/navigation';
import { permanently_set_my_type } from "@/utils/api_utils";

const ALERT_MESSAGE = "Something went wrong. Likely, you have already chosen to buy or sell leads. If you'd like to change this, you'll need to create a new account.";

export default function Page() {
    const router = useRouter();

    const choose_selling_leads  = async () => {
        const response = await permanently_set_my_type("seller");
        if ("message" in response && response["message"] == 'Unauthorized') {
            router.push('/');
            return;
        } 
        else if (response['statusCode'] !== 200) {
            alert(ALERT_MESSAGE)
            return;
        }
        
        router.push('/s/dash');
    }
    
    const choose_buying_leads  = async () => {
        const response = await permanently_set_my_type("buyer");
        if ("message" in response && response["message"] == 'Unauthorized') {
            router.push('/');
            return;
        } else if (response['statusCode'] !== 200) {
            alert(ALERT_MESSAGE)
            return;
        }

        router.push('/b/dash');
    }

    return <div>
        <BasePage>
            <Typography variant="h5" className="text-center">
                I am interested in...
            </Typography>
            <div className="flex justify-center gap-10 m-5 items-center">
                <Button variant="red" size="lg" onClick={choose_selling_leads}>
                    <Typography variant="button-1" color="button">Selling Leads</Typography>
                </Button>
                <Button variant="blue" size="lg" onClick={choose_buying_leads}>
                    <Typography variant="button-1" color="button">Buying Leads</Typography>
                </Button>
            </div>
        </BasePage>
    </div >
}