'use client';

import SignWrapper from "@/_components/layout/sign-wrapper/sign-wrapper"
import Typography from "@/_components/ui/Typography"
import { Button } from "@/_components/ui/button"
import { ReactElement } from "react"
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare, FaApple, FaMicrosoft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Input } from "@/_components/ui/input";

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
            Sign in with {name}
        </div>
    </Button>
}

export default function Page() {

    return (
        <SignWrapper>
            <>
                <Typography variant="h3" className='mb-5'>
                    Buyer Sign in
                </Typography>
                <AuthProviderButton logo={<ImGoogle2 />} name="Google" />
                <AuthProviderButton logo={<FaSquareXTwitter />} name="X" />
                <AuthProviderButton logo={<FaFacebookSquare />} name="FaceBook" />
                <AuthProviderButton logo={<FaApple />} name="Apple" />
                <AuthProviderButton logo={<FaMicrosoft />} name="Microsoft" />
                <div className="flex w-full items-center">
                    <hr className="border border-text-secondary/90 w-full" />
                    <Typography className="mx-2 mb-[-2px]" variant="h5" color="secondary">
                        OR
                    </Typography>
                    <hr className="w-full border border-text-secondary/90" />
                </div>

                <div className="my-2 mb-4">

                    <Typography variant="p-bold" className="mb-1">Email</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="Enter your email" />
                    <Typography variant="p-bold" className="mb-1">Password</Typography>
                    <Input className="rounded-2xl mb-2 px-3 text-left" placeholder="Enter your account password" />

                </div>
                <Button className="sm:w-52 w-full">Log in</Button>
            </>
        </SignWrapper>
    )

}