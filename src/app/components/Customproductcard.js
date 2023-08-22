import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'


function Tag({tag}) {
    console.log(tag)
    return (
        <div className="bg-sky-500 rounded text-white w-auto inline-flex p-1">{tag}</div>
    )
}

export default function Customcard({project}) {
    let tags = project.tags.map(tag => <Tag tag={tag}/>)


    return (<Link href={project.url}>
        <section className="flex flex-col h-full align-start shadow-md p-5">
            
            
                    <div className="text-black text-xl mt-1 mb-2 font-medium">{project.name}</div>
                    <div className="text-black mb-8 font-normal whitespace-break-spaces">{project.shortdescription}</div>
                    <div className="flex flex-row flex-wrap h-auto w-full gap-2">
                    {tags}
                    </div>
             
            
        </section></Link>
    );
}