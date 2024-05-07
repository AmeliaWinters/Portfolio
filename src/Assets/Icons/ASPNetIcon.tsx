import React from "react";

const ASPNetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="5151e0c8492e5103c096af88a51eafb7">
          <path
            display="inline"
            d="M295.474,319.537c0.826,4.135,1.24,11.37,1.24,21.707v80.997h-22.327v-80.129 c0-9.097-0.868-15.894-2.604-20.404c-1.737-4.507-4.817-8.104-9.241-10.792c-4.424-2.683-9.613-4.031-15.567-4.031 c-9.51,0-17.717,3.019-24.622,9.055c-6.905,6.037-10.357,17.49-10.357,34.359v71.942h-22.327V290.512h20.094v18.73 c9.675-14.472,23.65-21.707,41.925-21.707c7.938,0,15.236,1.426,21.893,4.279c6.657,2.853,11.64,6.595,14.947,11.226 S294.15,313.17,295.474,319.537z M511.5,423.052c-6.284,1.323-11.908,1.984-16.869,1.984c-8.104,0-14.389-1.281-18.854-3.845 c-4.465-2.563-7.607-5.934-9.427-10.109c-1.819-4.172-2.729-12.962-2.729-26.358v-79.542h-48.475 c0.111,0.12,0.235,0.219,0.347,0.339c11.164,11.99,16.746,28.859,16.746,50.608c0,1.322-0.042,3.308-0.124,5.953h-98.239 c0.827,14.472,4.92,25.553,12.279,33.243c7.36,7.69,16.539,11.535,27.537,11.535c8.187,0,15.174-2.149,20.963-6.45 c5.788-4.3,10.378-11.163,13.769-20.59l23.071,2.853c-3.639,13.479-10.378,23.939-20.219,31.382s-22.41,11.164-37.708,11.164 c-19.268,0-34.545-5.934-45.832-17.8c-11.288-11.862-16.932-28.509-16.932-49.926c0-22.162,5.706-39.362,17.117-51.601 c11.412-12.238,26.214-18.357,44.406-18.357c2.199,0,4.354,0.095,6.454,0.281h84.839v-28.579h22.203v28.579h22.451v17.365h-22.451 v80.782c0,6.367,0.393,10.461,1.178,12.28c0.786,1.819,2.067,3.267,3.846,4.341c1.777,1.075,4.32,1.613,7.628,1.613 c2.481,0,5.747-0.29,9.8-0.869L511.5,423.052z M408.672,343.725c-0.993-11.081-3.805-19.392-8.435-24.932 c-7.112-8.601-16.332-12.9-27.661-12.9c-10.254,0-18.875,3.432-25.862,10.295c-6.987,6.864-10.854,16.043-11.598,27.537H408.672z M157.881,395.42c-4.035,0-7.459,1.435-10.279,4.354c-2.82,2.898-4.217,6.405-4.217,10.548c0,4.035,1.397,7.529,4.217,10.473 c2.82,2.944,6.244,4.425,10.279,4.425c4.139,0,7.662-1.48,10.56-4.425c2.906-2.943,4.35-6.438,4.35-10.473 c0-4.044-1.443-7.55-4.35-10.489C165.542,396.875,162.02,395.42,157.881,395.42z M301.047,267.196 c-11.577,5.086-26.172,7.629-43.785,7.629c-30.928,0-52.345-5.954-64.253-17.862c-0.05-0.05-0.096-0.103-0.146-0.152l5.604,14.913 h-58.84l-9.101-30.018H66.737l-8.865,30.018H0.5L68.846,89.883h61.292l45.653,121.494l50.461-3.161 c1.158,8.683,3.514,15.3,7.07,19.847c5.789,7.361,14.058,11.039,24.808,11.039c8.021,0,14.203-1.879,18.544-5.644 c4.342-3.763,6.513-8.125,6.513-13.086c0-4.714-2.067-8.932-6.202-12.652c-4.135-3.722-13.728-7.235-28.777-10.544 c-24.642-5.538-42.214-12.899-52.716-22.078c-10.585-9.18-15.877-20.88-15.877-35.104c0-9.344,2.708-18.172,8.125-26.482 c5.416-8.311,13.562-14.841,24.436-19.598c10.874-4.755,25.779-7.133,44.716-7.133c23.237,0,40.954,4.323,53.151,12.962 c12.197,8.642,19.453,22.39,21.769,41.243l-52.965,3.102c-1.405-8.187-4.362-14.141-8.869-17.862 c-4.506-3.721-10.729-5.581-18.667-5.581c-6.533,0-11.453,1.385-14.761,4.155c-3.308,2.771-4.961,6.14-4.961,10.108 c0,2.896,1.364,5.502,4.093,7.814c2.646,2.4,8.931,4.633,18.854,6.698c24.56,5.293,42.152,10.649,52.778,16.063 c10.626,5.416,18.358,12.137,23.195,20.156c2.479,4.109,4.312,8.472,5.521,13.079V89.883h93.401 c20.342,0,35.578,4.837,45.708,14.512c10.13,9.676,15.195,23.443,15.195,41.306c0,18.357-5.521,32.705-16.56,43.041 c-11.04,10.339-27.889,15.505-50.546,15.505h-30.762v67.478h-56.438v-44.868c-1.574,6.286-4.216,12.271-7.939,17.952 C321.638,254.649,312.624,262.111,301.047,267.196z M392.464,167.407h13.769c10.832,0,18.44-1.88,22.823-5.645 c4.383-3.762,6.573-8.577,6.573-14.45c0-5.706-1.901-10.543-5.705-14.513c-3.804-3.969-10.957-5.954-21.459-5.954h-16.001V167.407z M118.871,202.386l-20.07-65.368l-19.863,65.368H118.871z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default ASPNetIcon;
