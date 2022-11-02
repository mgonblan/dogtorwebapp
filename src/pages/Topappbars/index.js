import React from "react";

import { Column, Img, Text, List, Row, Button } from "components";

const TopappbarsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[45px] xl:p-[57px] 2xl:p-[64px] 3xl:p-[77px] w-[100%]">
          <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="computer6"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Top App Bars
              </Text>
              <a
                href={"http://m3.material.io/components/top-app-bar/overview"}
                target="_blank"
                className="font-normal lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[21px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text className="columnlink1" variant="body8">
                Top app bars display information and actions at the top of a
                screen, such as the page title and shortcuts to actions.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[35px] xl:gap-[44px] 2xl:gap-[49px] 3xl:gap-[59px] grid grid-cols-2 min-h-[auto] 3xl:p-[103px] lg:p-[61px] xl:p-[77px] 2xl:p-[86px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="listiconsone1">
            <Column className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Row className="bg-white_A700 items-start justify-between p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations1" variant="body5">
                  Product
                </Text>
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
              </Row>
              <Row className="bg-white_A700 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations2" variant="body5">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[146px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] my-[4px] w-[36%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] p-[1px] w-[100%]">
                  <Text className="headline4" variant="body4">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] p-[1px] w-[100%]">
                  <Text className="headline5" variant="body3">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Row className="bg-white_A700 items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations1" variant="body5">
                  Product
                </Text>
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
              </Row>
              <Row className="bg-white_A700 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations2" variant="body5">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[146px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] my-[4px] w-[36%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] p-[1px] w-[100%]">
                  <Text className="headline4" variant="body4">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] p-[1px] w-[100%]">
                  <Text className="headline5" variant="body3">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius16 w-[100%]">
              <Row className="bg-gray_900 items-start justify-between p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations3" variant="body5">
                  Product
                </Text>
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
              </Row>
              <Row className="bg-gray_900 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations4" variant="body5">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[146px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] my-[4px] w-[36%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] p-[1px] w-[100%]">
                  <Text className="headline6" variant="body4">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] p-[1px] w-[100%]">
                  <Text className="headline7" variant="body3">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Row className="bg-gray_900 items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations3" variant="body5">
                  Product
                </Text>
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
              </Row>
              <Row className="bg-gray_900 items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] p-[4px] w-[100%]">
                <Button
                  className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] my-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                  size="xl"
                ></Button>
                <Text className="Configurations4" variant="body5">
                  Title
                </Text>
                <Row className="items-center justify-center lg:ml-[146px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] my-[4px] w-[36%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                </Row>
              </Row>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start mt-[4px] p-[1px] w-[100%]">
                  <Text className="headline6" variant="body4">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
              <Column className="bg-gray_900 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] w-[100%]">
                <Row className="items-start justify-between pt-[4px] px-[4px] w-[100%]">
                  <Button
                    className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] mt-[4px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                    size="xl"
                  ></Button>
                  <Row className="items-center justify-center mt-[4px] w-[36%]">
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                    <Button
                      className="bg-transparent lg:h-[43px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] text-center lg:w-[42px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[71px]"
                      size="xl"
                    ></Button>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] p-[1px] w-[100%]">
                  <Text className="headline7" variant="body3">
                    Title{" "}
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default TopappbarsPage;
