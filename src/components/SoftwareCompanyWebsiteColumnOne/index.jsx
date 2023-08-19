import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsiteColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100_01 flex flex-col md:gap-10 gap-[60px] items-end justify-end mb-10 mt-[15px] w-auto sm:w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-800 w-auto"
              size="txtBeVietnamProSemiBold28Bluegray900"
            >
              {props?.countrytext}
            </Text>
            <Text
              className="leading-[162.02%] max-w-[529px] md:max-w-full text-gray-700 text-sm"
              size="txtBeVietnamProRegular14Bluegray700"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center w-auto">
            <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
              <Text
                className="bg-clip-text bg-gradient  text-sm text-transparent w-[74px]"
                size="txtBeVietnamProSemiBold14"
              >
                {props?.readmoretext}
              </Text>
              <Img
                className="h-4 md:h-auto object-cover w-4"
                src="images/img_arrowright_16x16.png"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteColumnOne.defaultProps = {};

export default SoftwareCompanyWebsiteColumnOne;
