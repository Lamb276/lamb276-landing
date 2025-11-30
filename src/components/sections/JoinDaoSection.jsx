import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import DiscordIcon from "../../assets/icons/discord.svg";
import twinkleSvg from "../../assets/icons/twinkle.svg";
import JoinDaoBg from "../../assets/images/join-dao-background.png";
import Button from "../common/Button";
import { media } from "../../styles/media";

const JoinDaoSection = () => {
    return (
        <SectionContainer>
            <BackgroundImage src={JoinDaoBg} alt="DAO Background" />
            <ContentWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "0px 0px -40% 0px" }}
            >
                {/* Title Area */}
                <TitleArea>
                    <StarIcon>
                        <img src={twinkleSvg} alt="twinkle left" />
                    </StarIcon>
                    <Title>Become part of the DAO</Title>
                    <StarIcon>
                        <img src={twinkleSvg} alt="twinkle left" />
                    </StarIcon>
                </TitleArea>

                {/* Subtitle List */}
                <SubtitleList>
                    <SubtitleItem>of the intellectuals</SubtitleItem>
                    <SubtitleItem>by the intellectuals</SubtitleItem>
                    <SubtitleItem>for the intellectuals</SubtitleItem>
                </SubtitleList>

                {/* Join Button */}
                <Button
                    size="lg"
                    variant="glow"
                    onClick={() =>
                        window.open(
                            "https://discord.com/invite/lamb276",
                            "_blank"
                        )
                    }
                >
                    <img src={DiscordIcon} alt="Discord" />
                    <span>JOIN</span>
                </Button>
            </ContentWrapper>
            <BackgroundGlow />
        </SectionContainer>
    );
};

export default JoinDaoSection;

const neonPulseIcon = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 0.4rem rgba(5, 208, 155, 0.3));
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    filter: drop-shadow(0 0 0.5rem #05D09B) drop-shadow(0 0 1.2rem #05D09B);
    transform: scale(1);
    opacity: 0.8;
  }
`;

const neonPulseText = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 0.25rem rgba(5, 208, 155, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 0.25rem rgba(5, 208, 155, 0.5)) drop-shadow(0 0 0.25rem #05D09B);
  }
`;

const opacityLoop = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const SectionContainer = styled.section`
    position: relative;
    width: 100%;
    padding: 2rem 2.8rem 16rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    /* Tablet */
    ${media.tablet`
    padding: 16rem 8rem;
    `}

    /* PC */
    ${media.pc`
    padding: 8rem 16rem 16rem;
    `}
`;

const BackgroundImage = styled.img`
    position: absolute;
    width: 150%;
    height: 100%;
    object-fit: cover;
    z-index: 0;

    animation: ${opacityLoop} 3s ease-in-out infinite;
`;

const ContentWrapper = styled(motion.div)`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;

    /* Tablet, PC */
    ${media.tablet`
    gap: 4rem;
    `}
    ${media.pc`
    gap: 4rem;
    `}
`;

const TitleArea = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    /* Tablet, PC */
    ${media.tablet`
    gap: 2rem;
    `}
    ${media.pc`
    gap: 2rem;
    `}
`;

const StarIcon = styled.div`
    width: 4.4rem;
    height: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: auto;
        animation: ${neonPulseIcon} 3s ease-in-out infinite;
    }

    /* Tablet, PC */
    ${media.tablet`
        width: 4rem;
        height: 4rem;
    `}
    ${media.pc`
        width: 4rem;
        height: 4rem;
    `}
`;

const Title = styled.h2`
    ${({ theme }) => theme.typography.xxl};
    line-height: 1;
    color: ${({ theme }) => theme.colors.ng};
    font-weight: 500;

    /* Tablet, PC */
    ${media.tablet`
        font-size: 4.8rem;
        line-height: 1;
        letter-spacing: -0.32rem;
    `}
    ${media.pc`
        font-size: 5.6rem;
        line-height: 1;
        letter-spacing: -0.32rem;
    `}
`;

const SubtitleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;

    /* Tablet, PC */
    ${media.tablet`
        gap: 2rem;
        margin-bottom: 0;
    `}
    ${media.pc`
        gap: 2rem;
        margin-bottom: 0;
    `}
`;

const SubtitleItem = styled.p`
    ${({ theme }) => theme.typography.xl_2};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: 500;
    letter-spacing: -4%;
    animation: ${neonPulseText} 2s ease-in-out infinite;

    /* Tablet, PC */
    ${media.tablet`
        ${({ theme }) => theme.typography.xxl};
    `}
    ${media.pc`
        ${({ theme }) => theme.typography.xxl};
    `}
`;

const BackgroundGlow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 20%;
    max-width: 60rem;

    mix-blend-mode: screen;

    background: radial-gradient(
        circle,
        rgba(5, 208, 155, 0.5) 0%,
        transparent 100%
    );
    filter: blur(12rem);
    z-index: 1;
    pointer-events: none;
`;
