import React from "react";

import { Column, Img, Text, List, Row, Button, Stack } from "components";

const SwitchPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[41px] xl:p-[52px] 2xl:p-[58px] 3xl:p-[70px] w-[100%]">
          <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] pr-[4px] pt-[4px] w-[100%]">
              <Text className="Componentname3" as="h1" variant="h1">
                Switch
              </Text>
              <a
                href={"https://m3.material.io/components/switch/overview"}
                target="_blank"
                className="font-normal lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] not-italic lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Switches toggle the state of a single item on or off.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[32px] xl:gap-[40px] 2xl:gap-[45px] 3xl:gap-[54px] grid grid-cols-2 min-h-[auto] lg:p-[56px] xl:p-[70px] 2xl:p-[78px] 3xl:p-[94px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A700 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="FillLime900"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="FillLime900"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="FillLime900"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="FillLime900"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="FillGray9001e"
                ></Button>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-white_A701 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_checkmark_16X16.svg"
                      className="checkmark5"
                      alt="checkmark"
                    />
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillOrange100"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillOrange100"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-lime_900 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-lime_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillOrange100"
                    >
                      <Img
                        src="images/img_checkmark_16X16.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="checkmark Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_900_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-white_A700 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="checkmark5"
                      alt="checkmark Four"
                    />
                  </Stack>
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[96%]">
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="OutlineGray6001_2"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="OutlineGray6001_2"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="OutlineGray6001_2"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="OutlineGray6001_2"
                ></Button>
                <Button
                  className="text-center w-[12%]"
                  shape="CircleBorder16"
                  variant="OutlineGray9001e1_2"
                ></Button>
              </Row>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[96%]">
                <Column className="bg-gray_303 border-2 border-gray_600 border-solid p-[4px] rounded-radius16 w-[12%]">
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                    size="smIcn"
                    variant="icbFillGray600"
                  >
                    <Img
                      src="images/img_plus_18X18.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="plus"
                    />
                  </Button>
                </Column>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_303 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_16 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_303 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_303 border-2 border-gray_600 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_plus_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="plus Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_300_1e1 border-2 border-gray_900_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_900_7c lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_16X16.svg"
                      className="checkmark5"
                      alt="close"
                    />
                  </Stack>
                </Stack>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius5 w-[100%]">
              <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                <Row className="items-center justify-between w-[98%]">
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="FillOrange301"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="FillOrange301"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="FillOrange301"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="FillOrange301"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="FillGray3001e"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_301 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-gray_905 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                      <Img
                        src="images/img_checkmark_10.svg"
                        className="checkmark5"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_301 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_10.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark One One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_301 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_10.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark Two One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-orange_301 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] px-[4px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-orange_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Button
                        className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                        shape="icbRoundedBorder12"
                        size="smIcn"
                        variant="icbFillLightgreen900"
                      >
                        <Img
                          src="images/img_checkmark_10.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="checkmark Three One"
                        />
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                    <div className="absolute bg-gray_300_1e lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] rounded-radius16 w-[87%]"></div>
                    <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] right-[0] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <div className="absolute bg-gray_900 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                      <Img
                        src="images/img_checkmark_9.svg"
                        className="checkmark5"
                        alt="checkmark Four One"
                      />
                    </Stack>
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="OutlineGray5051_2"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="OutlineGray5051_2"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="OutlineGray5051_2"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="OutlineGray5051_2"
                  ></Button>
                  <Button
                    className="text-center w-[12%]"
                    shape="CircleBorder16"
                    variant="OutlineGray3001e1_2"
                  ></Button>
                </Row>
              </Column>
              <Row className="items-center justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800 border-2 border-gray_505 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_505 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_18X18.svg"
                      className="checkmark5"
                      alt="close One"
                    />
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800 border-2 border-gray_505 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_14 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray402"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close One"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800 border-2 border-gray_505 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                      size="smIcn"
                      variant="icbFillGray402"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close Two"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800 border-2 border-gray_505 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] px-[4px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_1e lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Button
                      className="absolute flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] items-center justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder12"
                      size="smIcn"
                      variant="icbFillGray402"
                    >
                      <Img
                        src="images/img_close_18X18.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="close Three"
                      />
                    </Button>
                  </Stack>
                </Stack>
                <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] w-[13%]">
                  <div className="absolute bg-gray_800_1e border-2 border-gray_300_1e border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] my-[auto] right-[0] rounded-radius16 w-[87%]"></div>
                  <Stack className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] left-[0] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                    <div className="absolute bg-gray_300_7c lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"></div>
                    <Img
                      src="images/img_close_18X18.svg"
                      className="checkmark5"
                      alt="close Four"
                    />
                  </Stack>
                </Stack>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default SwitchPage;
