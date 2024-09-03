'use client'

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

import {
    get_tokens_from_code,
    what_is_my_type
} from "@/utils/api_utils";

export default function Page() {

    const searchParams = useSearchParams();
    const code: string | null = searchParams ? searchParams.get('code') : null;
    const router = useRouter();

    useEffect(() => {
        async function get_tokens() {
            
            try {
                if (code == "") { throw Error(); }
                const tokens = await get_tokens_from_code(code || "");
                if ("error" in tokens) { throw Error(); }
                // THIS IS BAD
                console.log(tokens)
                localStorage.setItem("id_token", tokens["id_token"])
            } catch (e) {}
            
            try {
                const my_type = await what_is_my_type();
                switch (my_type){
                    case "buyer":
                        router.push('/b/dash');
                        break;
                    case "seller":
                        router.push('/s/dash');
                        break;
                    case "admin":
                        break;
                    case "unassigned":
                        router.push('/choose_user_type');
                        break;
                }

            } catch(e) {
                console.error(e)
            }
        }
        get_tokens();

    }, [])
    return <div>
        <BasePage>
            <div>Redirecting</div>
        </BasePage>
    </div>
}