import { SVGProps } from "react";

interface SVGRProps {
    title?: string;
    titleId?: string;
};

const AR = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby={titleId} >
        {title ? <title id={titleId}>{title}</title> : null}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 9.5 5 2.5M7 9.5v5l5 2.5M7 9.5 12 7l5 2.5M12 12l5-2.5M12 12v5m5-7.5v5L12 17M8 4H6a2 2 0 0 0-2 2v2m4 12H6a2 2 0 0 1-2-2v-2M16 4h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2" />
    </svg>
);

export default AR;
