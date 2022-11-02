import React from "react";

import { Column, Img, Text, List, Row, Stack, Button } from "components";

const ButtonsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[100%]">
          <Column className="justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[25px] xl:h-[32px] 2xl:h-[35px] 3xl:h-[42px] lg:w-[24px] xl:w-[31px] 2xl:w-[34px] 3xl:w-[41px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] xl:pr-[3px] lg:pr-[3px] 2xl:pr-[4px] 3xl:pr-[5px] xl:pt-[3px] lg:pt-[3px] 2xl:pt-[4px] 3xl:pt-[5px] w-[100%]">
              <Text
                className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 2xl:mr-[1106px] 3xl:mr-[1327px] lg:mr-[786px] xl:mr-[983px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Buttons
              </Text>
              <Column className="justify-start lg:mr-[459px] xl:mr-[574px] 2xl:mr-[646px] 3xl:mr-[776px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[52%]">
                <a
                  href={"http://m3.material.io/components/buttons/overview"}
                  target="_blank"
                  className="font-normal not-italic lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Buttons help people take action, such as sending an email,
                  sharing a document, or liking a comment.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[24px] xl:gap-[31px] 2xl:gap-[34px] 3xl:gap-[41px] grid grid-cols-2 min-h-[auto] lg:p-[43px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Row className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[96%]">
                <Stack className="lg:h-[436px] xl:h-[545px] 2xl:h-[613px] 3xl:h-[736px] w-[18%]">
                  <Column className="absolute bottom-[8%] items-center justify-start top-[5%] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime900"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-lime_900 items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                        <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                          <Img
                            src="images/img_plus_18X18.svg"
                            className="plus"
                            alt="plus"
                          />
                          <Text className="statelayer" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-lime_900 tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-center w-[100%]"
                        shape="RoundedBorder19"
                        variant="OutlineGray6001_2"
                      ></Button>
                      <Column className="items-center justify-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius20 w-[64%]">
                        <Text className="Configurationt" variant="body11">
                          Enabled
                        </Text>
                      </Column>
                      <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[90%]">
                        <Img
                          src="images/img_plus_1.svg"
                          className="plus_Two"
                          alt="plus Two"
                        />
                        <Text
                          className="lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] columnonprimary"
                          variant="body11"
                        >
                          Enabled
                        </Text>
                      </Row>
                      <Button
                        className="font-medium lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-lime_900 tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="OutlineBlack90026"
                      >
                        Enabled
                      </Button>
                      <Button
                        className="xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[100%]"
                        shape="RoundedBorder19"
                        variant="OutlineBlack90026"
                      ></Button>
                    </Column>
                  </Column>
                  <Column className="absolute justify-start left-[0] w-[91%]">
                    <Text className="columnbackground" variant="body11">
                      Filled buttons
                    </Text>
                    <Text
                      className="xl:mt-[123px] 2xl:mt-[138px] 3xl:mt-[166px] lg:mt-[98px] columnbackground"
                      variant="body11"
                    >
                      Outlined buttons
                    </Text>
                    <Text
                      className="xl:mt-[121px] 2xl:mt-[137px] 3xl:mt-[164px] lg:mt-[97px] columnbackground"
                      variant="body11"
                    >
                      Text buttons
                    </Text>
                    <Text
                      className="xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[165px] lg:mt-[97px] columnbackground"
                      variant="body11"
                    >
                      Elevated buttons
                    </Text>
                    <Text
                      className="xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[165px] lg:mt-[97px] columnbackground"
                      variant="body11"
                    >
                      Tonal buttons
                    </Text>
                  </Column>
                </Stack>
                <Column className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[81%]">
                  <Row className="items-center w-[93%]">
                    <Column className="bg-lime_900 items-center shadow-bs w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillWhiteA70014"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="bg-lime_900 items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillWhiteA7001e"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="bg-lime_900 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillWhiteA7001e"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[21%]"
                      size="xl"
                      variant="FillGray9001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Column className="bg-lime_900 items-center rounded-radius20 shadow-bs w-[23%]">
                      <Row className="bg-white_A700_14 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_18X18.svg"
                          className="plus"
                          alt="plus Four"
                        />
                        <Text className="statelayer" variant="body11">
                          Hovered
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-lime_900 items-center rounded-radius20 w-[23%]">
                      <Row className="bg-white_A700_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_18X18.svg"
                          className="plus"
                          alt="plus Five"
                        />
                        <Text className="statelayer" variant="body11">
                          Focused
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-lime_900 items-center rounded-radius20 w-[23%]">
                      <Row className="bg-white_A700_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_18X18.svg"
                          className="plus"
                          alt="plus Six"
                        />
                        <Text className="statelayer" variant="body11">
                          Pressed
                        </Text>
                      </Row>
                    </Column>
                    <Row className="bg-gray_900_1e items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[23%]">
                      <Img
                        src="images/img_close.svg"
                        className="plus"
                        alt="close"
                      />
                      <Text className="statelayer2" variant="body11">
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[93%]">
                    <Column className="border border-gray_600 border-solid items-center rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime90014"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="border border-lime_900 border-solid items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime9001e"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="border border-gray_600 border-solid items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime9001e"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[21%]"
                      shape="RoundedBorder19"
                      size="xl"
                      variant="OutlineGray9001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineGray6001_2"
                    ></Button>
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineLime900"
                    ></Button>
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineGray6001_2"
                    ></Button>
                    <Column className="border border-gray_900_1e border-solid items-center rounded-radius20 w-[23%]">
                      <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_close.svg"
                          className="plus"
                          alt="close One"
                        />
                        <Text
                          className="font-medium lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] text-gray_900_7c tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Disabled
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[88%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                      size="xl"
                      variant="FillLime90014"
                    >
                      Hovered
                    </Button>
                    <Button
                      className="font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                      size="xl"
                      variant="FillLime9001e"
                    >
                      Focused
                    </Button>
                    <Button
                      className="font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[16%]"
                      size="xl"
                      variant="FillLime9001e"
                    >
                      Pressed
                    </Button>
                    <Column className="items-center lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius20 w-[17%]">
                      <Text
                        className="font-medium my-[1px] text-gray_900_7c tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Disabled
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[97%]">
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_1.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillLime90014"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Hovered
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_1.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillLime9001e"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Focused
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_1.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillLime9001e"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Pressed
                      </div>
                    </Button>
                    <Row className="items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[22%]">
                      <Img
                        src="images/img_close.svg"
                        className="plus_Two"
                        alt="close Two"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] 3xl:mr-[5px] text-gray_900_7c tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[93%]">
                    <Column className="bg-white_A700 items-center shadow-bs5 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime90014"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="bg-white_A700 items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] shadow-bs w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime9001e"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="bg-white_A700 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] shadow-bs w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillLime9001e"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[21%]"
                      size="xl"
                      variant="FillGray9001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineBlack900261_2"
                    ></Button>
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineBlack90026"
                    ></Button>
                    <Button
                      className="text-center w-[23%]"
                      shape="RoundedBorder19"
                      variant="OutlineBlack90026"
                    ></Button>
                    <Row className="bg-gray_900_1e items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[23%]">
                      <Img
                        src="images/img_close.svg"
                        className="plus"
                        alt="close Three"
                      />
                      <Text className="statelayer2" variant="body11">
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Row>
              <Row className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[91%]">
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[16%]"
                  shape="RoundedBorder19"
                  size="xl"
                  variant="FillOrange101"
                >
                  Enabled
                </Button>
                <Column className="bg-orange_101 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] shadow-bs w-[16%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillGray90014"
                  >
                    Hovered
                  </Button>
                </Column>
                <Column className="bg-orange_101 items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius20 w-[17%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillGray9001e1"
                  >
                    Focused
                  </Button>
                </Column>
                <Column className="bg-orange_101 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[16%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillGray9001e1"
                  >
                    Pressed
                  </Button>
                </Column>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                  size="xl"
                  variant="FillGray9001e"
                >
                  Disabled
                </Button>
              </Row>
              <Row className="items-center 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[96%]">
                <Row className="items-center justify-between w-[79%]">
                  <Column className="bg-orange_101 items-center rounded-radius20 w-[23%]">
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus.svg"
                        className="plus"
                        alt="plus Thirteen"
                      />
                      <Text className="statelayer5" variant="body11">
                        Enabled
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-orange_101 items-center rounded-radius20 shadow-bs w-[23%]">
                    <Row className="bg-gray_900_14 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus.svg"
                        className="plus"
                        alt="plus Fourteen"
                      />
                      <Text className="statelayer5" variant="body11">
                        Hovered
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-orange_101 items-center rounded-radius20 w-[23%]">
                    <Row className="bg-gray_900_1e1 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus.svg"
                        className="plus"
                        alt="plus Fifteen"
                      />
                      <Text className="statelayer5" variant="body11">
                        Focused
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-orange_101 items-center rounded-radius20 w-[23%]">
                    <Row className="bg-gray_900_1e1 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus.svg"
                        className="plus"
                        alt="plus Sixteen"
                      />
                      <Text className="statelayer5" variant="body11">
                        Pressed
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="bg-gray_900_1e items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[19%]">
                  <Img
                    src="images/img_close.svg"
                    className="plus"
                    alt="close Four"
                  />
                  <Text className="statelayer2" variant="body11">
                    Disabled
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-gray_900 justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Row className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[96%]">
                <Stack className="lg:h-[435px] xl:h-[544px] 2xl:h-[612px] 3xl:h-[735px] w-[18%]">
                  <Column className="absolute bottom-[8%] items-center justify-start top-[5%] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_905 tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange301"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-orange_301 items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                        <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                          <Img
                            src="images/img_plus_3.svg"
                            className="plus"
                            alt="plus One"
                          />
                          <Text className="statelayer6" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-orange_301 tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="OutlineGray505"
                      >
                        Enabled
                      </Button>
                      <Column className="border border-gray_505 border-solid items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                        <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                          <Img
                            src="images/img_plus_4.svg"
                            className="plus"
                            alt="plus One One"
                          />
                          <Text className="statelayer7" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius20 w-[64%]">
                        <Text className="Configurationt2" variant="body11">
                          Enabled
                        </Text>
                      </Column>
                      <Row className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[90%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus_Two"
                          alt="plus Two One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Enabled
                        </Text>
                      </Row>
                      <Button
                        className="font-medium lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-orange_301 tracking-ls1 w-[85%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="OutlineBlack9004c"
                      >
                        Enabled
                      </Button>
                      <Column className="bg-gray_900 items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius20 shadow-bs2 w-[100%]">
                        <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                          <Img
                            src="images/img_plus_4.svg"
                            className="plus"
                            alt="plus Three One"
                          />
                          <Text className="statelayer7" variant="body11">
                            Enabled
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="absolute justify-start left-[0] w-[91%]">
                    <Text className="columnprimary" variant="body11">
                      Filled buttons
                    </Text>
                    <Text className="Label_One_One" variant="body11">
                      Outlined buttons
                    </Text>
                    <Text className="Label_One_One" variant="body11">
                      Text buttons
                    </Text>
                    <Text className="Label_One_One" variant="body11">
                      Elevated buttons
                    </Text>
                    <Text
                      className="xl:mt-[121px] 2xl:mt-[137px] 3xl:mt-[164px] lg:mt-[97px] columnprimary"
                      variant="body11"
                    >
                      Tonal buttons
                    </Text>
                  </Column>
                </Stack>
                <Column className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[81%]">
                  <Row className="items-center w-[92%]">
                    <Column className="bg-orange_301 items-center shadow-bs2 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillGray90015"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="bg-orange_301 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillGray9001e2"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="bg-orange_301 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillGray9001e2"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[21%]"
                      size="xl"
                      variant="FillGray3001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Column className="bg-orange_301 items-center rounded-radius20 shadow-bs2 w-[23%]">
                      <Row className="bg-gray_900_15 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_3.svg"
                          className="plus"
                          alt="plus Four One"
                        />
                        <Text className="statelayer6" variant="body11">
                          Hovered
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-orange_301 items-center rounded-radius20 w-[23%]">
                      <Row className="bg-gray_900_1e2 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_3.svg"
                          className="plus"
                          alt="plus Five One"
                        />
                        <Text className="statelayer6" variant="body11">
                          Focused
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-orange_301 items-center rounded-radius20 w-[22%]">
                      <Row className="bg-gray_900_1e2 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_3.svg"
                          className="plus"
                          alt="plus Six One"
                        />
                        <Text className="statelayer6" variant="body11">
                          Pressed
                        </Text>
                      </Row>
                    </Column>
                    <Row className="bg-gray_300_1e items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[23%]">
                      <Img
                        src="images/img_plus_5.svg"
                        className="plus"
                        alt="plus Seven One"
                      />
                      <Text className="statelayer8" variant="body11">
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[92%]">
                    <Column className="border border-gray_505 border-solid items-center rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange30014"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="border border-orange_301 border-solid items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius20 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange3001e"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="border border-gray_505 border-solid items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange3001e"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_300_7c tracking-ls1 w-[21%]"
                      shape="RoundedBorder19"
                      size="xl"
                      variant="OutlineGray3001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Column className="border border-gray_505 border-solid items-center rounded-radius20 w-[23%]">
                      <Row className="bg-orange_300_14 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Eight One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Hovered
                        </Text>
                      </Row>
                    </Column>
                    <Column className="border border-orange_301 border-solid items-center rounded-radius20 w-[23%]">
                      <Row className="bg-orange_300_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Nine One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Focused
                        </Text>
                      </Row>
                    </Column>
                    <Column className="border border-gray_505 border-solid items-center rounded-radius20 w-[22%]">
                      <Row className="bg-orange_300_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Ten One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Pressed
                        </Text>
                      </Row>
                    </Column>
                    <Column className="border border-gray_300_1e border-solid items-center rounded-radius20 w-[23%]">
                      <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_5.svg"
                          className="plus"
                          alt="plus Eleven One"
                        />
                        <Text
                          className="font-medium lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] text-gray_300_7c tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Disabled
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[88%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                      size="xl"
                      variant="FillOrange30014"
                    >
                      Hovered
                    </Button>
                    <Button
                      className="font-medium lg:ml-[32px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                      size="xl"
                      variant="FillOrange3001e"
                    >
                      Focused
                    </Button>
                    <Button
                      className="font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[16%]"
                      size="xl"
                      variant="FillOrange3001e"
                    >
                      Pressed
                    </Button>
                    <Column className="items-center lg:ml-[31px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius20 w-[17%]">
                      <Text
                        className="font-medium my-[1px] text-gray_300_7c tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Disabled
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[97%]">
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_4.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillOrange30014"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Hovered
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_4.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillOrange3001e"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Focused
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center w-[21%]"
                      leftIcon={
                        <Img
                          src="images/img_plus_4.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[6px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[8px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                      variant="FillOrange3001e"
                    >
                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] tracking-ls1">
                        Pressed
                      </div>
                    </Button>
                    <Row className="items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[21%]">
                      <Img
                        src="images/img_plus_5.svg"
                        className="plus_Two"
                        alt="plus Twelve One"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] 3xl:mr-[5px] text-gray_300_7c tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:mt-[47px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[92%]">
                    <Column className="bg-gray_900 items-center shadow-bs2 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange30014"
                      >
                        Hovered
                      </Button>
                    </Column>
                    <Column className="bg-gray_900 items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] shadow-bs2 w-[21%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange3001e"
                      >
                        Focused
                      </Button>
                    </Column>
                    <Column className="bg-gray_900 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] shadow-bs2 w-[20%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder19"
                        size="xl"
                        variant="FillOrange3001e"
                      >
                        Pressed
                      </Button>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[21%]"
                      size="xl"
                      variant="FillGray3001e"
                    >
                      Disabled
                    </Button>
                  </Row>
                  <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Column className="bg-gray_900 items-center rounded-radius20 shadow-bs2 w-[23%]">
                      <Row className="bg-orange_300_14 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Thirteen One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Hovered
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-gray_900 items-center rounded-radius20 shadow-bs2 w-[23%]">
                      <Row className="bg-orange_300_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Fourteen One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Focused
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-gray_900 items-center rounded-radius20 shadow-bs2 w-[22%]">
                      <Row className="bg-orange_300_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                        <Img
                          src="images/img_plus_4.svg"
                          className="plus"
                          alt="plus Fifteen One"
                        />
                        <Text className="statelayer7" variant="body11">
                          Pressed
                        </Text>
                      </Row>
                    </Column>
                    <Row className="bg-gray_300_1e items-center justify-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[23%]">
                      <Img
                        src="images/img_plus_5.svg"
                        className="plus"
                        alt="plus Sixteen One"
                      />
                      <Text className="statelayer8" variant="body11">
                        Disabled
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Row>
              <Row className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[90%]">
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[16%]"
                  shape="RoundedBorder19"
                  size="xl"
                  variant="FillGray804"
                >
                  Enabled
                </Button>
                <Column className="bg-gray_804 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] shadow-bs2 w-[16%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillOrange10014"
                  >
                    Hovered
                  </Button>
                </Column>
                <Column className="bg-gray_804 items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius20 w-[17%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillOrange1001e"
                  >
                    Focused
                  </Button>
                </Column>
                <Column className="bg-gray_804 items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius20 w-[16%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[100%]"
                    shape="RoundedBorder19"
                    size="xl"
                    variant="FillOrange1001e"
                  >
                    Pressed
                  </Button>
                </Column>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[17%]"
                  size="xl"
                  variant="FillGray3001e"
                >
                  Disabled
                </Button>
              </Row>
              <Row className="items-center 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[96%]">
                <Row className="items-center justify-between w-[79%]">
                  <Column className="bg-gray_804 items-center rounded-radius20 w-[22%]">
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus_56X56.svg"
                        className="plus"
                        alt="plus Seventeen"
                      />
                      <Text className="statelayer11" variant="body11">
                        Enabled
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_804 items-center rounded-radius20 shadow-bs2 w-[23%]">
                    <Row className="bg-orange_100_14 items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus_56X56.svg"
                        className="plus"
                        alt="plus Eighteen"
                      />
                      <Text className="statelayer11" variant="body11">
                        Hovered
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_804 items-center rounded-radius20 w-[23%]">
                    <Row className="bg-orange_100_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus_56X56.svg"
                        className="plus"
                        alt="plus Nineteen"
                      />
                      <Text className="statelayer11" variant="body11">
                        Focused
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_804 items-center rounded-radius20 w-[23%]">
                    <Row className="bg-orange_100_1e items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_plus_56X56.svg"
                        className="plus"
                        alt="plus Twenty"
                      />
                      <Text className="statelayer11" variant="body11">
                        Pressed
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="bg-gray_300_1e items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[19%]">
                  <Img
                    src="images/img_plus_5.svg"
                    className="plus"
                    alt="plus TwentyOne"
                  />
                  <Text className="statelayer8" variant="body11">
                    Disabled
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default ButtonsPage;
