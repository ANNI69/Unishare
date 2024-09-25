import Navbar from "@/components/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { useState } from "react";
import PopularCommunities from "./PopularCommunities";
import AnimatedListDemo from "./Notification";
import { Separator } from "@radix-ui/react-separator";
import Feed from "./Feed";
import Sidebar from "./Sidebar";


const Feeds = () => {
  const [fullScreen] = useState(true);

  return (
    <div className="h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-screen rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <div className="flex h-full items-center justify-center p-6">
                <Navbar />
              </div>
            </ResizablePanel>
            <ResizableHandle contentEditable />
            <ResizablePanel defaultSize={90}>
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={35}>
                  <div className="flex h-full items-center justify-center p-6">
                    <Sidebar />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={90}>
                    <div className="flex h-full flex-col items-center justify-start p-6 overflow-y-auto">
                    <Feed />
                    {/* <Button onClick={() => setFullScreen(!fullScreen)}>Toggle Full Screen</Button> */}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                {fullScreen && (
                  <ResizablePanel defaultSize={40}>
                    <div className="flex h-full flex-col pt-3">
                      <AnimatedListDemo />
                      <Separator className="my-4" />
                      {/* // If user is logged in, show notifications */}
                      <PopularCommunities />
                      {/* // show popular communities, if user is not logged in, show login form */}
                    </div>
                  </ResizablePanel>
                )}
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Feeds
