import Tile from "@/_components/tile/tile"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Typography from "@/_components/Typography";

export default function Page() {
    const left =
        <>
            <div className="flex flex-col">
                <Typography variant="p-bold" color="secondary">816 Lakeview Boulevard</Typography>
                <div>
                    <Typography className="inline-block" variant="h3">$</Typography>
                    <Typography className="inline-block" variant="h5">150k</Typography>
                </div>
            </div>



        </>

    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>

            <Tile left={left} right={left}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, magni ullam? Quas quasi, expedita quod quibusdam, laudantium veritatis placeat, in nisi perspiciatis recusandae dolorum magnam doloremque consequuntur quidem dolorem incidunt?
            </Tile>
        </BasePage>

    </div>
}