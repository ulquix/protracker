import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="mt-8 mx-auto text-center max-w-3xl px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold mb-2">
        Nutrition Calculator
      </h1>

      <p className="text-lg sm:text-xl lg:text-2xl text-secondary-foreground mb-8">
        Track your macros and micros with precision. Search, add, and calculate
        nutrition for your meals.
      </p>

      <SearchBar />
    </div>
  );
};

export default Header;
