import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LEADER_DATA, MEMBER_DATA } from "../../constants/team";
import drKimImage from "../../assets/images/dr-kim.png";
import Button from "../common/Button";

const memberImagesModules = import.meta.glob(
    "../../assets/images/member/*.png",
    { eager: true, import: "default" }
);

const MEMBER_IMAGES = Object.entries(memberImagesModules).reduce(
    (acc, [path, url]) => {
        const match = path.match(/member-(\d+)\.png$/);
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
                        <LeaderDesc>
                            {LEADER_DATA.description}
                            <br />
                            <br />
                            He creates a DAO for global movement to pursue
                            rational righteousness.
                        </LeaderDesc>
                        <ButtonWrapper>
                            <Button size="md" variant="primary">
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

                {/* Member*/}
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

// 이미지 placeholder (이미지가 없을 때 보여줄 회색 박스)
// const PlaceholderImage = styled.div`
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #333;
//     font-size: 1.2rem;
// `;

const SectionContainer = styled.section`
    padding: 16rem 16rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InnerWrapper = styled.div`
    width: 100%;
    padding: 0 16rem;
    max-width: 128rem;
`;

// Leader
const LeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const LeaderInfo = styled(motion.div)`
    flex: 1;
    order: 2; /* 모바일: 텍스트가 아래 */

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        order: 1; /* PC: 텍스트가 왼쪽 */
        max-width: 50%;
    }
`;

const LeaderName = styled.h2`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
`;

const LeaderDesc = styled.p`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    opacity: 0.8;
    margin-bottom: 3rem;
    white-space: pre-line;
`;

const LeaderImageFrame = styled(motion.div)`
    flex: 1;
    order: 1;

    height: 56rem;
    width: 100%;
    overflow: hidden;
    position: relative;

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

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        order: 2;
        max-width: 40rem;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// Member
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 모바일: 2열 */
    gap: 6rem 2.4rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr); /* 태블릿: 3열 */
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        grid-template-columns: repeat(4, 1fr); /* PC: 4열 */
        max-width: 108rem;
    }
`;

const MemberCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const MemberImage = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 4.8rem;
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
`;

const MemberInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const MemberRole = styled.span`
    ${({ theme }) => theme.typography.sm_1};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    margin-bottom: 1.2rem;
`;

const MemberName = styled.h3`
    ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: 600;
`;

const MemberPosition = styled.span`
    ${({ theme }) => theme.typography.sm_1};
    color: ${({ theme }) => theme.colors.ng};
    margin-top: 0.5rem;
`;
