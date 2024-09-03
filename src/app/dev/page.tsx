"use client"

import BasePage from "@/_components/layout/basepage";
import NavbarWrapper from "@/_components/layout/navbar";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { route_to_my_dash } from "@/utils/routing_utils";
import { what_is_my_type } from "@/utils/api_utils";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        async function run() {
            const res = await what_is_my_type();
        }
        run()
    })

    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <div>
                This page is for running tests (such as http requests) without
                worrying about impacting the functionality of an actual page
            </div>
        </BasePage>
    </div>
}