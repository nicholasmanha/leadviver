'use client';

import NavbarWrapper from "./navbar"
import Footer from "./footer"
import Typography from "./Typography"
import HomeAnimator from "./homeanimator"
import {
    CarouselNext,
    CarouselPrevious,
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem
} from "./Carousel"
import { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay"

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

interface ImageComponentInterface {
    reff?: any
}

function ImageComponent({ reff }: ImageComponentInterface) {
    return <div style={{
        display: "inline-block",
        background: "green",
        height: "100%"

    }}>
        <img
            ref={reff} 
            src="/signup_home_imgs/house1.jpg"
            alt="a suburbian home"
            style={{ width: 'auto', height: '100%' }} // optional
        />
    </div>
}

export default function SignUpPage() {
    const final_house_ref = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        final_house_ref.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        final_house_ref.current?.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    };

    return <div >
        <NavbarWrapper />
        <div className="h-20 w-20 bg-pink" onClick={handleClick}>
            hello
        </div>
        <div className=" min-h-screen flex w-full bg-background-padding z-0 relative" >
            <div className="absolute top-0 left-0 h-full" >
                <div style={{
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    height: "100%"
                }}>
                    <ImageComponent />
                    <ImageComponent />
                    <ImageComponent />
                    <ImageComponent />
                    <ImageComponent reff={final_house_ref} />
                </div>
            </div>
            <div className="absolute top-0 left-0 bg-background opacity-100 lg:w-1/2 sm:w-full min-h-screen flex flex-col justify-center">
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
        </div>
        <Footer />
    </div>
}