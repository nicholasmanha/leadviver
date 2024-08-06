import Link from "next/link"
import Typography from "@/_components/ui/Typography"

interface NavbarWrapperProps {
    children?: any
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
    return <div className="bg-navfoot h-14 flex items-center z-50">
        <Typography variant="h4" className="mx-8">
            <Link href="/">LeadViver.com</Link>
        </Typography>
        {children}
    </div>
}