import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsiteRatedperson1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[85px] relative w-[85px]">
          <Img
            className="h-[85px] m-auto rounded-[50%] w-[85px]"
            src="images/img_ellipse1_85x85.png"
            alt="ellipseOne"
          />
          <div className="absolute bg-gray-300_99 h-[85px] inset-[0] justify-center m-auto rounded-[42px] w-[85px]"></div>
        </div>
        <div className="flex flex-row gap-1.5 items-center justify-start w-[85%] md:w-full">
          <Img
            className="h-5 md:h-auto object-cover w-[19px]"
            src="images/img_starperspectivematte.png"
            alt="starperspective"
          />
          <Img
            className="h-5 md:h-auto object-cover w-[19px]"
            src="images/img_starperspectivematte.png"
            alt="starperspective_One"
          />
          <Img
            className="h-5 md:h-auto object-cover w-[19px]"
            src="images/img_starperspectivematte.png"
            alt="starperspective_Two"
          />
          <Img
            className="h-5 md:h-auto object-cover w-[19px]"
            src="images/img_starperspectivematte.png"
            alt="starperspective_Three"
          />
          <Img
            className="h-5 md:h-auto object-cover w-[19px]"
            src="images/img_starperspectivematte.png"
            alt="starperspective_Four"
          />
        </div>
        <div className="flex flex-col gap-0.5 items-center justify-center w-auto md:w-full">
          <Text
            className="text-base text-center text-gray-500 w-auto"
            size="txtBeVietnamProMedium16Bluegray200"
          >
            {props?.username}
          </Text>
          <Text
            className="text-center text-gray-400 text-xs w-auto"
            size="txtBeVietnamProRegular12"
          >
            {props?.usercompany}
          </Text>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteRatedperson1.defaultProps = {
  username: "Romeena De Silva",
  usercompany: "Janet Cosmetics",
};

export default SoftwareCompanyWebsiteRatedperson1;
