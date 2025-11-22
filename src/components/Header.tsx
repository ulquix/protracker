import SearchBar from "./SearchBar"
const Header = () => {
  return (
    <div className="h-10 w-3xl mt-8 mx-auto text-center ">
        <h1 className="text-6xl text-center text-foreground mb-2 font-bold">Nutritional Calculator</h1>
        <p className="w-full text-3xl text-secondary-foreground mb-8">Track your macros and micros with precision. Search, add, and calculate nutrition for your meals.</p>
       <SearchBar/>
    </div>
  )
}

export default Header