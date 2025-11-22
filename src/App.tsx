import { useBear } from "./store/zustandstore"
import Header from "./components/Header"
function App() {
const data = useBear((state)=>state.data)




  return (
    <>
    <div className="min-h-screen bg-background w-screen font-pixel pt-1">
      <Header/>
<div>
  {data && data.map((item)=>(
    <div key={item.name}>{item.name}</div>
  ))}
</div>
    </div>
    </>
  )
}

export default App
