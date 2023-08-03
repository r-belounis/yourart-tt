import { useState, useEffect, useRef, MouseEvent } from 'react';
import { useSearchParams } from "@remix-run/react";

// Helpers
import { useScroll } from '~/utils/hooks/useScroll';
// import { ScrollInfos } from '~/utils/scrollInfos';

type imagesType = { images: string[] };

export const Slider = ({ images }: imagesType) => {
    const [position, setPosition] = useState(0);
    const [hidden, setHidden] = useState("left");
    const [params, setParams] = useSearchParams();
    const slider = useRef<HTMLDivElement>(null!);

    // UseEffects
    useEffect(() => {
        window.addEventListener("scroll", onScrollBehavior);
        return () => window.removeEventListener("scroll", onScrollBehavior);
    }, [])

    // Functions
    const onScrollBehavior = () => {
        if (slider.current) {
            const { scrollLeft, scrollWidth, clientWidth } = slider.current;
            setPosition(scrollLeft);
            if (scrollLeft + clientWidth === clientWidth) setHidden("left");
            if (scrollLeft + clientWidth === scrollWidth) setHidden("right");
        }
    };

    const handleModal = (e: MouseEvent<HTMLImageElement>) => {
        const targetImageUrl = e.currentTarget.src;
        setParams({
            ...params,
            modal: "true",
            vr: "false",
            sliderImage: targetImageUrl
        });
    }

    return (
        <>
            <div className="slider-container flex items-center justify-between w-full py-12 md:py-0">
                <div className={`slider-left-arrow transition-all duration-200 dark:fill-white ${hidden !== "left" ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => useScroll(slider.current, -300, 0)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 96 960 960" ><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" /></svg>
                </div>
                <div ref={slider} onScroll={onScrollBehavior} className="slider-items flex overflow-hidden scroll-smooth w-10/12">
                    {images.map((data, index) => <img key={index} src={data} alt={"value"} onClick={handleModal} className="object-cover transform transition duration-200 hover:scale-110 w-20 p-2" />)}
                </div>
                <div className={`slider-right-arrow transition-all duration-200 dark:fill-white ${hidden !== "right" ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => useScroll(slider.current, 300, 0)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 96 960 960" ><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" /></svg>
                </div>
            </div>
            {/* Utility function to get scroll various infos */}
            {/* <ScrollInfos data={images} refs={slider} position={position} state={hidden}/> */}
        </>
    );
};