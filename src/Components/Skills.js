import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import {Skills} from "C:\Users\Dell\Desktop\My Portfolio\src\data.js";

export default function Skills() {
return(
<section id="Skills">
    <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
            <ChipIcon className="w-10 inline-block mb-4">
            </ChipIcon>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Skills and AMP; Techbologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:-3/4 mx-auto">
             The most basic skill of all is having patience when writing 
             your code. the other basic skill is web programming using different 
             software and different languages. for example having the basic css and html 
             coding lnguage can reall make the understanding of other different languages 
             easy and fun.
            </p>
         </div>
         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {Skills.map((Skill) => (
                <div key={Skills} className="p-2 sm;w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4 /">
                        </BadgeCheckIcon>  
                      <span className="title-font font-medium text-white">
                        {Skills}
                        </span>
                    </div>
                </div>
            ))}
         </div>
    </div>
    </section>
);
}