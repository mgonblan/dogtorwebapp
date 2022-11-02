import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  FillGray900: "bg-gray_900",
  FillGray90016: "bg-gray_900_16",
  FillGray30014: "bg-gray_300_14",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
  FillGray303: "bg-gray_303",
  OutlineBlack9004c: "bg-bluegray_900 shadow-bs1",
  OutlineBlack9004c1_2: "bg-gray_302 shadow-bs1",
  srcOutlineGray600: "border border-gray_600 border-solid",
  srcFillGray100: "bg-gray_100",
  srcOutlineRed901: "border-2 border-red_901 border-solid",
  srcOutlineGray9001e: "outline outline-[0.5px] outline-gray_900_1e",
  srcOutlineGray505: "border border-gray_505 border-solid",
  srcOutlineDeeporange200: "border-2 border-deep_orange_200 border-solid",
  srcOutlineGray3001e: "outline outline-[0.5px] outline-gray_300_1e",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder4: "rounded-radius4",
  srcCircleBorder22: "rounded-radius22",
};
const sizes = {
  sm: "p-[11px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px]",
  md: "lg:pb-[30px] pb-[35px] xl:pb-[38px] 2xl:pb-[43px] 3xl:pb-[51px] lg:pt-[10px] pt-[12px] xl:pt-[13px] 2xl:pt-[14px] 3xl:pt-[17px] lg:px-[10px] px-[12px] xl:px-[13px] 2xl:px-[14px] 3xl:px-[17px]",
  lg: "lg:pb-[15px] pb-[18px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pt-[12px] pt-[14px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] lg:px-[12px] px-[14px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px]",
  xl: "lg:p-[13px] p-[15px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px]",
  "2xl": "lg:p-[16px] p-[19px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px]",
  "3xl": "lg:pb-[21px] pb-[24px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px]",
  smSrc: "2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] p-[9px]",
  mdSrc: "lg:p-[16px] p-[19px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "srcRoundedBorder4",
    "srcCircleBorder22",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillGray900",
    "FillGray90016",
    "FillGray30014",
    "UnderLineBluegray100",
    "FillGray303",
    "OutlineBlack9004c",
    "OutlineBlack9004c1_2",
    "srcOutlineGray600",
    "srcFillGray100",
    "srcOutlineRed901",
    "srcOutlineGray9001e",
    "srcOutlineGray505",
    "srcOutlineDeeporange200",
    "srcOutlineGray3001e",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smSrc",
    "mdSrc",
  ]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
