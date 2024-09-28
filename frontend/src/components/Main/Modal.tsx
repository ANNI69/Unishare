import React, { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the form submission,
        // e.g., sending the data to an API
        console.log({ title, file, description })
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleRemoveTag = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };
    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
                <div className="">
                    <Card className="w-full max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Post on UNiShare</CardTitle>
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={onClose}
                            >
                                &times;
                            </button>
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
                                <div className="space-y-2">
                                    <Label htmlFor="tags">Tags</Label>
                                    <div className=" p-2 rounded flex flex-wrap gap-2">
                                        {tags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full flex items-center space-x-2 "
                                            >
                                                <span>{tag}</span>
                                                <button
                                                    onClick={() => handleRemoveTag(index)}
                                                    className="text-blue-800 hover:text-blue-600"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}

                                        <Input
                                            id="tags"
                                            placeholder="Enter tags"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            className="border-none flex-grow outline-none"
                                        />
                                    </div>
                                </div>

                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="w-full">POST</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Modal
