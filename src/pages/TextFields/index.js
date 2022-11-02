import React from "react";

import {
  Column,
  Img,
  Text,
  List,
  Row,
  Button,
  Line,
  Grid,
  Stack,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const TextFieldsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const [inputvalue2, setInputvalue2] = React.useState("");
  const [inputvalue3, setInputvalue3] = React.useState("");
  const [inputvalue4, setInputvalue4] = React.useState("");
  const [inputvalue5, setInputvalue5] = React.useState("");
  const [inputvalue6, setInputvalue6] = React.useState("");
  const [inputvalue7, setInputvalue7] = React.useState("");
  const [inputvalue8, setInputvalue8] = React.useState("");
  const [inputvalue9, setInputvalue9] = React.useState("");
  const [inputvalue10, setInputvalue10] = React.useState("");
  const [inputvalue11, setInputvalue11] = React.useState("");
  const [inputvalue12, setInputvalue12] = React.useState("");
  const [inputvalue13, setInputvalue13] = React.useState("");
  const [inputvalue14, setInputvalue14] = React.useState("");
  const [inputvalue15, setInputvalue15] = React.useState("");

  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] w-[100%]">
          <Column className="justify-start 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Text Fields
              </Text>
              <a
                href={"https://m3.material.io/components/text-fields/overview"}
                target="_blank"
                className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px] text-lime_900 underline w-[auto]"
                rel="noreferrer"
              >
                See design guideline
              </a>
              <Text
                className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-black_900 w-[auto]"
                variant="body8"
              >
                Text fields allow users to enter text into a UI. They typically
                appear in forms and dialogs.
              </Text>
            </Column>
          </Column>
        </Column>
        <List
          className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[21px] 3xl:gap-[26px] grid grid-cols-2 min-h-[auto] lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[45px] w-[100%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="bg-white_A700 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Grid className="xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-5 mt-[4px] w-[100%]">
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Row className="items-start mb-[1px] w-[41%]">
                          <Text className="Sunday" variant="body10">
                            Label
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center justify-evenly py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_303 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_900_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Grid>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                        <Text className="title" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="columnlabeltext_one" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="Text_ThirtyEight" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start mb-[3px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[20%]">
                        <Text className="title" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text
                          className="columnlabeltext_three"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="Text_ThirtyEight" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start mb-[3px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[20%]">
                        <Text className="title" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer49" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer49" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer49" variant="body10">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer49" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer49" variant="body10">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="columnlabeltext_one" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Column className="bg-gray_900_16 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[46%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text
                          className="columnlabeltext_three"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[46%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-lime_900 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="bg-gray_900_16 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_303 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-red_901 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_900_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_900_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content4" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content13" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_600_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                      <Text className="content14" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[19%]">
                        <Text className="content4" variant="body12">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext.svg"
                          className="inputtext_TwentyFive"
                          alt="inputtext TwentyFive"
                        />
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-center justify-end outline outline-[0.5px] outline-gray_900_1e pl-[4px] py-[4px] rounded-radius4 w-[100%]">
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                      <Text
                        className="mb-[1px] columninputtext_twentyfour"
                        variant="body10"
                      >
                        Label
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content4" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content13" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_900_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Text className="content14" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content16" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title" variant="body10">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content17" variant="body12">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="Text_ThirtyEight" variant="body10">
                              Input
                            </Text>
                            <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content16" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title" variant="body10">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content18" variant="body12">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="Text_ThirtyEight" variant="body10">
                              Input
                            </Text>
                            <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_600_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[41%]">
                      <Button
                        className="absolute bg-transparent bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                        <Text className="content19" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="columninputtext_twentyfour"
                            variant="body10"
                          >
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute items-end justify-start right-[0] top-[0] w-[76%]">
                          <Text className="content4" variant="body12">
                            Label
                          </Text>
                          <Img
                            src="images/img_inputtext.svg"
                            className="inputtext_ThirtyOne"
                            alt="inputtext ThirtyOne"
                          />
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue2}
                    onChange={(e) => setInputvalue2(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Two"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue2?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue2("")}
                          color="#1e1b16"
                        />
                      ) : inputvalue2?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue2("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineRed901"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue3}
                    onChange={(e) => setInputvalue3(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_900_7c text-gray_900_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue3?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue3("")}
                          color="#7c1e1b16"
                        />
                      ) : inputvalue3?.length > 0 ? (
                        <CloseSVG
                          color="#7c1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue3("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray9001e"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content12" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content4" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content12" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content13" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_900_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[66%]">
                      <Button
                        className="absolute bg-transparent bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                        <Text className="content14" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text
                            className="columninputtext_twentyfour"
                            variant="body10"
                          >
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content12" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="title" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content4" variant="body12">
                        Label
                      </Text>
                      <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="Text_ThirtyEight" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content12" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="title" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content13" variant="body12">
                        Label
                      </Text>
                      <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="Text_ThirtyEight" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="justify-start outline outline-[0.5px] outline-gray_600_1e lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content14" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined" variant="body10">
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] w-[21%]">
                      <Text className="content4" variant="body12">
                        Label
                      </Text>
                      <Img
                        src="images/img_inputtext.svg"
                        className="inputtext_TwentyFive"
                        alt="inputtext ThirtySeven"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined" variant="body10">
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="border-2 border-red_901 border-solid 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 title"
                    variant="body10"
                  >
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="outline outline-[0.5px] outline-gray_900_1e 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 columninputtext_twentyfour"
                    variant="body10"
                  >
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content12" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content4" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content12" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content13" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="justify-start outline outline-[0.5px] outline-gray_900_1e lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content14" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content16" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content17" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-lime_900 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content16" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content18" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="Text_ThirtyEight" variant="body10">
                            Input
                          </Text>
                          <Line className="bg-red_901 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_600_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Button
                      className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                    <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                      <Text className="content19" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue4}
                    onChange={(e) => setInputvalue4(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Six"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue4?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue4("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute items-end justify-start left-[6%] top-[0] w-[19%]">
                        <Text className="content4" variant="body12">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext.svg"
                          className="inputtext_ThirtyOne"
                          alt="inputtext FortyThree"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue5}
                    onChange={(e) => setInputvalue5(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Seven"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue5?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue5("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray600"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue6}
                    onChange={(e) => setInputvalue6(e?.target?.value)}
                    className="placeholder:text-gray_900 Condition1lin_Three"
                    wrapClassName="flex w-[100%]"
                    name="textfield Eight"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue6?.length > 0 ? (
                        <CloseSVG
                          color="#1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue6("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineRed901"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue7}
                    onChange={(e) => setInputvalue7(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_900_7c text-gray_900_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer Two"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_12.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue7?.length > 0 ? (
                        <CloseSVG
                          color="#7c1e1b16"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue7("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray9001e"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-lime_900 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content4" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_600 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content12" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-red_901 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content13" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_900_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Button
                      className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                    <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                      <Text className="content14" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                        <Text
                          className="columninputtext_twentyfour"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_one2"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start 2xl:p-[10px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Grid className="xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-5 mt-[4px] w-[100%]">
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center justify-between pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Row className="items-start mb-[1px] w-[41%]">
                          <Text className="Sunday1" variant="body10">
                            Label
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center justify-evenly py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center justify-evenly rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[54%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_800 py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="gridlabeltext_five">
                  <Column className="bg-gray_300_5e py-[4px] gridlabeltext_five">
                    <Row className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[43%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Grid>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                        <Text className="title_One" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text
                          className="columnlabeltext_one_one"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="Text_ThirtyNine_One" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start mb-[3px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[20%]">
                        <Text className="title_One" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[20%]">
                      <Column className="items-center justify-start w-[79%]">
                        <Text
                          className="columnlabeltext_three_one"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                        <Text className="Text_ThirtyNine_One" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start mb-[3px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[20%]">
                        <Text className="title_One" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer53" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer53" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer53" variant="body10">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Text className="statelayer53" variant="body10">
                      Label
                    </Text>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Text className="statelayer53" variant="body10">
                        Label
                      </Text>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text
                          className="columnlabeltext_one_one"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Column className="bg-gray_300_14 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[46%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Column className="items-center justify-start w-[34%]">
                        <Text
                          className="columnlabeltext_three_one"
                          variant="body12"
                        >
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Column className="justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[16%]">
                        <Text className="title_One" variant="body12">
                          Label
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[46%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[100%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[3px] w-[19%]">
                        <Column className="items-center justify-start w-[79%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between mt-[4px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_one_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-orange_301 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="bg-gray_300_14 items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_302 h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_800 gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text
                            className="columnlabeltext_three_one"
                            variant="body12"
                          >
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-deep_orange_200 h-[2px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="bg-gray_300_5e gridlabeltext_five">
                    <Row className="items-center pr-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="pb-[4px] w-[44%]">
                        <Column className="items-center justify-start w-[34%]">
                          <Text className="title_One" variant="body12">
                            Label
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] w-[100%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300_7c h-[1px] w-[100%]" />
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content6" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                        <Text className="content21" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_500_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[3px] w-[21%]">
                      <Text className="content22" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] w-[19%]">
                        <Text className="content6" variant="body12">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext_16X1.svg"
                          className="inputtext_TwentyFive"
                          alt="inputtext TwentyFive One"
                        />
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-center justify-end pl-[4px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                        <Text className="Sunday1" variant="body10">
                          Label
                        </Text>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-center justify-end outline outline-[0.5px] outline-gray_300_1e pl-[4px] py-[4px] rounded-radius4 w-[100%]">
                    <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[71%]">
                      <Text
                        className="mb-[1px] columninputtext_twentyfour_one"
                        variant="body10"
                      >
                        Label
                      </Text>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content6" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Row className="items-start justify-between pb-[4px] pl-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                        <Text className="content21" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_300_1e pb-[4px] pl-[4px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] pb-[4px] w-[46%]">
                      <Text className="content22" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content24" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title_One" variant="body10">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content25" variant="body12">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text
                              className="Text_ThirtyNine_One"
                              variant="body10"
                            >
                              Input
                            </Text>
                            <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content24" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text className="title_One" variant="body10">
                              Input
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                          <Text className="content26" variant="body12">
                            Label
                          </Text>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text
                              className="Text_ThirtyNine_One"
                              variant="body10"
                            >
                              Input
                            </Text>
                            <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                          </Row>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_500_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[41%]">
                      <Button
                        className="absolute bg-transparent bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start pb-[3px] right-[0] top-[0] w-[86%]">
                        <Text className="content27" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="columninputtext_twentyfour_one"
                            variant="body10"
                          >
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue8}
                    onChange={(e) => setInputvalue8(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue8?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue8("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue8?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue8("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray505"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[24%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute items-end justify-start right-[0] top-[0] w-[76%]">
                          <Text className="content6" variant="body12">
                            Label
                          </Text>
                          <Img
                            src="images/img_inputtext_16X1.svg"
                            className="inputtext_ThirtyOne"
                            alt="inputtext ThirtyOne One"
                          />
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue9}
                    onChange={(e) => setInputvalue9(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield One One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue9?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue9("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue9?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue9("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray505"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue10}
                    onChange={(e) => setInputvalue10(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Two One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue10?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue10("")}
                          color="#e9e1d9"
                        />
                      ) : inputvalue10?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue10("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineDeeporange200"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue11}
                    onChange={(e) => setInputvalue11(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_300_7c text-gray_300_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue11?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue11("")}
                          color="#7ce9e1d9"
                        />
                      ) : inputvalue11?.length > 0 ? (
                        <CloseSVG
                          color="#7ce9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue11("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray3001e"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content20" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_One" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content6" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_One" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content20" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_One" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start py-[4px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-between rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Stack className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[66%]">
                        <Button
                          className="absolute bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                          size="xl"
                        ></Button>
                        <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                          <Text className="content21" variant="body12">
                            Label
                          </Text>
                          <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                            <Text className="title_One" variant="body10">
                              Placeholder
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Button
                        className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                    </Row>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Row className="items-start justify-between outline outline-[0.5px] outline-gray_300_1e pb-[4px] rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[66%]">
                      <Button
                        className="absolute bg-transparent bottom-[0] lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] left-[0] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start pb-[4px] right-[0] top-[0] w-[91%]">
                        <Text className="content22" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text
                            className="columninputtext_twentyfour_one"
                            variant="body10"
                          >
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Button
                      className="bg-transparent lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[4px] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                  </Row>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content20" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="title_One" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content6" variant="body12">
                        Label
                      </Text>
                      <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="Text_ThirtyNine_One" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content20" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="title_One" variant="body10">
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content21" variant="body12">
                        Label
                      </Text>
                      <Row className="items-start justify-evenly ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text className="Text_ThirtyNine_One" variant="body10">
                          Input
                        </Text>
                        <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="justify-start outline outline-[0.5px] outline-gray_500_1e lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[3px] w-[23%]">
                      <Text className="content22" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined3" variant="body10">
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] w-[21%]">
                      <Text className="content6" variant="body12">
                        Label
                      </Text>
                      <Img
                        src="images/img_inputtext_16X1.svg"
                        className="inputtext_TwentyFive"
                        alt="inputtext ThirtySeven One"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text className="Styleoutlined3" variant="body10">
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="border-2 border-deep_orange_200 border-solid 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 title_One"
                    variant="body10"
                  >
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Text
                    className="outline outline-[0.5px] outline-gray_300_1e 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[13px] xl:pr-[17px] 2xl:pr-[19px] 3xl:pr-[22px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-radius4 columninputtext_twentyfour_one"
                    variant="body10"
                  >
                    Label
                  </Text>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content20" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content6" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content20" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content21" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text className="title_One" variant="body10">
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="justify-start outline outline-[0.5px] outline-gray_300_1e lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 w-[100%]">
                    <Column className="justify-start mb-[4px] pb-[4px] w-[51%]">
                      <Text className="content22" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content24" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content25" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-orange_301 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content24" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text className="title_One" variant="body10">
                            Input
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                        <Text className="content26" variant="body12">
                          Label
                        </Text>
                        <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                          <Text
                            className="Text_ThirtyNine_One"
                            variant="body10"
                          >
                            Input
                          </Text>
                          <Line className="bg-deep_orange_200 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mb-[1px] w-[1px]" />
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_500_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Button
                      className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                    <Column className="absolute justify-start left-[6%] pb-[3px] top-[0] w-[36%]">
                      <Text className="content27" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Input
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue12}
                    onChange={(e) => setInputvalue12(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Six One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue12?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue12("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray505"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute items-end justify-start left-[6%] top-[0] w-[19%]">
                        <Text className="content6" variant="body12">
                          Label
                        </Text>
                        <Img
                          src="images/img_inputtext_16X1.svg"
                          className="inputtext_ThirtyOne"
                          alt="inputtext FortyThree One"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue13}
                    onChange={(e) => setInputvalue13(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Seven One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue13?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue13("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray505"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue14}
                    onChange={(e) => setInputvalue14(e?.target?.value)}
                    className="placeholder:text-gray_302 Condition1lin_One_One"
                    wrapClassName="flex w-[100%]"
                    name="textfield Eight One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue14?.length > 0 ? (
                        <CloseSVG
                          color="#e9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue14("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineDeeporange200"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Input
                    value={inputvalue15}
                    onChange={(e) => setInputvalue15(e?.target?.value)}
                    className="font-normal not-italic p-[0] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] placeholder:text-gray_300_7c text-gray_300_7c tracking-ls1 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="statelayer Two One"
                    placeholder="Label"
                    prefix={
                      <Img
                        src="images/img_search_13.svg"
                        className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[2px] lg:mr-[4px] xl:w-[11px] xl:h-[12px] xl:ml-[3px] xl:mr-[5px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[3px] 2xl:mr-[6px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[4px] 3xl:mr-[7px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue15?.length > 0 ? (
                        <CloseSVG
                          color="#7ce9e1d9"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[3px] lg:mr-[8px] xl:w-[11px] xl:h-[12px] xl:ml-[4px] xl:mr-[10px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[5px] 2xl:mr-[12px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[6px] 3xl:mr-[14px] my-[auto]"
                          onClick={() => setInputvalue15("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineGray3001e"
                  ></Input>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-orange_301 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content6" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border border-gray_505 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content20" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Column className="border-2 border-deep_orange_200 border-solid items-center justify-start rounded-radius4 w-[100%]">
                    <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] pr-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                      <Button
                        className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="xl"
                      ></Button>
                      <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                        <Text className="content21" variant="body12">
                          Label
                        </Text>
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                          <Text className="title_One" variant="body10">
                            Placeholder
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text
                      className="columnsupportingtext_seven_one"
                      variant="body12"
                    >
                      Supporting text
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[18%]">
                  <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] outline outline-[0.5px] outline-gray_300_1e pr-[4px] rounded-radius4 w-[100%]">
                    <Button
                      className="absolute bg-transparent h-[max-content] inset-y-[0] left-[0] my-[auto] text-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      size="xl"
                    ></Button>
                    <Column className="absolute justify-start left-[6%] pb-[4px] top-[0] w-[60%]">
                      <Text className="content22" variant="body12">
                        Label
                      </Text>
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                        <Text
                          className="columninputtext_twentyfour_one"
                          variant="body10"
                        >
                          Placeholder
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="justify-end lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] w-[100%]">
                    <Text className="column_Two" variant="body12">
                      Supporting text
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default TextFieldsPage;
