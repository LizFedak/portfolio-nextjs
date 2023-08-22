import React from "react";
import { motion } from "framer-motion";

export default function Writingcard({project}) {
    return (<a href={project.url}>
        <section className="flex flex-row h-auto shadow-md rounded-xl items-center justify-between w-auto">
            
            <div className="flex flex-row">
                <div className="relative h-10 w-10 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} className="h-full w-full">
                    <img
                    src={project.logo}
                    className="h-full w-full object-contain"
                    />
                </motion.div>
                </div>
                <div className="px-4">
                    <div className="text-black mt-1 mb-2 font-medium">{project.name}</div>
                </div>
            </div>
            <div className="text-black">{">"}</div>
            
            
        </section></a>
    );
}
  