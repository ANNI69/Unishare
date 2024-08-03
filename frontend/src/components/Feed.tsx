import { ArrowUp, Bookmark } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import PostCard from "./PostCard"

const Feed = () => {
  return (
    <div className="w-2/3 h-full  flex flex-col p-3 overflow-y-scroll" >
      <Card className="m-4">
        <CardHeader>
          <CardTitle>Jello</CardTitle>
          <p>This is first post</p>
        </CardHeader>
        <CardContent>
          <img src="https://i.redd.it/homprs0sjcgd1.png" className="rounded" />

        </CardContent>
        <CardFooter>
          <Button variant={'ghost'}><ArrowUp /></Button>
          <Button variant={'ghost'}><Bookmark /></Button>
        </CardFooter>
      </Card>
      <PostCard title="Jello" description="This is the first post" src="https://i.redd.it/homprs0sjcgd1.png" />

    </div>
  )
}

export default Feed
