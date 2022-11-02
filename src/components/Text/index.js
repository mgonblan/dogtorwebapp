import React from "react";
const variantClasses = {
  h1: "font-normal 3xl:text-[118px] lg:text-[70px] text-[80px] xl:text-[88px] 2xl:text-[99px]",
  h2: "font-normal lg:text-[50px] text-[57px] xl:text-[62px] 2xl:text-[70px] 3xl:text-[84px]",
  h3: "font-normal lg:text-[42px] text-[48px] xl:text-[52px] 2xl:text-[59px] 3xl:text-[71px]",
  h4: "font-normal lg:text-[40px] text-[46px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[68px]",
  h5: "font-normal lg:text-[39px] text-[45px] xl:text-[49px] 2xl:text-[55px] 3xl:text-[66px]",
  h6: "font-normal lg:text-[35px] text-[40px] xl:text-[44px] 2xl:text-[49px] 3xl:text-[59px]",
  body1:
    "font-normal lg:text-[31px] text-[36px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px]",
  body2:
    "font-normal lg:text-[28px] text-[32px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px]",
  body3:
    "font-normal lg:text-[24px] text-[28px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px]",
  body4:
    "font-normal lg:text-[21px] text-[24px] xl:text-[26px] 2xl:text-[29px] 3xl:text-[35px]",
  body5:
    "font-normal lg:text-[19px] text-[22px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px]",
  body6:
    "font-normal lg:text-[18px] text-[21px] xl:text-[23px] 2xl:text-[25px] 3xl:text-[31px]",
  body7:
    "font-normal lg:text-[17px] text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px]",
  body8:
    "font-normal lg:text-[15px] text-[18px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]",
  body9:
    "font-normal lg:text-[14px] text-[17px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]",
  body10:
    "lg:text-[14px] text-[16px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px]",
  body11:
    "lg:text-[12px] text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]",
  body12:
    "lg:text-[10px] text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
  body13:
    "font-medium text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
