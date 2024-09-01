'use client'

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';


import {
    get_tokens_from_code,
    what_is_my_type
} from "@/utils/api_utils";

// https://xu57qold1d.execute-api.us-west-1.amazonaws.com/init/cognito_auth_ping
// idtoken: eyJraWQiOiJWMktyRUFhalVEbEU3ZjAyUUxtRzVLbmhRaWpoWXJqbmFBcFdiNGNuVVFRPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaDFNYjh3V2thXzI2OTJhaUhjZS1tZyIsInN1YiI6ImU5NTk3OThlLWYwMDEtNzA1YS1jMTg1LTM2YzRkOTQyOWEyNSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9BeVg2cFdwanAiLCJjb2duaXRvOnVzZXJuYW1lIjoiZTk1OTc5OGUtZjAwMS03MDVhLWMxODUtMzZjNGQ5NDI5YTI1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYW5ndXMiLCJvcmlnaW5fanRpIjoiMGQ5MjYzMzItZDdkMC00NDU3LWExYTctN2NlY2RiMTVlOGJiIiwiYXVkIjoiNDRsNmp2aDZ2OTFjM2xvNms3bzBhdWQ1cHMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcyNDk3MzUzMSwiZXhwIjoxNzI1MDU5OTMxLCJpYXQiOjE3MjQ5NzM1MzEsImp0aSI6IjU2NDI2MzFlLTE5YWQtNGNmYS05ZDNjLTY1ZjI2NDQxOTg3OSIsImVtYWlsIjoiYW5ndXNicm93bjE5MzNAZ21haWwuY29tIn0.cc2AEkCSs0FpuQtMHtDACw-j37K7L4k9m2fvq2CPnhK5Stuq_AFRZ3vvx_4LnCIPDhkiva5UWGclSxw6iqILILPrbwRKU_9PRaS2F2ipEtZfttKTp4FPHID64Y81AB3cd2TjmrbjN7s3Y_WUZpGQQ0vgIigcNgtaIP_fSyFny3XgoHFUymyXfjgA5mCPXwOfEk0yyz0s70MmXkyeDlYDPHP5IomxrKy2Ebyp_W3d-0cKS4IgGbDijutAxqwg_V8IgC5gZdNiKpmnZJ_2c3C1JQdqoE1twu4INTcPLwg1zkNG691aAIpwjIp8U2NjAZvCiriKIusA6GmCRf3soKrEOg
// access_token: eyJraWQiOiJxTlE1UDk4Y0ZSMXpBemZ2TlwvOGtnRVluYXVlVUQ3MzR1cGhJTUtEUnV3VT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlOTU5Nzk4ZS1mMDAxLTcwNWEtYzE4NS0zNmM0ZDk0MjlhMjUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9BeVg2cFdwanAiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0NGw2anZoNnY5MWMzbG82azdvMGF1ZDVwcyIsIm9yaWdpbl9qdGkiOiIwZDkyNjMzMi1kN2QwLTQ0NTctYTFhNy03Y2VjZGIxNWU4YmIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzI0OTczNTMxLCJleHAiOjE3MjUwNTk5MzEsImlhdCI6MTcyNDk3MzUzMSwianRpIjoiNGM2NjVmYzAtZmJjYS00MmY2LWEzMTctODcxMDVmMWFlMDI5IiwidXNlcm5hbWUiOiJlOTU5Nzk4ZS1mMDAxLTcwNWEtYzE4NS0zNmM0ZDk0MjlhMjUifQ.KrlGQmzXWdFVaOXIAITGHa5faO6hITJcHWsUOCaqnEvXG6_5UW8l3FV7zbelPaSwlrGBQkfIGNcc9jKjxHJoNQ7h1d4t3kTYawYhoUTzdlv3Gl6PxKAky-vMBVY4suDAh-x-MOAc84kYqxRzERHLbG4LDAfKrUHeuNfajPSRKhzABRdjTtruUTgbvGkOSsUgm7baRMZiwVM_IwtiXQVp1f3yrl96R4y4FVP5IxqOfhMGdNL3Qz6kKt2N4Dk3K5hodvElDcKCV3BksFoZ8KB8u_9sfwDGXvm-g7aHgzDE2ZKTrPBU46J6VFrKzKAO93I5xEcpsmKFeL5zVHQG68YCVQ

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
                localStorage.setItem("id_token", tokens["id_token"])
                console.log(tokens["id_token"])
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
                        break;
                }

            } catch(e) {
                console.error(e)
            }
            
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