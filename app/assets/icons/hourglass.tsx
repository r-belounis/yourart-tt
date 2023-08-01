import { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
};

const Hourglass = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg {...props} className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={titleId}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path className="fill-black: dark:fill-white" d="M18.404 16.53v-1.057c3.511-1.669 6.086-7.082 6.086-13.52H7.763c0 6.4 2.534 11.817 6.013 13.52v1.057c-3.479 1.703-6.013 7.12-6.013 13.52H24.49c0-6.437-2.575-11.851-6.086-13.52zm-7.79-8.365c3.309 1.482 7.484 1.48 11.078-.255-.894 3.323-2.769 5.706-4.979 6.073a.764.764 0 1 1-1.224-.005c-2.141-.374-3.96-2.636-4.874-5.812zm5.485 11.952a.764.764 0 1 1 0-1.528.764.764 0 0 1 0 1.528zm.764 1.702a.764.764 0 1 1-1.528 0 .764.764 0 0 1 1.528 0zm-.764-4.153a.764.764 0 1 1 0-1.528.764.764 0 0 1 0 1.528zm-4.722 10.6c3.697-6.226 5.737-6.365 9.546 0h-9.546z" />
  </svg>
);

export default Hourglass;
