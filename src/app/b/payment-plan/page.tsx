"use client"
import BasePage from "@/_components/layout/basepage";
import NavbarWrapper from "@/_components/layout/navbar";
import Typography from "@/_components/ui/Typography";
import { Input } from "@/_components/ui/input";
import Price_Table from "./price_table";


export default function Page() {
    
    return <div>
        <NavbarWrapper absolute></NavbarWrapper>
        <BasePage>
            <div>

                <div className="sm:w-full h-screen flex flex-col items-center justify-center py-40">

                    <Typography variant="h3" className='text-center mb-2'>
                        Choose what works for you
                    </Typography>

                    <Typography variant="subtitle" color="secondary" className='text-center mb-5'>
                        Start with entering a zip code to see rates
                    </Typography>
                    <div className="flex justify-center ">
                        <Input className="w-40 mb-2 text-center" type="text" placeholder="Zip"></Input>
                    </div>
                    <Price_Table/>
                </div>

            </div>
        </BasePage>

    </div>
}