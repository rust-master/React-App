import React from "react";

const sizeClasses = {
  txtBeVietnamProRegular14Black900: "font-bevietnampro font-normal",
  txtBeVietnamProRegular18Gray900: "font-bevietnampro font-normal",
  txtBeVietnamProSemiBold24: "font-bevietnampro font-semibold",
  txtBeVietnamProRegular16Gray900: "font-bevietnampro font-normal",
  txtBeVietnamProRegular20: "font-bevietnampro font-normal",
  txtBeVietnamProSemiBold20: "font-bevietnampro font-semibold",
  txtInterRegular18Bluegray900: "font-inter font-normal",
  txtBeVietnamProSemiBold22: "font-bevietnampro font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtBeVietnamProSemiBold18: "font-bevietnampro font-semibold",
  txtBeVietnamProBold18Bluegray700: "font-bevietnampro font-bold",
  txtInterExtraBold53: "font-extrabold font-inter",
  txtBeVietnamProBold18: "font-bevietnampro font-bold",
  txtBeVietnamProRegular14Bluegray700: "font-bevietnampro font-normal",
  txtBeVietnamProSemiBold24Black900: "font-bevietnampro font-semibold",
  txtBeVietnamProRegular18Bluegray400: "font-bevietnampro font-normal",
  txtBeVietnamProRegular18Bluegray900: "font-bevietnampro font-normal",
  txtBeVietnamProRegular18: "font-bevietnampro font-normal",
  txtBeVietnamProBold40: "font-bevietnampro font-bold",
  txtBeVietnamProRegular16: "font-bevietnampro font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtBeVietnamProRegular13: "font-bevietnampro font-normal",
  txtBeVietnamProRegular14: "font-bevietnampro font-normal",
  txtBeVietnamProRegular11: "font-bevietnampro font-normal",
  txtBeVietnamProSemiBold14: "font-bevietnampro font-semibold",
  txtInterLightItalic16: "font-inter font-light italic",
  txtBeVietnamProRegular12: "font-bevietnampro font-normal",
  txtBeVietnamProMedium16Bluegray200: "font-bevietnampro font-medium",
  txtBeVietnamProMedium24: "font-bevietnampro font-medium",
  txtInterBold35: "font-bold font-inter",
  txtBeVietnamProMedium36: "font-bevietnampro font-medium",
  txtBeVietnamProMedium16: "font-bevietnampro font-medium",
  txtBeVietnamProSemiBold28: "font-bevietnampro font-semibold",
  txtInterRegular35: "font-inter font-normal",
  txtBeVietnamProBold18Blue700: "font-bevietnampro font-bold",
  txtInterRegular14: "font-inter font-normal",
  txtBeVietnamProSemiBold28Bluegray900: "font-bevietnampro font-semibold",
  txtBeVietnamProBold18Gray900: "font-bevietnampro font-bold",
  txtBeVietnamProSemiBold20Gray900: "font-bevietnampro font-semibold",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
