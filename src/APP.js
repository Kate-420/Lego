import React from 'react';
import About from "C:\Users\Dell\Desktop\My Portfolio\src\components\About.js"
import Contacts from "C:\Users\Dell\Desktop\My Portfolio\src\components\Contacts.js"
import Navbar from "C:\Users\Dell\Desktop\My Portfolio\src\components\Navbar.js"
import Projects from "C:\Users\Dell\Desktop\My Portfolio\src\components\Projects.js"
import Skills from "C:\Users\Dell\Desktop\My Portfolio\src\components\Skills.js"
import Testimonials from "C:\Users\Dell\Desktop\My Portfolio\src\components\Testimonials.js"

export default function APP() {
    return(
        <main className="text-gray-400 bg-navyblue-900 body-font">
            <Navbar />
            <About />
            <Contacts />
            <Projects />
            <Skills />
            <Testimonials />
        
            </main>
    );
}