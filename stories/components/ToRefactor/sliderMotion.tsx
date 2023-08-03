// import { ChangeEvent } from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { motion, scroll, useScroll, useSpring, useMotionValue, useMotionValueEvent, MotionValue } from 'framer-motion';

// type imagesType = { images: string[] };

// export const SliderMotion = ({ images }: imagesType) => {
//     const [currentWidth, setCurrentWidth] = useState(0);
//     const [scrollXPosition, setScrollXPosition] = useState(0);
//     const [hidden, setHidden] = useState(false);
//     const slider = useRef<HTMLDivElement>(null!);

//     // Framer Motion 
//     const { scrollX } = useScroll({
//         container: slider,
//         // target: slider,
//         // offset: ["start end", "end end"] 
//     });
//     const springX = useSpring(scrollX, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });
//     const arrowsAnimate = {
//         hide: { opacity: 0 },
//         show: { opacity: 1 },
//     }

//     // Framer Motion useMotionValueEvent() hook
//     useMotionValueEvent(scrollX, "change", (latest) => setScrollXPosition(latest));
//     useMotionValueEvent(scrollX, "change", (latest) => handleScroll(latest));

//     // Functions
//     const handleScroll = (latest: number) => {
//         console.log("handleScroll values =>\n", latest)
//         if (scrollX === 0) setHidden(true);
//         else if (scrollX = 1) setHidden(false);
//         // scrollX.current += latest;
//     };
//     // const handleScroll = (step: number) => slider.current.scrollLeft += step;

//     // UseEffects
//     useEffect(() => setCurrentWidth(slider.current.scrollWidth - slider.current.offsetWidth), []);

//     return (
//      <>
//         <motion.div ref={slider} id="slider-container" className="flex flex-wrap items-center overflow-hidden w-1/2 bg-emerald-300">
//             <motion.div drag="x" dragConstraints={{ right: 0, left: -currentWidth }} className="slider-images flex scroll-smooth">
//                 {images.map((data, index) => <img key={index} src={data} className="object-cover w-20 p-2" />)}
//             </motion.div>
//             <div className="slider-directions flex justify-between absolute w-[inherit] bg-amber-300">
//                 <motion.div key="left" variants={arrowsAnimate} animate={hidden ? "hide" : "show"} className="slider-left-arrow" onClick={() => handleScroll(-300)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" /></svg>
//                 </motion.div>
//                 <motion.div key="right" variants={arrowsAnimate} animate={hidden ? "show" : "hide"} className="slider-right-arrow" onClick={() => handleScroll(300)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" /></svg>
//                 </motion.div>
//             </div>
//         </motion.div>
//         <ScrollInfos data={images} refs={slider} position={currentWidth} state={hidden}/>
//      </>
//     );
// };