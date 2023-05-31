import React from "react";
import{ TerminalIcon,UserIcon } from "@heroicons/react/solid";
import { testimonials } from "C:\Users\Dell\Desktop\My Portfolio\src\data.js";

export default function Testimonials(){
    return(
        <section id="Testimonials">
          <div className="container px-5 py-10 mx-auto tect-center">
            <UserIcon className="w-10 inline-block mb-4">
            </UserIcon>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Client Testimonials
            </h1>
            <div classname="flex flex-wrap m-4">
                {testimonials.map((testimonials) => (
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <TerminalIcon className=" block w-8 text-gray-500 mb-4" />
                            <p className="leading-relaxed mb-6">{testimonials.quote}
                            </p>
                            <img 
                            alt="testimonials"
                            scr={testimonials.image}
                            className="w-12 rounded-full flex-shrink-0 object-cover object-center" 
                            />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium tex-white">
                                    {Testimonials.name}
                                </span>
                                <span className="text-gray-500 text-sm uppercase">
                                    {testimonials.company}
                                </span>
                            </span>
                </div>
            </div>
                )
                )
                }
            </div>
          </div>
        </section>
    );
}