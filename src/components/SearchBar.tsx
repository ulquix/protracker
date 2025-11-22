import React, { useState } from "react"
import { Input } from "./ui/input"
import { SearchItems } from "../lib/searchitems"
import type { SearchResult } from "../types/globaltypes"
import { useBear } from "../store/zustandstore"

const SearchBar = () => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const addItem = useBear((state) => state.addItem)

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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget as HTMLElement
    const values = JSON.parse(element.getAttribute("data-value")!)
    const name = element.getAttribute("data-name") || ""
    addItem({ name, values })
    setValue("")
    setSuggestions([])
  }

  return (
    <>
      <div className="relative ">
        <Input
          type="text"
          className="h-15 pl-10 w-full rounded-xl text-2xl! placeholder:text-2xl"
          placeholder="Search an item"
          value={value}
          onChange={search}
          autoComplete="off"
  autoCorrect="off"
  autoCapitalize="none"
  spellCheck={false}
        />
        <div className="absolute top-5 left-2 flex items-center">
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
        className={`w-full mt-2 ${suggestions.length > 0 ? "pt-2" : ""}  max-h-[30vh] overflow-auto no-scrollbar text-2xl rounded-2xl bg-secondary absolute`}
      >
        {suggestions.length > 0 ? (
          suggestions.map((element) => (
            <div
              key={element.name}
              className="mx-2 px-5 py-2  flex justify-between mb-2 hover:bg-accent rounded-xl transition-all duration-75 ease-in cursor-pointer"
              onClick={handleClick}
              data-value={JSON.stringify(element.values)}
              data-name={element.name}
              tabIndex={0}
              role="button"
            >
              <div>{element.name.split('_').join(" ")}</div>
              <div className="text-primary">{element?.values?.calories} Kcal</div>
            </div>
          ))
        ) : (
          value && <div className="px-5 py-2 text-primary-foreground/80">No items matched your query</div>
        )}
      </div>
      </div>

    </>
  )
}

export default SearchBar
