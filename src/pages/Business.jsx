import React from "react";
import styled from "styled-components";
import { media } from "../styles/media";
import theme from "../styles/theme";
import backgroundEarthLight from "../assets/images/background-earth-light.png";
import backgroundSkyStar from "../assets/images/background-sky-star.png";
import worldLibertyFinancialLogo from "../assets/images/partner/world-liberty-financial.svg";
import pudgyPenguinsLogo from "../assets/images/partner/pudgy-penguins.svg";
import cointelegraphAcceleratorLogo from "../assets/images/partner/cointelegraph-accelerator.svg";
import drKimPhoto from "../assets/images/dr-kim.png";
import * as businessImages from "../assets/images/business";

const {
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    roadmap5,
    roadmap6,
    roadmap7,
    roadmap8,
    lamb2761,
    lamb2762,
    lamb2763,
    founder1,
    founder2,
    founder3,
    founderInfluence1,
    founderInfluence2,
    founderInfluence3,
    founderInfluence4,
    founderInfluence5,
    founderInfluence6,
    founderInfluence7,
    founderInfluence8,
    founderInfluence9,
    founderDao,
    mainProject,
    mainProjectMobile,
} = businessImages;

const Business = () => {
    return (
        <PageWrapper>
            <FixedBackground />
            <SkyStarBackground>
                <img src={backgroundSkyStar} alt="" />
            </SkyStarBackground>
            <EarthBackground>
                <img src={backgroundEarthLight} alt="" />
            </EarthBackground>
            <ContentContainer>
                {/* Hero Section */}
                <HeroSection>
                    <Subtitle>
                        A MOVEMENT TO BUILD THE NEW WEB3 VC ECOSYSTEM
                    </Subtitle>
                    <Title>BUSINESS</Title>

                    <MetaInfo>Collective intelligence capital</MetaInfo>
                </HeroSection>

                {/* Where Intelligence Meets Capital */}
                <Section>
                    <SectionTitle $smaller>
                        Where Intelligence <MobileOnlyBreak />
                        Meets Capital:
                        <br />
                        The Formula for Success
                    </SectionTitle>

                    <InfoGrid>
                        <InfoCard>
                            <CardLabelWrapper>
                                <CardIcon src={lamb2761} alt="Overview icon" />
                                <CardLabel>Overview</CardLabel>
                            </CardLabelWrapper>
                            <CardContent>
                                A Web3 Intelligence VC DAO that combines the
                                world's top intellectual minds with powerful
                                viral influence.
                            </CardContent>
                        </InfoCard>

                        <InfoCard>
                            <CardLabelWrapper>
                                <CardIcon src={lamb2762} alt="Value icon" />
                                <CardLabel>Value</CardLabel>
                            </CardLabelWrapper>
                            <CardContent>
                                Building a "success-driven investment model"
                                that leverages top-tier intellectual
                                infrastructure to support the success of new
                                Web3 projects through marketing and community
                                power.
                            </CardContent>
                        </InfoCard>

                        <InfoCard>
                            <CardLabelWrapper>
                                <CardIcon src={lamb2763} alt="Vision icon" />
                                <CardLabel>Vision</CardLabel>
                            </CardLabelWrapper>
                            <CardContent>
                                To build a new Web3 VC ecosystem led by an
                                Intelligence DAO.
                            </CardContent>
                        </InfoCard>
                    </InfoGrid>
                </Section>

                {/* Founder */}
                <Section>
                    <FounderContainer>
                        <FounderTopSection>
                            <FounderLeft>
                                <SectionTitle>Founder</SectionTitle>
                                <FounderIntro>
                                    <FounderTitle>
                                        World's Highest IQ
                                        <TabletOnlyBreak /> Record Holder
                                    </FounderTitle>
                                    <FounderName>Dr. YoungHoon Kim</FounderName>
                                </FounderIntro>
                            </FounderLeft>

                            <FounderPhoto>
                                <img src={drKimPhoto} alt="Dr. YoungHoon Kim" />
                            </FounderPhoto>

                            <IQScore>
                                <IQNumber>276</IQNumber>
                                <IQLabel>
                                    Official IQ Score
                                    <br />
                                    World's Highest Record
                                </IQLabel>
                            </IQScore>
                        </FounderTopSection>

                        <StatsGrid>
                            <StatBox>
                                <StatNumber>10+</StatNumber>
                                <StatLabel>Recognized Institutions</StatLabel>
                                <StatSubLabel>
                                    Record Verification Completed
                                </StatSubLabel>
                            </StatBox>
                            <StatBox>
                                <StatNumber>1</StatNumber>
                                <StatLabel>Academic Database</StatLabel>
                                <StatSubLabel>
                                    Internationally Indexed
                                </StatSubLabel>
                            </StatBox>
                        </StatsGrid>

                        <VerificationGrid>
                            <VerificationCard>
                                <VerificationTitleWrapper>
                                    <VerificationIcon
                                        src={founder1}
                                        alt="International Verification"
                                    />
                                    <VerificationTitle>
                                        International Verification
                                    </VerificationTitle>
                                </VerificationTitleWrapper>
                                <VerificationText>
                                    World Memory Championships, Official World
                                    Record®, Korea Record Institute,
                                    International Non-Olympic Committee, Noble
                                    World Records, Mensa, Mega Society, Giga
                                    Society
                                </VerificationText>
                            </VerificationCard>

                            <VerificationCard>
                                <VerificationTitleWrapper>
                                    <VerificationIcon
                                        src={founder2}
                                        alt="Academic Verification"
                                    />
                                    <VerificationTitle>
                                        Academic Verification
                                    </VerificationTitle>
                                </VerificationTitleWrapper>
                                <VerificationText>
                                    Psychometric endorsement by an Oxford
                                    University PhD statistician, and scientific
                                    validation supported by the World Academy of
                                    Medical Sciences (WAMS)
                                </VerificationText>
                            </VerificationCard>

                            <VerificationCard $fullWidth>
                                <VerificationTitleWrapper>
                                    <VerificationIcon
                                        src={founder3}
                                        alt="Published in Academic Journal"
                                    />
                                    <VerificationTitle>
                                        Published in International Academic
                                        Journal
                                    </VerificationTitle>
                                </VerificationTitleWrapper>
                                <VerificationText>
                                    Published in Testing, Psychometrics,
                                    Methodology in Applied Psychology (TPM)
                                    <br />
                                    Indexed in PubMed, Scopus, PsycINFO, and Web
                                    of Science
                                </VerificationText>
                            </VerificationCard>
                        </VerificationGrid>
                    </FounderContainer>
                </Section>

                {/* Founder Influence */}
                <Section>
                    <SectionTitle>Founder Influence</SectionTitle>
                    <SubTitle $withMargin>
                        Achieved #1 within One Year <MobileOnlyBreak />
                        (from Dec 2024)
                    </SubTitle>

                    <InfluenceHighlight>
                        <HighlightLeftWrapper>
                            <HighlightIcon
                                src={founderInfluence1}
                                alt="Global News Icon"
                            />
                            <HighlightLeft>
                                <HighlightLabel>
                                    Global News <MobileOnlyBreak /> Article
                                    Views
                                </HighlightLabel>
                                <HighlightNumber>3 Billion +</HighlightNumber>
                            </HighlightLeft>
                        </HighlightLeftWrapper>
                        <HighlightRight>
                            <MetricsList>
                                <MetricItem>
                                    <MetricIcon
                                        src={founderInfluence2}
                                        alt="X Icon"
                                    />
                                    X Annual Views : <span>2.88B+</span>
                                </MetricItem>
                                <MetricItem>
                                    <MetricIcon
                                        src={founderInfluence3}
                                        alt="X Post Icon"
                                    />
                                    X 1 Post Views : <span>23M+</span>
                                </MetricItem>
                                <MetricItem>
                                    <MetricIcon
                                        src={founderInfluence4}
                                        alt="TikTok Icon"
                                    />
                                    TikTok 1 Video Views : <span>16M+</span>
                                </MetricItem>
                            </MetricsList>
                        </HighlightRight>
                    </InfluenceHighlight>

                    <SocialStatsGrid>
                        <SocialStatCard $highlight>
                            <SocialIcon
                                src={founderInfluence5}
                                alt="Total followers"
                                $highlight
                            />
                            <SocialContent>
                                <SocialLabel>Total followers</SocialLabel>
                                <SocialNumber $highlight>656K +</SocialNumber>
                            </SocialContent>
                        </SocialStatCard>

                        <SocialStatCard>
                            <SocialIcon src={founderInfluence6} alt="X" />
                            <SocialContent>
                                <SocialLabel>X (Twitter)</SocialLabel>
                                <SocialNumber>390K Followers</SocialNumber>
                            </SocialContent>
                        </SocialStatCard>

                        <SocialStatCard>
                            <SocialIcon src={founderInfluence7} alt="Youtube" />
                            <SocialContent>
                                <SocialLabel>Youtube</SocialLabel>
                                <SocialNumber>64K Followers</SocialNumber>
                            </SocialContent>
                        </SocialStatCard>

                        <SocialStatCard>
                            <SocialIcon
                                src={founderInfluence8}
                                alt="Instagram"
                            />
                            <SocialContent>
                                <SocialLabel>Instagram</SocialLabel>
                                <SocialNumber>140K Followers</SocialNumber>
                            </SocialContent>
                        </SocialStatCard>

                        <SocialStatCard>
                            <SocialIcon src={founderInfluence9} alt="Thread" />
                            <SocialContent>
                                <SocialLabel>Thread</SocialLabel>
                                <SocialNumber>62K Followers</SocialNumber>
                            </SocialContent>
                        </SocialStatCard>
                    </SocialStatsGrid>
                </Section>

                {/* Entry into Web3 */}
                <Section>
                    <SectionTitle>Founder Influence</SectionTitle>
                    <SubTitleWrapper>
                        <SubTitle $larger>Entry into Web3</SubTitle>
                        <DateLabel>(2025. 10)</DateLabel>
                    </SubTitleWrapper>

                    <GradientArrowDown
                        viewBox="0 0 100 60"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient
                                id="arrowGradient"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="rgba(5, 208, 155, 0)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="rgba(5, 208, 155, 1)"
                                />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="50,60 0,0 100,0"
                            fill="url(#arrowGradient)"
                        />
                    </GradientArrowDown>

                    <EntryHighlight>
                        Secured top-tier industry influence within{" "}
                        <HighlightText>2 months</HighlightText>
                    </EntryHighlight>

                    <RankHighlight>
                        <HighlightText>Ranked #1</HighlightText> in global
                        <MobileOnlyBreak />
                        crypto news
                    </RankHighlight>

                    <SubLabel>(as the world's highest IQ holder)</SubLabel>

                    <RolesGrid>
                        <RoleCard>
                            <RoleTitle>Ambassador</RoleTitle>
                            <RoleOrg>
                                <img
                                    src={worldLibertyFinancialLogo}
                                    alt="World Liberty Financial"
                                />
                            </RoleOrg>
                        </RoleCard>

                        <RoleCard>
                            <RoleTitle>Advisor</RoleTitle>
                            <RoleOrg>
                                <img
                                    src={pudgyPenguinsLogo}
                                    alt="Pudgy Penguins"
                                />
                                <span>Pudgy Penguins</span>
                            </RoleOrg>
                        </RoleCard>

                        <RoleCard>
                            <RoleTitle>Program Mentor</RoleTitle>
                            <RoleOrg>
                                <img
                                    src={cointelegraphAcceleratorLogo}
                                    alt="Cointelegraph Accelerator"
                                    className="larger"
                                />
                            </RoleOrg>
                        </RoleCard>
                    </RolesGrid>

                    <NetworkInfo>
                        <strong>Key Network:</strong> Elon Musk, Maye Musk,
                        Charlie Kirk, Conor McGregor, Luca Netz, PENGU, WLFI,
                        American Bitcoin, etc.
                    </NetworkInfo>
                </Section>

                {/* Founder = DAO */}
                <Section>
                    <DAOHeaderWrapper>
                        <DAOHeader>Founder = DAO</DAOHeader>
                        <DAOSubHeader>
                            DAO Growth <MobileOnlyBreak />
                            Driven by
                            <MobileOnlyBreak /> Founder Influence
                        </DAOSubHeader>
                    </DAOHeaderWrapper>

                    <DAOImage src={founderDao} alt="Founder DAO" />
                </Section>

                {/* Main Project */}
                <Section>
                    <SectionTitle>Main Project</SectionTitle>
                    <SubTitle $centered>
                        Building a sustainable growth
                        <MobileOnlyBreak /> investment model
                        <br />
                        and increasing token value
                        <MobileOnlyBreak /> through a Collective{" "}
                        <MobileOnlyBreak />
                        Intelligence DAO
                    </SubTitle>

                    <DAOImageDesktop
                        src={mainProject}
                        alt="Main Project Flow"
                    />
                    <DAOImageMobile
                        src={mainProjectMobile}
                        alt="Main Project Flow"
                    />
                </Section>

                {/* Roadmap */}
                <Section>
                    <SectionTitle>Roadmap</SectionTitle>

                    <RoadmapGrid>
                        <RoadmapCard>
                            <RoadmapNumber>1</RoadmapNumber>
                            <RoadmapIcon src={roadmap1} alt="Roadmap 1" />
                            <RoadmapTitle>
                                Tokenization of Founder's <MobileOnlyBreak />
                                Proprietary IP
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal">▸</RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>2</RoadmapNumber>
                            <RoadmapIcon src={roadmap2} alt="Roadmap 2" />
                            <RoadmapTitle>
                                Building Global Network & <MobileOnlyBreak />
                                DAO Community
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal">▸</RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>3</RoadmapNumber>
                            <RoadmapIcon src={roadmap3} alt="Roadmap 3" />
                            <RoadmapTitle>
                                Capital Formation Through <MobileOnlyBreak />
                                Token Sales
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal">▸</RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>4</RoadmapNumber>
                            <RoadmapIcon src={roadmap4} alt="Roadmap 4" />
                            <RoadmapTitle>
                                Discovery of Investment <MobileOnlyBreak />
                                Projects via DAO
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="vertical down">▾</RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>8</RoadmapNumber>
                            <RoadmapIcon src={roadmap8} alt="Roadmap 8" />
                            <RoadmapTitle>
                                Increase in LAMB Token Value
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal reverse">
                            ▸
                        </RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>7</RoadmapNumber>
                            <RoadmapIcon src={roadmap7} alt="Roadmap 7" />
                            <RoadmapTitle>
                                Revenue-Based Token Buybacks
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal reverse">
                            ▸
                        </RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>6</RoadmapNumber>
                            <RoadmapIcon src={roadmap6} alt="Roadmap 6" />
                            <RoadmapTitle>
                                Monetization of Investment <MobileOnlyBreak />
                                and Internal Businesses
                            </RoadmapTitle>
                        </RoadmapCard>
                        <RoadmapArrow className="horizontal reverse">
                            ▸
                        </RoadmapArrow>

                        <RoadmapCard>
                            <RoadmapNumber>5</RoadmapNumber>
                            <RoadmapIcon src={roadmap5} alt="Roadmap 5" />
                            <RoadmapTitle>
                                Growth Support Through the DAO
                            </RoadmapTitle>
                        </RoadmapCard>
                    </RoadmapGrid>
                </Section>

                {/* Mission Statement */}
                <Section>
                    <MissionSubtitle>
                        A MOVEMENT TO BUILD
                        <MobileOnlyBreak /> THE NEW WEB3 VC ECOSYSTEM
                    </MissionSubtitle>
                    <MissionTitle>LAMB276</MissionTitle>

                    <MissionContent>
                        <MissionText>
                            LAMB276 does not end as a single project.
                        </MissionText>
                        <MissionText>
                            Its ultimate mission is <MobileOnlyBreak />
                            <HighlightText>
                                to restore the foundations of civilization
                            </HighlightText>{" "}
                        </MissionText>

                        <MissionText>
                            through the harmony of moral, spiritual,{" "}
                            <MobileOnlyBreak />
                            and intellectual rationalism.
                        </MissionText>
                        <MissionText $spaced>
                            A collective intelligence DAO <MobileOnlyBreak />
                            will evolve into an organization
                            <MobileOnlyBreak /> that transcends national
                            boundaries, <MobileOnlyBreak />
                            and that organization will become
                            <MobileOnlyBreak /> a source of real influence.
                        </MissionText>
                        <MissionText $spaced>
                            That influence will ultimately translate into the
                            power that moves economies, and will become{" "}
                            <HighlightText>
                                the formula for success
                            </HighlightText>
                        </MissionText>
                        <MissionText>within the Web3 ecosystem.</MissionText>
                    </MissionContent>
                </Section>
            </ContentContainer>
        </PageWrapper>
    );
};

export default Business;

const PageWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: transparent;
    position: relative;
    overflow: hidden;
`;

const FixedBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -3;
    background: radial-gradient(circle at 50% 30%, #0a2e23 0%, #020202 80%);
    background-size: cover;
`;

const SkyStarBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2;
    pointer-events: none;

    img {
        width: 100%;
        height: 180%;
        display: block;
        object-fit: cover;
        object-position: center bottom;
        filter: sepia(1) hue-rotate(100deg) saturate(1.5) brightness(1);
    }

    ${media.mobile`
        height: 60vh;
    `}
`;

const EarthBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: auto;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        display: block;
        transform: translateY(66.67%);
        filter: sepia(1) hue-rotate(100deg) saturate(2) brightness(0.6);
    }

    ${media.tablet`
    width: 100%;
+    `}

    ${media.mobile`
    width: 160%;
    `}
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 108rem;
    margin: 0 auto;
    padding-top: 20rem;
    padding-bottom: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;

    ${media.mobile`
        padding-top: 12rem;
        padding-bottom: 5.6rem;
    `}

    ${media.tablet`
        padding-top: 22rem;
        padding-left: 4rem;
        padding-right: 4rem;
    `}
`;

const Section = styled.section`
    width: 100%;
    margin-bottom: 12rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    ${media.mobile`
        margin-bottom: 8rem;
    `}
`;

const HeroSection = styled(Section)`
    margin-bottom: 10rem;

    ${media.mobile`
        margin-bottom: 8rem;
    `}
`;

const Title = styled.h1`
    ${({ theme }) => theme.typography.xxxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(5, 208, 155, 0.3);

    ${media.mobile`
        font-size: 4.4rem;
        margin-bottom: 0rem;
    `}
    ${media.tablet`
        font-size: 6rem;
    `}
`;

const Subtitle = styled.h2`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    width: 100%;
    line-height: 1.3;
    margin-bottom: 0rem;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const SectionTitle = styled.h3`
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 4rem;
    display: block;
    width: 100%;
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xxl};
        margin-bottom: 3.6rem;
        line-height: 1.4;
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.xxl};
        ${(props) => props.$smaller && `font-size: 2.8rem;`}
        margin-bottom: 3.6rem;
        line-height: 1.2;
    `}
`;

const SubTitle = styled.h4`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    font-weight: semibold;
    margin-bottom: ${(props) => (props.$withMargin ? "2rem" : "0rem")};
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xl_2};
        margin-bottom: ${(props) => (props.$withMargin ? "2rem" : "0rem")};
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.lg};
        ${(props) => props.$larger && `font-size: 2.8rem;`}
        ${(props) => props.$centered && `text-align: center;`}
        margin-bottom: ${(props) => (props.$withMargin ? "2rem" : "0rem")};
        line-height: 1.2;
        display: flex;
        width: 100%;
        justify-content: center;
    `}
`;

const SubTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 3rem;
    width: 100%;

    ${media.mobile`
        flex-direction: column;
        gap: 0.4rem;
    `}
`;

const MetaInfo = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.5;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.8rem;
    flex-wrap: wrap;
    justify-content: flex-start;

    /* Mobile */
    ${media.mobile`
        ${({ theme }) => theme.typography.md};
        gap: 0.8rem;
        margin-bottom: 0.4rem;
        `}
`;

const DateLabel = styled.p`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.5;
    margin-bottom: 0;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const GradientArrowDown = styled.svg`
    width: 100%;
    max-width: 12rem;
    height: 2.8rem;
    margin: 0 auto 2rem;
    display: block;

    ${media.mobile`
        max-width: 8rem;
        height: 2rem;
        margin-bottom: 2rem;
    `}
`;

const SubLabel = styled.p`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.7;
    margin-bottom: 3rem;

    ${media.mobile`
        text-align: center;
        width: 100%;
    `}
`;

// Info Cards (Overview, Value, Vision)
const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    width: 100%;
`;

const InfoCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);

    ${media.mobile`
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem;
    `}
`;

const CardLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 26rem;
    flex-shrink: 0;
    gap: 1.2rem;

    ${media.mobile`
        width: 100%;
        margin-bottom: 1rem;
    `}
`;

const CardIcon = styled.img`
    width: 5.2rem;
    height: 5.2rem;
    object-fit: contain;
    flex-shrink: 0;

    ${media.mobile`
        width: 4rem;
        height: 4rem;
    `}
`;

const CardLabel = styled.h5`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 0;

    ${media.mobile`
        font-size: 2.8rem;
    `}
`;

const CardContent = styled.p`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.2;

    ${media.mobile`
        ${({ theme }) => theme.typography.sm_2};
    `}
`;

// Founder Section
const FounderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
`;

const FounderTopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
    width: 100%;
    margin-bottom: -12rem;
    position: relative;

    ${media.tablet`
        min-height: 50rem;
    `}

    ${media.mobile`
        flex-direction: column;
        gap: 3rem;
        margin-bottom: -6rem;
        min-height: auto;
    `}
`;

const FounderLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: relative;
    z-index: 2;
`;

const FounderIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: relative;
    z-index: 2;
`;

const FounderPhoto = styled.div`
    width: 40rem;
    height: auto;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    z-index: 0;
    // margin-right: 2rem;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
    }

    ${media.tablet`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
    `}

    ${media.mobile`
        width: 100%;
        height: auto;
        position: relative;
        left: auto;
        transform: none;
    `}
`;

const DesktopHiddenBreak = styled.br`
    display: none;

    ${media.tablet`
        display: block;
    `}

    ${media.mobile`
        display: block;
    `}
`;

const TabletOnlyBreak = styled.br`
    display: none;

    ${media.tablet`
        display: block;
    `}

    ${media.mobile`
        display: none;
    `}
`;

const MobileOnlyBreak = styled.br`
    display: none;

    ${media.mobile`
        display: block;
    `}
`;

const FounderTitle = styled.p`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.8;
    line-height: 1.3;
    position: relative;
    z-index: 2;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const FounderName = styled.h4`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    line-height: 1.2;
    position: relative;
    z-index: 2;

    ${media.tablet`
        font-size: 2.8rem;
        white-space: nowrap;
    `}

    ${media.mobile`
        font-size: 2.8rem;
    `}
`;

const IQScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    margin-top: auto;
    margin-bottom: 12rem;
    margin-right: 4rem;
    gap: 0rem;
    position: relative;
    z-index: 2;

    ${media.tablet`
        margin-right: 0rem;
        margin-bottom: rem;
    `}

    ${media.mobile`
        margin-top: -16rem;
        margin-bottom: 4rem;
        margin-right: 0;
        margin-left: auto;
        gap: 0.4rem;
    `}
`;

const IQNumber = styled.div`
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.ng};
    font-weight: semibold;
    line-height: 1;
    text-align: right;

    ${media.mobile`
        font-size: 4.8rem;
    `}
`;

const IQLabel = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.3;
    text-align: right;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    position: relative;
    z-index: 2;

    ${media.mobile`
        grid-template-columns: 1fr;
    `}
`;

const StatBox = styled.div`
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
`;

const StatNumber = styled.div`
    font-size: 5.2rem;
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: semibold;
    margin-bottom: 1rem;

    ${media.mobile`
    ${({ theme }) => theme.typography.xxl};
    `}
`;

const StatLabel = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: semibold;
    margin-bottom: 0.5rem;
    line-height: 1;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const StatSubLabel = styled.div`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.7;
    line-height: 1.3;

    ${media.mobile`
        ${({ theme }) => theme.typography.sm_1};
    `}
`;

const VerificationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;

    ${media.mobile`
        grid-template-columns: 1fr;
    `}
`;

const VerificationCard = styled.div`
    background: rgba(5, 208, 155, 0.05);
    padding: 2.4rem;
    border-radius: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.ng_Alpha};
    grid-column: ${(props) => (props.$fullWidth ? "1 / -1" : "auto")};
`;

const VerificationTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1rem;

    ${media.mobile`
        gap: 1rem;
    `}
`;

const VerificationIcon = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    flex-shrink: 0;
    padding: 0.4rem;
    background: ${({ theme }) => theme.colors.ng};
    border: 0.1rem solid ${({ theme }) => theme.colors.ng};
    border-radius: 4rem;

    ${media.mobile`
        width: 3.2rem;
        height: 3.2rem;
    `}
`;

const VerificationTitle = styled.h6`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 0;

    ${media.mobile`
        ${({ theme }) => theme.typography.lg};
    `}
`;

const VerificationText = styled.p`
    ${({ theme }) => theme.typography.sm_2};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.8;
    line-height: 1.3;
`;

// Founder Influence
const InfluenceHighlight = styled.div`
    width: 100%;
    background: rgba(2, 2, 2, 0.6);
    padding: 4rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    ${media.mobile`
        padding: 2rem;
        flex-direction: column;
        gap: 2rem;
        align-items: stretch;
    `}
`;

const HighlightLeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    ${media.tablet`
        gap: 1.2rem;
    `}

    ${media.mobile`
        gap: 1.2rem;
        justify-content: center;
        width: 100%;
    `}
`;

const HighlightIcon = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    flex-shrink: 0;

    ${media.tablet`
        width: 6rem;
        height: 6rem;
    `}

    ${media.mobile`
        width: 7.2rem;
        height: 7.2rem;
    `}
`;

const HighlightLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0rem;
`;

const HighlightRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${media.mobile`
        align-items: center;
        width: 100%;
    `}
`;

const HighlightLabel = styled.div`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 0rem;

    ${media.tablet`
        ${({ theme }) => theme.typography.lg};
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.lg};
    `}
`;

const HighlightNumber = styled.div`
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.ng};
    font-weight: semibold;
    margin-bottom: 0rem;

    ${media.tablet`
        font-size: 4rem;
    `}

    ${media.mobile`
        font-size: 3.6rem;
    `}
`;

const MetricsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;

    ${media.mobile`
        align-items: center;
        width: 100%;
    `}
`;

const MetricItem = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border: 0.05rem solid ${({ theme }) => theme.colors.ng};
    padding: 0.8rem 1.6rem;
    border-radius: 2.4rem;

    span {
        color: ${({ theme }) => theme.colors.ng};
    }

    ${media.tablet`
        ${({ theme }) => theme.typography.md};
        gap: 0.8rem;
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
        gap: 0.8rem;
        width: 100%;
            padding: 0.8rem 1.6rem;
    `}
`;

const MetricIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
    flex-shrink: 0;

    ${media.mobile`
        width: 2.4rem;
        height: 2.4rem;
    `}
`;

const SocialStatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;

    ${media.mobile`
        grid-template-columns: 1fr;
    `}

    ${media.tablet`
        grid-template-columns: repeat(2, 1fr);
    `}
`;

const SocialStatCard = styled.div`
    background: ${(props) =>
        props.$highlight
            ? "rgba(5, 208, 155, 0.1)"
            : "rgba(255, 255, 255, 0.03)"};
    padding: 2.4rem;
    border-radius: 1.2rem;
    border: 0.1rem solid
        ${(props) =>
            props.$highlight
                ? ({ theme }) => theme.colors.ng_Alpha
                : "rgba(255, 255, 255, 0.05)"};
    grid-column: ${(props) => (props.$highlight ? "1 / -1" : "auto")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    ${media.mobile`
        grid-column: auto;
        padding: 1.6rem 2.4rem;
    `}
`;

const SocialIcon = styled.img`
    width: ${(props) => (props.$highlight ? "8.8rem" : "5.2rem")};
    height: ${(props) => (props.$highlight ? "8.8rem" : "5.2rem")};
    object-fit: contain;
    flex-shrink: 0;

    ${media.mobile`
        width: ${(props) => (props.$highlight ? "6.4rem" : "4rem")};
        height: ${(props) => (props.$highlight ? "6.4rem" : "4rem")};
    `}
`;

const SocialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;

const SocialLabel = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.7;
    margin-bottom: 0rem;

    ${media.mobile`
        ${({ theme }) => theme.typography.lg};
        margin-bottom: 0.4rem;
    `}
`;

const SocialNumber = styled.div`
    ${({ theme }) => theme.typography.xl_2};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: semibold;
    font-size: ${(props) => (props.$highlight ? "4.4rem" : "2rem")};

    ${media.mobile`
        ${({ theme }) => theme.typography.xl_1};
        font-size: ${(props) => (props.$highlight ? "3.2rem" : "1.6rem")};
    `}
`;

// Entry into Web3
const EntryHighlight = styled.div`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 0rem;
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xl_2};
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.xl_2};
        text-align: center;
    `}
`;

const RankHighlight = styled.div`
    ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 1rem;
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xl_2};
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.xl_2};
        text-align: center;
        display: block;
        width: 100%;
    `}
`;

const HighlightText = styled.span`
    color: ${({ theme }) => theme.colors.ng};
    font-weight: semibold;
`;

const RolesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    margin-bottom: 3rem;

    ${media.mobile`
        grid-template-columns: 1fr;
    `}

    ${media.tablet`
        grid-template-columns: repeat(2, 1fr);
    `}
`;

const RoleCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem 2rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.mobile`
        gap: 1.5rem;
    `}
`;

const RoleTitle = styled.div`
    ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.ng};

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const RoleOrg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    gap: 1rem;

    img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
        object-fit: contain;
        opacity: 0.9;
        filter: grayscale(1);

        &.larger {
            max-height: 120%;
            margin-top: 1.2rem;
        }
    }

    span {
        ${({ theme }) => theme.typography.xl_2};
        font-color: ${({ theme }) => theme.colors.ngW};
        white-space: nowrap;
    }

    ${media.mobile`
        height: 3rem;

        img.larger {
            max-height: 160%;
        }

        span {
            ${({ theme }) => theme.typography.lg};
        }
    `}
`;

const NetworkInfo = styled.div`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.8;
    line-height: 1.2;
    text-align: center;

    strong {
        color: ${({ theme }) => theme.colors.ng};
    }

    ${media.tablet`
        ${({ theme }) => theme.typography.md};
            line-height: 1.4;

    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.sm_2};
    `}
`;

// DAO Section
const DAOHeaderWrapper = styled.div`
    width: 100%;
    margin-bottom: 4rem;

    ${media.mobile`
        margin-bottom: 3rem;
    `}
`;

const DAOHeader = styled.h3`
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xxl};
            margin-bottom: 0.8rem;
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.xxl};
    `}
`;

const DAOSubHeader = styled.h4`
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 0;
    line-height: 1.2;

    ${media.tablet`
        ${({ theme }) => theme.typography.xxl};
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.xxl};
    `}
`;

const DAOImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 6rem auto 0;

    ${media.mobile`
        max-width: 100%;
    `}
`;

const DAOImageDesktop = styled(DAOImage)`
    display: block;

    ${media.mobile`
        display: none;
    `}
`;

const DAOImageMobile = styled(DAOImage)`
    display: none;

    ${media.mobile`
        display: block;
    `}
`;

// Roadmap
const RoadmapGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
    gap: 0 1rem;
    row-gap: 1rem;
    width: 100%;
    align-items: stretch;

    ${media.tablet`
        grid-template-columns: 1fr auto 1fr auto 1fr;
        grid-template-rows: auto auto auto auto auto;
        row-gap: 1rem;

        /* 1행: Card 1 → Card 2 → Card 3 */
        & > :nth-child(1) { grid-row: 1; grid-column: 1; } /* Card 1 */
        & > :nth-child(2) { grid-row: 1; grid-column: 2; } /* Arrow 1→2 */
        & > :nth-child(3) { grid-row: 1; grid-column: 3; } /* Card 2 */
        & > :nth-child(4) { grid-row: 1; grid-column: 4; } /* Arrow 2→3 */
        & > :nth-child(5) { grid-row: 1; grid-column: 5; } /* Card 3 */

        /* 2행: Arrow down from 3 */
        & > :nth-child(6) {
            grid-row: 2;
            grid-column: 5;
            transform: rotate(90deg) !important;
        } /* Arrow ▾ */

        /* 3행: Card 6 ◀ Card 5 ◀ Card 4 */
        & > :nth-child(13) { grid-row: 3; grid-column: 1; } /* Card 6 */
        & > :nth-child(14) { grid-row: 3; grid-column: 2; } /* Arrow 6←5 */
        & > :nth-child(15) { grid-row: 3; grid-column: 3; } /* Card 5 */
        & > :nth-child(12) { grid-row: 3; grid-column: 4; } /* Arrow 5←4 */
        & > :nth-child(7) { grid-row: 3; grid-column: 5; } /* Card 4 */

        /* 4행: Arrow down from 6 */
        & > :nth-child(8) {
            grid-row: 4;
            grid-column: 1 !important;
            transform: rotate(0deg) !important;
        } /* Arrow ▾ */

        /* 5행: Card 7 → Card 8 */
        & > :nth-child(11) { grid-row: 5; grid-column: 1; } /* Card 7 */
        & > :nth-child(10) {
            grid-row: 5;
            grid-column: 2;
            transform: rotate(0deg) !important;
        } /* Arrow 7→8 */
        & > :nth-child(9) { grid-row: 5; grid-column: 3; } /* Card 8 */

        /* 숨길 요소들 - display none 사용 */
        & > :nth-child(16) { display: none; }
    `}

    ${media.mobile`
        grid-template-columns: 1fr;
        row-gap: 3.5rem;

        /* 모바일에서 1-2-3-4-5-6-7-8 순서로 재정렬 */
        & > :nth-child(1) { order: 1; } /* Card 1 */
        & > :nth-child(2) { order: 2; } /* Arrow 1→2 */
        & > :nth-child(3) { order: 3; } /* Card 2 */
        & > :nth-child(4) { order: 4; } /* Arrow 2→3 */
        & > :nth-child(5) { order: 5; } /* Card 3 */
        & > :nth-child(6) { order: 6; } /* Arrow 3→4 */
        & > :nth-child(7) { order: 7; } /* Card 4 */
        & > :nth-child(8) { order: 8; } /* Arrow 4→5 */
        & > :nth-child(15) { order: 9; } /* Card 5 */
        & > :nth-child(14) { order: 10; } /* Arrow 5→6 */
        & > :nth-child(13) { order: 11; } /* Card 6 */
        & > :nth-child(12) { order: 12; } /* Arrow 6→7 */
        & > :nth-child(11) { order: 13; } /* Card 7 */
        & > :nth-child(10) { order: 14; } /* Arrow 7→8 */
        & > :nth-child(9) { order: 15; } /* Card 8 */
    `}
`;

const RoadmapArrow = styled.div`
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.ng};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    &.reverse {
        transform: rotate(180deg);
    }

    &.vertical {
        grid-column: 7;
        font-size: 2.8rem;
        margin: -1.2rem 0 -0.4rem;
    }

    &.down {
        transform: translateY(0);
    }

    ${media.tablet`
        font-size: 2.8rem;
        /* 모든 화살표 강제로 표시 */
        display: flex !important;
        align-items: center;
        justify-content: center;

        &.reverse {
            transform: rotate(180deg);
        }

        &.vertical {
            margin: -0.5rem 0;
        }

        &.vertical.down {
            transform: rotate(90deg);
        }
    `}

    ${media.mobile`
        /* 모바일에서는 기존 화살표를 모두 숨김 */
        display: none !important;
    `}
`;

const RoadmapCard = styled.div`
    background: ${(props) =>
        props.$highlight
            ? "rgba(5, 208, 155, 0.1)"
            : "rgba(255, 255, 255, 0.03)"};
    padding: 2rem 2rem;
    border-radius: 1.2rem;
    border: 0.1rem solid
        ${(props) =>
            props.$highlight
                ? ({ theme }) => theme.colors.ng_Alpha
                : "rgba(255, 255, 255, 0.05)"};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.mobile`
        gap: 1.2rem;
        position: relative;

        /* 모든 카드 아래에 화살표 추가 */
        &::after {
            content: "▾";
            position: absolute;
            bottom: -3.6rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 3.6rem;
            color: ${({ theme }) => theme.colors.ng};
        }

        /* 시각적으로 마지막 카드인 Card 8 (nth-child(9))의 화살표만 제거 */
        &:nth-child(9)::after {
            display: none;
        }
    `}
`;

const RoadmapNumber = styled.div`
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: semibold;

    ${media.mobile`
        font-size: 3.2rem;
    `}
`;

const RoadmapIcon = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    margin: 0 auto;

    ${media.mobile`
        width: 6rem;
        height: 6rem;
    `}
`;

const RoadmapTitle = styled.div`
    ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.2;
    min-height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
        line-height: 1.4;
    `}
`;

// Mission Statement
const MissionSubtitle = styled.p`
    ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.ng};
    text-align: center;
    margin-bottom: 0rem;
    width: 100%;

    ${media.mobile`
        ${({ theme }) => theme.typography.xs};
    `}
`;

const MissionTitle = styled.h2`
    font-size: 9.2rem;
    color: ${({ theme }) => theme.colors.ngW};
    text-align: center;
    margin-bottom: 4rem;
    width: 100%;
    text-shadow: 0 0 20px rgba(5, 208, 155, 0.3);

    ${media.tablet`
        font-size: 8rem;
    `}

    ${media.mobile`
        font-size: 4.8rem;
    `}
`;

const MissionContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    text-align: center;
`;

const MissionText = styled.p`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.6;
    margin: 0;
    margin-top: ${(props) => (props.$spaced ? "4rem" : "0")};

    ${media.tablet`
        ${({ theme }) => theme.typography.lg};
        margin-top: ${(props) => (props.$spaced ? "4rem" : "0")};
        line-height: 1.8;
    `}

    ${media.mobile`
        ${({ theme }) => theme.typography.md};
        margin-top: ${(props) => (props.$spaced ? "4rem" : "0")};
        line-height: 1.4;
    `}
`;
