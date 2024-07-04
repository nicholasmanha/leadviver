import PaymentPlanPage from "@/_components/PlanCard"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";
import { Input } from "@/_components/input";
import PlanCard from "@/_components/PlanCard";

export default function Page() {
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <div>

                <div className="sm:w-full h-screen min-h-screen flex flex-col justify-center py-40">

                    <Typography variant="h3" className='text-center mb-2'>
                        Choose what works for you
                    </Typography>

                    <Typography variant="subtitle" color="secondary" className='text-center mb-5'>
                        Start with entering a zip code to see rates
                    </Typography>
                    <div className="flex justify-center ">
                        <Input className="w-40 mb-2" type="text" placeholder="Zip"></Input>
                    </div>

                    <div className="flex justify-evenly my-4 flex-1">
                        <PlanCard plan="Basic" price="349">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
                        <PlanCard plan="Silver" price="589">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
                        <PlanCard plan="Gold" price="999">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>

                    </div>




                </div>

            </div>
        </BasePage>

    </div>
}