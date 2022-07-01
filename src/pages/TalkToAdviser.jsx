import { Button, LetsTalkBtn } from "../components/Button";

export const TalkToAdviser = () => (
    <div className="w-screen mt-16 c-max:py-32 md:pd-32 relative">
        <div className="content py-[7%] px-8 md:px-[10%] bg-gradient-radial-at-t from-yellow-300 to-yellow-500 z-10 relative">
            <h1 className="text-slate-900 tracking-tight transition-all duration-300 uppercase [font-size:clamp(2em,3vw,4em)] font-medium text-center">
                Talk to an advisor who understands your Goals
            </h1>
            <p className="[font-size:clamp(1em,2vw,1.5em)] text-slate-600 text-center mt-16">Its time you have the opportunity to work with an adviser whose people, process and technology align on the simple goal of helping you achieve a better outcome.</p>
            <div className="pt-16 flex justify-center">
                
                <LetsTalkBtn />
            </div>
        </div>
        <div className="absolute inset-0 h-1/2 w-full bg-zinc-100"></div>
        <div className="absolute inset-x-0 inset-y-1/2 h-1/2 w-full bg-zinc-200"></div>
    </div>
);