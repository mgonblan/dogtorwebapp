import React from "react";

import { Column, Img, Text, Row } from "components";

const LayoutBreakpointsPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
          <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] w-[100%]">
            <Img
              src="images/img_computer.svg"
              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
              alt="computer"
            />
            <Column className="justify-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[100%]">
              <Text
                className="ml-[1px] xl:mr-[1098px] 2xl:mr-[1236px] 3xl:mr-[1483px] lg:mr-[878px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Layout Breakpoints
              </Text>
              <Column className="justify-start xl:mr-[1077px] 2xl:mr-[1212px] 3xl:mr-[1454px] lg:mr-[861px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[14%]">
                <a
                  href={
                    "https://m3.material.io/foundations/adaptive-design/canonical-layouts"
                  }
                  target="_blank"
                  className="font-normal not-italic lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-lime_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  See design guideline
                </a>
                <Text
                  className="lg:leading-[4px] xl:leading-[5px] 2xl:leading-[6px] 3xl:leading-[7px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-black_900 w-[100%]"
                  variant="body8"
                >
                  <span className="text-black_900 font-roboto font-normal lg:text-[3px] xl:text-[4px] 2xl:text-[4px] 3xl:text-[5px]">
                    Layout Breakpoints help you start working with Adaptive
                    design in mind.  Setup your prefered layout using the
                    properties panel and then detach the instance to get
                    started.
                    <br />
                    (press ‘shift’{" "}
                  </span>
                  <span className="text-black_900 font-roboto font-normal lg:text-[3px] xl:text-[4px] 2xl:text-[4px] 3xl:text-[5px]">
                    +
                  </span>
                  <span className="text-black_900 font-roboto font-normal lg:text-[3px] xl:text-[4px] 2xl:text-[4px] 3xl:text-[5px]">
                    {" "}
                    G to toggle Figma’s layout grid visibility)
                  </span>
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <Row className="items-start justify-between lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] w-[100%]">
          <Column className="justify-start mt-[3px] w-[32%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Large (1440+dp)
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <div className="bg-white_A701 lg:h-[165px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] w-[87%]"></div>
              <div className="bg-white_A701 lg:h-[165px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[87%]"></div>
              <div className="bg-white_A701 lg:h-[165px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"></div>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] w-[25%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Medium (1240-1439dp)
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <div className="bg-white_A701 lg:h-[132px] xl:h-[165px] 2xl:h-[185px] 3xl:h-[222px] w-[100%]"></div>
              <div className="bg-white_A701 lg:h-[132px] xl:h-[165px] 2xl:h-[185px] 3xl:h-[222px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"></div>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] w-[18%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Medium (905-1239dp)
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <div className="bg-white_A701 lg:h-[125px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] w-[100%]"></div>
              <div className="bg-white_A701 lg:h-[125px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"></div>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] w-[12%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Small (600-904dp)
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <div className="bg-white_A701 lg:h-[146px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] w-[100%]"></div>
              <div className="bg-white_A701 lg:h-[146px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"></div>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] w-[8%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body8"
            >
              Extra Small (0-599dp)
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius5 w-[100%]">
              <div className="bg-white_A701 lg:h-[117px] xl:h-[147px] 2xl:h-[165px] 3xl:h-[198px] w-[100%]"></div>
              <div className="bg-white_A701 lg:h-[117px] xl:h-[147px] 2xl:h-[165px] 3xl:h-[198px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"></div>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default LayoutBreakpointsPage;
