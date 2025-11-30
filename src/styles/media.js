import { css } from "styled-components";
import { size } from "../constants/breakpoints";

export const media = {
    mobile: (...args) => css`
        @media (max-width: ${size.tablet - 1}px) {
            ${css(...args)}
        }
    `,
    tablet: (...args) => css`
        @media (min-width: ${size.tablet}px) and (max-width: ${size.pc - 1}px) {
            ${css(...args)}
        }
    `,
    pc: (...args) => css`
        @media (min-width: ${size.pc}px) {
            ${css(...args)}
        }
    `,
};
