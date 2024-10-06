import Navbar from "@/components/Navbar";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@/components/ui/resizable.tsx";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";

function QANDA() {

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
                                            <div className="flex flex-col items-center justify-center w-full">
                                                <h1 className="text-3xl font-bold">Q&A</h1>
                                                <p className="text-lg font-light">
                                                    Welcome to the Q&A page!
                                                </p>
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
        </motion.div>
    );
}

export default QANDA;
