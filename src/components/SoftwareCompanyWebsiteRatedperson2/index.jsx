import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsiteRatedperson2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-300 flex flex-col h-[100px] items-center justify-start rounded-[50%] shadow-bs w-[100px]">
          <Img
            className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
            src="images/img_ellipse1_100x100.png"
            alt="ellipseOne"
          />
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
          <div className="flex flex-row gap-1.5 items-center justify-between w-[94%] md:w-full">
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
              className="text-blue-700 text-center text-lg tracking-[-0.09px] w-auto"
              size="txtBeVietnamProBold18Blue700"
            >
              {props?.username}
            </Text>
            <Text
              className="text-black-900 text-center text-sm w-auto"
              size="txtBeVietnamProRegular14Black900"
            >
              {props?.userrole}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteRatedperson2.defaultProps = {
  username: "Imran Khan",
  userrole: "Software Engineer",
};

export default SoftwareCompanyWebsiteRatedperson2;
