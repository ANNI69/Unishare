import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable.tsx";
import Loading from "./components/Loading";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedListDemo from "./components/Notification";
import Sidebar from "./components/Sidebar";
import PopularCommunities from "./components/PopularCommunities";
import { Separator } from "./components/ui/separator";

function App() {
  const [loading, setLoading] = useState(true);
  const [fullScreen] = useState(true);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Show animation for the first-time visitor
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // Mark the user as visited
        localStorage.setItem("hasVisited", "true");
      }, 3000); // Adjust time as needed
    } else {
      // Skip the animation for subsequent visits
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <AnimatePresence mode="popLayout">
        {loading && <Loading />}
      </AnimatePresence>
    );

  return (
    <motion.div
      className="flex flex-col h-screen w-screen"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
                      {/* <Feed /> */}
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  {fullScreen && (
                    <ResizablePanel defaultSize={40}>
                      <div className="flex h-full flex-col pt-3">
                        <AnimatedListDemo />
                        <Separator className="my-4" />
                        <PopularCommunities />
                      </div>
                    </ResizablePanel>
                  )}
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </motion.div>
  );
}

export default App;
