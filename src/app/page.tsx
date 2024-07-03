import Typography from "@/_components/Typography"
import { Button } from "@/_components/button"
import { LuUpload } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";


export default function Home() {

  return (
    <>
      <div className="inline-flex flex-col gap-2">
        
          <Button variant="default" asChild>
            <a href="#">Upload Leads</a>
          </Button>
        

        <Button variant="default" asChild>
          <a href="#"><LuUpload className="mr-1" />Upload CSV</a>
        </Button>
        
        <Button variant="default" asChild>
          <a href="#"><LuDownload className="mr-1" /> <Typography variant="button-4">Download Template CSV</Typography> </a>
        </Button>

        <Button variant="red" size="lg" color="secondary" asChild>
          <a href="#"><Typography variant="button-1" >Selling Leads</Typography> </a>
        </Button>
        
      </div>
      <Typography variant="button-4">Download Template CSV</Typography>
    </>
  );
}
