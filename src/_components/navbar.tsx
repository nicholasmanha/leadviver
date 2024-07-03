import Typography from "./Typography"

interface NavbarWrapperProps {
    children?: any
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
    return <div className="bg-navfoot h-14 flex items-center z-50">
        <Typography variant="h4" className="mx-8">
            LeadViver.com
        </Typography>
        {children}
    </div>
}