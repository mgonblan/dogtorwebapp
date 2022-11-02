import React from "react";

import { Column, Img, Text, Row, Button, Line, Radio } from "components";

const TabsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[29px] xl:p-[36px] 2xl:p-[40px] 3xl:p-[49px] w-[100%]">
          <Column className="justify-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Tabs
              </Text>
              <a
                href={"https://m3.material.io/components/tabs/overview"}
                target="_blank"
                className="font-normal lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[22px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-black_900 w-[44%]"
                variant="body8"
              >
                Tabs organize and allow navigation between groups of content
                that are related and at the same  level of hierarchy.
              </Text>
            </Column>
          </Column>
        </Column>
        <footer className="w-[100%]">
          <Row className="items-center mx-[auto] lg:my-[39px] xl:my-[49px] 2xl:my-[55px] 3xl:my-[66px] w-[92%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-white_A700 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between mt-[1px] w-[100%]">
                  <Column className="bg-white_A700 items-center w-[48%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-center 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[26%]">
                            <Text className="columnonprimary" variant="body11">
                              Tab
                            </Text>
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit"
                              alt="edit"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_303 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A700 items-center 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[39%]">
                          <Text className="columnonprimary" variant="body11">
                            Tab
                          </Text>
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit"
                            alt="edit One"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_one" variant="body11">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_303 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A700 items-center w-[48%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[24%]">
                            <Img
                              src="images/img_icons01_2.svg"
                              className="IconsOne1"
                              alt="IconsOne"
                            />
                            <Text className="TabContents" variant="body11">
                              Tab
                            </Text>
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit_Two"
                              alt="edit Two"
                            />
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[4px] w-[24%]">
                            <Img
                              src="images/img_icons01_24X24.svg"
                              className="IconsOne1"
                              alt="IconsOne One"
                            />
                            <Text className="TabContents1" variant="body11">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[4px] w-[24%]">
                            <Img
                              src="images/img_icons01_24X24.svg"
                              className="IconsOne1"
                              alt="IconsOne Two"
                            />
                            <Text className="TabContents1" variant="body11">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Line className="bg-gray_303 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A700 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[35%]">
                          <Img
                            src="images/img_icons01_2.svg"
                            className="IconsOne1"
                            alt="IconsOne Three"
                          />
                          <Text className="TabContents" variant="body11">
                            Tab
                          </Text>
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit_Two"
                            alt="edit Three"
                          />
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_24X24.svg"
                            className="IconsOne1"
                            alt="IconsOne Four"
                          />
                          <Text className="TabContents1" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_24X24.svg"
                            className="IconsOne1"
                            alt="IconsOne Five"
                          />
                          <Text className="TabContents1" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-end lg:pl-[5px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] w-[14%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_24X24.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]"
                            alt="IconsOne Six"
                          />
                          <Text className="TabContents1" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Line className="bg-gray_303 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A700 items-center w-[48%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[25%]">
                            <Img
                              src="images/img_icons01_2.svg"
                              className="IconsOne1"
                              alt="IconsOne Seven"
                            />
                            <Img
                              src="images/img_edit_14X24.svg"
                              className="edit_Four"
                              alt="edit Four"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="text-center w-[33%]"
                          size="xl"
                          variant="FillWhiteA700"
                        ></Button>
                        <Button
                          className="text-center w-[33%]"
                          size="xl"
                          variant="FillWhiteA700"
                        ></Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_303 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A700 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[38%]">
                          <Img
                            src="images/img_icons01_2.svg"
                            className="IconsOne1"
                            alt="IconsOne Ten"
                          />
                          <Img
                            src="images/img_edit_14X24.svg"
                            className="edit_Four"
                            alt="edit Five"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="text-center w-[29%]"
                        size="xl"
                        variant="FillWhiteA700"
                      ></Button>
                      <Button
                        className="text-center w-[29%]"
                        size="xl"
                        variant="FillWhiteA700"
                      ></Button>
                      <Button
                        className="text-center w-[14%]"
                        size="xl"
                        variant="FillWhiteA700"
                      ></Button>
                    </Row>
                    <Line className="bg-gray_303 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A700 items-center w-[48%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-center w-[33%]">
                          <Column className="items-center justify-end 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                            <Column className="items-center justify-start w-[20%]">
                              <Text className="header" variant="body11">
                                Tab
                              </Text>
                            </Column>
                            <Line className="bg-lime_900 h-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_303 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A700 items-center w-[29%]">
                        <Column className="items-center justify-end 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                          <Column className="items-center justify-start w-[27%]">
                            <Text className="header" variant="body11">
                              Tab
                            </Text>
                          </Column>
                          <Line className="bg-lime_900 h-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_one" variant="body11">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_303 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-white_A700 items-center w-[48%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 items-center w-[33%]">
                          <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                            <Radio
                              value="Tab"
                              className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              checked={false}
                              name="LabelEleven"
                              label="Tab"
                            ></Radio>
                            <Line className="bg-lime_900 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_24X24.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_800 tracking-ls1">
                            Tab
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_24X24.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="3xl"
                          variant="FillWhiteA700"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_800 tracking-ls1">
                            Tab
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_303 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-white_A700 items-center w-[29%]">
                        <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                          <Radio
                            value="Tab"
                            className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            checked={false}
                            name="LabelTwelve"
                            label="Tab"
                          ></Radio>
                          <Line className="bg-lime_900 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_24X24.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_800 tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_24X24.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="3xl"
                        variant="FillWhiteA700"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_800 tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="text-center w-[14%]"
                        size="sm"
                        variant="FillWhiteA700"
                      ></Button>
                    </Row>
                    <Line className="bg-gray_303 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-gray_900 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between mt-[1px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[26%]">
                            <Text
                              className="columnonprimary_one_one"
                              variant="body11"
                            >
                              Tab
                            </Text>
                            <Img
                              src="images/img_mail_14X24.svg"
                              className="edit"
                              alt="mail"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_800 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[39%]">
                          <Text
                            className="columnonprimary_one_one"
                            variant="body11"
                          >
                            Tab
                          </Text>
                          <Img
                            src="images/img_mail_14X24.svg"
                            className="edit"
                            alt="mail One"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_fourteen" variant="body11">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[24%]">
                            <Img
                              src="images/img_icons01_3.svg"
                              className="IconsOne1"
                              alt="IconsOne Fifteen"
                            />
                            <Text className="TabContents2" variant="body11">
                              Tab
                            </Text>
                            <Img
                              src="images/img_bag_6X24.svg"
                              className="edit_Two"
                              alt="bag"
                            />
                          </Column>
                        </Column>
                        <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[4px] w-[24%]">
                            <Img
                              src="images/img_icons01_1.svg"
                              className="IconsOne1"
                              alt="IconsOne Sixteen"
                            />
                            <Text className="TabContents3" variant="body11">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[33%]">
                          <Column className="items-center justify-start mb-[4px] w-[24%]">
                            <Img
                              src="images/img_icons01_1.svg"
                              className="IconsOne1"
                              alt="IconsOne Seventeen"
                            />
                            <Text className="TabContents3" variant="body11">
                              Tab
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Line className="bg-gray_800 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center lg:pt-[5px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[35%]">
                          <Img
                            src="images/img_icons01_3.svg"
                            className="IconsOne1"
                            alt="IconsOne Eighteen"
                          />
                          <Text className="TabContents2" variant="body11">
                            Tab
                          </Text>
                          <Img
                            src="images/img_bag_6X24.svg"
                            className="edit_Two"
                            alt="bag One"
                          />
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_1.svg"
                            className="IconsOne1"
                            alt="IconsOne Nineteen"
                          />
                          <Text className="TabContents3" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[29%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_1.svg"
                            className="IconsOne1"
                            alt="IconsOne Twenty"
                          />
                          <Text className="TabContents3" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_900 items-end lg:pl-[5px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] w-[14%]">
                        <Column className="items-center justify-start mb-[4px] w-[35%]">
                          <Img
                            src="images/img_icons01_1.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]"
                            alt="IconsOne TwentyOne"
                          />
                          <Text className="TabContents3" variant="body11">
                            Tab
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[33%]">
                          <Column className="items-center justify-start w-[25%]">
                            <Img
                              src="images/img_icons01_3.svg"
                              className="IconsOne1"
                              alt="IconsOne TwentyTwo"
                            />
                            <Img
                              src="images/img_bag_6X24.svg"
                              className="edit_Four"
                              alt="bag Two"
                            />
                          </Column>
                        </Column>
                        <Button
                          className="text-center w-[33%]"
                          size="xl"
                          variant="FillGray900"
                        ></Button>
                        <Button
                          className="text-center w-[33%]"
                          size="xl"
                          variant="FillGray900"
                        ></Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_800 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[29%]">
                        <Column className="items-center justify-start w-[38%]">
                          <Img
                            src="images/img_icons01_3.svg"
                            className="IconsOne1"
                            alt="IconsOne TwentyFive"
                          />
                          <Img
                            src="images/img_bag_6X24.svg"
                            className="edit_Four"
                            alt="bag Three"
                          />
                        </Column>
                      </Column>
                      <Button
                        className="text-center w-[29%]"
                        size="xl"
                        variant="FillGray900"
                      ></Button>
                      <Button
                        className="text-center w-[29%]"
                        size="xl"
                        variant="FillGray900"
                      ></Button>
                      <Button
                        className="text-center w-[14%]"
                        size="xl"
                        variant="FillGray900"
                      ></Button>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center w-[33%]">
                          <Column className="items-center justify-end 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                            <Column className="items-center justify-start w-[20%]">
                              <Text className="header_One" variant="body11">
                                Tab
                              </Text>
                            </Column>
                            <Line className="bg-orange_301 h-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                        <Button
                          className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[33%]"
                          size="3xl"
                          variant="FillGray900"
                        >
                          Tab
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_800 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center w-[29%]">
                        <Column className="items-center justify-end 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[9px] w-[100%]">
                          <Column className="items-center justify-start w-[27%]">
                            <Text className="header_One" variant="body11">
                              Tab
                            </Text>
                          </Column>
                          <Line className="bg-orange_301 h-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Button
                        className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-center text-gray_402 tracking-ls1 w-[29%]"
                        size="3xl"
                        variant="FillGray900"
                      >
                        Tab
                      </Button>
                      <Text className="rowlabel_fourteen" variant="body11">
                        Tab
                      </Text>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="bg-gray_900 items-center w-[48%]">
                    <Column className="bg-gray_900 items-center justify-start pb-[1px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_900 items-center w-[33%]">
                          <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                            <Radio
                              value="Tab"
                              className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_302 tracking-ls1"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              checked={false}
                              name="LabelTwentyFour"
                              label="Tab"
                            ></Radio>
                            <Line className="bg-orange_301 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Column>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_1.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="3xl"
                          variant="FillGray900"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_402 tracking-ls1">
                            Tab
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center text-center w-[33%]"
                          leftIcon={
                            <Img
                              src="images/img_icons01_1.svg"
                              className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                              alt="Icons/01"
                            />
                          }
                          size="3xl"
                          variant="FillGray900"
                        >
                          <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_402 tracking-ls1">
                            Tab
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-gray_800 h-[1px] w-[100%]" />
                  </Column>
                  <Column className="bg-gray_900 lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[48%]">
                    <Row className="items-center justify-end w-[100%]">
                      <Column className="bg-gray_900 items-center w-[29%]">
                        <Column className="items-center justify-end 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
                          <Radio
                            value="Tab"
                            className="font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_302 tracking-ls1"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            checked={false}
                            name="LabelTwentyFive"
                            label="Tab"
                          ></Radio>
                          <Line className="bg-orange_301 h-[2px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_1.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="3xl"
                        variant="FillGray900"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_402 tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[29%]"
                        leftIcon={
                          <Img
                            src="images/img_icons01_1.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[7px]"
                            alt="Icons/01"
                          />
                        }
                        size="3xl"
                        variant="FillGray900"
                      >
                        <div className="bg-transparent font-medium 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-gray_402 tracking-ls1">
                          Tab
                        </div>
                      </Button>
                      <Button
                        className="text-center w-[14%]"
                        size="sm"
                        variant="FillGray900"
                      ></Button>
                    </Row>
                    <Line className="bg-gray_800 h-[1px] mt-[1px] w-[100%]" />
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default TabsPage;
