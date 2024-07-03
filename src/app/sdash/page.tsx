import {CollapsibleDemo} from "@/_components/tile/tile"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

export default function Page() {
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <CollapsibleDemo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officiis, obcaecati qui rerum laudantium ad delectus totam sunt blanditiis eaque deleniti error, commodi magni hic laborum adipisci culpa, cum quidem!</CollapsibleDemo>
        </BasePage>
        
    </div>
}