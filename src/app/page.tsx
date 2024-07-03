import Typography from "@/_components/Typography"
import { Button } from "@/_components/button"
import { LuUpload } from "react-icons/lu";
import { NavigationMenu } from "@/_components/navbar";
import BasePage from "@/_components/basepage";

export default function Home() {

  return (
    <>
      {/* <NavigationMenu/> */}
      <BasePage>
        <Typography variant="p">Landing Page</Typography>
      </BasePage>
    </>
  );
}
