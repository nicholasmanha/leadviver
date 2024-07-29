'use client';

import Typography from "@/_components/Typography"
import { Button } from "@/_components/button"
import BasePage from "@/_components/basepage";
import { FaAnglesDown } from "react-icons/fa6";
import { useRef } from 'react';
import NavbarWrapper from "@/_components/navbar";
import { useState, useEffect } from "react";
import Link from 'next/link'

function getWindowDimensions() {
  /*
  Need to check type of window in case this component isn't actually rendered in
  the client
  https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
  */

  if (typeof window !== "undefined") {

    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  };
  return {
    width: 1000,
    height: 1000
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    if (typeof window !== "undefined") {
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return () => { };
    }
  }, []);

  return windowDimensions;
}

export default function Home() {
  const scroll_target = useRef<HTMLDivElement>(null);

  const { height, width } = useWindowDimensions();

  const handleClick = () => {
    scroll_target.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavbarWrapper></NavbarWrapper>
      <BasePage>
        <div className="h-screen flex flex-col justify-center">

          <Typography variant="h2" className="mt-20 text-center">
            Welcome to LeadViver 👋
          </Typography>
          <Typography className="mt-3 mb-20 text-center" color="secondary">
            Your Premier Destination for Real Estate Leads
          </Typography>
          <Typography variant="h5" className="text-center">
            I am interested in...
          </Typography>
          <div className={"flex justify-center gap-10 m-5 items-center " + (width < 515 && "flex-col ")}>
            <Link href="/s/signup">
              <Button variant="red" size="lg">
                <Typography variant="button-1" color="button">Selling Leads</Typography>
              </Button>
            </Link>
            <Link href="/b/signup">
              <Button variant="blue" size="lg">
                <Typography variant="button-1" color="button">Buying Leads</Typography>
              </Button>
            </Link>
          </div>
          <div className="h-40" />

          <div className="h-40" />
        </div>
        {height > 700 && <div className="flex justify-center absolute inset-x-1/3 bottom-14" onClick={handleClick}>
          <FaAnglesDown className="fill-text-primary " style={{ "transform": "scale(1.5)" }} />
        </div>}
        <div ref={scroll_target}>
          <Typography variant="h4" className="flex justify-center">About Us</Typography>
        </div>
        <Typography>
          Are you a real estate professional looking to supercharge your business?
          At LeadViver, we specialize in connecting buyers and sellers of
          high-quality real estate leads. Whether you&apos;re looking to grow your
          client base or monetize your existing leads, we have the solutions you
          need.
        </Typography>
        <div className="h-20" />
        <Typography variant="h4" className="flex justify-center">How It Works</Typography>
        <Typography>
          Real estate investors and &apos;wholesalers&apos; effectively deploy mass
          marketing strategies, eg. cold calling, text blasts, email campaigns,
          bandit signs, social media and more to find specific sellers who are
          motivated to sell their home in a short time frame without using a
          traditional sales model. The sellers that these wholesalers contact
          who are interested in selling, but who would prefer to use a
          conventional sales strategy by selling with a Realtor at the highest
          retail price are deemed &apos;dead leads&apos; by wholesalers and nothing is
          typically done to follow through or monetize these leads.  However,
          these leads are incredibly valuable to real estate agents looking to
          work with more seller clients. LeadViver creates a marketplace for
          these valuable leads that enables wholesalers to recoup some of their
          marketing costs and agents to grow their businesses.
        </Typography>
      </BasePage>
    </>
  );
}
