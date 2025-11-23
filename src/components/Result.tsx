import { useFood } from "@/store/zustandstore";
import type { Macros, Micros, Total } from "@/types/globaltypes";
import { useEffect, useState } from "react";
const Result = () => {
   const log = useFood(state => state.log)
   const logs = useFood(state => state.totals)
const [total,setTotal] = useState<Total>()
useEffect(()=>{
  console.log("kuch to hua")
  setTotal(logs())
// eslint-disable-next-line react-hooks/exhaustive-deps
},[log])
    
  return (
    <div className="bg-card flex-1  border-2 border-foreground  rounded-xl  pt-5 shadow-[8px_8px_1px_rgba(105,52,15,0.5)]">
      <h1 className="text-center text-card-foreground text-4xl mb-5 font-semibold">Total nutrition</h1>
      <div className="text-secondary-foreground   mb-10">
        <h2 className="text-3xl mb-2.5 ml-5">Macros</h2>
        <div className="flex text-3xl gap-x-4 justify-center items-center mb-3">
          {total?.macros && Object.keys(total.macros).map((key)=>(

          <div className="bg-background w-25 border-2 border-primary/80 py-2 rounded-lg justify-center  flex flex-col items-center">
            <div className="text-2xl">{key.split('_')[0]}</div>
            <div className="text-primary">{total?.macros[key as keyof Macros].toFixed(1)}</div>
            <div className="text-2xl">{key.split('_')[1] || "Kcal"}</div>
          </div>
          ))}

        </div>
      </div>
      <div className="text-secondary-foreground ">
        <h2 className="text-3xl mb-4 ml-5">Micros</h2>
        <div className="grid text-2xl gap-x-5 gap-y-2 grid-cols-2 mx-3 mb-3">
          {total?.micros && Object.keys(total?.micros).map((micro)=>(
            <div className="flex justify-between bg-background p-3 rounded-xl border-2 border-primary/80">
            <div>{micro.split('_').slice(0,-1).join(' ')}</div>
            <div className="text-primary flex">
            <div className="">{total.micros[micro as keyof Micros]?.toFixed(2)}</div>
            <div>{micro.split('_').at(-1)}</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
