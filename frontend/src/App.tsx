import Navbar from "@/components/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedListDemo from "./components/Notification";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import PopularCommunities from "./components/PopularCommunities";
import { Separator } from "./components/ui/separator";
function App() {
  const [loading, setLoading] = useState(true);
  const [fullScreen] = useState(true);

  useEffect(() => {
    window.process = {
      ...window.process,
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  if (loading)
    return (
      <AnimatePresence mode="popLayout">
        {loading && <Loading />}
      </AnimatePresence>
    );

  return (
    <>
      <motion.div
        className="flex flex-col h-screen w-screen"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
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
                    <div className="flex h-full items-center justify-center">
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
      </motion.div>
    </>
  );
}

export default App;
