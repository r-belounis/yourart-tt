import type { ChildrenInterface } from "~/utils/types/globalTypes"

type HeadingsTypes = {
    title: string,
    subTitle: string
}

export const Headings = ({title, subTitle, children}: HeadingsTypes & ChildrenInterface) => (
    <>
        <section className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{subTitle}</p>
            {children}
        </section>
    </>
)