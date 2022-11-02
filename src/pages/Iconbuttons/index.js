import React from "react";

import { Column, Img, Text, List, Row, Button } from "components";

const IconbuttonsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[44px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[25px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="computer10"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[51px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[86px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="3xl:ml-[10px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Icon buttons
              </Text>
              <Column className="justify-start lg:mr-[37px] xl:mr-[46px] 2xl:mr-[52px] 3xl:mr-[63px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[96%]">
                <a
                  href={
                    "https://m3.material.io/components/icon-buttons/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text className="columnlink4" variant="body8">
                  Icon buttons help people take supplementary actions with a
                  single tap. They’re used when a compact button is required,
                  such as in a toolbar or image list.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[34px] xl:gap-[42px] 2xl:gap-[47px] 3xl:gap-[57px] grid grid-cols-2 min-h-[auto] 3xl:p-[100px] lg:p-[59px] xl:p-[74px] 2xl:p-[83px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[34px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[57px] rounded-radius16 w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray80014"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray8001e"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Two"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray8001e"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Three"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillLime900"
                    >
                      <Img
                        src="images/img_search_40X40.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Five"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA70014"
                      >
                        <Img
                          src="images/img_search_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Six"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA7001e"
                      >
                        <Img
                          src="images/img_search_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Seven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA7001e"
                      >
                        <Img
                          src="images/img_search_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eight"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Nine"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillOrange101"
                    >
                      <Img
                        src="images/img_search_5.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Ten"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray90014"
                      >
                        <Img
                          src="images/img_search_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eleven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e1"
                      >
                        <Img
                          src="images/img_search_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Twelve"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e1"
                      >
                        <Img
                          src="images/img_search_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Thirteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Fourteen"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray600"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Fifteen"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray80014"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Sixteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Seventeen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eighteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Nineteen"
                      />
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] lg:p-[34px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[57px] rounded-radius16 w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray80014"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyOne"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray8001e"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyTwo"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray8001e"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyThree"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillLime90014"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillLime9001e"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Two"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillLime9001e"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Three"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray303"
                    >
                      <Img
                        src="images/img_search_6.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyFive"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillLime90014"
                      >
                        <Img
                          src="images/img_search_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentySix"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillLime9001e"
                      >
                        <Img
                          src="images/img_search_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentySeven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillLime9001e"
                      >
                        <Img
                          src="images/img_search_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentyEight"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyNine"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillLime900"
                    >
                      <Img
                        src="images/img_settings_40X40.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Five"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA70014"
                      >
                        <Img
                          src="images/img_settings_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Six"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA7001e"
                      >
                        <Img
                          src="images/img_settings_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Seven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-lime_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillWhiteA7001e"
                      >
                        <Img
                          src="images/img_settings_40X40.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eight"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Nine"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray303"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Thirty"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray80014"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyOne"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyTwo"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_303 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyThree"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyFour"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillOrange101"
                    >
                      <Img
                        src="images/img_settings_2.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Ten"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray90014"
                      >
                        <Img
                          src="images/img_settings_2.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eleven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e1"
                      >
                        <Img
                          src="images/img_settings_2.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Twelve"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_101 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e1"
                      >
                        <Img
                          src="images/img_settings_2.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Thirteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Fourteen"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray600"
                    >
                      <Img
                        src="images/img_search_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyFive"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray80014"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtySix"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtySeven"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray8001e"
                      >
                        <Img
                          src="images/img_search_4.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyEight"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray9001e"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyNine"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillBluegray900"
                    >
                      <Img
                        src="images/img_settings_3.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Fifteen"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-bluegray_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillDeeporange5014"
                      >
                        <Img
                          src="images/img_settings_3.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Sixteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-bluegray_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillDeeporange501e"
                      >
                        <Img
                          src="images/img_settings_3.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Seventeen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-bluegray_900 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillDeeporange501e"
                      >
                        <Img
                          src="images/img_settings_3.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eighteen"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray9001e"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Nineteen"
                      />
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[34px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[57px] rounded-radius16 w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray40014"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search One One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray4001e"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Two One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray4001e"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Three One"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillOrange301"
                    >
                      <Img
                        src="images/img_search_9.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Five One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray90015"
                      >
                        <Img
                          src="images/img_search_9.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Six One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e2"
                      >
                        <Img
                          src="images/img_search_9.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Seven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e2"
                      >
                        <Img
                          src="images/img_search_9.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eight One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Nine One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray804"
                    >
                      <Img
                        src="images/img_search_10.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Ten One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange10014"
                      >
                        <Img
                          src="images/img_search_10.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eleven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange1001e"
                      >
                        <Img
                          src="images/img_search_10.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Twelve One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange1001e"
                      >
                        <Img
                          src="images/img_search_10.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Thirteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Fourteen One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray505"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Fifteen One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray40014"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Sixteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Seventeen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search Eighteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Nineteen One"
                      />
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] lg:p-[34px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[57px] rounded-radius16 w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray40014"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyOne One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray4001e"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyTwo One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillGray4001e"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyThree One"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillOrange30014"
                    >
                      <Img
                        src="images/img_settings_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings One One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillOrange3001e"
                    >
                      <Img
                        src="images/img_settings_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Two One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center computer10"
                      size="mdIcn"
                      variant="icbFillOrange3001e"
                    >
                      <Img
                        src="images/img_settings_4.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Three One"
                      />
                    </Button>
                  </Column>
                  <Button
                    className="bg-transparent text-center file"
                    size="xl"
                  ></Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_search_11.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyFive One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange30014"
                      >
                        <Img
                          src="images/img_search_11.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentySix One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange3001e"
                      >
                        <Img
                          src="images/img_search_11.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentySeven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange3001e"
                      >
                        <Img
                          src="images/img_search_11.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search TwentyEight One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search TwentyNine One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillOrange301"
                    >
                      <Img
                        src="images/img_settings_5.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Five One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray90015"
                      >
                        <Img
                          src="images/img_settings_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Six One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e2"
                      >
                        <Img
                          src="images/img_settings_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Seven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-orange_301 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray9001e2"
                      >
                        <Img
                          src="images/img_settings_5.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eight One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Nine One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search Thirty One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray40014"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyOne One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyTwo One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_800 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyThree One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyFour One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray804"
                    >
                      <Img
                        src="images/img_settings_6.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Ten One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange10014"
                      >
                        <Img
                          src="images/img_settings_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eleven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange1001e"
                      >
                        <Img
                          src="images/img_settings_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Twelve One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_804 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillOrange1001e"
                      >
                        <Img
                          src="images/img_settings_6.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Thirteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Fourteen One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray505"
                    >
                      <Img
                        src="images/img_search_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyFive One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray40014"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtySix One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtySeven One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillGray4001e"
                      >
                        <Img
                          src="images/img_search_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="search ThirtyEight One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbOutlineGray3001e"
                    >
                      <Img
                        src="images/img_search_8.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="search ThirtyNine One"
                      />
                    </Button>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray302"
                    >
                      <Img
                        src="images/img_settings_7.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Fifteen One"
                      />
                    </Button>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_302 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillBluegray90014"
                      >
                        <Img
                          src="images/img_settings_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Sixteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_302 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillBluegray9001e"
                      >
                        <Img
                          src="images/img_settings_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Seventeen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Column className="bg-gray_302 items-center justify-start rounded-radius50 computer10">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 w-[100%]"
                        size="mdIcn"
                        variant="icbFillBluegray9001e"
                      >
                        <Img
                          src="images/img_settings_7.svg"
                          className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                          alt="settings Eighteen One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center px-[4px] file">
                    <Button
                      className="flex items-center justify-center rounded-radius50 computer10"
                      size="mdIcn"
                      variant="icbFillGray3001e"
                    >
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                        alt="settings Nineteen One"
                      />
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default IconbuttonsPage;
