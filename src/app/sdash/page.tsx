import Tile from "@/_components/tile/tile"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";
import { LuCheckCircle2 } from "react-icons/lu";
import Card from "@/_components/Card";

export default function Page() {
    const left =
        <>
            <div className="flex flex-col">
                <Typography variant="p-bold" color="secondary">816 Lakeview Boulevard</Typography>
                <div>
                    <Typography className="inline-block" variant="h3">$</Typography>
                    <Typography className="inline-block mr-1" variant="h5">150k</Typography>
                    <Typography className="inline-block" variant="p" color="secondary">Posted on 1/2/23</Typography>
                </div>
            </div>
        </>

    const right =
        <>
            <div className="flex text-success"><LuCheckCircle2 className="w-6 mx-2 h-6" /><LuCheckCircle2 className="w-6 mx-2 h-6" /></div>
        </>

    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <Card title="test" info="ello">
                <Tile left={left} right={right}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, magni ullam? Quas quasi, expedita quod quibusdam, laudantium veritatis placeat, in nisi perspiciatis recusandae dolorum magnam doloremque consequuntur quidem dolorem incidunt?
                </Tile>
                <Tile left={left} right={right}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, magni ullam? Quas quasi, expedita quod quibusdam, laudantium veritatis placeat, in nisi perspiciatis recusandae dolorum magnam doloremque consequuntur quidem dolorem incidunt?
                </Tile>
                <Tile left={left} right={right}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, magni ullam? Quas quasi, expedita quod quibusdam, laudantium veritatis placeat, in nisi perspiciatis recusandae dolorum magnam doloremque consequuntur quidem dolorem incidunt?
                </Tile>
            </Card>
        </BasePage>

    </div>
}