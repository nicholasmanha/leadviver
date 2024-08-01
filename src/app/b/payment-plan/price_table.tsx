import React from 'react'
import PlanCard from "@/_components/PlanCard";

function Price_Table() {
  return (
    <div className="flex justify-evenly my-4 flex-1">
      <PlanCard plan="Basic" price="349">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
      <PlanCard plan="Silver" price="589">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>
      <PlanCard plan="Gold" price="999">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corrupti magni tenetur nam voluptatibus eligendi qui temporibus aliquam aut, </PlanCard>

    </div>
  )
}

export default Price_Table