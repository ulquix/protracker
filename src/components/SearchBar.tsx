import React, { useState } from "react"
import { Input } from "./ui/input"
import { SearchItems } from "../lib/searchitems"
import type { suggestion } from "../types/globaltypes"
import { useFood } from "@/store/zustandstore"
const SearchBar = () => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState<suggestion[]>([])
  const addItem = useFood((state) => state.add)

// console.log(macro,micro)
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value
    setValue(keyword)

    if (keyword) {
      const found = SearchItems({ keyword })
      setSuggestions(found)
    } else {
      setSuggestions([])
    }
  }

  const handleClick = (id:string) => {
    addItem(id)
    setValue("")
    setSuggestions([])
  }

  return (
    <>
      <div className="relative ">
        <Input
          type="text"
          className="h-15 pl-10 w-full border-2 rounded-xl text-2xl! placeholder:text-2xl"
          placeholder="Search an item"
          value={value}
          onChange={search}
          autoComplete="off"
          
  autoCorrect="off"
  autoCapitalize="none"
  spellCheck={false}
        />
        <div className="absolute top-5 left-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
      <div
        className={`w-full mt-2 ${suggestions.length > 0 ? "pt-2 border" : ""} border-secondary max-h-[30vh] overflow-auto no-scrollbar text-2xl rounded-2xl bg-secondary/10 backdrop-blur-2xl absolute`}
      >
        {suggestions.length > 0 ? (
          suggestions.map((element) => (
            <div
              key={element.id}
              className="mx-2 px-5 py-2  flex justify-between mb-2 hover:bg-background rounded-xl transition-all duration-75 ease-in cursor-pointer"
              onClick={()=>handleClick(element.id)}
              onKeyDown={(e)=>{if(e.key=='Enter')handleClick(element.id)}}
              tabIndex={0}
              role="button"
            >
              <div>{element.name.split('_').join(" ")}</div>
              <div className="text-primary">{element?.calories} Kcal</div>
            </div>
          ))
        ) : (
          value && <div className="px-5 py-2 text-primary/80 text">No items matched your query</div>
        )}
      </div>
      </div>

    </>
  )
}

export default SearchBar
