import GenericComponent from "~/utils/generics/genericComponent"
import type { ChildrenInterface } from "~/utils/types/globalTypes"

// Interfaces
interface SummaryTypes { title: string }

// Components
const AccordionContainer = ({children} : ChildrenInterface) => <GenericComponent as="section" className="divide-y divide-slate-200 rounded">{children}</GenericComponent>
const AccordionDetails = ({children} : ChildrenInterface) => <GenericComponent as="details" className="p-4 group">{children}</GenericComponent>
const AccordionInnerSummary = ({children} : ChildrenInterface) => <GenericComponent as="section" className="py-3">{children}</GenericComponent>
const AccordionSummary = ({title} : SummaryTypes) => (
    <GenericComponent as="summary" className="relative cursor-pointer list-none font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none pr-8 [&::-webkit-details-marker]:hidden">
        <GenericComponent as="h1" className="dark:text-white">{title}</GenericComponent>
        <GenericComponent as="svg" xmlns="http://www.w3.org/2000/svg" className="absolute top-1 shrink-0 right-0 transition duration-300 stroke-slate-700 w-4 h-4 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <GenericComponent as="title" id="title">Open</GenericComponent>
            <GenericComponent as="path" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </GenericComponent>
    </GenericComponent>
)

export { AccordionContainer as default, AccordionDetails, AccordionSummary, AccordionInnerSummary }