'use client';
import React from "react";
import projects from './content/projects'
import products from './content/products'
import writing from './content/writing'
import Headerbar from './components/Headerbar';
import Headersection from './components/Headersection';
import Writinglist from './components/Writinglist'
import Cardlist from './components/Cardlist'
import Productlist from './components/Cardproductlist'

let user = {
  name: "Liz Fedak",
  title: "Software Engineer",
  avatar: "https://irp.cdn-website.com/530aeed4/dms3rep/multi/me-c0664783.jpeg"
}

export default function App() {
  return (
    <div className="xl:max-w-1120 lg:max-w-85 md:max-w-85 sm:max-w-85 xs:max-w-85 m-auto bg-white">
        <Headerbar user={user}/>
        <Headersection></Headersection>
        <Productlist list={products} title={"Products"}></Productlist>
        <Cardlist list={projects} title={"Projects"}></Cardlist>
        <Writinglist writinglist={writing} title={"Writing"}></Writinglist>
    </div>
  );
}
