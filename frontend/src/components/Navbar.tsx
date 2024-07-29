"use client";
import SearchBar from "./Main/SearchBar";
import Logo from "./Main/Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Label } from "./ui/label";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  const { setTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <SearchBar />
      <Button className="rounded-full m-4 flex items-center justify-center">
        <Plus size={18} />
        Create
      </Button>
      <Sheet>
        <SheetTrigger>
          <Avatar>
            <AvatarImage
              className="w-[50px] h-[40px]"
              src="https://github.com/shadcn.png"
              alt="User"
            />{" "}
            // Change the src to user Profile
          </Avatar>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>View Profile</SheetTitle>
            <SheetDescription>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
          <Separator className="my-4" />
          <div className="flex flex-col space-y-2">
            <Label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
                defaultValue="dark"
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {theme === "dark" ? "Light " : "Dark "} Mode
              </span>
            </Label>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
