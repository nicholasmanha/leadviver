import NavbarWrapper from "./navbar"
import Footer from "./footer"
import Typography from "./Typography"
import HomeAnimator from "./homeanimator"


import { Button } from "./button"
import { ReactElement } from "react"
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare, FaApple, FaMicrosoft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


interface SignUpPageProps {

}

interface AuthProviderProps {
    logo?: ReactElement;
    name?: ReactElement | String;
}

function AuthProviderButton({ logo, name }: AuthProviderProps) {
    return <Button className="w-full text-left mb-3">
        <div className="mr-4" style={{ transform: "scale(1.7)" }}>
            {logo}
        </div>
        <div className="w-full">
            Sign up with {name}
        </div>
    </Button>
}

export default function SignUpPage() {
    return <div>
        <NavbarWrapper />
        <div className="flex w-full bg-background-padding">
            <div className="bg-background opacity-100 lg:w-1/2 sm:w-full min-h-screen flex flex-col justify-center">
                <div className="bg-primary opacity-100 mx-10 px-10 py-5 rounded-xl mb-20">
                    <Typography variant="h3" className='mb-5'>
                        Sign Up
                    </Typography>
                    <AuthProviderButton logo={<ImGoogle2 />} name="Google" />
                    <AuthProviderButton logo={<FaSquareXTwitter />} name="X" />
                    <AuthProviderButton logo={<FaFacebookSquare />} name="FaceBook" />
                    <AuthProviderButton logo={<FaApple />} name="Apple" />
                    <AuthProviderButton logo={<FaMicrosoft />} name="Microsoft" />
                    <Typography className="text-center mt-6 mb-4">
                        Already have an account? <span className="text-url">Log In</span>
                    </Typography>
                </div>
            </div>
            <HomeAnimator />
        </div>
        <Footer />
    </div>
}