import {CollapsibleDemo} from "@/_components/tile"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

export default function Page() {
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <CollapsibleDemo></CollapsibleDemo>
        </BasePage>
        
    </div>
}