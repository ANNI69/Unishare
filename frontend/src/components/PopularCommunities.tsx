import React, { useEffect, useState } from 'react';

const PopularCommunities = () => {
  interface Community {
    imageUrl: string | undefined;
    id: string;
    name: string;
    description: string;
    image?: string;
  }

  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch communities from API
  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/communities/getCoomunity');
        if (!response.ok) {
          throw new Error('Failed to fetch communities');
        }
        const data = await response.json();
        setCommunities(data);  // Assuming API returns an array of communities
        console.log(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  const JoinCommunity = async (e: React.MouseEvent) => {
    e.preventDefault();
    const communityName = (e.currentTarget as HTMLButtonElement).closest('div')?.querySelector('h4')?.textContent;
    alert(`Do You Want to Join ${communityName}`);
    
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex flex-col h-full max-w-[400px] p-2">
        <div className="flex w-full flex-col px-3 overflow-hidden bg-background rounded-lg">
          <h4 className="text-xl font-bold">Popular Communities</h4>
          <div className="flex flex-col mt-2">
            {communities.map((community) => (
              <div key={community.id} className="hover:bg-slate-200 dark:hover:bg-black flex items-center justify-between p-2 my-2 bg-background rounded-lg">
                <div className="flex items-center">
                  <img
                    src={community.imageUrl}
                    // alt={community.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col ml-2">
                    <h4 className="text-sm font-bold">{community.name}</h4>
                    <p className="text-xs">{community.description}</p>
                  </div>
                </div>
                <button onClick={JoinCommunity} className="px-2 py-1 text-xs bg-primary-alt rounded-lg dark:bg-black text-blue">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCommunities;
