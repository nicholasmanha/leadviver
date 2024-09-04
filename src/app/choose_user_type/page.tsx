'use client'

import BasePage from "@/_components/layout/basepage";
import Typography from "@/_components/ui/Typography";
import { Button } from "@/_components/ui/button";
import { useRouter } from 'next/navigation';
import { 
    choose_lead_selling_type
 } from "@/utils/api_utils";

export default function Page() {
    const router = useRouter();

    const choose_selling_leads  = async () => {
        choose_lead_selling_type(router, "seller");
    }
    
    const choose_buying_leads  = async () => {
        choose_lead_selling_type(router, "buyer");
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