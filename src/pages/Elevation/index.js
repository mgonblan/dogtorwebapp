import React from "react";

import { Column, Img, Text } from "components";

const ElevationPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[35px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
          <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
              alt="computer"
            />
            <Column className="justify-start lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] pr-[4px] pt-[4px] w-[100%]">
              <Text
                className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Elevation
              </Text>
              <Text
                className="lg:leading-[16px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mr-[434px] xl:mr-[543px] 2xl:mr-[611px] 3xl:mr-[733px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-black_900 w-[54%]"
                variant="body8"
              >
                Elevation can be depicted using shadows or other visual cues,
                such as surface fills or opacities.
                <br />
                To copy elevation styles, use ⌘ + ⌥ + c to copy the styles. and
                ⌘ + ⌥ + v to paste.
              </Text>
            </Column>
          </Column>
        </Column>
        <Img
          src="images/img_elevation.svg"
          className="lg:h-[574px] xl:h-[717px] 2xl:h-[807px] 3xl:h-[968px] w-[100%]"
          alt="Elevation One"
        />
      </Column>
    </>
  );
};

export default ElevationPage;
