import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DiscordIcon from "../../assets/icons/discord.svg";
import XIcon from "../../assets/icons/x.svg";
import { media } from "../../styles/media";

const SocialSection = () => {
    return (
        <SectionContainer>
            <HeaderRow>
                <Line />
                <Title>Socials</Title>
                <Line />
            </HeaderRow>

            <IconContainer>
                {/* Discord */}
                <SocialLink
                    href="https://discord.com/invite/lamb276"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IconWrapper>
                        <img src={DiscordIcon} alt="Discord" />
                    </IconWrapper>
                    <Label>Discord</Label>
                </SocialLink>

                {/* X (Twitter) */}
                <SocialLink
                    href="https://x.com/LAMB276"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IconWrapper>
                        <img src={XIcon} alt="X" />
                    </IconWrapper>
                    <Label>X</Label>
                </SocialLink>
            </IconContainer>
            <BottomLine />
        </SectionContainer>
    );
};

export default SocialSection;

const SectionContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    /* Tablet, PC */
    ${media.tablet`
        padding: 0 8rem 8rem;
        gap: 5.6rem;
    `}
    ${media.pc`
    padding: 0 16rem 8rem 16rem;
        gap: 6.4rem;
    `}
`;

const HeaderRow = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    /* Tablet, PC */
    ${media.tablet`
    gap: 4rem;
    `}
    ${media.pc`
    gap: 4rem;
    `}
`;

const Line = styled.div`
    flex: 1;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.ng};
    opacity: 0.3;
`;

const BottomLine = styled.div`
    width: 100%;
    max-width: 128rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.ng};
    opacity: 0.3;
    margin-top: 0.4rem;
`;

const Title = styled.h1`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ng};
    font-weight: 500;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    white-space: nowrap;
`;

const IconContainer = styled.div`
    display: flex;
    gap: 4rem;
`;

const SocialLink = styled(motion.a)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        div {
            color: ${({ theme }) => theme.colors.ng};
            filter: drop-shadow(
                0 0 0.8rem ${({ theme }) => theme.colors.ng_Alpha}
            );
        }

        img {
            opacity: 1;
            filter: brightness(0) saturate(100%) invert(66%) sepia(63%)
                saturate(464%) hue-rotate(107deg) brightness(93%) contrast(93%);
        }
    }
`;

const IconWrapper = styled.div`
    font-size: ${({ theme }) => theme.typography.sm_1};
    color: ${({ theme }) => theme.colors.ngW};
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 4rem;
        height: 4rem;
        transition: filter 0.3s ease;
        opacity: 0.5;
    }

    /* Tablet */
    ${media.tablet`
        font-size: 4rem;
        img {
            width: 4rem;
            height: 4rem;
        }
    `}
`;

const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm_1};
    color: ${({ theme }) => theme.colors.ngW};
    transition: color 0.3s ease;
    opacity: 0.8;
`;
