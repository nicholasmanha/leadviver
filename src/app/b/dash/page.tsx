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



    return <>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Typography className="text-center" variant="h2">Seller Dashboard</Typography>
            <Card title="Reviewed Leads">
            {leads.map((lead) => (
                <Tile>
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
                <Tile>
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