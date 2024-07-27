"use client";
import SearchBar from "./Main/SearchBar";
import ThemeMode from "./Main/ThemeMode";
import Logo from "./Main/Logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <SearchBar />
      <ThemeMode />
    </div>
  );
};

export default Navbar;
