import Navbar from "@/components/Navbar";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";

function Resources() {

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
                                            <div className="flex h-full p-6 overflow-y-auto w-full">
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    <h1 className="text-3xl font-bold"> Resources </h1>
                                                    <p className="text-lg font-light">
                                                        Welcome to the Resources page!
                                                    </p>
                                                </div>
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

export default Resources;
