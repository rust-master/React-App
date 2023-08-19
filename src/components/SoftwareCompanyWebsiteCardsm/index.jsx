import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsiteCardsm = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mb-1.5 mt-[26px] w-auto sm:w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-start p-2.5 w-[11%] sm:w-full"
            style={{ backgroundImage: "url('images/img_group14.png')" }}
          >
            <Img
              className="h-[35px] md:h-auto object-cover w-[34px] sm:w-full"
              alt="rocketperspecti"
              src="props?.userimage"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtBeVietnamProSemiBold20Gray900"
            >
              {props?.username}
            </Text>
            {props?.userdescription}
          </div>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteCardsm.defaultProps = {
  username: "UX Driven Engineering",
  userdescription: (
    <Text
      className="leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm"
      size="txtInterRegular14"
    >
      <span className="text-gray-700 font-bevietnampro text-left font-normal">
        Unlike other companies, we are a{" "}
      </span>
      <span className="text-blue_gray-900_01 font-bevietnampro text-left font-normal">
        UX first
      </span>
      <span className="text-gray-700 font-bevietnampro text-left font-normal">
        {" "}
        development company. Projects are driven by designers and they make sure
        design and experiences translate to code.
      </span>
    </Text>
  ),
};

export default SoftwareCompanyWebsiteCardsm;
