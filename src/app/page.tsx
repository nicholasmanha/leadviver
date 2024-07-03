'use client';

import Typography from "@/_components/Typography"
import { Button } from "@/_components/button"
import { LuUpload } from "react-icons/lu";
import { NavigationMenu } from "@/_components/navbar";
import BasePage from "@/_components/basepage";
import { FaAnglesDown } from "react-icons/fa6";
import { useRef } from 'react';

export default function Home() {
  const scroll_target = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    scroll_target.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <NavigationMenu/> */}
      <BasePage>
        <Typography variant="h2" className="mt-20 text-center">
          Welcome to LeadViver 👋
        </Typography>
        <Typography className="mt-3 mb-20 text-center" color="secondary">
          Your Premier Destination for Real Estate Leads
        </Typography>
        <Typography variant="h5" className="text-center">
          I am interested in...
        </Typography>
        <div className="flex justify-center m-5">
          <Button className="w-40">Selling Leads</Button>
          <div className="w-10" />
          <Button className="w-40">Buying Leads</Button>
        </div>
        <div className="h-40" />
        <div className="flex justify-center" onClick={handleClick}>
          <FaAnglesDown className="fill-text-primary" style={{ "transform": "scale(1.5)" }} />
        </div>
        <div className="h-40" />
        <div ref={scroll_target}>
          <Typography variant="h4" className="flex justify-center">About Us</Typography>
        </div>
        <Typography>
          Are you a real estate professional looking to supercharge your business?
          At LeadViver, we specialize in connecting buyers and sellers of
          high-quality real estate leads. Whether you're looking to grow your
          client base or monetize your existing leads, we have the solutions you
          need.
        </Typography>
        <div className="h-20" />
        <Typography variant="h4" className="flex justify-center">How It Works</Typography>
        <Typography>
          Real estate investors and ‘wholesalers’ effectively deploy mass
          marketing strategies, eg. cold calling, text blasts, email campaigns,
          bandit signs, social media and more to find specific sellers who are
          motivated to sell their home in a short time frame without using a
          traditional sales model. The sellers that these wholesalers contact
          who are interested in selling, but who would prefer to use a
          conventional sales strategy by selling with a Realtor at the highest
          retail price are deemed ‘dead leads’ by wholesalers and nothing is
          typically done to follow through or monetize these leads.  However,
          these leads are incredibly valuable to real estate agents looking to
          work with more seller clients.  LeadViver creates a marketplace for
          these valuable leads that enables wholesalers to recoup some of their
          marketing costs and agents to grow their businesses.
        </Typography>
      </BasePage>
    </>
  );
}
