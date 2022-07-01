import { createRef, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useInView } from "react-hook-inview";

export const CarouselWithAutoscroll = forwardRef(({ duration, ...props}, ref) => {
    const timer = useRef();
    const [tick, setTick] = useState(false);
    const [stopped, setStopped] = useState(false);
    useEffect(() => {
        if (!stopped) {
            timer.current = setTimeout(() => {
                ref.current.next();
                setTick(t => !t);
            }, duration);
            return () => clearTimeout(timer.current);
        }
    }, [stopped, tick]);

    return <Carousel {...{
        ...props, ref,
        enterCb:() => setStopped(true),
        leaveCb:() => setStopped(false)
    }} />
});

const ListItem = ({ children, classes, onVisibilityChanged, id }) => {
    const [ref, inView] = useInView({ threshold: 1 });
    useEffect(() => onVisibilityChanged(inView), [inView]);
    return (
        <li {...{ ref, id }} 
        className={"shrink-0 h-full snap-start " + classes}>
            {children}
        </li>
    );
}

export const Carousel = forwardRef(({ children, parentAttr="", childAttr="", enterCb=()=>{}, leaveCb=()=>{} }, ref) => {
    const vis = useRef([]);
    const idPrefix = useRef(Math.random());
    const getId = index => `${idPrefix.current}_${index}`;
    const minIndex = useRef(Number.POSITIVE_INFINITY);
    const maxIndex = useRef(Number.NEGATIVE_INFINITY);
    const opt = {
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
    }

    const next = () => {
        const index = maxIndex.current < children.length-1 ? minIndex.current + 1 : 0;
        console.log(index);
        document.getElementById(getId(index)).scrollIntoView(opt);
    }

    const prev = () => {
        const index = minIndex.current > 0 ? minIndex.current - 1 : children.length-1;
        document.getElementById(getId(index)).scrollIntoView(opt);
    }

    useImperativeHandle(ref, () => ({ next, prev }));

    const listItems = children.map((v, i) => {
        return (
            <ListItem
                id={getId(i)}
                classes={childAttr}
                onVisibilityChanged={(visible) => {
                    vis.current[i] = visible;
                    //calculate new min and max index
                    for (let j = 0; j < listItems.length; j++) {
                        if (vis.current[j]) {
                            minIndex.current = j;
                            while (vis.current[j] && j < listItems.length)
                                j++;
                            maxIndex.current = j - 1;
                        }
                    }
                }}
            >
                {v}
            </ListItem>
        )
    });

    return (
        <ul 
            onMouseEnter={enterCb}
            onMouseLeave={leaveCb}
            ref={ref} 
            className={`
                scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100
                w-screen px-4 self-center 
                flex flex-row gap-6 justify-stretch
                snap-x snap-mandatory overflow-x-auto 
                scroll-in-content container-hidden-scroll ${parentAttr}`}>
            {listItems}
        </ul>
    );
});