"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { CogIcon } from "lucide-react";

import { LucideIcon } from "lucide-react";

interface Item {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "New Post",
    description: "You have a new post on your feed.",
    time: "15m ago",

      icon: CogIcon,
    color: "#FFD700",
  }
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-sm p-2",
        // animation styles
        "transition-all duration-200 ease-in-out",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          // className="flex size-10 items-center justify-center rounded-2xl"
          
        >
          <span className="text-sm"><CogIcon /></span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col px-3 overflow-hidden bg-background",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
