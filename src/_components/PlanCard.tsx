import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"


interface PlanCardProps {
  plan?: ReactElement | String;
  price?: ReactElement | String;
  children?: any
}

export default function PlanCard({ plan, price, children }: PlanCardProps) {
  return <div className="bg-primary w-full mx-4 rounded-2xl flex flex-col justify-center p-4">
    <div className="text-center">
      <Typography variant="h3">{plan} Plan</Typography>
      <div>
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
      <Button variant="default" size="lg" className="mt-8 w-44"><Typography variant="h3" color="button">Subscribe</Typography></Button>
    </div>
  </div>
}
