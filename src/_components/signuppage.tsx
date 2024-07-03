import NavbarWrapper from "./navbar"
import Footer from "./footer"
import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"

interface SignUpPageProps {

}

interface AuthProviderProps {
    logo?: ReactElement;
    name?: ReactElement | String;
}

function AuthProviderButton({logo, name}: AuthProviderProps) {
    return <Button className="w-full text-left mb-3">
        <div className="w-full">
            {name}
        </div>
    </Button>
}

export default function SignUpPage() {
    return <div>
        <NavbarWrapper />
        <div className="bg-background opacity-100 lg:w-1/2 sm:w-full min-h-screen flex flex-col ">
            <div className="bg-primary opacity-100 m-10 px-10 py-5 rounded-xl">
                <Typography variant="h3" className='mb-5'>
                    Sign Up
                </Typography>
                <AuthProviderButton name="google"/>


                <Typography className="text-center mt-6 mb-4">
                    Already have an account? <span className="text-url">Log In</span>
                </Typography>
            </div>
        </div>
        <Footer />
    </div>
}