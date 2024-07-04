import NavbarWrapper from "./navbar"

import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"
import { Input } from "./input"

interface PlanCardProps {
  plan?: ReactElement | String;
  price?: ReactElement | String;
  children?: any
}

function PlanCard({ plan, price, children }: PlanCardProps) {
  return <div className="bg-primary w-full mx-4 rounded-2xl flex flex-col justify-center">
    <div className="text-center">
      <Typography variant="h3">{plan} Plan</Typography>
      <div className="">
        <Typography className="inline" variant="h1">{price}</Typography>
        <Typography className="inline" variant="h3" color="secondary">/mo</Typography>
      </div>
    </div>

    <div className="w-full px-8">
      <div className="float-left">
        <Typography variant="h4">Features</Typography>
        <Typography className="inline" variant="p">{children}</Typography>
      </div>
    </div>
    <div className="flex justify-center">
      <Button variant="default" size="lg" className="mt-8 w-44"><Typography variant="h3">Subscribe</Typography></Button>
    </div>




  </div>
}

export default function PaymentPlanPage() {
  return <div>

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
}