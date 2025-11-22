import { useState } from "react"
import { useBear } from "../store/zustandstore"
import { Input } from "./ui/input"
import Mircros from "./Mircros"

const FoodSection = () => {
    const data = useBear((state)=>state.data)
    const [grams,setGrams] = useState<Record<string,number>>({})
    const onhandleGramChange =(name:string,value:string)=>{
      const num = Number(value)
      setGrams((prev)=>({
        ...prev,[name]:isNaN(num)?0:num
      }))
    }
    const calc = (val:number,name:string)=>{
      const newval = val?val:0;
const g = grams[name] ?? 100
  return ((newval * g) / 100).toFixed(1)
    }
  return (
   <div className="text-4xl mt-10 w-7xl mx-auto mb-4">
    <div className="font-semibold text-secondary-foreground mb-5">Your Foods</div>
  {data.length>0 ? (
    <div className=" flex flex-col gap-y-3">

       { data.map((item)=>(
        <div key={item.name} className="py-5 w-3xl px-5  bg-accent rounded-2xl border-2 border-border hover:shadow-xl ">
            <div className="flex justify-between mb-5 items-center">
            <h1 className="text-2xl">
                {item.name.split('_').join(' ').toUpperCase()}
                </h1>
                <div className="flex gap-2 justify-center items-center">
                    <Input placeholder="100" className="w-15! h-6! font-sans pl-2 bg-background" type="number" onChange={e =>
                      onhandleGramChange(item.name, e.target.value) 
                    } value={grams[item.name] ?? 100}/>
                    <span className="text-xl">g</span>
                </div>
            </div>
            <div className="grid grid-cols-4 text-xl gap-x-2">
              <div className="bg-background/50 rounded-lg  pl-2  py-1  leading-none w-30">
                <h2>Calories</h2>
                <span className="text-primary"> {calc(item.values?.calories as number, item.name)}g</span>
              </div>
              <div className="bg-background/50 rounded-lg pl-2 py-1 leading-none w-30 ">
                <h2>Carbs</h2>
                <span className="text-primary"> {calc(item.values?.carbs_g as number, item.name)}g</span>
              </div>
              <div className="bg-background/50 rounded-lg pl-2 py-1  leading-none w-30">
                <h2>Protein</h2>
                <span className="text-primary"> {calc(item.values?.protein_g as number, item.name)}g</span>
              </div>
              <div className="bg-background/50 rounded-lg pl-2  py-1 leading-none w-30">
                <h2>Fats</h2>
                <span className="text-primary"> {calc(item.values?.fat_g as number, item.name)}g</span>
              </div>
            </div>
            <div>
              <Mircros calc={calc} item={item} />

            </div>
        </div>
      ))}
    </div>
) :
  <div className="w-2xl bg-secondary/10 flex justify-center items-center rounded-xl text-center  h-[30vh] border-dashed border-2 text-accent">No food items added yet</div>
  }
</div>
  )
}

export default FoodSection
