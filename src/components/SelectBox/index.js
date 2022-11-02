import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const variants = {
  FillGray8001e: "bg-gray_800_1e",
  OutlineGray301: "bg-gray_902 border border-gray_301 border-solid",
  OutlineGray600: "border border-gray_600 border-solid",
  OutlineBlack90026: "bg-white_A700 shadow-bs",
  FillGray80014: "bg-gray_800_14",
  FillGray90028: "bg-gray_900_28",
  OutlineGray8001e: "border border-gray_800_1e border-solid",
  FillOrange101: "bg-orange_101",
  OutlineBlack900261_2: "bg-orange_101 shadow-bs",
  FillGray90014: "bg-gray_900_14",
  FillGray9001e1: "bg-gray_900_1e1",
  FillGray90029: "bg-gray_900_29",
  OutlineGray505: "border border-gray_505 border-solid",
  OutlineBlack9004c: "bg-gray_900 shadow-bs2",
  FillGray40014: "bg-gray_400_14",
  FillGray4001e: "bg-gray_400_1e",
  FillGray80028: "bg-gray_800_28",
  FillGray40028: "bg-gray_400_28",
  OutlineGray3001e: "border border-gray_300_1e border-solid",
  FillGray3001e: "bg-gray_300_1e",
  FillGray804: "bg-gray_804",
  OutlineBlack9004c1_2: "bg-gray_804 shadow-bs2",
  FillOrange10014: "bg-orange_100_14",
  FillOrange1001e: "bg-orange_100_1e",
  FillOrange10028: "bg-orange_100_28",
  dropdown25: "",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  CircleBorder20: "rounded-radius20",
};
const sizes = {
  sm: "3xl:p-[11px] lg:p-[7px] p-[8px] 2xl:p-[9px]",
  md: "lg:pb-[5px] pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] pt-[10px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] lg:px-[5px] px-[6px] 2xl:px-[7px] 3xl:px-[8px]",
  lg: "pb-[10px] xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[12px] pt-[14px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] px-[10px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px]",
  xl: "lg:p-[12px] p-[14px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#1e1b16",
              "&:hover": { backgroundColor: "#1e1b16", color: "#e9e1d9" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "CircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillGray8001e",
    "OutlineGray301",
    "OutlineGray600",
    "OutlineBlack90026",
    "FillGray80014",
    "FillGray90028",
    "OutlineGray8001e",
    "FillOrange101",
    "OutlineBlack900261_2",
    "FillGray90014",
    "FillGray9001e1",
    "FillGray90029",
    "OutlineGray505",
    "OutlineBlack9004c",
    "FillGray40014",
    "FillGray4001e",
    "FillGray80028",
    "FillGray40028",
    "OutlineGray3001e",
    "FillGray3001e",
    "FillGray804",
    "OutlineBlack9004c1_2",
    "FillOrange10014",
    "FillOrange1001e",
    "FillOrange10028",
    "dropdown25",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "",
  variant: "FillGray8001e",
  size: "sm",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };
