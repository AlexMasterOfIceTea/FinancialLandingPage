import { TextButton, Section, SectionParagraph, SectionTitle } from "../components/typography";
import { LaptopStand } from "../constants";

const rev = (a, b, flag) => flag ? <>{b} {a}</> : <>{a} {b}</>;

const MoblieLayout = ({ title, paragraph }) => (
    <Section classes={"content py-16 sm:hidden"}>
        <SectionTitle classes="text-center mb-12">{title}</SectionTitle>
        <SectionParagraph>{paragraph}</SectionParagraph>
        <TextButton>Learn More</TextButton>
    </Section>
);

const TabletLayout = ({ title, paragraph, image, imageOnTheLeft }) => (
    <div className={"content py-16 flex-col hidden sm:flex xl:hidden"}>
        <SectionTitle classes="mb-12"> {title} </SectionTitle>
        <div className="grid grid-cols-2 gap-12">
            {rev((
                <Section>
                    <SectionParagraph>{paragraph}</SectionParagraph>
                    <TextButton>Learn More</TextButton>
                </Section>
            ), (
                image
            ),imageOnTheLeft)}
        </div>
    </div>
);

const DesktopLayout = ({ title, paragraph, decoratedImage, imageOnTheLeft }) => (
    <div className={"content py-32 grid-cols-2 gap-24 hidden xl:grid"}>
        {rev((
            <Section>
                <SectionTitle> {title} </SectionTitle>
                <SectionParagraph>{paragraph}</SectionParagraph>
                <TextButton>Learn More</TextButton>
            </Section>
        ), (
            <div className="flex flex-col justify-center">
                {decoratedImage}
            </div>
        ), imageOnTheLeft)}
    </div>
);

export const HeroPageSection = ({ title, paragraph, image, decoratedImage, imageOnTheLeft, sectionId }) => {
    const args = { title, paragraph, image, decoratedImage, imageOnTheLeft };
    return (
        <div id={sectionId} className="odd:bg-zinc-100 even:bg-zinc-200">
            <MoblieLayout {...args} />
            <TabletLayout {...args} />
            <DesktopLayout {...args} />
        </div>
    );
};
