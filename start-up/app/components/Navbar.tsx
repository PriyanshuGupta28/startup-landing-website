import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Sun, Moon, MenuIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="flex flex-row justify-between items-center z-10 sticky top-0 backdrop-blur-[8px] bg-white/60 text-zinc-900 dark:bg-black/60 dark:text-white px-6 py-4 border-b border-zinc-300 dark:border-white-200">
      <div className="text-xl font-bold">StartUp</div>
      <ul className="gap-4 hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:underline text-md">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="items-center gap-2 hidden md:flex"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        {theme === "light" ? "Dark" : "Light"}
      </Button>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger
          className="flex items-center gap-5 md:hidden z-[200]"
          onClick={() => setIsSheetOpen(true)}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="items-center gap-2"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            {theme === "light" ? "Dark" : "Light"}
          </Button>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation links</SheetDescription>
            {
              <ul className="gap-4">
                {navLinks.map((link: navLinksType) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:underline text-md"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;

const navLinks: navLinksType[] = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "project" },
  { title: "About Us", path: "about" },
  { title: "Contact Us", path: "contact" },
  { title: "Career", path: "career" },
];

type navLinksType = {
  title: string;
  path: string;
};
