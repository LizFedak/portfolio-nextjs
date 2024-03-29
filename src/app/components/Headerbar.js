import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'

export function Headerbarold({user}) {
    return (
        <section className="items-center p-3 max-w-1120 bg-white w-full flex flex-row justify-between border border-slate-600 rounded-full">
            <div className="flex flex-row justify-start gap-3 items-center">
                <div className="rounded-full w-12 h-12 overflow-hidden">
                    <Image src={user.avatar}
                    fill={true}
                    alt={project.name}
                    ></Image>
                    
                </div>
                <div className="flex flex-col">
                    <div className="text-black text-lg">{user.name}</div>
                    <div className="text-black text-lg">{user.title}</div>
                </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
                <motion.div initial={{ opacity: 0, scale: .9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}>
                    <div className="text-xl text-black">•</div>
                </motion.div>
                <div className="text-black">Looking for my next amazing role!</div>
            </div>
        </section>
    )
}

export default function Headerbar({user}) {
    return (
        <section className="justify-end items-end my-10 w-full flex flex-row justify-between">
            <div className="flex flex-row justify-end gap-3 items-end w-full">
                <Link href={"https://docs.google.com/document/d/1jqcAiYASVmJO7BvC9En_0IwQyEdFndo5NwOXDMpTXUo/edit?usp=sharing"}>Resume</Link>
                <Link href="#Products">Products</Link>
                <Link href="#Projects">Projects</Link>
                <Link href="#Writing">Writing</Link>
            </div>    
        </section>
    )
}