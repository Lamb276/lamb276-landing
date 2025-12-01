import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import lambImage from "../../assets/images/hero-lamb.png";
import gradientBgLight2 from "../../assets/images/gradient-bg-light-2.png";
import backgroundImage from "../../assets/images/background-image.png";
import { media } from "../../styles/media";

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const imageWrapperVariants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, delay: 0.8, ease: "easeOut" },
    },
};

const floatVariants = {
    float: {
        x: [0, 20, 0],
        y: [0, -20, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const HeroSection = () => {
    return (
        <SectionWrapper>
            <RadialGlow />
            <HeroCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
            >
                <BgLayer
                    src={gradientBgLight2}
                    alt="Gradient Background"
                    style={{ zIndex: 0, opacity: 0.8 }}
                />
                <BgLayer
                    src={backgroundImage}
                    alt="Texture Overlay"
                    style={{ zIndex: 0, opacity: 0.4, mixBlendMode: "overlay" }}
                />

                <ContentWrapper>
                    <TextGroup>
                        <Title
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={titleVariants}
                        >
                            <span className="block">Intellectual</span>
                            <span className="block">Renaissance</span>
                        </Title>

                        <Subtitle
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={subtitleVariants}
                        >
                            A DAO founded by
                            <br />
                            the world’s highest IQ 276 holder
                        </Subtitle>
                    </TextGroup>

                    <ImageGroup
                        variants={imageWrapperVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src={lambImage}
                            alt="Intellectual Lamb"
                            variants={floatVariants}
                            animate="float"
                        />
                    </ImageGroup>
                </ContentWrapper>
            </HeroCard>
        </SectionWrapper>
    );
};

export default HeroSection;

const SectionWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52vh;
    padding: 10rem 2rem;

    /* Tablet */
    ${media.tablet`
        min-height: 52vh;
        padding: 16.8rem 8rem 0rem 8rem;
    `}

    /* PC */
    ${media.pc`
        min-height: 60vh;
        padding: 18rem 16rem 0;
    `}
`;

const HeroCard = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: 108rem;
    max-height: 60rem;
    min-height: 52rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 3.2rem;
    overflow: hidden;
    backdrop-filter: blur(1.2rem);
    border: 0.1rem solid transparent;
    background: linear-gradient(rgba(2, 2, 2, 0.2), rgba(2, 2, 2, 0.2))
            padding-box,
        linear-gradient(
                180deg,
                ${({ theme }) => theme.colors.ng} 0%,
                rgba(5, 208, 155, 0) 100%
            )
            border-box;
    padding: 4.8rem 2rem;
    min-height: 40rem;

    /* Tablet */
    ${media.tablet`
        padding: 5.6rem 4rem 0rem 4rem;
        max-width: 80rem;
        min-height: 36rem;
        height: auto;
    `}

    /* PC */
        ${media.pc`
        padding: 8rem 6rem;
        min-height: 52rem;
    `}
`;

const RadialGlow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 90%;

    background: radial-gradient(
        circle,
        rgba(5, 208, 155, 0.15) 0%,
        rgba(5, 208, 155, 0.05) 100%,
        transparent 100%
    );

    filter: blur(8rem);
    z-index: 0;
    pointer-events: none;
`;

const BgLayer = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`;

// 콘텐츠 래퍼
const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 128rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    /* Mobile */
    ${media.mobile`
    padding: 0;
    `}

    /* PC */
    ${media.pc`
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    `}
`;

// 텍스트 영역
const TextGroup = styled(motion.div)`
    flex: 1;
    text-align: left;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0;

    /* Tablet */
    ${media.tablet`
        width: 100%;
    `}

    /* PC */
    ${media.pc`
        margin-top: 0;
        max-width: 50%;
    `}
`;

const Title = styled(motion.h1)`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: 500;
    margin-bottom: 2rem;

    .block {
        display: block;
    }

    /* Tablet */
    ${media.tablet`
        font-size: 5.6rem;
        line-height: 100%;
    `}

    /* PC */
    ${media.pc`
    ${({ theme }) => theme.typography.xxxl};
    `}
`;

const Subtitle = styled(motion.p)`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.ng};
    line-height: 1.5;

    /* Mobile */
    ${media.mobile`
        line-height: 130%;
        margin-top: -0.4rem;
        letter-spacing: -0.04em;
    `}

    /* Tablet */
    ${media.tablet`
        ${({ theme }) => theme.typography.md};
        line-height: 130%;
        margin-top: -0.4rem;
        letter-spacing: -0.04em;
    `}

    /* PC */
    ${media.pc`
    ${({ theme }) => theme.typography.xl_2};
    `}
`;

// 이미지 영역
const ImageGroup = styled(motion.div)`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;

    /* Mobile */
    ${media.mobile`
        img {
        width: auto;
        max-height: 22rem;
        object-fit: contain;
        filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3));
        margin-bottom: -25rem;
        margin-right: -2rem;
        }
    `}

    /* Tablet */
    ${media.tablet`
        img {
            max-height: auto;
            max-width: 30rem;
            margin-bottom: -16rem;
            margin-right: -4rem;
        }
    `}

    /* PC */
    ${media.pc`
        img {
            width: 44rem;
            height: auto;
            max-height: 75rem;
            margin-bottom: -22rem;
            margin-right: -6rem;
        }
    `}
`;
