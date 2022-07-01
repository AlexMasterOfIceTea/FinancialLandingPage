import { Button, LetsTalkBtn } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Title } from "../components/Title";

export const LandingPage = () => (
    <>
        <div className="p-4 min-h-screen pb-16 bg-gradient-radial-at-tl from-yellow-300 to-yellow-600 text-slate-900 selection:bg-orange-700 selection:text-slate-50">
            <Navbar />
            <div className="flex flex-col h-full justify-start max-w-[1400px] mx-auto pt-8">
                <Title></Title>
                <h2 className="text-xl text-slate-700 text-center mt-12"> This Site is inspired by
                    <a href="https://dribbble.com/shots/17783726-PUR-S-Financial-Landing-Page" target="_blank" className="
                        text-black hover:text-white underline
                    "> Andri Prasetia's Design </a>
                </h2>
                <div className="flex flex-row justify-center mt-24 gap-6">
                     <LetsTalkBtn/>
                     <Button light>Learn more</Button>
                </div>
                <div className="w-max-[1400px] hidden lg:visible lg:flex flex-row justify-between w-full">
                    {withCircle("w-1/4 translate-y-1/3 border-2 border-black", "inset-y-3/4 -right-4", <img src="pic1.jpg" />)}
                    <img src="pic2.jpg" className="w-1/4 translate-y-2/3 border-2 border-black" />
                    {withCircle("w-1/4 translate-y-1/3 border-2 border-black", "-top-3 inset-x-1/3", <img src="pic3.jpg" />)}
                </div>
            </div>
        </div>
        {/* Add invisible image so margins are correct*/}
        <div className="max-w-[1400px] invisible hidden lg:block">
            <img src="pic2.jpg" className="w-1/4 border-2 border-black" />
        </div>
    </>
);

const withCircle = (attr, pos, elem) => (
    <div className={"relative [height:max-content] " + attr}>
        {elem}
        <svg className={"absolute " + pos}
            width="30" height="30" viewBox="-1 -1 2 2">
            <circle cx="0" cy="0" r="0.9" fill="orange" stroke="black" opacity="1" strokeWidth="0.1" />
        </svg>
    </div>
);