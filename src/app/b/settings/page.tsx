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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const TableInstance: React.FC = () => {
  return (

    <Table>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Home Address</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead className="text-right">Additional Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>

  );
};

export default function Page() {
  return <>
    <NavbarWrapper></NavbarWrapper>
    <BasePage>
      <div className="mb-12 " >
        <Typography variant="h2" >Settings</Typography>
      </div>


      <div className="sm:w-[600px] w-full mb-12">
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
        <Button size="default" variant="default"><Typography variant="button-2" color="button">Apply Changes</Typography></Button>
      </div>

      <div className="sm:w-[600px] w-full mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Payment Plan </Typography>
        </div>

      </div>
      <div className="sm:w-[600px] w-full mb-12">
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
      <div className="mb-12">
        <div className="mb-8">
          <Typography variant="h4"> Billing </Typography>
        </div>
        <Card className="!mx-0" size="small" title="Payment Method">
          <div className="flex justify-between my-2">
            <div className="flex items-center">
              <img className="w-32" src="/mc_symbol.svg" alt="Example SVG" />
              <div className="flex flex-col">
                <Typography variant="h3">Master Card</Typography>
                <Typography variant="p" color="secondary">
                  **** **** **** 4314 <br />
                  Expires on 1/2/24 <br />
                  johndoe@gmail.com
                </Typography>

              </div>

            </div>
            <Button className="w-24"> <Typography variant="button-3" color="button">Change</Typography> </Button>
          </div>
          <div className="">
            <Button size="default">Add</Button>
          </div>

        </Card>
        <Card className="!mx-0" size="small" title="Invoice">
          <TableInstance />

        </Card>

      </div>
      <div className="mb-12">
        <div className="mb-8">

          <Typography variant="h4"> Account </Typography>

        </div>
        <div className="flex gap-4 w-full">
          <Button className="bg-primary h-14 flex-1"><Typography variant="button-1">Reset Password</Typography></Button>
          <Button className="bg-primary h-14 flex-1"><Typography variant="button-1" className="text-failure">Delete Account</Typography></Button>

        </div>
      </div>

    </BasePage>
  </>
}