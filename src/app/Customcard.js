import React from "react";
import { motion } from "framer-motion";

export default function Customcard({project}) {
    return (<a href={project.url}>
        <section className="flex flex-col h-full">
            
            <div className="w-full">
                <div className="relative h-64 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} className="h-full w-full">
                    <img
                    src={project.images[0]}
                    className="h-full w-full object-cover"
                    />
                </motion.div>
                </div>
                <div className="px-4">
                    <div className="text-black mt-1 mb-2 font-medium">{project.name}</div>
                    <div className="text-black mb-8 font-normal whitespace-break-spaces">{project.description}</div>
                    <div className="text-black mb-8 font-normal">{project.tools}</div>
                </div>
            </div>
            
        </section></a>
    );
}
  