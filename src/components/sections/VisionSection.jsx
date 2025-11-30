import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import coinImage from "../../assets/images/lamb-coin-btm-transper.png";
import gradientBgLight from "../../assets/images/gradient-bg-light.png";
import { media } from "../../styles/media";

const VisionSection = () => {
    return (
        <SectionContainer>
            <VisionCard
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
            >
                <CardBgImage src={gradientBgLight} alt="Gradient Background" />

                <GlowSpot $position="left" />
                <GlowSpot $position="right" />

                <ContentWrapper>
                    <IconWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                    >
                        <img src={coinImage} alt="Vision Emblem" />
                    </IconWrapper>

                    <TextGroup>
                        <MainTitle>Intellectual Renaissance</MainTitle>
                        <SubTitle>Pursue Rational Righteousness</SubTitle>
                    </TextGroup>
                </ContentWrapper>
            </VisionCard>
        </SectionContainer>
    );
};

export default VisionSection;

const SectionContainer = styled.section`
    width: 100%;
    padding: 4rem 2rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;

    /* Tablet, PC */
    ${media.tablet`
        padding: 16rem 8rem;
    `}
    ${media.pc`
        padding: 16rem;
    `}
`;

const VisionCard = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: 128rem;
    border-radius: 1.6rem;
    overflow: hidden;
    border: 0.2rem solid transparent;
    background-image: linear-gradient(#000, #000),
        linear-gradient(180deg, #05d09b 0%, #020202 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Tablet */
    ${media.tablet`
        min-height: 30rem;
        border-radius: 2.4rem;
        padding: 4rem;
    `}
`;

const CardBgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
    opacity: 1;

    mask-image: linear-gradient(to bottom, black 0%, transparent 50%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 50%);
`;

const GlowSpot = styled.div`
    position: absolute;
    top: 50%;
    width: 50%;
    height: 80%;
    border-radius: 50%;
    filter: blur(8rem);
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;

    ${({ $position, theme }) =>
        $position === "left"
            ? `
      left: 0;
      transform: translate(-30%, -50%);
      background: ${theme.colors.ng};
    `
            : `
      right: 0;
      transform: translate(30%, -50%);
      background: #004d40;
    `}
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0rem;

    /* PC */
    ${media.pc`
    gap: 1.6rem;
    `}
`;

const IconWrapper = styled(motion.div)`
    width: 12rem;
    height: 12rem;
    margin-bottom: -1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    img {
        width: 120%;
        height: 120%;
        object-fit: contain;
        filter: drop-shadow(0 0 1.5rem rgba(5, 208, 155, 0.3));
    }

    /* Tablet, PC */
    ${media.tablet`
        width: 16rem;
        height: 16rem;
        margin-bottom: -2rem;
    `}
    ${media.pc`
        width: 16rem;
        height: 16rem;
        margin-bottom: -4rem;
    `}
`;

const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    /* Tablet */
    ${media.tablet`
    gap: 0rem;
    `}
`;

const MainTitle = styled.h1`
    ${({ theme }) => theme.typography.xxl};
    line-height: 1;
    color: ${({ theme }) => theme.colors.ng};

    /* Tablet, PC */
    ${media.tablet`
        font-size: 4.4rem;
    `}
    ${media.pc`
        font-size: 4.8rem;
    `}
`;

const SubTitle = styled.h1`
    ${({ theme }) => theme.typography.xl_2};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.9;
    margin-bottom: 4rem;
    line-height: 1.2;

    /* Tablet */
    ${media.tablet`
        font-size: 3.2rem;
        letter-spacing: -0.04em;
            line-height: 1;
    `}

    /* PC */
    ${media.pc`
        ${({ theme }) => theme.typography.xxl};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.9;
        line-height: 1;
    `}
`;
