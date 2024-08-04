const PopularCommunities = () => {
  const popularCommunities = [
    {
      name: "DmceMemers",
      description: "Meme Community of DMCE",
      image:
        "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "AthrvaCompsDept",
      description: "Comps Department of ACE",
      image:
        "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "VjtiCompsDept",
      description: "Comps Department of VJTI",
      image:
        "https://i.pravatar.cc/150?img=3",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-full max-w-[400px] p-2">
        <div className="flex w-full flex-col px-3 overflow-hidden bg-background md:shadow-xl rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">Popular Communities</h4>
          <div className="flex flex-col mt-2">
            {
              popularCommunities.map((community) => (
                <div className="flex items-center justify-between p-2 my-2 bg-background rounded-lg">
                  <div className="flex items-center">
                    <img
                      src={community.image}
                      alt="community"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col ml-2">
                      <h4 className="text-sm font-bold">{community.name}</h4>
                      <p className="text-xs">{community.description}</p>
                    </div>
                  </div>
                  <button className="px-2 py-1 text-xs text-white bg-primary-alt rounded-lg">
                    Join
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCommunities;
