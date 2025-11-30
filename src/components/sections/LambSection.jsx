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
import { media } from "../../styles/media";

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
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 8rem 2rem;

    /* Tablet, PC */
    ${media.tablet`
        padding: 8rem 8rem 0;
    `}
    ${media.pc`
        padding: 8rem 12rem;
    `}
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    align-items: center;
    gap: 0rem;
    flex-direction: column;

    /* PC */
    ${media.pc`
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem;
    `}
`;

// 텍스트 영역
const TextGroup = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    order: 2;
    width: 100%;
    max-width: 100%;

    /* Tablet */
    ${media.tablet`
        width: 100%;
    `}

    /* PC */
    ${media.pc`
        order: 1;
        max-width: 50%;
    `}
`;

const Title = styled.h2`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 3.6rem;
    line-height: 1.1;

    ${media.tablet`
        font-size: ${({ theme }) => theme.fontSizes.xxl};
    `}
`;

const Description = styled.p`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    opacity: 0.8;
    margin-bottom: 4rem;

    width: 100%;
    max-width: 100%;

    word-break: keep-all;
    word-wrap: break-word;

    /* Tablet */
    ${media.tablet`
        max-width: 100%;
    `}

    ${media.pc`
        max-width: 50rem;
    `}
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;
    flex-direction: column;
    align-items: center;

    /* Tablet */
    ${media.tablet`
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    `}

    /* PC */
    ${media.pc`
        flex-direction: row;
        justify-content: flex-start;
    `}
`;

// 이미지 영역
const ImageGroup = styled(motion.div)`
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
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

    /* Mobile */
    ${media.mobile`
        order: 1;
        justify-content: center;
    `}

    /* PC */
    ${media.pc`
        order: 2;
        justify-content: flex-end;
    `}
`;

const CoinImage = styled(motion.img)`
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 3rem rgba(5, 208, 155, 0.2));
    max-width: 24rem;

    /* Mobile */
    ${media.mobile`
        margin: 0 auto;
    `}

    /* Tablet, PC */
    ${media.tablet`
        max-width: 32rem;
    `}
    ${media.pc`
        max-width: 40rem;
    `}
`;
