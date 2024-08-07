"use client"

import BasePage from "@/_components/layout/basepage";
import NavbarWrapper from "@/_components/layout/navbar";
import Typography from "@/_components/ui/Typography";
import Tile from "@/_components/ui/tile/tile"
import Card from "@/_components/ui/Card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/_components/ui/Table"
import { Button } from "@/_components/ui/button";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/_components/ui/Dropdown"
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

]



export default function Page() {


    const [reviewedView, setReviewedView] = useState("tile")
    const [unreviewedView, setUnreviewedView] = useState("tile")
    return <>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Typography className="text-center" variant="h2">Seller Dashboard</Typography>
            <Card title="Reviewed Leads">
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
                <div className="flex justify-center mt-2">
                    <a href="#">
                        <Typography variant="button-4" color="link">Show More</Typography>

                    </a>

                </div>


            </Card>

            <Card title="Unreviewed Leads" >
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
                            <DropdownMenuRadioGroup value={unreviewedView} onValueChange={setUnreviewedView}>
                                <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>

                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {unreviewedView == "tile" ?
                    <>
                        {leads.map((lead) => (

                            <Tile key={`${lead.date}+${lead.price}+${lead.address}+2`}>
                                <Tile.Title>
                                    <Tile.Left date={lead.date} price={lead.price} address={lead.address} />
                                    <Tile.Right>
                                        <Button className="py-0 h-8">
                                            <Typography variant="button-2" className="text-text-button">Review</Typography>
                                        </Button>
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
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leads.map((lead) => (
                                <TableRow key={`${lead.date}+${lead.price}+${lead.address}+1`}>
                                    <TableCell className="font-medium">{lead.date}</TableCell>
                                    <TableCell>{lead.price}</TableCell>
                                    <TableCell>{lead.address}</TableCell>
                                    <TableCell className="text-right">{lead.notes}</TableCell>
                                    <TableCell className="text-right">
                                        <Typography variant="button-4" color="link">Review</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                }


            </Card>
        </BasePage>
    </>
}