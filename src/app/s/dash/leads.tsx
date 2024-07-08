"use client"
import Tile from "@/_components/tile/tile"
import Typography from "@/_components/Typography";
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

export default function Leads() {



  return <>




    <Card title="Upload Leads" info="test">
      <Table className="fade">

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"><Typography variant="table-header"> Name</Typography></TableHead>
            <TableHead><Typography variant="table-header"> Home Address</Typography></TableHead>
            <TableHead><Typography variant="table-header"> Phone Number</Typography></TableHead>
            <TableHead className="text-right"><Typography variant="table-header"> Additional Notes</Typography></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>


          <TableRow key="add">
            <TableCell className="font-medium"><Typography color="secondary">add</Typography></TableCell>
            <TableCell>add</TableCell>
            <TableCell>add</TableCell>
            <TableCell className="text-right">add</TableCell>
          </TableRow>

        </TableBody>

      </Table>
      <div className="flex justify-between">
        <div className="inline-flex">
          <Button variant="default" size="sm" className="mr-2">
            <div className="flex items-center justify-center "><LuDownload className="w-3 mr-1 h-3" /></div>
            <Typography className="inline-flex mb-[-2px]" variant="button-4">
              Download Template CSV
            </Typography>
          </Button>
          <Button variant="default" size="sm" className="mr-2">
            <div className="flex items-center justify-center "><LuDownload className="w-3 mr-1 h-3" /></div>
            <Typography className="inline-flex mb-[-2px]" variant="button-4">
              Upload CSV
            </Typography>
          </Button>
        </div>
        <div className="inline-flex">
          <Button variant="default" size="sm" className="ml-2">
            <div className="flex items-center justify-center "><LuPlusCircle className="w-3 mr-1 h-3" /></div>
            <Typography className="inline-flex mb-[-2px]" variant="button-4">
              Upload Leads
            </Typography>
          </Button>

        </div>
      </div>

    </Card>
    <Card title="Pending Leads" info="test">
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
    </Card>
    <Card title="Reviewed Leads" info="test">
      <Tile>
        <Tile.Title>
          <Tile.Left date="5/3/24" price={150} address="819 Lakeview Boulevard" />

          <Tile.Right>
            <div className="flex items-center justify-center text-success">
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <Typography variant="h3" color="danger">&lt;35%</Typography></div>
          </Tile.Right>
        </Tile.Title>

        <Tile.Content>
          title
        </Tile.Content>
      </Tile>
      <Tile>
        <Tile.Title>
          <Tile.Left date="5/3/24" price={150} address="819 Lakeview Boulevard" />

          <Tile.Right>
            <div className="flex items-center justify-center text-success">
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <Typography variant="h3" color="danger">&lt;35%</Typography></div>
          </Tile.Right>
        </Tile.Title>

        <Tile.Content>
          title
        </Tile.Content>
      </Tile>
      <Tile>
        <Tile.Title>
          <Tile.Left date="5/3/24" price={150} address="819 Lakeview Boulevard" />

          <Tile.Right>
            <div className="flex items-center justify-center text-success">
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <Typography variant="h3" color="danger">&lt;35%</Typography></div>
          </Tile.Right>
        </Tile.Title>

        <Tile.Content>
          title
        </Tile.Content>
      </Tile>
      <Tile>
        <Tile.Title>
          <Tile.Left date="5/3/24" price={150} address="819 Lakeview Boulevard" />

          <Tile.Right>
            <div className="flex items-center justify-center text-success">
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <Typography variant="h3" color="danger">&lt;35%</Typography></div>
          </Tile.Right>
        </Tile.Title>

        <Tile.Content>
          title
        </Tile.Content>
      </Tile>
      <Tile>
        <Tile.Title>
          <Tile.Left date="5/3/24" price={150} address="819 Lakeview Boulevard" />

          <Tile.Right>
            <div className="flex items-center justify-center text-success">
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <LuCheckCircle2 className="w-6 mx-2 h-6" />
              <Typography variant="h3" color="danger">&lt;35%</Typography></div>
          </Tile.Right>
        </Tile.Title>

        <Tile.Content>
          title
        </Tile.Content>
      </Tile>
    </Card>



  </>
}