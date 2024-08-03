import Navbar from "@/components/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence, motion } from "framer-motion";
import  AnimatedListDemo  from "./components/Notification";
import Sidebar from "./components/Sidebar";
import { Button } from "./components/ui/button";

function App() {
  const [loading, setLoading] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    window.process = {
      ...window.process,
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed



  }, [])

  if (loading)
    return <AnimatePresence mode="popLayout" >
      {loading && <Loading />}
    </AnimatePresence>

  return (
    <>
      <motion.div className="flex flex-col h-screen w-screen" layout
        initial={{opacity:0}}
        animate={{opacity:1}}
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
                  <ResizablePanel defaultSize={30}>
                    <div className="flex h-full items-center justify-center p-6">
                      <Sidebar />
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={90}>
                    <div className="flex h-full items-center justify-center p-6">
                      Feed
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  {
                    fullScreen && (
                      <ResizablePanel defaultSize={30}>
                        <div className="flex h-full items-center justify-center p-6">
                          <AnimatedListDemo />
                        </div>
                      </ResizablePanel>
                    )
                  }
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
