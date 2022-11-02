import React from "react";

import { Column, Img, Text, List, Button, Row } from "components";

const BottomappbarsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[45px] xl:p-[57px] 2xl:p-[64px] 3xl:p-[77px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="computer6"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] w-[100%]">
              <Text
                className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[389px] xl:mr-[487px] 2xl:mr-[548px] 3xl:mr-[658px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Bottom App Bars
              </Text>
              <Column className="justify-start lg:mr-[327px] xl:mr-[409px] 2xl:mr-[460px] 3xl:mr-[552px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[64%]">
                <a
                  href={
                    "https://m3.material.io/components/bottom-app-bar/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text className="columnlink1" variant="body8">
                  Bottom app bars display navigation and key actions at the
                  bottom of mobile screens.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[35px] xl:gap-[44px] 2xl:gap-[49px] 3xl:gap-[59px] grid grid-cols-2 min-h-[auto] 3xl:p-[103px] lg:p-[61px] xl:p-[77px] 2xl:p-[86px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="listiconsone1">
            <Column className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Button
                className="text-center w-[100%]"
                size="3xl"
                variant="FillWhiteA700"
              ></Button>
              <Column className="bg-white_A700 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[26%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[40%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[53%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[26%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[40%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Two"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[53%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Three"
                  />
                </Button>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Button
                className="text-center w-[100%]"
                size="3xl"
                variant="FillGray900"
              ></Button>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[26%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[40%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Column className="bg-gray_900 justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center lg:my-[10px] xl:my-[13px] 2xl:my-[14px] 3xl:my-[17px] w-[53%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Column>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c1_2"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[26%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c1_2"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus One One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[40%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c1_2"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Two One"
                  />
                </Button>
              </Row>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Row className="items-center justify-between w-[53%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] items-center justify-center lg:mr-[10px] xl:mr-[13px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:w-[49px] xl:w-[61px] 2xl:w-[69px] 3xl:w-[83px]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbOutlineBlack9004c1_2"
                >
                  <Img
                    src="images/img_plus_56X56.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                    alt="plus Three One"
                  />
                </Button>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default BottomappbarsPage;
