import React from "react";

import {
  Column,
  Row,
  Button,
  List,
  Text,
  Stack,
  Img,
  Input,
  Grid,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const StorePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="font-roboto items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <header className="w-[100%]">
              <Column className="bg-orange_300 items-center justify-start w-[100%]">
                <Column className="bg-white_A700 items-center justify-start lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                      <Button
                        className="common-pointer bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] mt-[4px] text-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        onClick={handleBackNavigation}
                        size="xl"
                      ></Button>
                      <List
                        className="gap-[0] grid grid-cols-3 min-h-[auto] mt-[4px] w-[8%]"
                        orientation="horizontal"
                      >
                        <Button
                          className="bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] text-center w-[100%]"
                          size="xl"
                        ></Button>
                        <Button
                          className="bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] text-center w-[100%]"
                          size="xl"
                        ></Button>
                        <Button
                          className="bg-transparent lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] text-center w-[100%]"
                          size="xl"
                        ></Button>
                      </List>
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] p-[1px] w-[100%]">
                      <Text
                        className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] not-italic text-gray_900 w-[auto]"
                        variant="body3"
                      >
                        TelePizza
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </header>
            <Stack className="3xl:h-[1156px] lg:h-[685px] xl:h-[857px] 2xl:h-[963px] w-[100%]">
              <Stack className="absolute lg:h-[132px] xl:h-[165px] 2xl:h-[185px] 3xl:h-[222px] top-[0] w-[100%]">
                <Button
                  className="absolute bg-transparent text-center top-[0] w-[100%]"
                  size="6xl"
                ></Button>
                <Column
                  className="absolute bg-cover bg-gray_100 bg-repeat items-center justify-start w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_frame_246X1920.png')",
                  }}
                >
                  <div className="bg-gradient1  lg:h-[132px] xl:h-[165px] 2xl:h-[185px] 3xl:h-[222px] w-[100%]"></div>
                </Column>
              </Stack>
              <Column className="absolute bottom-[0] inset-x-[0] justify-start mx-[auto] w-[74%]">
                <Row className="items-center w-[9%]">
                  <Row className="items-center justify-evenly w-[33%]">
                    <Text className="rowone" variant="body12">
                      1.
                    </Text>
                    <Column className="pr-[3px] py-[3px] w-[100%]">
                      <Text className="font-normal mt-[1px] not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-white_A701 underline w-[auto]">
                        Madrid
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] w-[60%]">
                    <Text className="rowone" variant="body12">
                      2.
                    </Text>
                    <Column className="pr-[2px] py-[2px] w-[81%]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-white_A701 w-[auto]"
                        variant="body12"
                      >
                        Telepizza
                      </Text>
                    </Column>
                  </Row>
                </Row>
                <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[76%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="bg-white_A701 justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius10 shadow-bs3 w-[100%]">
                      <Column className="justify-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pr-[3px] py-[3px] w-[98%]">
                        <Text
                          className="mt-[3px] not-italic text-black_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Telepizza
                        </Text>
                      </Column>
                      <Row className="items-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[21%]">
                        <Row className="items-start justify-evenly py-[1px] w-[60%]">
                          <Img
                            src="images/img_image_20X30.png"
                            className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                            alt="Image One"
                          />
                          <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[21%]">
                            <Text className="rowone" variant="body11">
                              93%
                            </Text>
                          </Column>
                          <Column className="items-center justify-start mt-[4px] w-[50%]">
                            <Text
                              className="bg-teal_200 font-normal not-italic lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] py-[2px] rounded-radius4 text-white_A701 w-[66px]"
                              variant="body12"
                            >
                              Very Good
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] py-[1px] w-[33%]">
                          <Img
                            src="images/img_image_28X28.png"
                            className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                            alt="Image Two"
                          />
                          <Column className="items-center w-[52%]">
                            <Text className="rowone" variant="body11">
                              0,95 €
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
                      <Column className="justify-start pb-[3px] w-[16%]">
                        <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[92%]">
                          <Button className="bg-transparent ml-[1px] text-center w-[10%]"></Button>
                          <Text
                            className="font-normal mb-[1px] ml-[4px] not-italic text-teal_500 w-[auto]"
                            variant="body11"
                          >
                            Sections
                          </Text>
                        </Row>
                        <Column className="items-center justify-start w-[100%]">
                          <Text className="AutoLayoutVer20" variant="body11">
                            Salduenak
                          </Text>
                          <Text className="AutoLayoutVer20" variant="body11">
                            OFERTAS 30%
                          </Text>
                          <Column className="border border-gray_300 border-solid justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                            <Text className="AutoLayoutVer21" variant="body11">
                              Ofertas
                            </Text>
                          </Column>
                          <Column className="border border-gray_300 border-solid justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                            <Text className="AutoLayoutVer22" variant="body11">
                              Pizzas
                            </Text>
                          </Column>
                          <Column className="border border-gray_300 border-solid justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                            <Text className="AutoLayoutVer21" variant="body11">
                              Menús
                            </Text>
                          </Column>
                          <Column className="border border-gray_300 border-solid justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                            <Text className="AutoLayoutVer22" variant="body11">
                              Entrantes
                            </Text>
                          </Column>
                          <Column className="border border-gray_300 border-solid justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                            <Text className="AutoLayoutVer22" variant="body11">
                              Postres
                            </Text>
                          </Column>
                          <Text className="AutoLayoutVer20" variant="body11">
                            Bebidas
                          </Text>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[83%]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="p-[0] w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="AutoLayoutVer"
                          placeholder=""
                          suffix={
                            inputvalue?.length > 0 ? (
                              <CloseSVG
                                className="cursor-pointer ml-[0] lg:w-[6px] lg:mr-[4px] xl:w-[8px] xl:mr-[6px] 2xl:w-[9px] 2xl:mr-[6px] 3xl:w-[11px] 3xl:mr-[8px] my-[auto]"
                                onClick={() => setInputvalue("")}
                                color="#000000"
                              />
                            ) : (
                              <Img
                                src="images/img_image_15X13.png"
                                className="cursor-pointer ml-[0] lg:w-[6px] lg:mr-[4px] xl:w-[8px] xl:mr-[6px] 2xl:w-[9px] 2xl:mr-[6px] 3xl:w-[11px] 3xl:mr-[8px] my-[auto]"
                                alt="Image Four"
                              />
                            )
                          }
                          shape="srcCircleBorder22"
                          size="smSrc"
                          variant="srcFillGray100"
                        ></Input>
                        <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                          <Row className="bg-gray_100 items-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius8 w-[100%]">
                            <Button className="bg-transparent lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-center lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"></Button>
                            <Column className="items-center justify-start ml-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[64%]">
                              <Text
                                className="xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] mt-[1px] rowone"
                                variant="body10"
                              >
                                <span className="text-black_900 font-roboto lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  No live tracking available. Orders are
                                  delivered directly by the store.
                                </span>
                                <span className="text-teal_500 font-roboto lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  Learn more
                                </span>
                              </Text>
                            </Column>
                          </Row>
                          <Column className="items-center justify-start lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Row className="items-center justify-between w-[100%]">
                                <Row className="items-center xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] xl:pt-[12px] 2xl:pt-[13px] 3xl:pt-[16px] lg:pt-[9px] rounded-radius8 shadow-bs4 w-[49%]">
                                  <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[63%]">
                                    <Row className="items-start lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] w-[50%]">
                                      <Button className="bg-transparent lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] text-center w-[18%]"></Button>
                                      <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[76%]">
                                        <Text
                                          className="not-italic text-black_900 w-[auto]"
                                          variant="body8"
                                        >
                                          Top sellers
                                        </Text>
                                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[40%]">
                                          <Text
                                            className="AutoLayoutVer24"
                                            variant="body11"
                                          >
                                            -30%
                                          </Text>
                                        </Column>
                                      </Column>
                                    </Row>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-center w-[30%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button4"
                                  ></Button>
                                </Row>
                                <Row className="items-end justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[49%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[65%]">
                                    <Text
                                      className="not-italic text-black_900 w-[auto]"
                                      variant="body8"
                                    >
                                      OFERTAS 30%
                                    </Text>
                                    <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[18%]">
                                      <Text
                                        className="AutoLayoutVer24"
                                        variant="body11"
                                      >
                                        -30%
                                      </Text>
                                    </Column>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[31%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button5"
                                  ></Button>
                                </Row>
                              </Row>
                              <Grid className="lg:gap-[14px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-2 lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                                <Row className="items-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer25"
                                      variant="body8"
                                    >
                                      Ofertas
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button6"
                                  ></Button>
                                </Row>
                                <Row className="items-end justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer26"
                                      variant="body8"
                                    >
                                      Pizzas
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button7"
                                  ></Button>
                                </Row>
                                <Row className="items-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer25"
                                      variant="body8"
                                    >
                                      Menús
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button8"
                                  ></Button>
                                </Row>
                                <Row className="items-end justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer26"
                                      variant="body8"
                                    >
                                      Entrantes
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button9"
                                  ></Button>
                                </Row>
                                <Row className="items-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer26"
                                      variant="body8"
                                    >
                                      Postres
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button10"
                                  ></Button>
                                </Row>
                                <Row className="items-end justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] rounded-radius8 shadow-bs4 w-[100%]">
                                  <Column className="justify-start lg:pr-[20px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[64%]">
                                    <Text
                                      className="AutoLayoutVer25"
                                      variant="body8"
                                    >
                                      Bebidas
                                    </Text>
                                  </Column>
                                  <Button
                                    className="bg-cover bg-repeat xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-center w-[32%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/defaultNoData.png')",
                                    }}
                                    size="7xl"
                                    variant="button11"
                                  ></Button>
                                </Row>
                              </Grid>
                            </Column>
                          </Column>
                          <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[36%]">
                            <Column className="justify-start lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[86%]">
                              <Text className="rowone" variant="body11">
                                Browse similar stores in this category:
                              </Text>
                            </Column>
                            <Column className="justify-end ml-[4px] pr-[3px] py-[3px] w-[13%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-teal_500 w-[auto]"
                                variant="body11"
                              >
                                Pizza
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Column className="bg-gray_903 items-center justify-end lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:pt-[36px] xl:pt-[45px] 2xl:pt-[51px] 3xl:pt-[61px] lg:px-[36px] xl:px-[45px] 2xl:px-[51px] 3xl:px-[61px] w-[100%]">
            <footer className="w-[79%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                  <Img
                    src="images/img_image_3.png"
                    className="lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[7%]"
                    alt="Image Fifteen"
                  />
                  <Row className="items-start 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[81%]">
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
                      <Text
                        className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] columnaboutus"
                        variant="body11"
                      >
                        Glovo for Partners
                      </Text>
                      <Text className="GlovoforPartn" variant="body11">
                        Couriers
                      </Text>
                      <Text
                        className="lg:mb-[48px] xl:mb-[60px] 2xl:mb-[68px] 3xl:mb-[81px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] columnaboutus"
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
                      <Column className="items-center justify-start 3xl:mb-[115px] lg:mb-[68px] xl:mb-[85px] 2xl:mb-[96px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[31%]">
                        <Text className="columnaboutus" variant="body11">
                          Facebook
                        </Text>
                        <Text className="GlovoforPartn" variant="body11">
                          Twitter
                        </Text>
                        <Text
                          className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] columnaboutus"
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
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] p-[2px] w-[100%]">
                        <Text className="AutoLayoutVer16" variant="body12">
                          Terms & Conditions
                        </Text>
                      </Column>
                      <Column className="items-center justify-start mt-[4px] p-[2px] w-[100%]">
                        <Text className="AutoLayoutVer16" variant="body12">
                          Privacy Policy
                        </Text>
                      </Column>
                      <Text
                        className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] uppercase columnaboutus"
                        variant="body12"
                      >
                        Cookies Policy
                      </Text>
                    </Column>
                  </Row>
                  <Column className="items-center justify-start 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] py-[4px] w-[81%]">
                    <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[100%]">
                      <Text
                        className="not-italic text-white_A701 w-[auto]"
                        variant="body7"
                      >
                        Top categories: Spain
                      </Text>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-start w-[57%]">
                            <Text
                              className="mt-[1px] columnaboutus"
                              variant="body11"
                            >
                              Pizza
                            </Text>
                            <Text
                              className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] columnaboutus"
                              variant="body11"
                            >
                              Flowers
                            </Text>
                            <Text
                              className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] mt-[1px] columnaboutus"
                              variant="body11"
                            >
                              Chicken
                            </Text>
                            <Text
                              className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] columnaboutus"
                              variant="body11"
                            >
                              Breakfast
                            </Text>
                            <Text
                              className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] columnaboutus"
                              variant="body11"
                            >
                              Pharmacy
                            </Text>
                            <Text
                              className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] columnaboutus"
                              variant="body11"
                            >
                              Gifts
                            </Text>
                            <Text
                              className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] columnaboutus"
                              variant="body11"
                            >
                              Supermarket
                            </Text>
                            <Text
                              className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] mt-[2px] columnaboutus"
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
                  </Column>
                  <Column className="items-center justify-start lg:mb-[44px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[2px] px-[2px] w-[8%]">
                    <SelectBox
                      className="capitalize font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A701 w-[99%]"
                      placeholderClassName=""
                      name="language"
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
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default StorePage;
