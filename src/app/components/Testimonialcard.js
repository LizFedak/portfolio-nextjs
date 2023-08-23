import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'

export default function Testimonialcard({testimonial}) {
    return (<Link href={testimonial.link} className="bg-slate-200 p-5 rounded-lg">
        <section className="flex flex-col h-full ">
            <div className="text-black my-2 mb-2">{`"${testimonial.review}"`}</div>
            <div className="text-black my-1 font-bold">{testimonial.name}</div>
            <div className="text-black italic">{testimonial.company}</div>
        </section>
        </Link>
    );
}
  