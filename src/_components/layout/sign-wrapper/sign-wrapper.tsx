'use client';

import NavbarWrapper from "@/_components/layout/navbar"
import Footer from "@/_components/layout/footer"
import "./signuppagecss.css"
import { useEffect, useState } from "react";
import { ReactElement } from "react"

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
    
    children: ReactElement
}

export default function SignWrapper({ children }: SignupPageProps) {
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
        }, 5500);

        return () => clearInterval(interval);
    }, [curr_image_num]);

    return <div >
        <NavbarWrapper />
        <div className="min-h-screen flex w-full bg-background-padding z-0 relative" >
            <div
                className="absolute w-full h-full overflow-x-hidden"
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
                <div className="bg-primary opacity-100 mx-10 xl:px-28 lg:px-10 px-8 py-5 rounded-xl mb-20">
                    {children}
                </div>
            </div>
        </div>
        <Footer />
    </div>
}