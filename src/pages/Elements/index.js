import React from "react";

import { Column, Img, Text, Row, Stack, List, Button, Line } from "components";

const ElementsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[28px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] w-[100%]">
          <Column className="justify-start xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Elements
              </Text>
              <Text
                className="lg:leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] 2xl:mr-[1008px] 3xl:mr-[1209px] lg:mr-[716px] xl:mr-[896px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic text-black_900 w-[26%]"
                variant="body8"
              >
                <span className="text-black_900 font-roboto font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Construction elements for kit components. <br />
                  Find more icons in the{" "}
                </span>
                <span className="text-lime_900 font-roboto font-normal underline lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Material Design Icons Stickersheet
                </span>
                <span className="text-black_900 font-roboto font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
              </Text>
            </Column>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Row className="items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mt-[10px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] w-[98%]">
            <Column className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[20%]">
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pr-[15px] xl:pr-[19px] 2xl:pr-[22px] 3xl:pr-[26px] rounded-radius16 w-[100%]">
                <Column className="items-end justify-start w-[99%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Stack className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                      <Img
                        src="images/img_menu_24X24.svg"
                        className="absolute bottom-[10%] right-[8%] IconsOne"
                        alt="menu"
                      />
                      <Img
                        src="images/img_image_35X35.png"
                        className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] left-[0] top-[13%] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                        alt="IMAGE"
                      />
                      <Stack
                        className="absolute bg-cover bg-repeat lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] pr-[1px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        style={{
                          backgroundImage: "url('images/img_group2192.png')",
                        }}
                      >
                        <Img
                          src="images/img_image_20X20.png"
                          className="absolute lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] left-[0] top-[2%] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="IMAGE One"
                        />
                        <Img
                          src="images/img_location_32X32.png"
                          className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] left-[0] top-[0] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[29px]"
                          alt="Location"
                        />
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_arrowleft_5.svg"
                      className="arrowleft"
                      alt="arrowleft"
                    />
                    <Img
                      src="images/img_arrowleft_5.svg"
                      className="arrowleft"
                      alt="arrowright"
                    />
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="arrowleft"
                      alt="checkmark"
                    />
                    <Img
                      src="images/img_close.svg"
                      className="arrowleft"
                      alt="close"
                    />
                    <Img
                      src="images/img_close.svg"
                      className="arrowleft"
                      alt="close One"
                    />
                  </Row>
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[91%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_icons01.svg"
                          className="IconsOne"
                          alt="IconsOne"
                        />
                        <Img
                          src="images/img_icons_02_18X18.svg"
                          className="IconsTwo"
                          alt="IconsTwo"
                        />
                        <Img
                          src="images/img_location.svg"
                          className="IconsTwo"
                          alt="location One"
                        />
                        <Img
                          src="images/img_bag.svg"
                          className="IconsTwo"
                          alt="bag"
                        />
                        <Img
                          src="images/img_arrowleft_6.svg"
                          className="IconsTwo"
                          alt="arrowleft One"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_icons01outlin.svg"
                          className="IconsOne"
                          alt="Icons01outlin"
                        />
                        <Img
                          src="images/img_icons02outlin.svg"
                          className="IconsTwo"
                          alt="Icons02outlin"
                        />
                        <Img
                          src="images/img_computer_24X24.svg"
                          className="IconsTwo"
                          alt="computer One"
                        />
                        <Img
                          src="images/img_mail.svg"
                          className="IconsTwo"
                          alt="mail"
                        />
                        <Img
                          src="images/img_bookmark.svg"
                          className="IconsTwo"
                          alt="bookmark"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_iconsfastrewi.svg"
                          className="IconsOne"
                          alt="Iconsfastrewi"
                        />
                        <Img
                          src="images/img_iconsskipprev.svg"
                          className="IconsTwo"
                          alt="Iconsskipprev"
                        />
                        <Img
                          src="images/img_icons02outlin.svg"
                          className="IconsTwo"
                          alt="Iconsplayarro"
                        />
                        <Img
                          src="images/img_iconsfastrewi.svg"
                          className="IconsTwo"
                          alt="Iconsfastforw"
                        />
                        <Img
                          src="images/img_iconsskipnext.svg"
                          className="IconsTwo"
                          alt="Iconsskipnext"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_icons_02_18X18.svg"
                          className="IconsOne"
                          alt="Iconsarrowrig"
                        />
                        <Img
                          src="images/img_icons_02_18X18.svg"
                          className="IconsTwo"
                          alt="Iconsarrowlef"
                        />
                        <Img
                          src="images/img_icons_02_18X18.svg"
                          className="IconsTwo"
                          alt="Iconsarrowdro"
                        />
                        <Img
                          src="images/img_icons_02_18X18.svg"
                          className="IconsTwo"
                          alt="Iconsarrowdro One"
                        />
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="IconsTwo"
                          alt="overflowmenu"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_car.svg"
                          className="IconsOne"
                          alt="car"
                        />
                        <Img
                          src="images/img_car_24X24.svg"
                          className="IconsTwo"
                          alt="car One"
                        />
                        <Img
                          src="images/img_car_1.svg"
                          className="IconsTwo"
                          alt="car Two"
                        />
                        <Img
                          src="images/img_search.svg"
                          className="IconsTwo"
                          alt="search"
                        />
                        <Img
                          src="images/img_car_2.svg"
                          className="IconsTwo"
                          alt="car Three"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="IconsOne"
                          alt="checkmark One"
                        />
                        <Img
                          src="images/img_checkmark_2.svg"
                          className="IconsTwo"
                          alt="checkmark One"
                        />
                        <Img
                          src="images/img_file.svg"
                          className="IconsTwo"
                          alt="file"
                        />
                        <Img
                          src="images/img_save.svg"
                          className="IconsTwo"
                          alt="save"
                        />
                        <Img
                          src="images/img_menu_1.svg"
                          className="IconsTwo"
                          alt="menu One"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_mail_24X24.svg"
                          className="IconsOne"
                          alt="mail One"
                        />
                        <Img
                          src="images/img_bookmark_24X24.svg"
                          className="IconsTwo"
                          alt="bookmark One"
                        />
                        <Img
                          src="images/img_bookmark_1.svg"
                          className="IconsTwo"
                          alt="bookmark One"
                        />
                        <Column
                          className="bg-cover bg-repeat items-center ml-[4px] IconsOne"
                          style={{
                            backgroundImage: "url('images/img_group2193.svg')",
                          }}
                        >
                          <Column
                            className="bg-cover bg-repeat lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group2194.svg')",
                            }}
                          >
                            <Button
                              className="bg-cover bg-repeat lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] text-center w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/defaultNoData.png')",
                              }}
                              variant="button74"
                            ></Button>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_user_24X24.svg"
                          className="ml-[3px] IconsOne"
                          alt="user"
                        />
                        <Img
                          src="images/img_user_1.svg"
                          className="IconsTwo"
                          alt="user One"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_computer_1.svg"
                          className="IconsOne"
                          alt="computer Two"
                        />
                        <Img
                          src="images/img_bookmark_2.svg"
                          className="IconsTwo"
                          alt="bookmark Two"
                        />
                        <Img
                          src="images/img_brightness.svg"
                          className="IconsTwo"
                          alt="brightness"
                        />
                        <Img
                          src="images/img_iconsdarkmode.svg"
                          className="IconsTwo"
                          alt="Iconsdarkmode"
                        />
                        <Img
                          src="images/img_trash_24X24.svg"
                          className="IconsTwo"
                          alt="trash"
                        />
                      </Row>
                      <Row className="items-center lg:mr-[29px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[50px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[82%]">
                        <Img
                          src="images/img_iconsradiobut.svg"
                          className="IconsOne"
                          alt="Iconsradiobut"
                        />
                        <Img
                          src="images/img_icons01outlin.svg"
                          className="IconsTwo"
                          alt="Iconsradiobut One"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="IconsTwo"
                          alt="star"
                        />
                        <Img
                          src="images/img_star_24X24.svg"
                          className="IconsTwo"
                          alt="star One"
                        />
                        <Img
                          src="images/img_folder.svg"
                          className="IconsTwo"
                          alt="folder"
                        />
                      </Row>
                      <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                        <Img
                          src="images/img_arrowleft_6.svg"
                          className="IconsOne"
                          alt="arrowleft Two"
                        />
                        <Img
                          src="images/img_arrowleft_6.svg"
                          className="IconsOne"
                          alt="arrowright One"
                        />
                        <Img
                          src="images/img_upload.svg"
                          className="IconsOne"
                          alt="upload"
                        />
                        <Img
                          src="images/img_upload.svg"
                          className="IconsOne"
                          alt="upload One"
                        />
                        <Img
                          src="images/img_folder_24X24.svg"
                          className="IconsOne"
                          alt="folder One"
                        />
                        <Img
                          src="images/img_iconsmobilefr.svg"
                          className="IconsOne"
                          alt="Iconsmobilefr"
                        />
                      </Row>
                      <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                        <Img
                          src="images/img_trash_1.svg"
                          className="IconsOne"
                          alt="trash One"
                        />
                        <Img
                          src="images/img_lock_24X24.svg"
                          className="IconsOne"
                          alt="lock"
                        />
                        <Img
                          src="images/img_edit.svg"
                          className="IconsOne"
                          alt="edit"
                        />
                        <Img
                          src="images/img_share.svg"
                          className="IconsOne"
                          alt="share"
                        />
                        <Img
                          src="images/img_close_24X24.svg"
                          className="IconsOne"
                          alt="close Two"
                        />
                        <Img
                          src="images/img_calendar.svg"
                          className="IconsOne"
                          alt="calendar"
                        />
                      </Row>
                      <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                        <Img
                          src="images/img_volume.svg"
                          className="IconsOne"
                          alt="volume"
                        />
                        <Img
                          src="images/img_search_24X24.svg"
                          className="IconsOne"
                          alt="search One"
                        />
                        <Img
                          src="images/img_settings.svg"
                          className="IconsOne"
                          alt="settings"
                        />
                        <Img
                          src="images/img_checkmark_24X24.svg"
                          className="IconsOne"
                          alt="checkmark Two"
                        />
                        <Img
                          src="images/img_iconscheckind.svg"
                          className="IconsOne"
                          alt="Iconscheckind"
                        />
                        <Img
                          src="images/img_clock.svg"
                          className="IconsOne"
                          alt="clock"
                        />
                      </Row>
                      <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="IconsOne"
                          alt="arrowleft Three"
                        />
                        <Img
                          src="images/img_location_24X24.svg"
                          className="IconsOne"
                          alt="location Two"
                        />
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="IconsOne"
                          alt="overflowmenu One"
                        />
                        <Img
                          src="images/img_microphone.svg"
                          className="IconsOne"
                          alt="microphone"
                        />
                        <Img
                          src="images/img_globe.svg"
                          className="IconsOne"
                          alt="globe"
                        />
                        <Img
                          src="images/img_search_1.svg"
                          className="IconsOne"
                          alt="search Two"
                        />
                      </Row>
                    </List>
                    <Img
                      src="images/img_sort.svg"
                      className="arrowleft"
                      alt="sort"
                    />
                  </Column>
                </Column>
              </Column>
              <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[65%]">
                <Row className="border border-bluegray_100 border-solid items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[82%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]"
                    size="mdIcn"
                    variant="icbFillOrange100"
                  >
                    <Img
                      src="images/img_checkmark_40X40.svg"
                      className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="checkmark Three"
                    />
                  </Button>
                  <Text
                    className="bg-orange_100 flex font-medium items-center 3xl:ml-[10px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 text-lime_900 tracking-ls1 w-[40px]"
                    variant="body10"
                  >
                    A
                  </Text>
                  <Button
                    className="flex lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[10px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] rounded-radius50 lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]"
                    size="smIcn"
                    variant="icbFillOrange100"
                  >
                    <Img
                      src="images/img_user_40X40.svg"
                      className="flex items-center justify-center"
                      alt="user One"
                    />
                  </Button>
                </Row>
                <Img
                  src="images/img_profile.svg"
                  className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                  alt="profile"
                />
              </Row>
            </Column>
            <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[25%]">
              <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius16 w-[100%]">
                <Row className="items-start justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                  <Text className="DeviceDevicef" variant="body11">
                    9:30
                  </Text>
                  <Img
                    src="images/img_signal.svg"
                    className="signal"
                    alt="signal"
                  />
                </Row>
                <Line className="bg-gray_900 h-[2px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius1 w-[17%]" />
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid items-end justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] rounded-radius16 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start w-[95%]">
                      <Row className="items-center justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] my-[1px] rounded-radius50 text-center lg:w-[14px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"
                          size="8xl"
                          variant="FillOrange100"
                        ></Button>
                        <Row className="items-center justify-between w-[87%]">
                          <Row className="items-center justify-between w-[62%]">
                            <Img
                              src="images/img_sort.svg"
                              className="IconsOne"
                              alt="sort One"
                            />
                            <Img
                              src="images/img_settings.svg"
                              className="IconsOne"
                              alt="settings One"
                            />
                            <Img
                              src="images/img_search_2.svg"
                              className="IconsOne"
                              alt="search Three"
                            />
                            <Img
                              src="images/img_location_24X24.svg"
                              className="IconsOne"
                              alt="location Three"
                            />
                          </Row>
                          <Line className="bg-bluegray_100 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[1px]" />
                          <Row className="items-center justify-between w-[23%]">
                            <Img
                              src="images/img_overflowmenu_24X24.svg"
                              className="IconsOne"
                              alt="overflowmenu Two"
                            />
                            <Img
                              src="images/img_microphone.svg"
                              className="IconsOne"
                              alt="microphone One"
                            />
                          </Row>
                        </Row>
                      </Row>
                      <Column className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="listq">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              q
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              w
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              e
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              r
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              t
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              y
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              u
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              i
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              o
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              p
                            </Button>
                          </Row>
                          <Row className="items-center mx-[auto] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] rounded-radius6 w-[89%]">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              a
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              s
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              d
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              f
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              g
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              h
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              j
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              k
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              l
                            </Button>
                          </Row>
                        </List>
                        <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Button
                            className="text-center w-[14%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray303"
                          ></Button>
                          <Row className="items-center justify-center rounded-radius6 w-[69%]">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              z
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              x
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              c
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              v
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              b
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              n
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              m
                            </Button>
                          </Row>
                          <Button
                            className="text-center w-[14%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray303"
                          ></Button>
                        </Row>
                        <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Button
                            className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[14%]"
                            shape="CircleBorder23"
                            size="3xl"
                            variant="FillOrange101"
                          >
                            ?123
                          </Button>
                          <Column className="bg-gray_303 items-center p-[1px] rounded-radius6 w-[9%]">
                            <Button
                              className="lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-center car"
                              shape="RoundedBorder8"
                              size="8xl"
                              variant="FillGray800"
                            ></Button>
                            <Text
                              className="mt-[2px] not-italic text-gray_800 w-[auto]"
                              variant="body6"
                            >
                              ,
                            </Text>
                          </Column>
                          <Button
                            className="text-center w-[9%]"
                            shape="RoundedBorder8"
                            size="sm"
                            variant="FillWhiteA700"
                          ></Button>
                          <Img
                            src="images/img_lightcolorkey.svg"
                            className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius6 w-[39%]"
                            alt="Lightcolorkey"
                          />
                          <Button
                            className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_800 w-[9%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray303"
                          >
                            .
                          </Button>
                          <Button
                            className="text-center w-[14%]"
                            shape="CircleBorder23"
                            size="xl"
                            variant="FillOrange301"
                          ></Button>
                        </Row>
                      </Column>
                      <Row className="items-start justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[100%]">
                        <Img
                          src="images/img_arrowleft_6.svg"
                          className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="arrowdown"
                        />
                        <Line className="bg-gray_900 h-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius1 w-[18%]" />
                        <Img
                          src="images/img_computer_20X20.svg"
                          className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mr-[10px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="computer Three"
                        />
                      </Row>
                    </Column>
                    <Line className="bg-white_A700 lg:h-[155px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[261px] w-[1px]" />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <Line className="bg-white_A700 h-[0] w-[95%]" />
                    <div className="bg-white_A700 h-[1px] w-[1px]"></div>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_900 border border-gray_806 border-solid items-end justify-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] rounded-radius16 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="bg-gray_900 items-center justify-start w-[95%]">
                      <Row className="items-center justify-between lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                        <Button
                          className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] my-[1px] rounded-radius50 text-center lg:w-[14px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"
                          size="8xl"
                          variant="FillLightgreen900"
                        ></Button>
                        <Row className="items-center justify-between w-[87%]">
                          <Row className="items-center justify-between w-[62%]">
                            <Img
                              src="images/img_iconsgif24px.svg"
                              className="IconsOne"
                              alt="IconsGIF24px"
                            />
                            <Img
                              src="images/img_settings_24X24.svg"
                              className="IconsOne"
                              alt="settings Two"
                            />
                            <Img
                              src="images/img_search_3.svg"
                              className="IconsOne"
                              alt="search Four"
                            />
                            <Img
                              src="images/img_location_24X24.svg"
                              className="IconsOne"
                              alt="location Four"
                            />
                          </Row>
                          <Line className="bg-gray_806 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[1px]" />
                          <Row className="items-center justify-between w-[23%]">
                            <Img
                              src="images/img_user_2.svg"
                              className="IconsOne"
                              alt="user Two"
                            />
                            <Img
                              src="images/img_microphone_24X24.svg"
                              className="IconsOne"
                              alt="microphone Two"
                            />
                          </Row>
                        </Row>
                      </Row>
                      <Column className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="listq">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              q
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              w
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              e
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              r
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              t
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              y
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              u
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              i
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              o
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[9%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              p
                            </Button>
                          </Row>
                          <Row className="items-center mx-[auto] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] rounded-radius6 w-[89%]">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              a
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              s
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              d
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              f
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              g
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              h
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              j
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              k
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[10%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              l
                            </Button>
                          </Row>
                        </List>
                        <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Button
                            className="text-center w-[14%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray800"
                          ></Button>
                          <Row className="items-center justify-center rounded-radius6 w-[69%]">
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              z
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              x
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              c
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              v
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              b
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              n
                            </Button>
                            <Button
                              className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[12%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              m
                            </Button>
                          </Row>
                          <Button
                            className="text-center w-[14%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray800"
                          ></Button>
                        </Row>
                        <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Button
                            className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[14%]"
                            shape="CircleBorder23"
                            size="3xl"
                            variant="FillGray804"
                          >
                            ?123
                          </Button>
                          <Column className="bg-gray_800 items-center p-[1px] rounded-radius6 w-[9%]">
                            <Button
                              className="lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-center car"
                              shape="RoundedBorder8"
                              size="8xl"
                              variant="FillGray402"
                            ></Button>
                            <Text
                              className="mt-[2px] not-italic text-gray_402 w-[auto]"
                              variant="body6"
                            >
                              ,
                            </Text>
                          </Column>
                          <Button
                            className="text-center w-[9%]"
                            shape="RoundedBorder8"
                            size="sm"
                            variant="FillGray900"
                          ></Button>
                          <Img
                            src="images/img_lightcolorkey_46X154.svg"
                            className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius6 w-[39%]"
                            alt="Lightcolorkey One"
                          />
                          <Button
                            className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_402 w-[9%]"
                            shape="RoundedBorder8"
                            size="xl"
                            variant="FillGray800"
                          >
                            .
                          </Button>
                          <Button
                            className="text-center w-[14%]"
                            shape="CircleBorder23"
                            size="xl"
                            variant="FillLime900"
                          ></Button>
                        </Row>
                      </Column>
                      <Row className="items-start justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[100%]">
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="arrowdown One"
                        />
                        <Line className="bg-gray_900 h-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius1 w-[18%]" />
                        <Img
                          src="images/img_grid.svg"
                          className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mr-[10px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                          alt="grid"
                        />
                      </Row>
                    </Column>
                    <Line className="bg-gray_900 lg:h-[155px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[261px] w-[1px]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[39px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[100%]">
                    <Column className="bg-gray_900 items-center w-[95%]">
                      <Line className="bg-gray_900 h-[0] w-[100%]" />
                      <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[96%]">
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mr-[135px] xl:mr-[168px] 2xl:mr-[190px] 3xl:mr-[228px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          1
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] mx-[auto] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          2
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[135px] xl:ml-[168px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          3
                        </Text>
                        <Column className="bg-gray_800 items-center justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] w-[13%]">
                          <Text
                            className="not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            +
                          </Text>
                          <Text
                            className="lg:mt-[55px] xl:mt-[69px] 2xl:mt-[77px] 3xl:mt-[93px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            -
                          </Text>
                          <Text
                            className="2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[97px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            *
                          </Text>
                          <Text
                            className="xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] lg:mt-[99px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            /
                          </Text>
                        </Column>
                        <Text
                          className="bg-gray_800 justify-center lg:ml-[187px] xl:ml-[234px] 2xl:ml-[263px] 3xl:ml-[315px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] not-italic 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] text-gray_400_a2 w-[51px]"
                          variant="body9"
                        >
                          %
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mr-[135px] xl:mr-[168px] 2xl:mr-[190px] 3xl:mr-[228px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          4
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] mx-[auto] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          5
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[135px] xl:ml-[168px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          6
                        </Text>
                        <Button
                          className="lg:ml-[187px] xl:ml-[234px] 2xl:ml-[263px] 3xl:ml-[315px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] text-center w-[13%]"
                          size="2xl"
                          variant="FillGray800"
                        ></Button>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mr-[135px] xl:mr-[168px] 2xl:mr-[190px] 3xl:mr-[228px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          7
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] mx-[auto] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          8
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[135px] xl:ml-[168px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          9
                        </Text>
                        <Button
                          className="lg:ml-[187px] xl:ml-[234px] 2xl:ml-[263px] 3xl:ml-[315px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] text-center w-[13%]"
                          size="lg"
                          variant="FillGray800"
                        ></Button>
                        <Text
                          className="bg-gray_900 font-normal lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] not-italic 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] text-gray_302 w-[50px]"
                          variant="body11"
                        >
                          !?#
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] mx-[auto] not-italic lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[32px] text-gray_302 w-[90px]"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Text
                          className="bg-gray_900 justify-center lg:ml-[135px] xl:ml-[168px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] not-italic lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] text-gray_302 w-[50px]"
                          variant="body6"
                        >
                          =
                        </Text>
                        <Text
                          className="bg-gray_800 justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] not-italic lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] 3xl:px-[10px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] text-gray_402 w-[34px]"
                          variant="body6"
                        >
                          ,
                        </Text>
                        <Text
                          className="bg-gray_800 justify-center lg:ml-[165px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[279px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] not-italic lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] 3xl:px-[10px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] text-gray_402 w-[34px]"
                          variant="body6"
                        >
                          .
                        </Text>
                        <Text
                          className="bg-gray_804 font-medium lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] text-orange_101 w-[51px]"
                          variant="body11"
                        >
                          ?123
                        </Text>
                        <Button
                          className="lg:ml-[187px] xl:ml-[234px] 2xl:ml-[263px] 3xl:ml-[315px] lg:mt-[122px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[206px] text-center w-[13%]"
                          size="lg"
                          variant="FillLime900"
                        ></Button>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[163px] xl:mt-[204px] 2xl:mt-[230px] 3xl:mt-[276px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[1px] w-[5%]"
                          alt="arrowdown Two"
                        />
                        <Line className="bg-gray_900 h-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[19%]" />
                        <Img
                          src="images/img_keyboard20px.svg"
                          className="h-[1px] w-[5%]"
                          alt="keyboard20px"
                        />
                      </Row>
                    </Column>
                    <Row className="bg-gray_900 h-[1px] items-center justify-between w-[1px]">
                      <Row className="h-[1px] items-end justify-center w-[100%]">
                        <Row className="bg-gray_800 h-[1px] items-end justify-between lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] w-[100%]">
                          <Text
                            className="flex items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            +
                          </Text>
                          <Text
                            className="flex items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            -
                          </Text>
                          <Text
                            className="flex items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            *
                          </Text>
                          <Text
                            className="flex items-center lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[90px] not-italic text-gray_400_a2 w-[auto]"
                            variant="body9"
                          >
                            /
                          </Text>
                        </Row>
                        <div className="h-[1px] 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[79px] xl:mt-[99px] overflow-x-auto w-[100%]">
                          <Row className="h-[1px] items-start justify-between w-[100%]">
                            <Button
                              className="font-medium 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[100%]"
                              shape="RoundedBorder19"
                              size="xl"
                              variant="FillGray804"
                            >
                              ?123
                            </Button>
                            <Button
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_402 w-[100%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray800"
                            >
                              ,
                            </Button>
                            <Button
                              className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-gray_302 w-[100%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray900"
                            >
                              !?#
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[100%]"
                              shape="RoundedBorder8"
                              size="md"
                              variant="FillGray900"
                            >
                              0
                            </Button>
                            <Button
                              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_302 w-[100%]"
                              shape="RoundedBorder8"
                              size="md"
                              variant="FillGray900"
                            >
                              =
                            </Button>
                            <Button
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_402 w-[100%]"
                              shape="RoundedBorder8"
                              size="xl"
                              variant="FillGray800"
                            >
                              .
                            </Button>
                            <Button
                              className="text-center w-[100%]"
                              shape="RoundedBorder19"
                              size="xl"
                              variant="FillLime900"
                            ></Button>
                          </Row>
                        </div>
                        <div className="h-[1px] overflow-x-auto w-[100%]">
                          <Stack className="h-[1px] w-[1px]">
                            <Stack className="absolute 2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] left-[0] top-[0] w-[100%]">
                              <div className="absolute bg-gray_900 2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] rounded-radius6 w-[100%]"></div>
                              <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[14%] my-[auto] w-[5%]">
                                <Text
                                  className="not-italic text-gray_302 w-[auto]"
                                  variant="body6"
                                >
                                  1
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  4
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  7
                                </Text>
                              </Column>
                              <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[5%]">
                                <Text
                                  className="not-italic text-gray_302 w-[auto]"
                                  variant="body6"
                                >
                                  2
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  5
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  8
                                </Text>
                              </Column>
                              <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[14%] w-[5%]">
                                <Text
                                  className="not-italic text-gray_302 w-[auto]"
                                  variant="body6"
                                >
                                  3
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  6
                                </Text>
                                <Text className="Four_Two" variant="body6">
                                  9
                                </Text>
                              </Column>
                              <Line className="absolute bg-gray_900 2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] left-[33%] w-[2px]" />
                              <Line className="absolute bg-gray_900 2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] right-[33%] w-[2px]" />
                            </Stack>
                            <Line className="absolute bg-gray_900 h-[2px] left-[0] rotate-[90deg] top-[100%] w-[100%]" />
                            <Line className="absolute bg-gray_900 h-[2px] left-[0] rotate-[90deg] top-[100%] w-[100%]" />
                          </Stack>
                        </div>
                        <Button
                          className="h-[1px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] text-center w-[100%]"
                          size="lg"
                          variant="FillGray800"
                        ></Button>
                        <Button
                          className="h-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] text-center w-[100%]"
                          size="lg"
                          variant="FillGray800"
                        ></Button>
                        <Text
                          className="bg-gray_800 flex items-center justify-center lg:ml-[156px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] not-italic xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[8px] text-gray_400_a2 w-[1px]"
                          variant="body9"
                        >
                          %
                        </Text>
                      </Row>
                      <Line className="bg-gray_505 h-[1px] lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[194px] w-[1px]" />
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
            <List
              className="lg:gap-[22px] xl:gap-[27px] 2xl:gap-[31px] 3xl:gap-[37px] grid grid-cols-2 min-h-[auto] lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 w-[50%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_900 items-center justify-start mt-[1px] outline outline-[8px] outline-gray_500_7f lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] rounded-radius18 w-[100%]">
                <Row className="items-start justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                  <Text
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] columnprimary"
                    variant="body11"
                  >
                    9:30
                  </Text>
                  <Img
                    src="images/img_righticons.svg"
                    className="signal"
                    alt="righticons"
                  />
                </Row>
                <Line className="bg-white_A701 h-[2px] lg:mt-[450px] xl:mt-[563px] 2xl:mt-[633px] 3xl:mt-[760px] rounded-radius1 w-[17%]" />
              </Column>
              <Column className="bg-white_A701 items-center justify-start mb-[1px] outline outline-[8px] outline-gray_600_7f lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] rounded-radius18 w-[100%]">
                <Row className="items-start justify-between lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                  <Text className="DeviceDevicef" variant="body11">
                    9:30
                  </Text>
                  <Img
                    src="images/img_signal_17X46.svg"
                    className="signal"
                    alt="signal One"
                  />
                </Row>
                <Line className="bg-gray_900 h-[2px] lg:mt-[450px] xl:mt-[563px] 2xl:mt-[633px] 3xl:mt-[760px] rounded-radius1 w-[17%]" />
              </Column>
            </List>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ElementsPage;
