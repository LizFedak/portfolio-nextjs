
import Link from "next/link";

export default function Headersection() {
    return (
        <section className="my-20 flex flex-col gap-5">
            <div className="wave w-fit text-5xl">👋</div>
            <div className="text-3xl">{"Hi there! I'm Liz, a developer based in Boulder, CO."}</div>
            <div>{"I am an expert JavaScript developer who loves bringing ideas to life. My skill set revolves around creating dynamic and user-friendly web products, while prioritizing responsive design and accessibility. I excel in driving user-centered development, streamlining business processes through automation, and seamlessly integrating APIs. My endless curiosity fuels my continuous exploration of web technologies."}
            </div>
            {/* <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">
                <Link href="/about">About Me</Link>
            </button> */}
        </section>
    )
}