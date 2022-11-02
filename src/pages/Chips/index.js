import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Stack,
  Row,
  Button,
  CheckBox,
  SelectBox,
} from "components";

const ChipsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
          <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
              <Text
                className="ml-[4px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Chips
              </Text>
              <a
                href={"https://m3.material.io/components/chips/overview"}
                target="_blank"
                className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Chips help people enter information, make selections, filter
                content, or trigger actions.{" "}
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 min-h-[auto] lg:p-[25px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]"
          orientation="horizontal"
        >
          <Stack className="xl:h-[1215px] 2xl:h-[1367px] 3xl:h-[1640px] lg:h-[972px] mb-[1px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[71%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_close_18X18.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_18X18.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car"
                          />
                          <Text className="statelayer12" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_18X18.svg"
                            className="car"
                            alt="close"
                          />
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius16 w-[11%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_18X18.svg"
                            className="close_One"
                            alt="close One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car One"
                          />
                          <Text className="statelayer12" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="car"
                            alt="close Two"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="close_One"
                            alt="close Three"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_1e items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car Two"
                          />
                          <Text className="statelayer12" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="car"
                            alt="close Four"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_800 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer13" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="close_One"
                            alt="close Five"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs1 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_900_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Three"
                            alt="car Three"
                          />
                          <Text className="statelayer12" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="car_Three"
                            alt="close Six"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius16 shadow-bs1 w-[12%]">
                        <Row className="bg-gray_900_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer14" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius16 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_900_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray800"
                          ></Button>
                          <Text className="statelayer14" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="close_Seven"
                            alt="close Seven"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillOrange101"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillOrange101"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_18X18.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillOrange101"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car Four"
                          />
                          <Text className="statelayer15" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[11%]">
                        <CheckBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="labeltext Thirteen"
                          label="Enabled"
                        ></CheckBox>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[14%]">
                        <CheckBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="labeltext Fourteen"
                          label="Enabled"
                        ></CheckBox>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_900_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car Five"
                          />
                          <Text className="statelayer15" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_900_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_900_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark One"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_One"
                            alt="plus Two"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_900_1e1 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car"
                            alt="car Six"
                          />
                          <Text className="statelayer15" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car"
                            alt="plus Three"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_900_1e1 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Two"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_900_1e1 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Three"
                            />
                          </Column>
                          <Text className="statelayer16" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_One"
                            alt="plus Four"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_101 items-center shadow-bs1 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90029"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_18X18.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90029"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_900_29 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Three"
                            alt="car Seven"
                          />
                          <Text className="statelayer15" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="car_Three"
                            alt="plus Five"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 shadow-bs1 w-[12%]">
                        <Row className="bg-gray_900_29 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center justify-start rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Four"
                            />
                          </Column>
                          <Text className="statelayer17" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius16 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_900_29 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Column className="bg-gray_901 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center justify-start rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                            <Img
                              src="images/img_checkmark_3.svg"
                              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 w-[100%]"
                              alt="checkmark Five"
                            />
                          </Column>
                          <Text className="statelayer17" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus.svg"
                            className="close_Seven"
                            alt="plus Six"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[92%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBlack90026"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car Eight"
                          />
                          <Text className="statelayer18" variant="body11">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car Nine"
                          />
                          <Text className="statelayer18" variant="body11">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile"
                          />
                          <Text className="statelayer18" variant="body11">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile One"
                          />
                          <Text className="statelayer18" variant="body11">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Ten"
                          />
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Eleven"
                          />
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Two"
                          />
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Three"
                          />
                          <Text className="statelayer18" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Twelve"
                          />
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Thirteen"
                          />
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Four"
                          />
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Five"
                          />
                          <Text className="statelayer18" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs5 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Fourteen"
                          />
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Fifteen"
                          />
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Six"
                          />
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Seven"
                          />
                          <Text className="statelayer18" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs5 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car Sixteen"
                          />
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car Seventeen"
                          />
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center car_Eight"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center car_Eight"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Eight"
                          />
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[9%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Nine"
                          />
                          <Text className="statelayer18" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car Eighteen"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car Nineteen"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillBlack900"
                          ></Button>
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Ten"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Eleven"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Column className="items-center justify-start pb-[1px] px-[1px] w-[99%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineGray6001_2"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineBlack90026"
                        >
                          Enabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_800"
                          name="Styleunselecte"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray600"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_800"
                          name="Styleunselecte One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026"
                        ></SelectBox>
                        <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car Twenty"
                            />
                            <Text className="statelayer13" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentyOne"
                            />
                            <Text className="statelayer13" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_800"
                          name="Styleunselecte Two"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray600"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_800 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_800"
                          name="Styleunselecte Three"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack90026"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs5 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs5 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentyTwo"
                            />
                            <Text className="statelayer18" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentyThree"
                            />
                            <Text className="statelayer18" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Two"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs5 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Three"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Four"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Five"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentyFour"
                            />
                            <Text className="statelayer18" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentyFive"
                            />
                            <Text className="statelayer18" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Six"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Seven"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Eight"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Nine"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentySix"
                            />
                            <Text className="statelayer18" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="profile1"
                              alt="car TwentySeven"
                            />
                            <Text className="statelayer18" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Ten"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Eleven"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs6 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs6 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs6 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Twelve"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs6 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Thirteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="car_Eight"
                              alt="car TwentyEight"
                            />
                            <Text className="statelayer18" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_18X18.svg"
                              className="car_Eight"
                              alt="car TwentyNine"
                            />
                            <Text className="statelayer18" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Fourteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-white_A700 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_900"
                            name="statelayer Fifteen"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray90028"
                          ></SelectBox>
                        </Column>
                      </Row>
                    </Column>
                    <div className="w-[100%]">
                      <Row className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-center lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[12%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[65%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="OutlineGray8001e"
                          >
                            Disabled
                          </Button>
                        </Row>
                        <Row className="items-center lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[12%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[65%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Disabled
                          </Button>
                        </Row>
                        <Row className="items-center lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[14%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[69%]"
                            placeholderClassName="text-gray_900_7c"
                            name="Styleunselecte Four"
                            placeholder="Disabled"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="OutlineGray8001e"
                          ></SelectBox>
                        </Row>
                        <Row className="items-center lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[14%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[69%]"
                            placeholderClassName="text-gray_900_7c"
                            name="Styleunselecte Five"
                            placeholder="Disabled"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons_02_18X18.svg"
                                className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[12%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car Thirty"
                          />
                          <Text
                            className="lg:mr-[20px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[34px] statelayer19"
                            variant="body11"
                          >
                            Disabled
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[36%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car ThirtyOne"
                          />
                          <Text
                            className="lg:mr-[126px] xl:mr-[158px] 2xl:mr-[178px] 3xl:mr-[214px] statelayer19"
                            variant="body11"
                          >
                            Disabled
                          </Text>
                        </Row>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Six"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray8001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_900_7c"
                          name="Styleunselecte Seven"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_2.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icons_02_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                        ></SelectBox>
                      </Row>
                      <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Row className="items-center px-[3px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Six"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Enabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[3px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[68%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Seven"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Enabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[3px] w-[14%]">
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[72%]"
                              placeholderClassName="text-gray_901"
                              name="Styleselected"
                              placeholder="Enabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                              variant="FillOrange101"
                            ></SelectBox>
                          </Row>
                          <Row className="items-center px-[3px] w-[14%]">
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[72%]"
                              placeholderClassName="text-gray_901"
                              name="Styleselected One"
                              placeholder="Enabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                              variant="OutlineBlack900261_2"
                            ></SelectBox>
                          </Row>
                          <Row className="items-center px-[3px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Eight"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Enabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between px-[2px] w-[36%]">
                            <Column className="bg-orange_101 items-center ml-[1px] rounded-radius8 shadow-bs w-[23%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Nine"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Enabled
                                </Text>
                              </Row>
                            </Column>
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[27%]"
                              placeholderClassName="text-gray_901"
                              name="Styleselected Two"
                              placeholder="Enabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                              variant="FillOrange101"
                            ></SelectBox>
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[27%]"
                              placeholderClassName="text-gray_901"
                              name="Styleselected Three"
                              placeholder="Enabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                              variant="OutlineBlack900261_2"
                            ></SelectBox>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[69%]">
                              <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Ten"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Hovered
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs5 w-[69%]">
                              <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Eleven"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Hovered
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Sixteen"
                                placeholder="Hovered"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray90014"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs5 w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Seventeen"
                                placeholder="Hovered"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray90014"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[69%]">
                              <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Twelve"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Hovered
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between px-[1px] w-[36%]">
                            <Column className="bg-orange_101 items-center ml-[1px] rounded-radius8 shadow-bs5 w-[23%]">
                              <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Thirteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Hovered
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Eighteen"
                                placeholder="Hovered"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray90014"
                              ></SelectBox>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs5 w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Nineteen"
                                placeholder="Hovered"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray90014"
                              ></SelectBox>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Fourteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Focused
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Fifteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Focused
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[14%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Twenty"
                                placeholder="Focused"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyOne"
                                placeholder="Focused"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Sixteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Focused
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between px-[1px] w-[36%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[23%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Seventeen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Focused
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyTwo"
                                placeholder="Focused"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyThree"
                                placeholder="Focused"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Eighteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Pressed
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Nineteen"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Pressed
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[14%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[71%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyFour"
                                placeholder="Pressed"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs w-[71%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyFive"
                                placeholder="Pressed"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[2px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[68%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark Twenty"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Pressed
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between px-[2px] w-[36%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[23%]">
                              <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="profile1"
                                  alt="checkmark TwentyOne"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Pressed
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-orange_101 items-center rounded-radius8 w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentySix"
                                placeholder="Pressed"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentySeven"
                                placeholder="Pressed"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                variant="FillGray9001e1"
                              ></SelectBox>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs6 w-[68%]">
                              <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="car_Eight"
                                  alt="checkmark TwentyTwo"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Dragged
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs6 w-[68%]">
                              <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="car_Eight"
                                  alt="checkmark TwentyThree"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Dragged
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs6 w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyEight"
                                placeholder="Dragged"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                size="md"
                                variant="FillGray90029"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[14%]">
                            <Column className="bg-orange_101 items-center shadow-bs6 w-[72%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer TwentyNine"
                                placeholder="Dragged"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                size="md"
                                variant="FillGray90029"
                              ></SelectBox>
                            </Column>
                          </Row>
                          <Row className="items-center px-[1px] w-[12%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs6 w-[68%]">
                              <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="car_Eight"
                                  alt="checkmark TwentyFour"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Dragged
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between px-[1px] w-[36%]">
                            <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs6 w-[23%]">
                              <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="car_Eight"
                                  alt="checkmark TwentyFive"
                                />
                                <Text className="statelayer16" variant="body11">
                                  Dragged
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs6 w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer Thirty"
                                placeholder="Dragged"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                size="md"
                                variant="FillGray90029"
                              ></SelectBox>
                            </Column>
                            <Column className="bg-orange_101 items-center shadow-bs6 w-[27%]">
                              <SelectBox
                                className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_901 tracking-ls1 w-[100%]"
                                placeholderClassName="text-gray_901"
                                name="statelayer ThirtyOne"
                                placeholder="Dragged"
                                isSearchable={false}
                                isMulti={false}
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                      alt="checkmark"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                indicator={
                                  <Img
                                    src="images/img_icons_02.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                    alt="icon"
                                  />
                                }
                                shape="RoundedBorder8"
                                size="md"
                                variant="FillGray90029"
                              ></SelectBox>
                            </Column>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Row className="items-center lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[29px] w-[12%]">
                            <Column className="bg-gray_800_1e items-center rounded-radius8 w-[100%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="profile1"
                                  alt="checkmark TwentySix"
                                />
                                <Text className="statelayer19" variant="body11">
                                  Disabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[29px] w-[12%]">
                            <Column className="bg-gray_800_1e items-center rounded-radius8 w-[100%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="profile1"
                                  alt="checkmark TwentySeven"
                                />
                                <Text className="statelayer19" variant="body11">
                                  Disabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[29px] w-[14%]">
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[100%]"
                              placeholderClassName="text-gray_900_7c"
                              name="Styleselected Four"
                              placeholder="Disabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark_24X24.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                            ></SelectBox>
                          </Row>
                          <Row className="items-center justify-center lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[29px] w-[14%]">
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[100%]"
                              placeholderClassName="text-gray_900_7c"
                              name="Styleselected Five"
                              placeholder="Disabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark_24X24.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                            ></SelectBox>
                          </Row>
                          <Row className="items-center justify-center lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[29px] w-[12%]">
                            <Column className="bg-gray_800_1e items-center rounded-radius8 w-[100%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="profile1"
                                  alt="checkmark TwentyEight"
                                />
                                <Text className="statelayer19" variant="body11">
                                  Disabled
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between w-[36%]">
                            <Column className="bg-gray_800_1e items-center rounded-radius8 w-[24%]">
                              <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="profile1"
                                  alt="checkmark TwentyNine"
                                />
                                <Text className="statelayer19" variant="body11">
                                  Disabled
                                </Text>
                              </Row>
                            </Column>
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[28%]"
                              placeholderClassName="text-gray_900_7c"
                              name="Styleselected Six"
                              placeholder="Disabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark_24X24.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                            ></SelectBox>
                            <SelectBox
                              className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_900_7c tracking-ls1 w-[28%]"
                              placeholderClassName="text-gray_900_7c"
                              name="Styleselected Seven"
                              placeholder="Disabled"
                              isSearchable={false}
                              isMulti={false}
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    src="images/img_checkmark_24X24.svg"
                                    className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                    alt="checkmark"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              )}
                              indicator={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                                  alt="icon"
                                />
                              }
                              shape="RoundedBorder8"
                            ></SelectBox>
                          </Row>
                        </Row>
                      </Column>
                    </div>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[46%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBlack90026"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyTwo"
                          />
                          <Text className="statelayer13" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyThree"
                          />
                          <Text className="statelayer13" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyFour"
                          />
                          <Text className="statelayer13" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyFive"
                          />
                          <Text className="statelayer13" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_900 border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtySix"
                          />
                          <Text className="statelayer13" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtySeven"
                          />
                          <Text className="statelayer13" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs5 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyEight"
                          />
                          <Text className="statelayer13" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs5 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car ThirtyNine"
                          />
                          <Text className="statelayer13" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_800 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_600 border-solid items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car Forty"
                          />
                          <Text className="statelayer13" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_900_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car FortyOne"
                          />
                          <Text className="statelayer13" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_800_1e border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car FortyTwo"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car FortyThree"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillOrange101"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBlack900261_2"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortyFour"
                          />
                          <Text className="statelayer16" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortyFive"
                          />
                          <Text className="statelayer16" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-orange_101 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortySix"
                          />
                          <Text className="statelayer16" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[19%]">
                        <Row className="bg-gray_900_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortySeven"
                          />
                          <Text className="statelayer16" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortyEight"
                          />
                          <Text className="statelayer16" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs w-[20%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FortyNine"
                          />
                          <Text className="statelayer16" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-orange_101 items-center shadow-bs5 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs5 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray9001e1"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs5 w-[19%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car Fifty"
                          />
                          <Text className="statelayer16" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs5 w-[19%]">
                        <Row className="bg-gray_900_1e1 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="profile1"
                            alt="car FiftyOne"
                          />
                          <Text className="statelayer16" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-orange_101 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray90029"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car FiftyTwo"
                          />
                          <Text className="statelayer16" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-orange_101 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_900_29 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_18X18.svg"
                            className="car_Eight"
                            alt="car FiftyThree"
                          />
                          <Text className="statelayer16" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_900_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray8001e"
                      >
                        Disabled
                      </Button>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car FiftyFour"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_800_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_2.svg"
                            className="profile1"
                            alt="car FiftyFive"
                          />
                          <Text className="statelayer19" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[95%]">
              <Column className="justify-start w-[100%]">
                <Text className="columnbackground" variant="body10">
                  Input chips
                </Text>
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] w-[66%]">
                  <Text className="Sublabel" variant="body12">
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] Sublabel"
                    variant="body12"
                  >
                    Label & trailing icon
                  </Text>
                  <Text
                    className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] Sublabel"
                    variant="body12"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] text-center w-[13%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] Sublabel"
                    variant="body12"
                  >
                    Label & avatar
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[3px] text-center w-[10%] rowsublabel"
                    variant="body12"
                  >
                    Label, avatar & trailing icon
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[194px] xl:mt-[243px] 2xl:mt-[273px] 3xl:mt-[328px] columnbackground"
                  variant="body10"
                >
                  Assist chips
                </Text>
                <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] w-[89%]">
                  <Text className="Sublabel" variant="body12">
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] Sublabel"
                    variant="body12"
                  >
                    Label only - elevated
                  </Text>
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] Sublabel"
                    variant="body12"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] Sublabel"
                    variant="body12"
                  >
                    Label & icon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] Sublabel"
                    variant="body12"
                  >
                    Label & favicon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] mb-[3px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] text-center w-[8%] rowsublabel"
                    variant="body12"
                  >
                    Label & favicon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] Sublabel"
                    variant="body12"
                  >
                    Label & branded icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] mb-[3px] lg:ml-[16px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] text-center w-[8%] rowsublabel"
                    variant="body12"
                  >
                    Label & branded icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[161px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[272px] columnbackground"
                  variant="body10"
                >
                  Filter chips
                </Text>
                <Row className="items-start lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] mt-[3px] w-[97%]">
                  <Text
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] tracking-ls1 rowone"
                    variant="body12"
                  >
                    Label
                  </Text>
                  <Text
                    className="lg:ml-[34px] xl:ml-[43px] 2xl:ml-[48px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] tracking-ls1 rowone"
                    variant="body12"
                  >
                    Label - elevated
                  </Text>
                  <Text
                    className="lg:ml-[30px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] tracking-ls1 rowone"
                    variant="body12"
                  >
                    Label & Icon
                  </Text>
                  <Text
                    className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] tracking-ls1 rowone"
                    variant="body12"
                  >
                    Label & Icon - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] text-center w-[7%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] text-center w-[7%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon & label - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] text-center w-[8%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] text-center w-[11%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[275px] xl:mt-[344px] 2xl:mt-[388px] 3xl:mt-[465px] columnbackground"
                  variant="body10"
                >
                  Suggestion chips
                </Text>
                <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[41%]">
                  <Text className="Sublabel" variant="body12">
                    Outlined
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] Sublabel"
                    variant="body12"
                  >
                    Elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] text-center w-[22%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon & label
                    <br />
                    Outlined
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] text-center w-[22%] rowsublabel"
                    variant="body12"
                  >
                    Leading icon & label <br />
                    Elevated
                  </Text>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Stack className="xl:h-[1216px] 2xl:h-[1368px] 3xl:h-[1641px] lg:h-[972px] rounded-radius16 w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Column className="bg-gray_900 items-center justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[71%]">
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray505"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_close_3.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray505"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_3.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray505"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car Ten"
                          />
                          <Text className="statelayer20" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus One"
                          />
                        </Row>
                      </Column>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius16 w-[11%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_close_3.svg"
                            className="close_One"
                            alt="close One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray40014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car One One"
                          />
                          <Text className="statelayer20" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus One One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_400_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_close_3.svg"
                            className="close_One"
                            alt="close One One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius8 w-[14%]">
                        <Row className="bg-gray_800_28 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car Two One"
                          />
                          <Text className="statelayer20" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Two One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius16 w-[12%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_402 border-solid items-center rounded-radius16 w-[14%]">
                        <Row className="bg-gray_800_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer21" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_close_3.svg"
                            className="close_One"
                            alt="close Two One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs1 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_close_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_800_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Three"
                            alt="car Three One"
                          />
                          <Text className="statelayer20" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car_Three"
                            alt="plus Three One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius16 shadow-bs1 w-[12%]">
                        <Row className="bg-gray_800_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer22" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius16 shadow-bs1 w-[14%]">
                        <Row className="bg-gray_800_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillGray402"
                          ></Button>
                          <Text className="statelayer22" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_close_3.svg"
                            className="close_Seven"
                            alt="close Three One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray804"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        rightIcon={
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[12px] xl:w-[8px] xl:h-[9px] xl:ml-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[21px] rounded-radius8"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray804"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_car_3.svg"
                            className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[21px] rounded-radius8"
                            alt="car"
                          />
                        }
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray804"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[14%]">
                        <Row className="items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car Four One"
                          />
                          <Text className="statelayer23" variant="body11">
                            Enabled
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Four One"
                          />
                        </Row>
                      </Column>
                      <Button
                        className="flex items-center justify-center text-center w-[11%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[8px] xl:h-[9px] xl:mr-[4px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[5px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[6px]"
                            alt="checkmark"
                          />
                        }
                        shape="CircleBorder16"
                        size="md"
                        variant="FillGray804"
                      >
                        <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                          Enabled
                        </div>
                      </Button>
                      <Column className="bg-gray_804 items-center rounded-radius16 w-[14%]">
                        <CheckBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="labeltext Thirteen One"
                          label="Enabled"
                        ></CheckBox>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[11%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-orange_100_14 items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car Five One"
                          />
                          <Text className="statelayer23" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Five One"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius16 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_101 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          size="md"
                          variant="FillOrange10014"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Hovered
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-orange_100_14 items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillOrange101"
                          ></Button>
                          <Text className="statelayer24" variant="body11">
                            Hovered
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_One"
                            alt="plus Six One"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[14%]">
                        <Row className="bg-orange_100_1e items-center justify-evenly lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car"
                            alt="car Six One"
                          />
                          <Text className="statelayer23" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car"
                            alt="plus Seven"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius16 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_101 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Focused
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius16 w-[14%]">
                        <Row className="bg-orange_100_1e items-center p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillOrange101"
                          ></Button>
                          <Text className="statelayer24" variant="body11">
                            Focused
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_One"
                            alt="plus Eight"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[9%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_56X56.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:ml-[2px] xl:w-[8px] xl:h-[9px] xl:ml-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[4px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_car_3.svg"
                              className="text-center lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="car"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs1 w-[14%]">
                        <Row className="bg-orange_100_28 items-center justify-evenly xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Three"
                            alt="car Seven One"
                          />
                          <Text className="statelayer23" variant="body11">
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="car_Three"
                            alt="plus Nine"
                          />
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[12%]">
                        <Button
                          className="flex items-center justify-center text-center w-[100%]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark_20X20.svg"
                              className="mr-[2px] bg-orange_101 text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] rounded-radius50"
                              alt="checkmark"
                            />
                          }
                          shape="CircleBorder16"
                          size="md"
                          variant="FillOrange10028"
                        >
                          <div className="bg-transparent font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] tracking-ls1">
                            Dragged
                          </div>
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius16 shadow-bs1 w-[14%]">
                        <Row className="bg-orange_100_28 items-end p-[4px] rounded-radius16 w-[100%]">
                          <Button
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] text-center xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            shape="CircleBorder13"
                            size="8xl"
                            variant="FillOrange101"
                          ></Button>
                          <Text
                            className="mb-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] statelayer24"
                            variant="body11"
                          >
                            Dragged
                          </Text>
                          <Img
                            src="images/img_plus_56X56.svg"
                            className="close_Seven"
                            alt="plus Ten"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[92%]">
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray505"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[7%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBlack9004c"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car Eight One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 shadow-bs2 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car Nine One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Sys Icon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_900 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs2 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Favicon
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_900 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs2 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile One One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Branded
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Ten One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Eleven One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Two One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Three One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_302 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Twelve One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Thirteen One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Four One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Five One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[7%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Fourteen One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_505 rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Fifteen One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Six One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_505 rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Seven One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car Sixteen One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_505 rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car Seventeen One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center car_Eight"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center car_Eight"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Eight One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center outline outline-gray_505 rounded-radius8 shadow-bs2 w-[9%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="car_Eight"
                            alt="profile Nine One"
                          />
                          <Text className="statelayer26" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300_7c tracking-ls1 w-[8%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[8%]"
                        size="md"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_4.svg"
                            className="profile1"
                            alt="car Eighteen One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center outline outline-gray_505 rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_4.svg"
                            className="profile1"
                            alt="car Nineteen One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Button
                            className="text-center profile1"
                            size="8xl"
                            variant="FillWhiteA701"
                          ></Button>
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Ten One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center outline outline-gray_505 rounded-radius8 w-[9%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_profile.svg"
                            className="profile1"
                            alt="profile Eleven One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                    <Column className="items-center justify-start w-[99%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineGray505"
                        >
                          Enabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineBlack9004c"
                        >
                          Enabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_402"
                          name="Styleunselecte One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_1.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray505"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[8%]"
                          placeholderClassName="text-gray_402"
                          name="Styleunselecte One One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icons02_1.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c"
                        ></SelectBox>
                        <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car Twenty One"
                            />
                            <Text className="statelayer21" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentyOne One"
                            />
                            <Text className="statelayer21" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_402"
                          name="Styleunselecte Two One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_3.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray505"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_402"
                          name="Styleunselecte Three One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_3.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray40014"
                          >
                            Hovered
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer One One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray40014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentyTwo One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentyThree One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Two One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center outline outline-gray_505 shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Three One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray80014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_302 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray4001e"
                          >
                            Focused
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_302 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Four One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Five One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentyFour One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentyFive One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Six One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Seven One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray8001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray4001e"
                          >
                            Pressed
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Eight One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs2 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Nine One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillGray4001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentySix One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="profile1"
                              alt="car TwentySeven One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Ten One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center outline outline-gray_505 shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Eleven One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="border border-gray_505 border-solid items-center shadow-bs6 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs6 w-[7%]">
                          <Button
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray40028"
                          >
                            Dragged
                          </Button>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs6 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Twelve One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs6 w-[8%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_402 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_402"
                            name="statelayer Thirteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_icons02_1.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray40028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="car_Eight"
                              alt="car TwentyEight One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_3.svg"
                              className="car_Eight"
                              alt="car TwentyNine One"
                            />
                            <Text className="statelayer26" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Fourteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_900 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[100%]"
                            placeholderClassName="text-gray_302"
                            name="statelayer Fifteen One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_car_3.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="car"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillGray80028"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_302 tracking-ls1 w-[7%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineGray3001e"
                        >
                          Disabled
                        </Button>
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[7%]"
                          size="md"
                          variant="FillGray3001e"
                        >
                          Disabled
                        </Button>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Four One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[9%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Five One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_4.svg"
                              className="profile1"
                              alt="car Thirty One"
                            />
                            <Text className="statelayer27" variant="body11">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[9%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_car_4.svg"
                              className="profile1"
                              alt="car ThirtyOne One"
                            />
                            <Text className="statelayer27" variant="body11">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Six One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleunselecte Seven One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_car_4.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="car"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Three One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Four One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_101"
                          name="Styleselected One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray804"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_101"
                          name="Styleselected One One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c1_2"
                        ></SelectBox>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Five One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Six One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Enabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_101"
                          name="Styleselected Two One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray804"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[10%]"
                          placeholderClassName="text-orange_101"
                          name="Styleselected Three One"
                          placeholder="Enabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[30px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[38px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[42px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[51px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon_18X18.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="OutlineBlack9004c1_2"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Seven One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Eight One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Sixteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Seventeen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Nine One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Ten One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Hovered
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Eighteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Nineteen One"
                            placeholder="Hovered"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange10014"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Eleven One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Twelve One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Twenty One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyOne One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Thirteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Fourteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Focused
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyTwo One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyThree One"
                            placeholder="Focused"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Fifteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Sixteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyFour One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyFive One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Seventeen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[8%]">
                          <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="profile1"
                              alt="checkmark Eighteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Pressed
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentySix One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs2 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentySeven One"
                            placeholder="Pressed"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="FillOrange1001e"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark Nineteen One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark Twenty One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyEight One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer TwentyNine One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentyOne One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs6 w-[8%]">
                          <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_18X18.svg"
                              className="car_Eight"
                              alt="checkmark TwentyTwo One"
                            />
                            <Text className="statelayer24" variant="body11">
                              Dragged
                            </Text>
                          </Row>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer Thirty One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                        <Column className="bg-gray_804 items-center shadow-bs6 w-[10%]">
                          <SelectBox
                            className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-orange_101 tracking-ls1 w-[100%]"
                            placeholderClassName="text-orange_101"
                            name="statelayer ThirtyOne One"
                            placeholder="Dragged"
                            isSearchable={false}
                            isMulti={false}
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  src="images/img_checkmark_18X18.svg"
                                  className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                  alt="checkmark"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            indicator={
                              <Img
                                src="images/img_icon_18X18.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillOrange10028"
                          ></SelectBox>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Row className="bg-gray_300_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[8%]">
                          <Img
                            src="images/img_checkmark_7.svg"
                            className="profile1"
                            alt="checkmark TwentyThree One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_7.svg"
                              className="profile1"
                              alt="checkmark TwentyFour One"
                            />
                            <Text className="statelayer27" variant="body11">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleselected Four One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_7.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="statelayer ThirtyTwo"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_7.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="lg:w-[6px] lg:h-[7px] lg:mr-[2px] xl:w-[8px] xl:h-[9px] xl:mr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[4px]"
                              alt="icon"
                            />
                          }
                          variant="FillGray3001e"
                        ></SelectBox>
                        <Row className="bg-gray_300_1e items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[8%]">
                          <Img
                            src="images/img_checkmark_7.svg"
                            className="profile1"
                            alt="checkmark TwentyFive One"
                          />
                          <Text className="statelayer28" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                        <Column className="bg-gray_300_1e items-center rounded-radius8 w-[8%]">
                          <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_checkmark_7.svg"
                              className="profile1"
                              alt="checkmark TwentySix One"
                            />
                            <Text className="statelayer27" variant="body11">
                              Disabled
                            </Text>
                          </Row>
                        </Column>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_302 tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_302"
                          name="Styleselected Five One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_7.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                        <SelectBox
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_300_7c tracking-ls1 w-[10%]"
                          placeholderClassName="text-gray_300_7c"
                          name="Styleselected Six One"
                          placeholder="Disabled"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_checkmark_7.svg"
                                className="lg:w-[6px] lg:h-[7px] lg:mr-[32px] lg:pl-[2px] lg:pr-[12px] xl:w-[8px] xl:h-[9px] xl:mr-[40px] xl:pl-[3px] xl:pr-[15px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[45px] 2xl:pl-[4px] 2xl:pr-[17px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[54px] 3xl:pl-[4px] 3xl:pr-[21px] rounded-radius8"
                                alt="checkmark"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              className="mr-[0] lg:w-[6px] lg:h-[7px] lg:pl-[12px] lg:pr-[2px] xl:w-[8px] xl:h-[9px] xl:pl-[15px] xl:pr-[3px] 2xl:w-[9px] 2xl:h-[10px] 2xl:pl-[17px] 2xl:pr-[4px] 3xl:w-[10px] 3xl:h-[11px] 3xl:pl-[21px] 3xl:pr-[4px] rounded-radius8"
                              alt="icon"
                            />
                          }
                          shape="RoundedBorder8"
                          variant="FillGray3001e"
                        ></SelectBox>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-gray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[46%]">
                  <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                    <Row className="items-center justify-between w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray505"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[16%]">
                        <Column className="items-center justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] rounded-radius8 shadow-bs2 w-[100%]">
                          <Text className="statelayer29" variant="body11">
                            Enabled
                          </Text>
                        </Column>
                      </Column>
                      <Column className="border border-gray_505 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyTwo One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 shadow-bs2 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyThree One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyFour One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="bg-gray_800_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyFive One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_302 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_302 border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtySix One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtySeven One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray8001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyEight One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="bg-gray_800_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car ThirtyNine One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_402 tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray80028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_900 border border-gray_505 border-solid items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car Forty One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_900 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-gray_800_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car FortyOne One"
                          />
                          <Text className="statelayer21" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-gray_300_7c tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="border border-gray_300_1e border-solid items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_4.svg"
                            className="profile1"
                            alt="car FortyTwo One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Row className="bg-gray_300_1e items-center justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[20%]">
                        <Img
                          src="images/img_car_4.svg"
                          className="profile1"
                          alt="car FortyThree One"
                        />
                        <Text className="statelayer28" variant="body11">
                          Disabled
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray804"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center text-orange_101 tracking-ls1 w-[16%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineBlack9004c1_2"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortyFour One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortyFive One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10014"
                        >
                          Hovered
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[19%]">
                        <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortySix One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="bg-orange_100_14 items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortySeven One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Hovered
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          Focused
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[20%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortyEight One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[20%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FortyNine One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Focused
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs2 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange1001e"
                        >
                          Pressed
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 w-[19%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car Fifty One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs2 w-[19%]">
                        <Row className="bg-orange_100_1e items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="profile1"
                            alt="car FiftyOne One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Pressed
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center shadow-bs1 w-[16%]">
                        <Button
                          className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[100%]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange10028"
                        >
                          Dragged
                        </Button>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car FiftyTwo One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_804 items-center rounded-radius8 shadow-bs1 w-[20%]">
                        <Row className="bg-orange_100_28 items-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_3.svg"
                            className="car_Eight"
                            alt="car FiftyThree One"
                          />
                          <Text className="statelayer24" variant="body11">
                            Dragged
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-center tracking-ls1 w-[17%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray3001e"
                      >
                        Disabled
                      </Button>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_4.svg"
                            className="profile1"
                            alt="car FiftyFour One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="bg-gray_300_1e items-center rounded-radius8 w-[20%]">
                        <Row className="items-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_car_4.svg"
                            className="profile1"
                            alt="car FiftyFive One"
                          />
                          <Text className="statelayer27" variant="body11">
                            Disabled
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[95%]">
              <Column className="justify-start w-[100%]">
                <Text className="columnprimary" variant="body10">
                  Input chips
                </Text>
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] w-[66%]">
                  <Text className="Sublabel_One1" variant="body12">
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & trailing icon
                  </Text>
                  <Text
                    className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] Sublabel_One1"
                    variant="body12"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] text-center w-[13%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & avatar
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] text-center w-[10%] rowsublabel1"
                    variant="body12"
                  >
                    Label, avatar & trailing icon
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[198px] xl:mt-[247px] 2xl:mt-[278px] 3xl:mt-[334px] columnprimary"
                  variant="body10"
                >
                  Assist chips
                </Text>
                <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[90%]">
                  <Text className="Sublabel_One1" variant="body12">
                    Label only
                  </Text>
                  <Text
                    className="lg:ml-[16px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] Sublabel_One1"
                    variant="body12"
                  >
                    Label only - elevated
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & favicon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] mb-[3px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] text-center w-[8%] rowsublabel1"
                    variant="body12"
                  >
                    Label & favicon - elevated
                  </Text>
                  <Text
                    className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & branded icon
                  </Text>
                  <Text
                    className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] mb-[3px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] text-center w-[11%] rowsublabel1"
                    variant="body12"
                  >
                    Label & branded icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[155px] xl:mt-[194px] 2xl:mt-[218px] 3xl:mt-[261px] columnprimary"
                  variant="body10"
                >
                  Filter chips
                </Text>
                <Row className="items-start lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] mt-[1px] w-[97%]">
                  <Text className="Sublabel_One1" variant="body12">
                    Label
                  </Text>
                  <Text
                    className="lg:ml-[34px] xl:ml-[43px] 2xl:ml-[48px] 3xl:ml-[58px] Sublabel_One1"
                    variant="body12"
                  >
                    Label - elevated
                  </Text>
                  <Text
                    className="lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & Iconted
                  </Text>
                  <Text
                    className="lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] Sublabel_One1"
                    variant="body12"
                  >
                    Label & Icon - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] text-center w-[5%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon & label
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] text-center w-[7%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon & label - elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] text-center w-[8%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[19px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] text-center w-[11%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon, label <br />& trailing icon - elevated
                  </Text>
                </Row>
                <Text
                  className="lg:mt-[275px] xl:mt-[344px] 2xl:mt-[388px] 3xl:mt-[465px] columnprimary"
                  variant="body10"
                >
                  Suggestion chips
                </Text>
                <Row className="items-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[41%]">
                  <Text className="Sublabel_One1" variant="body12">
                    Outlined
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[43px] 3xl:ml-[52px] Sublabel_One1"
                    variant="body12"
                  >
                    Elevated
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] text-center w-[22%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon & label
                    <br />
                    Outlined
                  </Text>
                  <Text
                    className="lg:leading-[5px] xl:leading-[7px] 2xl:leading-[8px] 3xl:leading-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-center w-[22%] rowsublabel1"
                    variant="body12"
                  >
                    Leading icon & label <br />
                    Elevated
                  </Text>
                </Row>
              </Column>
            </Column>
          </Stack>
        </List>
      </Column>
    </>
  );
};

export default ChipsPage;
