"use client"

import BasePage from "@/_components/layout/basepage";
import NavbarWrapper from "@/_components/layout/navbar";
import Typography from "@/_components/ui/Typography";
import Leads from "./leads"
import Stats from "./stats"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/_components/ui/Tab"


export default function Page() {



    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Typography className="text-center" variant="h2">Seller Dashboard</Typography>
            <Tabs defaultValue="leads" >
                <TabsList className="w-[400px]">
                    <TabsTrigger className="mx-2" value="leads"><Typography variant="h5">Your Leads</Typography></TabsTrigger>
                    <TabsTrigger value="stats"><Typography variant="h5">Your Stats</Typography></TabsTrigger>
                </TabsList>
                <TabsContent value="leads">
                <Leads/>
                    
                </TabsContent>
                <TabsContent value="stats">
                <Stats/>

                </TabsContent>
            </Tabs>
        </BasePage>

    </div>
}