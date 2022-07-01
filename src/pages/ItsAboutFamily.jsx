import { LearnMoreBtn, Section, SectionParagraph, SectionTitle } from "../components/typography";
import { LaptopStand } from "../constants";
import { HeroPageSection } from "./HeroPageSection";

const title = "We'll help you navigate Family communication";
const paragraph = `You've worked hard to achieve wealth and you're ready to begin
    thinking about creating a plan that reflects your values and priorities about transferring that wealth
    between generations of your family.`;


const Image = () => (
    <div>
        <img src="family_picture.jpg" />
    </div>
);

//Photo by <a href="https://unsplash.com/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CDC</a> on <a href="https://unsplash.com/s/photos/family?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
export const ItsAboutFamily = () => (
    <HeroPageSection
        title={title}
        paragraph={paragraph}
        image={<Image />}
        decoratedImage={<DecoratedImage />}
    />
)

const DecoratedImage = ({ }) => (
    <div className="relative isolate">
        <img src="family_picture.jpg" />
        <svg className="absolute inset-x-3/4 [top:-4%]" viewBox="0 0 100 100" height="8%" width="auto">
            <circle fill="orange" stroke="none" cx="50" cy="50" r="48" />
        </svg>
        <svg className="absolute inset-y-1/2 left-0" viewBox="0 0 100 100" height="20%" width="auto">
            <circle fill="#E4E4E7" stroke="none" cx="0" cy="50" r="48" />
        </svg>
        <LaptopStand classes="-z-10 absolute inset-x-1/4 [bottom:-12%]" width="50%" height="auto" />
    </div>
);
