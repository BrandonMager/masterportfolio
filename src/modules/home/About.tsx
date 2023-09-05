import Me from "/public/assets/images/me.jpg"
export const About = () => {
    return <div className="w-full py-[100px] bg-[#26A889] text-white">
        <div className="container mx-auto relative flex flex-col w-full xl:w-[1100px]">
            <div className="flex flex-col w-full">
                <h1 className="mx-auto text-4xl font-medium">About Me</h1>
                <div className="w-[45px] h-[6px] rounded-[12px] bg-[#FFFFFF] mx-auto mt-[12px]"></div>
            </div>
            <div className="flex flex-col items-center mx-auto lg:flex-row lg:items-stretch w-[400px] md:w-[700px] lg:w-full mt-[80px]">
                <div className="w-full md:w-1/2">
                    <img src = {Me.src} alt = "Me" className="w-full"/>
                </div>
                <div className="flex flex-col w-full md:w-1/2 mt-[12px] lg:mt-0 lg:mx-[50px]">
                    <h1 className="text-[16px] md:text-xl font-semibold">My Journey</h1>
                    <p className="text-[14px] md:text-[16px] mt-[8px]">
                        I am Brandon, a hispanic individual born and raised in Koreatown, located in Los Angeles, CA. I was introduced to technology when I was given a breadboard and electronics to experiment. I was fascinated by what electronics can do after seeing they can be stored in devices. I centralized my focused into software development and familiarized myself with industry-based technologies and programming languages such as Python and Typescript. Along my learning journey, I was intrigued by the fintech industry and the sectors of DeFi, wealth management and technology, stock market, and payment processing. I began to develop an interest in financial sectors where I was intrigued by the wide varieties of sectors that need software solutions.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
}

//cal_live_95770571298e5621eb541ecb14363479