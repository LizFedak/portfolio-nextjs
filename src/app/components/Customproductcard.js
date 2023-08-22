import React from "react";
import Link from 'next/link'



function Tag({tag, index}) {
    
    return (
        <div key={index} className="bg-sky-500 rounded text-white w-auto inline-flex p-1">{tag}</div>
    )
}

export default function Customcard({project, index}) {
    let tags = project.tags.map((tag, index) => <Tag key={index} index={index} tag={tag}/>)


    return (<Link key={index} index={index} href={project.url}>
        <section className="flex flex-col h-full align-start shadow-md p-5">
            
            
                    <div className="text-black text-xl mt-1 mb-2 font-medium">{project.name}</div>
                    <div className="text-black mb-8 font-normal whitespace-break-spaces">{project.shortdescription}</div>
                    <div className="flex flex-row flex-wrap h-auto w-full gap-2">
                    {tags}
                    </div>
             
            
        </section></Link>
    );
}