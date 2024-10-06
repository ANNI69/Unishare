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
import Post from "./components/Feed";

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
    const posts = [
      {
        username: "Swarup",
        userImage: "https://media.licdn.com/dms/image/v2/D4D03AQHQhPjU1wfcqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713977734018?e=1733961600&v=beta&t=MddYszD2JlF4kFFh0uG34GvrhPhMFsGgOMj2y5fWRuA",
        postText: "Register Here ",
        postImage: "https://i.ibb.co/8xkb6rR/Whats-App-Image-2024-10-03-at-3-35-02-PM.jpg",
      },
      {
        username: "Aniruddh ",
        userImage: "https://media.licdn.com/dms/image/v2/D4D35AQHNuqhjX35Ptw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1701268826794?e=1728813600&v=beta&t=io87DkfIo9xOhNCQS0pKomGGDV3ntpzKF3f1kPIOhPE",
        postText: "TE Students Must Attend",
        postImage: "https://i.ibb.co/SR58Pvs/Whats-App-Image-2024-08-28-at-5-27-02-PM.jpg",
      },
      {
        username: "Soham",
        userImage: "https://media.licdn.com/dms/image/v2/D4D35AQEsduHjWBvYNw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1718946851977?e=1728813600&v=beta&t=0qXAxM350yccqt1KM3mQzUkcpPgSCTUjR8HCwYe2_Ns",
        postText: "This is third post",
        postImage: "https://i.redd.it/homprs0sjcgd1.png",
      },
      {
        username: "Swarup",
        userImage: "https://media.licdn.com/dms/image/v2/D4D03AQHQhPjU1wfcqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713977734018?e=1733961600&v=beta&t=MddYszD2JlF4kFFh0uG34GvrhPhMFsGgOMj2y5fWRuA",
        postText: "Register Here ",
        postImage: "https://i.ibb.co/8xkb6rR/Whats-App-Image-2024-10-03-at-3-35-02-PM.jpg",
      },
      {
        username: "Soham",
        userImage: "https://media.licdn.com/dms/image/v2/D4D35AQEsduHjWBvYNw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1718946851977?e=1728813600&v=beta&t=0qXAxM350yccqt1KM3mQzUkcpPgSCTUjR8HCwYe2_Ns",
        postText: "This is third post",
        postImage: "https://i.redd.it/homprs0sjcgd1.png",
      },
      {
        username: "Aniruddh ",
        userImage: "https://media.licdn.com/dms/image/v2/D4D35AQHNuqhjX35Ptw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1701268826794?e=1728813600&v=beta&t=io87DkfIo9xOhNCQS0pKomGGDV3ntpzKF3f1kPIOhPE",
        postText: "TE Students Must Attend",
        postImage: "https://i.ibb.co/SR58Pvs/Whats-App-Image-2024-08-28-at-5-27-02-PM.jpg",
      },
      // Add more posts here
    ];

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
                      {posts.map((post, index) => (
                        <Post
                          key={index}
                          username={post.username}
                          userImage={post.userImage}
                          postText={post.postText}
                          postImage={post.postImage}
                        />
                      ))}
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
