import { JavascriptTag } from "@/components/technologies/Javascript";
import { NextjsTag } from "@/components/technologies/Next";
import { ReactTag } from "@/components/technologies/ReactTab";
import { TailwindTag } from "@/components/technologies/TailwindCss";
import { TypescriptTag } from "@/components/technologies/Typescript";

export function Technologies() {
    return <div className="w-full py-[100px] bg-[#26A889] text-white">
        <div className="container mx-auto relative flex flex-col w-full xl:w-[1100px]">
            <div className="flex flex-col w-full">
                <h1 className="mx-auto text-4xl font-medium">Skillsets</h1>
                <div className="w-[45px] h-[6px] rounded-[12px] bg-[#FFFFFF] mx-auto mt-[12px]"></div>
            </div>
            <div className="flex  mx-auto bg-white items-stretch text-black flex-col w-[350px] sm:w-[500px] md:w-[700px] lg:flex-row lg:w-full mt-[70px]">
               <div className="lg:w-1/3 p-12 border-b-2 lg:border-r-2">
                    <h1 className="text-center text-xl font-medium text-[#26A889]">Core Values</h1>
                    <p className="mt-[12px] text-center text-[14px]">I am committed to fostering an open and collaborative team environment,
                        continuously learning and adapting to new challenges.
                    </p>

                    <h1 className="text-center mt-[24px] font-normal  text-[#26A889]">Interpersonal Skills:</h1>
                    <div className="text-center text-[14px] font-light flex flex-col gap-[10px]">
                        <p>Time-conscious</p>
                        <p>Diligent</p>
                        <p>Diplomat</p>
                        <p>Adaptive to Technologies</p>
                        <p>Resourceful</p>
                        <p>Problem Solver</p>
                    </div>
               </div>
               <div className="lg:w-1/3 p-12 border-b-2 lg:border-none">
                    <h1 className="text-center text-xl text-[#26A889] font-medium">Software Development Expertise</h1>
                    <p className="mt-[12px] text-center text-[14px]">
                        I possess in-depth knowledge of industry-relevant technologies and software practices. 
                        I have designed, developed, and maintained software solutions that meet standard technical requirements and industry standards.
                    </p>
                    <h1 className="text-center mt-[24px] font-normal text-[#26A889]">Web Technologies</h1>
                    <div className="text-center font-light text-[14px]">
                        <p>Next.js, React, Typescript, HTML, CSS, Tailwind CSS, Javascript</p>
                    </div>
                    <h1 className="text-center mt-[24px] font-normal text-[#26A889]">Backend Technologies</h1>
                    <div className="text-center font-light text-[14px]">
                        <p>Python, MongoDB, Typescript, C++, Basic SQL</p>
                    </div>
                    <h1 className="text-center mt-[24px] font-normal text-[#26A889]">Miscellaneous</h1>
                    <div className="text-center text-[14px] font-light flex flex-col gap-[10px]">
                        <p>Figma</p>
                        <p>Framer</p>
                        <p>Git</p>
                        <p>Github</p>
                        <p>Microsoft Products: Excel, Word</p>
                    </div>
               </div>
               <div className="lg:w-1/3 border-l-2 p-12">
                    <h1 className="text-center text-xl text-[#26A889] font-medium">Computer Science Practices</h1>
                    <p className="mt-[12px] text-center text-[14px]">I encompass a deep understanding of software practices, cybersecurity standards, and a broad spectrum
                    of industry-relavant pracices to create secure, efficiennt and innovative software solutions.
                    </p>
                    <h1 className="text-center mt-[24px] font-normal text-[#26A889]">Software Practices</h1>
                    <div className="text-center text-[14px] font-light flex flex-col gap-[10px]">
                        <p>Software Testing</p>
                        <p>Securing API Endpoints</p>
                        <p>Handling Real-Time Errors and Bugs</p>
                        <p>Clean Code and Directory Management</p>
                        <p>Stable Software Deliveries</p>
                    </div>
               </div>

            </div>
        </div>
        </div>
}