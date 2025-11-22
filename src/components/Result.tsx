// import { useBear } from "@/store/zustandstore";
// import type { SearchResult } from "@/types/globaltypes";
// import { useEffect, useState } from "react";
const Result = ({ quantity }: { quantity: Record<string, number> }) => {
    // const data = useBear(state=>state.data)
    // useEffect(()=>{
    //     data.forEach((each)=>{

    //     })
    // })
    console.log(quantity)
  return (
    <div className="bg-card flex-1 h-[50vh] border border-border  rounded-xl  pt-5">
      <h1 className="text-center text-card-foreground mb-5">Total nutrition</h1>
      <div className="text-secondary-foreground  ml-3">
        <h2 className="text-3xl mb-2.5">Macros</h2>
        <div className="flex text-3xl gap-x-4 justify-center items-center mb-3">
          <div className="bg-accent w-25 py-2 rounded-lg justify-center  flex flex-col items-center">
            <div className="text-2xl">Calories</div>
            <div className="text-primary">45</div>
            <div className="text-2xl">G</div>
          </div>
          <div className="bg-accent  w-25 py-2 rounded-lg justify-center flex flex-col items-center">
            <div className="text-2xl">Protein</div>
            <div className="text-primary">45</div>
            <div className="text-2xl">G</div>
          </div>
          <div className="bg-accent  w-25 py-2 rounded-lg justify-center flex flex-col items-center">
            <div className="text-2xl">Carbs</div>
            <div className="text-primary">45</div>
            <div className="text-2xl">G</div>
          </div>
          <div className="bg-accent  w-25 py-2 rounded-lg justify-center flex flex-col items-center">
            <div className="text-2xl">Fats</div>
            <div className="text-primary">45</div>
            <div className="text-2xl">G</div>
          </div>
        </div>
      </div>
      <div className="text-secondary-foreground ml-3">
        <h2 className="text-3xl">Micros</h2>
      </div>
    </div>
  );
};

export default Result;
