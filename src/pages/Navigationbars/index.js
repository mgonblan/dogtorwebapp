import React from "react";

import { Column, Img, Text, List, Row, Button, Stack } from "components";

const NavigationbarsPage = () => {
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
                className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[427px] xl:mr-[534px] 2xl:mr-[601px] 3xl:mr-[721px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Navigation Bars
              </Text>
              <Column className="justify-start lg:mr-[218px] xl:mr-[272px] 2xl:mr-[307px] 3xl:mr-[368px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[76%]">
                <a
                  href={
                    "http://m3.material.io/components/navigation-bar/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text className="columnlink1" variant="body8">
                  Navigation bars offer a persistent, convenient way to switch
                  between primary destinations in an app.{" "}
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
            <Column className="items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius8 w-[100%]">
              <Row className="bg-white_A700 items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="text-center w-[63%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks7" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon One"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Column className="items-center justify-start rounded-radius16 w-[63%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon Two"
                      />
                      <Text className="Badge" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="text-center w-[93%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks7" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Four"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Five"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Column className="items-center justify-start rounded-radius16 w-[93%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon Six"
                      />
                      <Text className="Badge" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center p-[4px] w-[18%]">
                  <Button
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[100%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks9" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Eight"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Nine"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_32X32.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Ten"
                    />
                  </Button>
                  <Text className="BuildingBlocks8" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] p-[4px] w-[18%]">
                  <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rounded-radius16 w-[100%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon Eleven"
                      />
                      <Text className="Badge" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text
                    className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mt-[4px] statelayer12"
                    variant="body12"
                  >
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="text-center w-[63%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks7" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[32%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[32%]">
                  <Column className="items-center justify-start mb-[4px] rounded-radius16 w-[78%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon Fourteen"
                      />
                      <Text className="Badge" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="text-center w-[93%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks7" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[23%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[23%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[23%]">
                  <Column className="items-center justify-start xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rounded-radius16 w-[98%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[4px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon Eighteen"
                      />
                      <div className="absolute bg-red_901 lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] right-[25%] rounded-radius50 top-[0] lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"></div>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center p-[4px] w-[18%]">
                  <Button
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[100%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillOrange101"
                  ></Button>
                  <Text className="BuildingBlocks9" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] p-[4px] w-[18%]">
                  <Column className="items-center justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[25px] 3xl:mb-[31px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius16 w-[100%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_32X32.svg"
                        className="Icon_Two"
                        alt="Icon TwentyThree"
                      />
                      <Text className="Badge" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius8 w-[100%]">
              <Row className="bg-gray_900 items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="text-center w-[63%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks11" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon One One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Column className="items-center justify-start rounded-radius16 w-[63%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon Two One"
                      />
                      <Text className="Badgedark" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-gray_900 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="text-center w-[93%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks11" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Four One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Five One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Column className="items-center justify-start rounded-radius16 w-[93%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon Six One"
                      />
                      <Text className="Badgedark" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-gray_900 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center p-[4px] w-[18%]">
                  <Button
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[100%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks13" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Eight One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Nine One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[18%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_icon_4.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px]"
                      alt="Icon Ten One"
                    />
                  </Button>
                  <Text className="BuildingBlocks12" variant="body12">
                    Label
                  </Text>
                </Column>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] p-[4px] w-[18%]">
                  <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rounded-radius16 w-[100%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon Eleven One"
                      />
                      <Text className="Badgedark" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                  <Text
                    className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mt-[4px] statelayer20"
                    variant="body12"
                  >
                    Label
                  </Text>
                </Column>
              </Row>
              <Row className="bg-gray_900 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[32%]">
                  <Button
                    className="text-center w-[63%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks11" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[32%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[32%]">
                  <Column className="items-center justify-start mb-[4px] rounded-radius16 w-[78%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon Fourteen One"
                      />
                      <Text className="Badgedark" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-gray_900 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[23%]">
                  <Button
                    className="text-center w-[93%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks11" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[23%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[23%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[23%]">
                  <Column className="items-center justify-start xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rounded-radius16 w-[98%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[4px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon Eighteen One"
                      />
                      <div className="absolute bg-deep_orange_200 lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] right-[25%] rounded-radius50 top-[0] lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"></div>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-gray_900 items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                <Column className="items-center p-[4px] w-[18%]">
                  <Button
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-center w-[100%]"
                    shape="CircleBorder16"
                    size="sm"
                    variant="FillGray804"
                  ></Button>
                  <Text className="BuildingBlocks13" variant="body12">
                    Label
                  </Text>
                </Column>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Button
                  className="bg-transparent 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-center w-[18%]"
                  size="5xl"
                ></Button>
                <Column className="items-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] p-[4px] w-[18%]">
                  <Column className="items-center justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[25px] 3xl:mb-[31px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius16 w-[100%]">
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] px-[2px] rounded-radius16 w-[100%]">
                      <Img
                        src="images/img_icon_4.svg"
                        className="Icon_Two"
                        alt="Icon TwentyThree One"
                      />
                      <Text className="Badgedark" variant="body13">
                        3
                      </Text>
                    </Stack>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default NavigationbarsPage;
