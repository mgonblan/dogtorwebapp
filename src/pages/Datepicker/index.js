import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Stack,
  Row,
  Button,
  SelectBox,
  Grid,
  Input,
} from "components";

const DatepickerPage = () => {
  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]">
          <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
              <Text
                className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] xl:mr-[1011px] 2xl:mr-[1137px] 3xl:mr-[1364px] lg:mr-[808px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Date picker
              </Text>
              <Column className="justify-start 2xl:mr-[1113px] 3xl:mr-[1336px] lg:mr-[791px] xl:mr-[990px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[19%]">
                <a
                  href={
                    "https://m3.material.io/components/date-pickers/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Date pickers let users select a date, or a range of dates.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="bg-white_A701 lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="items-center justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[31px] pt-[3px] w-[99%]">
              <Stack className="lg:h-[475px] xl:h-[594px] 2xl:h-[668px] 3xl:h-[802px] w-[100%]">
                <Column className="absolute bottom-[3%] items-center justify-start top-[2%] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="bg-white_A700 items-start justify-between xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[100%]">
                      <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-bluegray_100 border-solid items-end justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[58%]">
                            <Text className="statelayer12" variant="body12">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Button
                            className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] mb-[1px] mr-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                            size="xl"
                          ></Button>
                        </Row>
                        <Row className="items-center justify-between p-[4px] w-[100%]">
                          <SelectBox
                            className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_800 tracking-ls1 w-[37%]"
                            placeholderClassName="text-gray_800"
                            name="augustCounter"
                            placeholder="August 2023"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_24X24.svg"
                                className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                                alt="icon"
                              />
                            }
                            shape="CircleBorder20"
                            size="lg"
                            variant="dropdown25"
                          ></SelectBox>
                          <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] w-[30%]">
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Row>
                        <Column className="justify-start lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                S
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                M
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                W
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                F
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                S
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-end ml-[auto] w-[71%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                1
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                2
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                3
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                4
                              </Text>
                            </Column>
                            <Text
                              className="border border-lime_900 border-solid flex items-center ml-[4px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one"
                              variant="body12"
                            >
                              5
                            </Text>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                6
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                7
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                8
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday" variant="body12">
                                9
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                10
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                11
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                12
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                13
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                14
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                15
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                16
                              </Text>
                            </Column>
                            <Text className="Week3" variant="body12">
                              17
                            </Text>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                18
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay" variant="body12">
                                19
                              </Text>
                            </Column>
                          </Row>
                          <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[100%]">
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                20
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                21
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                22
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                23
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                24
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                25
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                26
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                27
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                28
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                29
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                30
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay" variant="body12">
                                31
                              </Text>
                            </Column>
                          </Grid>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body11">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body11">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-bluegray_100 border-solid items-end justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[58%]">
                            <Text className="statelayer12" variant="body12">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Button
                            className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] mb-[1px] mr-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                            size="xl"
                          ></Button>
                        </Row>
                        <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] p-[4px] rounded-radius20 w-[38%]">
                            <Text className="statelayer12" variant="body11">
                              August 2023
                            </Text>
                            <Img
                              src="images/img_icons02_24X24.svg"
                              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                              alt="icon"
                            />
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Column className="items-center justify-start mb-[4px] w-[90%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2019
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2020
                                </Text>
                              </Column>
                              <Column className="3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body10"
                                >
                                  2021
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2022
                                </Text>
                              </Column>
                              <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[31%]">
                                <Button
                                  className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center tracking-ls1 w-[100%]"
                                  shape="RoundedBorder19"
                                  size="xl"
                                  variant="FillLime900"
                                >
                                  2023
                                </Button>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2024
                                </Text>
                              </Column>
                            </Row>
                            <Grid className="lg:gap-[3px] 2xl:gap-[4px] xl:gap-[4px] 3xl:gap-[5px] grid grid-cols-3 w-[100%]">
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2025
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2026
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2027
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2028
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2029
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2030
                                </Text>
                              </Column>
                              <Column className="justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                <Text
                                  className="BuildingBlocks1"
                                  variant="body10"
                                >
                                  2031
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2032
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks"
                                  variant="body10"
                                >
                                  2033
                                </Text>
                              </Column>
                            </Grid>
                          </Column>
                        </Column>
                        <Column className="border border-bluegray_100 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body11">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body11">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start w-[34%]">
                        <Column className="border border-bluegray_100 border-solid items-center justify-start lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Row className="items-center justify-between w-[97%]">
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[16%]">
                              <Text className="Configurationt" variant="body11">
                                Save
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-end justify-end lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                            <Column className="justify-start pb-[3px] pr-[3px] w-[68%]">
                              <Text className="statelayer12" variant="body12">
                                Depart - Return dates
                              </Text>
                              <Text
                                className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-gray_900 w-[auto]"
                                variant="body5"
                              >
                                Aug 17 – Aug 23
                              </Text>
                            </Column>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Row className="items-center w-[93%]">
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              S
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              M
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              W
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              F
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday" variant="body12">
                              S
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header" variant="body11">
                                  August 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    2
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="border border-lime_900 border-solid flex items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one"
                                    variant="body12"
                                  >
                                    5
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    9
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    10
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    11
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    12
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    13
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    14
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    15
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    16
                                  </Text>
                                </Column>
                                <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] pl-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-y-[0] my-[auto] right-[0] w-[48%]"></div>
                                  <Text
                                    className="absolute bg-lime_900 flex font-medium h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-white_A701 tracking-ls1 w-[max-content]"
                                    variant="body12"
                                  >
                                    17
                                  </Text>
                                </Stack>
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[29%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[92%]">
                                        <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[55%]"></div>
                                        <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                      </Stack>
                                      <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                    </Stack>
                                    <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[8%] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="statelayer30"
                                        variant="body12"
                                      >
                                        18
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[65%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[71%]">
                                        <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[55%]"></div>
                                        <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                      </Stack>
                                      <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                    </Stack>
                                    <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] right-[6%] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                      <Text
                                        className="statelayer30"
                                        variant="body12"
                                      >
                                        19
                                      </Text>
                                    </Column>
                                  </Stack>
                                </Stack>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[56%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[84%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[70%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[56%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[94%]">
                                            <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                            <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                          </Stack>
                                          <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[39%]"></div>
                                        </Stack>
                                        <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[6%] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                          <Text
                                            className="statelayer30"
                                            variant="body12"
                                          >
                                            20
                                          </Text>
                                        </Column>
                                      </Stack>
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[69%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[76%]">
                                            <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                            <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] rotate-[180deg] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                                          </Stack>
                                          <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                        </Stack>
                                        <Column className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-x-[24%] items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                          <Text
                                            className="statelayer30"
                                            variant="body12"
                                          >
                                            21
                                          </Text>
                                        </Column>
                                      </Stack>
                                    </Stack>
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[37%]">
                                      <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[66%]"></div>
                                      <Column className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-start left-[0] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                                        <Text
                                          className="statelayer30"
                                          variant="body12"
                                        >
                                          22
                                        </Text>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[30%]">
                                    <div className="absolute bg-orange_101 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[67%]"></div>
                                    <Text
                                      className="absolute bg-lime_900 flex font-medium items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] rounded-radius50 text-white_A701 tracking-ls1 w-[40px]"
                                      variant="body12"
                                    >
                                      23
                                    </Text>
                                  </Stack>
                                </Stack>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    24
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    25
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    26
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    27
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    28
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    29
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    30
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Wednesdsay" variant="body12">
                                    31
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header" variant="body11">
                                  September 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[29%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    2
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    5
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday" variant="body12">
                                    9
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    10
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    11
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    12
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    13
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    14
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    15
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title" variant="body12">
                                    16
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="border border-bluegray_100 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[35%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body11">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body11">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[65%]">
                      <Column className="bg-white_A700 items-center rounded-radius28 w-[49%]">
                        <Column className="border border-bluegray_100 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header1" variant="body12">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[94%]">
                            <Text
                              className="not-italic text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Enter date
                            </Text>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Column className="items-center justify-end 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <Column className="border-2 border-lime_900 border-solid justify-start mt-[2px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[95%]">
                            <Text className="content2" variant="body12">
                              Date
                            </Text>
                            <Column className="items-center justify-start lg:mb-[2px] xl:mb-[3px] 3xl:mb-[4px] 2xl:mb-[4px] ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[37%]">
                              <Text className="title" variant="body10">
                                mm/dd/yyyy
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body11">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body11">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius28 w-[49%]">
                        <Column className="border border-bluegray_100 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header1" variant="body12">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[94%]">
                            <Text
                              className="not-italic text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Enter dates
                            </Text>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Row className="items-center justify-end 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                          <Column className="border-2 border-lime_900 border-solid mt-[2px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[43%]">
                            <Column className="justify-start mb-[4px] pb-[3px] w-[90%]">
                              <Text className="content2" variant="body12">
                                Date
                              </Text>
                              <Column className="items-center justify-start ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                                <Text className="title" variant="body10">
                                  mm/dd/yyyy
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[51%]">
                            <Text
                              className="border border-gray_600 border-solid 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:pr-[14px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[24px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] title"
                              variant="body10"
                            >
                              End date
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text className="Configurationt" variant="body11">
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text className="Configurationt" variant="body11">
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute justify-start left-[2%] w-[23%]">
                  <Text className="columnbackground" variant="body10">
                    Modal Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[310px] xl:mt-[389px] 2xl:mt-[437px] 3xl:mt-[525px] columnbackground"
                    variant="body10"
                  >
                    Input Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[143px] xl:mt-[179px] 2xl:mt-[201px] 3xl:mt-[241px] columnbackground"
                    variant="body10"
                  >
                    Docked Input Date Picker [desktop]
                  </Text>
                </Column>
              </Stack>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[98%]">
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content2" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end p-[1px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body12"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] rounded-radius16 w-[100%]">
                    <Row className="items-center justify-between p-[1px] w-[100%]">
                      <Row className="items-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[49%]">
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_800 tracking-ls1 w-[40%]"
                          placeholderClassName="text-gray_800"
                          name="statelayer"
                          placeholder="Aug"
                          isSearchable={false}
                          isMulti={false}
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown25"
                        ></SelectBox>
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                      </Row>
                      <Row className="items-center justify-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[51%]">
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_800 tracking-ls1 w-[43%]"
                          placeholderClassName="text-gray_800"
                          name="zipcode Fourteen"
                          placeholder="2023"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_24X24.svg"
                              className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="icon"
                            />
                          }
                          shape="CircleBorder20"
                          size="xl"
                          variant="dropdown25"
                        ></SelectBox>
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                      </Row>
                    </Row>
                    <Column className="items-center justify-start pb-[4px] px-[4px] w-[100%]">
                      <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 w-[95%]">
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            M
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            W
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            F
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday" variant="body12">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            26
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            27
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            28
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            29
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            30
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="statelayer30" variant="body12">
                            31
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            1
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            2
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            3
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            4
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            5
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            6
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            7
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            8
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday" variant="body12">
                            9
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            10
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            11
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            12
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            13
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            14
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay" variant="body12">
                            15
                          </Text>
                        </Column>
                      </Grid>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            16
                          </Text>
                        </Column>
                        <Text className="Week3" variant="body12">
                          17
                        </Text>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            18
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            19
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            20
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            21
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            22
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            23
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            24
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            25
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            26
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            27
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            28
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            29
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay" variant="body12">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            1
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            2
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            3
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            4
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            5
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks" variant="body12">
                            6
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Row className="items-center justify-end ml-[auto] mr-[4px] w-[38%]">
                        <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                          <Text className="Configurationt" variant="body11">
                            Cancel
                          </Text>
                        </Column>
                        <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                          <Text className="Configurationt" variant="body11">
                            OK
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content2" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Three"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end p-[1px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body12"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <SelectBox
                        className="font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_800 tracking-ls1 w-[21%]"
                        placeholderClassName="text-gray_800"
                        name="statelayer One"
                        placeholder="Aug"
                        isSearchable={false}
                        isMulti={false}
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown25"
                      ></SelectBox>
                      <Column className="lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[25%]">
                        <Text
                          className="ml-[4px] TabContents1"
                          variant="body11"
                        >
                          2023
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[96%]">
                        <Column className="justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] title"
                            variant="body10"
                          >
                            May
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            June
                          </Text>
                        </Column>
                        <Column className="justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body10">
                            July
                          </Text>
                        </Column>
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="ListitemList"
                          placeholder="August"
                          prefix={
                            <Img
                              src="images/img_checkmark_8.svg"
                              className="ml-[1px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="xl"
                          variant="FillGray90016"
                        ></Input>
                        <Column className="justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer33" variant="body10">
                            September
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            October
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            November
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_600 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content2" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray8001e"
                          >
                            <Img
                              src="images/img_lock.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="lock Four"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end p-[1px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two"
                        variant="body12"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[21%]">
                        <Text
                          className="mb-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] statelayer12"
                          variant="body11"
                        >
                          Aug
                        </Text>
                      </Column>
                      <SelectBox
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_800 tracking-ls1 w-[23%]"
                        placeholderClassName="text-gray_800"
                        name="zipcode Sixteen"
                        placeholder="2023"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_icons02_24X24.svg"
                            className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                            alt="icon"
                          />
                        }
                        shape="CircleBorder20"
                        size="xl"
                        variant="dropdown25"
                      ></SelectBox>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[3px] w-[100%]">
                      <Column className="items-center justify-start w-[96%]">
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="zipcode Seventeen"
                          placeholder="2023"
                          prefix={
                            <Img
                              src="images/img_checkmark_8.svg"
                              className="ml-[0] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="xl"
                          variant="FillGray90016"
                        ></Input>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2024
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2025
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2026
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2027
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2028
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer32" variant="body10">
                            2029
                          </Text>
                        </Column>
                        <Column className="items-end justify-end 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text
                            className="lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] title"
                            variant="body10"
                          >
                            2033
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_600 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="items-center justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[31px] pt-[3px] w-[99%]">
              <Stack className="lg:h-[475px] xl:h-[594px] 2xl:h-[668px] 3xl:h-[802px] w-[100%]">
                <Column className="absolute bottom-[3%] items-center justify-start top-[2%] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="bg-gray_900 items-start justify-evenly xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[100%]">
                      <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-gray_806 border-solid items-end justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[58%]">
                            <Text className="statelayer20" variant="body12">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic text-gray_302 w-[auto]"
                              variant="body2"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Button
                            className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] mb-[1px] mr-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                            size="xl"
                          ></Button>
                        </Row>
                        <Row className="items-center justify-between p-[4px] w-[100%]">
                          <SelectBox
                            className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_402 tracking-ls1 w-[37%]"
                            placeholderClassName="text-gray_402"
                            name="augustCounter One"
                            placeholder="August 2023"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                                alt="icon"
                              />
                            }
                            shape="CircleBorder20"
                            size="lg"
                            variant="dropdown25"
                          ></SelectBox>
                          <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] w-[30%]">
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Row>
                        <Column className="justify-start lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                S
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                M
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                W
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                T
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                F
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                S
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-end ml-[auto] w-[71%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                1
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                2
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                3
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                4
                              </Text>
                            </Column>
                            <Text
                              className="border border-orange_301 border-solid flex items-center ml-[4px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one_one"
                              variant="body12"
                            >
                              5
                            </Text>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                6
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                7
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                8
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Sunday1" variant="body12">
                                9
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                10
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                11
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                12
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center w-[100%]">
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                13
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                14
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                15
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                16
                              </Text>
                            </Column>
                            <Text className="Week31" variant="body12">
                              17
                            </Text>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                18
                              </Text>
                            </Column>
                            <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                              <Text className="Wednesdsay1" variant="body12">
                                19
                              </Text>
                            </Column>
                          </Row>
                          <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[100%]">
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                20
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                21
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                22
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                23
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                24
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                25
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                26
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                27
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                28
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                29
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                30
                              </Text>
                            </Column>
                            <Column className="griddate_twentyfour">
                              <Text className="Wednesdsay1" variant="body12">
                                31
                              </Text>
                            </Column>
                          </Grid>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center justify-start rounded-radius28 w-[31%]">
                        <Row className="border border-gray_806 border-solid items-end justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[58%]">
                            <Text className="statelayer20" variant="body12">
                              Select date
                            </Text>
                            <Text
                              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic text-gray_302 w-[auto]"
                              variant="body2"
                            >
                              Mon, Aug 17
                            </Text>
                          </Column>
                          <Button
                            className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] mb-[1px] mr-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                            size="xl"
                          ></Button>
                        </Row>
                        <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] p-[4px] rounded-radius20 w-[38%]">
                            <Text className="statelayer20" variant="body11">
                              August 2023
                            </Text>
                            <Img
                              src="images/img_icons02_1.svg"
                              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                              alt="icon Three"
                            />
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Column className="items-center justify-start mb-[4px] w-[90%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2019
                                </Text>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2020
                                </Text>
                              </Column>
                              <Column className="3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks3"
                                  variant="body10"
                                >
                                  2021
                                </Text>
                              </Column>
                            </Row>
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2022
                                </Text>
                              </Column>
                              <Column className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[31%]">
                                <Button
                                  className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center text-gray_905 tracking-ls1 w-[100%]"
                                  shape="RoundedBorder19"
                                  size="xl"
                                  variant="FillOrange301"
                                >
                                  2023
                                </Button>
                              </Column>
                              <Column className="items-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[31%]">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2024
                                </Text>
                              </Column>
                            </Row>
                            <Grid className="lg:gap-[3px] 2xl:gap-[4px] xl:gap-[4px] 3xl:gap-[5px] grid grid-cols-3 w-[100%]">
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2025
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2026
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2027
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2028
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2029
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2030
                                </Text>
                              </Column>
                              <Column className="justify-start 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                <Text
                                  className="BuildingBlocks3"
                                  variant="body10"
                                >
                                  2031
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2032
                                </Text>
                              </Column>
                              <Column className="gridzipcode_five">
                                <Text
                                  className="BuildingBlocks2"
                                  variant="body10"
                                >
                                  2033
                                </Text>
                              </Column>
                            </Grid>
                          </Column>
                        </Column>
                        <Column className="border border-gray_806 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center justify-start w-[34%]">
                        <Column className="border border-gray_806 border-solid items-center justify-start lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Row className="items-center justify-between w-[97%]">
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[16%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Save
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-end justify-end lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                            <Column className="justify-start pb-[3px] pr-[3px] w-[68%]">
                              <Text className="statelayer20" variant="body12">
                                Depart - Return dates
                              </Text>
                              <Text
                                className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-gray_302 w-[auto]"
                                variant="body5"
                              >
                                Aug 17 – Aug 23
                              </Text>
                            </Column>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Row className="items-center w-[93%]">
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              S
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              M
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              W
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              T
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              F
                            </Text>
                          </Column>
                          <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                            <Text className="Sunday1" variant="body12">
                              S
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-center justify-start lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header2" variant="body11">
                                  August 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    2
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="border border-orange_301 border-solid flex items-center 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 columnlabeltext_one_one"
                                    variant="body12"
                                  >
                                    5
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    9
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    10
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    11
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    12
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    13
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    14
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    15
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    16
                                  </Text>
                                </Column>
                                <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] pl-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] inset-y-[0] my-[auto] right-[0] w-[48%]"></div>
                                  <Text
                                    className="absolute bg-orange_301 flex font-medium h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-gray_905 tracking-ls1 w-[max-content]"
                                    variant="body12"
                                  >
                                    17
                                  </Text>
                                </Stack>
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[29%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]">
                                    <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                    <Stack className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[9px] w-[100%]">
                                      <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                      <Text
                                        className="absolute flex font-normal h-[max-content] inset-[0] items-center justify-center m-[auto] not-italic text-gray_402 tracking-ls1 w-[max-content]"
                                        variant="body12"
                                      >
                                        18
                                      </Text>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[65%]">
                                    <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                    <Stack className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[9px] right-[0] w-[77%]">
                                      <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                      <Text
                                        className="absolute flex font-normal h-[max-content] inset-[0] items-center justify-center m-[auto] not-italic text-gray_402 tracking-ls1 w-[max-content]"
                                        variant="body12"
                                      >
                                        19
                                      </Text>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[56%]">
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[77%]">
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[76%]">
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[56%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[77%]">
                                            <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[50%]"></div>
                                            <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]"></div>
                                          </Stack>
                                          <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[61%]"></div>
                                        </Stack>
                                        <Text
                                          className="absolute flex h-[max-content] inset-y-[0] items-center left-[27%] my-[auto] Supportingtext_Eight_One"
                                          variant="body12"
                                        >
                                          20
                                        </Text>
                                      </Stack>
                                      <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[69%]">
                                        <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]">
                                          <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[82%]">
                                            <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                            <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[77%]"></div>
                                          </Stack>
                                          <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[50%]"></div>
                                        </Stack>
                                        <Text
                                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-gray_402 tracking-ls1 w-[max-content]"
                                          variant="body12"
                                        >
                                          21
                                        </Text>
                                      </Stack>
                                    </Stack>
                                    <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[43%]">
                                      <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[61%]"></div>
                                      <Column className="absolute bg-gray_804 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] right-[0] w-[77%]">
                                        <Text
                                          className="flex items-center BuildingBlocks2"
                                          variant="body12"
                                        >
                                          22
                                        </Text>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                  <Stack className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] right-[0] w-[30%]">
                                    <div className="absolute bg-gray_804 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] left-[0] w-[67%]"></div>
                                    <Text
                                      className="absolute bg-orange_301 flex font-medium items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] right-[0] rounded-radius50 text-gray_905 tracking-ls1 w-[40px]"
                                      variant="body12"
                                    >
                                      23
                                    </Text>
                                  </Stack>
                                </Stack>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    24
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    25
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    26
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center w-[71%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    27
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    28
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    29
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    30
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text
                                    className="Wednesdsay1"
                                    variant="body12"
                                  >
                                    31
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="justify-start w-[100%]">
                              <Column className="justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                                <Text className="Header2" variant="body11">
                                  September 2023
                                </Text>
                              </Column>
                              <Row className="items-center justify-end ml-[auto] w-[29%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    1
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    2
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    3
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    4
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    5
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    6
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    7
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    8
                                  </Text>
                                </Column>
                                <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                                  <Text className="Sunday1" variant="body12">
                                    9
                                  </Text>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    10
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    11
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    12
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    13
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    14
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    15
                                  </Text>
                                </Column>
                                <Column className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[14%]">
                                  <Text className="title_One" variant="body12">
                                    16
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="border border-gray_806 border-solid items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[35%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="bg-gray_900 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[65%]">
                      <Column className="bg-gray_900 items-center rounded-radius28 w-[49%]">
                        <Column className="border border-gray_806 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header3" variant="body12">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[94%]">
                            <Text
                              className="not-italic text-gray_302 w-[auto]"
                              variant="body2"
                            >
                              Enter dates
                            </Text>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Column className="items-center justify-end 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                          <Column className="border-2 border-orange_301 border-solid justify-start mt-[2px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[95%]">
                            <Text className="content3" variant="body12">
                              Date
                            </Text>
                            <Column className="items-center justify-start lg:mb-[2px] xl:mb-[3px] 3xl:mb-[4px] 2xl:mb-[4px] ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[37%]">
                              <Text className="title_One" variant="body10">
                                mm/dd/yyyy
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius28 w-[49%]">
                        <Column className="border border-gray_806 border-solid justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Text className="Header3" variant="body12">
                            Select date
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[94%]">
                            <Text
                              className="not-italic text-gray_302 w-[auto]"
                              variant="body2"
                            >
                              Enter dates
                            </Text>
                            <Button
                              className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                              size="xl"
                            ></Button>
                          </Row>
                        </Column>
                        <Row className="items-center justify-end 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                          <Column className="border-2 border-orange_301 border-solid mt-[2px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[43%]">
                            <Column className="justify-start mb-[4px] pb-[3px] w-[90%]">
                              <Text className="content3" variant="body12">
                                Date
                              </Text>
                              <Column className="items-center justify-start ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                                <Text className="title_One" variant="body10">
                                  mm/dd/yyyy
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[51%]">
                            <Text
                              className="border border-gray_505 border-solid 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:pr-[14px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[24px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] title_One"
                              variant="body10"
                            >
                              End date
                            </Text>
                          </Column>
                        </Row>
                        <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Row className="items-center justify-end mb-[4px] ml-[auto] mr-[4px] w-[38%]">
                            <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                Cancel
                              </Text>
                            </Column>
                            <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                              <Text
                                className="Configurationt2"
                                variant="body11"
                              >
                                OK
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute justify-start left-[2%] w-[23%]">
                  <Text className="columnprimary" variant="body10">
                    Modal Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[310px] xl:mt-[389px] 2xl:mt-[437px] 3xl:mt-[525px] columnprimary"
                    variant="body10"
                  >
                    Input Date Picker
                  </Text>
                  <Text
                    className="lg:mt-[143px] xl:mt-[179px] 2xl:mt-[201px] 3xl:mt-[241px] columnprimary"
                    variant="body10"
                  >
                    Docked Input Date Picker [desktop]
                  </Text>
                </Column>
              </Stack>
              <Row className="bg-gray_900 items-center justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[98%]">
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content3" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_One" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end p-[1px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two_one"
                        variant="body12"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] rounded-radius16 w-[100%]">
                    <Row className="items-center justify-between p-[1px] w-[100%]">
                      <Row className="items-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[49%]">
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_402 tracking-ls1 w-[40%]"
                          placeholderClassName="text-gray_402"
                          name="statelayer One"
                          placeholder="Aug"
                          isSearchable={false}
                          isMulti={false}
                          shape="CircleBorder20"
                          size="lg"
                          variant="dropdown25"
                        ></SelectBox>
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                      </Row>
                      <Row className="items-center justify-center lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[51%]">
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_402 tracking-ls1 w-[43%]"
                          placeholderClassName="text-gray_402"
                          name="zipcode Fourteen One"
                          placeholder="2023"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_1.svg"
                              className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="icon"
                            />
                          }
                          shape="CircleBorder20"
                          size="xl"
                          variant="dropdown25"
                        ></SelectBox>
                        <Button
                          className="bg-transparent lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] text-center lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]"
                          size="xl"
                        ></Button>
                      </Row>
                    </Row>
                    <Column className="items-center justify-start pb-[4px] px-[4px] w-[100%]">
                      <Grid className="lg:gap-[1px] 3xl:gap-[2px] 2xl:gap-[2px] xl:gap-[2px] grid grid-cols-7 w-[95%]">
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            M
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            W
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            T
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            F
                          </Text>
                        </Column>
                        <Column className="griddate_ninety">
                          <Text className="Sunday1" variant="body12">
                            S
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            26
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            27
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            28
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            29
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            30
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday2" variant="body12">
                            31
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            1
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            2
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            3
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            4
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            5
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            6
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            7
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            8
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Sunday1" variant="body12">
                            9
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            10
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            11
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            12
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            13
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            14
                          </Text>
                        </Column>
                        <Column className="griddate_twentyfour">
                          <Text className="Wednesdsay1" variant="body12">
                            15
                          </Text>
                        </Column>
                      </Grid>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            16
                          </Text>
                        </Column>
                        <Text className="Week31" variant="body12">
                          17
                        </Text>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            18
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            19
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            20
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            21
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            22
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            23
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            24
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            25
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            26
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            27
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            28
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            29
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center mt-[4px] w-[95%]">
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="Wednesdsay1" variant="body12">
                            30
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            1
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            2
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            3
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            4
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            5
                          </Text>
                        </Column>
                        <Column className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center ml-[4px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]">
                          <Text className="BuildingBlocks2" variant="body12">
                            6
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-end justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                      <Row className="items-center justify-end ml-[auto] mr-[4px] w-[38%]">
                        <Column className="items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[57%]">
                          <Text className="Configurationt2" variant="body11">
                            Cancel
                          </Text>
                        </Column>
                        <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius20 w-[36%]">
                          <Text className="Configurationt2" variant="body11">
                            OK
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content3" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_One" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Three"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end p-[1px] w-[100%]">
                      <Text
                        className="columnsupportingtext_two_one"
                        variant="body12"
                      >
                        MM/DD/YYYY
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-gray_806 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <SelectBox
                        className="font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_402 tracking-ls1 w-[21%]"
                        placeholderClassName="text-gray_402"
                        name="statelayer One One"
                        placeholder="Aug"
                        isSearchable={false}
                        isMulti={false}
                        shape="CircleBorder20"
                        size="lg"
                        variant="dropdown25"
                      ></SelectBox>
                      <Column className="lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[25%]">
                        <Text
                          className="ml-[4px] TabContents3"
                          variant="body11"
                        >
                          2023
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[97%]">
                        <Column className="justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] title_One"
                            variant="body10"
                          >
                            May
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            June
                          </Text>
                        </Column>
                        <Column className="justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body10">
                            July
                          </Text>
                        </Column>
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_302 text-gray_302 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="ListitemList One"
                          placeholder="August"
                          prefix={
                            <Img
                              src="images/img_checkmark_9.svg"
                              className="ml-[1px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="xl"
                          variant="FillGray30014"
                        ></Input>
                        <Column className="justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer37" variant="body10">
                            September
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            October
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            November
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_505 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Column className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[32%]">
                  <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[95%]">
                    <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                      <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                        <Column className="justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[31%]">
                          <Text className="content3" variant="body12">
                            Date
                          </Text>
                          <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                            <Text className="title_One" variant="body10">
                              08/17/2023
                            </Text>
                          </Column>
                        </Column>
                        <Column className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-start mt-[4px] px-[4px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[33px]">
                          <Button
                            className="flex lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
                            size="mdIcn"
                            variant="icbFillGray4001e"
                          >
                            <Img
                              src="images/img_camera.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                              alt="camera Four"
                            />
                          </Button>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-end lg:pt-[2px] xl:pt-[3px] 3xl:pt-[4px] 2xl:pt-[4px] lg:px-[2px] xl:px-[3px] 3xl:px-[4px] 2xl:px-[4px] w-[100%]">
                      <Text
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] title_One"
                        variant="body12"
                      >
                        Supporting text
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_900 items-center justify-start lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] rounded-radius16 w-[100%]">
                    <Row className="border border-gray_806 border-solid items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[100%]">
                      <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[21%]">
                        <Text
                          className="mb-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] statelayer20"
                          variant="body11"
                        >
                          Aug
                        </Text>
                      </Column>
                      <SelectBox
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_402 tracking-ls1 w-[23%]"
                        placeholderClassName="text-gray_402"
                        name="zipcode Sixteen One"
                        placeholder="2023"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_icons02_1.svg"
                            className="mr-[4px] lg:w-[7px] lg:h-[8px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                            alt="icon"
                          />
                        }
                        shape="CircleBorder20"
                        size="xl"
                        variant="dropdown25"
                      ></SelectBox>
                    </Row>
                    <Row className="items-start justify-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pr-[4px] w-[100%]">
                      <Column className="items-center justify-start w-[97%]">
                        <Input
                          className="font-normal not-italic p-[0] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] placeholder:text-gray_302 text-gray_302 tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="zipcode Seventeen One"
                          placeholder="2023"
                          prefix={
                            <Img
                              src="images/img_checkmark_9.svg"
                              className="ml-[1px] lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[11px] my-[auto]"
                              alt="checkmark"
                            />
                          }
                          size="xl"
                          variant="FillGray30014"
                        ></Input>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2024
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2025
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2026
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2027
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2028
                          </Text>
                        </Column>
                        <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[100%]">
                          <Text className="statelayer36" variant="body10">
                            2029
                          </Text>
                        </Column>
                        <Column className="items-end justify-end 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                          <Text
                            className="lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] title_One"
                            variant="body10"
                          >
                            2033
                          </Text>
                        </Column>
                      </Column>
                      <div className="bg-gray_505 lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] ml-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius4 w-[2%]"></div>
                    </Row>
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

export default DatepickerPage;
