import { useState, useEffect, useRef } from 'react';
import { handleScroll } from '~/utils/hooks/useScroll';
// import { ScrollInfos } from '~/utils/scrollInfos';

type imagesType = { images: string[] };

export const SliderInnerArrows = ({ images }: imagesType) => {
    const [position, setPosition] = useState(0);
    const [hidden, setHidden] = useState("left");
    const slider = useRef<HTMLDivElement>(null!);

    // Functions
    const onScrollBehavior = () => {
        if (slider.current) {
            const { scrollLeft, scrollWidth, offsetWidth, clientWidth } = slider.current;
            setPosition(scrollLeft);
            if (scrollLeft + clientWidth === clientWidth) setHidden("left");
            if (scrollLeft + clientWidth === scrollWidth) setHidden("right");
        }
    };

    // UseEffects
    useEffect(() => {
        window.addEventListener("scroll", onScrollBehavior);
        return () => window.removeEventListener("scroll", onScrollBehavior);
    }, [])

    return (
        <>
            <div ref={slider} onScroll={onScrollBehavior} className="slider-container flex flex-wrap items-center overflow-hidden scroll-smooth w-1/2">
                <div className="slider-images flex">
                    {images.map((data, index) => <img key={index} src={data} className="object-cover transform transition duration-200 hover:scale-110 w-20 p-2" />)}
                </div>
                <div className="slider-directions flex justify-between align-center absolute w-[inherit]">
                    <div className={`slider-left-arrow transition-all duration-200 dark:fill-white ${hidden !== "left" ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => handleScroll(slider.current, -300, 0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 96 960 960" ><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" /></svg>
                    </div>
                    <div className={`slider-right-arrow transition-all duration-200 dark:fill-white ${hidden !== "right" ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => handleScroll(slider.current, 300, 0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 96 960 960" ><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" /></svg>
                    </div>
                </div>
            </div>
        </>
    )
}