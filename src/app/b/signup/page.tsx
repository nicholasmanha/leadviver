'use client';

import SignWrapper from "@/_components/layout/sign-wrapper/sign-wrapper"
import Typography from "@/_components/ui/Typography"
import { Button } from "@/_components/ui/button"
import { ReactElement } from "react"
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare, FaApple, FaMicrosoft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Input } from "@/_components/ui/input";
import Link from "next/link";

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

export default function Page() {

    return (
        <SignWrapper>
            <>
                <Typography variant="h3" className='mb-5'>
                    Buyer Sign up
                </Typography>
                <AuthProviderButton logo={<ImGoogle2 />} name="Google" />
                <AuthProviderButton logo={<FaSquareXTwitter />} name="X" />
                <AuthProviderButton logo={<FaFacebookSquare />} name="FaceBook" />
                <AuthProviderButton logo={<FaApple />} name="Apple" />
                <AuthProviderButton logo={<FaMicrosoft />} name="Microsoft" />
                <div className="flex w-full items-center">
                    <hr className="border border-text-secondary w-full" /><Typography className="mx-2 mb-[-2px]" variant="h5" color="secondary">OR</Typography><hr className="w-full border border-text-secondary" />
                </div>

                <div className="my-2 mb-4">
                    <Typography variant="p-bold" className="mb-1">Name</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="Enter your name" />
                    <Typography variant="p-bold" className="mb-1">Email</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="Enter your email" />
                    <Typography variant="p-bold" className="mb-1">Password</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="Enter your account password" />
                    <Typography variant="p-bold" className="mb-1">Country</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="United States" />

                </div>
                <Button className="sm:w-52 w-full">Register</Button>

                <Typography className="text-center mt-6 mb-4">
                    Already have an account? <Link href="/b/signin"><span className="hover:underline hover:text-blue-800 visited:text-purple-600 text-url">Log In</span></Link>
                </Typography>
            </>
        </SignWrapper>
    )

}