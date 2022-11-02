import React from "react";

import { Column, Img, Text, List, Row, Button } from "components";

const RadiobuttonsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[44px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[25px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="computer10"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[51px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[86px] pr-[3px] py-[3px] w-[100%]">
              <Text
                className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[514px] xl:mr-[643px] 2xl:mr-[724px] 3xl:mr-[868px] mt-[1px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Radio buttons
              </Text>
              <Column className="justify-start lg:mr-[31px] xl:mr-[39px] 2xl:mr-[44px] 3xl:mr-[53px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[96%]">
                <a
                  href={
                    "https://m3.material.io/components/radio-button/overview"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="font-normal tracking-ls1 columnlink4"
                  variant="body10"
                >
                  Radio buttons allow users to select one option from a set.
                  They’re a selection control that often appears when users are
                  asked to make decisions or select a choice from options.
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[34px] xl:gap-[42px] 2xl:gap-[47px] 3xl:gap-[57px] grid grid-cols-2 min-h-[auto] 3xl:p-[100px] lg:p-[59px] xl:p-[74px] 2xl:p-[83px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="listcontainer">
            <Column className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillLime90014"
                  >
                    <Img
                      src="images/img_icon_24X24.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon One"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillLime9001e"
                  >
                    <Img
                      src="images/img_icon_24X24.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Two"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray9001e"
                  >
                    <Img
                      src="images/img_icon_24X24.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Three"
                    />
                  </Button>
                </Column>
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray90016"
                  >
                    <Img
                      src="images/img_icons01outlin.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Six"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray9001e"
                  >
                    <Img
                      src="images/img_icons01outlin.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Seven"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillLime9001e"
                  >
                    <Img
                      src="images/img_icons01outlin.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Eight"
                    />
                  </Button>
                </Column>
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillOrange30014"
                  >
                    <Img
                      src="images/img_icon_1.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon One One"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillOrange3001e"
                  >
                    <Img
                      src="images/img_icon_1.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Two One"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray3001e"
                  >
                    <Img
                      src="images/img_icon_1.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Three One"
                    />
                  </Button>
                </Column>
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray30014"
                  >
                    <Img
                      src="images/img_icon_40X40.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Six One"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillGray3001e"
                  >
                    <Img
                      src="images/img_icon_40X40.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Seven One"
                    />
                  </Button>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Button
                    className="flex items-center justify-center computer10"
                    size="mdIcn"
                    variant="icbFillOrange3001e"
                  >
                    <Img
                      src="images/img_icon_40X40.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="icon Eight One"
                    />
                  </Button>
                </Column>
                <Button
                  className="bg-transparent text-center file"
                  size="xl"
                ></Button>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default RadiobuttonsPage;
