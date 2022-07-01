import { chair, coin, diamond, fancyGraph } from "../constants";
import { Logo, withLinkDecoration } from "./Navbar";

const links = [
    ["Our Service", "#our_service"],
    ["Who we serve", "#who_we_serve"],
    ["Our Team", "#our_team"],
    ["Recources", "#resources"],
    ["Private Clients", "#"],
    ["Retirement Plans", "#"],
    ["Institutional Investment", "#"],
    ["Charatable Organisations", "#"],
    ["Investment Management", "#"],
    ["Financial Plan", "#"],
    ["Wealth Management", "#"],
    ["Fiduciary Advice", "#"],
];

const Divider = () => <div className="h-[1px] bg-slate-600 w-full my-12"></div>


const BottomPart = () => (
    <div className="flex flex-row flex-wrap justify-between">
        <div className="shrink-0 mr-16"><Socials /> </div>
        <div className=""><CompanyLinks /> </div>
    </div>
)

const DesktopLayout = () => (
    <div className="w-full">
        <div className="flex flex-row">
            <div className="[flex-grow:1] shrink-0">
                <Logo light />
            </div>
            <div className="[flex-grow:3] shrink-0">
                <QuickLinks />
            </div>
        </div>
        <Divider />
        <BottomPart />
    </div>
);

const MoblieLayout = () => (
    <div className="flex flex-col w-full">
        <Logo light />
        <Divider />
        <QuickLinks />
        <Divider />
        <BottomPart />
    </div>
);

export const Footer = () => (
    <div className="w-screen bg-slate-800 py-32">
        <div className="content">
            <div className="lg:hidden">
                <MoblieLayout />
            </div>
            <div className="hidden lg:block">
                <DesktopLayout />
            </div>
        </div>
    </div>
);

const SocialIcon = ({src}) => (
    <div className="p-4 bg-slate-700 rounded-[50%] hover:rounded-lg group hover:bg-yellow-500 transition-all duration-300">
        <img src={src} width="30" height="auto" className="group-hover:invert"/>
    </div>
)

const Socials = () => (
    <div className="flex flex-row gap-x-6 mb-12">
        {["facebook-icon.svg", "instagram-icon.svg", "twitter-icon.svg", "linked-in-icon.svg"].map(src => <SocialIcon src={src}/>)}
    </div>
);

const QuickLinks = () => (
    <div className="columns-3xs">
        {links.map(([text, href]) => (
            <div className="max-w-min">
                <StyledLink {...{ text, href }} />
            </div>
        ))}
    </div>
);

const StyledLink = ({ href = "", text }) =>
    withLinkDecoration(href,
        <p className="text-lg text-slate-100 whitespace-nowrap">
            {text}
        </p>
    )

const CompanyLinks = () => (
    <div className="flex flex-row flex-wrap gap-x-12">
        <StyledLink text="Privacy Policy" />
        <StyledLink text="Terms and Conditions" />
        <StyledLink text="Cookies Policy" />
    </div>
);