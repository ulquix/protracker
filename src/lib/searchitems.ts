import data from "../constants/data.json"

export const SearchItems = ({keyword}:{keyword:string})=>{
   if(!keyword) return []
const found = []
for (const [key, value] of Object.entries(data)){
    if(key.includes(keyword))
        found.push({name:key,values:value})
}
    
if(found.length<=0){
return []
}
return found
}