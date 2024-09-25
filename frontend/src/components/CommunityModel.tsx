import { Label } from "@radix-ui/react-label"
import { Link } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


const Modal = () => {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [description, setDescription] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the form submission,
        // e.g., sending the data to an API
        console.log({ title, file, description })
    }


    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div className="text-center">
                    <Card className="w-full max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Upload File</CardTitle>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Enter title"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">File</Label>
                                    <Input
                                        id="file"
                                        type="file"
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Enter description"
                                        rows={4}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="w-full">POST</Button>
                            </CardFooter>
                        </form>
                    </Card>
                    <div className="flex justify-center mt-4">

                        {/* Navigates back to the base URL - closing the modal */}
                        <Link
                            to={"/"}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Close
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
