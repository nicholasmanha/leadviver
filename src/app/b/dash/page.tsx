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
    },
    {
        price: 250,
        address: "819 Lakeview Boulevard",
        date: "3/4/23",
    },
    {
        price: 250,
        address: "819 Lakeview Boulevard",
        date: "3/4/23",
    },
    {
        price: 250,
        address: "819 Lakeview Boulevard",
        date: "3/4/23",
    },
    {
        price: 250,
        address: "819 Lakeview Boulevard",
        date: "3/4/23",
    },
]



export default function Page() {


    const [position, setPosition] = useState("bottom")
    return <>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Typography className="text-center" variant="h2">Seller Dashboard</Typography>
            <Card title="Reviewed Leads">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <LuMenu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                {leads.map((lead) => (
                    <Tile key={`${lead.date}+${lead.price}+${lead.address}+1`}>
                        <Tile.Title>
                            <Tile.Left date={lead.date} price={lead.price} address={lead.address} />


                        </Tile.Title>

                        <Tile.Content>
                            title
                        </Tile.Content>
                    </Tile>
                ))}

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