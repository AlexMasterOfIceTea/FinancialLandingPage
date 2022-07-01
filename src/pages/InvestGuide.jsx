import { HeroPageSection } from "./HeroPageSection";

const Image = () => (
    <div>
        <img src="meeting.jpg"/>
        <p className="text-xs text-slate-700">
            Photo by <a href="https://unsplash.com/@tiend_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">TienDat Nguyen</a> on <a href="https://unsplash.com/s/photos/meeting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> 
        </p>
    </div>
);

const DecoratedImage = ({ }) => (
    <div className="relative isolate">
        <img src="meeting.jpg" />
        <svg className="absolute inset-x-1/4 [top:-5%]" viewBox="0 0 100 100" height="10%" width="auto">
            <circle fill="orange" stroke="none" cx="50" cy="50" r="48" />
        </svg>
        <svg className="absolute inset-x-3/4 [bottom:-10%]" viewBox="0 0 100 100" height="20%" width="auto">
            <circle fill="white" stroke="none" cx="50" cy="50" r="48" />
        </svg>
        <svg className="absolute inset-y-1/2 [right:-20%]" viewBox="0 0 100 100" height="auto" width="20%">
            <circle fill="none" stroke="black" cx="0" cy="50" r="48" />
        </svg>
    </div>
);

export const GuideToInvest = () => (
    <HeroPageSection 
        imageOnTheLeft
        image={<Image />}
        decoratedImage={<DecoratedImage />}
        sectionId="recources"
        title="Professional Guide for Investment"
        paragraph="Get one-on-one guidance to help you create a financial plan and investment strategy tailored to your goals. A Financial Consultant can also help you select the right level of services."
    /> 
);