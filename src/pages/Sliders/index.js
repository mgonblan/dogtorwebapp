import React from "react";

import { Column, Img, Text, Row, Stack, Line, Button } from "components";

const SlidersPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]">
          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] pr-[4px] pt-[4px] w-[100%]">
              <Text className="Componentname3" as="h1" variant="h1">
                Sliders
              </Text>
              <a
                href={"https://m3.material.io/components/sliders/overview"}
                target="_blank"
                className="font-normal lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text className="columnlink9" variant="body8">
                Sliders allow users to make selections from a range of values.
              </Text>
            </Column>
          </Column>
        </Column>
        <footer className="w-[100%]">
          <Row className="items-center mx-[auto] lg:my-[27px] xl:my-[34px] 2xl:my-[39px] 3xl:my-[46px] w-[95%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[49%]">
              <Column className="bg-white_A700 items-center justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[97%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Img
                      src="images/img_buildingblocks_3.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks"
                    />
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Line className="absolute bg-gray_900_1e h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Img
                      src="images/img_buildingblocks_4.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks One"
                    />
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <div className="absolute bg-lime_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Img
                        src="images/img_buildingblocks_3.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Two"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-lime_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-lime_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_303 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-lime_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_900_1e h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <div className="absolute bg-gray_900_7c xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Img
                        src="images/img_buildingblocks_4.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Three"
                      />
                    </Stack>
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks"
                      />
                    </Stack>
                    <Img
                      src="images/img_buildingblocks_3.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Four"
                    />
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks One"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Two"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Three"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer.svg')",
                        }}
                      >
                        <Text className="Labelcontainer" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_900_1e h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2X162.svg"
                        className="Tickmarks"
                        alt="Tickmarks Four"
                      />
                    </Stack>
                    <Img
                      src="images/img_buildingblocks_4.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Five"
                    />
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Five"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillLime900"
                      ></Button>
                      <Img
                        src="images/img_buildingblocks_3.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Six"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Seven"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillLime900"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Nine"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillLime900"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_303 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks.svg"
                        className="Tickmarks"
                        alt="Tickmarks Eleven"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillLime900"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-lime_900_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-lime_900 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer.svg')",
                          }}
                        >
                          <Text className="Labelcontainer1" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_900_1e h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2X162.svg"
                        className="Tickmarks"
                        alt="Tickmarks Thirteen"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillGray9007c"
                      ></Button>
                      <Img
                        src="images/img_buildingblocks_4.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Seven"
                      />
                    </Stack>
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[49%]">
              <Column className="bg-gray_900 items-center justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[97%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Img
                      src="images/img_buildingblocks_5.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Eight"
                    />
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[16%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[92%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Line className="absolute bg-gray_300_1e h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]" />
                    <Img
                      src="images/img_buildingblocks_6.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Nine"
                    />
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <div className="absolute bg-orange_301 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Img
                        src="images/img_buildingblocks_5.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Ten"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-orange_301 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-orange_301 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_800 h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <div className="absolute bg-orange_301 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Line className="absolute bg-gray_300_1e h-[4px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]" />
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <div className="absolute bg-gray_300_7c xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] left-[0] my-[auto] rounded-radius2 w-[63%]"></div>
                      <Img
                        src="images/img_buildingblocks_6.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Eleven"
                      />
                    </Stack>
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks Fifteen"
                      />
                    </Stack>
                    <Img
                      src="images/img_buildingblocks_5.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Twelve"
                    />
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks Sixteen"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks Seventeen"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] pl-[4px] w-[17%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks Eighteen"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] rotate-[180deg] top-[0] w-[22%]">
                      <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                        <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rotate-[180deg] top-[0] w-[70%]"
                        style={{
                          backgroundImage:
                            "url('images/img_labelcontainer_10X28.svg')",
                        }}
                      >
                        <Text className="Labelcontainer2" variant="body12">
                          0
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[17%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[88%]">
                      <Line className="absolute bg-gray_300_1e h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_3.svg"
                        className="Tickmarks"
                        alt="Tickmarks Nineteen"
                      />
                    </Stack>
                    <Img
                      src="images/img_buildingblocks_6.svg"
                      className="BuildingBlocks17"
                      alt="BuildingBlocks Thirteen"
                    />
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks Twenty"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillOrange301"
                      ></Button>
                      <Img
                        src="images/img_buildingblocks_5.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Fourteen"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks TwentyTwo"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillOrange301"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_14 bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks TwentyFour"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillOrange301"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_800 h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_2.svg"
                        className="Tickmarks"
                        alt="Tickmarks TwentySix"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] pr-[4px] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillOrange301"
                      ></Button>
                      <Stack className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] right-[0] rotate-[180deg] top-[0] w-[62%]">
                        <Column className="absolute bg-orange_300_1e bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-start lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 w-[100%]">
                          <div className="bg-orange_301 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rotate-[180deg] rounded-radius50 shadow-bs 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                        </Column>
                        <Column
                          className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] lg:pb-[2px] 2xl:pb-[3px] xl:pb-[3px] 3xl:pb-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rotate-[180deg] top-[0] w-[70%]"
                          style={{
                            backgroundImage:
                              "url('images/img_labelcontainer_10X28.svg')",
                          }}
                        >
                          <Text className="Labelcontainer3" variant="body12">
                            25
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] w-[16%]">
                    <Stack className="absolute bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] inset-y-[0] my-[auto] right-[0] rounded-radius2 w-[95%]">
                      <Line className="absolute bg-gray_300_1e h-[4px] rounded-radius2 w-[100%]" />
                      <Img
                        src="images/img_tickmarks_3.svg"
                        className="Tickmarks"
                        alt="Tickmarks TwentyEight"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] w-[38%]">
                      <Button
                        className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] pt-[1px] text-center w-[68%]"
                        shape="CircleBorder2"
                        size="8xl"
                        variant="FillGray3007c"
                      ></Button>
                      <Img
                        src="images/img_buildingblocks_6.svg"
                        className="BuildingBlocks_Two"
                        alt="BuildingBlocks Fifteen"
                      />
                    </Stack>
                  </Stack>
                </Row>
              </Column>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default SlidersPage;
