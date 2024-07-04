'use client';

import NavbarWrapper from "./navbar"
import Footer from "./footer"
import Typography from "./Typography"

import "./signuppagecss.css"
import { useRef, useEffect, useState } from "react";
import { Button } from "./button"
import { ReactElement } from "react"
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare, FaApple, FaMicrosoft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


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

interface ImageComponentProps {
    filename: string;
}

function ImageComponent({ filename }: ImageComponentProps) {

    return <div className="image_slider w-40 z-0"
        style={{
            backgroundImage: `url("/signup_home_imgs/${filename}")`,
            backgroundSize: "cover"
        }}
    >
    </div>
}

const house_filenames = [
    "house1.jpg",
    "house2.jpg",
    "house3.jpg",
    "house4.jpg",
    "house5.jpg",
    "house6.jpg",
]

interface SignupPageProps {
    type : "buyer" | "seller"
}

export default function SignUpPage({type}: SignupPageProps) {
    const [images, setImages] = useState([<ImageComponent key="supercool" filename="house1.jpg" />]);

    const [curr_image_num, set_curr_image_num] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prev => {
                const new_arr = [...prev];
                new_arr.length > 4 && new_arr.shift();
                new_arr.push(<ImageComponent key={new Date().toISOString()} filename={house_filenames[curr_image_num]} />);
                return new_arr;
            });
            set_curr_image_num(prev => {
                if (prev >= house_filenames.length) {
                    return 0
                }
                return prev + 1;
            })
        }, 8000);

        return () => clearInterval(interval);
    }, [curr_image_num]);

    return <div >
        <NavbarWrapper />
        <div className="min-h-screen flex w-full bg-background-padding z-0 relative" >
            <div
                className="absolute w-full h-full"
            >
                {images}
            </div>
            <div
                className="absolute w-full h-full"
                style={{
                    background: "#1a1e37",
                    opacity: "0.5"
                }}
            />
            <div className="absolute top-0 left-0 bg-background opacity-95 lg:w-1/2 sm:w-full min-h-screen flex flex-col justify-center">
                <div className="bg-primary opacity-100 mx-10 px-10 py-5 rounded-xl mb-20">
                    <Typography variant="h3" className='mb-5'>
                        {type == "buyer" ? "Buyer" : "Seller"} Sign Up
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