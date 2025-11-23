import { useEffect } from "react"
import { useFood } from "../store/zustandstore"
import { Input } from "./ui/input"
import Result from "./Result"
import {Microscomp} from "./Mircroscomp"
const FoodSection = () => {
    const data = useFood((state)=>state.log)
    const update = useFood((state)=>state.updateGrams)
    const temp = useFood((state)=>state.tempdata)
    


useEffect(()=>{
  console.log('temp',temp)
},[temp])
  return (
   <div className="text-4xl mt-10 w-7xl mx-auto mb-8 ">
    <div className="font-semibold text-secondary-foreground mb-5">Your Foods</div>
  {data.length>0 ? (
    <div className="flex gap-6">
    <div className=" flex flex-col gap-y-8">

       { data.map((item)=>(
        
        <div key={item.id} className="py-5 w-3xl px-5  bg-card rounded-2xl border-2 border-foreground hover:shadow-[8px_8px_1px_rgba(105,52,15,0.5)] transition-all duration-150 ">
            <div className="flex justify-between mb-5 items-center">
            <h1 className="text-2xl">
                {item.foodId.split('_').join(' ').toUpperCase()}
                </h1>
                <div className="flex gap-2 justify-center items-center">
                    <Input className="w-15! h-10! font-sans pl-2 bg-background" type="number"  onChange={(e) =>
                      update(item.id,Number(e.target.value))
                    }  value={item.grams}/>
                    <span className="text-xl">g</span>
                </div>
            </div>
            <div className="grid grid-cols-4 text-xl gap-x-2">

              <div className="bg-background rounded-lg border border-primary/80  pl-2  py-1  leading-none w-30">
                <h2>Calories</h2>
                <span className="text-primary"> {temp[item.foodId].macros.calories }Kcal</span>
              </div>
              <div className="bg-background rounded-lg border border-primary/80 pl-2 py-1 leading-none w-30 ">
                <h2>Carbs</h2>
                <span className="text-primary"> {temp[item.foodId].macros.carbs_g}g</span>
              </div>
              <div className="bg-background rounded-lg border border-primary/80 pl-2 py-1  leading-none w-30">
                <h2>Protein</h2>
                <span className="text-primary"> {temp[item.foodId].macros.protein_g}g</span>
              </div>
              <div className="bg-background rounded-lg border border-primary/80 pl-2  py-1 leading-none w-30">
                <h2>Fats</h2>
                <span className="text-primary"> {temp[item.foodId].macros.fat_g}g</span>
              </div>
            </div> 
            <Microscomp item={temp[item.foodId]}/>
            <div>

            </div>
        </div>
      ))}
    </div>
<Result />
    </div>
) :
  <div className="w-2xl bg-secondary/10 flex justify-center items-center rounded-xl text-center  h-[30vh] border-dashed border-2 text-accent">No food items added yet</div>
  }
</div>
  )
}

export default FoodSection
