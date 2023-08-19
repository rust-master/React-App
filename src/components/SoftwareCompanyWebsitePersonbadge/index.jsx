import React from "react";

import { Img, Text } from "components";

const SoftwareCompanyWebsitePersonbadge = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
          src="images/img_ellipse185.png"
          alt="ellipse185"
        />
        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtBeVietnamProRegular16Gray900"
          >
            {props?.username}
          </Text>
          <Text
            className="text-[13px] text-gray-600 w-auto"
            size="txtBeVietnamProRegular13"
          >
            {props?.userposition}
          </Text>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsitePersonbadge.defaultProps = {
  username: "Jeewa markram",
  userposition: "CEO",
};

export default SoftwareCompanyWebsitePersonbadge;
