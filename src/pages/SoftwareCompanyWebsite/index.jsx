import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import SoftwareCompanyWebsiteCardsm from "components/SoftwareCompanyWebsiteCardsm";
import SoftwareCompanyWebsiteColumnOne from "components/SoftwareCompanyWebsiteColumnOne";
import SoftwareCompanyWebsiteFootersection from "components/SoftwareCompanyWebsiteFootersection";
import SoftwareCompanyWebsitePersonbadge from "components/SoftwareCompanyWebsitePersonbadge";
import SoftwareCompanyWebsiteRatedperson from "components/SoftwareCompanyWebsiteRatedperson";
import SoftwareCompanyWebsiteRatedperson1 from "components/SoftwareCompanyWebsiteRatedperson1";
import SoftwareCompanyWebsiteRatedperson2 from "components/SoftwareCompanyWebsiteRatedperson2";
import SoftwareCompanyWebsiteVideowrappper from "components/SoftwareCompanyWebsiteVideowrappper";

const SoftwareCompanyWebsitePage = () => {
  const softwareCompanyWebsiteCardsmPropList = [
    {
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-blue_gray-900_01 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
    {
      username: "Developing Shared Understanding",
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-cyan-200 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
    {
      username: "Proven Experience and Expertise",
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-pink-200 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
    {
      username: "Security & Intellectual Property (IP)",
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-cyan-200_01 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
    {
      username: "Code Reviews",
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-yellow-400 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
    {
      username: "Quality Assurance & Testing",
      userdescription: (
        <Text className="font-inter leading-[162.02%] max-w-[453px] md:max-w-full text-gray-700 text-sm">
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            Unlike other companies, we are a{" "}
          </span>
          <span className="text-pink-300 font-bevietnampro text-left font-normal">
            UX first
          </span>
          <span className="text-gray-700 font-bevietnampro text-left font-normal">
            {" "}
            development company. Projects are driven by designers and they make
            sure design and experiences translate to code.
          </span>
        </Text>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bevietnampro items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs2 w-full">
            <Img
              className="md:flex-1 h-[70px] sm:h-auto mb-[29px] md:ml-[0] ml-[104px] md:mt-0 mt-9 object-cover w-[14%] md:w-full"
              src="images/img_microitindustry.png"
              alt="microitindustry"
            />
            <div className="flex sm:flex-1 flex-row items-center justify-between mb-[29px] md:ml-[0] ml-[419px] md:mt-0 mt-[62px] py-2.5 w-[373px] sm:w-full">
              <Button className="bg-transparent cursor-pointer min-w-[84px] text-center text-gray-700 text-xl">
                Services
              </Button>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-700 text-xl w-auto"
                  size="txtBeVietnamProRegular20"
                >
                  Industries
                </Text>
              </div>
              <Button className="bg-transparent cursor-pointer min-w-[95px] text-center text-gray-700 text-xl">
                Company
              </Button>
            </div>
            <Button className="bg-gradient1  cursor-pointer font-semibold mb-8 min-w-[166px] md:ml-[0] ml-[71px] mr-[107px] md:mt-0 mt-[62px] py-2 text-center text-gray-50 text-xl">
              Contact US
            </Button>
          </header>
          <div className="md:h-[1329px] h-[1511px] sm:h-[2361px] mt-[78px] md:px-5 relative w-full">
            <div className="absolute md:h-[1130px] h-[1511px] inset-y-[0] my-auto right-[2%] w-[91%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[893px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-auto md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-7 items-start justify-start w-auto md:w-full">
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[53px] text-gray-900 w-auto"
                          size="txtInterExtraBold53"
                        >
                          <span className="md:text-[41px] sm:text-[35px] text-blue-A400 font-bevietnampro text-left text-[45px] font-bold">
                            Micro
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-pink-400 font-bevietnampro text-left text-[45px] font-bold">
                            {" "}
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-light_blue-500 font-bevietnampro text-left text-[45px] font-bold">
                            IT
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-pink-400 font-bevietnampro text-left text-[45px] font-bold">
                            {" "}
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-gray-500 font-bevietnampro text-left text-[45px] font-bold">
                            Industry
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-gray-900 font-inter text-left text-[45px] font-light">
                            <>
                              {" "}
                              <br />
                            </>
                          </span>
                          <span className="md:text-[41px] sm:text-[35px] text-gray-900 font-bevietnampro text-left text-[45px] font-light">
                            is global
                          </span>
                          <span className="text-gray-900 font-bevietnampro text-left font-light">
                            <>mission to </>
                          </span>
                          <span className="text-gray-900 font-inter text-left font-extrabold">
                            <>
                              create
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-bevietnampro text-left font-extrabold">
                            cutting edge{" "}
                          </span>
                          <span className="text-blue-A400 font-bevietnampro text-left font-extrabold">
                            <>
                              engineering <br />
                              solutions{" "}
                            </>
                          </span>
                          <span className="text-red-300 font-bevietnampro text-left font-extrabold">
                            {" "}
                          </span>
                        </Text>
                        <Text
                          className="leading-[36.00px] max-w-[531px] md:max-w-full text-gray-700 text-lg"
                          size="txtBeVietnamProRegular18"
                        >
                          We help build and manage a team of world-class
                          developers to bring your vision to life
                        </Text>
                      </div>
                      <Button className="bg-gradient2  cursor-pointer min-w-[188px] py-[13px] shadow-bs text-center text-gray-50 text-xl">
                        Explore More
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[546px] md:h-auto object-cover w-full"
                          src="images/img_webdevelopment.png"
                          alt="webdevelopment"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient3  h-[72px] rounded-[50%] w-[72px]"></div>
                </div>
              </div>
              <div className="absolute bg-gradient3  h-[94px] left-[41%] rotate-[23deg] rounded-[50%] top-[36%] w-[94px]"></div>
            </div>
            <div className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <Line className="bg-blue-700 h-px w-full" />
              <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[53px] items-center justify-start mb-[19px] w-[94%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                      size="txtBeVietnamProBold40"
                    >
                      Technology Consulting & Development Services
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      <div
                        className="bg-cover bg-no-repeat border-colors1 border-solid flex flex-1 flex-col h-[187px] items-center justify-start p-[21px] sm:px-5 shadow-bs3 text-colors w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[9px] items-center justify-start mb-1 w-[54%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_cybersecurity.png"
                            alt="cybersecurity"
                          />
                          <Text
                            className="bg-clip-text bg-gradient4  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24"
                          >
                            Cyber Security
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[21px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[11px] items-center justify-start mb-0.5 w-[89%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_blockchaintechnology.png"
                            alt="blockchaintechn"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            Blockchain Development
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[21px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-2.5 items-start justify-start mb-[3px] w-[30%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_artificialintelligence.png"
                            alt="artificialintel"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            AI/ML
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[21px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[11px] justify-start mb-0.5 w-[74%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto md:ml-[0] ml-[81px] object-cover w-[100px]"
                            src="images/img_image1.png"
                            alt="imageOne"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            Quantum Computing
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[21px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[11px] justify-start mb-0.5 w-[98%] md:w-full">
                          <Img
                            className="h-[100px] md:h-auto md:ml-[0] ml-[122px] object-cover w-[100px]"
                            src="images/img_laptopcoding.png"
                            alt="laptopcoding"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            Web Design & Development
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[22px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[90%] md:w-full">
                          <Img
                            className="h-[95px] md:h-auto object-cover w-[21%] sm:w-full"
                            src="images/img_image2.png"
                            alt="imageTwo"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            Mobile App Development
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-3 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-2.5 justify-start mb-3 mt-[9px] w-full">
                          <Img
                            className="h-[100px] md:h-auto md:ml-[0] ml-[133px] object-cover w-[34%] sm:w-full"
                            src="images/img_image3.png"
                            alt="imageThree"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            WordPress/Wix Development
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-end p-[25px] sm:px-5 shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[21px] justify-start w-[79%] md:w-full">
                          <Img
                            className="h-[82px] md:h-auto md:ml-[0] ml-[88px] object-cover w-[39%] sm:w-full"
                            src="images/img_image4.png"
                            alt="imageFour"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtBeVietnamProSemiBold24Black900"
                          >
                            Automation Software
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[187px] items-center justify-start p-[18px] shadow-bs3 w-full"
                        style={{
                          backgroundImage: "url('images/img_servicecard.png')",
                        }}
                      >
                        <div className="flex flex-col gap-[11px] items-center justify-start mb-2 mt-[3px] w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover w-[100px]"
                            src="images/img_imacsettings.png"
                            alt="imacsettings"
                          />
                          <Text
                            className="bg-clip-text bg-gradient5  text-[22px] sm:text-lg text-transparent md:text-xl"
                            size="txtBeVietnamProSemiBold22"
                          >
                            Custom Software Development{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-blue-700 h-px w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-24 items-start justify-start max-w-[1232px] mt-[99px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-[51px] items-start justify-start md:mt-0 mt-[5px] w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <Line className="bg-gradient3  h-[5px] w-[13%]" />
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="leading-[55.00px] max-w-[474px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                    size="txtInterBold35"
                  >
                    <span className="text-gray-900 font-bevietnampro text-left font-normal">
                      Leading companies trust us
                    </span>
                    <span className="text-gray-900 font-bevietnampro text-left font-bold">
                      {" "}
                      to develop software
                    </span>
                  </Text>
                  <Text
                    className="leading-[36.00px] max-w-[535px] md:max-w-full text-gray-600 text-lg"
                    size="txtInterRegular18"
                  >
                    <span className="text-gray-600 font-bevietnampro text-left font-normal">
                      We{" "}
                    </span>
                    <span className="text-blue-700 font-bevietnampro text-left font-normal">
                      add development capacity
                    </span>
                    <span className="text-gray-600 font-bevietnampro text-left font-normal">
                      {" "}
                      to tech teams. Our value isn’t limited to building teams
                      but is equally distributed across the project lifecycle.
                      We are a custom software development company that
                      guarantees the successful delivery of your project.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-bevietnampro gap-[15px] items-center justify-end w-auto">
                <Text
                  className="text-base text-blue-900 w-auto"
                  size="txtBeVietnamProMedium16"
                >
                  See more Informations
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <SoftwareCompanyWebsiteVideowrappper className="h-[460px] relative w-full" />
            </div>
          </div>
          <Img
            className="h-[5px] md:h-auto md:ml-[0] ml-[105px] mt-2 object-cover w-[69px] sm:w-full"
            src="images/img_frame11.png"
            alt="frameEleven"
          />
          <div className="md:h-[246px] h-[279px] mt-[43px] md:px-5 relative w-full">
            <div className="absolute bg-gradient3  h-[72px] right-[38%] rounded-[50%] top-[15%] w-[72px]"></div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="h-[202px] relative w-full">
                <div className="bg-gray-100 flex flex-col h-full items-center justify-start m-auto pb-[201px] w-full">
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
                <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                  <div className="flex md:flex-col flex-row gap-[54px] items-start justify-start overflow-auto w-auto md:w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-[107px] sm:w-full"
                      src="images/img_hd.png"
                      alt="hd"
                    />
                    <Img
                      className="h-[81px] md:h-auto object-cover w-[136px] sm:w-full"
                      src="images/img_logo9.png"
                      alt="logoNine"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[101px] sm:w-full"
                      src="images/img_logo8.png"
                      alt="logoEight"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_logo5.png"
                      alt="logoFive"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_logo7.png"
                      alt="logoSeven"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_logo9_80x215.png"
                      alt="logoNine_One"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_logo6.png"
                      alt="logoSix"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover w-[215px] sm:w-full"
                      src="images/img_logo3.png"
                      alt="logoThree"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
            </div>
            <div className="absolute flex flex-row gap-[22px] items-center justify-center right-[6%] top-[0] w-auto">
              <Button className="border-2 border-blue-700 border-solid flex h-[45px] items-center justify-center p-[11px] rounded-[22px] w-[45px]">
                <Img
                  className="h-[22px]"
                  src="images/img_evaarrowbackfill.svg"
                  alt="evaarrowbackfil"
                />
              </Button>
              <Button className="bg-blue-700 border-2 border-blue-700 border-solid flex h-[45px] items-center justify-center p-[11px] rounded-[22px] shadow-bs4 w-[45px]">
                <Img
                  className="h-[22px]"
                  src="images/img_evaarrowbackfill_white_a700.svg"
                  alt="evaarrowbackfil_One"
                />
              </Button>
            </div>
          </div>
          <div className="font-inter md:h-[1086px] sm:h-[1638px] h-[628px] max-w-7xl mt-[124px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
              <Button className="border-2 border-blue-700 border-solid flex h-[45px] items-center justify-center p-[11px] rounded-[22px] w-[45px]">
                <Img
                  className="h-[22px]"
                  src="images/img_evaarrowbackfill.svg"
                  alt="evaarrowbackfil_Two"
                />
              </Button>
              <Button className="bg-gray-50 border-2 border-blue-700 border-solid flex h-[45px] items-center justify-center p-[11px] rounded-[22px] shadow-bs4 w-[45px]">
                <Img
                  className="h-[22px]"
                  src="images/img_evaarrowbackfill_blue_700.svg"
                  alt="evaarrowbackfil_Three"
                />
              </Button>
            </div>
            <div className="absolute flex flex-col gap-[53px] h-full inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex flex-col gap-[51px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
                  <Line className="bg-gradient3  h-[5px] w-[15%]" />
                  <Text
                    className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                    size="txtInterBold35"
                  >
                    <span className="text-gray-900 font-bevietnampro font-normal">
                      <>
                        Why customers love
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-bevietnampro font-bold">
                      working with us
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-bevietnampro md:gap-14 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_fluentcomma24regular.png"
                    alt="fluentcomma24re"
                  />
                  <Text
                    className="leading-[36.00px] md:mt-0 mt-3 text-center text-gray-600 text-lg"
                    size="txtBeVietnamProRegular18Bluegray400"
                  >
                    Without any doubt I recommend Alcaline Solutions as one of
                    the best web design and digital marketing agencies. One of
                    the best agencies I’ve came across so far. Wouldn’t be
                    hesitated to introduce their work to someone else.
                  </Text>
                  <Img
                    className="h-10 md:h-auto md:mt-0 mt-[121px] object-cover w-10"
                    src="images/img_fluentcomma24regular_40x40.png"
                    alt="fluentcomma24re_One"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-bevietnampro md:gap-10 gap-[76px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-auto md:w-full"
                orientation="horizontal"
              >
                <SoftwareCompanyWebsiteRatedperson className="flex flex-col gap-2.5 items-center justify-center w-auto" />
                <SoftwareCompanyWebsiteRatedperson1 className="flex flex-col gap-2.5 items-center justify-center w-auto" />
                <SoftwareCompanyWebsiteRatedperson2 className="flex flex-col gap-[15px] items-center justify-center w-auto" />
                <SoftwareCompanyWebsiteRatedperson1 className="flex flex-col gap-2.5 items-center justify-center w-auto" />
                <SoftwareCompanyWebsiteRatedperson className="flex flex-col gap-2.5 items-center justify-center w-auto" />
              </List>
            </div>
          </div>
          <div className="font-inter md:h-[1743px] sm:h-[1829px] h-[1908px] mt-[7px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[1777px] inset-x-[0] items-center justify-start mx-auto p-[76px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group12.svg')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[81px] justify-start mb-3 w-[97%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[88px] items-start justify-start md:ml-[0] ml-[273px] w-[47%] md:w-full">
                  <div className="bg-gradient6  h-[18px] rounded-[50%] w-[18px]"></div>
                  <div className="flex flex-col gap-5 items-center justify-start sm:mt-0 mt-[13px] w-auto sm:w-full">
                    <Line className="bg-gradient3  h-[5px] w-[15%]" />
                    <Text
                      className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtInterBold35"
                    >
                      <span className="text-gray-900 font-bevietnampro font-normal">
                        <>
                          Our recent <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-bevietnampro font-bold">
                        {" "}
                        Projects{" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-bevietnampro gap-[41px] justify-start w-full">
                  <List
                    className="flex flex-col gap-[35px] items-center mr-1.5 w-full"
                    orientation="vertical"
                  >
                    <div className="h-[416px] relative w-full">
                      <SoftwareCompanyWebsiteColumnOne className="absolute bg-gray-100_01 border border-gray-300 border-solid flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[51px] md:px-10 sm:px-5 right-[0] rounded-br-[30px] rounded-tr-[30px] w-[59%]" />
                      <Img
                        className="absolute h-[416px] inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-[49%]"
                        src="images/img_casestudyimage.png"
                        alt="casestudyimage"
                      />
                    </div>
                    <div className="h-[416px] relative w-full">
                      <SoftwareCompanyWebsiteColumnOne className="absolute bg-gray-100_02 border border-gray-300 border-solid flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[51px] md:px-10 sm:px-5 right-[0] rounded-br-[30px] rounded-tr-[30px] w-[59%]" />
                      <Img
                        className="absolute h-[416px] inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-[49%]"
                        src="images/img_casestudyimage_416x601.png"
                        alt="casestudyimage"
                      />
                    </div>
                    <div className="h-[416px] relative w-full">
                      <SoftwareCompanyWebsiteColumnOne className="absolute bg-gray-50_02 border border-gray-300 border-solid flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[51px] md:px-10 sm:px-5 right-[0] rounded-br-[30px] rounded-tr-[30px] w-[59%]" />
                      <Img
                        className="absolute h-[416px] inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-[49%]"
                        src="images/img_casestudyimage_1.png"
                        alt="casestudyimage"
                      />
                    </div>
                  </List>
                  <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[962px] w-auto">
                    <Text
                      className="bg-clip-text bg-gradient7  text-transparent text-xl w-auto"
                      size="txtBeVietnamProSemiBold20"
                    >
                      Read more case studies
                    </Text>
                    <Img
                      className="h-[27px] md:h-auto object-cover w-[27px]"
                      src="images/img_arrowright_16x16.png"
                      alt="arrowright_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[278px] object-cover right-[12%] top-[0]"
              src="images/img_decoimgarrow.png"
              alt="decoimgarrow"
            />
            <Img
              className="absolute h-[217px] left-[8%] object-cover top-[0]"
              src="images/img_decoimgarrow_217x222.png"
              alt="decoimgarrow_One"
            />
          </div>
          <div className="flex flex-col font-inter gap-5 items-center justify-start md:ml-[0] ml-[483px] mt-[79px] md:px-5 w-auto sm:w-full">
            <Line className="bg-gradient3  h-[5px] w-[15%]" />
            <Text
              className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
              size="txtInterBold35"
            >
              <span className="text-gray-900 font-bevietnampro font-normal">
                <>
                  Way of building
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-bevietnampro font-bold">
                Great Software
              </span>
            </Text>
          </div>
          <div className="flex flex-col font-bevietnampro md:gap-10 gap-[90px] items-center justify-start mt-10 w-full">
            <div className="h-[1662px] md:h-[3025px] max-w-[1233px] mx-auto md:px-5 relative w-full">
              <Img
                className="absolute h-[1662px] inset-y-[0] left-[6%] my-auto object-cover"
                src="images/img_group20_1662x923.png"
                alt="groupTwenty"
              />
              <List
                className="absolute flex flex-col gap-[95px] inset-[0] items-start m-auto w-auto"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1233px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                        size="txtBeVietnamProSemiBold28"
                      >
                        Build the right team to scale
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="leading-[30.00px] max-w-[534px] md:max-w-full text-gray-800 text-lg"
                          size="txtBeVietnamProRegular18Bluegray900"
                        >
                          Finding the right talent is not easy. We help you find
                          the talent that suits your needs, follows your
                          processes, and sticks with you long term (not the case
                          with freelancers
                        </Text>
                        <div className="flex flex-col font-inter gap-5 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="leading-[30.00px] max-w-[503px] md:max-w-full text-gray-800 text-lg"
                            size="txtInterRegular18Bluegray900"
                          >
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              Our{" "}
                            </span>
                            <span className="text-blue-700 font-bevietnampro text-left font-normal">
                              delivery model
                            </span>
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              {" "}
                              helps you cut costs and deliver within budget.
                            </span>
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-auto sm:w-full">
                            <Line className="bg-gradient3  sm:h-[3px] h-[87px] w-[3px] sm:w-full" />
                            <Text
                              className="bg-clip-text bg-gradient8  italic leading-[30.00px] max-w-[435px] md:max-w-full text-base text-transparent"
                              size="txtInterLightItalic16"
                            >
                              <>
                                &quot;Simform is quick to identify larger
                                problem with the Software so we decided to
                                expand our scope to build new modules&quot;
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SoftwareCompanyWebsitePersonbadge className="flex flex-row gap-2.5 items-center justify-center w-auto" />
                  </div>
                  <Img
                    className="md:flex-1 h-[473px] sm:h-auto object-cover rounded-[10px] w-[575px] md:w-full"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1233px] w-full">
                  <Img
                    className="md:flex-1 h-[473px] sm:h-auto object-cover rounded-[10px] w-[575px] md:w-full"
                    src="images/img_rectangle18.png"
                    alt="rectangleEighteen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                        size="txtBeVietnamProSemiBold28"
                      >
                        Build the right team to scale
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="leading-[30.00px] max-w-[534px] md:max-w-full text-gray-800 text-lg"
                          size="txtBeVietnamProRegular18Bluegray900"
                        >
                          Finding the right talent is not easy. We help you find
                          the talent that suits your needs, follows your
                          processes, and sticks with you long term (not the case
                          with freelancers
                        </Text>
                        <div className="flex flex-col font-inter gap-5 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="leading-[30.00px] max-w-[503px] md:max-w-full text-gray-800 text-lg"
                            size="txtInterRegular18Bluegray900"
                          >
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              Our{" "}
                            </span>
                            <span className="text-blue-700 font-bevietnampro text-left font-normal">
                              delivery model
                            </span>
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              {" "}
                              helps you cut costs and deliver within budget.
                            </span>
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-auto sm:w-full">
                            <Line className="bg-gradient3  sm:h-[3px] h-[87px] w-[3px] sm:w-full" />
                            <Text
                              className="bg-clip-text bg-gradient4  italic leading-[30.00px] max-w-[435px] md:max-w-full text-base text-transparent"
                              size="txtInterLightItalic16"
                            >
                              <>
                                &quot;Simform is quick to identify larger
                                problem with the Software so we decided to
                                expand our scope to build new modules&quot;
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SoftwareCompanyWebsitePersonbadge className="flex flex-row gap-2.5 items-center justify-center w-auto" />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                        size="txtBeVietnamProSemiBold28"
                      >
                        Build the right team to scale
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="leading-[30.00px] max-w-[534px] md:max-w-full text-gray-800 text-lg"
                          size="txtBeVietnamProRegular18Bluegray900"
                        >
                          Finding the right talent is not easy. We help you find
                          the talent that suits your needs, follows your
                          processes, and sticks with you long term (not the case
                          with freelancers
                        </Text>
                        <div className="flex flex-col font-inter gap-5 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="leading-[30.00px] max-w-[503px] md:max-w-full text-gray-800 text-lg"
                            size="txtInterRegular18Bluegray900"
                          >
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              Our{" "}
                            </span>
                            <span className="text-blue-700 font-bevietnampro text-left font-normal">
                              delivery model
                            </span>
                            <span className="text-gray-800 font-bevietnampro text-left font-normal">
                              {" "}
                              helps you cut costs and deliver within budget.
                            </span>
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-auto sm:w-full">
                            <Line className="bg-gradient3  sm:h-[3px] h-[87px] w-[3px] sm:w-full" />
                            <Text
                              className="bg-clip-text bg-gradient4  italic leading-[30.00px] max-w-[435px] md:max-w-full text-base text-transparent"
                              size="txtInterLightItalic16"
                            >
                              <>
                                &quot;Simform is quick to identify larger
                                problem with the Software so we decided to
                                expand our scope to build new modules&quot;
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SoftwareCompanyWebsitePersonbadge className="flex flex-row gap-2.5 items-center justify-center w-auto" />
                  </div>
                  <Img
                    className="h-[473px] sm:h-auto object-cover rounded-[10px] w-[575px] md:w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                </div>
              </List>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-inter h-[1142px] items-center justify-start p-20 md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group12.svg')" }}
            >
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1237px] mb-[9px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
                  <Line className="bg-gradient3  h-[5px] w-[15%]" />
                  <Text
                    className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                    size="txtInterBold35"
                  >
                    <span className="text-gray-900 font-bevietnampro font-normal">
                      <>
                        Our design and
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-bevietnampro font-bold">
                      development approach
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[25px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {softwareCompanyWebsiteCardsmPropList.map(
                      (props, index) => (
                        <React.Fragment
                          key={`SoftwareCompanyWebsiteCardsm${index}`}
                        >
                          <SoftwareCompanyWebsiteCardsm
                            className="bg-gray-50 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[33px] sm:px-5 w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-[38px] items-center justify-start md:ml-[0] ml-[337px] mt-[89px] md:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
              <Line className="bg-gradient3  h-[5px] w-[15%]" />
              <Text
                className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                size="txtInterRegular35"
              >
                <span className="text-gray-900 font-bevietnampro font-normal">
                  <>
                    Our
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-bevietnampro font-bold">
                  Tech Stack
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-bevietnampro md:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col justify-start w-[11%] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient4  text-lg text-transparent"
                  size="txtBeVietnamProSemiBold18"
                >
                  Backend
                </Text>
                <div className="bg-gradient3  h-[3px] md:ml-[0] ml-[21px] rounded-[1px] w-[32%]"></div>
              </div>
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtBeVietnamProRegular18Gray900"
              >
                Frontend
              </Text>
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtBeVietnamProRegular18Gray900"
              >
                Databases
              </Text>
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtBeVietnamProRegular18Gray900"
              >
                CMS
              </Text>
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtBeVietnamProRegular18Gray900"
              >
                CloudTesting
              </Text>
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtBeVietnamProRegular18Gray900"
              >
                DevOps
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start mt-[72px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-center max-w-[1064px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-center w-auto md:w-full">
                <Img
                  className="h-[94px] md:h-auto object-cover w-[166px] sm:w-full"
                  src="images/img_nodejs.png"
                  alt="nodejs"
                />
                <Img
                  className="h-[94px] w-[166px]"
                  src="images/img_php.svg"
                  alt="php"
                />
                <Img
                  className="h-20 md:h-auto object-cover w-40 sm:w-full"
                  src="images/img_kisspngmysqli.png"
                  alt="kisspngmysqli"
                />
                <Img
                  className="h-[94px] w-[166px]"
                  src="images/img_java.svg"
                  alt="java"
                />
                <div className="md:h-16 h-[94px] p-3.5 relative w-[16%] md:w-full">
                  <div className="absolute bg-purple-800 h-16 inset-[0] justify-center m-auto rounded-[50%] w-16"></div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[15%] flex flex-col h-[55px] items-end justify-start left-[31%] p-3 w-14"
                    style={{ backgroundImage: "url('images/img_group20.svg')" }}
                  >
                    <Img
                      className="h-2 mb-0.5 mt-[19px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-3 items-center justify-center w-auto md:w-full">
                <Img
                  className="h-[94px] md:h-auto object-cover w-[166px] sm:w-full"
                  src="images/img_python.png"
                  alt="python"
                />
                <Img
                  className="h-[94px] w-[166px]"
                  src="images/img_rubyonrails.svg"
                  alt="rubyonrails"
                />
                <Img
                  className="h-[94px] w-[166px]"
                  src="images/img_php.svg"
                  alt="go"
                />
                <Img
                  className="h-[54px] md:h-auto object-cover w-[201px] sm:w-full"
                  src="images/img_mon1.png"
                  alt="monOne"
                />
              </div>
            </div>
            <Img
              className="md:h-auto h-px object-cover"
              src="images/img_group36.png"
              alt="groupThirtySix"
            />
          </div>
          <div className="flex flex-col font-inter gap-5 items-center justify-start md:ml-[0] ml-[483px] mt-[93px] md:px-5 w-auto sm:w-full">
            <Line className="bg-gradient3  h-[5px] w-[15%]" />
            <Text
              className="leading-[55.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
              size="txtInterRegular35"
            >
              <span className="text-gray-900 font-bevietnampro font-normal">
                <>
                  How development <br />
                </>
              </span>
              <span className="text-gray-900 font-bevietnampro font-bold">
                through Alcaline works
              </span>
            </Text>
          </div>
          <div className="flex flex-col font-bevietnampro items-center justify-start max-w-[1230px] mt-[88px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-1.5 items-center justify-between w-full">
              <div className="flex flex-col gap-[15px] justify-start">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[38px] w-[90%] md:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[9px] w-[29%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mb-1 w-auto">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="bg-clip-text bg-gradient7  text-lg text-transparent tracking-[-0.09px]"
                          size="txtBeVietnamProBold18"
                        >
                          #1
                        </Text>
                        <Text
                          className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18Gray900"
                        >
                          Assemble the right team
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                        size="txtBeVietnamProRegular14"
                      >
                        <>
                          We handle all aspects of vetting and choosing the
                          right team that you don&#39;t have the time,
                          expertise, or desire to do.
                        </>
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[91px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[9px] w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start mb-1 w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                          <Text
                            className="bg-clip-text bg-gradient7  text-lg text-transparent tracking-[-0.09px] w-auto"
                            size="txtBeVietnamProBold18"
                          >
                            #3
                          </Text>
                          <Text
                            className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                            size="txtBeVietnamProBold18Gray900"
                          >
                            Tech architecture
                          </Text>
                        </div>
                        <Text
                          className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                          size="txtBeVietnamProRegular14"
                        >
                          We break monolithic apps into microservices.
                          Decoupling the code allows teams to move faster and
                          more independently
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[9px] w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start mb-1 w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                          <Text
                            className="bg-clip-text bg-gradient7  text-lg text-transparent tracking-[-0.09px] w-auto"
                            size="txtBeVietnamProBold18"
                          >
                            #5
                          </Text>
                          <Text
                            className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                            size="txtBeVietnamProBold18Gray900"
                          >
                            Code reviews
                          </Text>
                        </div>
                        <Text
                          className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                          size="txtBeVietnamProRegular14"
                        >
                          Code reviews before release help detect issues like
                          memory leaks, file leaks, performance signs, and
                          general bad smells
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="h-[30px] relative w-full">
                  <Line className="bg-gradient9  h-[30px] mb-[-0.02px] ml-[180px] mt-auto w-0.5 z-[1]" />
                  <Line className="bg-gradient9  h-[30px] mb-[-0.02px] ml-[550px] mt-auto w-0.5 z-[1]" />
                  <Line className="bg-gradient9  h-[30px] mb-[-0.02px] ml-auto mr-[239px] mt-auto w-0.5 z-[1]" />
                  <Line className="bg-gradient9  h-0.5 mt-auto mx-auto w-full" />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[243px] w-[66%] md:w-full">
                  <Line className="bg-gradient9  md:h-0.5 h-[30px] w-0.5 md:w-full" />
                  <Line className="bg-gradient9  md:h-0.5 h-[30px] md:ml-[0] ml-[378px] w-0.5 md:w-full" />
                  <Line className="bg-gradient9  md:h-0.5 h-[30px] md:ml-[0] ml-[388px] w-0.5 md:w-full" />
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[81px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[93px] w-[91%]"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[9px] w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mb-1 w-auto">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="bg-clip-text bg-gradient10  text-lg text-transparent tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18"
                        >
                          #2
                        </Text>
                        <Text
                          className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18Gray900"
                        >
                          Sprint planning
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                        size="txtBeVietnamProRegular14"
                      >
                        Sprint roadmap is a collective planning effort. Team
                        members collaborate to clarify items and ensure shared
                        understanding.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-end justify-start p-[3px] rounded-[9px] w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mb-[22px] mt-[18px] w-auto">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="bg-clip-text bg-gradient10  text-lg text-transparent tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18"
                        >
                          #4
                        </Text>
                        <Text
                          className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18Gray900"
                        >
                          Standups & weekly demos
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                        size="txtBeVietnamProRegular14"
                      >
                        Standups, weekly demos, and weekly reviews make sure
                        everyone is on the same page and can raise their
                        concerns.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[9px] w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start mb-1 w-auto">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="bg-clip-text bg-gradient7  text-lg text-transparent tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18"
                        >
                          #6
                        </Text>
                        <Text
                          className="text-gray-900 text-lg tracking-[-0.09px] w-auto"
                          size="txtBeVietnamProBold18Gray900"
                        >
                          Iterative delivery
                        </Text>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[245px] md:max-w-full text-gray-600 text-sm tracking-[-0.07px]"
                        size="txtBeVietnamProRegular14"
                      >
                        We divide the implementation process into several
                        checkpoints rather than a single deadline.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                className="h-[42px] md:h-auto object-cover w-[42px]"
                src="images/img_trophyperspectivematte.png"
                alt="trophyperspecti"
              />
            </div>
          </div>
          <div className="bg-colors1 bg-gradient11  border-colors1 border-solid flex flex-col font-bevietnampro gap-[54px] items-start justify-center mt-[58px] p-[54px] md:px-10 sm:px-5 text-colors1 w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[89px] mt-[22px] w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                  <div className="flex flex-row font-poppins gap-[27px] items-center justify-start w-[36%] md:w-full">
                    <Line className="bg-gradient3  h-[5px] w-[35%]" />
                    <Text
                      className="text-gray-900_02 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      WORK WITH US
                    </Text>
                  </div>
                  <Text
                    className="leading-[15.00px] mt-11 text-4xl sm:text-[32px] md:text-[34px] text-gray-900_02"
                    size="txtBeVietnamProMedium36"
                  >
                    <>
                      Let build something
                      <br />
                      awesome together
                    </>
                  </Text>
                  <Input
                    name="groupFive"
                    placeholder="Name"
                    className="font-bevietnampro font-medium leading-[normal] p-0 placeholder:text-blue_gray-700_01 sm:px-5 text-blue_gray-700_01 text-left text-xl w-full"
                    wrapClassName="bg-teal-50 border border-blue-700 border-solid mt-[93px] pl-[26px] pr-[35px] py-[21px] w-full"
                    type="text"
                  ></Input>
                  <Input
                    name="groupFour"
                    placeholder="Email"
                    className="font-bevietnampro font-medium leading-[normal] p-0 placeholder:text-blue_gray-700_01 sm:px-5 text-blue_gray-700_01 text-left text-xl w-full"
                    wrapClassName="bg-teal-50 border border-blue-700 border-solid mt-[52px] pl-[26px] pr-[35px] py-[21px] w-full"
                    type="email"
                  ></Input>
                  <TextArea
                    className="bg-teal-50 border border-blue-700 border-solid font-bevietnampro font-medium leading-[normal] mt-[52px] pb-[35px] pl-[26px] pr-[35px] pt-[21px] sm:px-5 placeholder:text-blue_gray-700_01 text-blue_gray-700_01 text-left text-xl w-full"
                    name="groupThree"
                    placeholder="Your Message "
                    name="groupThree"
                    placeholder="Your Message "
                  ></TextArea>
                </div>
                <Img
                  className="h-[410px] md:ml-[0] ml-[202px] md:mt-0 mt-[171px]"
                  src="images/img_group8975.svg"
                  alt="group8975"
                />
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[54px] md:mt-0 mt-[142px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtBeVietnamProMedium24"
                  >
                    Visit Us
                  </Text>
                  <Text
                    className="mt-[18px] text-base text-black-900"
                    size="txtBeVietnamProRegular16"
                  >
                    <>
                      471, Alagbado off ijaye ojokoro
                      <br />
                      Inner Street Long Road,
                      <br />
                      Lagos Nigeria
                    </>
                  </Text>
                  <Text
                    className="mt-[178px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                    size="txtBeVietnamProMedium24"
                  >
                    Or drop us a line
                  </Text>
                  <Text
                    className="mt-4 text-base text-black-900"
                    size="txtBeVietnamProRegular16"
                  >
                    <>
                      microitindustry@gmail.com
                      <br />
                      +234 810 7595 941
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-gradient10  border border-solid border-white-A700 cursor-pointer font-bold h-[57px] leading-[normal] mb-[84px] md:ml-[0] ml-[89px] py-[17px] text-center text-gray-50 text-lg tracking-[-0.09px] w-[130px]">
              Send
            </Button>
          </div>
          <footer className="flex font-bevietnampro items-center justify-center mt-[97px] md:px-5 w-full">
            <div className="sm:h-[494px] h-[498px] md:h-[784px] relative w-full">
              <SoftwareCompanyWebsiteFootersection className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto py-[33px] w-full" />
              <Img
                className="absolute h-[70px] left-[7%] object-cover top-[0] w-[14%]"
                src="images/img_microitindustry.png"
                alt="microitindustry_Three"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SoftwareCompanyWebsitePage;
