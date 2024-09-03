"use client"

import * as React from "react";
import "./tile.css";
import { LuChevronUp } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Collapsible";
import { FC, ReactNode, useState } from "react";
import { createContext, useContext } from 'react';
import Typography from "../Typography";

interface TileProps {
  children: ReactNode;
}

interface TileTitleProps {
  children: ReactNode;
}

interface TileLeftProps {
  price: number;
  address: string;
  zip: string;
}

interface TileRightProps {
  children: ReactNode;
}

interface TileContentProps {
  children: ReactNode;
}

interface TileComponent extends FC<TileProps> {
  Title: FC<TileTitleProps>;
  Left: FC<TileLeftProps>;
  Right: FC<TileRightProps>;
  Content: FC<TileContentProps>;
}

interface TileContextType {
  isOpen: boolean;
}

const TileContext = createContext<TileContextType | undefined>(undefined);

const useTileContext = () => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('useTileContext must be used within a TileProvider');
  }
  return context;
};

// Root tile component
const Tile: TileComponent = ({ children }: TileProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleState = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      onClick={toggleState}
      className="w-full bg-secondary rounded-xl my-1"
    >
      <TileContext.Provider value={{ isOpen }}>
        {/* children is title and content */}
        {children}
      </TileContext.Provider>
    </Collapsible>
  );
};

const Title: FC<TileTitleProps> = ({
  children,
}: TileTitleProps): JSX.Element => {

  const { isOpen } = useTileContext();
  return (
    <div className="flex items-center justify-between space-x-4 px-4 py-2">
      <div className="w-full grid grid-cols-2 items-center">
        {/* children is left and right */}
        {children}
      </div>
      {isOpen ? (
        <LuChevronDown className="h-6 w-6" />
      ) : (
        <LuChevronUp className="h-6 w-6" />
      )}
    </div>
  );
};

const Left: FC<TileLeftProps> = ({
  price, address, zip
}: TileLeftProps): JSX.Element => {

  return (
    <>
      <div>
        <Typography variant="p-bold" className="mb-[-5px] ">{address}</Typography>

        <Typography className="inline" variant="h3">$</Typography><Typography className="inline" variant="h5">{price}k</Typography> <Typography className="hidden sm:inline" >Posted on {zip}</Typography>
      </div>
    </>
  );
};

const Right: FC<TileRightProps> = ({
  children,
}: TileRightProps): JSX.Element => {

  return (
    <div className="inline mr-0 ml-auto float-right">{children}</div>
  );
};

const Content: FC<TileContentProps> = ({
  children,
}: TileContentProps): JSX.Element => {

  return (
    <CollapsibleContent className="CollapsibleContent bg-secondary-light rounded-b-xl  border border-secondary">
      <div className="border-2 border-secondary-light px-4 py-2 font-mono text-sm shadow-sm">{children}</div>
    </CollapsibleContent>
  );
};


Tile.Title = Title;
Tile.Left = Left;
Tile.Right = Right;
Tile.Content = Content

export default Tile;