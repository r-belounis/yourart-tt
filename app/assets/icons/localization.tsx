import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
};

const Localization = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg {...props} className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 32 32" aria-labelledby={titleId} >
        {title ? <title id={titleId}>{title}</title> : null}
        <path className="fill-black dark:fill-white" fillRule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-17C5.373 0 0 5.373 0 12c0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12Z" />
    </svg>
);

export default Localization;