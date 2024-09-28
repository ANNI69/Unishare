import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export function CreateCommunityFormComponent() {
  const [name, setName] = useState('')
  const [motto, setMotto] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Community name is required')
      return
    }

    // Here you would typically send the form data to your backend
    console.log({ name, motto, imageUrl, description })
    // Reset form after submission
    setName('')
    setMotto('')
    setImageUrl('')
    setDescription('')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a New Community</CardTitle>
        <CardDescription>Fill in the details to create your community</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Community Name*</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter community name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="motto">Motto</Label>
            <Input
              id="motto"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              placeholder="Enter community motto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
            />
            {imageUrl && (
              <div className="mt-2">
                <img
                  src={imageUrl}
                  alt="Community preview"
                  className="max-w-full h-auto rounded-lg"
                  onError={() => setImageUrl('')}
                />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter community description"
              rows={4}
            />
          </div>
          {error && (
            <div className="flex items-center text-red-600 space-x-2">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}
          <Button type="submit" className="w-full">Create Community</Button>
        </form>
      </CardContent>
    </Card>
  )
}