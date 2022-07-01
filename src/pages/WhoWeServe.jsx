import { ScrollablePageSection } from "./ScrollablePageSection";
import { investIcon, fancyGraph, diamond, lock, chair, coin } from "../constants";

const content = [{
    icon: lock,
    title: "Private Clients",
    description: "We understand fiduciary care, family dynamics and the unique attributes of high net worth Private Clients. Our main objective is for Investors to experience the highest level."
},{
    icon: chair,
    title: "Retirements Plan",
    description: "An employer-sponsored retirement plan is one of the most important employee benefits you can offer. We develop a team of experienced, qualified retirement plan professionals."
},{
    icon: coin,
    title: "Institutional Investment",
    description: "Insurance companies, state and other companies, aswell as municipalities, corporate and many more face the need to Invest in future liabilities with limited assets."
}];

export const WhoWeServe = () => (
    <ScrollablePageSection 
        sectionId="who_we_serve"
        title={<>Who <br/> we serve</>}
        scrollContent={[
            ...content,
            ...content,
            ...content,
            ...content
        ]}
    />
);
//
