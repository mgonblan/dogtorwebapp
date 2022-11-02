import React from "react";

import {
  Column,
  Stack,
  Row,
  Button,
  Text,
  Line,
  Input,
  Grid,
  Img,
  List,
  SelectBox,
} from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Home1Page = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate() {
    navigate("/store");
  }

  return (
    <>
      <Column className="font-roboto items-center justify-start mx-[auto] pb-[1px] w-[100%]">
        <Stack className="lg:h-[2230px] xl:h-[2790px] 2xl:h-[3138px] 3xl:h-[3766px] w-[100%]">
          <Column className="absolute items-center justify-start top-[0] w-[100%]">
            <header className="w-[100%]">
              <Column className="bg-orange_300 items-center justify-start w-[100%]">
                <Row className="bg-white_A700 items-center justify-between p-[4px] w-[100%]">
                  <Row className="items-center justify-between my-[4px] w-[100%]">
                    <Button
                      className="bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] text-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="xl"
                    ></Button>
                    <Text
                      className="not-italic text-gray_900 w-[auto]"
                      variant="body5"
                    >
                      Dogtor
                    </Text>
                    <Button
                      className="common-pointer bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] text-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      onClick={googleSignIn}
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
              </Column>
            </header>
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Line className="bg-orange_100 h-[1px] w-[100%]" />
                <Column className="bg-orange_100 items-center justify-start lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]">
                  <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] w-[38%]">
                    <Column className="justify-end lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
                      <Column className="items-center justify-start w-[69%]">
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Explore delivery in Madrid
                        </Text>
                      </Column>
                      <Row className="items-start justify-between lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[15px] lg:pb-[9px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] w-[77%]">
                        <Stack className="bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] rounded-radius8 w-[44%]">
                          <div className="absolute bg-white_A701 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] rounded-radius8 w-[100%]"></div>
                          <Button
                            className="absolute left-[0] text-center w-[50%]"
                            shape="CustomBorderTL8"
                            variant="FillTeal500"
                          ></Button>
                          <Input
                            className="absolute font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_400 w-[100%]"
                            wrapClassName="2xl:h-[14px] 3xl:h-[17px] absolute flex lg:h-[10px] w-[43%] xl:h-[13px]"
                            name="language"
                            placeholder=""
                          ></Input>
                        </Stack>
                        <Button className="bg-transparent lg:mb-[14px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mt-[2px] text-center w-[37%]"></Button>
                      </Row>
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                        <Grid className="grid grid-cols-4 w-[60%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_icons_02.svg"
                                  className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[18px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[31px]"
                                  alt="Icons/02"
                                />
                              }
                              shape="CustomBorderTL100"
                              size="xl"
                              variant="OutlineGray600"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                                Restaurants
                              </div>
                            </Button>
                          </Column>
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[6px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[7px]"
                                  alt="Icons/02"
                                />
                              }
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1">
                                Store
                              </div>
                            </Button>
                          </Column>
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[6px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[7px]"
                                  alt="Icons/02"
                                />
                              }
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1">
                                Market
                              </div>
                            </Button>
                          </Column>
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="rounded-tl-[0] rounded-tr-[50%] rounded-bl-[0] rounded-br-[50%] text-center lg:w-[9px] lg:h-[10px] lg:mr-[18px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[31px]"
                                  alt="Icons/02"
                                />
                              }
                              shape="CustomBorderLR100"
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1">
                                Pets
                              </div>
                            </Button>
                          </Column>
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[18px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[31px]"
                                  alt="checkmark"
                                />
                              }
                              shape="CustomBorderTL100"
                              size="xl"
                              variant="OutlineGray600"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                                Pharmacy
                              </div>
                            </Button>
                          </Column>
                          <Column className="items-center justify-start w-[100%]">
                            <Button
                              className="flex items-center justify-center text-center w-[100%]"
                              leftIcon={
                                <Img
                                  src="images/img_icons_02_18X18.svg"
                                  className="rounded-tl-[0] rounded-tr-[50%] rounded-bl-[0] rounded-br-[50%] text-center lg:w-[9px] lg:h-[10px] lg:mr-[18px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[31px]"
                                  alt="Icons/02"
                                />
                              }
                              shape="CustomBorderLR100"
                              size="xl"
                              variant="OutlineGray6001_2"
                            >
                              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_900 tracking-ls1">
                                Enabled
                              </div>
                            </Button>
                          </Column>
                        </Grid>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Stack className="3xl:h-[1153px] lg:h-[683px] xl:h-[854px] 2xl:h-[961px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <div className="absolute bg-orange_100 lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] top-[0] w-[100%]"></div>
                <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:pt-[48px] xl:pt-[60px] 2xl:pt-[67px] 3xl:pt-[81px] w-[58%]">
                  <Column className="justify-start w-[100%]">
                    <Column className="items-center justify-start w-[19%]">
                      <Row className="items-start px-[3px] w-[100%]">
                        <Stack className="bg-orange_100 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius1232 w-[30%]">
                          <div className="absolute bg-orange_100 bottom-[0] lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] rounded-radius932 w-[100%]"></div>
                          <Text
                            className="absolute not-italic text-black_900 w-[auto]"
                            variant="body3"
                          >
                            Food
                          </Text>
                        </Stack>
                        <Text
                          className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic text-black_900 w-[auto]"
                          variant="body3"
                        >
                          near you
                        </Text>
                        <Button className="bg-transparent lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-center w-[4%]"></Button>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                      <Grid className="lg:gap-[14px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-3 mb-[1px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Column
                            className="common-pointer items-center justify-start rounded-radius10 shadow-bs3 w-[100%]"
                            onClick={handleNavigate}
                          >
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage: "url('images/img_frame.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  VICIO
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                              <Row className="items-start ml-[2px] py-[1px] w-[30%]">
                                <Button className="bg-transparent mt-[1px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor1"
                                  variant="body11"
                                >
                                  93%
                                </Text>
                                <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[4px] w-[31%]">
                                  <Text
                                    className="AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (500+)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_168X350.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  Kilimanjaria
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                              <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[25%]">
                                <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor2"
                                  variant="body11"
                                >
                                  96%
                                </Text>
                                <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] pr-[4px] py-[4px] w-[31%]">
                                  <Text
                                    className="AutoLayoutVer4"
                                    variant="body12"
                                  >
                                    (94)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_1.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
                                <Text
                                  className="lg:leading-[17px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] mb-[1px] not-italic text-center text-shadow-ts text-white_A701 w-[86%]"
                                  variant="body3"
                                >
                                  La Taqueria Del Alamillo
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                              <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[25%]">
                                <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor3"
                                  variant="body11"
                                >
                                  98%
                                </Text>
                                <Column className="justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] pr-[3px] py-[3px] w-[30%]">
                                  <Text
                                    className="AutoLayoutVer4"
                                    variant="body12"
                                  >
                                    (52)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_2.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  Amazonia Açaí
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                              <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[26%]">
                                <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                <Text
                                  className="font-normal lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[20px] ml-[4px] not-italic text-black_900 w-[14%]"
                                  variant="body11"
                                >
                                  91%
                                </Text>
                                <Column className="items-center justify-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[31%]">
                                  <Text
                                    className="AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (385)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_3.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  Burger King
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                              <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[26%]">
                                <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor3"
                                  variant="body11"
                                >
                                  94%
                                </Text>
                                <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[31%]">
                                  <Text
                                    className="AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (215)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[100%]">
                            <Column className="absolute bg-orange_300 justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] right-[9%] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[19%]">
                              <Text
                                className="font-normal ml-[4px] columnbecomearider"
                                variant="body10"
                              >
                                2 for 1
                              </Text>
                            </Column>
                            <Column className="absolute items-center justify-start rounded-radius10 shadow-bs3 top-[0] w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame_4.png')",
                                }}
                              >
                                <Column className="bg-gradient  items-center justify-start lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                                  <Text
                                    className="lg:leading-[17px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] not-italic text-center text-shadow-ts text-white_A701 w-[100%]"
                                    variant="body3"
                                  >
                                    La Gran Familia Mediterránea by Dani García
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                <Row className="items-start ml-[2px] py-[1px] w-[28%]">
                                  <Button className="bg-transparent mt-[1px] text-center w-[30%]"></Button>
                                  <Text
                                    className="AutoLayoutHor1"
                                    variant="body11"
                                  >
                                    86%
                                  </Text>
                                  <Column className="items-center justify-start ml-[4px] mt-[4px] w-[30%]">
                                    <Text
                                      className="AutoLayoutVer3"
                                      variant="body12"
                                    >
                                      (224)
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[100%]">
                            <Column className="absolute bg-orange_300 items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] right-[10%] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[16%]">
                              <Text className="AutoLayoutVer8" variant="body10">
                                -20%
                              </Text>
                            </Column>
                            <Column className="absolute items-center justify-start rounded-radius10 shadow-bs3 top-[0] w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame_5.png')",
                                }}
                              >
                                <Column
                                  className="bg-cover bg-repeat items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_autolayoutver.png')",
                                  }}
                                >
                                  <Text
                                    className="AutoLayoutVer2"
                                    variant="body3"
                                  >
                                    Indian Aroma
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                <Row className="items-start ml-[2px] py-[1px] w-[29%]">
                                  <Button className="bg-transparent mt-[1px] text-center w-[30%]"></Button>
                                  <Text
                                    className="AutoLayoutHor1"
                                    variant="body11"
                                  >
                                    96%
                                  </Text>
                                  <Column className="items-center justify-start ml-[4px] mt-[4px] w-[31%]">
                                    <Text
                                      className="AutoLayoutVer3"
                                      variant="body12"
                                    >
                                      (390)
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_6.png')",
                              }}
                            >
                              <Column className="bg-gradient  items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  Honest Greens
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                              <Row className="items-start ml-[2px] py-[1px] w-[27%]">
                                <Button className="bg-transparent mt-[1px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor1"
                                  variant="body11"
                                >
                                  93%
                                </Text>
                                <Column className="items-center justify-start ml-[4px] mt-[4px] w-[30%]">
                                  <Text
                                    className="AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (455)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[100%]">
                            <Column className="absolute bg-orange_300 items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] right-[9%] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[16%]">
                              <Text className="AutoLayoutVer8" variant="body10">
                                -25%
                              </Text>
                            </Column>
                            <Column className="absolute items-center justify-start rounded-radius10 shadow-bs3 top-[0] w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame_7.png')",
                                }}
                              >
                                <Column className="bg-gradient  items-center justify-center lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] w-[100%]">
                                  <Text
                                    className="lg:my-[22px] xl:my-[28px] 2xl:my-[31px] 3xl:my-[37px] not-italic text-shadow-ts text-white_A701 w-[auto]"
                                    variant="body3"
                                  >
                                    La Pasta Di Nonna Rosa
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                <Row className="items-start ml-[2px] py-[1px] w-[28%]">
                                  <Button className="bg-transparent mt-[1px] text-center w-[30%]"></Button>
                                  <Text
                                    className="AutoLayoutHor1"
                                    variant="body11"
                                  >
                                    96%
                                  </Text>
                                  <Column className="items-center justify-start ml-[4px] mt-[4px] w-[30%]">
                                    <Text
                                      className="AutoLayoutVer3"
                                      variant="body12"
                                    >
                                      (392)
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_8.png')",
                              }}
                            >
                              <Column
                                className="bg-cover bg-repeat items-center justify-center lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[45px] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_autolayoutver.png')",
                                }}
                              >
                                <Text
                                  className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] not-italic text-shadow-ts text-white_A701 w-[auto]"
                                  variant="body3"
                                >
                                  Toro Burger Lounge
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                              <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[23%]">
                                <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                <Text
                                  className="AutoLayoutHor2"
                                  variant="body11"
                                >
                                  89%
                                </Text>
                                <Column className="justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] pr-[2px] py-[2px] w-[30%]">
                                  <Text
                                    className="my-[2px] AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (51)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="items-center justify-start rounded-radius10 shadow-bs3 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_frame_9.png')",
                              }}
                            >
                              <Column
                                className="bg-cover bg-repeat items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_autolayoutver.png')",
                                }}
                              >
                                <Text
                                  className="AutoLayoutVer2"
                                  variant="body3"
                                >
                                  Juancho's BBQ
                                </Text>
                              </Column>
                            </Column>
                            <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                              <Row className="items-start ml-[2px] py-[1px] w-[31%]">
                                <Button className="bg-transparent mt-[1px] text-center w-[31%]"></Button>
                                <Text
                                  className="AutoLayoutHor1"
                                  variant="body11"
                                >
                                  88%
                                </Text>
                                <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[4px] w-[31%]">
                                  <Text
                                    className="AutoLayoutVer3"
                                    variant="body12"
                                  >
                                    (500+)
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[100%]">
                            <Column className="absolute bg-orange_300 items-center justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] right-[10%] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[16%]">
                              <Text className="AutoLayoutVer8" variant="body10">
                                -30%
                              </Text>
                            </Column>
                            <Column className="absolute items-center justify-start rounded-radius10 shadow-bs3 top-[0] w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame_10.png')",
                                }}
                              >
                                <Column
                                  className="bg-cover bg-repeat items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_autolayoutver.png')",
                                  }}
                                >
                                  <Text
                                    className="AutoLayoutVer2"
                                    variant="body3"
                                  >
                                    Telepizza
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="justify-start lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                                <Row className="items-start mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[25%]">
                                  <Button className="bg-transparent lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-center w-[30%]"></Button>
                                  <Text
                                    className="AutoLayoutHor3"
                                    variant="body11"
                                  >
                                    93%
                                  </Text>
                                  <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[31%]">
                                    <Text
                                      className="AutoLayoutVer3"
                                      variant="body12"
                                    >
                                      (110)
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                      </Grid>
                    </Column>
                    <Button
                      className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[100%]"
                      shape="RoundedBorder19"
                      size="xl"
                      variant="FillLime900"
                    >
                      See more restaurants
                    </Button>
                  </Column>
                </Column>
              </Stack>
              <Column className="items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] 3xl:pb-[108px] lg:pb-[64px] xl:pb-[80px] 2xl:pb-[90px] 3xl:px-[108px] lg:px-[64px] xl:px-[80px] 2xl:px-[90px] w-[100%]">
                <Button
                  className="bg-transparent text-center w-[97%]"
                  size="8xl"
                ></Button>
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[97%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    Top Categories in Madrid
                  </Text>
                </Column>
                <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[97%]">
                  <List
                    className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-4 min-h-[auto] ml-[1px] w-[29%]"
                    orientation="horizontal"
                  >
                    <Column className="items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                      <Button
                        className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                    <Column className="items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                      <Button
                        className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                    <Column className="items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                      <Button
                        className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                    <Column className="items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                      <Button
                        className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                  </List>
                  <Column className="items-center justify-start xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[7%]">
                    <Column className="justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Button
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[94%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                    <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Button
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[94%]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="OutlineGray6001_2"
                      >
                        Enabled
                      </Button>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[6%]">
                    <Button
                      className="font-medium my-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[98%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[6%]">
                    <Button
                      className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[6%]">
                    <Button
                      className="font-medium my-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[98%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[6%]">
                    <Button
                      className="font-medium my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_800 tracking-ls1 w-[97%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-orange_101 items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                <Column className="items-center justify-start xl:mb-[108px] 2xl:mb-[121px] 3xl:mb-[145px] lg:mb-[86px] w-[74%]">
                  <Img
                    src="images/img_image_80X117.png"
                    className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[8%]"
                    alt="Image Fifteen"
                  />
                  <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                    <Text
                      className="not-italic text-black_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Let’s do it together
                    </Text>
                    <List
                      className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[29px] grid grid-cols-3 lg:mb-[38px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] min-h-[auto] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] pb-[1px] pr-[1px] w-[81%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Button className="bg-transparent text-center w-[72%]"></Button>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                            <Column className="items-center justify-start p-[1px] w-[100%]">
                              <Text
                                className="columnbecomearider"
                                variant="body4"
                              >
                                Become a rider
                              </Text>
                            </Column>
                            <Text className="AutoLayoutVer12" variant="body10">
                              Be your own boss! Enjoy flexibility, freedom and
                              competitive earnings by delivering with Glovo.
                            </Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] w-[28%]">
                          <Button
                            className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder19"
                            size="xl"
                            variant="FillLime900"
                          >
                            Enabled
                          </Button>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Button className="bg-transparent text-center w-[72%]"></Button>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                            <Column className="items-center justify-start pt-[3px] px-[3px] w-[100%]">
                              <Text
                                className="not-italic text-black_900 w-[auto]"
                                variant="body4"
                              >
                                Become a partner
                              </Text>
                            </Column>
                            <Text className="AutoLayoutVer12" variant="body10">
                              Grow with Glovo! Our technology and user base can
                              help you boost sales and unlock new opportunities!
                            </Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[28%]">
                          <Button
                            className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder19"
                            size="xl"
                            variant="FillLime900"
                          >
                            Enabled
                          </Button>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Button className="bg-transparent text-center w-[72%]"></Button>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                            <Column className="items-center justify-start p-[1px] w-[100%]">
                              <Text
                                className="columnbecomearider"
                                variant="body4"
                              >
                                Careers
                              </Text>
                            </Column>
                            <Text
                              className="font-normal lg:leading-[10px] xl:leading-[13px] 2xl:leading-[14px] 3xl:leading-[17px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[97%]"
                              variant="body10"
                            >
                              Ready for an exciting new challenge? If you’re
                              ambitious, humble, and love working with others,
                              then we want to hear from you!
                            </Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[28%]">
                          <Button
                            className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center tracking-ls1 w-[100%]"
                            shape="RoundedBorder19"
                            size="xl"
                            variant="FillLime900"
                          >
                            Enabled
                          </Button>
                        </Column>
                      </Column>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="absolute bg-bluegray_700 bottom-[0] items-center justify-end lg:pt-[36px] xl:pt-[45px] 2xl:pt-[51px] 3xl:pt-[61px] lg:px-[36px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[100%]">
            <Column className="items-center justify-start w-[79%]">
              <Column className="bg-bluegray_700 justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                <Button className="bg-transparent 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] text-center w-[7%]"></Button>
                <Row className="items-start 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[81%]">
                  <Column className="items-center justify-start p-[4px] w-[18%]">
                    <Text
                      className="not-italic text-white_A701 w-[auto]"
                      variant="body7"
                    >
                      Let’s do it together
                    </Text>
                    <Text className="Careers_One" variant="body11">
                      Careers
                    </Text>
                    <Text className="GlovoforPartn" variant="body11">
                      Glovo for Partners
                    </Text>
                    <Text className="GlovoforPartn" variant="body11">
                      Couriers
                    </Text>
                    <Text
                      className="lg:mb-[48px] xl:mb-[60px] 2xl:mb-[68px] 3xl:mb-[81px] GlovoforPartn"
                      variant="body11"
                    >
                      Glovo Business
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] p-[1px] w-[18%]">
                    <Text
                      className="not-italic text-white_A701 w-[auto]"
                      variant="body7"
                    >
                      Links of interest
                    </Text>
                    <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[27%]">
                      <Text className="columnaboutus" variant="body11">
                        About us
                      </Text>
                      <Text className="GlovoforPartn" variant="body11">
                        FAQ
                      </Text>
                    </Column>
                    <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[37%]">
                      <Text className="columnaboutus" variant="body11">
                        Glovo Prime
                      </Text>
                      <Text className="Blog" variant="body11">
                        Blog
                      </Text>
                      <Text className="Careers_One" variant="body11">
                        Contact us
                      </Text>
                      <Text className="Blog" variant="body11">
                        Security
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] p-[1px] w-[18%]">
                    <Text
                      className="not-italic text-white_A701 w-[auto]"
                      variant="body7"
                    >
                      Follow us
                    </Text>
                    <Column className="items-center justify-start 3xl:mb-[115px] lg:mb-[68px] xl:mb-[85px] 2xl:mb-[96px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[31%]">
                      <Text className="columnaboutus" variant="body11">
                        Facebook
                      </Text>
                      <Text className="Blog" variant="body11">
                        Twitter
                      </Text>
                      <Text
                        className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] columnaboutus"
                        variant="body11"
                      >
                        Instagram
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[18%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Button
                        className="bg-transparent text-center w-[100%]"
                        size="9xl"
                      ></Button>
                      <Button
                        className="bg-transparent lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-center w-[100%]"
                        size="9xl"
                      ></Button>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[2px] w-[100%]">
                      <Text className="AutoLayoutVer16" variant="body12">
                        Terms & Conditions
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] p-[2px] w-[100%]">
                      <Text className="AutoLayoutVer16" variant="body12">
                        Privacy Policy
                      </Text>
                    </Column>
                    <Text
                      className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] uppercase columnaboutus"
                      variant="body12"
                    >
                      Cookies Policy
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center justify-start 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] py-[4px] w-[81%]">
                  <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[100%]">
                    <Text
                      className="not-italic text-white_A701 w-[auto]"
                      variant="body7"
                    >
                      Top categories: Spain
                    </Text>
                    <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                      <Row className="items-start pr-[1px] pt-[1px] w-[100%]">
                        <Text
                          className="mt-[1px] columnaboutus"
                          variant="body11"
                        >
                          Pizza
                        </Text>
                        <Text
                          className="3xl:ml-[101px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[84px] mt-[1px] columnaboutus"
                          variant="body11"
                        >
                          Flowers
                        </Text>
                        <Text
                          className="lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] mt-[1px] columnaboutus"
                          variant="body11"
                        >
                          Chicken
                        </Text>
                        <Text
                          className="lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] columnaboutus"
                          variant="body11"
                        >
                          Breakfast
                        </Text>
                        <Text
                          className="lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] mt-[1px] columnaboutus"
                          variant="body11"
                        >
                          Pharmacy
                        </Text>
                        <Text
                          className="lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] columnaboutus"
                          variant="body11"
                        >
                          Gifts
                        </Text>
                        <Text
                          className="3xl:ml-[106px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] mt-[1px] columnaboutus"
                          variant="body11"
                        >
                          Supermarket
                        </Text>
                        <Text
                          className="lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] mt-[2px] columnaboutus"
                          variant="body11"
                        >
                          Fruit & Veg
                        </Text>
                      </Row>
                      <Column className="justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] pr-[3px] pt-[3px] w-[100%]">
                        <Text className="columnaboutus" variant="body11">
                          See all categories
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="justify-start lg:mb-[44px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] pt-[3px] px-[3px] w-[81%]">
                  <SelectBox
                    className="capitalize font-normal lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A701 w-[9%]"
                    placeholderClassName=""
                    name="language One"
                    placeholder=""
                    isSearchable={false}
                    isMulti={false}
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineGray301"
                  ></SelectBox>
                </Column>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default Home1Page;
