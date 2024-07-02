import Typography from "@/_components/Typography"
import { Button } from "@/_components/button"
import { LuUpload } from "react-icons/lu";

export default function Home() {
  
  return (
    <>
    <div className="inline-flex flex-col ...">
      <Button variant="default" asChild>
        <a href="#"><LuUpload className="mr-1"/> Upload Leads</a>
      </Button>
      <Button variant="default" size="icon" asChild>
        <a href="#">test</a>
      </Button>
      <div className="inline-flex">
        <Button variant="default" className="inline-flex" asChild>
          <a href="#">test</a>
        </Button>
      </div>
      
    </div>
    
    </>
  );
}
