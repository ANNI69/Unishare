
const PopularCommunities = () => {
  return (
    <>
      <div className="flex flex-col h-full max-w-[400px] p-2">
      <div className="flex w-full flex-col px-3 overflow-hidden bg-background md:shadow-xl rounded-lg shadow-lg">
        <h4 className="text-xl font-bold">Popular Communities</h4>
        <a href="/communities" className="text-sm font-semibold text-gray-90">
          View all
        </a>
        <div className="flex flex-col mt-2">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src="https://www.redditstatic.com/avatars/avatar_default_01_24A0ED.png"
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">r/AskReddit</p>
                <p className="text-xs font-light">Ask Reddit...</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-400">Join</button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src="https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">r/AskReddit</p>
                <p className="text-xs font-light">Ask Reddit...</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-400">Join</button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src="https://www.redditstatic.com/avatars/avatar_default_03_24A0ED.png"
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">r/AskReddit</p>
                <p className="text-xs font-light">Ask Reddit...</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-400">Join</button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src="https://www.redditstatic.com/avatars/avatar_default_04_24A0ED.png"
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">r/AskReddit</p>
                <p className="text-xs font-light">Ask Reddit...</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-400">Join</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default PopularCommunities
