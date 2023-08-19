import React from "react";

import { Img } from "components";

const SoftwareCompanyWebsiteVideowrappper = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[460px] m-auto object-cover rounded-[20px] w-full"
          src="images/img_rectangle8.png"
          alt="rectangleEight"
        />
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto p-[191px] md:px-10 sm:px-5 rounded-[20px] w-full">
          <div className="h-[78px] relative w-[78px]">
            <div className="bg-white-A700 h-12 m-auto rounded-[50%] w-12"></div>
            <div className="absolute bg-white-A700_6d flex flex-col h-full inset-[0] items-center justify-center m-auto p-2.5 rounded-[50%] w-[78px]">
              <Img
                className="h-[58px] w-[58px]"
                src="images/img_playcirclefill.svg"
                alt="playcirclefill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SoftwareCompanyWebsiteVideowrappper.defaultProps = {};

export default SoftwareCompanyWebsiteVideowrappper;
