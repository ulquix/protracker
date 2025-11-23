import type { Total} from "@/types/globaltypes"
import { micros } from "@/constants/micros"

export const Microscomp = ({
  item,
}: {
  item: Total
}) => {
  return (
    <details className="mt-3 ">
      <summary className="cursor-pointer font-medium text-lg hover:underline">
        View micros
      </summary>

      <div className="mt-2 grid grid-cols-3 gap-x-6">
        {micros.map(key => {
          if (key in item.micros) {
            return (
                <div className="flex justify-between items-center">
<div className="text-secondary-foreground text-xl">{key.split('_').slice(0,-1).join(' ')}:</div>
<div className="flex text-xl font-medium text-primary">

              <div key={key} className="">
                {item.micros[key]}
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

