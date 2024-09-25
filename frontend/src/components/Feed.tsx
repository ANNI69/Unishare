import { ArrowDown, ArrowUp, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "./ui/card";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const Feed = () => {
  return (
    <div className="w-full h-full  flex flex-col  overflow-y-scroll">
      <Card className="m-4">
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <img
              height={40}
              width={40}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIkQd0Vd4G0A-D-j8WKvaDCE4Mo4B01uTJg&s"
              className="rounded-full"
            />
            <h4>Swarup</h4>
          </div>
          <p>This is first post</p>
        </CardHeader>
        <CardContent>
          <img src="https://i.redd.it/homprs0sjcgd1.png" className="rounded" />
        </CardContent>
        <CardFooter>
          <div className="flex flex-row justify-between ">
            <Button
              className=" hover:bg-slate-200 rounded-l-full bg-gray-200"
              variant={"ghost"}
            >
              <ArrowUp color="black" size={15} />
            </Button>
            <Button
              className="hover:bg-slate-200 rounded-r-full bg-gray-200 "
              variant={"ghost"}
            >
              <ArrowDown color="black" size={15} />
            </Button>
          </div>
          <div className="flex flex-row px-6 gap-2">
            <Button className="rounded-full bg-gray-200" variant={"outline"}>
              <ChatBubbleIcon color="black" />
            </Button>
            <Button
              className=" hover:bg-slate-200 rounded-full bg-gray-200"
              variant={"outline"}
            >
              <Bookmark color="black" size={15} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Feed;
