import FoodSection from "./components/FoodSection"
import Header from "./components/Header"
import Save from "./components/Save"
import { useRef } from "react"
import Theme from "./components/Theme"
function App() {

const dataref = useRef<HTMLDivElement | null>(null)

  return (
    <>
    <div className="min-h-screen bg-background  font-pixel pt-1 [--shadow-bg:8px_8px_1px_rgba(105,52,15,0.5)] [--shadow-dark:8px_8px_1px_rgba(245,245,244,0.3)]">
      <Theme/>
      <Header/>
<FoodSection ref={dataref}/>
<Save targetRef={dataref} />
    </div>
    </>
  )
}

export default App
