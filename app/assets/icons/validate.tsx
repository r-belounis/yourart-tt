import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
};

const Validate = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg {...props} className="w-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24" aria-labelledby={titleId} >
        {title ? <title id={titleId}>{title}</title> : null}
        <path className="fill-black dark:fill-white" d="M19.3 5.3 9 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 11-11-1.4-1.4z" />
        <path className="fill-none" d="M0 0h24v24H0z" />
    </svg>
);

export default Validate;
