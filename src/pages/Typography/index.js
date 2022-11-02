import React from "react";

import { Column, Img, Text } from "components";

const TypographyPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[53px] xl:p-[66px] 2xl:p-[75px] 3xl:p-[90px] w-[100%]">
          <Column className="justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[25px] 3xl:mb-[31px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[42px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] lg:w-[41px] xl:w-[51px] 2xl:w-[57px] 3xl:w-[69px]"
              alt="computer"
            />
            <Column className="justify-end 3xl:mt-[103px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[86px] lg:pr-[14px] xl:pr-[17px] 2xl:pr-[20px] 3xl:pr-[24px] lg:pt-[14px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Typography
              </Text>
              <a
                href={"https://m3.material.io/styles/typography/overview"}
                target="_blank"
                className="font-normal lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Use typography to present your design and content as clearly and
                efficiently as possible.
              </Text>
            </Column>
          </Column>
        </Column>
        <Column className="justify-start 2xl:p-[101px] 3xl:p-[121px] lg:p-[71px] xl:p-[89px] w-[100%]">
          <Column className="border border-gray_600 border-solid justify-end lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius16 w-[100%]">
            <Text
              className="ml-[4px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-black_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Display Large - Roboto 57/64 . 0{" "}
            </Text>
            <Text
              className="lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] Componentname3"
              as="h5"
              variant="h5"
            >
              Display Medium - Roboto 45/52 . 0{" "}
            </Text>
            <Text
              className="mb-[2px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic text-black_900 w-[auto]"
              variant="body1"
            >
              Display Small - Roboto 36/44 . 0{" "}
            </Text>
          </Column>
          <Column className="border border-gray_600 border-solid justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius16 w-[61%]">
            <Text
              className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-black_900 w-[auto]"
              variant="body2"
            >
              Headline Large - Roboto 32/40 . 0{" "}
            </Text>
            <Text
              className="lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] not-italic text-black_900 w-[auto]"
              variant="body3"
            >
              Headline Medium - Roboto 28/36 . 0{" "}
            </Text>
            <Text
              className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] not-italic text-black_900 w-[auto]"
              variant="body4"
            >
              Headline Small - Roboto 24/32 . 0
            </Text>
          </Column>
          <Column className="border border-gray_600 border-solid justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius16 w-[49%]">
            <Text className="language_Five" variant="body5">
              Android + Web{" "}
            </Text>
            <Text
              className="lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic text-black_900 w-[auto]"
              variant="body5"
            >
              Title Large - Roboto Medium 22/28 . 0{" "}
            </Text>
            <Text
              className="lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] columnbackground"
              variant="body10"
            >
              Title Medium - Roboto Medium 16/24 . +0.15{" "}
            </Text>
            <Text
              className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] columnbackground"
              variant="body11"
            >
              Title Small - Roboto Medium 14/20 . +0.1{" "}
            </Text>
          </Column>
          <Column className="border border-gray_600 border-solid justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius16 w-[37%]">
            <Text className="language_Five" variant="body5">
              Android + Web
            </Text>
            <Text
              className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] columnbackground"
              variant="body11"
            >
              Label Large - Roboto Medium 14/20 . +0.1{" "}
            </Text>
            <Text
              className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] columnbackground"
              variant="body12"
            >
              Label Medium - Roboto Medium 12/16 . +0.5
            </Text>
            <Text
              className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] text-black_900 tracking-ls1 w-[auto]"
              variant="body13"
            >
              Label Small - Roboto Medium 11/16 . +0.5
            </Text>
          </Column>
          <Column className="border border-gray_600 border-solid justify-end lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius16 w-[36%]">
            <Text className="language_Five" variant="body5">
              Android + Web
            </Text>
            <Text
              className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] tracking-ls1 rowone"
              variant="body10"
            >
              Body Large - Roboto 16/24 . +0.15{" "}
            </Text>
            <Text
              className="lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] tracking-ls1 rowone"
              variant="body11"
            >
              Body Medium - Roboto 14/20 . +0.25{" "}
            </Text>
            <Text
              className="lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] tracking-ls1 rowone"
              variant="body12"
            >
              Body Small - Roboto 12/16 . +0.4{" "}
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default TypographyPage;
