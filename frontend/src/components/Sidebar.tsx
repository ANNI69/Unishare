import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import {
  BookAIcon,
  Code2Icon,
  Flame,
  Home,
  Newspaper,
  WorkflowIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
const SideBar = () => {
  const items = [
    {
      icon: <Home className="h-4 w-4" />,
      label: "Home",
      to: "/",
    },
    {
      icon: <Flame className="h-4 w-4" />,
      label: "Popular",
      to: "/popular",
    },
  ];
  const topics = [
    {
      icon: <BookAIcon className="h-4 w-4" />,
      label: "Resources",
      to: "/resources",
    },
    {
      icon: <Newspaper className="h-4 w-4" />,
      label: "Alerts",
      to: "/alerts",
    },
    {
      icon: <QuestionMarkIcon className="h-4 w-4" />,
      label: "Q&A",
      to: "/qna",
    },
    {
      icon: <WorkflowIcon className="h-4 w-4" />,
      label: "Internships",
      to: "/internships",
    },
    {
      icon: <Code2Icon className="h-4 w-4" />,
      label: "Hackathons",
      to: "/hackaton",
    },
  ];

  return (
    <div className="hidden  md:block h-full w-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start  text-xl font-medium ">
            {items.map((item) => (
              <Link
                to={item.to}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/90"
                key={item.label}
              >
                {item.icon} {item.label}
              </Link>
            ))}
            <Separator className="my-4" />

            <Accordion
              type="single"
              collapsible
              className="w-auto text-muted-foreground transition-all mt-3"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between w-full uppercase text-md">
                  {" "}
                  Topics{" "}
                </AccordionTrigger>
                <AccordionContent>
                  {topics.map((topics) => (
                    <Link
                      to={topics.to}
                      className="flex items-center gap-3 rounded-lg text-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/90"
                      key={topics.label}
                    >
                      {topics.icon} {topics.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </div>
        <Button className="w-full">
          <Link to={"/createCommunity"}>Create A Community</Link>
        </Button>
      </div>

    </div>
  );
};

export default SideBar;
