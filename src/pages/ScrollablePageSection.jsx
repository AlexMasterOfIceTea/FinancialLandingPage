import { useRef } from "react";
import { AnimatedArrow } from "../components/Arrow";
import { Card } from "../components/Card";
import { Carousel, CarouselWithAutoscroll } from "../components/Carousel"
import { SectionTitle } from "../components/typography";

export const ScrollablePageSection = ({ title, scrollContent, sectionId, first }) => {
    const ref = useRef();

    return (
        <div id={sectionId} className={"odd:bg-zinc-100 even:bg-zinc-200 "+(first?"lg:-mt-20":"")}>
            <div className={"mt-4 flex flex-col content "+(first ? "": "py-16 md:py-32")}>
                <div className="flex flex-row justify-between">
                    <SectionTitle> {title} </SectionTitle>
                    <div className="flex flex-row gap-4 invisible sm:visible">
                        <button
                            onClick={() => ref.current?.prev()}
                            className="rotate-180 w-16 h-16 md:w-24 md:h-24 
                        rounded-full border-2 border-slate-800 relative group">
                            <div className="absolute md:left-6 md:top-9 left-3 top-6">
                                <AnimatedArrow fromColor="black" />
                            </div>
                        </button>
                        <button
                            onClick={() => ref.current?.next()}
                            className="w-16 h-16 md:w-24 md:h-24 
                        rounded-full bg-slate-800 relative group">
                            <div className="absolute md:left-6 md:top-9 left-3 top-6">
                                <AnimatedArrow />
                            </div>
                        </button>
                    </div>
                </div>
                <Carousel ref={ref} parentAttr="my-12" childAttr="[min-width:300px] w-1/3 mb-6">
                    {scrollContent.map(v => <Card {...v} />)}
                </Carousel>
            </div>
        </div>
    )
}