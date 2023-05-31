import React from "react";
export default function About () {
    return(
     <section id="About"> 
     <div ClassName="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
     <div ClassName="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hi, i'm Kate.
        <br className="hidden lg:inlineblock"/> I love to build amazing web Apps.
        </h1>
        <p className="mb-8-leading-relaxed">
            A web designer and developer from Nairobi,Kenya 
            i aspire to help others gain the skillset to design
            and create websites of their own.
            </p>
        <div className="flex justify-center">
            <a href="#Contacts"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work with me.
                </a>
            <a href="#Projects"  
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Here are some of the projects i have done.
                </a>
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        img id="mygirl"
            alt="hero"
            src="C:\Users\Dell\Desktop\My Portfolio\src\mygirl.jpg"
          />
        </div>
    </section>

    );
}
