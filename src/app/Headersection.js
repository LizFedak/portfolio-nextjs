
import Link from "next/link";

export default function Headersection() {
    return (
        <section className="my-20 flex flex-col gap-5">
            <div className="wave w-fit text-5xl">👋</div>
            <div className="text-3xl">Hi there! I\'m Liz, a developer based in Boulder, CO.</div>
            <div>I\'m an expert JavaScript developer experienced in crafting responsive web plugins, business automations, and API integrations.
            </div>
            <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">
                <Link href="/about">About Me</Link>
            </button>
        </section>
    )
}