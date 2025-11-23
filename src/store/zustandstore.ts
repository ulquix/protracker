import { create } from 'zustand'
import type { FoodItem,LoggedFood, Macros, Micros ,Total} from '@/types/globaltypes'
 import { foodItems } from '@/constants/data'
 import { micros,macros } from '@/constants/micros'


interface iskadata{
  tempdata:Record<string,Total>,
    data:FoodItem[] ,
    log:LoggedFood[],
    add:(id:string)=>void,
    updateGrams:(id:string,grams:number)=>void;
    remove:(id:string)=>void;
    totals:()=>Total

}
export const useFood = create<iskadata>((set,get) => ({
  tempdata:{},
  data:foodItems,
  log:[],
   add(foodId) {
    const {log,data,tempdata} = get()
    
    if(log.find((item)=>item.foodId==foodId)){
      return
    }
    const food = data.find((dat)=>dat.id==foodId) as FoodItem
    console.log(food)
    set(state => ({
      log: [
        ...state.log,
        { id: crypto.randomUUID(), foodId, grams: 100 }
      ],
      tempdata:{
       ...tempdata,
       [foodId]:{
        macros:{...food.macros },
        micros:{...food.micros}
      }
      }
    }))
  },
  
updateGrams(id, grams) {
  const { data, log, tempdata } = get();
const f = grams/100
  const logItem = log.find(f => f.id === id);
  if (!logItem) return;

  const food = data.find(f => f.id === logItem.foodId);
  if (!food) return;

  const updatedTemp ={ ...tempdata}

 const entry: Total = {
      macros:  {} as Macros,
      micros: {} as Micros,
    }  
    if (food.macros) {
   for (const key of Object.keys(food.macros) as (keyof Macros)[]) {
  entry.macros[key] = Number((food.macros[key]! * f).toFixed(2));
}

  }

  if (food.micros) {
    for (const key of Object.keys(food.micros) as (keyof Micros)[]) {
    entry.micros[key] = Number((food.micros[key]! * f).toFixed(2));
}

  }
updatedTemp[food.id] = entry

  set(state => ({
    tempdata: updatedTemp,
    log: state.log.map(item =>
      item.id === id ? { ...item, grams } : item
    )
  }));
}
,

  remove(id) {
    set(state => ({
      log: state.log.filter(item => item.id !== id)
    }))
  },

 totals() {
    const { data, log } = get()

    const totalMacros:Macros = {
calories:0,
protein_g:0,
fat_g:0,
carbs_g:0
    }
 
    const totalMicros:Micros= {
    }

    for (const entry of log) {
      const food = data.find(f => f.id === entry.foodId)
      if (!food) continue

      const f = entry.grams / 100

      macros.forEach((macro)=>{
totalMacros[macro] += food.macros[macro] *f
      })
micros.forEach((micro)=>{
  if(food.micros[micro]){
    if(!totalMicros[micro]) {
      totalMicros[micro] = 0
    }
    
      totalMicros[micro] += (food.micros[micro] || 0) *f
  }
  
})

    }

return { macros: totalMacros, micros: totalMicros }
  }
}))