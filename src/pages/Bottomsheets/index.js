import React from "react";

import { Column, Img, Text, Row } from "components";

const BottomsheetsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[48px] xl:p-[60px] 2xl:p-[67px] 3xl:p-[81px] w-[100%]">
          <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[28px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:w-[37px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[55px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Bottom sheets
              </Text>
              <Column className="justify-start lg:mr-[175px] xl:mr-[219px] 2xl:mr-[246px] 3xl:mr-[295px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[61px] w-[81%]">
                <a
                  href={
                    "https://m3.material.io/components/bottom-sheets/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[22px] xl:text-[27px] 2xl:text-[31px] 3xl:text-[37px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Bottom sheets are surfaces containing supplementary content,
                  anchored to the bottom of the screen.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <Row className="items-center 3xl:p-[109px] lg:p-[64px] xl:p-[81px] 2xl:p-[91px] w-[100%]">
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center p-[1px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] w-[50%]">
            <Column className="bg-white_A700 items-center justify-end lg:pt-[36px] xl:pt-[45px] 2xl:pt-[50px] 3xl:pt-[61px] lg:px-[36px] xl:px-[45px] 2xl:px-[50px] 3xl:px-[61px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] w-[100%]">
              <Column className="bg-white_A700 items-center justify-start lg:mt-[255px] xl:mt-[319px] 2xl:mt-[358px] 3xl:mt-[430px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[28px] rounded-tr-[28px] shadow-bs1 w-[100%]">
                <div className="bg-gray_600_7e lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mb-[411px] xl:mb-[515px] 2xl:mb-[579px] 3xl:mb-[695px] rounded-radius2 w-[9%]"></div>
              </Column>
              <Img
                src="images/img_modaltrue.svg"
                className="lg:h-[446px] xl:h-[557px] 2xl:h-[627px] 3xl:h-[752px] lg:mt-[291px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] w-[100%]"
                alt="ModalTrue"
              />
            </Column>
          </Column>
          <Column className="bg-gray_900 border border-gray_900 border-solid items-center p-[1px] rounded-bl-[0] rounded-br-[16px] rounded-tl-[0] rounded-tr-[16px] w-[50%]">
            <Column className="bg-gray_900 items-center justify-start lg:mt-[291px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[28px] rounded-tr-[28px] shadow-bs1 w-[83%]">
              <div className="bg-gray_500_7e lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mb-[411px] xl:mb-[515px] 2xl:mb-[579px] 3xl:mb-[695px] rounded-radius2 w-[9%]"></div>
            </Column>
            <Img
              src="images/img_modaltrue_480X400.svg"
              className="lg:h-[446px] xl:h-[557px] 2xl:h-[627px] 3xl:h-[752px] lg:mt-[291px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] w-[83%]"
              alt="ModalTrue One"
            />
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BottomsheetsPage;
