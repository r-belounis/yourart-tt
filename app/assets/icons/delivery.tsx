import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
};

const Delivery = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg {...props} className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path className="fill-none" d="M0 0h48v48H0z" />
        <path className="fill-black dark:fill-white" d="M42 6H18c-2.2 0-4 1.8-4 4v4C7.4 14 2 19.4 2 26v12h4a6 6 0 1 0 12 0h8a6 6 0 1 0 12 0h4c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm-8 32c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-22 2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm2-23v4c-1.862 0-3.412 1.278-3.859 3h-4.91c.914-4.002 4.495-7 8.769-7z" />
    </svg>
);

export default Delivery;
