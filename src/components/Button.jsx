import { createRef } from "react";
import { AnimatedArrow } from "../components/Arrow";

export const Button = ({ light, children, classes}) => {
    const coloring = light ? 
        "text-slate-900 border-2 border-slate-900 hover:text-slate-100 hover:border-slate-200" : 
        "bg-slate-900 text-slate-50 hover:shadow-yellow-600 hover:shadow-xl hover:border-slate-900";

    //bg-slate-900 text-white hover:ring-2 hover:ring-white hover:text-white
    return (
        <button className={`
            ${coloring}
            group flex flex-row items-center gap-x-6
            text-lg sm:text-2xl 
            transition-all duration-300
            rounded-md py-4 px-8 font-semibold
            ${classes}
        `}>
            {children}
        </button>
    );
}

export const LetsTalkBtn = ({fromColor="white", toColor="orange", small}) => {
    if(small){
        fromColor = "black";
        toColor="white";
    }
    const arrowClasses = small ? "w-6 -translate-y-1":"w-12 -translate-y-2";
    const buttonClasses = small ? `
        px-4 py-2 text-sm sm:text-lg 
    `:"";

    return (
        <Button classes={buttonClasses} light={small}>
            Lets Talk <div className={arrowClasses}> <AnimatedArrow fromColor={fromColor} toColor={toColor} size={small ? 0.5:1}/></div>
        </Button>
    );
}
