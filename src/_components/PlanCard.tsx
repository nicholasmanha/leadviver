"use client"
import { useRouter } from "next/navigation";
import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"


interface PlanCardProps {
  plan?: ReactElement | String;
  price?: ReactElement | String;
  url: String;
  children?: any
}

export default function PlanCard({ plan, price, url, children }: PlanCardProps) {
  const router = useRouter();

  const handleRedirect = (url: String) => {
    const string_url = String(url);
    router.push(string_url);
  }

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
      <Button onClick={() => handleRedirect(url)} variant="default" size="lg" className="mt-8 w-44"><Typography variant="h3">Subscribe</Typography></Button>
    </div>
  </div>
}
