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
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
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



export default function Page() {


    const [view, setView] = useState("tile")
    return <>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Typography className="text-center" variant="h2">Seller Dashboard</Typography>
            <Card title="Reviewed Leads">
                <div className="flex justify-end">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <div className="w-6">
                                <LuMenu />
                            </div>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Card View</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={view} onValueChange={setView}>
                                <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>

                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


                {view == "tile" ?
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

            <Card title="Unreviewed Leads" >
                {leads.map((lead) => (
                    <Tile key={`${lead.date}+${lead.price}+${lead.address}+2`}>
                        <Tile.Title>
                            <Tile.Left date={lead.date} price={lead.price} address={lead.address} />
                            <Tile.Right>
                                <Button className="py-0 h-8">
                                    <Typography variant="h5">Review</Typography>
                                </Button>
                            </Tile.Right>

                        </Tile.Title>

                        <Tile.Content>
                            title
                        </Tile.Content>
                    </Tile>
                ))}

            </Card>
        </BasePage>
    </>
}