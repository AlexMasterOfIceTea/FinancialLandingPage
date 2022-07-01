import { AnimatedArrow } from "./Arrow";
import { Button, LetsTalkBtn } from "./Button";
import { HamburgerMenu } from "./Drawer";

export const links = [["our services", "#our_services"], ["who we serve", "#who_we_serve"], ["our team", "#our_team"], ["recources", "#recources"]];

export const Logo = ({light}) => (
    <div className="flex flex-col filter-">
        <div className="flex flex-row items-center">
            <img className="w-16 h-16" src="icon.png" />
            <h1 className={"text-lg md:text-xl xl:text-3xl mx-4 "+(light ? "text-slate-100":"text-slate-900")}>Cool Logo Inc.</h1>
        </div>
        <a href="https://www.flaticon.com/free-icons/project" title="project icons" className={"text-sm "+(light ? "text-slate-400":"text-slate-900")}>Project icons created by dDara - Flaticon</a>
    </div>
)

export const Navbar = () => (
    <>
        {/* mobile Navbar */}
        <div className="w-screen md:hidden flex flex-row justify-between items-center">
            <div className="mr-4 shrink-0 w-12">    
                <HamburgerMenu />
            </div>
            <div className="">
                <Logo />
            </div>
            <div className="ml-4 w-12"></div>
        </div>
        <div className="hidden md:inline-block w-screen p-4">
            <div className=" justify-center hidden md:flex lg:hidden">
                <Logo />
            </div>
            <div className="w-full flex flex-row items-center px-8 py-4">
                <div className="hidden lg:visible lg:inline-block"><Logo /></div>
                <div className="flex-grow flex justify-center">
                    <nav className="max-w-xl w-full flex flex-row justify-around">
                        {links.map(v => (
                            withLinkDecoration(v[1], 
                                <p className="capitalize text-xs sm:text-lg md:text-md 
                                text-slate-900 group-hover:text-white 
                                group-hover:-translate-y-2 transition-all duration-300">{v[0]}
                                </p>
                        )))}
                    </nav>
                </div>
                <div className="hidden lg:inline-block">
                    <LetsTalkBtn small/>
                </div>
                {/** 
                 *  <button className="group lg:flex flex-row border-2 border-black hover:border-white hover:text-slate-50 transition-all duration-300 rounded-md py-2 px-4 w-50 font-semibold">
                    Lets Talk
                    <div className="ml-4 translate-y-1 w-6"><AnimatedArrow size={0.5} fromColor="black" toColor="white" /></div>
                </button>
                 * 
                */}
               
            </div>
        </div>
    </>
)

export const withLinkDecoration = (path, elem) => (
    <a href={path} className="group flex flex-col py-2">
        {elem}
        <div className="rounded-full w-0 group-hover:w-full h-1 bg-slate-50 transition-all duration-300"></div>
    </a>
);