"use client"

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { route_to_my_dash } from "@/utils/routing_utils";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        route_to_my_dash(router);
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