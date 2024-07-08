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
import { createContext, useContext} from 'react';

interface TileProps {
  children: ReactNode;
}

interface TileLeftProps {
  price: number;
  address: string;
  children: ReactNode;
}

interface TileContentProps {
  children: ReactNode;
}

interface TileComponent extends FC<TileProps> {
  Left: FC<TileLeftProps>;
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
      className="w-full bg-stone-600 rounded-xl my-1"
    >
      
      <TileContext.Provider value={{ isOpen }}>
      {children}
    </TileContext.Provider>
      
    </Collapsible>
  );
};

/**
 * The AccordionItem component.
 *
 * @param {AccordionItemProps} props - The component props.
 * @returns {JSX.Element} The rendered AccordionItem component.
 */
const Left: FC<TileLeftProps> = ({
  children,
}: TileLeftProps): JSX.Element => {
  /**
   * Handle the click event on an accordion item button.
   */
  
  const { isOpen } = useTileContext();
  return (
    <div className="flex items-center justify-between space-x-4 px-4 py-2">
        <div className="w-full grid grid-cols-2 items-center">
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

const Content: FC<TileContentProps> = ({
  children,
}: TileContentProps): JSX.Element => {
  /**
   * Handle the click event on an accordion item button.
   */
  

  return (
    <CollapsibleContent className="CollapsibleContent bg-secondary-light rounded-b-md">
        <div className="px-4 py-2 font-mono text-sm shadow-sm">{children}</div>
      </CollapsibleContent>
  );
};

// Attach the AccordionItem component as a property of the Accordion component.
Tile.Left = Left;
Tile.Content = Content

export default Tile;