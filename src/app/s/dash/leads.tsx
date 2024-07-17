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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/_components/Dropdown"
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { Input } from "@/_components/input";
const leads = [
  {
    price: 250,
    address: "819 Lakeview Boulevard",
    date: "3/4/23",
    notes: "test"
  },
  {
    price: 250,
    address: "819 Lakeview Boulevard",
    date: "3/4/23",
    notes: "test"
  },
  {
    price: 250,
    address: "819 Lakeview Boulevard",
    date: "3/4/23",
    notes: "test"
  },
  {
    price: 250,
    address: "819 Lakeview Boulevard",
    date: "3/4/23",
    notes: "test"
  },
  {
    price: 250,
    address: "819 Lakeview Boulevard",
    date: "3/4/23",
    notes: "test"
  },
]

interface Lead {
  id: number;
  price: number;
  address: string;
  date: string;
  notes: string;
}

export default function Leads() {

  const [pendingView, setPendingView] = useState("tile")
  const [reviewedView, setReviewedView] = useState("tile")
  const [leads, setLeads] = useState<Lead[]>([
    { id: 1, price: -1, address: '', date: '', notes: '' }
  ]);
  const handleLeadInput = (id: number, field: keyof Lead, value: string) => {
    setLeads(leads.map(lead =>
      lead.id === id ? { ...lead, [field]: value } : lead
    ));
  };
  const addLead = () => {
    const newLead: Lead = {
      id: leads.length + 1,
      price: -1,
      address: '',
      date: '',
      notes: ''
    };
    setLeads([...leads, newLead]);
  };
  return <>
    <Card title="Upload Leads" info="test">
      <Table className="fade">

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"><Typography variant="table-header"> Price</Typography></TableHead>
            <TableHead><Typography variant="table-header"> Home Address</Typography></TableHead>
            <TableHead><Typography variant="table-header">Date</Typography></TableHead>
            <TableHead className="text-right"><Typography variant="table-header"> Additional Notes</Typography></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {leads.map(lead => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium"><Input placeholder="price" onChange={(e) => handleLeadInput(lead.id, 'price', e.target.value)}></Input></TableCell>
              <TableCell><Input placeholder="address" onChange={(e) => handleLeadInput(lead.id, 'address', e.target.value)}></Input></TableCell>
              <TableCell><Input placeholder="dare" onChange={(e) => handleLeadInput(lead.id, 'date', e.target.value)}></Input></TableCell>
              <TableCell className="text-right"><Input placeholder="notes" onChange={(e) => handleLeadInput(lead.id, 'notes', e.target.value)}></Input></TableCell>
            </TableRow>
          ))

          }
          

          <button onClick={addLead}>Add Row</button>
        </TableBody>

      </Table>
      <div className="flex justify-between">
        <div className="inline-flex">
          <Button variant="default" size="sm" className="hidden sm:flex mr-2">
            <div className="flex items-center justify-center "><LuDownload className="w-3 mr-1 h-3" /></div>
            <Typography className="inline-flex mb-[-2px]" variant="button-4">
              Download Template CSV
            </Typography>
          </Button>
          <Button variant="default" size="sm" className="hidden sm:flex mr-2">
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
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="" asChild>
            <div className="relative top-[-35px] ml-2 w-6">
              <LuMenu />
            </div>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Card View</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={pendingView} onValueChange={setPendingView}>
              <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>

            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {pendingView == "tile" ?
        <>
          {leads.map((lead) => (

            <Tile key={`${lead.date}+${lead.price}+${lead.address}+1`}>
              <Tile.Title>
                <Tile.Left date={lead.date} price={lead.price} address={lead.address} />


              </Tile.Title>

              <Tile.Content>
                {lead.notes}
              </Tile.Content>
            </Tile>
          ))}</>
        :
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Additional Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={`${lead.date}+${lead.price}+${lead.address}+1`}>
                <TableCell className="font-medium">{lead.date}</TableCell>
                <TableCell>{lead.price}</TableCell>
                <TableCell>{lead.address}</TableCell>
                <TableCell className="text-right">{lead.notes}</TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>
      }
    </Card>
    <Card title="Reviewed Leads" info="test">


      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="" asChild>
            <div className="relative top-[-35px] ml-2 w-6">
              <LuMenu />
            </div>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Card View</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={reviewedView} onValueChange={setReviewedView}>
              <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>

            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {reviewedView == "tile" ?
        <>
          {leads.map((lead) => (

            <Tile key={`${lead.date}+${lead.price}+${lead.address}+2`}>
              <Tile.Title>
                <Tile.Left date={lead.date} price={lead.price} address={lead.address} />
                <Tile.Right>
                  <div className="flex items-center text-success">
                    <LuCheckCircle2 className="w-6 mx-2 h-6" />
                    <LuCheckCircle2 className="w-6 mx-2 h-6" />
                    <Typography variant="h3" color="danger">&lt;11%</Typography>
                  </div>
                </Tile.Right>

              </Tile.Title>

              <Tile.Content>
                title
              </Tile.Content>
            </Tile>
          ))}</>
        :
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Additional Notes</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={`${lead.date}+${lead.price}+${lead.address}+1`}>
                <TableCell className="font-medium">{lead.date}</TableCell>
                <TableCell>{lead.price}</TableCell>
                <TableCell>{lead.address}</TableCell>
                <TableCell className="text-right">{lead.notes}</TableCell>
                <TableCell className="text-right w-[20px]">
                  <div className="flex items-center text-success">
                    <LuCheckCircle2 className="w-6 mx-2 h-6" />
                  </div>

                </TableCell>
                <TableCell className="text-right w-[20px]">
                  <div className="flex items-center text-success">
                    <LuCheckCircle2 className="w-6 mx-2 h-6" />
                  </div>

                </TableCell>
                <TableCell className="text-right w-[20px]">
                  <Typography variant="h5" color="danger">&lt;11%</Typography>

                </TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      }
    </Card>



  </>
}