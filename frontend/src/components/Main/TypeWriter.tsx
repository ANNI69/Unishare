"use client";
import { TypewriterEffect } from "../ui/Hero";
import { useTheme } from "../theme-provider";

export function TypewriterEffectDemo() {
  const { theme } = useTheme();
  const words = [
    {
      text: "Share",
    },
    {
      text: "your",
    },
    {
      text: "knowledge",
    },
    {
      text: "with",
    },
    {
      text: "UNiShare",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="flex bg-black flex-col items-center justify-center h-[40rem] ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          The road to freedom starts from here
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
      <footer className=" w-[100vw]bg-black rounded-lg shadow dark:bg-black">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 280 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_503_463)">
                  <path
                    d="M160.588 51.7652H219.412C220.972 51.7652 222.468 52.3849 223.571 53.4881C224.674 54.5912 225.294 56.0874 225.294 57.6475V116.471C225.294 118.031 224.674 119.527 223.571 120.631C222.468 121.734 220.972 122.353 219.412 122.353H160.588C159.028 122.353 157.532 121.734 156.429 120.631C155.326 119.527 154.706 118.031 154.706 116.471V57.6475C154.706 56.0874 155.326 54.5912 156.429 53.4881C157.532 52.3849 159.028 51.7652 160.588 51.7652ZM51.7647 166.471H110.588C112.148 166.471 113.645 167.091 114.748 168.194C115.851 169.297 116.471 170.793 116.471 172.353V231.177C116.471 232.737 115.851 234.233 114.748 235.336C113.645 236.44 112.148 237.059 110.588 237.059H51.7647C50.2046 237.059 48.7084 236.44 47.6053 235.336C46.5021 234.233 45.8824 232.737 45.8824 231.177V172.353C45.8824 170.793 46.5021 169.297 47.6053 168.194C48.7084 167.091 50.2046 166.471 51.7647 166.471ZM198.024 157.624L239.2 228.212C241.485 232.136 238.659 237.059 234.118 237.059H151.765C147.224 237.059 144.397 232.136 146.682 228.212L187.859 157.624C190.129 153.733 195.753 153.733 198.024 157.624ZM84.1176 42.9417C108.482 42.9417 128.235 62.6946 128.235 87.0593C128.235 111.424 108.482 131.177 84.1176 131.177C59.7529 131.177 40 111.424 40 87.0593C40 62.6946 59.7529 42.9417 84.1176 42.9417Z"
                    fill={theme === "dark" ? "#fff" : "#000"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_503_463">
                    <rect
                      width="200"
                      height="200"
                      fill="white"
                      transform="translate(40 40.0005)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                UNiShare
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              UNiShare
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
