'use client';
import React, {useState} from "react";
import Customcard from './Customcard';
import Writingcard from './Writingcard';
import projects from './content/projects'
import products from './content/products'
import writing from './content/writing'
import Headerbar from './Headerbar';
import Headersection from './Headersection';
import Writinglist from './Writinglist'
import Cardlist from './Cardlist'

let user = {
  name: "Liz Fedak",
  title: "Software Engineer",
  avatar: "https://irp.cdn-website.com/530aeed4/dms3rep/multi/me-c0664783.jpeg"
}

export default function App() {
  return (
    <div className="xl:max-w-1120 lg:max-w-90 md:max-w-90 sm:max-w-90 xs:max-w-90 m-auto bg-white">
        <Headerbar user={user}/>
        <Headersection></Headersection>
        <Cardlist list={products} title={"Products"}></Cardlist>
        <Cardlist list={projects} title={"Projects"}></Cardlist>
        <Writinglist writinglist={writing} title={"Writing"}></Writinglist>
    </div>
  );
}
