import { memo, SVGProps } from 'react';

const IconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 59' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_66_634)'>
      <path
        d='M19.661 -0.000239116C19.661 12.1689 -0.000144068 25.842 -0.000144068 39.3214C-0.000144068 45.9648 3.29447 51.8384 8.3387 55.3978C8.3387 43.2281 27.9998 29.5556 27.9998 16.0762C27.9998 9.43219 24.7052 3.55919 19.661 -0.000239116Z'
        fill='#4B8590'
      />
      <path
        d='M34.6639 22.601C31.8875 34.9645 15.4012 47.3702 15.4012 58.5137C16.7728 58.8183 18.1974 58.9826 19.6612 58.9826C30.5194 58.9826 39.3223 50.1803 39.3223 39.3214C39.3223 34.7737 37.4776 28.7455 34.6639 22.601Z'
        fill='#4B8590'
      />
    </g>
    <defs>
      <clipPath id='clip0_66_634'>
        <rect width={39.3223} height={58.9828} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(IconIcon);
export { Memo as IconIcon };
