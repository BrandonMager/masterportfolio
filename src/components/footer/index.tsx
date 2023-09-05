import { SocialIcon } from "react-social-icons"
export default function Footer(){
    return <div className="bg-white h-[300px] flex flex-col justify-center items-center">
        <h1 className="font-medium">It's not how you start, but how you finish.</h1>
        <div className="flex gap-[20px] my-[24px]">
            <SocialIcon url = "https://www.linkedin.com/in/brandon-soto-garcia/" bgColor = "black" />
            <SocialIcon url = "https://github.com/BrandonMager" bgColor="black"/>
            <SocialIcon url = "mailto:sotogarciabrandon@gmail.com" bgColor="black"/>
        </div> 
        <p className="mt-[48px]">Designed and built by me</p>
    </div>
}