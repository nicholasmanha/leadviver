import Link from "next/link";
import Typography from "@/_components/ui/Typography";

interface NavbarWrapperProps {
  children?: any;
  absolute?: boolean;
}

export default function NavbarWrapper({
  children,
  absolute=false,
}: NavbarWrapperProps) {
  if (absolute) {
    return (
        <div className="absolute bg-navfoot inset-x-0 h-14 flex items-center z-50">
          <Typography variant="h4" className=" text-text-primary mx-8">
            <Link href="/">LeadViver.com</Link>
          </Typography>
          {children}
        </div>
      );
  } else {
    return (
      <div className="bg-navfoot h-14 flex items-center z-50">
        <Typography variant="h4" className=" text-text-primary mx-8">
          <Link href="/">LeadViver.com</Link>
        </Typography>
        {children}
      </div>
    );
  }
}
