import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LEADER_DATA, MEMBER_DATA } from "../../constants/team";
import drKimImage from "../../assets/images/dr-kim.png";
import Button from "../common/Button";
import { media } from "../../styles/media";
import worldLibertyLogo from "../../assets/images/partner/world-liberty-financial.svg";
import pudgyLogo from "../../assets/images/partner/pudgy-penguins.svg";
import cointelegraphLogo from "../../assets/images/partner/cointelegraph-accelerator.svg";

const PARTNERS = [
    {
        id: 1,
        name: "World Liberty Financial",
        logo: worldLibertyLogo,
        role: "Ambassador",
        showName: false,
    },
    {
        id: 2,
        name: "Pudgy Penguins",
        logo: pudgyLogo,
        role: "Advisor",
        showName: true,
    },
    {
        id: 3,
        name: "Cointelegraph Accelerator",
        logo: cointelegraphLogo,
        role: "Program Mentor",
        showName: false,
    },
];

const memberImagesModules = import.meta.glob(
    "../../assets/images/member/*.png",
    { eager: true, import: "default" }
);

const MEMBER_IMAGES = Object.entries(memberImagesModules).reduce(
    (acc, [path, url]) => {
        const match = path.match(/member-(\d+)\.(png|webp)$/);
        if (match) {
            const id = Number(match[1]);
            acc[id] = url;
        }
        return acc;
    },
    {}
);

const TeamSection = () => {
    return (
        <SectionContainer>
            <InnerWrapper>
                {/* Leader */}
                <LeaderWrapper>
                    <LeaderInfo
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                    >
                        <LeaderName>{LEADER_DATA.name}</LeaderName>
                        <LeaderDesc>{LEADER_DATA.description}</LeaderDesc>
                        <ButtonWrapper>
                            <Button
                                size="md"
                                variant="primary"
                                onClick={() =>
                                    window.open(
                                        "https://linktr.ee/Lamb276",
                                        "_blank"
                                    )
                                }
                            >
                                Verification
                            </Button>
                        </ButtonWrapper>
                    </LeaderInfo>

                    <LeaderImageFrame
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
                    >
                        <img src={drKimImage} alt={LEADER_DATA.name} />
                    </LeaderImageFrame>
                </LeaderWrapper>

                {/* Partner Static */}
                <PartnerContainer>
                    {PARTNERS.map((partner, index) => (
                        <PartnerItem
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <PartnerRole>{partner.role}</PartnerRole>

                            <PartnerLogoBox>
                                <img src={partner.logo} alt={partner.name} />
                                {partner.showName && (
                                    <PartnerLogoText>
                                        {partner.name}
                                    </PartnerLogoText>
                                )}
                            </PartnerLogoBox>
                        </PartnerItem>
                    ))}
                </PartnerContainer>

                {/* Member */}
                <GridContainer>
                    {MEMBER_DATA.map((member, index) => (
                        <MemberCard
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{
                                once: true,
                                margin: "0px 0px -35% 0px",
                            }}
                        >
                            <MemberImage>
                                <img
                                    src={MEMBER_IMAGES[member.id]}
                                    alt={member.name}
                                />
                            </MemberImage>
                            <MemberInfo>
                                <MemberRole>{member.role}</MemberRole>
                                <MemberName>{member.name}</MemberName>
                                <MemberPosition>
                                    {member.position}
                                </MemberPosition>
                            </MemberInfo>
                        </MemberCard>
                    ))}
                </GridContainer>
            </InnerWrapper>
        </SectionContainer>
    );
};

export default TeamSection;

const SectionContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    overflow: hidden;

    /* Tablet */
    ${media.tablet`
        padding: 12rem 2rem 8rem;
    `}

    /* PC */
    ${media.pc`
        padding: 10rem 16rem;
    `}
`;

const InnerWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Leader
const LeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;

    /* Tablet */
    ${media.tablet`
        gap: 0;
        margin-bottom: 0rem;
    `}

    /* PC */
    ${media.pc`
        gap: 4rem;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    `}
`;

const LeaderInfo = styled(motion.div)`
    flex: 1;
    order: 2;
    position: relative;
    z-index: 10;
    margin-top: -8rem;
    padding: 0 2rem;
    width: 100%;

    /* Tablet */
    ${media.tablet`
        margin-top: -8.2rem;
        padding: 0 6rem;
        max-width: none;
    `}

    /* PC */
    ${media.pc`
        order: 1;
        max-width: 50%;
        margin-top: 0;
        margin-bottom: 4rem;
        padding-left: 0;
        padding: 0;
    `}
`;

const LeaderName = styled.h2`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
    text-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.5);

    /* Mobile */
    ${media.mobile`
        margin-bottom: 1.6rem;
    `}
`;

const LeaderDesc = styled.p`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    opacity: 0.8;
    margin-bottom: 4rem;
    white-space: pre-line;
`;

const LeaderImageFrame = styled(motion.div)`
    flex: 1;
    order: 1;
    height: 40rem;
    width: 100%;
    max-width: 52rem;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
    }

    /* Tablet */
    ${media.tablet`
        display: flex;
        width: 48rem;
        height: auto;
        margin: 0 auto;
        max-width: 40rem;
        border-radius: 4.8rem;
    `}

    /* PC */
    ${media.pc`
        order: 2;
        height: 56rem;
        max-width: 40rem;
        margin-left: 0;
        border-radius: 0;
    `}
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Tablet */
    ${media.tablet`
        justify-content: flex-end; 
    `}

    /* PC */
    ${media.pc`
        justify-content: flex-end;
    `}
`;

// Partner
const PartnerContainer = styled.div`
    width: 50;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin: 4rem 0 8rem;
    padding: 4rem 4rem;

    /* Tablet */
    ${media.tablet`
        flex-direction: row;
        align-items: flex-start;
        margin: 0rem 0 12rem;
        gap: 4rem;
        padding: 0;
    `}

    /* PC */
    ${media.pc`
        flex-direction: row;
        margin: 10rem 0 14rem;
        gap: 8rem;
        padding: 0;
    `}
`;

const PartnerItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.6rem;
    width: 100%;
    flex: 1;

    /* PC */
    ${media.pc`
        gap: 2rem;
    `}
`;

const PartnerLogoBox = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0rem;

    img {
        height: 100%;
        width: auto;
        max-width: 24rem;
        object-fit: contain;

        filter: grayscale(100%);
        opacity: 0.7;
        transition: all 0.3s ease;
    }

    &:hover img {
        filter: grayscale(0%);
        opacity: 1;
    }
    &:hover span {
        opacity: 1;
    }

    ${media.tablet`
        height: 4rem;
    `}

    ${media.pc`
        height: 4.8rem;
    `}
`;

const PartnerLogoText = styled.span`
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.7;
    white-space: nowrap;
    transition: all 0.3s ease;
    padding-top: 0.4rem;
    padding-left: 0.8rem;

    ${media.mobile`
        font-size: 1.8rem;
    `}
`;

const PartnerRole = styled.span`
    ${({ theme }) => theme.typography.sm_1};
    color: ${({ theme }) => theme.colors.ng};
    text-align: center;
    font-weight: 500;
    letter-spacing: -0.02em;

    ${media.pc`
        font-size: 1.6rem;
    `}
`;

// Member
const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.2rem 2rem;
    width: 100%;
    max-width: 44rem;
    margin: 0 auto;

    /* Mobile */
    ${media.mobile`
        padding: 0 2rem;
    `}

    /* Tablet */
    ${media.tablet`
        padding: 0;
        gap: 6rem 2.4rem;
        max-width: 80rem; 
        margin: 0 auto;
    `}

    /* PC */
    ${media.pc`
        max-width: 108rem;
        gap: 6rem 2.4rem;
        margin: 0 auto;
    `}
`;

const MemberCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: calc(50% - 1rem);

    /* Tablet */
    ${media.tablet`
        gap: 2rem;
        width: calc(33.33% - 1.6rem);
        max-width: 24rem;
    `}

    /* PC */
    ${media.pc`
        gap: 2rem;
        width: calc(25% - 1.8rem); 
        max-width: 22rem;
    `}
`;

const MemberImage = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 2.8rem;
    overflow: hidden;
    position: relative;
    border: 0.2rem solid transparent;
    background-image: linear-gradient(#111, #111),
        linear-gradient(180deg, #05d09b 0%, #020202 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 4.8rem;
        pointer-events: none;
        box-shadow: inset 0 0rem 0rem #05d09b;
    }

    /* Tablet, PC */
    ${media.tablet`
        border-radius: 4.8rem;
    `}
    ${media.pc`
        border-radius: 4.8rem;
    `}
`;

const MemberInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const MemberRole = styled.span`
    ${({ theme }) => theme.typography.xs};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    margin-bottom: 1.2rem;

    /* Tablet, PC */
    ${media.tablet`
        ${({ theme }) => theme.typography.sm_1};
    `}
    ${media.pc`
        ${({ theme }) => theme.typography.sm_1};
    `}
`;

const MemberName = styled.h3`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: 600;

    /* Tablet, PC */
    ${media.tablet`
        ${({ theme }) => theme.typography.xl_2};
    `}
    ${media.pc`
        ${({ theme }) => theme.typography.xl_2};
    `}
`;

const MemberPosition = styled.span`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.ng};
    margin-top: 0rem;

    /* Tablet, PC */
    ${media.tablet`
        ${({ theme }) => theme.typography.sm_2};
    `}
    ${media.pc`
        ${({ theme }) => theme.typography.sm_2};
    `}
`;
