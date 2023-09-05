import Image from "next/image"
import HeroImage from "@/assets/images/hero.jpg"

export const Hero = () => {
    return <div className="w-full">
        <div className="container mx-auto relative items-center justify-center flex mb-[40px] flex-col md:flex-row h-[500px]">
            <div className="w-[500px] flex flex-col mx-[28px] mb-[20px] md:mb-0">
                <h1 className="text-[#26A889] text-[24px] font-bold">Brandon Soto</h1>
                <h1 className="text-black text-[36px] font-bold">Software Engineer</h1>
                <p className="mt-[12px]">
                I make software solutions for companies and enterprises. Currently study Computer Science at UC Irvine.
                </p>
            </div>
            <div className="flex md:mt-0 items-center justify-center w-[350px] h-[350px] md:h-[300px] md:w-[400px] lg:w-[460px] lg:h-[455px] rounded-full overflow-hidden relative mx-[28px]">
                <div className="w-[505px] h-[600px] rounded-full overflow-hidden absolute "
                style={{
                    clipPath: 'ellipse(50% 50% at 50% 50%)',
                }}>
                    <img src={HeroImage.src} alt = "Brandon" className="h-full lg:w-[1104px] lg:h-[695px] absolute object-cover"/>
                </div>
                
            </div>

        </div>
    </div>
}