import Navbar from "@/components/Navbar";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";
import './Alerts.css'

function Alerts() {
    const newsItems: NewsItem[] = [
        {
            title: "SIH 2024 Date Extended !!!",
            content:
                "The last date for submission of ideas for SIH 2024 has been extended to 1st October 2024.",
        },
        {
            title: "IA Dates Of Comps,It, AIDS !!!",
            content:
                "The internal assessment dates for the subjects Computer Networks, Information Theory, and Artificial Intelligence and Distributed Systems have been announced.",
        },

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
                                        <News items={newsItems} />
                                    </ResizablePanel>
                                    <ResizableHandle />
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

            {/* Floating + button */}
            <div className="fixed bottom-4 right-4">
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    +
                </button>
            </div>
        </motion.div>

    );
}

interface NewsItem {
    title: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
}

function News({ items }: NewsProps) {
    return (
        <div>
            <section id="news" className="news">
                {items.map((item, index) => (
                    <div key={index} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <button className="button-click">Read More</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Alerts;
