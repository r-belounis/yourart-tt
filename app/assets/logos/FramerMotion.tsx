import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
};

const FramerMotionLogo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <div className="flex place-items-center justify-center">
        <svg {...props} className="w-[25%] pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 21" aria-labelledby={titleId}>
            {title ? <title id={titleId}>{title}</title> : null}
            <path className="dark:fill-current" d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" />
        </svg>
        <span className="font-GTWalsheim font-semibold text-xl text-black dark:text-current">Motion</span>
    </div>
);

export default FramerMotionLogo;