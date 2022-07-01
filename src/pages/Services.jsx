import { ScrollablePageSection } from "./ScrollablePageSection";
import { investIcon, fancyGraph, diamond } from "../constants";


const servicePageContent = [{
    icon: investIcon,
    title: "Invest Management",
    description: "We take a holistic, comprehensive approach to investment management that's shaped by decades of research to determine the most efficient investment policy"
},{
    icon: fancyGraph,
    title: "Financial Planing",
    description: "The financial needs of each client is as unique as their own fingerprints. Our goal in financial planning is to give you the peace of mind that you are on the right track."
},{
    icon: diamond,
    title: "Wealth Investment",
    description: "Wealth investment means investing your wealth with our company, therefore making me wealthy aswell, so i can invest the investment into investing Investors. Ok?"
}];

export const Services = () => (
    <ScrollablePageSection 
        first 
        sectionId={"our_services"}
        title={<>Our <br/> Services</>} 
        scrollContent={[
            ...servicePageContent,
            ...servicePageContent,
            ...servicePageContent,
            ...servicePageContent
        ]}/>
)