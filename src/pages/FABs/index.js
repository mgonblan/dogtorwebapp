import React from "react";

import { Column, Img, Text, List, Stack, Row, Button } from "components";

const FABsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[35px] xl:p-[45px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
          <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[21px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[70px] lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[100%]">
              <Text
                className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] xl:mr-[1032px] 2xl:mr-[1161px] 3xl:mr-[1393px] lg:mr-[825px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                FABs
              </Text>
              <Column className="justify-start lg:mr-[236px] xl:mr-[296px] 2xl:mr-[332px] 3xl:mr-[399px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[75%]">
                <a
                  href={
                    "http://m3.material.io/components/floating-action-button/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[16px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Floating action buttons (FABs) help people take primary
                  actions and are used to represent the most important action on
                  a screen.{" "}
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[27px] xl:gap-[34px] 2xl:gap-[38px] 3xl:gap-[46px] grid grid-cols-2 min-h-[auto] lg:p-[48px] xl:p-[60px] 2xl:p-[68px] 3xl:p-[81px] w-[100%]"
          orientation="horizontal"
        >
          <Stack className="lg:h-[1756px] xl:h-[2196px] 2xl:h-[2471px] 3xl:h-[2964px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[26px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] rounded-radius16 w-[59%]">
                  <Column className="items-center justify-start mb-[2px] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_40X40.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit"
                        />
                      </Button>
                      <Column className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLime90014"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLime9001e"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Two"
                          />
                        </Button>
                      </Column>
                      <Column className="lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="bg-white_A700 lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Stack className="absolute lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] top-[0] lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                            <div className="absolute bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                            <Img
                              src="images/img_edit_40X40.svg"
                              className="edit_Three"
                              alt="edit Three"
                            />
                          </Stack>
                          <Img
                            src="images/img_statelayer.svg"
                            className="statelayer42"
                            alt="statelayer"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_2.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Four"
                        />
                      </Button>
                      <Column className="bg-orange_100 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGray90017"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Five"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGray9001e3"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Six"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_2.svg"
                            className="edit_Seven"
                            alt="edit Seven"
                          />
                          <Img
                            src="images/img_statelayer_27X40.svg"
                            className="statelayer42"
                            alt="statelayer One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c"
                      >
                        <Img
                          src="images/img_edit_3.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Eight"
                        />
                      </Button>
                      <Column className="bg-orange_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGray90014"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Nine"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGray9001e1"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Ten"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_3.svg"
                            className="edit_Seven"
                            alt="edit Eleven"
                          />
                          <Img
                            src="images/img_statelayer_1.svg"
                            className="statelayer42"
                            alt="statelayer Two"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_4.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Twelve"
                        />
                      </Button>
                      <Column className="bg-green_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillBlack90014"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Thirteen"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillBlack9001e"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Fourteen"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_4.svg"
                            className="edit_Seven"
                            alt="edit Fifteen"
                          />
                          <Img
                            src="images/img_location_27X40.svg"
                            className="statelayer42"
                            alt="location"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[69%]">
                  <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_40X40.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Sixteen"
                        />
                      </Button>
                      <Column className="bg-white_A700 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillLime90014"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Seventeen"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillLime9001e"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Eighteen"
                          />
                        </Button>
                      </Column>
                      <Column className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="bg-white_A700 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="edit_Three"
                            alt="edit Nineteen"
                          />
                          <Img
                            src="images/img_statelayer.svg"
                            className="statelayer_Three"
                            alt="statelayer Three"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_2.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Twenty"
                        />
                      </Button>
                      <Column className="bg-orange_100 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGray90017"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyOne"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGray9001e3"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyTwo"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_2.svg"
                            className="edit_Three"
                            alt="edit TwentyThree"
                          />
                          <Img
                            src="images/img_statelayer_27X40.svg"
                            className="statelayer_Three"
                            alt="statelayer Four"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c"
                      >
                        <Img
                          src="images/img_edit_3.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit TwentyFour"
                        />
                      </Button>
                      <Column className="bg-orange_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGray90014"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyFive"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGray9001e1"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentySix"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_3.svg"
                            className="edit_Three"
                            alt="edit TwentySeven"
                          />
                          <Img
                            src="images/img_statelayer_1.svg"
                            className="statelayer_Three"
                            alt="statelayer Five"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_4.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit TwentyEight"
                        />
                      </Button>
                      <Column className="bg-green_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillBlack90014"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyNine"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillBlack9001e"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Thirty"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_4.svg"
                            className="edit_Three"
                            alt="edit ThirtyOne"
                          />
                          <Img
                            src="images/img_location_27X40.svg"
                            className="statelayer_Three"
                            alt="location One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[94%]">
                  <Column className="items-center justify-start 3xl:mt-[106px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_40X40.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit ThirtyTwo"
                        />
                      </Button>
                      <Column className="bg-white_A700 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillLime90014"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyThree"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillLime9001e"
                        >
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyFour"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="edit_ThirtyFive"
                            alt="edit ThirtyFive"
                          />
                          <Img
                            src="images/img_statelayer.svg"
                            className="stateoverlay"
                            alt="stateoverlay"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_2.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit ThirtySix"
                        />
                      </Button>
                      <Column className="bg-orange_100 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGray90017"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtySeven"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGray9001e3"
                        >
                          <Img
                            src="images/img_edit_2.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyEight"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_100 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_2.svg"
                            className="edit_ThirtyFive"
                            alt="edit ThirtyNine"
                          />
                          <Img
                            src="images/img_statelayer_27X40.svg"
                            className="stateoverlay"
                            alt="stateoverlay One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c"
                      >
                        <Img
                          src="images/img_edit_3.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit Forty"
                        />
                      </Button>
                      <Column className="bg-orange_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGray90014"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyOne"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGray9001e1"
                        >
                          <Img
                            src="images/img_edit_3.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyTwo"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_3.svg"
                            className="edit_ThirtyFive"
                            alt="edit FortyThree"
                          />
                          <Img
                            src="images/img_statelayer_1.svg"
                            className="stateoverlay"
                            alt="stateoverlay Two"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_4.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit FortyFour"
                        />
                      </Button>
                      <Column className="bg-green_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillBlack90014"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyFive"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillBlack9001e"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortySix"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-green_101 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_4.svg"
                            className="edit_ThirtyFive"
                            alt="edit FortySeven"
                          />
                          <Img
                            src="images/img_location_27X40.svg"
                            className="stateoverlay"
                            alt="location Two"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[100%]">
                  <div className="3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="OutlineBlack9004c1_2"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-lime_900 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillLime90014"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Hovered
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillLime9001e"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Focused
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_40X40.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillLime9001e"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Pressed
                        </div>
                      </Button>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_2.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_904 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-orange_100 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_2.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray90017"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_2.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray9001e3"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-orange_100 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_2.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray9001e3"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_3.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_901 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-orange_101 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_3.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray90014"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-orange_101 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_3.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray9001e1"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-orange_101 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_3.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGray9001e1"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_4.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-black_902 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-green_101 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_4.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillBlack90014"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-green_101 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_4.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillBlack9001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-green_101 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_4.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillBlack9001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                  </div>
                </Column>
              </Column>
            </Column>
            <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[6%] my-[auto] pt-[3px] w-[17%]">
              <Column className="justify-start w-[76%]">
                <Text className="columnbackground" variant="body10">
                  Small FABs
                </Text>
                <Text
                  className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="3xl:mt-[110px] lg:mt-[65px] xl:mt-[82px] 2xl:mt-[92px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="3xl:mt-[102px] lg:mt-[60px] xl:mt-[76px] 2xl:mt-[85px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="3xl:mt-[106px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[114px] xl:mt-[142px] 2xl:mt-[160px] 3xl:mt-[192px] w-[55%]">
                <Text className="columnbackground" variant="body10">
                  FABs
                </Text>
                <Text
                  className="lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[71px] xl:mt-[90px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[74px] xl:mt-[92px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[135px] xl:mt-[169px] 2xl:mt-[190px] 3xl:mt-[228px] w-[76%]">
                <Text className="columnbackground" variant="body10">
                  Large FABs
                </Text>
                <Text
                  className="lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="lg:mt-[104px] xl:mt-[130px] 2xl:mt-[147px] 3xl:mt-[176px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] lg:mt-[99px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="lg:mt-[101px] xl:mt-[127px] 2xl:mt-[143px] 3xl:mt-[171px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[161px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[272px] w-[100%]">
                <Text className="columnbackground" variant="body10">
                  Extended FABs
                </Text>
                <Text
                  className="lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[71px] xl:mt-[90px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[74px] xl:mt-[92px] tracking-ls1 rowone"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
            </Column>
          </Stack>
          <Stack className="lg:h-[1755px] xl:h-[2196px] 2xl:h-[2470px] 3xl:h-[2963px] mb-[1px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-gray_900 items-center justify-end lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[59%]">
                  <Column className="items-center justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_5.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit One"
                        />
                      </Button>
                      <Column className="bg-gray_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange30014"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit One One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange3001e"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Two One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_5.svg"
                            className="edit_Seven"
                            alt="edit Three One"
                          />
                          <Img
                            src="images/img_volume_27X40.svg"
                            className="statelayer42"
                            alt="volume"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_6.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Four One"
                        />
                      </Button>
                      <Column className="bg-light_green_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange10015"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Five One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange1001e1"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Six One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_6.svg"
                            className="edit_Seven"
                            alt="edit Seven One"
                          />
                          <Img
                            src="images/img_volume_2.svg"
                            className="statelayer42"
                            alt="volume One"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_7.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Eight One"
                        />
                      </Button>
                      <Column className="bg-gray_804 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange10014"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Nine One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillOrange1001e"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Ten One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_7.svg"
                            className="edit_Seven"
                            alt="edit Eleven One"
                          />
                          <Img
                            src="images/img_volume_3.svg"
                            className="statelayer42"
                            alt="volume Two"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_8.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Twelve One"
                        />
                      </Button>
                      <Column className="bg-gray_805 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs6 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGreen10014"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Thirteen One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Button
                          className="flex lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillGreen1001e"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Fourteen One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] items-center rounded-radius12 shadow-bs1 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]">
                        <Stack className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                          <Img
                            src="images/img_edit_8.svg"
                            className="edit_Seven"
                            alt="edit Fifteen One"
                          />
                          <Img
                            src="images/img_volume_4.svg"
                            className="statelayer42"
                            alt="volume Three"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[69%]">
                  <Column className="items-center justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[92px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_5.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Sixteen One"
                        />
                      </Button>
                      <Column className="bg-gray_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange30014"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Seventeen One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange3001e"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Eighteen One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_5.svg"
                            className="edit_Three"
                            alt="edit Nineteen One"
                          />
                          <Img
                            src="images/img_volume_27X40.svg"
                            className="statelayer_Three"
                            alt="volume Four"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_6.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit Twenty One"
                        />
                      </Button>
                      <Column className="bg-light_green_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange10015"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyOne One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange1001e1"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyTwo One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_6.svg"
                            className="edit_Three"
                            alt="edit TwentyThree One"
                          />
                          <Img
                            src="images/img_volume_2.svg"
                            className="statelayer_Three"
                            alt="volume Five"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_7.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit TwentyFour One"
                        />
                      </Button>
                      <Column className="bg-gray_804 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange10014"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyFive One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillOrange1001e"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentySix One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_7.svg"
                            className="edit_Three"
                            alt="edit TwentySeven One"
                          />
                          <Img
                            src="images/img_volume_3.svg"
                            className="statelayer_Three"
                            alt="volume Six"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_8.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="edit TwentyEight One"
                        />
                      </Button>
                      <Column className="bg-gray_805 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs6 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGreen10014"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit TwentyNine One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Button
                          className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder16"
                          size="lgIcn"
                          variant="icbFillGreen1001e"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="edit Thirty One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] items-center rounded-radius16 shadow-bs1 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                        <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[65px]">
                          <Img
                            src="images/img_edit_8.svg"
                            className="edit_Three"
                            alt="edit ThirtyOne One"
                          />
                          <Img
                            src="images/img_volume_4.svg"
                            className="statelayer_Three"
                            alt="volume Seven"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius16 w-[94%]">
                  <Column className="items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] w-[98%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_5.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit ThirtyTwo One"
                        />
                      </Button>
                      <Column className="bg-gray_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange30014"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyThree One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange3001e"
                        >
                          <Img
                            src="images/img_edit_5.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyFour One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_5.svg"
                            className="edit_ThirtyFive"
                            alt="edit ThirtyFive One"
                          />
                          <Img
                            src="images/img_volume_27X40.svg"
                            className="stateoverlay"
                            alt="volume Eight"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_6.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit ThirtySix One"
                        />
                      </Button>
                      <Column className="bg-light_green_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange10015"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtySeven One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange1001e1"
                        >
                          <Img
                            src="images/img_edit_6.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit ThirtyEight One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-light_green_900 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_6.svg"
                            className="edit_ThirtyFive"
                            alt="edit ThirtyNine One"
                          />
                          <Img
                            src="images/img_volume_2.svg"
                            className="stateoverlay"
                            alt="volume Nine"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_7.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit Forty One"
                        />
                      </Button>
                      <Column className="bg-gray_804 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange10014"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyOne One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillOrange1001e"
                        >
                          <Img
                            src="images/img_edit_7.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyTwo One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_7.svg"
                            className="edit_ThirtyFive"
                            alt="edit FortyThree One"
                          />
                          <Img
                            src="images/img_volume_3.svg"
                            className="stateoverlay"
                            alt="volume Ten"
                          />
                        </Stack>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Button
                        className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]"
                        shape="icbRoundedBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9004c1_2"
                      >
                        <Img
                          src="images/img_edit_8.svg"
                          className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                          alt="edit FortyFour One"
                        />
                      </Button>
                      <Column className="bg-gray_805 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs6 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGreen10014"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortyFive One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Button
                          className="flex 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder28"
                          size="xlIcn"
                          variant="icbFillGreen1001e"
                        >
                          <Img
                            src="images/img_edit_8.svg"
                            className="flex items-center justify-center lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                            alt="edit FortySix One"
                          />
                        </Button>
                      </Column>
                      <Column className="bg-gray_805 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] items-center rounded-radius28 shadow-bs1 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[94px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius28 3xl:w-[112px] lg:w-[66px] xl:w-[83px] 2xl:w-[93px]">
                          <Img
                            src="images/img_edit_8.svg"
                            className="edit_ThirtyFive"
                            alt="edit FortySeven One"
                          />
                          <Img
                            src="images/img_volume_4.svg"
                            className="stateoverlay"
                            alt="volume Eleven"
                          />
                        </Stack>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius16 w-[100%]">
                  <div className="3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_5.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="OutlineBlack9004c1_2"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-orange_301 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_5.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillOrange30014"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Hovered
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_5.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillOrange3001e"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Focused
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[22%]"
                        leftIcon={
                          <Img
                            src="images/img_edit_5.svg"
                            className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                            alt="edit"
                          />
                        }
                        shape="CircleBorder16"
                        size="4xl"
                        variant="FillOrange3001e"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                          Pressed
                        </div>
                      </Button>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_6.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-orange_100 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-light_green_900 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_6.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange10015"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-light_green_900 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_6.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange1001e1"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-light_green_900 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_6.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange1001e1"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_7.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-orange_101 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-gray_804 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_7.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange10014"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_7.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange1001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_7.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillOrange1001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                        <Button
                          className="flex items-center justify-center text-center w-[22%]"
                          leftIcon={
                            <Img
                              src="images/img_edit_8.svg"
                              className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[24px] xl:w-[20px] xl:h-[21px] xl:mr-[30px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[34px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[40px] rounded-radius50"
                              alt="edit"
                            />
                          }
                          shape="CircleBorder16"
                          size="4xl"
                          variant="OutlineBlack9004c1_2"
                        >
                          <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-green_101 tracking-ls1">
                            Enabled
                          </div>
                        </Button>
                        <Column className="bg-gray_805 items-center shadow-bs6 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_8.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGreen10014"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Hovered
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-gray_805 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_8.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGreen1001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Focused
                            </div>
                          </Button>
                        </Column>
                        <Column className="bg-gray_805 items-center shadow-bs1 w-[22%]">
                          <Button
                            className="flex items-center justify-center text-center w-[100%]"
                            leftIcon={
                              <Img
                                src="images/img_edit_8.svg"
                                className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[8px] xl:w-[20px] xl:h-[21px] xl:mr-[10px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[14px]"
                                alt="edit"
                              />
                            }
                            shape="CircleBorder16"
                            size="4xl"
                            variant="FillGreen1001e"
                          >
                            <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] tracking-ls1">
                              Pressed
                            </div>
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                  </div>
                </Column>
              </Column>
            </Column>
            <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[6%] my-[auto] pt-[3px] w-[17%]">
              <Column className="justify-start w-[76%]">
                <Text className="columnprimary" variant="body10">
                  Small FABs
                </Text>
                <Text
                  className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] text-white_A701 headline"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="3xl:mt-[110px] lg:mt-[65px] xl:mt-[82px] 2xl:mt-[92px] text-white_A701 headline"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="3xl:mt-[102px] lg:mt-[60px] xl:mt-[76px] 2xl:mt-[85px] text-white_A701 headline"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="3xl:mt-[106px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] text-white_A701 headline"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[114px] xl:mt-[142px] 2xl:mt-[160px] 3xl:mt-[192px] w-[55%]">
                <Text className="columnprimary" variant="body10">
                  FABs
                </Text>
                <Text
                  className="lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] text-white_A701 headline"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] text-white_A701 headline"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[71px] xl:mt-[90px] text-white_A701 headline"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[74px] xl:mt-[92px] text-white_A701 headline"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[132px] xl:mt-[166px] 2xl:mt-[186px] 3xl:mt-[224px] w-[76%]">
                <Text className="columnprimary" variant="body10">
                  Large FABs
                </Text>
                <Text
                  className="lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] text-white_A701 headline"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="lg:mt-[103px] xl:mt-[128px] 2xl:mt-[145px] 3xl:mt-[174px] text-white_A701 headline"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="xl:mt-[122px] 2xl:mt-[138px] 3xl:mt-[165px] lg:mt-[98px] text-white_A701 headline"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] text-white_A701 headline"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[163px] xl:mt-[204px] 2xl:mt-[229px] 3xl:mt-[275px] w-[100%]">
                <Text className="columnprimary" variant="body10">
                  Extended FABs
                </Text>
                <Text
                  className="lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] text-white_A701 headline"
                  variant="body12"
                >
                  Surface
                </Text>
                <Text
                  className="2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] text-white_A701 headline"
                  variant="body12"
                >
                  Primary
                </Text>
                <Text
                  className="2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[71px] xl:mt-[90px] text-white_A701 headline"
                  variant="body12"
                >
                  Secondary
                </Text>
                <Text
                  className="2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[74px] xl:mt-[92px] text-white_A701 headline"
                  variant="body12"
                >
                  Tertiary
                </Text>
              </Column>
            </Column>
          </Stack>
        </List>
      </Column>
    </>
  );
};

export default FABsPage;
