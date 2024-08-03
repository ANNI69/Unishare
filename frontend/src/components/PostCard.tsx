import { ArrowUp, Bookmark } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

type PostCardProps = {
  title : string,
  description: string,
  src: string
}

const PostCard = ({title,description,src}:PostCardProps) => {
  return (
    <Card className="m-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p>{description}</p>
        </CardHeader>
        <CardContent>
          <img src={src} className="rounded" />

        </CardContent>
        <CardFooter>
          <Button variant={'ghost'}><ArrowUp /></Button>
          <Button variant={'ghost'}><Bookmark /></Button>
        </CardFooter>
      </Card>
  )
}

export default PostCard
