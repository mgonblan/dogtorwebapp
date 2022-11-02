import React from "react";

import {
  Column,
  Img,
  Text,
  Row,
  List,
  Button,
  Grid,
  Stack,
  Input,
} from "components";

const ColorGuidancePage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]">
          <Column className="justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Color Guidance
              </Text>
              <Column className="justify-start 2xl:mr-[1069px] 3xl:mr-[1283px] lg:mr-[759px] xl:mr-[950px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[23%]">
                <Text
                  className="not-italic text-lime_900 w-[auto]"
                  variant="body4"
                >
                  <span className="text-black_900 font-roboto font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    See design guideline for
                  </span>
                  <span className="text-lime_900 font-roboto font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    {" "}
                  </span>
                  <span className="text-lime_900 font-roboto font-normal underline lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    color
                  </span>
                  <span className="text-lime_900 font-roboto font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    {" "}
                  </span>
                  <span className="text-black_900 font-roboto font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    and
                  </span>
                  <span className="text-lime_900 font-roboto font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    {" "}
                  </span>
                  <span className="text-lime_900 font-roboto font-normal underline lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                    interaction states
                  </span>
                </Text>
                <Text
                  className="xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Use color to create meaningful experiences while also
                  expressing hierarchy, state, and brand identity
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="items-center justify-center lg:p-[38px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[64px] w-[100%]">
          <Row className="items-center 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[99%]">
            <Column className="items-center w-[29%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] not-italic text-black_900 w-[auto]"
                  variant="body8"
                >
                  Tonal Palettes
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowprimary" variant="body10">
                      Primary
                    </Text>
                    <Button
                      className="font-medium lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray904"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray905"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center text-white_A701 tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLightgreen900"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLime900"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLime901"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLime800"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillYellow800"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange301"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange100"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange50"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowprimary" variant="body10">
                      Secondary
                    </Text>
                    <Button
                      className="font-medium lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray906"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray907"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray801"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray700"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray603"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray500"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray501"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLightgreen200"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange102"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange50"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowprimary" variant="body10">
                      Tertiary
                    </Text>
                    <Button
                      className="font-medium lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack901"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray908"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray802"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBluegray701"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray701"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray604"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray502"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGreen200"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGreen100"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLightgreen100"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillLime50"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowerror" variant="body10">
                      Error
                    </Text>
                    <Button
                      className="font-medium lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[51px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray909"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillPink900"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRed900"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRed901"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRed600"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRedA200"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRedA100"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillDeeporange200"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRed100"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillRed50"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowerror" variant="body10">
                      Neutral
                    </Text>
                    <Button
                      className="font-medium lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center text-white_A701 tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray900"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBluegray900"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray803"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray702"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray605"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray503"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray504"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray401"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray302"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillDeeporange50"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                  <Row className="items-start lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                    <Text className="rowerror" variant="body10">
                      Neutral Variant
                    </Text>
                    <Button
                      className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillBlack900"
                    >
                      0
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray910"
                    >
                      10
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray911"
                    >
                      20
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center text-white_A701 tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray800"
                    >
                      30
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray703"
                    >
                      40
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray600"
                    >
                      50
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray505"
                    >
                      60
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray506"
                    >
                      70
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray402"
                    >
                      80
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillGray303"
                    >
                      90
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillOrange51"
                    >
                      95
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      99
                    </Button>
                    <Button
                      className="font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-center tracking-ls1 w-[7%]"
                      size="5xl"
                      variant="FillWhiteA701"
                    >
                      100
                    </Button>
                  </Row>
                </List>
              </Column>
            </Column>
            <List
              className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[54%]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start mt-[2px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body8"
                  >
                    Light Theme
                  </Text>
                  <Grid className="grid grid-cols-4 lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                    <Column className="bg-lime_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text className="Primary_One" variant="body11">
                        Primary
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnprimary"
                        variant="body11"
                      >
                        Primary40
                      </Text>
                    </Column>
                    <Column className="bg-white_A701 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text className="OnPrimary" variant="body11">
                        On Primary
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnonprimary"
                        variant="body11"
                      >
                        Primary100
                      </Text>
                    </Column>
                    <Column className="bg-orange_100 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[23px] xl:mr-[29px] 2xl:mr-[32px] 3xl:mr-[39px] mt-[4px] columnprimarycontain"
                        variant="body11"
                      >
                        Primary Container
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnprimarycontain"
                        variant="body11"
                      >
                        Primary90
                      </Text>
                    </Column>
                    <Column className="bg-gray_904 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] mt-[4px] columnonprimarycont"
                        variant="body11"
                      >
                        On Primary Container
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnonprimarycont"
                        variant="body11"
                      >
                        Primary10
                      </Text>
                    </Column>
                    <Column className="bg-gray_704 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text className="Primary_One" variant="body11">
                        Secondary
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnprimary"
                        variant="body11"
                      >
                        Secondary40
                      </Text>
                    </Column>
                    <Column className="bg-white_A701 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[4px] text-gray_700 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Secondary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[51px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_700 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary100
                      </Text>
                    </Column>
                    <Column className="bg-orange_101 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[18px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mt-[4px] text-gray_906 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_906 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary90
                      </Text>
                    </Column>
                    <Column className="bg-gray_901 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mt-[4px] text-orange_102 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Secondary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-orange_102 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary10
                      </Text>
                    </Column>
                    <Column className="bg-bluegray_700 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text className="Primary_One" variant="body11">
                        Tertiary
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnprimary"
                        variant="body11"
                      >
                        Tertiary40
                      </Text>
                    </Column>
                    <Column className="bg-white_A701 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[4px] text-bluegray_701 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Tertiary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-bluegray_701 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary100
                      </Text>
                    </Column>
                    <Column className="bg-green_101 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[23px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] mt-[4px] text-black_901 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-black_901 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary90
                      </Text>
                    </Column>
                    <Column className="bg-black_902 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] mt-[4px] text-green_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Tertiary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-green_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary10
                      </Text>
                    </Column>
                    <Column className="bg-red_901 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text className="mt-[3px] columnprimary" variant="body11">
                        Error
                      </Text>
                      <Text
                        className="lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] columnprimary"
                        variant="body11"
                      >
                        Error40
                      </Text>
                    </Column>
                    <Column className="bg-white_A701 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[3px] text-red_901 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Error
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_901 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error100
                      </Text>
                    </Column>
                    <Column className="bg-red_100 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[28px] xl:mr-[36px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[2px] text-gray_909 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error Container
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-gray_909 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error90
                      </Text>
                    </Column>
                    <Column className="bg-gray_909 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[22px] xl:mr-[28px] 2xl:mr-[31px] 3xl:mr-[38px] mt-[2px] text-red_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Error Container
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error10
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] mt-[4px] columnbackground"
                        variant="body11"
                      >
                        Background
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] columnbackground"
                        variant="body11"
                      >
                        Neutral99
                      </Text>
                    </Column>
                    <Column className="bg-gray_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[28px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] Primary_One"
                        variant="body11"
                      >
                        On Background
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] columnprimary"
                        variant="body11"
                      >
                        Neutral10
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                      <Text className="Surface" variant="body11">
                        Surface
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] columnbackground"
                        variant="body11"
                      >
                        Neutral99
                      </Text>
                    </Column>
                    <Column className="bg-gray_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[36px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mt-[2px] columnprimary"
                        variant="body11"
                      >
                        On Surface
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] columnprimary"
                        variant="body11"
                      >
                        Neutral10
                      </Text>
                    </Column>
                  </Grid>
                  <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                    <Column className="bg-gray_303 mt-[1px] lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[25%]">
                      <Text
                        className="mt-[2px] columnbackground"
                        variant="body11"
                      >
                        Surface Variant
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnbackground"
                        variant="body11"
                      >
                        Neutral-Variant90
                      </Text>
                    </Column>
                    <Column className="bg-gray_800 mt-[1px] lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[25%]">
                      <Text
                        className="lg:mr-[22px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] mt-[2px] columnprimary"
                        variant="body11"
                      >
                        On Surface Variant
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnprimary"
                        variant="body11"
                      >
                        Neutral-Variant30
                      </Text>
                    </Column>
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[50%]">
                      <Column className="absolute bg-gray_600 justify-start left-[0] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[50%]">
                        <Text
                          className="ml-[1px] mt-[3px] columnprimary"
                          variant="body11"
                        >
                          Outline
                        </Text>
                        <Text
                          className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnprimary"
                          variant="body11"
                        >
                          Neutral-Variant50
                        </Text>
                      </Column>
                      <Column className="absolute bg-bluegray_100 justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] right-[0] w-[50%]">
                        <Text className="Surface" variant="body11">
                          Outline-variant
                        </Text>
                        <Text
                          className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnbackground"
                          variant="body11"
                        >
                          Neutral-Variant80
                        </Text>
                      </Column>
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body8"
                  >
                    Dark Theme
                  </Text>
                  <Grid className="grid grid-cols-4 lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                    <Column className="bg-orange_301 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[4px] text-gray_905 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Primary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_905 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Primary80
                      </Text>
                    </Column>
                    <Column className="bg-gray_905 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[36px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mt-[4px] columnonprimary_one_one"
                        variant="body11"
                      >
                        On Primary
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnonprimary_one_one"
                        variant="body11"
                      >
                        Primary20
                      </Text>
                    </Column>
                    <Column className="bg-light_green_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[23px] xl:mr-[29px] 2xl:mr-[32px] 3xl:mr-[39px] mt-[4px] columnonprimarycont"
                        variant="body11"
                      >
                        Primary Container
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] columnonprimarycont"
                        variant="body11"
                      >
                        Primary30
                      </Text>
                    </Column>
                    <Column className="bg-orange_100 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] mt-[4px] text-light_green_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Primary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-light_green_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Primary90
                      </Text>
                    </Column>
                    <Column className="bg-light_green_201 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[4px] text-gray_907 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_907 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary80
                      </Text>
                    </Column>
                    <Column className="bg-gray_912 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[31px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mt-[4px] text-light_green_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Secondary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-light_green_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary20
                      </Text>
                    </Column>
                    <Column className="bg-gray_804 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[18px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mt-[4px] text-orange_102 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-orange_102 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary30
                      </Text>
                    </Column>
                    <Column className="bg-orange_101 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mt-[4px] text-gray_801 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Secondary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_801 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Secondary90
                      </Text>
                    </Column>
                    <Column className="bg-green_201 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[4px] text-gray_908 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_908 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary80
                      </Text>
                    </Column>
                    <Column className="bg-gray_913 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[36px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mt-[4px] text-green_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Tertiary
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-green_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary20
                      </Text>
                    </Column>
                    <Column className="bg-gray_805 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[23px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] mt-[4px] text-green_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-green_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary30
                      </Text>
                    </Column>
                    <Column className="bg-green_101 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[29px] mt-[4px] text-gray_802 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Tertiary Container
                      </Text>
                      <Text
                        className="font-medium mb-[4px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-gray_802 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Tertiary90
                      </Text>
                    </Column>
                    <Column className="bg-deep_orange_200 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium mt-[3px] text-pink_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-pink_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error80
                      </Text>
                    </Column>
                    <Column className="bg-pink_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[41px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mt-[3px] text-deep_orange_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Error
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-deep_orange_200 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error20
                      </Text>
                    </Column>
                    <Column className="bg-red_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[28px] xl:mr-[36px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[2px] text-red_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error Container
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_100 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error30
                      </Text>
                    </Column>
                    <Column className="bg-deep_orange_200 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="font-medium lg:mr-[22px] xl:mr-[28px] 2xl:mr-[31px] 3xl:mr-[38px] mt-[2px] text-red_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        On Error Container
                      </Text>
                      <Text
                        className="font-medium lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_900 tracking-ls1 w-[auto]"
                        variant="body11"
                      >
                        Error90
                      </Text>
                    </Column>
                    <Column className="bg-gray_900 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] Primary_One"
                        variant="body11"
                      >
                        Background
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] columnprimary"
                        variant="body11"
                      >
                        Neutral10
                      </Text>
                    </Column>
                    <Column className="bg-gray_302 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[28px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[4px] columnbackground"
                        variant="body11"
                      >
                        On Background
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] columnbackground"
                        variant="body11"
                      >
                        Neutral90
                      </Text>
                    </Column>
                    <Column className="bg-gray_900 justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                      <Text
                        className="ml-[1px] mt-[3px] columnprimary"
                        variant="body11"
                      >
                        Surface
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] columnprimary"
                        variant="body11"
                      >
                        Neutral10
                      </Text>
                    </Column>
                    <Column className="bg-gray_302 justify-start lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[100%]">
                      <Text
                        className="lg:mr-[36px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mt-[2px] columnbackground"
                        variant="body11"
                      >
                        On Surface
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] columnbackground"
                        variant="body11"
                      >
                        Neutral90
                      </Text>
                    </Column>
                  </Grid>
                  <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Column className="bg-gray_800 lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[25%]">
                      <Text className="mt-[2px] columnprimary" variant="body11">
                        Surface Variant
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnprimary"
                        variant="body11"
                      >
                        Neutral-Variant30
                      </Text>
                    </Column>
                    <Column className="bg-gray_402 lg:p-[2px] xl:p-[3px] 3xl:p-[4px] 2xl:p-[4px] w-[25%]">
                      <Text
                        className="lg:mr-[22px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] mt-[2px] columnbackground"
                        variant="body11"
                      >
                        On Surface Variant
                      </Text>
                      <Text
                        className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnbackground"
                        variant="body11"
                      >
                        Neutral-Variant80
                      </Text>
                    </Column>
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[50%]">
                      <Column className="absolute bg-gray_505 justify-start left-[0] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[50%]">
                        <Text className="Surface" variant="body11">
                          Outline
                        </Text>
                        <Text
                          className="2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnbackground"
                          variant="body11"
                        >
                          Neutral-Variant60
                        </Text>
                      </Column>
                      <Column className="absolute bg-gray_806 justify-center lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] right-[0] w-[50%]">
                        <Text
                          className="ml-[1px] lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] mt-[2px] columnprimary"
                          variant="body11"
                        >
                          Outline-variant
                        </Text>
                        <Text
                          className="xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] columnprimary"
                          variant="body11"
                        >
                          Neutral-Variant30
                        </Text>
                      </Column>
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </List>
            <Row className="items-center justify-between mb-[2px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:pt-[1px] lg:pt-[1px] 3xl:pt-[2px] 2xl:pt-[2px] w-[15%]">
              <Column className="w-[46%]">
                <Text
                  className="not-italic text-gray_900 w-[auto]"
                  variant="body8"
                >
                  Surfaces - Light
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[6px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[22px] 3xl:mt-[27px] lg:mt-[16px] w-[100%] xl:mt-[20px]"
                  name="Group2341"
                  placeholder="Surface"
                  size="md"
                  variant="FillWhiteA700"
                ></Input>
                <Column className="bg-white_A700 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne" variant="body11">
                    Surface at +1
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnbackground"
                    variant="body11"
                  >
                    + 5% Primary
                  </Text>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne" variant="body11">
                    Surface at +2
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnbackground"
                    variant="body11"
                  >
                    + 8% Primary
                  </Text>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne" variant="body11">
                    Surface at +3
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] mr-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnbackground"
                    variant="body11"
                  >
                    + 11% Primary
                  </Text>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne" variant="body11">
                    Surface at +4
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] xl:mr-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnbackground"
                    variant="body11"
                  >
                    + 12% Primary
                  </Text>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne" variant="body11">
                    Surface at +5
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] xl:mr-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnbackground"
                    variant="body11"
                  >
                    + 14% Primary
                  </Text>
                </Column>
              </Column>
              <Column className="w-[46%]">
                <Text
                  className="not-italic text-gray_900 w-[auto]"
                  variant="body8"
                >
                  Surfaces - Dark
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[6px] placeholder:text-white_A701 text-white_A701 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[28px] lg:mt-[16px] w-[100%] xl:mt-[20px]"
                  name="Group2347"
                  placeholder="Surface"
                  size="md"
                  variant="FillGray900"
                ></Input>
                <Column className="bg-gray_900 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne_Two" variant="body11">
                    Surface at +1
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnprimary"
                    variant="body11"
                  >
                    + 5% Primary
                  </Text>
                </Column>
                <Column className="bg-gray_900 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne_Two" variant="body11">
                    Surface at +2
                  </Text>
                  <Text
                    className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnprimary"
                    variant="body11"
                  >
                    + 8% Primary
                  </Text>
                </Column>
                <Column className="bg-gray_900 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne_Two" variant="body11">
                    Surface at +3
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] mr-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnprimary"
                    variant="body11"
                  >
                    + 11% Primary
                  </Text>
                </Column>
                <Column className="bg-gray_900 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne_Two" variant="body11">
                    Surface at +4
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] xl:mr-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnprimary"
                    variant="body11"
                  >
                    + 12% Primary
                  </Text>
                </Column>
                <Column className="bg-gray_900 justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                  <Text className="SurfaceatOne_Two" variant="body11">
                    Surface at +5
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] xl:mr-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] columnprimary"
                    variant="body11"
                  >
                    + 14% Primary
                  </Text>
                </Column>
              </Column>
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ColorGuidancePage;
