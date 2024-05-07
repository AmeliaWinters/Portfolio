import React from "react";

const VueIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
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
          fillRule="nonzero"
          clipRule="nonzero"
          d="M11.7527 1.00003H10.4167C10.1615 1.00003 9.92378 1.1298 9.78578 1.34446L8 4.12235L6.21422 1.34446C6.07622 1.1298 5.83853 1.00003 5.58333 1.00003H0.75C0.481089 1.00003 0.232759 1.144 0.0991399 1.37737C-0.0344791 1.61073 -0.0329346 1.89777 0.103188 2.12968L7.35319 14.4815C7.48785 14.711 7.73397 14.8519 8 14.8519C8.26603 14.8519 8.51215 14.711 8.64681 14.4815L15.8968 2.12968C16.0329 1.89777 16.0345 1.61073 15.9009 1.37737C15.7672 1.144 15.5189 1.00003 15.25 1.00003H11.7668C11.7621 0.999989 11.7574 0.999989 11.7527 1.00003ZM3.80997 2.50003L8.00001 9.68295L12.19 2.50003H13.9401L8 12.6203L2.05987 2.50003H3.80997Z"
          fill={props.style?.fill || "white"}
        ></path>
      </g>
    </svg>
  );
};

export default VueIcon;
