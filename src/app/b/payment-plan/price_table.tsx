"use client"
import React, { useEffect, useState } from 'react'
import PlanCard from "@/_components/PlanCard";
import axios from 'axios';

const leads = {
  basic: "prod_QaYT8rn3izYWxg",
  silver: "prod_QaYTGR1EIB2Tip",
  gold: "prod_QaYTk8Wz93fCRl"
}



function Price_Table() {
  const [priceId, setPriceId] = useState({});
  useEffect(() => {

    const fetchPaymentIntent = async () => {
      try {

        const response = await axios.post('https://j4y10kfape.execute-api.us-west-1.amazonaws.com/Prod/fetch_product', {
          product_ids: leads,
        });


        setPriceId(response.data)

      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    }
    fetchPaymentIntent();
  });
  if (Object.keys(priceId).length === 0) {
    return (
      <p>
        loading
      </p>
    )
  }
  else {
    return (
      <div className="flex justify-evenly my-4 flex-1">

        <PlanCard product="prod_QaYT8rn3izYWxg" plan="Basic" price={priceId.prod_QaYT8rn3izYWxg.unit_amount / 100}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
        <PlanCard product="prod_QaYT8rn3izYWxg" plan="Silver" price={priceId.prod_QaYTGR1EIB2Tip.unit_amount / 100}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
        <PlanCard product="prod_QaYT8rn3izYWxg" plan="Gold" price={priceId.prod_QaYTk8Wz93fCRl.unit_amount / 100}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>

      </div>
    )
  }
}

export default Price_Table