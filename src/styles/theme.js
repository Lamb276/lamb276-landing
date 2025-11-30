import { typography } from "./typography";
import { size } from "../constants/breakpoints";

const colors = {
    ngW: "#ECFDF5",
    ngW_Alpha: "rgba(236, 253, 245, 0.5)",
    ng: "#05D09B",
    ng_Alpha: "rgba(5, 208, 155, 0.1)",
    ngB: "#020202",
};

// 미디어 쿼리 설정은 breakpoints.js 파일에 정의
const breakpoints = {
    mobile: `${size.mobile}px`,
    tablet: `${size.tablet}px`,
    pc: `${size.pc}px`,
};

const fontSizes = {
    xs: "1.2rem",
    sm_1: "1.4rem",
    sm_2: "1.4rem",
    md: "1.6rem",
    lg: "2.0rem",
    xl_1: "2.4rem",
    xl_2: "2.4rem",
    xxl: "3.6rem",
    xxxl: "8.0rem",
};

const theme = {
    colors,
    breakpoints,
    fontSizes,
    typography,
};

export default theme;
