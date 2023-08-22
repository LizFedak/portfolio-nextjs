import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'

export default function Writingcard({project}) {
    return (<Link href={project.url} className="h-auto">
        <section className="flex flex-row h-auto shadow-md rounded-xl items-center justify-between w-auto p-5">
            
            <div className="flex flex-row items-center">
                <div className="relative h-10 w-10 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} className="h-full w-full">
                    <Image
                    src={project.logo}
                    className="h-full w-full object-contain"
                    fill={true}
                    alt={project.name}
                    />
                </motion.div>
                </div>
                <div className="px-4 h-full">
                    <div className="text-black mt-1 mb-2 font-medium">{project.name}</div>
                </div>
            </div>
            <div className="text-black">{">"}</div>
            
            
        </section></Link>
    );
}
  