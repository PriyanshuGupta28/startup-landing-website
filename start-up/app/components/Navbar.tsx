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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="flex flex-row justify-between items-center z-10 sticky top-0 backdrop-blur-[10px] bg-white/80 text-zinc-900 dark:bg-black/80 dark:text-white px-6 py-4 border-b border-zinc-300 dark:border-white-200">
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
      <Sheet>
        <SheetTrigger className="md:hidden z-[200]">
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { title: "Projects", path: "project" },
  { title: "About Us", path: "about" },
  { title: "Contact Us", path: "contact" },
];
