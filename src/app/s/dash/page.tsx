"use client"

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";
import Leads from "./leads"
import Stats from "./stats"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/_components/Tab"


function convertStringToDict(input: string): { [key: string]: string } {
    let cleaned_str = input.trim();
    if (cleaned_str.length > 0) {
        cleaned_str = cleaned_str[0] === "#" ? cleaned_str.slice(1) : cleaned_str;
    }

    const dict: { [key: string]: string } = {};
    const pairs = cleaned_str.split('&');
    
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        dict[key] = value;
    });

    return dict;
}

export default function Page() {
    
    
    // const searchParams = useSearchParams();
    // const paramValue = searchParams?.get('access_token');

    // console.log(paramValue);

    const hash = (window && window.location.hash) || null;
    let tokens = {};
    try {
        tokens = convertStringToDict(hash ?? "");
        console.log(tokens)
    } catch (e) {}



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