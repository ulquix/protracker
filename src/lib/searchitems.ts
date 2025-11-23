import {foodItems} from "../constants/data"
import type { suggestion } from "@/types/globaltypes"
export const SearchItems = ({ keyword }: { keyword: string }) => {
  const k = keyword.trim().toLowerCase().normalize("NFKD")

  if (!k) return []

  const found:suggestion[]=[]
foodItems.forEach((item)=>{

  if(item.name.toLowerCase().includes(keyword)){
    found.push({id:item.id,name:item.name,calories:item.macros.calories})
  }
})



  return found
}
