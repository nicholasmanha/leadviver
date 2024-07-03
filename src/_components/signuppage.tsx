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

export default function SignUpPage() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
 
        window.addEventListener('resize', handleResize);
 
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if(carouselRef.current && carouselRef.current.offsetHeight > 30 ) {
            const originalHeight = carouselRef.current.offsetHeight;
            const originalWidth = carouselRef.current.offsetWidth;
            const scaleFactorHeight = windowSize.width / originalWidth ;
            const scaleFactorWidth = windowSize.height / originalHeight ;
            console.log(originalHeight)
            
            const scaleFactor = Math.max(scaleFactorHeight, scaleFactorWidth);
            carouselRef.current.style.transform = `scale(${scaleFactor})`;
        }
    }, [windowSize])


    return <div >
        <NavbarWrapper />
        <div className=" min-h-screen flex w-full bg-background-padding z-0" >
            <div className="absolute top-0 left-0" style={{overflowX: "hidden"}}>
                <Carousel
                    ref={carouselRef}
                    style={{ 
                        transform: "scale(2)",
                        transformOrigin: "top center"
                    }}
                    className="blur-sm"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}>
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/signup_home_imgs/house1.jpg"
                                width={10000}
                                height={100}
                                alt="A suburbian Home"
                                style={{  height: '30' }}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/signup_home_imgs/house2.jpg"
                                width={500}
                                height={500}
                                alt="A suburbian Home"
                                style={{ width: 'auto', height: '100%' }}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/signup_home_imgs/house4.jpg"
                                width={500}
                                height={500}
                                alt="A suburbian Home"
                                style={{ width: 'auto', height: '100%' }}
                            />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
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