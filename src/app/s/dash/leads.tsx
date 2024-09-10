"use client";
import "./form.css";
import FormInput from "@/_components/ui/FormInput";
import Tile from "@/_components/ui/tile/tile";
import Typography from "@/_components/ui/Typography";
import { LuCheckCircle2, LuFormInput } from "react-icons/lu";
import Card from "@/_components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/Table";
import { Button } from "@/_components/ui/button";
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
} from "@/_components/ui/Dropdown";
import { LuMenu } from "react-icons/lu";
import { useState, ChangeEvent, useEffect } from "react";
import { Input } from "@/_components/ui/input";
import { upload_leads } from "@/utils/api_utils";

const seeded_leads = [
  {
    id: 1,
    price: "250",
    address: "819 Lakeview Boulevard",
    zip: "3/4/23",
    notes: "test",
  },
  {
    id: 2,
    price: "250",
    address: "819 Lakeview Boulevard",
    zip: "3/4/23",
    notes: "test",
  },
  {
    id: 3,
    price: "250",
    address: "819 Lakeview Boulevard",
    zip: "3/4/23",
    notes: "test",
  },
  {
    id: 4,
    price: "250",
    address: "819 Lakeview Boulevard",
    zip: "3/4/23",
    notes: "test",
  },
  {
    id: 5,
    price: "250",
    address: "819 Lakeview Boulevard",
    zip: "3/4/23",
    notes: "test",
  },
];

interface Lead {
  id: number;
  price: number | string;
  address: string;
  zip: string;
  name: string;
  phone: string;
  notes: string;
  addable: boolean;
}

export default function Leads() {
  const [pendingView, setPendingView] = useState("tile");
  const [reviewedView, setReviewedView] = useState("tile");
  const [valid, setValid] = useState(true);

  const isValidPrice = /^\d*$/;

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      price: "",
      address: "",
      zip: "",
      name: "",
      phone: "",
      notes: "",
      addable: true,
    },
  ]);

  const inputs = [
    {
      id: 1,
      name: "price",
      type: "text",
      placeholder: "Price",
      errorMessage: "error in price",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "error in address",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 3,
      name: "zip",
      type: "text",
      placeholder: "Zip",
      errorMessage: "error in Zip",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 4,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "error in name",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      errorMessage: "error in phone",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
    {
      id: 6,
      name: "notes",
      type: "text",
      placeholder: "Notes",
      errorMessage: "error in notes",
      pattern: "^(0|[1-9][0-9]*)$",
      required: true,
    },
  ];

  useEffect(() => {
    const allFieldsFilled =
      leads[leads.length - 1].price !== "" &&
      leads[leads.length - 1].address &&
      leads[leads.length - 1].zip &&
      leads[leads.length - 1].notes;
    // const allFilled = leads.every(lead => lead.id === Math.max(...leads.map(lead => lead.id)) && lead.price !== '' && lead.address && lead.zip && lead.notes);
    if (allFieldsFilled) {
      // if leads.length != 0, then find the max id and add 1, otherwise make it 1
      const newId = leads.length
        ? Math.max(...leads.map((lead) => lead.id)) + 1
        : 1;

      // add new lead to leads array
      setLeads([
        ...leads,
        {
          id: newId,
          price: "",
          address: "",
          zip: "",
          name: "",
          phone: "",
          notes: "",
          addable: true,
        },
      ]);
    }

    leads.forEach((lead) => {
      // if the leads list doesnt just contain 1 lead and if the current lead isnt the last and all fields are empty
      if (
        leads.length !== 1 &&
        leads.indexOf(lead) !== leads.length - 1 &&
        lead.price === "" &&
        !lead.address &&
        !lead.zip &&
        !lead.notes
      ) {
        setLeads(leads.filter((leadInst) => leadInst.id !== lead.id));
      }
    });
  }, [leads]);

  const handleInputChange = (
    id: number,
    field: keyof Lead,
    value: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputElement = e.target;
    setValid(inputElement.checkValidity());

    setLeads(
      leads.map(
        (lead) =>
          // if curr lead id is equal to the id of the input, then check if the field is the
          // price then check if the value is empty then make it a string and if not then turn
          // it into a number. If the field isnt the price field then just return the value,
          // if the lead id isnt equal to the lead id, then just return the lead
          lead.id === id
            ? {
                ...lead,
                [field]:
                  field === "price"
                    ? value === ""
                      ? ""
                      : Number(value)
                    : value,
              }
            : lead

        // if field is price:
        //    if value is ""
        //        return ""
        //    else
        //
        //        return value.toInt()
        //
        // else
        //    return value
      )
    );
  };

  const outputToConsole = () => {
    console.log(leads.slice(0, -1));
  };

  return (
    <>
      <Card title="Upload Leads" info="test">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Typography variant="table-header"> Price</Typography>
              </TableHead>
              <TableHead>
                <Typography variant="table-header"> Home Address</Typography>
              </TableHead>
              <TableHead>
                <Typography variant="table-header">Zip</Typography>
              </TableHead>
              <TableHead>
                <Typography variant="table-header">Name</Typography>
              </TableHead>
              <TableHead>
                <Typography variant="table-header">Phone Number</Typography>
              </TableHead>
              <TableHead className="text-right">
                <Typography variant="table-header">
                  {" "}
                  Additional Notes
                </Typography>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                {inputs.map((input) => (
                  <TableCell key={input.id}>
                    <FormInput
                      key={input.id}
                      {...input}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(
                          lead.id,
                          input.name as keyof Lead,
                          e.target.value,
                          e
                        )
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between">
          <div className="inline-flex">
            <Button variant="default" size="sm" className="hidden sm:flex mr-2">
              <div className="flex items-center justify-center ">
                <LuDownload className="w-3 mr-1 h-3" />
              </div>
              <Typography
                className="inline-flex mb-[-2px]"
                variant="button-4"
                color="button"
              >
                Download Template CSV
              </Typography>
            </Button>
            <Button variant="default" size="sm" className="hidden sm:flex mr-2">
              <div className="flex items-center justify-center ">
                <LuDownload className="w-3 mr-1 h-3" />
              </div>
              <Typography
                className="inline-flex mb-[-2px]"
                variant="button-4"
                color="button"
              >
                Upload CSV
              </Typography>
            </Button>
          </div>
          <div className="inline-flex">
            {valid ? (
              <>
                <Button
                  onClick={() => upload_leads(leads)}
                  variant="default"
                  size="sm"
                  className="ml-2"
                >
                  <div className="flex items-center justify-center ">
                    <LuPlusCircle className="w-3 mr-1 h-3" />
                  </div>
                  <Typography
                    className="inline-flex mb-[-2px] text-white"
                    variant="button-4"
                  >
                    Upload Leads
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => upload_leads(leads)}
                  variant="muted"
                  size="sm"
                  className="ml-2"
                >
                  <div className="flex items-center justify-center ">
                    <LuPlusCircle className="w-3 mr-1 h-3" />
                  </div>
                  <Typography
                    className="inline-flex mb-[-2px] text-white"
                    variant="button-4"
                  >
                    Upload Leads
                  </Typography>
                </Button>
              </>
            )}
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
              <DropdownMenuRadioGroup
                value={pendingView}
                onValueChange={setPendingView}
              >
                <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="table">
                  Table
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {pendingView == "tile" ? (
          <>
            {seeded_leads.map((lead) => (
              <Tile key={lead.id}>
                <Tile.Title>
                  <Tile.Left
                    zip={lead.zip}
                    price={lead.price}
                    address={lead.address}
                  />
                </Tile.Title>

                <Tile.Content>{lead.notes}</Tile.Content>
              </Tile>
            ))}
          </>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Zip</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Additional Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seeded_leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.zip}</TableCell>
                  <TableCell>{lead.price}</TableCell>
                  <TableCell>{lead.address}</TableCell>
                  <TableCell className="text-right">{lead.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
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
              <DropdownMenuRadioGroup
                value={reviewedView}
                onValueChange={setReviewedView}
              >
                <DropdownMenuRadioItem value="tile">Tile</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="table">
                  Table
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {reviewedView == "tile" ? (
          <>
            {seeded_leads.map((lead) => (
              <Tile key={lead.id}>
                <Tile.Title>
                  <Tile.Left
                    zip={lead.zip}
                    price={lead.price}
                    address={lead.address}
                  />
                  <Tile.Right>
                    <div className="flex items-center text-success">
                      <LuCheckCircle2 className="w-6 mx-2 h-6" />
                      <LuCheckCircle2 className="w-6 mx-2 h-6" />
                      <Typography variant="h3" color="danger">
                        &lt;11%
                      </Typography>
                    </div>
                  </Tile.Right>
                </Tile.Title>

                <Tile.Content>title</Tile.Content>
              </Tile>
            ))}
          </>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Zip</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Additional Notes</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seeded_leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.zip}</TableCell>
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
                    <Typography variant="h5" color="danger">
                      &lt;11%
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </>
  );
}
