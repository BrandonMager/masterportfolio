import Star from "@/public/assets/svgs/star.svg"
import { motion } from "framer-motion"
import Typhoon from "@/public/assets/svgs/typhoon.svg"

export const Testimonials = () => {
    return <div className="w-full py-[100px] bg-[#26A889] text-white">
        <div className="container mx-auto relative flex flex-col w-full xl:w-[1100px]">
            <div className="flex flex-col w-full">
                <h1 className="mx-auto text-4xl font-medium">Testimonials</h1>
                <div className="w-[45px] h-[6px] rounded-[12px] bg-[#FFFFFF] mx-auto mt-[12px]"></div>
            </div>
            
            <div className="flex flex-col gap-[40px] items-center mx-auto md:flex-row lg:items-stretch w-[400px] md:w-[700px] lg:w-full mt-[80px]">
                <div className="md:w-1/2">
                <motion.div style = {{width: "100%"}} whileHover={{scale: 1.05, boxShadow: "5px 5px black"}}>
                <div className="w-full bg-white p-12">
                    <div className="flex items-center mb-[12px]">
                        <h1 className="text-[18px] mr-[18px] font-semibold text-[#00DEA9]">J. Padilla</h1>
                        <img src = {Typhoon.src} className="w-[35px]"/>
                    </div>
                    
                    <span className="text-black">CEO at Typhoon Media Group; Former Senior Software Engineer</span>
                    <div className="flex my-2">
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                    </div>
                    <p className="text-black my-[16px]">
                        Brandon has a unique set of toolbox and skills when it comes to approaching complex problems.
                        He uses a wide array of practices to execute real-time clean software. He has created a 
                        greater environment with fostering knowledge and communicational skills within our software department.
                    </p>
                    
                </div>
                </motion.div>
                </div>

                <div className="md:w-1/2">
                <motion.div style = {{width: "100%"}} whileHover={{scale: 1.05, boxShadow: "5px 5px black"}}>
                <div className="w-full bg-white p-12">
                    <div className="flex items-center mb-[12px]">
                        <h1 className="text-[18px] mr-[18px] font-semibold text-[#00DEA9]">Brent Rojo</h1>
                    </div>
                    
                    <span className="text-black">Lead School Chair at Venice High School</span>
                    <div className="flex my-2">
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                        <img src = {Star.src} width={35} />
                    </div>
                    <p className="text-black my-[16px]">
                        Brandon was a vivid learner and a team player throughout his time with projects alongside my team. He
                        was eagered to listen to different perspective on how to design and build software for the students to use. 
                        With the team, he was able to deliver understandable and stable programs. The school has greater technology 
                        integrated from his endeavors!
                    </p>
                    
                </div>
                </motion.div>
                </div>
                
            </div>
          
            
        </div>
    </div>
}