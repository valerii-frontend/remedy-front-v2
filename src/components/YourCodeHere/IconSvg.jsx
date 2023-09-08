import React from "react";

export default function IconSvg({ name }) {
  switch (name) {
    case "doc":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M5.50001 12.2368H10.5V11.1316H5.50001V12.2368ZM5.50001 9.28946H10.5V8.18423H5.50001V9.28946ZM4.20514 15C3.86838 15 3.58334 14.8711 3.35 14.6132C3.11667 14.3553 3 14.0402 3 13.668V2.33199C3 1.95979 3.11667 1.64474 3.35 1.38684C3.58334 1.12895 3.86838 1 4.20514 1H9.50002L13 4.8684V13.668C13 14.0402 12.8833 14.3553 12.65 14.6132C12.4167 14.8711 12.1316 15 11.7949 15H4.20514ZM9.00002 5.42103V2.10525H4.20514C4.15385 2.10525 4.10683 2.12886 4.06409 2.1761C4.02135 2.22334 3.99999 2.27531 3.99999 2.33199V13.668C3.99999 13.7247 4.02135 13.7767 4.06409 13.8239C4.10683 13.8711 4.15385 13.8948 4.20514 13.8948H11.7949C11.8462 13.8948 11.8932 13.8711 11.9359 13.8239C11.9786 13.7767 12 13.7247 12 13.668V5.42103H9.00002Z" />
        </svg>
      );
    case "angle-arrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.50005 4.49995L12.5 4.50009L12.5 12H11.5L11.5 6.20717L4.50003 13.2071L3.79293 12.5L10.7929 5.50006L4.50003 5.49995L4.50005 4.49995Z"
          />
        </svg>
      );
    case "pin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75415 1.16865C8.9953 0.939545 9.37508 0.944465 9.61021 1.17974L13.8205 5.39252C14.0551 5.62725 14.0604 6.00604 13.8325 6.24731L10.2822 10.0062L9.34574 13.5436C9.2896 13.7557 9.12447 13.9217 8.9127 13.9788C8.70092 14.036 8.47475 13.9756 8.31956 13.8206L1.17987 6.68785C1.02444 6.53256 0.963934 6.30598 1.02126 6.09387C1.07858 5.88175 1.24497 5.71651 1.45746 5.66069L5.00772 4.72798L8.75415 1.16865ZM9.1654 2.46982L5.7382 5.72586C5.66328 5.79704 5.5716 5.84813 5.47165 5.87439L2.80291 6.57551L8.43275 12.1999L9.13653 9.54145C9.16272 9.44249 9.21327 9.35167 9.28355 9.27725L12.5318 5.83819L9.1654 2.46982Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.49806 9.50333C5.73754 9.74286 5.73754 10.1312 5.49806 10.3707L2.53673 13.3325L1.66948 12.4651L4.63081 9.50333C4.87029 9.26381 5.25857 9.26381 5.49806 9.50333Z"
          />
        </svg>
      );
    case "h1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M8.94328 7.44861V10.6618L12.4999 10.6654V7.4522C12.4999 7.13602 12.5676 6.89705 12.6964 6.73897C12.8285 6.58088 13.0013 6.5 13.2147 6.5C13.4282 6.5 13.6077 6.57721 13.7433 6.73529C13.8788 6.89338 13.9431 7.12867 13.9431 7.44852V15.5404C13.9431 15.8602 13.8754 16.0992 13.7399 16.2573C13.6044 16.4154 13.4282 16.4962 13.2147 16.4962C13.0013 16.4962 12.8251 16.4154 12.693 16.2573C12.5609 16.0992 12.4999 15.8602 12.4999 15.544V11.9448L8.94328 11.9412V15.5405C8.94328 15.8603 8.87552 16.0993 8.74 16.2574C8.60448 16.4155 8.4283 16.4963 8.21486 16.4963C8.00142 16.4963 7.82525 16.4155 7.69311 16.2574C7.56098 16.0993 7.5 15.8603 7.5 15.5441V7.45229C7.5 7.13612 7.56437 6.89715 7.69311 6.73906C7.82186 6.58097 7.99464 6.50009 8.21486 6.50009C8.43508 6.50009 8.60787 6.5773 8.74339 6.73538C8.87891 6.89347 8.94328 7.12876 8.94328 7.44861Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6347 12.5418C16.8215 12.6192 16.9434 12.8016 16.9434 13.0038V16.0038C16.9434 16.2799 16.7195 16.5038 16.4434 16.5038C16.1672 16.5038 15.9434 16.2799 15.9434 16.0038V14.2109L15.7969 14.3573C15.6017 14.5526 15.2851 14.5526 15.0898 14.3573C14.8945 14.1621 14.8945 13.8455 15.0898 13.6502L16.0898 12.6502C16.2328 12.5072 16.4479 12.4645 16.6347 12.5418Z"
          />
        </svg>
      );
    case "h2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M8.49989 7.44853V10.6176L12.0564 10.6213V7.45221C12.0564 7.13603 12.1242 6.89706 12.2529 6.73897C12.3851 6.58088 12.5578 6.5 12.7713 6.5C12.9847 6.5 13.1643 6.57721 13.2998 6.7353C13.4353 6.89339 13.4997 7.12868 13.4997 7.44853V15.4559C13.4997 15.7758 13.4319 16.0148 13.2964 16.1728C13.1609 16.3309 12.9847 16.4118 12.7713 16.4118C12.5578 16.4118 12.3817 16.3309 12.2495 16.1728C12.1174 16.0148 12.0564 15.7758 12.0564 15.4596V11.9007L8.49989 11.897V15.4559C8.49989 15.7758 8.43213 16.0148 8.29662 16.1728C8.1611 16.3309 7.98493 16.4118 7.77149 16.4118C7.55805 16.4118 7.38188 16.3309 7.24975 16.1728C7.11762 16.0148 7.05664 15.7758 7.05664 15.4596V7.45221C7.05664 7.13603 7.12101 6.89706 7.24975 6.73897C7.37849 6.58088 7.55128 6.5 7.77149 6.5C7.99171 6.5 8.16449 6.57721 8.30001 6.73529C8.43552 6.89338 8.49989 7.12868 8.49989 7.44853Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.794 12.717C15.0438 12.2485 15.5315 11.9559 16.0624 11.9559C16.8563 11.9559 17.4999 12.5995 17.4999 13.3934V13.5166C17.4999 13.9301 17.3364 14.3266 17.0434 14.6195L16.207 15.4559H16.9999C17.276 15.4559 17.4999 15.6798 17.4999 15.9559C17.4999 16.2321 17.276 16.4559 16.9999 16.4559H14.9999C14.7977 16.4559 14.6153 16.3341 14.538 16.1473C14.4606 15.9604 14.5033 15.7454 14.6463 15.6024L16.3363 13.9124C16.4411 13.8076 16.4999 13.6657 16.4999 13.5166V13.3934C16.4999 13.1518 16.304 12.9559 16.0624 12.9559C15.9008 12.9559 15.7524 13.045 15.6764 13.1876L15.5411 13.4412C15.4111 13.6849 15.1083 13.7771 14.8646 13.6471C14.6209 13.5172 14.5288 13.2143 14.6587 12.9706L14.794 12.717Z"
          />
        </svg>
      );
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 6.875C9 6.52982 9.27982 6.25 9.625 6.25H12.125C13.5747 6.25 14.75 7.42497 14.75 8.8748V9.37516C14.75 10.825 13.5747 12 12.125 12H9.625C9.27982 12 9 11.7202 9 11.375V6.875ZM12.125 10.75C12.8845 10.75 13.5 10.1345 13.5 9.37516V8.8748C13.5 8.11549 12.8845 7.5 12.125 7.5H10.25V10.75H12.125Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.375 12L12.125 12C11.7798 12 11.5 11.7202 11.5 11.375C11.5 11.0298 11.7798 10.75 12.125 10.75L12.375 10.75C13.882 10.75 15.25 11.7585 15.25 13.422C15.25 14.9387 14.0298 16.5 12.375 16.5L9.625 16.5C9.27982 16.5 9 16.2202 9 15.875V11.375C9 11.0298 9.27982 10.75 9.625 10.75C9.97018 10.75 10.25 11.0298 10.25 11.375V15.25L12.375 15.25C13.2055 15.25 14 14.3905 14 13.422C14 12.6001 13.3532 12 12.375 12Z"
          />
        </svg>
      );
    case "italic":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 7C10.5 6.72386 10.7239 6.5 11 6.5H15C15.2761 6.5 15.5 6.72386 15.5 7C15.5 7.27614 15.2761 7.5 15 7.5H11C10.7239 7.5 10.5 7.27614 10.5 7Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 16C8.5 15.7239 8.72386 15.5 9 15.5H13C13.2761 15.5 13.5 15.7239 13.5 16C13.5 16.2761 13.2761 16.5 13 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3042 6.93623C13.5697 7.01209 13.7235 7.28884 13.6476 7.55435L11.3143 15.721C11.2384 15.9865 10.9617 16.1403 10.6961 16.0644C10.4306 15.9886 10.2769 15.7118 10.3527 15.4463L12.6861 7.27963C12.7619 7.01411 13.0387 6.86037 13.3042 6.93623Z"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.35355 8.64658C9.54882 8.84184 9.54882 9.15843 9.35355 9.35369L7.20711 11.5001L9.35355 13.6466C9.54882 13.8418 9.54882 14.1584 9.35355 14.3537C9.15829 14.549 8.84171 14.549 8.64645 14.3537L6.14645 11.8537C5.95118 11.6584 5.95118 11.3418 6.14645 11.1466L8.64645 8.64658C8.84171 8.45132 9.15829 8.45132 9.35355 8.64658Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6467 8.64658C14.842 8.45132 15.1585 8.45132 15.3538 8.64658L17.8538 11.1466C18.0491 11.3418 18.0491 11.6584 17.8538 11.8537L15.3538 14.3537C15.1585 14.549 14.842 14.549 14.6467 14.3537C14.4514 14.1584 14.4514 13.8418 14.6467 13.6466L16.7931 11.5001L14.6467 9.35369C14.4514 9.15843 14.4514 8.84184 14.6467 8.64658Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6581 6.52579C13.9201 6.61312 14.0617 6.89628 13.9743 7.15825L10.9743 16.1582C10.887 16.4202 10.6039 16.5618 10.3419 16.4745C10.0799 16.3872 9.93833 16.104 10.0257 15.842L13.0257 6.84202C13.113 6.58005 13.3961 6.43847 13.6581 6.52579Z"
          />
        </svg>
      );
    case "ancor":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M11.082 14.0505C11.082 14.2988 10.8808 14.5 10.6325 14.5H8.86052C8.06912 14.5 7.39451 14.2072 6.83671 13.6215C6.2789 13.0358 6 12.3274 6 11.4965C6 10.6655 6.2789 9.95833 6.83671 9.375C7.39451 8.79167 8.06912 8.5 8.86052 8.5H10.6325C10.8808 8.5 11.082 8.70123 11.082 8.94945C11.082 9.19768 10.8808 9.39891 10.6325 9.39891H8.86052C8.30684 9.39891 7.83452 9.60392 7.44356 10.0139C7.05261 10.424 6.85713 10.9193 6.85713 11.5C6.85713 12.0807 7.05261 12.576 7.44356 12.9861C7.83452 13.3961 8.30684 13.6011 8.86052 13.6011H10.6325C10.8808 13.6011 11.082 13.8023 11.082 14.0505ZM10.2407 11.9495C9.99245 11.9495 9.79122 11.7482 9.79122 11.5C9.79122 11.2518 9.99245 11.0505 10.2407 11.0505H13.7593C14.0076 11.0505 14.2088 11.2518 14.2088 11.5C14.2088 11.7482 14.0076 11.9495 13.7593 11.9495H10.2407ZM13.3675 14.5C13.1192 14.5 12.918 14.2988 12.918 14.0505C12.918 13.8023 13.1192 13.6011 13.3675 13.6011H15.1395C15.6932 13.6011 16.1655 13.3961 16.5564 12.9861C16.9474 12.576 17.1429 12.0807 17.1429 11.5C17.1429 10.9193 16.9474 10.424 16.5564 10.0139C16.1655 9.60392 15.6932 9.39891 15.1395 9.39891H13.3675C13.1192 9.39891 12.918 9.19768 12.918 8.94945C12.918 8.70123 13.1192 8.5 13.3675 8.5H15.1395C15.9309 8.5 16.6055 8.79284 17.1633 9.37853C17.7211 9.96422 18 10.6726 18 11.5035C18 12.3345 17.7211 13.0417 17.1633 13.625C16.6055 14.2083 15.9309 14.5 15.1395 14.5H13.3675Z" />
        </svg>
      );
    case "ordered-list":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0005 8.00001C11.0005 7.72387 11.2244 7.50001 11.5005 7.50001H16.5005C16.7766 7.50001 17.0005 7.72387 17.0005 8.00001C17.0005 8.27616 16.7766 8.50001 16.5005 8.50001H11.5005C11.2244 8.50001 11.0005 8.27616 11.0005 8.00001Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0005 11.5C11.0005 11.2239 11.2244 11 11.5005 11H16.5005C16.7766 11 17.0005 11.2239 17.0005 11.5C17.0005 11.7762 16.7766 12 16.5005 12H11.5005C11.2244 12 11.0005 11.7762 11.0005 11.5Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0003 15C11.0003 14.7239 11.2241 14.5 11.5003 14.5H16.5003C16.7764 14.5 17.0003 14.7239 17.0003 15C17.0003 15.2762 16.7764 15.5 16.5003 15.5H11.5003C11.2241 15.5 11.0003 15.2762 11.0003 15Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.29413 12.761C7.54396 12.2926 8.03163 12 8.56251 12C9.35642 12 10 12.6436 10 13.4375V13.5607C10 13.9742 9.8365 14.3706 9.54352 14.6636L8.70712 15.5H9.50001C9.77616 15.5 10 15.7239 10 16C10 16.2762 9.77616 16.5 9.50001 16.5H7.50001C7.29778 16.5 7.11547 16.3782 7.03807 16.1914C6.96068 16.0045 7.00346 15.7895 7.14646 15.6465L8.83641 13.9565C8.94125 13.8517 9.00001 13.7098 9.00001 13.5607V13.4375C9.00001 13.1959 8.80414 13 8.56251 13C8.40094 13 8.25252 13.0891 8.17649 13.2316L8.04119 13.4853C7.91124 13.729 7.60838 13.8211 7.36472 13.6912C7.12107 13.5612 7.02889 13.2584 7.15884 13.0147L7.29413 12.761Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.69136 6.53807C8.87819 6.61547 9.00001 6.79778 9.00001 7.00001V10C9.00001 10.2762 8.77616 10.5 8.50001 10.5C8.22387 10.5 8.00001 10.2762 8.00001 10V8.20712L7.85357 8.35357C7.65831 8.54883 7.34172 8.54883 7.14646 8.35357C6.9512 8.15831 6.9512 7.84172 7.14646 7.64646L8.14646 6.64646C8.28946 6.50346 8.50452 6.46068 8.69136 6.53807Z"
          />
        </svg>
      );
    case "bullet-list":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 8C10 7.72386 10.2239 7.5 10.5 7.5H16.5C16.7761 7.5 17 7.72386 17 8C17 8.27614 16.7761 8.5 16.5 8.5H10.5C10.2239 8.5 10 8.27614 10 8Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 11.5C10 11.2239 10.2239 11 10.5 11H16.5C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H10.5C10.2239 12 10 11.7761 10 11.5Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 15C10 14.7239 10.2239 14.5 10.5 14.5H16.5C16.7761 14.5 17 14.7239 17 15C17 15.2761 16.7761 15.5 16.5 15.5H10.5C10.2239 15.5 10 15.2761 10 15Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 7.25C8.41421 7.25 8.75 7.58579 8.75 8V8.00583C8.75 8.42005 8.41421 8.75583 8 8.75583C7.58579 8.75583 7.25 8.42005 7.25 8.00583V8C7.25 7.58579 7.58579 7.25 8 7.25Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10.75C8.41421 10.75 8.75 11.0858 8.75 11.5V11.5058C8.75 11.92 8.41421 12.2558 8 12.2558C7.58579 12.2558 7.25 11.92 7.25 11.5058V11.5C7.25 11.0858 7.58579 10.75 8 10.75Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.25C8.41421 14.25 8.75 14.5858 8.75 15V15.0058C8.75 15.42 8.41421 15.7558 8 15.7558C7.58579 15.7558 7.25 15.42 7.25 15.0058V15C7.25 14.5858 7.58579 14.25 8 14.25Z"
          />
        </svg>
      );
    case "quote":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 8C9.75 7.72386 9.97386 7.5 10.25 7.5H16.25C16.5261 7.5 16.75 7.72386 16.75 8C16.75 8.27614 16.5261 8.5 16.25 8.5H10.25C9.97386 8.5 9.75 8.27614 9.75 8Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 11.5C9.75 11.2239 9.97386 11 10.25 11H16.25C16.5261 11 16.75 11.2239 16.75 11.5C16.75 11.7761 16.5261 12 16.25 12H10.25C9.97386 12 9.75 11.7761 9.75 11.5Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 15C9.75 14.7239 9.97386 14.5 10.25 14.5H16.25C16.5261 14.5 16.75 14.7239 16.75 15C16.75 15.2761 16.5261 15.5 16.25 15.5H10.25C9.97386 15.5 9.75 15.2761 9.75 15Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75 7C8.02614 7 8.25 7.22386 8.25 7.5V15.5C8.25 15.7761 8.02614 16 7.75 16C7.47386 16 7.25 15.7761 7.25 15.5V7.5C7.25 7.22386 7.47386 7 7.75 7Z"
          />
        </svg>
      );
    case "question":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12.0752 17.05C12.5584 17.05 12.9502 16.6582 12.9502 16.175C12.9502 15.6917 12.5584 15.3 12.0752 15.3C11.5919 15.3 11.2002 15.6917 11.2002 16.175C11.2002 16.6582 11.5919 17.05 12.0752 17.05Z" />
          <path d="M12.75 7.00001H11.8125C11.4429 6.99918 11.0768 7.07137 10.7352 7.21242C10.3936 7.35347 10.0833 7.5606 9.82193 7.82193C9.5606 8.08326 9.35347 8.39364 9.21242 8.73524C9.07137 9.07684 8.99918 9.44293 9.00001 9.81251V10.125H10.25V9.81251C10.25 9.39811 10.4146 9.00068 10.7077 8.70765C11.0007 8.41463 11.3981 8.25001 11.8125 8.25001H12.75C13.1644 8.25001 13.5618 8.41463 13.8549 8.70765C14.1479 9.00068 14.3125 9.39811 14.3125 9.81251C14.3125 10.2269 14.1479 10.6243 13.8549 10.9174C13.5618 11.2104 13.1644 11.375 12.75 11.375H11.5V14.1875H12.75V12.625C13.4959 12.625 14.2113 12.3287 14.7387 11.8012C15.2662 11.2738 15.5625 10.5584 15.5625 9.81251C15.5625 9.06659 15.2662 8.35122 14.7387 7.82377C14.2113 7.29632 13.4959 7.00001 12.75 7.00001Z" />
        </svg>
      );
    case "upload":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path d="M7.91793 11.2782L7.91793 4.04527L5.68774 6.09216L4.85595 5.34456L8.5 2L12.1441 5.34456L11.3123 6.09216L9.08207 4.04527V11.2782H7.91793ZM3.93338 14C3.53003 14 3.1903 13.8723 2.91418 13.6168C2.63806 13.3613 2.5 13.0486 2.5 12.6786V11.4363H3.66416L3.66416 12.6786C3.66416 12.7418 3.69286 12.7998 3.75027 12.8525C3.80768 12.9052 3.87084 12.9315 3.93974 12.9315L13.0603 12.9315C13.1292 12.9315 13.1923 12.9052 13.2497 12.8525C13.3071 12.7998 13.3358 12.7418 13.3358 12.6786V11.4363H14.5V12.6786C14.5 13.0486 14.3607 13.3613 14.0822 13.6168C13.8037 13.8723 13.4627 14 13.0594 14L3.93338 14Z" />
        </svg>
      );
    case "send":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M17.4523 10.7542L3.17635 16.9363C2.88729 17.0424 2.61897 17.0159 2.37139 16.8568C2.1238 16.6976 2 16.4759 2 16.1917V11.6841C2 11.1583 2.40731 10.7222 2.93198 10.6865L13 10L2.93198 9.31354C2.40731 9.27777 2 8.84174 2 8.31586V3.80831C2 3.52406 2.1238 3.30237 2.37139 3.14322C2.61897 2.98408 2.88729 2.95756 3.17635 3.06366L17.4523 9.24531C17.8174 9.37891 18 9.63039 18 9.99976C18 10.3691 17.8174 10.6206 17.4523 10.7542Z" />
        </svg>
      );
    case "accept":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path d="M3.22903 7.774L0.0126953 4.53683L0.757883 3.79167L3.22903 6.24198L9.24184 0.25L9.98703 1.016L3.22903 7.774Z" />
        </svg>
      );
    case "drop-critical":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.625 10.7375L6 7.3625L9.375 10.7375L8.3125 11.8L6 9.4875L3.6875 11.8L2.625 10.7375Z"
            fill="#E05252"
          />
          <path
            d="M2.625 6.375L3.6875 7.4375L6 5.125L8.3125 7.4375L9.375 6.375L6 3L2.625 6.375Z"
            fill="#E05252"
          />
        </svg>
      );
    case "drop-high":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.65039 8.69995H6.02539H9.40039V10.2H6.02539H2.65039V8.69995Z"
            fill="#F4C871"
          />
          <path
            d="M2.65039 5.875L3.71289 6.9375L6.02539 4.625L8.33789 6.9375L9.40039 5.875L6.02539 2.5L2.65039 5.875Z"
            fill="#F4C871"
          />
        </svg>
      );
    case "drop-medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.65039 8.5H6.02539H9.40039V10H6.02539H2.65039V8.5Z"
            fill="#80EDB0"
          />
          <path
            d="M2.65039 5H6.02539H9.40039V6.5H6.02539H2.65039V5Z"
            fill="#80EDB0"
          />
        </svg>
      );
    case "drop-low":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.65039 5.80005H6.02539H9.40039V4.30005H6.02539H2.65039V5.80005Z"
            fill="#55C1F6"
          />
          <path
            d="M2.65039 8.625L3.71289 7.5625L6.02539 9.875L8.33789 7.5625L9.40039 8.625L6.02539 12L2.65039 8.625Z"
            fill="#55C1F6"
          />
        </svg>
      );
    case "drop-info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.625 4.26245L6 7.63745L9.375 4.26245L8.3125 3.19995L6 5.51245L3.6875 3.19995L2.625 4.26245Z"
            fill="#AC7ECE"
          />
          <path
            d="M2.625 8.625L3.6875 7.5625L6 9.875L8.3125 7.5625L9.375 8.625L6 12L2.625 8.625Z"
            fill="#AC7ECE"
          />
        </svg>
      );
    case "close":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9998 0.943764L11.056 0L5.99965 5.05615L0.943969 0.000709162L0.00016116 0.944474L5.05584 5.99992L0 11.0555L0.943808 11.9993L5.99964 6.94368L11.0562 12L12 11.0562L6.94345 5.99992L11.9998 0.943764Z"
          />
        </svg>
      );
    case "bell":
      return (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0684 7.51034V9.87724L13.8351 11.408C13.8351 11.408 14 11.6578 14 11.8077V12.6073C14 12.7573 13.9407 12.9011 13.8352 13.0072C13.7296 13.1132 13.5865 13.1728 13.4372 13.1728H9.81696C9.81696 13.9226 9.52051 14.6417 8.99282 15.1719C8.46514 15.7021 7.74945 16 7.00319 16C6.25694 16 5.54124 15.7021 5.01356 15.1719C4.48588 14.6417 4.18943 13.9226 4.18943 13.1728H0.562753C0.413502 13.1728 0.270363 13.1132 0.164826 13.0072C0.0592899 12.9011 0 12.7573 0 12.6073V11.8077C3.18729e-05 11.6578 0.164887 11.408 0.164887 11.408L0.937922 9.87724V5.62575C0.939728 4.22455 1.45855 2.87379 2.39406 1.83467C3.32958 0.795537 4.61533 0.141832 6.0027 0L8.0036 2.57717e-05C9.39097 0.141858 10.6767 0.795421 11.6122 1.83455C12.5477 2.87368 13.0666 4.22444 13.0684 5.62564V7.51034ZM8.69145 13.1728C8.69145 13.6227 8.51358 14.0541 8.19697 14.3723C7.88036 14.6904 7.45095 14.8691 7.00319 14.8691C6.55544 14.8691 6.12602 14.6904 5.80941 14.3723C5.4928 14.0541 5.31493 13.6227 5.31493 13.1728H8.69145ZM11.9429 7.51034V10.1114C11.9429 10.2613 12.1078 10.5112 12.1078 10.5112L12.8745 12.0419H1.12551L1.89854 10.5112C1.89854 10.5112 2.0634 10.2613 2.06343 10.1114V5.62575C2.06198 4.83124 2.2692 4.0504 2.66417 3.3621C3.05914 2.6738 3.62787 2.1024 4.31293 1.7056C4.99799 1.3088 6.21286 1.10065 7.0036 1.10218C8.23198 1.1037 9.00832 1.31485 9.69186 1.71429V1.70461L9.69337 1.70548C10.3784 2.10228 10.9472 2.67368 11.3421 3.36198C11.7371 4.05029 11.9443 4.83112 11.9429 5.62564V7.51034Z"
          />
        </svg>
      );
    case "hexens-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M7.18125 0.00012207H3.84062L0.5 3.34074V6.65954H2.72708V4.25778L4.75766 2.2272H7.18125V0.00012207Z" />
          <path d="M17.1817 15.7423L15.1511 17.7729H12.7275V20H16.0682L19.4088 16.6593V13.3405H17.1817V15.7423Z" />
          <path d="M12.728 15.5679H14.9551V12.5548L11.7455 10.0002L14.9551 7.4456V4.4325H12.728V6.37573L9.9551 8.58098L7.18216 6.37573V4.4325H4.95508V7.4456L8.16469 10.0002L4.95508 12.5548V15.5679H7.18216V13.6247L9.9551 11.4194L12.728 13.6247V15.5679Z" />
        </svg>
      );
    case "telegram-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M1.85862 7.22604C1.85862 7.22604 8.05055 4.59209 10.1979 3.6641C11.0211 3.29344 13.8122 2.10613 13.8122 2.10613C13.8122 2.10613 15.101 1.58614 14.9936 2.84812C14.9583 3.36811 14.6721 5.18541 14.3853 7.15204C13.9557 9.93465 13.4907 12.9766 13.4907 12.9766C13.4907 12.9766 13.4193 13.8299 12.8109 13.9786C12.2025 14.1272 11.1999 13.4586 11.0211 13.3106C10.8777 13.1993 8.33674 11.53 7.40615 10.7133C7.15533 10.4913 6.86915 10.046 7.44216 9.52666C8.71726 8.31454 9.97007 7.07745 11.1999 5.81606C11.6295 5.37074 12.0591 4.33209 10.2693 5.5934C7.72835 7.41137 5.22277 9.118 5.22277 9.118C5.22277 9.118 4.65039 9.48933 3.57639 9.15534C2.50238 8.82201 1.24959 8.37602 1.24959 8.37602C1.24959 8.37602 0.391032 7.82003 1.85862 7.22604Z" />
        </svg>
      );
    case "twitter-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M9.3319 6.92804L14.5437 1H13.3087L8.78327 6.14724L5.16883 1H1L6.46574 8.78354L1 15H2.2351L7.01406 9.56434L10.8312 15H15L9.3316 6.92804H9.3319ZM7.64026 8.85211L7.08647 8.07705L2.68013 1.90978H4.57717L8.13314 6.88696L8.68693 7.66202L13.3093 14.1316H11.4122L7.64026 8.85241V8.85211Z" />
        </svg>
      );
    case "linkedin-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M14.1364 0.5H1.86364C1.11023 0.5 0.5 1.11023 0.5 1.86364V14.1364C0.5 14.8898 1.11023 15.5 1.86364 15.5H14.1364C14.8898 15.5 15.5 14.8898 15.5 14.1364V1.86364C15.5 1.11023 14.8898 0.5 14.1364 0.5ZM5.24137 12.7727H3.23V6.30091H5.24137V12.7727ZM4.21523 5.37568C3.56682 5.37568 3.0425 4.85 3.0425 4.20296C3.0425 3.55591 3.5675 3.03091 4.21523 3.03091C4.86159 3.03091 5.38727 3.55659 5.38727 4.20296C5.38727 4.85 4.86159 5.37568 4.21523 5.37568ZM12.7754 12.7727H10.7654V9.62546C10.7654 8.87477 10.7518 7.90932 9.72023 7.90932C8.67364 7.90932 8.51273 8.72682 8.51273 9.57091V12.7727H6.50273V6.30091H8.43227V7.18523H8.45954C8.72818 6.67659 9.38409 6.14 10.3625 6.14C12.3991 6.14 12.7754 7.48046 12.7754 9.22318V12.7727Z" />
        </svg>
      );
    case "github-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C12.42 0 16 3.58 16 8C15.9996 9.6762 15.4735 11.3101 14.4958 12.6716C13.5182 14.0332 12.1381 15.0539 10.55 15.59C10.15 15.67 10 15.42 10 15.21C10 14.94 10.01 14.08 10.01 13.01C10.01 12.26 9.76 11.78 9.47 11.53C11.25 11.33 13.12 10.65 13.12 7.58C13.12 6.7 12.81 5.99 12.3 5.43C12.38 5.23 12.66 4.41 12.22 3.31C12.22 3.31 11.55 3.09 10.02 4.13C9.38 3.95 8.7 3.86 8.02 3.86C7.34 3.86 6.66 3.95 6.02 4.13C4.49 3.1 3.82 3.31 3.82 3.31C3.38 4.41 3.66 5.23 3.74 5.43C3.23 5.99 2.92 6.71 2.92 7.58C2.92 10.64 4.78 11.33 6.56 11.53C6.33 11.73 6.12 12.08 6.05 12.6C5.59 12.81 4.44 13.15 3.72 11.94C3.57 11.7 3.12 11.11 2.49 11.12C1.82 11.13 2.22 11.5 2.5 11.65C2.84 11.84 3.23 12.55 3.32 12.78C3.48 13.23 4 14.09 6.01 13.72C6.01 14.39 6.02 15.02 6.02 15.21C6.02 15.42 5.87 15.66 5.47 15.59C3.87664 15.0596 2.49073 14.041 1.50889 12.6786C0.527047 11.3163 -0.000880479 9.67931 1.10231e-06 8C1.10231e-06 3.58 3.58 0 8 0Z" />
        </svg>
      );
    case "facebook-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
        >
          <path d="M7.50711 8.155L7.89714 5.34133H5.4585V4.04715C5.4585 3.35398 5.79916 2.67832 6.89135 2.67832H8V0.171172C8 0.171172 6.99393 0 6.03203 0C4.02373 0 2.23238 1.21352 2.23238 3.41031V5.34133H0V8.155H2.23238V14H5.4585V8.155H7.50711Z" />
        </svg>
      );
    case "discord-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M13.5534 2.92141C12.4968 2.48327 11.3883 2.17378 10.2534 2C10.0974 2.25235 9.95603 2.51312 9.8307 2.77971C8.61557 2.61373 7.38248 2.61373 6.16735 2.77971C6.04002 2.51312 5.90002 2.253 5.74335 2C4.60737 2.17508 3.49792 2.48519 2.44 2.92335C0.351329 5.72706 -0.21534 8.46088 0.0679948 11.1565C1.30431 11.9823 2.67212 12.6051 4.11668 13C4.44401 12.6001 4.73401 12.1756 4.98335 11.7318C4.51193 11.5722 4.05521 11.3743 3.61801 11.1404C3.73268 11.0653 3.84468 10.9876 3.95268 10.9119C5.21935 11.4522 6.60069 11.7324 8.00003 11.7324C9.39937 11.7324 10.7814 11.4522 12.0467 10.9119C12.1567 10.9928 12.2687 11.0705 12.382 11.1404C11.946 11.3733 11.4887 11.5719 11.014 11.7331C11.2627 12.1769 11.5527 12.6001 11.8807 13C13.3265 12.6068 14.6954 11.9843 15.9321 11.1578C16.2641 8.03253 15.3647 5.32329 13.5534 2.92076V2.92141ZM5.34202 9.49876C4.55335 9.49876 3.90134 8.84912 3.90134 8.05C3.90134 7.25088 4.53068 6.59606 5.33935 6.59606C6.14869 6.59606 6.79602 7.25088 6.78202 8.05C6.76802 8.84912 6.14602 9.49941 5.34202 9.49941V9.49876ZM10.658 9.49876C9.86737 9.49876 9.21803 8.84912 9.21803 8.05C9.21803 7.25088 9.84737 6.59606 10.658 6.59606C11.4687 6.59606 12.11 7.25088 12.096 8.05C12.0827 8.84912 11.462 9.49941 10.658 9.49941V9.49876Z" />
        </svg>
      );
    case "social-link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M7.79108 3.61261L8.95176 2.45193C9.25356 2.15013 9.61185 1.91073 10.0062 1.7474C10.4005 1.58407 10.8231 1.5 11.2499 1.5C11.6767 1.5 12.0994 1.58407 12.4937 1.7474C12.888 1.91073 13.2463 2.15013 13.5481 2.45193C13.8499 2.75373 14.0893 3.11201 14.2526 3.50633C14.4159 3.90065 14.5 4.32328 14.5 4.75008C14.5 5.17689 14.4159 5.59952 14.2526 5.99384C14.0893 6.38815 13.8499 6.74644 13.5481 7.04824L11.2267 9.36961C10.9249 9.67143 10.5666 9.91084 10.1723 10.0742C9.77799 10.2375 9.35536 10.3216 8.92855 10.3216C8.50173 10.3216 8.0791 10.2375 7.68478 10.0742C7.29046 9.91084 6.93218 9.67143 6.63039 9.36961C6.50744 9.23751 6.44049 9.0629 6.44361 8.88246C6.44673 8.70203 6.51967 8.52983 6.64711 8.40206C6.77488 8.27462 6.94708 8.20168 7.12751 8.19857C7.30794 8.19545 7.48256 8.2624 7.61465 8.38535C7.787 8.55824 7.99178 8.69541 8.21724 8.78901C8.44271 8.8826 8.68443 8.93078 8.92855 8.93078C9.17267 8.93078 9.41439 8.8826 9.63985 8.78901C9.86532 8.69541 10.0701 8.55824 10.2424 8.38535L12.5638 6.06398C12.8953 5.71211 13.0767 5.24493 13.0695 4.76154C13.0623 4.27816 12.8671 3.81659 12.5253 3.47475C12.1834 3.1329 11.7218 2.93768 11.2385 2.93048C10.7551 2.92328 10.2879 3.10468 9.93602 3.43619L8.77534 4.59687C8.64324 4.71982 8.46863 4.78677 8.28819 4.78365C8.10776 4.78054 7.93556 4.7076 7.80779 4.58016C7.68035 4.45239 7.60741 4.28019 7.60429 4.09976C7.60118 3.91932 7.66813 3.74471 7.79108 3.61261ZM3.43619 12.5638C3.60854 12.7367 3.81331 12.8739 4.03878 12.9675C4.26424 13.0611 4.50596 13.1092 4.75008 13.1092C4.9942 13.1092 5.23592 13.0611 5.46139 12.9675C5.68685 12.8739 5.89163 12.7367 6.06398 12.5638L7.22466 11.4031C7.35676 11.2802 7.53137 11.2132 7.71181 11.2163C7.89224 11.2195 8.06444 11.2924 8.19221 11.4198C8.31965 11.5476 8.39259 11.7198 8.39571 11.9002C8.39882 12.0807 8.33187 12.2553 8.20892 12.3874L7.04824 13.5481C6.74644 13.8499 6.38815 14.0893 5.99384 14.2526C5.59952 14.4159 5.17689 14.5 4.75008 14.5C3.88811 14.5 3.06144 14.1576 2.45193 13.5481C1.84242 12.9386 1.5 12.1119 1.5 11.2499C1.5 10.3879 1.84242 9.56127 2.45193 8.95176L4.7733 6.63039C5.07508 6.32857 5.43337 6.08916 5.82769 5.92581C6.22201 5.76247 6.64464 5.6784 7.07145 5.6784C7.49827 5.6784 7.9209 5.76247 8.31522 5.92581C8.70954 6.08916 9.06782 6.32857 9.36961 6.63039C9.49256 6.76249 9.55951 6.9371 9.55639 7.11754C9.55327 7.29797 9.48033 7.47017 9.35289 7.59794C9.22512 7.72538 9.05292 7.79832 8.87249 7.80144C8.69206 7.80455 8.51744 7.7376 8.38535 7.61465C8.213 7.44177 8.00822 7.30459 7.78276 7.211C7.55729 7.1174 7.31557 7.06922 7.07145 7.06922C6.82733 7.06922 6.58561 7.1174 6.36015 7.211C6.13468 7.30459 5.92991 7.44177 5.75756 7.61465L3.43619 9.93602C3.2633 10.1084 3.12613 10.3131 3.03253 10.5386C2.93893 10.7641 2.89075 11.0058 2.89075 11.2499C2.89075 11.494 2.93893 11.7358 3.03253 11.9612C3.12613 12.1867 3.2633 12.3915 3.43619 12.5638Z" />
        </svg>
      );
    case "picture":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M3.22936 14.5C2.89129 14.5 2.60188 14.3673 2.36112 14.1018C2.12037 13.8364 2 13.5252 2 13.1682V2.8318C2 2.47483 2.12037 2.16362 2.36112 1.89817C2.60188 1.63272 2.89129 1.5 3.22936 1.5H12.7706C13.1087 1.5 13.3981 1.63272 13.6389 1.89817C13.8796 2.16362 14 2.47483 14 2.8318V13.1682C14 13.5252 13.8796 13.8364 13.6389 14.1018C13.3981 14.3673 13.1087 14.5 12.7706 14.5H3.22936ZM3.22936 13.1682H12.7706V2.8318H3.22936V13.1682ZM4.18349 11.7569H11.8349L9.2844 8.07951L7.33945 10.8823L6.05505 9.05352L4.18349 11.7569Z" />
        </svg>
      );
    case "dots":
      return (
        <svg
          width="4"
          height="14"
          viewBox="0 0 4 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="1.5" r="1.5" transform="rotate(90 2 1.5)" />
          <circle cx="2" cy="7" r="1.5" transform="rotate(90 2 7)" />
          <circle cx="2" cy="12.5" r="1.5" transform="rotate(90 2 12.5)" />
        </svg>
      );
    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
        >
          <path d="M6.19995 0C2.88656 0 0.199951 2.68661 0.199951 6C0.199951 9.31339 2.88656 12 6.19995 12C9.51334 12 12.2 9.31339 12.2 6C12.2 2.68661 9.51334 0 6.19995 0ZM6.19995 10.9821C3.44906 10.9821 1.21781 8.75089 1.21781 6C1.21781 3.24911 3.44906 1.01786 6.19995 1.01786C8.95084 1.01786 11.1821 3.24911 11.1821 6C11.1821 8.75089 8.95084 10.9821 6.19995 10.9821Z" />
          <path d="M5.55688 3.64286C5.55688 3.81335 5.62461 3.97687 5.74517 4.09743C5.86573 4.21799 6.02925 4.28571 6.19974 4.28571C6.37024 4.28571 6.53375 4.21799 6.65431 4.09743C6.77487 3.97687 6.8426 3.81335 6.8426 3.64286C6.8426 3.47236 6.77487 3.30885 6.65431 3.18829C6.53375 3.06773 6.37024 3 6.19974 3C6.02925 3 5.86573 3.06773 5.74517 3.18829C5.62461 3.30885 5.55688 3.47236 5.55688 3.64286ZM6.52117 5.14286H5.87831C5.81939 5.14286 5.77117 5.19107 5.77117 5.25V8.89286C5.77117 8.95179 5.81939 9 5.87831 9H6.52117C6.5801 9 6.62831 8.95179 6.62831 8.89286V5.25C6.62831 5.19107 6.5801 5.14286 6.52117 5.14286Z" />
        </svg>
      );
  }
}
