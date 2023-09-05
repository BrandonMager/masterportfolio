import Prestige from "/public/assets/images/prestige.png"
import TradePhoto from "/public/assets/images/trade.png"
import Sneaker from "/public/assets/images/sneaker.png"
import { JavascriptTag } from "@/components/technologies/Javascript"
import { NextjsTag } from "@/components/technologies/Next"
import { PrivateTag } from "@/components/technologies/Private"
import { ReactTag } from "@/components/technologies/ReactTab"
import { TailwindTag } from "@/components/technologies/TailwindCss"
import { TypescriptTag } from "@/components/technologies/Typescript"
import { PythonTag } from "@/components/technologies/PythonTag"
import { PythonSimpleGUITag } from "@/components/technologies/PySimpleGUI"
import { PuppeteerTag } from "@/components/technologies/Puppeteer"
import { PublicTag } from "@/components/technologies/Public"
export const Projects = () => {

    return <div className="w-full py-[50px] bg-[#26A889] text-white">
        <div className="container mx-auto relative flex flex-col w-full xl:w-[1100px]">
            <div className="flex flex-col w-full">
                <h1 className="mx-auto text-4xl font-medium">Projects</h1>
                <div className="w-[45px] h-[6px] rounded-[12px] bg-[#FFFFFF] mx-auto mt-[12px]"></div>
            </div>
            <div className="flex flex-col items-center mx-auto gap-[34px] w-[400px] md:w-[750px] lg:w-full mt-[80px]">
                <div className="flex flex-col md:flex-row w-full bg-white p-8 justify-center">
                    <div className="w-full md:w-1/2">
                        <img src = {Prestige.src} alt = "Prestige - On Demand" className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col mt-[12px] md:mt-0 md:px-[24px]">
                        <h1 className="text-[18px] font-semibold mb-[8px] text-black">Prestige - On Demand</h1>
                        <p className="font-light text-[14px] md:text-[16px] text-black">
                            A service booking web app that allows users to book steam cleaning sessions through appointments. As the lead developer, I applied SEO and web-friendly practices to deliver a stable and responsive frontend. On the backend, I connected databases and API endpoints to perform CRUD operations on booking details and page data.
                        </p>
                        <div className="flex flex-col flex-wrap mt-[12px] gap-[10px]">
                            <div className="text-black font-medium">Tags:</div>
                            <div className="flex flex-wrap gap-[10px]">  
                                <TypescriptTag />
                                <JavascriptTag />
                                <TailwindTag />
                                <NextjsTag />
                                <PrivateTag />

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full bg-white p-8 justify-center">
                    <div className="w-full md:w-1/2">
                        <img src = {TradePhoto.src} alt = "Prestige - On Demand" className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col mt-[12px] md:mt-0 md:px-[24px]">
                        <h1 className="text-[18px] font-semibold mb-[8px] text-black">Fiemotrak - Broker App</h1>
                        <p className="font-light text-[14px] md:text-[16px] text-black">
                            A broker app that includes exclusive features such as emotion indexes, risk analysis, and advanced chart viewing. Open-source project. As the owner and lead developer of this project, I designed and researched appealing charts and designs that would be performance-friendly with traders. 
                            Reinforced backend site and added authentication layers to enforce software from spammers.
                        </p>
                        <div className="flex flex-col flex-wrap mt-[12px] gap-[10px]">
                            <div className="text-black font-medium">Tags:</div>
                            <div className="flex flex-wrap gap-[10px]">  
                                <TypescriptTag />
                                <JavascriptTag />
                                <TailwindTag />
                                <NextjsTag />
                                <ReactTag />

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full bg-white p-8 justify-center">
                    <div className="w-full md:w-1/2">
                        <img src = {Sneaker.src} alt = "Prestige - On Demand" className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col mt-[12px] md:mt-0 md:px-[24px]">
                        <h1 className="text-[18px] font-semibold mb-[8px] text-black">Sneaker Bot GUI</h1>
                        <p className="font-light text-[14px] md:text-[16px] text-black">
                           A graphical application powered with Python that allows users to create sessions that autocheckouts sneaker purchases
                           using automation and third-party libaries. As the founder of the app, I established a software processing map to arrange API operations, design,
                           and libraries to platform the service for clients to use. Time precision and captcha algorithms were used to reduce service interruptions to deliver session that
                           guarantee a 75% purchase within 30 seconds to a minute.
                        </p>
                        <div className="flex flex-col flex-wrap mt-[12px] gap-[10px]">
                            <div className="text-black font-medium">Tags:</div>
                            <div className="flex flex-wrap gap-[10px]">  
                                <PythonTag />
                                <PythonSimpleGUITag />
                                <PuppeteerTag />
                                <PublicTag />

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
