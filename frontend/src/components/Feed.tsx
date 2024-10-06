import { ArrowDown, ArrowUp, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";

interface PostProps {
  username: string;
  userImage: string;
  postText: string;
  postImage: string;
}

const Post: React.FC<PostProps> = ({ username, userImage, postText, postImage }) => {

  const [likeCount, setLikeCount] = React.useState(0);
  const [dislikeCount, setDislikeCount] = React.useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <Card className="m-4">
      <CardHeader>
        <div className="flex flex-row items-center gap-2">
          <img
            height={40}
            width={40}
            src={userImage}
            className="rounded-full"
          />
          <h4>{username}</h4>
        </div>
        <p>{postText}</p>
      </CardHeader>
      <CardContent>
        <img src={postImage} className="rounded" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row justify-between ">

          <Button
            className="hover:bg-slate-200 rounded-l-full bg-gray-200"
            variant={"ghost"}
            onClick={handleLike}
          >
            <ArrowUp color="black" size={15} />
            <span className="text-black">{likeCount}</span>
          </Button>
          <Button
            className="hover:bg-slate-200 rounded-r-full bg-gray-200"
            variant={"ghost"}
            onClick={handleDislike}
          >
            <ArrowDown color="black" size={15} />
            <span className="text-black">{dislikeCount}</span>
          </Button>
        </div>
        <div className="flex flex-row px-6 gap-2">
          <Button className="rounded-full bg-gray-200" variant={"outline"}>
            <ChatBubbleIcon color="black" />
          </Button>
          <Button
            className="hover:bg-slate-200 rounded-full bg-gray-200"
            variant={"outline"}
          >
            <Bookmark color="black" size={15} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
