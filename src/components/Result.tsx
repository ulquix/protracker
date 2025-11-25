import { useFood } from "@/store/zustandstore"
import type { Macros, Micros, Total } from "@/types/globaltypes"
import { useEffect, useState } from "react"
import { dailyRequirements } from "@/constants/data"
const Result = () => {
  const log = useFood(state => state.log)
  const logs = useFood(state => state.totals)
  const [total, setTotal] = useState<Total>()

  useEffect(() => {
    setTotal(logs())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [log])

  return (
    <div className="bg-card border-2 border-foreground rounded-xl pt-5 dark:shadow-(--shadow-dark) shadow-(--shadow-bg) w-full h-fit mx-auto">

      <h1 className="text-center  text-card-foreground text-4xl  font-semibold mb-5">
        Total nutrition
      </h1>

      <div>

      </div>
      <div className="text-secondary-foreground mb-10">
        <h2 className="text-3xl mb-2.5 ml-5">Macros</h2>

        <div className="flex text-3xl gap-4  items-center mb-3 flex-wrap  ">
          {total?.macros &&
            Object.keys(total.macros).map(key => (
              <div
                key={key}
                className="bg-background w-25 h-30 relative p-3 border-2 border-primary/80 rounded-lg flex flex-col items-center cursor-pointer "
              >
                <div className="text-2xl">{key.split("_")[0]}</div>
                <div className="text-primary">
                  {total.macros[key as keyof Macros].toFixed(1)}
                </div>
                <div className="text-2xl">{key.split("_")[1] || "Kcal"}</div>
                <div className="absolute top-0 left-0 bg-foreground text-background w-full h-full text-wrap opacity-0 hover:opacity-80 rounded-lg flex flex-col justify-center items-center p-2">
                  <div className=" text-xl">daily value:</div>
                  <div>{dailyRequirements.macros[key as keyof Macros]}
</div>
                  </div>
              </div>
            ))}
        </div>
      </div>

      <div className="text-secondary-foreground">
        <h2 className="text-3xl mb-4 ml-5">Micros</h2>

        <div className="grid text-2xl gap-x-5 gap-y-2 grid-cols-2 mx-3 mb-3 ">
          {total?.micros &&
            Object.keys(total.micros).map(micro => (
              <div
                key={micro}
  className="flex justify-between relative bg-background p-3 rounded-xl border-2 border-primary/80 min-w-[200px] cursor-pointer"
              >
                <div className="text-xl">{micro.split("_").slice(0, -1).join(" ")}</div>

                <div className="text-primary flex text-lg">
                  <div>{total.micros[micro as keyof Micros]?.toFixed(2)}</div>
                  <div className="ml-1">{micro.split("_").at(-1)}</div>
                  <div className="absolute top-0 left-0 bg-foreground text-background w-full h-full text-wrap opacity-0 hover:opacity-80 rounded-lg flex flex-col justify-center items-center p-2">
                  <div className=" text-xl">daily value:</div>
                  <div>{dailyRequirements.micros[micro as keyof Micros]}
</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Result
