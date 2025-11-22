import { create } from 'zustand'
import type { SearchResult } from '@/types/globaltypes'
interface iskadata{
    data:SearchResult[] ;
    removeItem:(newdata:SearchResult)=>void;
   addItem:(newdata:SearchResult)=>void;
}
export const useBear = create<iskadata>((set) => ({
  data:[],
  addItem: (newdata:SearchResult)=>{
  
set((state)=>{
    const exists = state.data.some((i) => i.name === newdata.name)
      if (exists) return state 
  return  { data: [...state.data, newdata]}})
  },
  removeItem:(item:SearchResult)=>{
set((state)=>({
          data: state.data.filter(i => i.name !== item.name)

}))
  }
}))