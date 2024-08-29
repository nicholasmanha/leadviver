'use client'

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'


import get_tokens_from_code from "@/utils/get_tokens_from_code";

export default function Page() {

    const searchParams = useSearchParams()
    const code: string | null = searchParams ? searchParams.get('code') : null;
    const router = useRouter()

    useEffect(() => {
        async function get_tokens() {
            await get_tokens_from_code(code || "");
            
            
            // router.push('/')
        }
        get_tokens();

    }, [])
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <div>Redirecting</div>
        </BasePage>
    </div>
}