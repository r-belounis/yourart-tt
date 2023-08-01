// import { redirect } from "@remix-run/node";
// import { route } from "routes-gen";
import { motion } from "framer-motion"

// Assets
import TypescriptLogo from "~/assets/logos/Typescript";
import RemixLogo from "~/assets/logos/Remix";
import StorybookLogo from "~/assets/logos/Storybook";
import TailwindLogo from "~/assets/logos/tailwindCSS";
import WindUILogo from "~/assets/logos/WindUI";
import FramerMotionLogo from "~/assets/logos/FramerMotion";

const iconVariants = {
    default: { translateX: 0 },
    hover: { translateX: 3 }
}

// We can redirect index page directly to artwork page since it is technically, 
// the requirement in the test.
// export const loader = () => redirect(route("/artwork"));

const Index = () => {
    return (
        <section className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to YourArt</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here you will find my technical test, enjoy 😁</p>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Test made with 💖,<span className="ml-1 italic">by Reza Belounis</span></p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <motion.a initial="default" whileHover="hover" href="https://github.com/r-belounis" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    See Github repository
                    <motion.svg variants={iconVariants} className="ml-2 -mr-1 w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></motion.svg>
                </motion.a>
            </div>
            <div className="text-center px-4 mx-auto">
                <span className="font-semibold text-gray-400 uppercase">POWERED BY</span>
                <div className="w-full md:w-1/2 px-6 m-auto">
                    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 items-center mt-8 text-gray-500">
                        <li>
                            <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <TypescriptLogo title="Typescript" />
                            </a>
                        </li>
                        <li>
                            <a href="https://remix.run/docs" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <RemixLogo title="Remix.Run" />
                            </a>
                        </li>
                        <li>
                            <a href="https://storybook.js.org/docs/react/" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <StorybookLogo title="Storybook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/docs" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <TailwindLogo title="TailwindCSS" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wind-ui.com/components/" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <WindUILogo title="WindUI" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.framer.com/motion/" className="hover:text-gray-800 dark:hover:text-gray-400">
                                <FramerMotionLogo title="Framer Motion" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Index;