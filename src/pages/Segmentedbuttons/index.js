import React from "react";

import { Column, Img, Text, Row, Grid, Button } from "components";

const SegmentedbuttonsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
          <Column className="justify-start xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[32px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]">
              <Text className="Componentname3" as="h1" variant="h1">
                Segmented buttons: outlined
              </Text>
              <a
                href={
                  "https://m3.material.io/components/segmented-buttons/overview"
                }
                target="_blank"
                className="font-normal lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] not-italic lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Segmented buttons help people select options, switch views or
                sort elements.{" "}
              </Text>
            </Column>
          </Column>
        </Column>
        <footer className="w-[100%]">
          <Row className="items-center mx-[auto] lg:my-[38px] xl:my-[47px] 2xl:my-[53px] 3xl:my-[64px] w-[93%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-white_A700 justify-start lg:p-[21px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[100%]">
                <Grid className="grid grid-cols-2 w-[71%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray600"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray600"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray600"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray600"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_900 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray6001_2"
                    >
                      Enabled
                    </Button>
                  </Column>
                </Grid>
              </Column>
            </Column>
            <Column className="bg-gray_900 items-center lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[49%]">
              <Column className="bg-gray_900 justify-start lg:p-[21px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[100%]">
                <Grid className="grid grid-cols-2 w-[72%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_18X18.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray5051_2"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-orange_101 tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_18X18.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray5051_2"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-orange_101 tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_18X18.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray5051_2"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-orange_101 tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_18X18.svg"
                          className="rounded-tl-[50%] rounded-tr-[0] rounded-bl-[50%] rounded-br-[0] text-center lg:w-[9px] lg:h-[10px] lg:mr-[19px] xl:w-[12px] xl:h-[13px] xl:mr-[23px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[26px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[32px]"
                          alt="checkmark"
                        />
                      }
                      shape="CustomBorderTL100"
                      size="xl"
                      variant="OutlineGray5051_2"
                    >
                      <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-orange_101 tracking-ls1">
                        Enabled
                      </div>
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 tracking-ls1 w-[100%]"
                      shape="CustomBorderLR100"
                      size="xl"
                      variant="OutlineGray505"
                    >
                      Enabled
                    </Button>
                  </Column>
                </Grid>
              </Column>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default SegmentedbuttonsPage;
