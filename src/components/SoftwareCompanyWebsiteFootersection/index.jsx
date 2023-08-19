import React from "react";

import { Button, Img, Line, Text } from "components";

const SoftwareCompanyWebsiteFootersection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-col gap-[18px] justify-start w-3/5 md:w-full">
                    <Text
                      className="md:ml-[0] ml-[450px] text-gray-700 text-lg tracking-[-0.09px]"
                      size="txtBeVietnamProBold18Bluegray700"
                    >
                      {props?.links}
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="leading-[30.00px] sm:mt-0 mt-[13px] text-gray-600 text-lg"
                        size="txtBeVietnamProRegular18Bluegray400"
                      >
                        {props?.descriptionThree}
                      </Text>
                      <Text
                        className="leading-[236.30%] text-gray-600 text-lg"
                        size="txtBeVietnamProRegular18Bluegray400"
                      >
                        {props?.aboutusservicesOne}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[23px] items-start justify-start">
                    <Text
                      className="text-gray-700 text-lg tracking-[-0.09px]"
                      size="txtBeVietnamProBold18Bluegray700"
                    >
                      {props?.contactus}
                    </Text>
                    <Text
                      className="leading-[30.00px] text-gray-600 text-lg w-full"
                      size="txtBeVietnamProRegular18Bluegray400"
                    >
                      {props?.languageTwo}
                    </Text>
                    <Text
                      className="text-gray-600 text-lg"
                      size="txtBeVietnamProRegular18Bluegray400"
                    >
                      {props?.mobileno}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:mt-0 mt-[260px] w-[15%] md:w-full">
                  <Button className="bg-gray-50 flex h-[34px] items-center justify-center p-[11px] rounded-[50%] shadow-bs1 w-[34px]">
                    <Img
                      className="h-3"
                      src="images/img_facebook1.svg"
                      alt="facebookOne"
                    />
                  </Button>
                  <Button className="bg-gray-50 flex h-[34px] items-center justify-center p-2.5 rounded-[50%] shadow-bs1 w-[34px]">
                    <Img
                      className="h-[13px]"
                      src="images/img_instagram1.svg"
                      alt="instagramOne"
                    />
                  </Button>
                  <Button className="bg-gray-50 flex h-[34px] items-center justify-center p-2.5 rounded-[50%] shadow-bs1 w-[34px]">
                    <Img
                      className="h-[13px]"
                      src="images/img_twitter1.svg"
                      alt="twitterOne"
                    />
                  </Button>
                  <Button className="bg-gray-50 flex h-[34px] items-center justify-center p-[11px] rounded-[50%] shadow-bs1 w-[34px]">
                    <Img
                      className="h-[11px]"
                      src="images/img_linkedin1.svg"
                      alt="linkedinOne"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-400 h-px mt-[81px] w-full" />
        <Text
          className="mb-[3px] mt-[31px] text-gray-700 text-sm tracking-[-0.07px]"
          size="txtBeVietnamProRegular14Bluegray700"
        >
          {props?.p2023copyright}
        </Text>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteFootersection.defaultProps = {
  links: "Links",
  descriptionThree: (
    <>
      Micro IT Industry is a leading software company that offers a range of
      services to help businesses stay competitive in today&#39;s digital age.
    </>
  ),
  aboutusservicesOne: (
    <>
      About Us
      <br />
      Services
      <br />
      Portfolio
      <br />
      Blog
      <br />
      Careers
    </>
  ),
  contactus: "Contact us",
  languageTwo:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  mobileno: "+923183561921",
  p2023copyright:
    "© 2023 Copyright by Micro IT Industry. All rights reserved.",
};

export default SoftwareCompanyWebsiteFootersection;
