import { useFood } from "../store/zustandstore"
import { Input } from "./ui/input"
import Result from "./Result"
import { Microscomp } from "./Mircroscomp"
import React, { useEffect } from "react"

const FoodSection = ({ ref }: { ref: React.Ref<HTMLDivElement> }) => {
  const data = useFood((state) => state.log)
  const update = useFood((state) => state.updateGrams)
  const temp = useFood((state) => state.tempdata)
  const remove = useFood((state) => state.remove)

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
    localStorage.setItem("tempdata", JSON.stringify(temp))
  }, [data, temp])

  return (
    <div className="mt-10 mb-8 mx-auto max-w-6xl px-4">
      <div className="text-2xl font-semibold text-secondary-foreground mb-5">
        Your Foods
      </div>

      {data.length > 0 ? (
        <div
          className="flex flex-col lg:flex-row gap-8 px-5 py-3"
          ref={ref}
        >
          <div className="flex flex-col gap-y-8 flex-1">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-card rounded-2xl border-2 border-foreground dark:shadow-(--shadow-dark) shadow-(--shadow-bg) "
              >
                <div className="flex flex-col sm:flex-row justify-between mb-5 items-start sm:items-center gap-3">
                  <h1 className="text-xl sm:text-2xl font-medium">
                    {item.foodId.split("_").join(" ").toUpperCase()}
                  </h1>

                  <div className="flex gap-2 items-center">
                    <Input
                      className="w-20 h-10 font-sans pl-2 bg-background"
                      type="number"
                      onChange={(e) => update(item.id, Number(e.target.value))}
                      value={item.grams}
                    />
                    <span className="text-lg">g</span>

                    <span
                      className="cursor-pointer"
                      onClick={() => remove(item.id)}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="oklch(0.7049 0.1867 47.6044)"
                      >
                        <path d="M20 18h2v16h-2z" />
                        <path d="M24 18h2v16h-2z" />
                        <path d="M28 18h2v16h-2z" />
                        <path d="M12 12h26v2H12z" />
                        <path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z" />
                        <path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 text-lg gap-3">
                  <div className="bg-background rounded-lg border-2 border-primary/80 p-2">
                    <h2>Calories</h2>
                    <span className="text-primary">
                      {temp[item.foodId].macros.calories} Kcal
                    </span>
                  </div>
                  <div className="bg-background rounded-lg border-2 border-primary/80 p-2">
                    <h2>Carbs</h2>
                    <span className="text-primary">
                      {temp[item.foodId].macros.carbs_g} g
                    </span>
                  </div>
                  <div className="bg-background rounded-lg border-2 border-primary/80 p-2">
                    <h2>Protein</h2>
                    <span className="text-primary">
                      {temp[item.foodId].macros.protein_g} g
                    </span>
                  </div>
                  <div className="bg-background rounded-lg border-2 border-primary/80 p-2">
                    <h2>Fats</h2>
                    <span className="text-primary">
                      {temp[item.foodId].macros.fat_g} g
                    </span>
                  </div>
                </div>

                <Microscomp item={temp[item.foodId]} />
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 w-full">
            <Result />
          </div>
        </div>
      ) : (
        <div className="max-w-xl text-xl mx-auto bg-secondary/10 flex justify-center items-center rounded-xl text-center h-[30vh] border-dashed border-2 text-accent px-4">
          No food items added yet
        </div>
      )}
    </div>
  )
}

export default FoodSection
