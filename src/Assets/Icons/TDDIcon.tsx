import React from "react";

const TDDIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M9.74872 2.49415L18.1594 7.31987M9.74872 2.49415L8.91283 2M9.74872 2.49415L6.19982 8.61981M18.1594 7.31987L15.902 11.2163M18.1594 7.31987L19 7.80374M15.902 11.2163L14.1886 14.1738M15.902 11.2163L13.344 9.74451M14.1886 14.1738L12.5511 17.0003M14.1886 14.1738L9.98568 11.7556M12.5511 17.0003L11.0558 19.5813C9.7158 21.8942 6.74803 22.6867 4.42709 21.3513C2.10615 20.0159 1.31093 17.0584 2.65093 14.7455L3.95184 12.5M12.5511 17.0003L9.93838 15.4971"
          stroke={props.style?.fill || "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M22 14.9166C22 16.0672 21.1046 16.9999 20 16.9999C18.8954 16.9999 18 16.0672 18 14.9166C18 14.1967 18.783 13.2358 19.3691 12.6174C19.7161 12.2512 20.2839 12.2512 20.6309 12.6174C21.217 13.2358 22 14.1967 22 14.9166Z"
          stroke={props.style?.fill || "white"}
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default TDDIcon;
