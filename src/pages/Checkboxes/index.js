import React from "react";

import { Column, Img, Text, List, Row, Stack } from "components";

const CheckboxesPage = () => {
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
            <Column className="justify-start lg:mt-[51px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[86px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Checkboxes
              </Text>
              <Column className="justify-start lg:mr-[26px] xl:mr-[32px] 2xl:mr-[37px] 3xl:mr-[44px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[97%]">
                <a
                  href={"https://m3.material.io/components/checkbox/overview"}
                  target="_blank"
                  className="font-normal not-italic lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text className="columnlink4" variant="body8">
                  Checkboxes allow users to select one or more items from a set
                  and can be used to turn an option on or off. They’re a
                  selection control that often appears when users are asked to
                  pick a choice from options.
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
            <Column className="items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius5 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_4.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-lime_900_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Two"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-lime_900_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Three"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] rounded-radius50 file">
                  <Stack className="bg-lime_900_1e rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Four"
                    />
                    <Img
                      src="images/img_location_35X40.svg"
                      className="location"
                      alt="location"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind"
                    />
                  </Stack>
                </Column>
                <Column className="items-center 3xl:px-[10px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] file">
                  <Stack className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] rounded-radius50 lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]">
                    <div className="absolute bg-gray_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-lime_900_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Two"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-lime_900_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Three"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] rounded-radius50 file">
                  <Stack className="bg-lime_900_1e rounded-radius50 computer10">
                    <div className="absolute bg-lime_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Four"
                    />
                    <Img
                      src="images/img_location_35X40.svg"
                      className="location"
                      alt="location One"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Img
                  src="images/img_file_48X48.svg"
                  className="file"
                  alt="file"
                />
                <Img
                  src="images/img_file_1.svg"
                  className="file"
                  alt="file One"
                />
                <Img
                  src="images/img_volume_48X48.svg"
                  className="file"
                  alt="volume"
                />
                <Img
                  src="images/img_volume_48X48.svg"
                  className="file"
                  alt="volume One"
                />
                <Img
                  src="images/img_computer_48X48.svg"
                  className="rounded-radius50 file"
                  alt="computer One"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Five"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_4.svg"
                      className="checkmark"
                      alt="checkmark Six"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-red_900_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Seven"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-red_900_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Eight"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] rounded-radius50 file">
                  <Stack className="bg-red_900_1e rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark Nine"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="location"
                      alt="contrast"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Five"
                    />
                  </Stack>
                </Column>
                <Column className="items-center 3xl:px-[10px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] file">
                  <Stack className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] rounded-radius50 lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]">
                    <div className="absolute bg-gray_900 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Six"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-red_900_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Seven"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-red_900_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Eight"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] rounded-radius50 file">
                  <Stack className="bg-red_900_1e rounded-radius50 computer10">
                    <div className="absolute bg-red_901 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_24X24.svg"
                      className="checkmark"
                      alt="Iconscheckind Nine"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="location"
                      alt="contrast One"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Img
                  src="images/img_typeerrorunse.svg"
                  className="file"
                  alt="TypeErrorUnse"
                />
                <Img
                  src="images/img_television.svg"
                  className="file"
                  alt="television"
                />
                <Img
                  src="images/img_television_48X48.svg"
                  className="file"
                  alt="television One"
                />
                <Img
                  src="images/img_television_48X48.svg"
                  className="file"
                  alt="television Two"
                />
                <Img
                  src="images/img_computer_2.svg"
                  className="rounded-radius50 file"
                  alt="computer One"
                />
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius16 w-[100%]">
            <Column className="bg-gray_900 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius5 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_5.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_302 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="checkmark"
                      alt="checkmark One One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_5.svg"
                      className="checkmark"
                      alt="checkmark Two One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_5.svg"
                      className="checkmark"
                      alt="checkmark Three One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_1e rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_5.svg"
                      className="checkmark"
                      alt="checkmark Four One"
                    />
                    <Img
                      src="images/img_volume_35X40.svg"
                      className="location"
                      alt="volume One"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_1.svg"
                      className="checkmark"
                      alt="Iconscheckind One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_302 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind.svg"
                      className="checkmark"
                      alt="Iconscheckind One One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_1.svg"
                      className="checkmark"
                      alt="Iconscheckind Two One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_1.svg"
                      className="checkmark"
                      alt="Iconscheckind Three One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-orange_300_1e rounded-radius50 computer10">
                    <div className="absolute bg-orange_301 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_1.svg"
                      className="checkmark"
                      alt="Iconscheckind Four One"
                    />
                    <Img
                      src="images/img_volume_35X40.svg"
                      className="location"
                      alt="volume One One"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Img
                  src="images/img_computer_3.svg"
                  className="file"
                  alt="computer Two"
                />
                <Img
                  src="images/img_computer_4.svg"
                  className="file"
                  alt="computer One One"
                />
                <Img
                  src="images/img_computer_5.svg"
                  className="file"
                  alt="computer Two"
                />
                <Img
                  src="images/img_computer_5.svg"
                  className="file"
                  alt="computer Three"
                />
                <Img
                  src="images/img_save_48X48.svg"
                  className="file"
                  alt="save"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_6.svg"
                      className="checkmark"
                      alt="checkmark Five One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_302 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="checkmark"
                      alt="checkmark Six One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_6.svg"
                      className="checkmark"
                      alt="checkmark Seven One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_6.svg"
                      className="checkmark"
                      alt="checkmark Eight One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_1e rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_checkmark_6.svg"
                      className="checkmark"
                      alt="checkmark Nine One"
                    />
                    <Img
                      src="images/img_volume_1.svg"
                      className="location"
                      alt="volume Two"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_2.svg"
                      className="checkmark"
                      alt="Iconscheckind Five One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-gray_302 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind.svg"
                      className="checkmark"
                      alt="Iconscheckind Six One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_14 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_2.svg"
                      className="checkmark"
                      alt="Iconscheckind Seven One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_1e 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_2.svg"
                      className="checkmark"
                      alt="Iconscheckind Eight One"
                    />
                  </Stack>
                </Column>
                <Column className="items-center px-[4px] file">
                  <Stack className="bg-deep_orange_200_1e rounded-radius50 computer10">
                    <div className="absolute bg-deep_orange_200 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"></div>
                    <Img
                      src="images/img_iconscheckind_2.svg"
                      className="checkmark"
                      alt="Iconscheckind Nine One"
                    />
                    <Img
                      src="images/img_volume_1.svg"
                      className="location"
                      alt="volume Three"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Img
                  src="images/img_typeerrorunse_48X48.svg"
                  className="file"
                  alt="TypeErrorUnse One"
                />
                <Img
                  src="images/img_computer_3.svg"
                  className="file"
                  alt="computer Four"
                />
                <Img
                  src="images/img_file_2.svg"
                  className="file"
                  alt="file One"
                />
                <Img
                  src="images/img_file_2.svg"
                  className="file"
                  alt="file One One"
                />
                <Img
                  src="images/img_save_1.svg"
                  className="file"
                  alt="save One"
                />
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default CheckboxesPage;
