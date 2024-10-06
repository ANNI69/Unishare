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
    // Clear the cookie by setting an expired date
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // Reset user state
    // setUser(null);
    setIsLoggedIn(false);
    push('/');
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user).user.email;
    }
  }



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
                    {
                      getCurrentUser() ? (
                        <Avatar>
                          <AvatarImage
                            className="w-[50px] h-[40px]"
                            src="https://github.com/shadcn.png"
                            alt="User"
                          />
                        </Avatar>
                      ) : (
                        <Skeleton className="h-10 w-10" />
                      )
                    }
                    <div className="space-y-2">
                      {
                        getCurrentUser() ? (
                          <p className="text-lg font-semibold">{getCurrentUser()}</p>
                        ) : (
                          <Skeleton className="h-5 w-20" />
                        )
                      }
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
