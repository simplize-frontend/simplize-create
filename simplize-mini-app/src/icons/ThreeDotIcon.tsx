import React, { SVGProps } from 'react';

export const ThreeDotIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M5.99997 10C5.99997 11.1046 5.10454 12 3.99997 12C2.8954 12 1.99997 11.1046 1.99997 10C1.99997 8.89543 2.8954 8 3.99997 8C5.10454 8 5.99997 8.89543 5.99997 10Z"
          fill="#999999"
        />
        <path
          d="M12 10C12 11.1046 11.1045 12 9.99997 12C8.8954 12 7.99997 11.1046 7.99997 10C7.99997 8.89543 8.8954 8 9.99997 8C11.1045 8 12 8.89543 12 10Z"
          fill="#999999"
        />
        <path
          d="M18 10C18 11.1046 17.1046 12 16 12C14.8955 12 14 11.1046 14 10C14 8.89543 14.8955 8 16 8C17.1046 8 18 8.89543 18 10Z"
          fill="#999999"
        />
      </svg>
    );
  }
);
