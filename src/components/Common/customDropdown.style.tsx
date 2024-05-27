/* eslint-disable @typescript-eslint */
// 역할, 트랙 select 스타일
const numberStyle = {
  indicatorSeparator: () => ({
    backgroundColor: "transparent",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    padding: "0px",
    width: "25px",
    height: "inherit",
  }),
  DropdownIndicator: () => ({
    padding: "0px",
  }),
  valueContainer: () => ({
    display: "flex",
    width: "25px",
    // paddingLeft: "10px",
  }),
  placeholder: () => ({
    color: "var(--grey-600, #adb3ba)",
    lineHeight: "50px",
    marginRight: "10px",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    justifyContent: "inherit",
    fontFamily: "Pretendard",
    fontSize: "20px",
    fontWeight: "500",
    border: state.isFocused ? " 1px solid #00DD9B" : "1px solid var(--grey-400, #DCDFE3)",
    width: state.isFocused ? "104px" : "104px",
    height: state.isFocused ? "48px" : "48px",
    borderRadius: "15px",
    backgroundColor: "#E5E5E5",
    boxShadow: "0 0 0 0px transparent",
    padding: " 0 12px 0 25px",
    "&:hover": {
      borderColor: "#00DD9B",
      border: "1px solid #00DD9B",
    },
  }),
  singleValue: () => ({
    lineHeight: "50px",
    marginRight: "10px",
  }),
  menu: (provided: any) => ({
    ...provided,
    width: "104px",
    borderRadius: "6px",
    boxShadow: "0 0 0 0px transparent",
    border: "1px solid var(--grey-400, #DCDFE3)",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    maxHeight: "100px", // gap을 반영한 스크롤 없는 최소 높이
    width: "104px", // 너비 조정
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "4px",
    // paddingLeft: "12px",
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: "500",
    width: "94px",
    height: "40px",
    color: "var(--grey-900, #212224)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: state.isFocused
      ? "var(--grey-300, #EAECEE)"
      : state.isSelected
      ? "var(--grey-300, #EAECEE)"
      : provided.backgroundColor,
    "&:active": {
      backgroundColor: "var(--grey-400, #DCDFE3)",
    },
  }),
};

// 기수 select 스타일
const timeStyle = {
  ...numberStyle,
  valueContainer: () => ({
    display: "flex",
    // width: "25px",
    // paddingLeft: "10px",
  }),
  placeholder: () => ({
    color: "var(--grey-600, #adb3ba)",
    lineHeight: "50px",
    // marginRight: "10px",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    // justifyContent: "inherit",
    fontFamily: "Pretendard",
    fontSize: "20px",
    fontWeight: "500",
    border: state.isFocused ? " 1px solid #00DD9B" : "1px solid var(--grey-400, #DCDFE3)",
    width: state.isFocused ? "142px" : "142px",
    height: state.isFocused ? "48px" : "48px",
    borderRadius: "15px",
    backgroundColor: "#E5E5E5",
    boxShadow: "0 0 0 0px transparent",
    padding: " 0 12px 0 25px",
    "&:hover": {
      borderColor: "#00DD9B",
      border: "1px solid #00DD9B",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "6px",
    width: "142px",
    boxShadow: "0 0 0 0px transparent",
    border: "1px solid var(--grey-400, #DCDFE3)",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    maxHeight: "136px",
    width: "138px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingLeft: "4px",
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      margin: "4px 0",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#D1D4D8",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#D1D4D8",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "4px",
    paddingLeft: "12px",
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: "500",
    width: "128px",
    height: "40px",
    color: "var(--grey-900, #212224)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: state.isFocused
      ? "var(--grey-300, #EAECEE)"
      : state.isSelected
      ? "var(--grey-300, #EAECEE)"
      : provided.backgroundColor,
    "&:active": {
      backgroundColor: "var(--grey-400, #DCDFE3)",
    },
  }),
};

// 학교 select 스타일
const dateStyle = {
  ...timeStyle,
  control: (provided: any, state: any) => ({
    ...provided,
    // justifyContent: "inherit",
    fontFamily: "Pretendard",
    fontSize: "20px",
    fontWeight: "500",
    border: state.isFocused ? " 1px solid #00DD9B" : "1px solid var(--grey-400, #DCDFE3)",
    width: state.isFocused ? "184px" : "184px",
    height: state.isFocused ? "48px" : "48px",
    borderRadius: "15px",
    backgroundColor: "#E5E5E5",
    boxShadow: "0 0 0 0px transparent",
    padding: " 0 12px 0 25px",
    "&:hover": {
      borderColor: "#00DD9B",
      border: "1px solid #00DD9B",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "6px",
    width: "184px",
    boxShadow: "0 0 0 0px transparent",
    border: "1px solid var(--grey-400, #DCDFE3)",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    maxHeight: "138px",
    width: "178px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingLeft: "4px",
    marginRight: "3.5px",
    paddingTop: "0",
    paddingBottom: "0",
    marginTop: "4px",
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      marginTop: "2px",
      borderRadius: "3px",
      marginBottom: "2px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#D1D4D8",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#D1D4D8",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "4px",
    paddingLeft: "12px",
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: "500",
    width: "172px",
    height: "40px",
    color: "var(--grey-900, #212224)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: state.isFocused
      ? "var(--grey-300, #EAECEE)"
      : state.isSelected
      ? "var(--grey-300, #EAECEE)"
      : provided.backgroundColor,
    "&:active": {
      backgroundColor: "var(--grey-400, #DCDFE3)",
    },
  }),
};

export { numberStyle, timeStyle, dateStyle };
