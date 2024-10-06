import Navbar from "@/components/Navbar";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";
import './Hackathon.css';

function Hackathon() {
    const cardData = [
        {
            imageSrc: "https://res.cloudinary.com/ideation/image/upload/dpr_auto,w_470/mrdprir1w6n9xos7j07m",
        },
        {
            imageSrc: "https://preview.redd.it/one-of-the-biggest-hackathons-in-mumbai-v0-tgd7qb1lu8fc1.jpeg?width=640&crop=smart&auto=webp&s=654d1d21ae31ae51778cdc89df6f808329e0ea25",
        },
        {
            imageSrc: "https://res.cloudinary.com/dbeptj8fp/image/upload/v1712648594/hackathon/mc2l4s2jbmllcpdnfjsu.png",
            
        },
        {
            imageSrc: "https://media.licdn.com/dms/image/v2/D4D22AQGgipAp7Pt3qg/feedshare-shrink_800/feedshare-shrink_800/0/1708873739162?e=2147483647&v=beta&t=cvOL4YsvUIx9K-RyAr7hrkTBlLZnuh-uRiGsXtl-g0M",
            
        }
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
                                        <div className="flex h-full p-6 overflow-y-auto w-full">
                                            <div className="flex flex-col w-full max-w-3xl mx-auto">
                                                <ul className="card-list">
                                                    {cardData.map((card, index) => (
                                                        <li key={index} className="card">
                                                            <a className="card-image" href={card.imageSrc} target="_blank" style={{ backgroundImage: `url(${card.imageSrc})` }} data-image-full={card.imageSrc}>
                                                                <img src={card.imageSrc} alt="title" />
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle />
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <div className="fixed bottom-4 right-4">
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    +
                </button>
            </div>
        </motion.div>
    );
}

export default Hackathon;
