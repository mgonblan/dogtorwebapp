import React from "react";

import { Column, Img, Text, List, Input, Line, Row } from "components";

const DividersPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[52px] xl:p-[65px] 2xl:p-[73px] 3xl:p-[88px] w-[100%]">
          <Column className="justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[69px] lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[68px]"
              alt="computer"
            />
            <Column className="justify-start 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Dividers
              </Text>
              <Column className="justify-start lg:mr-[422px] xl:mr-[528px] 2xl:mr-[594px] 3xl:mr-[712px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[54%]">
                <a
                  href={"https://m3.material.io/components/divider/overview"}
                  target="_blank"
                  className="font-normal not-italic lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  A divider is a thin line that groups content in lists and
                  layouts.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[40px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[68px] grid grid-cols-2 min-h-[auto] 3xl:p-[119px] lg:p-[70px] xl:p-[88px] 2xl:p-[99px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius16 w-[100%]">
            <Column className="justify-end lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
              <Input
                className="font-medium p-[0] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                wrapClassName="mt-[3px] w-[95%]"
                name="Group2566"
                placeholder="Horizontal"
                size="3xl"
                variant="UnderLineBluegray100"
              ></Input>
              <Line className="bg-bluegray_100 h-[1px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[90%]" />
              <Line className="bg-bluegray_100 h-[1px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[85%]" />
              <Column className="justify-start lg:mt-[30px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[51px] p-[1px] w-[95%]">
                <Line className="bg-bluegray_100 h-[1px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[91%]" />
                <Text
                  className="mb-[2px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] statelayer12"
                  variant="body11"
                >
                  Subheader
                </Text>
              </Column>
              <Text
                className="lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] columnbackground"
                variant="body10"
              >
                Vertical
              </Text>
              <Row className="items-end mr-[auto] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[16%]">
                <Line className="bg-bluegray_100 lg:h-[122px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] w-[1px]" />
                <Line className="bg-bluegray_100 lg:h-[106px] xl:h-[132px] 2xl:h-[148px] 3xl:h-[178px] lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[1px]" />
                <Line className="bg-bluegray_100 xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[89px] lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:my-[16px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] w-[1px]" />
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius16 w-[100%]">
            <Column className="justify-end lg:p-[18px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
              <Input
                className="font-medium p-[0] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] placeholder:text-white_A701 text-white_A701 tracking-ls1 w-[100%]"
                wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] ml-[2px] w-[94%] xl:mt-[6px]"
                name="Group2568"
                placeholder="Horizontal"
                size="3xl"
                variant="UnderLineBluegray100"
              ></Input>
              <Line className="bg-gray_806 h-[1px] lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[89%]" />
              <Line className="bg-gray_806 h-[1px] lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[84%]" />
              <Column className="justify-start ml-[2px] lg:mt-[30px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[51px] p-[1px] w-[94%]">
                <Line className="bg-gray_806 h-[1px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[91%]" />
                <Text
                  className="mb-[2px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] statelayer20"
                  variant="body11"
                >
                  Subheader
                </Text>
              </Column>
              <Text
                className="ml-[2px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] columnprimary"
                variant="body10"
              >
                Vertical
              </Text>
              <Row className="items-end xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mr-[auto] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[16%]">
                <Line className="bg-gray_806 lg:h-[122px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] w-[1px]" />
                <Line className="bg-gray_806 lg:h-[106px] xl:h-[132px] 2xl:h-[148px] 3xl:h-[178px] lg:ml-[26px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[1px]" />
                <Line className="bg-gray_806 xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[89px] lg:ml-[26px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] lg:my-[16px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] w-[1px]" />
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default DividersPage;
