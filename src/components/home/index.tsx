"use client"
import { About } from "@/modules/home/About";
import { Hero } from "@/modules/home/Hero";
import { Projects } from "@/modules/home/Projects";
import { Technologies } from "@/modules/home/Technologies";
import { Testimonials } from "@/modules/home/Testimontials";
import { useState } from "react";

export default function Homepage(){
    return <div className="mt-[100px]">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Testimonials />
    </div>    
}