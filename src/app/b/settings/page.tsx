"use client"

import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";
import Tile from "@/_components/tile/tile"
import { LuCheckCircle2 } from "react-icons/lu";
import Card from "@/_components/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/Table"
import { Button } from "@/_components/button";
import { LuDownload } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import { Input } from "@/_components/input";
import { Switch } from "@/_components/Switch";
import { Label } from "@/_components/Label";


export default function Page() {
  return <>
    <NavbarWrapper></NavbarWrapper>
    <BasePage>
      <div className="mb-12">
        <Typography variant="h2">Settings</Typography>
      </div>


      <div className="w-[600px] mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Profile </Typography>
        </div>
        <div className="flex gap-4 mb-8">

          <div className="flex flex-col gap-2 w-full">
            <Typography variant="p" color="secondary"> FIRST NAME </Typography>
            <Input className="" />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Typography variant="p" color="secondary"> LAST NAME </Typography>
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <Typography variant="p" color="secondary"> EMAIL </Typography>
          <div className="relative flex items-center">
            <Input className="w-full" />
            <Typography className="text-text-primary/30 w-full absolute pr-2 text-right pointer-events-none"> Unverified</Typography>
          </div>

        </div>
        <Button size="default" variant="default"><Typography variant="button-2">Apply Changes</Typography></Button>
      </div>

      <div className="w-[600px] mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Payment Plan </Typography>
        </div>

      </div>
      <div className="w-[600px] mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Notifications </Typography>


        </div>
        <div className="flex items-center mb-2">
          <Switch id="airplane-mode" />
          <Label className="mx-2" htmlFor="airplane-mode">Lorem</Label>
        </div>
        <div className="flex items-center mb-2">
          <Switch id="airplane-mode" />
          <Label className="mx-2" htmlFor="airplane-mode">Ipsum</Label>
        </div>

      </div>
      <div className="w-[600px] mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Billing </Typography>
        </div>
        <Card className="m-0" size="small" title="Payment Method">
          <Typography>ee</Typography>
          
        </Card>

      </div>
      <div className="w-[600px] mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Account </Typography>
        </div>

      </div>

    </BasePage>
  </>
}