"use client";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "../theme-provider";
import { TypewriterEffectDemo } from "./TypeWriter";
import { Button } from "../ui/button";

export function SparklesPreview() {
  const { theme } = useTheme();
  return (
    <>
      <nav className=" bg-black border-gray-200 backdrop-blur sticky top-0 z-40">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between  p-4 ">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
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
          <div className="space-x-4 flex items-center">
            {/* <ModeSwitch /> */}
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
              variant="outline"
            >
              Login
            </Button>
            {/* <Register/> */}
          </div>
        </div>
      </nav>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex flex-row items-center justify-center">
          <svg
            className="mr-4"
            width="60"
            height="60"
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
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            UNiShare
          </h1>
        </div>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <TypewriterEffectDemo />
    </>
  );
}
