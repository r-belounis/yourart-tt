import { motion } from "framer-motion"
import { Spinner } from "~/assets/icons/spinner"

export const LoaderState = () => {
    return (
        <>
            <motion.aside className="fixed z-10 w-full h-full overflow-y-auto inset-0 bg-white dark:bg-gray-900 ">
                <div className="relative flex justify-center items-center h-[inherit]">
                    <Spinner />
                </div>
            </motion.aside>
        </>
    )
}