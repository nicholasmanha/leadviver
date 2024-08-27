"use client"
import React, { useEffect, useState } from 'react'
import PlanCard from "./PlanCard";
import axios from 'axios';
import { Oval } from 'react-loader-spinner'

const leads = {
  basic: "prod_QjiUA3Jwd4p9Po",
  silver: "prod_QjiVQZMOfKEK1r",
  cool: "prod_QjiVgE0Jc68Fpg"
}

interface Product_data {
  product: Product;
  price: Price
}

interface Product {
  id: string;

  name: string;
}

interface Price {
  id: string;
  unit_amount: number;
  product: string;
}

function Price_Table() {
  const [product_data, setProduct_data] = useState<Product_data[]>([]);
  useEffect(() => {

    const fetchPaymentIntent = async () => {
      try {

        const response = await axios.post('https://d3sw4qgqj2.execute-api.us-west-1.amazonaws.com/Dev/fetch_product', {
          product_ids: leads,
        });

        setProduct_data(response.data)
        console.log(product_data)

      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    }
    fetchPaymentIntent();
  });
  if (product_data.length === 0) {
    return (
      <Oval
        visible={true}
        height="40"
        width="40"
        color="white"
        secondaryColor="gray"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    )
  }
  else {
    return (

      <div className="flex justify-evenly my-4 flex-1">
        {product_data.map((product_instance) => {
          try {
            return <PlanCard
              key={product_instance.product.id}
              product={product_instance.product.id}
              plan={product_instance.product.name}
              price={(product_instance.price.unit_amount / 100).toString()}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut,
            </PlanCard>
          }
          catch {
            return <p>erm there was an error :/</p>
          }

        })}


      </div>
    )
  }


}

export default Price_Table