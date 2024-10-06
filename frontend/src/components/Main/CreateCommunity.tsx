"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function CreateCommunity() {
  const [name, setName] = useState('');
  const [motto, setMotto] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const push = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate form fields
    if (!name.trim()) {
      setError('Community name is required');
      setLoading(false);
      return;
    }

    // Retrieve token from localStorage
    const user = localStorage.getItem('user');
    const token = user ? JSON.parse(user).token : null;

    if (!token) {
      setError('Authentication token not found. Please log in again.');
      setLoading(false);
      return;
    }

    // Decode token to get user ID (assuming JWT structure)
    const decodedToken = jwtDecode(token);
    const creatorId = decodedToken.sub;

    const communityData = {
      name,
      motto,
      imageUrl,
      description,
      members: { connect: { id: creatorId } },
      moderators: { connect: { id: creatorId } },
      memberIds: [creatorId],
      moderatorIds: [creatorId],
    };

    try {
      const response = await fetch('http://localhost:5000/api/communities/createCommunity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send the token in the Authorization header
        },
        body: JSON.stringify(communityData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create community');
      } else {
        console.log('Community created successfully');
        // Optionally reset the form or navigate the user to another page
        setName('');
        setMotto('');
        setImageUrl('');
        setDescription('');
        if (response.ok) {
          push('/');
          alert('Community created successfully');
        } // Redirect to the home page
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-2xl p-4">
        <Card className="w-full max-w-2xl mx-auto ">
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
                <Label htmlFor="imageUrl">Pfp</Label>
                <Input
                  id="imageUrl"
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter Image URL"
                />
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
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Creating...' : 'Create Community'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
