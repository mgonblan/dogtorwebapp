import React from "react";

import { Column, Img, Text, List, Row, Button, Stack } from "components";

const TimepickerPage = () => {
  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[18px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
          <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:w-[14px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:pr-[4px] 2xl:pr-[5px] xl:pr-[5px] 3xl:pr-[7px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[7px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Time picker
              </Text>
              <a
                href={"https://m3.material.io/components/time-pickers/overview"}
                target="_blank"
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Time pickers help users select and set a specific time.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="bg-white_A701 lg:gap-[14px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] grid grid-cols-2 min-h-[auto] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="listmonogram">
            <Row className="bg-white_A700 items-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[19px] 3xl:pb-[23px] rounded-radius16 w-[100%]">
              <Column className="bg-white_A700 items-center justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[72%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[36%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header4" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[85%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Row className="items-start justify-between w-[77%]">
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_904 w-[44%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillOrange100"
                            >
                              07
                            </Button>
                            <Text
                              className="Timepickerinp"
                              as="h2"
                              variant="h2"
                            >
                              :
                            </Text>
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_900 w-[44%]"
                              size="xl"
                              variant="FillGray303"
                            >
                              00
                            </Button>
                          </Row>
                          <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                            <Button
                              className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-black_902 text-center tracking-ls1 w-[100%]"
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              AM
                            </Button>
                            <Button
                              className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[100%]"
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              PM
                            </Button>
                          </Column>
                        </Row>
                        <Column className="bg-gray_303 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Column className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] items-center justify-start xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Row className="items-start w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    11
                                  </Text>
                                </Column>
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    10
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay" variant="body10">
                                  12
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] ml-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    2
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="statelayer52"
                                    variant="body10"
                                  >
                                    1
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                            <Row className="items-center justify-between mt-[2px] w-[100%]">
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  9
                                </Text>
                              </Column>
                              <div className="bg-lime_900 border border-lime_900 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  3
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-start mt-[2px] w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    8
                                  </Text>
                                </Column>
                                <Column
                                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_buildingblocks.svg')",
                                  }}
                                >
                                  <Text
                                    className="BuildingBlocks19"
                                    variant="body10"
                                  >
                                    7
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  6
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[2px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    5
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    4
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[62%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header4" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Row className="items-start justify-between w-[92%]">
                        <Column className="items-center justify-start lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[41%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_904 w-[44%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillOrange100"
                            >
                              07
                            </Button>
                            <Text
                              className="Timepickerinp"
                              as="h2"
                              variant="h2"
                            >
                              :
                            </Text>
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_900 w-[44%]"
                              size="xl"
                              variant="FillGray303"
                            >
                              00
                            </Button>
                          </Row>
                          <Row className="bg-white_A700 border border-gray_600 border-solid items-center justify-evenly lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] rounded-radius8 w-[100%]">
                            <Button
                              className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-black_902 text-center tracking-ls1 w-[50%]"
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              AM
                            </Button>
                            <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[50%]">
                              <Text
                                className="mb-[1px] statelayer12"
                                variant="body10"
                              >
                                PM
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="bg-gray_303 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-center justify-start px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Column className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] items-center justify-start xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Row className="items-start w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    11
                                  </Text>
                                </Column>
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    10
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay" variant="body10">
                                  12
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] ml-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    2
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="statelayer52"
                                    variant="body10"
                                  >
                                    1
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                            <Row className="items-center justify-between mt-[2px] w-[100%]">
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  9
                                </Text>
                              </Column>
                              <div className="bg-lime_900 border border-lime_900 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  3
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-start mt-[2px] w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    8
                                  </Text>
                                </Column>
                                <Column
                                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_buildingblocks.svg')",
                                  }}
                                >
                                  <Text
                                    className="BuildingBlocks19"
                                    variant="body10"
                                  >
                                    7
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday" variant="body10">
                                  6
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[2px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    5
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday" variant="body10">
                                    4
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] w-[22%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[36%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header4" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_904 w-[45%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillOrange100"
                          >
                            20
                          </Button>
                          <Text className="Timepickerinp" as="h2" variant="h2">
                            :
                          </Text>
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_900 w-[45%]"
                            size="xl"
                            variant="FillGray303"
                          >
                            00
                          </Button>
                        </Row>
                        <Stack className="bg-gray_303 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] inset-[0] justify-center m-[auto] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                  <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                    <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                      <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                        <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                                <Row className="absolute items-start justify-evenly left-[0] w-[79%]">
                                                  <Stack className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] w-[75%]">
                                                    <Column className="absolute justify-start top-[0] w-[100%]">
                                                      <Stack className="lg:h-[36px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[60px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] w-[91%]">
                                                        <Column className="absolute items-center justify-start right-[0] top-[0] w-[72%]">
                                                          <Row className="items-start justify-evenly w-[100%]">
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay"
                                                                variant="body10"
                                                              >
                                                                11
                                                              </Text>
                                                            </Column>
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay"
                                                                variant="body10"
                                                              >
                                                                12
                                                              </Text>
                                                            </Column>
                                                          </Row>
                                                        </Column>
                                                        <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Wednesdsay"
                                                            variant="body10"
                                                          >
                                                            10
                                                          </Text>
                                                        </Column>
                                                      </Stack>
                                                      <Column className="justify-start mt-[2px] w-[41%]">
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday"
                                                            variant="body10"
                                                          >
                                                            9
                                                          </Text>
                                                        </Column>
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[2px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday"
                                                            variant="body10"
                                                          >
                                                            8
                                                          </Text>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                    <Column className="absolute bottom-[6%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday"
                                                        variant="body10"
                                                      >
                                                        7
                                                      </Text>
                                                    </Column>
                                                    <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday"
                                                        variant="body10"
                                                      >
                                                        6
                                                      </Text>
                                                    </Column>
                                                  </Stack>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Sunday"
                                                      variant="body10"
                                                    >
                                                      5
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <Column className="absolute bottom-[21%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    4
                                                  </Text>
                                                </Column>
                                                <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    3
                                                  </Text>
                                                </Column>
                                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] top-[21%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    2
                                                  </Text>
                                                </Column>
                                              </Stack>
                                              <Column className="absolute justify-start right-[21%] top-[6%] w-[39%]">
                                                <Row className="items-start justify-evenly w-[100%]">
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Wednesdsay"
                                                      variant="body10"
                                                    >
                                                      24
                                                    </Text>
                                                  </Column>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="statelayer52"
                                                      variant="body10"
                                                    >
                                                      1
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <div className="bg-lime_900 border border-lime_900 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                                              </Column>
                                            </Stack>
                                            <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[26%] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                              <Text
                                                className="Wednesdsay"
                                                variant="body10"
                                              >
                                                13
                                              </Text>
                                            </Column>
                                          </Stack>
                                          <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              23
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[25%] w-[69%]">
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              22
                                            </Text>
                                          </Column>
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              14
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Stack>
                                      <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[12%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="Wednesdsay"
                                          variant="body10"
                                        >
                                          15
                                        </Text>
                                      </Column>
                                    </Stack>
                                    <Column className="absolute bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[13%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="Wednesdsay"
                                        variant="body10"
                                      >
                                        16
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[25%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                    <Text
                                      className="Wednesdsay"
                                      variant="body10"
                                    >
                                      17
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bottom-[11%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    18
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay" variant="body10">
                                  19
                                </Text>
                              </Column>
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_buildingblocks_48X48.svg')",
                              }}
                            >
                              <Text
                                className="BuildingBlocks20"
                                variant="body10"
                              >
                                20
                              </Text>
                            </Column>
                          </Stack>
                          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[11%] my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                            <Text className="Wednesdsay" variant="body10">
                              21
                            </Text>
                          </Column>
                        </Stack>
                      </Column>
                      <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[62%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header4" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Row className="items-center justify-between w-[92%]">
                        <Row className="items-start justify-between w-[41%]">
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_904 w-[44%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillOrange100"
                          >
                            20
                          </Button>
                          <Text className="Timepickerinp" as="h2" variant="h2">
                            :
                          </Text>
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_900 w-[44%]"
                            size="xl"
                            variant="FillGray303"
                          >
                            00
                          </Button>
                        </Row>
                        <Stack className="bg-gray_303 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] inset-[0] justify-center m-[auto] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                  <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                    <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                      <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                        <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                                <Row className="absolute items-start justify-evenly left-[0] w-[79%]">
                                                  <Stack className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] w-[75%]">
                                                    <Column className="absolute justify-start top-[0] w-[100%]">
                                                      <Stack className="lg:h-[36px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[60px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] w-[91%]">
                                                        <Column className="absolute items-center justify-start right-[0] top-[0] w-[72%]">
                                                          <Row className="items-start justify-evenly w-[100%]">
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay"
                                                                variant="body10"
                                                              >
                                                                11
                                                              </Text>
                                                            </Column>
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay"
                                                                variant="body10"
                                                              >
                                                                12
                                                              </Text>
                                                            </Column>
                                                          </Row>
                                                        </Column>
                                                        <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Wednesdsay"
                                                            variant="body10"
                                                          >
                                                            10
                                                          </Text>
                                                        </Column>
                                                      </Stack>
                                                      <Column className="justify-start mt-[2px] w-[41%]">
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday"
                                                            variant="body10"
                                                          >
                                                            9
                                                          </Text>
                                                        </Column>
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[2px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday"
                                                            variant="body10"
                                                          >
                                                            8
                                                          </Text>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                    <Column className="absolute bottom-[6%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday"
                                                        variant="body10"
                                                      >
                                                        7
                                                      </Text>
                                                    </Column>
                                                    <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday"
                                                        variant="body10"
                                                      >
                                                        6
                                                      </Text>
                                                    </Column>
                                                  </Stack>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Sunday"
                                                      variant="body10"
                                                    >
                                                      5
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <Column className="absolute bottom-[21%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    4
                                                  </Text>
                                                </Column>
                                                <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    3
                                                  </Text>
                                                </Column>
                                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] top-[21%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday"
                                                    variant="body10"
                                                  >
                                                    2
                                                  </Text>
                                                </Column>
                                              </Stack>
                                              <Column className="absolute justify-start right-[21%] top-[6%] w-[39%]">
                                                <Row className="items-start justify-evenly w-[100%]">
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Wednesdsay"
                                                      variant="body10"
                                                    >
                                                      24
                                                    </Text>
                                                  </Column>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="statelayer52"
                                                      variant="body10"
                                                    >
                                                      1
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <div className="bg-lime_900 border border-lime_900 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                                              </Column>
                                            </Stack>
                                            <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[26%] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                              <Text
                                                className="Wednesdsay"
                                                variant="body10"
                                              >
                                                13
                                              </Text>
                                            </Column>
                                          </Stack>
                                          <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              23
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[25%] w-[69%]">
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              22
                                            </Text>
                                          </Column>
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay"
                                              variant="body10"
                                            >
                                              14
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Stack>
                                      <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[12%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="Wednesdsay"
                                          variant="body10"
                                        >
                                          15
                                        </Text>
                                      </Column>
                                    </Stack>
                                    <Column className="absolute bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[13%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="Wednesdsay"
                                        variant="body10"
                                      >
                                        16
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[25%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                    <Text
                                      className="Wednesdsay"
                                      variant="body10"
                                    >
                                      17
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bottom-[11%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Wednesdsay" variant="body10">
                                    18
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay" variant="body10">
                                  19
                                </Text>
                              </Column>
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_buildingblocks_48X48.svg')",
                              }}
                            >
                              <Text
                                className="BuildingBlocks20"
                                variant="body10"
                              >
                                20
                              </Text>
                            </Column>
                          </Stack>
                          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[11%] my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                            <Text className="Wednesdsay" variant="body10">
                              21
                            </Text>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] w-[22%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[28%]">
                <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[100%]">
                  <Column className="justify-end p-[2px] w-[100%]">
                    <Text className="Header5" variant="body12">
                      Enter time
                    </Text>
                  </Column>
                  <Row className="items-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[85%]">
                    <Row className="items-start justify-between pb-[3px] w-[77%]">
                      <Column className="justify-start w-[44%]">
                        <Button
                          className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineLime9001_2"
                        >
                          20
                        </Button>
                        <Text className="Hour" variant="body12">
                          Time label
                        </Text>
                      </Column>
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-gray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        :
                      </Text>
                      <Column className="justify-start w-[44%]">
                        <Button
                          className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_900 w-[100%]"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="FillGray303"
                        >
                          00
                        </Button>
                        <Text className="Hour" variant="body12">
                          Time label
                        </Text>
                      </Column>
                    </Row>
                    <Column className="bg-white_A700 border border-gray_600 border-solid items-center justify-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] rounded-radius8 w-[19%]">
                      <Button
                        className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-black_902 text-center tracking-ls1 w-[100%]"
                        size="xl"
                        variant="OutlineGray6001_2"
                      >
                        AM
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[100%]"
                        size="xl"
                        variant="OutlineGray6001_2"
                      >
                        PM
                      </Button>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                    <Button
                      className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                      size="xl"
                    ></Button>
                    <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                      <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                        <Text className="Configurationt" variant="body11">
                          Cancel
                        </Text>
                      </Column>
                      <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                        <Text className="Configurationt" variant="body11">
                          OK
                        </Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[112px] xl:mt-[140px] 2xl:mt-[158px] 3xl:mt-[189px] rounded-radius28 w-[80%]">
                  <Column className="justify-end p-[2px] w-[100%]">
                    <Text className="Header5" variant="body12">
                      Enter time
                    </Text>
                  </Column>
                  <Row className="items-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[3px] w-[82%]">
                    <Column className="justify-start w-[44%]">
                      <Button
                        className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineLime9001_2"
                      >
                        20
                      </Button>
                      <Text className="Hour" variant="body12">
                        Time label
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-gray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      :
                    </Text>
                    <Column className="justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[44%]">
                      <Button
                        className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_900 w-[100%]"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="FillGray303"
                      >
                        00
                      </Button>
                      <Text className="Hour" variant="body12">
                        Time label
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                    <Button
                      className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                      size="xl"
                    ></Button>
                    <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[50%]">
                      <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                        <Text className="Configurationt" variant="body11">
                          Cancel
                        </Text>
                      </Column>
                      <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                        <Text className="Configurationt" variant="body11">
                          OK
                        </Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="bg-gray_900 mb-[2px] rounded-radius16 gridzipcode_five">
            <Row className="items-start lg:mb-[14px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] w-[100%]">
              <Column className="bg-gray_900 items-center justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[72%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[36%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header6" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[85%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Row className="items-start justify-between w-[77%]">
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-orange_100 w-[44%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillLightgreen900"
                            >
                              07
                            </Button>
                            <Text
                              className="Timepickerinp1"
                              as="h2"
                              variant="h2"
                            >
                              :
                            </Text>
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_302 w-[44%]"
                              size="xl"
                              variant="FillGray800"
                            >
                              00
                            </Button>
                          </Row>
                          <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[19%]">
                            <Button
                              className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-center text-green_101 tracking-ls1 w-[100%]"
                              size="xl"
                              variant="OutlineGray5051_2"
                            >
                              AM
                            </Button>
                            <Column className="items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                              <Text className="statelayer29" variant="body10">
                                PM
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Column className="bg-gray_800 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Column className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] items-center justify-start xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Row className="items-start w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    11
                                  </Text>
                                </Column>
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    10
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay1" variant="body10">
                                  12
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] ml-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    2
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="statelayer56"
                                    variant="body10"
                                  >
                                    1
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                            <Row className="items-center justify-between mt-[2px] w-[100%]">
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  9
                                </Text>
                              </Column>
                              <div className="bg-orange_301 border border-orange_301 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  3
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-start mt-[2px] w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    8
                                  </Text>
                                </Column>
                                <Column
                                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_buildingblocks_1.svg')",
                                  }}
                                >
                                  <Text
                                    className="BuildingBlocks21"
                                    variant="body10"
                                  >
                                    7
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  6
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[2px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    5
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    4
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt2" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt2" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[62%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header6" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Row className="items-start justify-between w-[92%]">
                        <Column className="items-center justify-start lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[41%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-orange_100 w-[44%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillLightgreen900"
                            >
                              07
                            </Button>
                            <Text
                              className="Timepickerinp1"
                              as="h2"
                              variant="h2"
                            >
                              :
                            </Text>
                            <Button
                              className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_302 w-[44%]"
                              size="xl"
                              variant="FillGray800"
                            >
                              00
                            </Button>
                          </Row>
                          <Row className="bg-gray_900 border border-gray_505 border-solid items-center justify-evenly lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] rounded-radius8 w-[100%]">
                            <Button
                              className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-center text-green_101 tracking-ls1 w-[50%]"
                              size="xl"
                              variant="OutlineGray5051_2"
                            >
                              AM
                            </Button>
                            <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[50%]">
                              <Text className="statelayer29" variant="body10">
                                PM
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="bg-gray_800 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-center justify-start px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Column className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] items-center justify-start xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Row className="items-start w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    11
                                  </Text>
                                </Column>
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    10
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay1" variant="body10">
                                  12
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] ml-[2px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    2
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="statelayer56"
                                    variant="body10"
                                  >
                                    1
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                            <Row className="items-center justify-between mt-[2px] w-[100%]">
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  9
                                </Text>
                              </Column>
                              <div className="bg-orange_301 border border-orange_301 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  3
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-start mt-[2px] w-[89%]">
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    8
                                  </Text>
                                </Column>
                                <Column
                                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_buildingblocks_1.svg')",
                                  }}
                                >
                                  <Text
                                    className="BuildingBlocks21"
                                    variant="body10"
                                  >
                                    7
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start ml-[2px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Sunday1" variant="body10">
                                  6
                                </Text>
                              </Column>
                              <Stack className="lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[2px] lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]">
                                <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    5
                                  </Text>
                                </Column>
                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] top-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text className="Sunday1" variant="body10">
                                    4
                                  </Text>
                                </Column>
                              </Stack>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] w-[22%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt2" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt2" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                    <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[36%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header6" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-orange_100 w-[45%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillLightgreen900"
                          >
                            20
                          </Button>
                          <Text className="Timepickerinp1" as="h2" variant="h2">
                            :
                          </Text>
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_302 w-[45%]"
                            size="xl"
                            variant="FillGray800"
                          >
                            00
                          </Button>
                        </Row>
                        <Stack className="bg-gray_800 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] inset-[0] justify-center m-[auto] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                  <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                    <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                      <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                        <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                                <Row className="absolute items-start justify-evenly left-[0] w-[79%]">
                                                  <Stack className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] w-[75%]">
                                                    <Column className="absolute justify-start top-[0] w-[100%]">
                                                      <Stack className="lg:h-[36px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[60px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] w-[91%]">
                                                        <Column className="absolute items-center justify-start right-[0] top-[0] w-[72%]">
                                                          <Row className="items-start justify-evenly w-[100%]">
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay1"
                                                                variant="body10"
                                                              >
                                                                11
                                                              </Text>
                                                            </Column>
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay1"
                                                                variant="body10"
                                                              >
                                                                12
                                                              </Text>
                                                            </Column>
                                                          </Row>
                                                        </Column>
                                                        <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Wednesdsay1"
                                                            variant="body10"
                                                          >
                                                            10
                                                          </Text>
                                                        </Column>
                                                      </Stack>
                                                      <Column className="justify-start mt-[2px] w-[41%]">
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday1"
                                                            variant="body10"
                                                          >
                                                            9
                                                          </Text>
                                                        </Column>
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[2px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday1"
                                                            variant="body10"
                                                          >
                                                            8
                                                          </Text>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                    <Column className="absolute bottom-[6%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday1"
                                                        variant="body10"
                                                      >
                                                        7
                                                      </Text>
                                                    </Column>
                                                    <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday1"
                                                        variant="body10"
                                                      >
                                                        6
                                                      </Text>
                                                    </Column>
                                                  </Stack>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Sunday1"
                                                      variant="body10"
                                                    >
                                                      5
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <Column className="absolute bottom-[21%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    4
                                                  </Text>
                                                </Column>
                                                <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    3
                                                  </Text>
                                                </Column>
                                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] top-[21%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    2
                                                  </Text>
                                                </Column>
                                              </Stack>
                                              <Column className="absolute justify-start right-[21%] top-[6%] w-[39%]">
                                                <Row className="items-start justify-evenly w-[100%]">
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Wednesdsay1"
                                                      variant="body10"
                                                    >
                                                      24
                                                    </Text>
                                                  </Column>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="statelayer56"
                                                      variant="body10"
                                                    >
                                                      1
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <div className="bg-orange_301 border border-orange_301 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                                              </Column>
                                            </Stack>
                                            <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[26%] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                              <Text
                                                className="Wednesdsay1"
                                                variant="body10"
                                              >
                                                13
                                              </Text>
                                            </Column>
                                          </Stack>
                                          <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              23
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[25%] w-[69%]">
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              22
                                            </Text>
                                          </Column>
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              14
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Stack>
                                      <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[12%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="Wednesdsay1"
                                          variant="body10"
                                        >
                                          15
                                        </Text>
                                      </Column>
                                    </Stack>
                                    <Column className="absolute bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[13%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="Wednesdsay1"
                                        variant="body10"
                                      >
                                        16
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[25%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                    <Text
                                      className="Wednesdsay1"
                                      variant="body10"
                                    >
                                      17
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bottom-[11%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    18
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay1" variant="body10">
                                  19
                                </Text>
                              </Column>
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_buildingblocks_2.svg')",
                              }}
                            >
                              <Text
                                className="BuildingBlocks22"
                                variant="body10"
                              >
                                20
                              </Text>
                            </Column>
                          </Stack>
                          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[11%] my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                            <Text className="Wednesdsay1" variant="body10">
                              21
                            </Text>
                          </Column>
                        </Stack>
                      </Column>
                      <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt2" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt2" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[62%]">
                      <Column className="justify-end p-[3px] w-[100%]">
                        <Text className="Header6" variant="body12">
                          Select time
                        </Text>
                      </Column>
                      <Row className="items-center justify-between w-[92%]">
                        <Row className="items-start justify-between w-[41%]">
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-orange_100 w-[44%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillLightgreen900"
                          >
                            20
                          </Button>
                          <Text className="Timepickerinp1" as="h2" variant="h2">
                            :
                          </Text>
                          <Button
                            className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-center text-gray_302 w-[44%]"
                            size="xl"
                            variant="FillGray800"
                          >
                            00
                          </Button>
                        </Row>
                        <Stack className="bg-gray_800 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[2px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] inset-[0] justify-center m-[auto] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                  <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                    <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                      <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                        <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                          <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                            <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                              <Stack className="absolute xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] xl:w-[110px] 2xl:w-[124px] 3xl:w-[149px] lg:w-[88px]">
                                                <Row className="absolute items-start justify-evenly left-[0] w-[79%]">
                                                  <Stack className="xl:h-[111px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] w-[75%]">
                                                    <Column className="absolute justify-start top-[0] w-[100%]">
                                                      <Stack className="lg:h-[36px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[60px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] w-[91%]">
                                                        <Column className="absolute items-center justify-start right-[0] top-[0] w-[72%]">
                                                          <Row className="items-start justify-evenly w-[100%]">
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay1"
                                                                variant="body10"
                                                              >
                                                                11
                                                              </Text>
                                                            </Column>
                                                            <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                              <Text
                                                                className="Wednesdsay1"
                                                                variant="body10"
                                                              >
                                                                12
                                                              </Text>
                                                            </Column>
                                                          </Row>
                                                        </Column>
                                                        <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Wednesdsay1"
                                                            variant="body10"
                                                          >
                                                            10
                                                          </Text>
                                                        </Column>
                                                      </Stack>
                                                      <Column className="justify-start mt-[2px] w-[41%]">
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday1"
                                                            variant="body10"
                                                          >
                                                            9
                                                          </Text>
                                                        </Column>
                                                        <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[2px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                          <Text
                                                            className="Sunday1"
                                                            variant="body10"
                                                          >
                                                            8
                                                          </Text>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                    <Column className="absolute bottom-[6%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday1"
                                                        variant="body10"
                                                      >
                                                        7
                                                      </Text>
                                                    </Column>
                                                    <Column className="absolute bottom-[0] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                      <Text
                                                        className="Sunday1"
                                                        variant="body10"
                                                      >
                                                        6
                                                      </Text>
                                                    </Column>
                                                  </Stack>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Sunday1"
                                                      variant="body10"
                                                    >
                                                      5
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <Column className="absolute bottom-[21%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    4
                                                  </Text>
                                                </Column>
                                                <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    3
                                                  </Text>
                                                </Column>
                                                <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[6%] top-[21%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                  <Text
                                                    className="Sunday1"
                                                    variant="body10"
                                                  >
                                                    2
                                                  </Text>
                                                </Column>
                                              </Stack>
                                              <Column className="absolute justify-start right-[21%] top-[6%] w-[39%]">
                                                <Row className="items-start justify-evenly w-[100%]">
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="Wednesdsay1"
                                                      variant="body10"
                                                    >
                                                      24
                                                    </Text>
                                                  </Column>
                                                  <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                                    <Text
                                                      className="statelayer56"
                                                      variant="body10"
                                                    >
                                                      1
                                                    </Text>
                                                  </Column>
                                                </Row>
                                                <div className="bg-orange_301 border border-orange_301 border-solid lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rotate-[90deg] rounded-radius50 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px]"></div>
                                              </Column>
                                            </Stack>
                                            <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[26%] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                              <Text
                                                className="Wednesdsay1"
                                                variant="body10"
                                              >
                                                13
                                              </Text>
                                            </Column>
                                          </Stack>
                                          <Column className="absolute lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] top-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              23
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[25%] w-[69%]">
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              22
                                            </Text>
                                          </Column>
                                          <Column className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                            <Text
                                              className="Wednesdsay1"
                                              variant="body10"
                                            >
                                              14
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Stack>
                                      <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[12%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="Wednesdsay1"
                                          variant="body10"
                                        >
                                          15
                                        </Text>
                                      </Column>
                                    </Stack>
                                    <Column className="absolute bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[13%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="Wednesdsay1"
                                        variant="body10"
                                      >
                                        16
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] right-[25%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                    <Text
                                      className="Wednesdsay1"
                                      variant="body10"
                                    >
                                      17
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bottom-[11%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[0] items-center justify-start mx-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body10"
                                  >
                                    18
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bottom-[16%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[27%] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                                <Text className="Wednesdsay1" variant="body10">
                                  19
                                </Text>
                              </Column>
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[26%] lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[15%] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_buildingblocks_2.svg')",
                              }}
                            >
                              <Text
                                className="BuildingBlocks22"
                                variant="body10"
                              >
                                20
                              </Text>
                            </Column>
                          </Stack>
                          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[11%] my-[auto] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
                            <Text className="Wednesdsay1" variant="body10">
                              21
                            </Text>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                          size="xl"
                        ></Button>
                        <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] w-[22%]">
                          <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                            <Text className="Configurationt2" variant="body11">
                              Cancel
                            </Text>
                          </Column>
                          <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                            <Text className="Configurationt2" variant="body11">
                              OK
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_900 justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[28%]">
                <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[100%]">
                  <Column className="justify-end p-[2px] w-[100%]">
                    <Text className="Header7" variant="body12">
                      Enter time
                    </Text>
                  </Column>
                  <Row className="items-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[85%]">
                    <Row className="items-start justify-between pb-[3px] w-[77%]">
                      <Column className="justify-start w-[44%]">
                        <Button
                          className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineOrange301"
                        >
                          20
                        </Button>
                        <Text className="Hour4" variant="body12">
                          Time label
                        </Text>
                      </Column>
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-gray_302 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        :
                      </Text>
                      <Column className="justify-start w-[44%]">
                        <Button
                          className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_302 w-[100%]"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="FillGray800"
                        >
                          00
                        </Button>
                        <Text className="Hour4" variant="body12">
                          Time label
                        </Text>
                      </Column>
                    </Row>
                    <Column className="bg-gray_900 border border-gray_505 border-solid items-center justify-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] rounded-radius8 w-[19%]">
                      <Button
                        className="font-medium lg:text-[5px] 2xl:text-[7px] xl:text-[7px] 3xl:text-[9px] text-center text-green_101 tracking-ls1 w-[100%]"
                        size="xl"
                        variant="OutlineGray5051_2"
                      >
                        AM
                      </Button>
                      <Column className="items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Text className="statelayer29" variant="body10">
                          PM
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                    <Button
                      className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                      size="xl"
                    ></Button>
                    <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[39%]">
                      <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                        <Text className="Configurationt2" variant="body11">
                          Cancel
                        </Text>
                      </Column>
                      <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                        <Text className="Configurationt2" variant="body11">
                          OK
                        </Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
                <Column className="bg-gray_900 items-center justify-start lg:mt-[112px] xl:mt-[140px] 2xl:mt-[158px] 3xl:mt-[189px] rounded-radius28 w-[80%]">
                  <Column className="justify-end p-[2px] w-[100%]">
                    <Text className="Header7" variant="body12">
                      Enter time
                    </Text>
                  </Column>
                  <Row className="items-start 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[3px] w-[82%]">
                    <Column className="justify-start w-[44%]">
                      <Button
                        className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineOrange301"
                      >
                        20
                      </Button>
                      <Text className="Hour4" variant="body12">
                        Time label
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-gray_302 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      :
                    </Text>
                    <Column className="justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[44%]">
                      <Button
                        className="font-normal not-italic lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-gray_302 w-[100%]"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="FillGray800"
                      >
                        00
                      </Button>
                      <Text className="Hour4" variant="body12">
                        Time label
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[7px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] w-[100%]">
                    <Button
                      className="bg-transparent lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] text-center lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
                      size="xl"
                    ></Button>
                    <Row className="items-center justify-center lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[7px] mt-[4px] w-[50%]">
                      <Column className="items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[57%]">
                        <Text className="Configurationt2" variant="body11">
                          Cancel
                        </Text>
                      </Column>
                      <Column className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] rounded-radius20 w-[36%]">
                        <Text className="Configurationt2" variant="body11">
                          OK
                        </Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default TimepickerPage;
