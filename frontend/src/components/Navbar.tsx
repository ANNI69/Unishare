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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Main/Modal";

const Navbar = () => {
  const push = useNavigate();
  const { setTheme } = useTheme();
  const { theme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    // Check if user data is in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    push('/login');
  };



  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <SearchBar />
      <Button
        onClick={() => {
          if (isLoggedIn) {
            // Redirect to create post if user is logged in
            setShowModal(true);
            // push("/create-post");
          } else {
            // Redirect to login if user is not logged in
            push("/login");
          }
        }}
        className="rounded-full m-4 flex items-center justify-center"
      >
        {isLoggedIn ? "Create Post" : "Login"}
      </Button>
      {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
            </Modal>
        }
      <div>
        {isLoggedIn && (
          <Sheet>
            <SheetTrigger>
              <Avatar>
                <AvatarImage
                  className="w-[50px] h-[40px]"
                  src="https://github.com/shadcn.png"
                  alt="User"
                />
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
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="w-full" onClick={handleLogout}>
                Logout</Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
};

export default Navbar;
