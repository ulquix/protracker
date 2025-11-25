import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handletheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className="fixed top-3 right-3  text-foreground">
      <span
        className=" block dark:hidden cursor-pointer"
        onClick={() => handletheme()}
      >
        <Sun />
      </span>
      <span
        className="hidden dark:block cursor-pointer"
        onClick={() => handletheme()}
      >
        <Moon />
      </span>
    </div>
  );
};

export default Theme;
