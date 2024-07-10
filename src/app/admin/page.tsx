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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/Tab"
import InputSearch from "@/_components/input-search";
import PaginationNavigation from "@/_components/pagin-nav";


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
      <Typography className="text-center" variant="h2">Admin Dashboard</Typography>
      <Card title="User Database">
        <Tabs defaultValue="buyers" >
          <TabsList className="w-[400px]">
            <TabsTrigger className="mr-3" value="buyers"><Typography variant="h5">Buyers</Typography></TabsTrigger>
            <TabsTrigger className="mr-3" value="sellers"><Typography variant="h5">Sellers</Typography></TabsTrigger>
            <TabsTrigger className="mr-3" value="banned"><Typography variant="h5">Banned Users</Typography></TabsTrigger>

            <TabsTrigger className="mr-3" value="admins"><Typography variant="h5">Admins</Typography></TabsTrigger>

          </TabsList>
          <div className="flex mt-3">
            <InputSearch />
            <Button className="h-7">Field</Button>
          </div>

          <TabsContent value="buyers">
            <TableInstance />
            <PaginationNavigation />
          </TabsContent>
          <TabsContent value="sellers">
            <TableInstance />
            <PaginationNavigation />

          </TabsContent>
          <TabsContent value="banned">
            <TableInstance />
            <PaginationNavigation />

          </TabsContent>
          <TabsContent value="admins">
            <TableInstance />
            <PaginationNavigation />

          </TabsContent>
        </Tabs>
      </Card>

      <Card title="Unassigned Leads" >
        <TableInstance />
        <PaginationNavigation />

      </Card>
    </BasePage>
  </>
}