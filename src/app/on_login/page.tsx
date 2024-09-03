'use client'

import BasePage from "@/_components/layout/basepage";
import NavbarWrapper from "@/_components/layout/navbar";

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

import {
    get_tokens_from_code,
    what_is_my_type,
    choose_lead_selling_type
} from "@/utils/api_utils";

const handle_unassigned_login = async (router: any) => {
    const user_type_choice = localStorage.getItem("on_login_user_type_choice");
    localStorage.removeItem("on_login_user_type_choice")
    switch (user_type_choice){
        case "seller":
            await choose_lead_selling_type(router, "seller");
            return;
        case "buyer":
            await choose_lead_selling_type(router, "buyer");
            return;
    } 
    
    router.push('/choose_user_type');
}

export default function Page() {

    const searchParams = useSearchParams();
    const code: string | null = searchParams ? searchParams.get('code') : null;
    const router = useRouter();

    useEffect(() => {
        async function get_tokens() {
            
            try {
                if (code == "") { throw Error(); }
                const tokens = await get_tokens_from_code(code || "");
                console.log(tokens)
                if ("error" in tokens) { throw Error(); }
                // THIS IS BAD
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
                        handle_unassigned_login(router)
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