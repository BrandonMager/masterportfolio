import Hamburger from "@/assets/svgs/hamburger.svg"
import Image from "next/image"

export default function Navbar(){
    return <div className="w-full absolute top-0 flex p-8">
        <div className="absolute flex items-center left-0 mx-[36px] md:mx-[48px] lg:mx-0 lg:left-[100px]">
            <h1 className="brandon">Brandon</h1>
        </div>
        <div className="absolute hidden right-[100px]">
            <div className="mx-[36px] xl:mx-[77px] text-lg font-medium">
                About
            </div>
            <div className="mx-[36px] xl:mx-[77px] text-lg font-medium">
                Experience
            </div>
            <div className="mx-[36px] xl:mx-[77px] text-lg font-medium">
                Projects
            </div>
            <div className="mx-[36px] xl:mx-[77px] text-lg font-medium">
                Technologies
            </div>
        </div>
        <div className="absolute hidden flex items-center right-[28px] md:right-[108px] lg:hidden">
            <Image src = {Hamburger.src} alt = "Menu" width = {30} height={30}/>

        </div>
    </div>
}