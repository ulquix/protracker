import type { SearchResult } from "@/types/globaltypes"
import { data } from "@/constants/micros"

const Micros = ({
  item,
  calc,
}: {
  item: SearchResult
  calc: (a: number, b: string) => string
}) => {
  return (
    <details className="mt-3 ">
      <summary className="cursor-pointer font-medium text-lg hover:underline">
        View micros
      </summary>

      <div className="mt-2 grid grid-cols-3 gap-x-6">
        {data.map(key => {
          if (key in item.values) {
            return (
                <div className="flex justify-between items-center">
<div className="text-secondary-foreground text-xl">{key.split('_').slice(0,-1).join(' ')}:</div>
<div className="flex text-xl font-medium text-primary">

              <div key={key} className="">
                {calc(item.values[key] as number, item.name)}
              </div>
              <div >{key.split('_').at(-1)}</div>
</div>
                </div>
            )
          }

          return null
        })}
      </div>
    </details>
  )
}

export default Micros
