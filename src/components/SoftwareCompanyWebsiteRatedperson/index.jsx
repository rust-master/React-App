import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsiteRatedperson = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-20 relative w-20">
          <Img
            className="h-20 m-auto rounded-[50%] w-20"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
          <div className="absolute bg-gray-300_99 h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"></div>
        </div>
        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
          <div className="flex flex-row gap-1.5 items-center justify-between w-[99%] md:w-full">
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
          <div className="flex flex-col gap-[5px] items-center justify-center w-auto md:w-full">
            <Text
              className="text-center text-gray-500 text-sm w-auto"
              size="txtInterSemiBold14"
            >
              {props?.username}
            </Text>
            <Text
              className="text-[11px] text-center text-gray-300 w-auto"
              size="txtBeVietnamProRegular11"
            >
              {props?.usercompany}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteRatedperson.defaultProps = {
  username: "Romeena De Silva",
  usercompany: "Janet Cosmetics",
};

export default SoftwareCompanyWebsiteRatedperson;
