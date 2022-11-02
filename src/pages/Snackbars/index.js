import React from "react";

import { Column, Img, Text, List, Row, Input, Button } from "components";

const SnackbarsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[29px] xl:p-[37px] 2xl:p-[41px] 3xl:p-[49px] w-[100%]">
          <Column className="justify-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pr-[4px] pt-[4px] w-[100%]">
              <Text className="Componentname3" as="h1" variant="h1">
                Snackbars
              </Text>
              <a
                href={"https://m3.material.io/components/snackbar/overview"}
                target="_blank"
                className="font-normal lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Snackbars provide brief messages about app processes at the
                bottom of the screen.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-2 min-h-[auto] lg:p-[39px] xl:p-[49px] 2xl:p-[56px] 3xl:p-[67px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius16 w-[100%]">
              <Row className="items-center w-[99%]">
                <Input
                  className="font-normal not-italic p-[0] 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] placeholder:text-deep_orange_50 text-deep_orange_50 tracking-ls1 w-[100%]"
                  wrapClassName="w-[49%]"
                  name="ActionFalseC"
                  placeholder="Single-line snackbar"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack9004c"
                ></Input>
                <Button
                  className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[11px] text-center w-[49%] xl:ml-[14px]"
                  rightIcon={
                    <Img
                      src="images/img_close_6.svg"
                      className="text-center lg:w-[13px] lg:h-[14px] lg:ml-[10px] xl:w-[17px] xl:h-[18px] xl:ml-[13px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[15px] 3xl:w-[23px] 3xl:h-[24px] 3xl:ml-[18px]"
                      alt="close"
                    />
                  }
                  shape="CircleBorder2"
                  size="3xl"
                  variant="OutlineBlack9004c1_2"
                >
                  <div className="bg-transparent font-normal not-italic 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-deep_orange_50 tracking-ls1">
                    Single-line snackbar with close affordance
                  </div>
                </Button>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Row className="bg-bluegray_900 items-center justify-between p-[4px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-deep_orange_50 headline"
                    variant="body11"
                  >
                    Single-line snackbar with action
                  </Text>
                  <Column className="items-center mr-[4px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[20%]">
                    <Text className="Configurationt2" variant="body11">
                      Action
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-bluegray_900 items-center justify-end lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[15px] lg:pl-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="text-deep_orange_50 headline"
                    variant="body11"
                  >
                    Single-line snackbar with action
                  </Text>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[35%]">
                    <Column className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[58%]">
                      <Text className="Configurationt2" variant="body11">
                        Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Column className="bg-bluegray_900 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] ml-[2px] not-italic text-deep_orange_50 tracking-ls1 w-[37%]"
                    variant="body11"
                  >
                    Two-line snackbar <br />
                    without action
                  </Text>
                </Column>
                <Row className="bg-bluegray_900 items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[4px] not-italic text-deep_orange_50 tracking-ls1 w-[44%]"
                    variant="body11"
                  >
                    Two-line snackbar with <br />
                    close affordance
                  </Text>
                  <Button
                    className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Row className="bg-bluegray_900 items-center justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic text-deep_orange_50 tracking-ls1 w-[35%]"
                    variant="body11"
                  >
                    Two-line snackbar <br />
                    with action
                  </Text>
                  <Column className="items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[20%]">
                    <Text className="Configurationt2" variant="body11">
                      Action
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-bluegray_900 items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[4px] not-italic text-deep_orange_50 tracking-ls1 w-[54%]"
                    variant="body11"
                  >
                    Two-line snackbar with <br />
                    action and close affordance
                  </Text>
                  <Row className="items-center justify-evenly w-[34%]">
                    <Column className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[58%]">
                      <Text className="Configurationt2" variant="body11">
                        Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
              </Row>
              <Row className="items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Column className="bg-bluegray_900 items-center rounded-radius4 shadow-bs1 w-[49%]">
                  <Column className="justify-end p-[4px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-deep_orange_50 tracking-ls1 w-[44%]"
                      variant="body11"
                    >
                      Two-line snackbar with <br />
                      longer action
                    </Text>
                  </Column>
                  <Column className="items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]">
                    <Text
                      className="lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] TabContents2"
                      variant="body11"
                    >
                      Longer Action
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-bluegray_900 items-end lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Column className="justify-end lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-deep_orange_50 tracking-ls1 w-[58%]"
                      variant="body11"
                    >
                      Two-line snackbar with longer <br />
                      action and close affordance
                    </Text>
                  </Column>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[47%]">
                    <Column className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius20 w-[70%]">
                      <Text
                        className="mt-[4px] columnonprimary_one_one"
                        variant="body11"
                      >
                        Longer Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius16 w-[100%]">
              <Row className="items-center w-[99%]">
                <Input
                  className="font-normal not-italic p-[0] 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 tracking-ls1 w-[100%]"
                  wrapClassName="w-[49%]"
                  name="ActionFalseC One"
                  placeholder="Single-line snackbar"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack9004c1_2"
                ></Input>
                <Button
                  className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[11px] text-center w-[49%] xl:ml-[14px]"
                  rightIcon={
                    <Img
                      src="images/img_close_7.svg"
                      className="text-center lg:w-[13px] lg:h-[14px] lg:ml-[10px] xl:w-[17px] xl:h-[18px] xl:ml-[13px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[15px] 3xl:w-[23px] 3xl:h-[24px] 3xl:ml-[18px]"
                      alt="close"
                    />
                  }
                  shape="CircleBorder2"
                  size="3xl"
                  variant="OutlineBlack9004c1_2"
                >
                  <div className="bg-transparent font-normal not-italic 2xl:text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px] text-bluegray_900 tracking-ls1">
                    Single-line snackbar with close affordance
                  </div>
                </Button>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Row className="bg-gray_302 items-center justify-between p-[4px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-bluegray_900 headline"
                    variant="body11"
                  >
                    Single-line snackbar with action
                  </Text>
                  <Column className="items-center mr-[4px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[20%]">
                    <Text className="Configurationt" variant="body11">
                      Action
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-gray_302 items-center justify-end lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[15px] lg:pl-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text className="text-bluegray_900 headline" variant="body11">
                    Single-line snackbar with action
                  </Text>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[35%]">
                    <Column className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[58%]">
                      <Text className="Configurationt" variant="body11">
                        Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Column className="bg-gray_302 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] ml-[2px] not-italic text-bluegray_900 tracking-ls1 w-[37%]"
                    variant="body11"
                  >
                    Two-line snackbar <br />
                    without action
                  </Text>
                </Column>
                <Row className="bg-gray_302 items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[4px] not-italic text-bluegray_900 tracking-ls1 w-[44%]"
                    variant="body11"
                  >
                    Two-line snackbar with <br />
                    close affordance
                  </Text>
                  <Button
                    className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Row className="bg-gray_302 items-center justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic text-bluegray_900 tracking-ls1 w-[35%]"
                    variant="body11"
                  >
                    Two-line snackbar <br />
                    with action
                  </Text>
                  <Column className="items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[20%]">
                    <Text className="Configurationt" variant="body11">
                      Action
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-gray_302 items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Text
                    className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[4px] not-italic text-bluegray_900 tracking-ls1 w-[54%]"
                    variant="body11"
                  >
                    Two-line snackbar with <br />
                    action and close affordance
                  </Text>
                  <Row className="items-center justify-evenly w-[34%]">
                    <Column className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[58%]">
                      <Text className="Configurationt" variant="body11">
                        Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
              </Row>
              <Row className="items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                <Column className="bg-gray_302 items-center rounded-radius4 shadow-bs1 w-[49%]">
                  <Column className="justify-end p-[4px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_900 tracking-ls1 w-[44%]"
                      variant="body11"
                    >
                      Two-line snackbar with <br />
                      longer action
                    </Text>
                  </Column>
                  <Column className="items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]">
                    <Text
                      className="lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] TabContents"
                      variant="body11"
                    >
                      Longer Action
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-gray_302 items-end lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius4 shadow-bs1 w-[49%]">
                  <Column className="justify-start 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] mb-[2px] ml-[2px] not-italic text-bluegray_900 tracking-ls1 w-[61%]"
                      variant="body11"
                    >
                      Two-line snackbar with longer <br />
                      action and close affordance
                    </Text>
                  </Column>
                  <Row className="items-center justify-end ml-[auto] w-[47%]">
                    <Column className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius20 w-[70%]">
                      <Text className="OnPrimary" variant="body11">
                        Longer Action
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default SnackbarsPage;
