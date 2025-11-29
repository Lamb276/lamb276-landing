import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import coinImage from "../../assets/images/lamb-coin.png";
import Button from "../common/Button";
import { useModal } from "../../context/ModalContext";
import {
    PresaleModalContent,
    CampaignModalContent,
} from "../layout/ModalContents";

const LambSection = () => {
    const { openModal } = useModal();

    return (
        <SectionContainer>
            <ContentWrapper>
                {/* Text */}
                <TextGroup
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                >
                    <Title>$LAMB</Title>
                    <Description>
                        LAMB is the heartbeat of our community and gives you
                        total control. LAMB276 is fully decentralized so the
                        founder is just another member with the same voting
                        rights as you. Holding $LAMB means you help steer the
                        ship. This is governance where the intellectuals
                        actually decide the future.
                    </Description>
                    <ButtonGroup>
                        <Button
                            size="md"
                            variant="primary"
                            onClick={() => openModal(<PresaleModalContent />)}
                        >
                            Presale
                        </Button>
                        <Button
                            size="md"
                            variant="secondary"
                            onClick={() => openModal(<CampaignModalContent />)}
                        >
                            Campaign
                        </Button>
                    </ButtonGroup>
                </TextGroup>

                {/* Floating Coin Image */}
                <ImageGroup
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "0px 0px -50% 0px" }}
                >
                    <CoinImage
                        src={coinImage}
                        alt="$LAMB Coin"
                        animate={{
                            y: [0, -32, 0], // 32px 올라갔다 내려옴
                        }}
                        transition={{
                            duration: 4, // 4초 주기
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </ImageGroup>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default LambSection;

const SectionContainer = styled.section`
    padding: 16rem 16rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem;
    }
`;

// 텍스트 영역
const TextGroup = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    order: 2;

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        order: 1;
        max-width: 50%;
    }
`;

const Title = styled.h2`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
    text-transform: uppercase;
`;

const Description = styled.p`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 4rem;
    max-width: 50rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1.5rem;
`;

// 이미지 영역
const ImageGroup = styled(motion.div)`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    order: 1;

    &::before {
        content: "";
        position: absolute;
        width: 60%;
        height: 0%;
        background: ${({ theme }) => theme.colors.ng};
        opacity: 1;
        filter: blur(8rem);
        border-radius: 50%;
        z-index: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        order: 2;
        justify-content: flex-end;
    }
`;

const CoinImage = styled(motion.img)`
    width: auto;
    max-width: 30rem;
    height: 40rem;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 3rem rgba(5, 208, 155, 0.2));

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 40rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        max-width: 50rem;
    }
`;
