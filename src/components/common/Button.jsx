import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

/**
 Button Props
 - variant: 'primary' (녹색) | 'secondary' (흰색/투명) | 'glow' (검정 배경 + 강한 글로우)
 - size: 'sm' | 'md' | 'lg'
 - ...props: onClick, href, style 등
 */

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
    return (
        <StyledButton
            $variant={variant}
            $size={size}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;

const sizes = {
    sm: css`
        width: auto;
        height: 3.6rem;
        padding: 0.8rem 2rem;
        font-size: ${({ theme }) => theme.fontSizes.sm_1};
        border-radius: 2rem;
    `,
    md: css`
        width: 22rem;
        height: 4.8rem;
        padding: 1.2rem 3rem;
        font-size: ${({ theme }) => theme.fontSizes.sm_1};
        border-radius: 3rem;
    `,
    lg: css`
        padding: 0rem 2rem;
        width: 32rem;
        height: 6.4rem;
        font-size: ${({ theme }) => theme.fontSizes.xl_1};
        border-radius: 3.2rem;
    `,
};

const variants = {
    primary: css`
        background: rgba(255, 255, 255, 0.05);
        border: 0.1rem solid ${({ theme }) => theme.colors.ng};
        color: ${({ theme }) => theme.colors.ng};

        &:hover {
            background: ${({ theme }) => theme.colors.ng};
            color: ${({ theme }) => theme.colors.ngB};
            box-shadow: 0 0 1.5rem ${({ theme }) => theme.colors.ng_Alpha};
            svg {
                color: ${({ theme }) => theme.colors.ngB};
                fill: ${({ theme }) => theme.colors.ngB};
            }

            img {
                filter: brightness(0);
            }
        }
    `,

    secondary: css`
        background: transparent;
        border: 0.1rem solid rgba(236, 253, 245, 0.1);
        color: rgba(236, 253, 245, 0.7);

        &:hover {
            border: 0.1rem solid ${({ theme }) => theme.colors.ngW_Alpha};
            background: rgba(255, 255, 255, 0.1);
            color: ${({ theme }) => theme.colors.ngW};
            svg {
                color: ${({ theme }) => theme.colors.ngW};
                fill: ${({ theme }) => theme.colors.ngW};
            }
            img {
                filter: brightness(0) invert(1);
            }
        }
    `,

    glow: css`
        background-color: #020202;
        border: 0.1rem solid rgba(236, 253, 245, 0.1);
        color: ${({ theme }) => theme.colors.ngW};

        &:hover {
            border-color: ${({ theme }) => theme.colors.ng};
            background-color: ${({ theme }) => theme.colors.ng_Alpha};
            color: ${({ theme }) => theme.colors.ng};
            box-shadow: 0 0 1.5rem ${({ theme }) => theme.colors.ng_Alpha};
            svg {
                color: ${({ theme }) => theme.colors.ng};
                fill: ${({ theme }) => theme.colors.ng};
            }
            img {
                filter: brightness(0) saturate(100%) invert(66%) sepia(63%)
                    saturate(464%) hue-rotate(107deg) brightness(93%)
                    contrast(93%);
            }
        }
    `,

    token: css`
        background: rgba(5, 208, 155, 0.2);
        color: ${({ theme }) => theme.colors.ng};
        border-radius: 2rem;

        &:hover {
            background: ${({ theme }) => theme.colors.ng};
            color: ${({ theme }) => theme.colors.ngB};
            box-shadow: 0 0 2rem ${({ theme }) => theme.colors.ng_Alpha};
        }
    `,
};

const StyledButton = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    ${({ $size }) => sizes[$size]}
    ${({ $variant }) => variants[$variant]}

  /* 버튼 내부 아이콘 크기 자동 조정 */
  svg, img {
        font-size: 1.2em;
        width: 1em;
        height: 1em;
        transition: all 0.2s ease;
    }
`;
