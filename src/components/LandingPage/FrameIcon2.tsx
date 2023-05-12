import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_66_638)'>
      <path d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z' fill='black' />
    </g>
    <defs>
      <clipPath id='clip0_66_638'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
