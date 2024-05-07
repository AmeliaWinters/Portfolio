import React from "react";

const JestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>file_type_jest_snapshot</title>
        <path
          d="M27.089,15.786a2.606,2.606,0,0,0-2.606-2.606c-.093,0-.184.005-.274.014l3.58-10.557H12.577l3.574,10.548c-.052,0-.105-.005-.158-.005a2.607,2.607,0,0,0-.792,5.09,11.375,11.375,0,0,1-2.049,2.579A10.443,10.443,0,0,1,9.5,23.116a3.324,3.324,0,0,1-1.665-4.23c.077-.18.155-.362.23-.544a2.608,2.608,0,1,0-2.09-.4,20.08,20.08,0,0,0-1.889,4.788c-.354,2.135,0,4.4,1.845,5.681,4.3,2.981,8.969-1.848,13.891-3.061,1.784-.44,3.742-.369,5.313-1.28a4.443,4.443,0,0,0,2.179-3.088,4.639,4.639,0,0,0-.831-3.521,2.6,2.6,0,0,0,.606-1.671ZM18.6,15.8v-.009a2.605,2.605,0,0,0-1.256-2.23L20.188,7.8l2.85,5.814a2.6,2.6,0,0,0-1.161,2.169c0,.019,0,.038,0,.057L18.6,15.8Z"
          fill={props.style?.fill || "white"}
        ></path>
      </g>
    </svg>
  );
};

export default JestIcon;