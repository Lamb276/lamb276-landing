import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { media } from "../styles/media";
import theme from "../styles/theme";
import tokenChartImg from "../assets/images/gold-paper-image.png";
import Button from "../components/common/Button";
import { useModal } from "../context/ModalContext";
import { VerificationModalContent } from "../components/layout/ModalContents";

const GoldPaper = () => {
    const navigate = useNavigate();
    const { openModal } = useModal();

    return (
        <PageWrapper>
            <FixedBackground />
            <ContentContainer>
                {/* Hero Section & Header Info */}
                <HeroSection>
                    <Subtitle>
                        A MOVEMENT TO BUILD THE NEW CIVILIZATION GENERATION
                    </Subtitle>

                    <TitleRow>
                        <Title>Gold Paper</Title>
                        <HeroButtons>
                            <Button
                                size="sm"
                                variant="primary"
                                onClick={() => navigate("/tokenomics")}
                            >
                                Tokenomics
                            </Button>
                            {/* <Button
                                size="sm"
                                variant="primary"
                                style={{ opacity: 0.5, cursor: "not-allowed" }}
                            >
                                Coming Soon
                            </Button> */}
                        </HeroButtons>
                    </TitleRow>

                    <MetaInfo>
                        <span>v1.0</span>
                        <span>Last Revised: November 27th, 2025</span>
                    </MetaInfo>
                    <DisclaimerText>
                        LAMB276 is not a religious or political organization.
                    </DisclaimerText>
                </HeroSection>

                {/* Intellectual Renaissance */}
                <Section>
                    <SectionTitle>Intellectual Renaissance</SectionTitle>
                    <QuoteBox>
                        Restore the foundation of civilization through the
                        harmony of moral, spiritual, and intellectual
                        rationalism.
                    </QuoteBox>
                    <Tagline>
                        Decentralized Autonomous Organization
                        <br />
                        <span className="highlight">Of</span> the Intellectuals
                        <br />
                        <span className="highlight">By</span> the Intellectuals
                        <br />
                        <span className="highlight">For</span> the Intellectuals
                    </Tagline>
                </Section>

                {/* The Founder */}
                <Section>
                    <SectionTitle>The Founder</SectionTitle>
                    <TextBlock>
                        <p>
                            Dr. YoungHoon Kim holds the official world record
                            for the highest IQ, with a score of 276. His
                            rigorous intellectual standards and unwavering
                            belief in truth laid the foundation for LAMB276.
                        </p>
                        <p>
                            The IQ score of 276 was verified by international
                            accredited bodies including the World Memory
                            Championships, the World Memory Sports Council
                            (WMSC), the Official World Record®, Korea Record
                            Institute, the International Non Olympic Committee,
                            Noble World Records.
                        </p>
                        <p>
                            Notably, the WMSC serves as an official partner to
                            Guinness World Records. Furthermore, this record
                            underwent statistical verification by an Accredited
                            Professional Statistician with a PhD from the
                            University of Oxford. It was also scientifically
                            verified and clinically proven by the World Academy
                            of Medical Sciences WAMS.
                        </p>
                        <p>
                            The results were published in the international
                            journal Testing Psychometrics Methodology in Applied
                            Psychology TPM. This journal is indexed in the
                            world's most prestigious academic databases,
                            including PubMed (U.S. National Library of
                            Medicine), Scopus (Elsevier), PsycINFO (American
                            Psychological Association, APA), and ESCI (Web of
                            Science).
                        </p>
                    </TextBlock>

                    <ButtonWrapper>
                        <Button
                            size="md"
                            variant="primary"
                            onClick={() =>
                                openModal(<VerificationModalContent />)
                            }
                        >
                            Verification Profile
                        </Button>
                    </ButtonWrapper>

                    <SubSectionHeader>
                        His intellectual standing has led to his involvement in
                        multiple global projects bridging diverse sectors:
                    </SubSectionHeader>
                    <ListBlock>
                        <li>
                            <strong>Founder:</strong> United Sigma Intelligence
                            Association
                        </li>
                        <li>
                            <strong>Ambassador:</strong> World Liberty Finance
                        </li>
                        <li>
                            <strong>Advisor:</strong> Pudgy Penguins
                        </li>
                        <li>
                            <strong>Program Mentor:</strong> Cointelegraph
                            Accelerator
                        </li>
                    </ListBlock>

                    <NoticeBox>
                        <strong>THE FOUNDER IS NO AUTHORITY</strong>
                        <p>
                            LAMB276 begins with YoungHoon Kim, but he is neither
                            the objective nor the center of this DAO. He is
                            merely the inaugural founder, essentially just the
                            first contributor that participates as an equal
                            member serving the DAO's principles.
                        </p>
                    </NoticeBox>
                </Section>

                {/* Introduction to the DAO */}
                <Section>
                    <SectionTitle>Introduction to the DAO</SectionTitle>
                    <TextBlock>
                        <p>
                            LAMB276 operates as a definitive movement for
                            civilizational recovery founded on the axiom that
                            society can only sustain itself when anchored to
                            immutable truth.
                        </p>
                        <p>
                            History consistently demonstrates that civilizations
                            crumble when they detach from reality, and we are
                            currently watching that disconnect happen in real
                            time. Modern culture has severed ties with its moral
                            baseline while spiritual certainty is collapsing
                            under the weight of relativity.
                        </p>
                        <p>
                            We are witnessing a cognitive crisis where intellect
                            is no longer a tool for discovering truth but is
                            instead being warped by transient ideologies and
                            emotional impulses. This distortion makes it nearly
                            impossible for the current generation to distinguish
                            objective fact from subjective feeling.
                        </p>
                        <p>
                            In response to this disintegration, LAMB276 is
                            launching an Intellectual Renaissance to reclaim the
                            center of gravity that this era has lost. Our
                            objective together is to architect a new civil
                            generation capable of navigating the future rather
                            than just surviving the present.
                        </p>
                        <p>
                            This requires a precise synthesis of the spirit of
                            moral order, the unyielding pursuit of liberty, and
                            a commitment to intellectual rationalism. Only by
                            harmonizing these three elements can we rebuild a
                            structure that actually endures.
                        </p>
                    </TextBlock>
                </Section>

                {/* Principles */}
                <Section>
                    <SectionTitle>Principles</SectionTitle>
                    <TextBlock>
                        <p>
                            The authority of LAMB276 does not derive from any
                            single individual. Its authority is rooted in truth,
                            principles, and collective reason. Accordingly, we
                            have established the organization's design upon two
                            foundational pillars.
                        </p>
                    </TextBlock>
                    <br />
                    <GridTwoColumn>
                        <GridCard>
                            <h4>1) Decentralized Governance Principles</h4>
                            <p>
                                All significant decisions are determined through
                                DAO voting and consensus.
                                <br />
                                <br />
                                No single member holds absolute power.
                                <br />
                                <br />
                                The charter, policies, partnerships, and
                                financial operations cannot be executed without
                                DAO approval.
                            </p>
                        </GridCard>
                        <GridCard>
                            <h4>2) Blockchain Based Transparency Principles</h4>
                            <p>
                                All financial flows, budgets, and decision
                                making processes are transparently disclosed
                                through on chain records.
                                <br />
                                <br />
                                This ensures the organization's independence
                                from any external pressure, ideology, or power.
                            </p>
                        </GridCard>
                    </GridTwoColumn>
                </Section>

                {/* 3 Vision & 3 Ethos */}
                <Section>
                    <SectionTitle>3 Vision & 3 Ethos</SectionTitle>

                    <SubSectionHeader>3 Vision</SubSectionHeader>
                    <GridThreeColumn>
                        <VisionCard>
                            <h5>1. Moral Order</h5>
                            <p>
                                We aim to revive the roots of civilization
                                defined by family, virtue, and responsibility
                                based on unchanging moral truths. We declare
                                that morality is not oppression but the very
                                order of truth that guarantees the continuity of
                                civilization.
                            </p>
                        </VisionCard>
                        <VisionCard>
                            <h5>2. Guardianship of Liberty</h5>
                            <p>
                                We protect the spirit of liberty from
                                ideological bias and defend the core principles
                                that sustain civilization, including freedom of
                                thought, economic autonomy, and responsible
                                social structures. This is not a matter of power
                                but a matter of the health of civilization
                                itself.
                            </p>
                        </VisionCard>
                        <VisionCard>
                            <h5>3. Elevation of Rationalism</h5>
                            <p>
                                We seek to reestablish balance, wisdom, and
                                enduring truth in modern society through the
                                integration of moral, civic, and intellectual
                                rationalism.
                            </p>
                        </VisionCard>
                    </GridThreeColumn>

                    <SubSectionHeader style={{ marginTop: "6rem" }}>
                        3 Ethos
                    </SubSectionHeader>
                    <EthosContainer>
                        <EthosBlock>
                            <EthosTitle>1. Moral Rationalism</EthosTitle>
                            <EthosDesc>
                                Civilization can only persist when based on
                                moral truth.
                            </EthosDesc>
                            <ul>
                                <li>
                                    <strong>Spirit of Human Dignity:</strong> A
                                    civilized attitude that protects the
                                    inherent value of all life
                                </li>
                                <li>
                                    <strong>
                                        Restoration of Community Order:
                                    </strong>{" "}
                                    Rebuilding civilization through the recovery
                                    of family, responsibility, and virtue
                                </li>
                                <li>
                                    <strong>
                                        Creative Harmony of Relationships:
                                    </strong>{" "}
                                    Supporting life structures that realize
                                    human dignity
                                </li>
                                <li>
                                    <strong>
                                        Reestablishment of Moral Balance:
                                    </strong>{" "}
                                    Establishing balance based on truth beyond
                                    relativism
                                </li>
                            </ul>
                        </EthosBlock>

                        <EthosBlock>
                            <EthosTitle>2. Civic Rationalism</EthosTitle>
                            <EthosDesc>
                                Civil stability stems not from politics but from
                                social principles of reason and order.
                            </EthosDesc>
                            <ul>
                                <li>
                                    <strong>
                                        Spirit of Freedom and Responsibility:
                                    </strong>{" "}
                                    Protecting civilization through the union of
                                    liberty and obligation
                                </li>
                                <li>
                                    <strong>Ordered Social Structure:</strong>{" "}
                                    Balance achieved through the mixture of
                                    autonomy and norms
                                </li>
                                <li>
                                    <strong>
                                        Spirit of Community Stability:
                                    </strong>{" "}
                                    A harmonious ecosystem of institutions,
                                    procedures, and culture
                                </li>
                                <li>
                                    <strong>
                                        Preservation of Culture and Identity:
                                    </strong>{" "}
                                    Maintaining a civilized foundation where
                                    wisdom connects across generations
                                </li>
                            </ul>
                        </EthosBlock>

                        <EthosBlock>
                            <EthosTitle>3. Intellectual Rationalism</EthosTitle>
                            <EthosDesc>
                                The core spirit of LAMB276 reestablishes truth
                                in a distorted era.
                            </EthosDesc>
                            <ul>
                                <li>
                                    <strong>Intellectual Renaissance:</strong>{" "}
                                    Restoring the center of civilization based
                                    on logic, science, and honesty
                                </li>
                                <li>
                                    <strong>
                                        Academic Freedom and Integrity:
                                    </strong>{" "}
                                    Liberating academia from ideological
                                    instrumentalization
                                </li>
                                <li>
                                    <strong>
                                        Transparent Information Ecosystem:
                                    </strong>{" "}
                                    Building an independent information
                                    structure centered on facts and truth
                                </li>
                                <li>
                                    <strong>
                                        Civilization Research Network:
                                    </strong>{" "}
                                    A global DAO think tank researching order,
                                    ethics, and wisdom
                                </li>
                            </ul>
                        </EthosBlock>
                    </EthosContainer>
                </Section>

                {/* 6 Action Plan */}
                <Section>
                    <SectionTitle>6 Action Plan</SectionTitle>
                    <ListContainer>
                        <ActionItem>
                            <ActionHeader>1. Publish</ActionHeader>
                            <p>
                                We are building a publishing ecosystem dedicated
                                to the preservation of truth. By transcending
                                the emotional volatility of current media, we
                                provide a sanctuary for rational discourse. This
                                initiative establishes the intellectual
                                groundwork necessary to restore civilizational
                                standards.
                            </p>
                        </ActionItem>
                        <ActionItem>
                            <ActionHeader>2. Educate</ActionHeader>
                            <p>
                                Contemporary media often clouds judgment with
                                distortion. LAMB276 counters this by delivering
                                a curriculum grounded in logic, science, and
                                empirical fact. We empower the next generation
                                to dismantle false narratives and construct a
                                future built upon clarity and reason.
                            </p>
                        </ActionItem>
                        <ActionItem>
                            <ActionHeader>3. Network</ActionHeader>
                            <p>
                                We integrate isolated intellectual communities
                                and leading scholars into a unified global
                                alliance. Through a DAO framework, we facilitate
                                the transparent exchange of ideas across
                                borders. This cohesion transforms fragmented
                                efforts into a formidable Civilizational
                                Intelligence Network that guides the New
                                Civilization Generation.
                            </p>
                        </ActionItem>
                        <ActionItem>
                            <ActionHeader>4. Lead</ActionHeader>
                            <p>
                                We address social discourse through the lens of
                                moral order rather than political partisanship.
                                Our approach cultivates principled civic
                                engagement to drive meaningful change. This
                                stewardship inspires the New Civilization
                                Generation to adopt a higher standard of
                                leadership.
                            </p>
                        </ActionItem>
                        <ActionItem>
                            <ActionHeader>5. Fund</ActionHeader>
                            <p>
                                We channel capital to initiatives that align
                                with our core values through a transparent
                                funding mechanism. By empowering projects
                                committed to free thought, we expand an
                                ecosystem where truth and ethical order can
                                thrive.
                            </p>
                        </ActionItem>
                        <ActionItem>
                            <ActionHeader>6. Sustainable Growth</ActionHeader>
                            <p>
                                We drive expansion through an economic engine
                                where civilizational values define market
                                reality. Revenue is reinvested to strengthen the
                                ecosystem and enhance token value in adherence
                                to DAO principles. This creates a virtuous cycle
                                where economic activity fuels the restoration of
                                civilization, ensuring that the growth of the
                                LAMB276 economy directly amplifies our
                                influence.
                            </p>
                        </ActionItem>
                    </ListContainer>
                </Section>

                {/* Tokenomics */}
                <Section>
                    <SectionTitle>$LAMB</SectionTitle>
                    <TextBlock>
                        <p>
                            $LAMB embodies the vision of LAMB276 and functions
                            as the primary instrument for governance. Holders
                            possess the right to propose initiatives and cast
                            votes, effectively steering the trajectory of the
                            DAO.
                        </p>
                    </TextBlock>
                    <TokenDetailBox>
                        <DetailRow>
                            <span>Name</span>
                            <strong>LAMB (LAMB276 DAO Token)</strong>
                        </DetailRow>
                        <DetailRow>
                            <span>Network</span>
                            <strong>Base</strong>
                        </DetailRow>
                        <DetailRow>
                            <span>Total Supply</span>
                            <strong>276,000,000</strong>
                        </DetailRow>
                        <DetailRow>
                            <span>Contract Address</span>
                            <strong>0x... (TBA)</strong>
                        </DetailRow>
                    </TokenDetailBox>

                    <ChartImageWrapper>
                        <img
                            src={tokenChartImg}
                            alt="$LAMB Token Distribution"
                        />
                    </ChartImageWrapper>
                </Section>

                {/* Risks and Legal Disclaimers */}
                <DisclaimerSection>
                    <h4>Risks and Legal Disclaimers</h4>
                    <DisclaimerList>
                        <li>
                            LAMB276 operates as a Decentralized Autonomous
                            Organization and is not a registered corporate
                            entity or financial institution. The Gold Paper,
                            website, and smart contracts are provided on an "as
                            is" basis without warranties of any kind.
                            Participation involves significant risks including
                            extreme market volatility, technical
                            vulnerabilities, and the potential total loss of
                            funds. You acknowledge that you have sufficient
                            technical knowledge to understand these risks and
                            are solely responsible for compliance with local
                            laws.
                        </li>
                        <li>
                            Tokens associated with LAMB276 are strictly for
                            governance and utility purposes. They do not
                            represent equity, shares, debt, or ownership
                            interests in any enterprise. Holding these tokens
                            does not entitle you to dividends, revenue shares,
                            or investment returns. The value of the token is
                            derived solely from market forces and community
                            utility with no guarantee of liquidity.
                        </li>
                        <li>
                            Smart contracts may contain bugs or security risks.
                            Blockchain transactions are immutable and cannot be
                            reversed by the DAO or any contributor in the event
                            of theft, loss of keys, or interaction with
                            malicious addresses.
                        </li>
                        <li>
                            Dr. YoungHoon Kim is identified as the Founder
                            solely to recognize his role as the inaugural
                            contributor. He does not serve as a director,
                            officer, or manager as no such central positions
                            exist. He participates as an equal member of the DAO
                            and holds no executive authority. His affiliations
                            with external organizations like World Liberty
                            Finance or the United Sigma Intelligence Association
                            do not imply any commercial partnership or shared
                            liability.
                        </li>
                        <li>
                            The goals mentioned in this Gold Paper depend
                            entirely on community consensus and governance
                            approval. There is no guarantee that these
                            objectives will be realized as described.
                        </li>
                    </DisclaimerList>
                </DisclaimerSection>
            </ContentContainer>
        </PageWrapper>
    );
};

export default GoldPaper;

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
    z-index: -1;
    background: radial-gradient(circle at 50% 30%, #0a2e23 0%, #020202 80%);
    background-size: cover;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 108rem;
    margin: 0 auto;
    padding-top: 20rem;
    padding-bottom: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;

    /* Mobile */
    ${media.mobile`
    padding-top: 12rem;
    padding-bottom: 5.6rem;
    `}

    /* Tablet */
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

    /* Mobile */
    ${media.mobile`
        margin-bottom: 8rem;
    `}
`;

const HeroSection = styled(Section)`
    margin-bottom: 10rem;

    /* Mobile */
    ${media.mobile`margin-bottom: 8rem;`}
`;

const TitleRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* 텍스트 베이스라인에 맞춰 버튼 정렬 */
    margin-bottom: 2rem;

    /* Mobile */
    ${media.mobile`
        flex-direction: column;
        align-items: flex-start;
        gap: 0rem;
        margin-bottom: 0;
    `}
`;

const HeroButtons = styled.div`
    display: flex;
    gap: 1.2rem;

    /* Mobile */
    ${media.mobile`
        width: 100%;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    `}
`;

const Title = styled.h1`
    ${({ theme }) => theme.typography.xxxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 0; /* TitleRow에서 간격 처리하므로 0으로 변경 */
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(5, 208, 155, 0.3);

    /* Mobile,Tablet */
    ${media.mobile`font-size: 4.4rem;`}
    ${media.tablet`font-size: 6rem;`}
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

const Subtitle = styled.h2`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    width: 100%;
    line-height: 1.3;
    margin-bottom: 0rem;

    /* Mobile */
    ${media.mobile`${({ theme }) => theme.typography.md};`}
`;

const DisclaimerText = styled.p`
    ${({ theme }) => theme.typography.sm_1};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.4;
`;

const SectionTitle = styled.h3`
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 4rem;
    display: block; // block으로 변경하여 전체 영역 차지 가능
    width: 100%;

    /* Mobile */
    ${media.mobile`
        ${({ theme }) => theme.typography.xxl};
        margin-bottom: 3rem;
    `}
`;

const SubSectionHeader = styled.h4`
    ${({ theme }) => theme.typography.xl_2};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-transform: uppercase;
    width: 100%;

    ${media.mobile`
        ${({ theme }) => theme.typography.lg};
    `}
`;

const QuoteBox = styled.div`
    ${({ theme }) => theme.typography.xl_2};
    color: ${({ theme }) => theme.colors.ng};
    opacity: 0.9;
    width: 100%;
    margin-bottom: 4rem;
    line-height: 1.3;

    /* Mobile */
    ${media.mobile`
        ${({ theme }) => theme.typography.md};
    `}
`;

const Tagline = styled.p`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.3;
    width: 100%;
    font-style: italic;

    .highlight {
        color: ${({ theme }) => theme.colors.ng};
    }

    /* Mobile */
    ${media.mobile`
        ${({ theme }) => theme.typography.md};
        line-height: 1.3;
    `}
`;

const TextBlock = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 0;

    p {
        ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.ngW};
        line-height: 1.3;
        margin-bottom: 2rem;
        opacity: 0.9;
        text-align: left;
    }

    /* Mobile */
    ${media.mobile`
        p {
            ${({ theme }) => theme.typography.sm_2};
        }
    `}
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 2.4rem;
    margin-bottom: 4rem;
`;

const ListBlock = styled.ul`
    margin-bottom: 4rem;
    padding-left: 0;
    width: 100%;
    li {
        ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.ngW};
        margin-bottom: 1rem;
        list-style: disc inside;
        opacity: 0.9;

        strong {
            color: ${({ theme }) => theme.colors.ng};
            font-weight: normal;
            margin-right: 0.5rem;
        }
    }
`;

const NoticeBox = styled.div`
    width: 100%;
    padding: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.ng_Alpha};
    background: rgba(5, 208, 155, 0.05);
    border-radius: 1.2rem;
    text-align: left;

    strong {
        display: block;
        color: ${({ theme }) => theme.colors.ng};
        margin-bottom: 1.5rem;
        ${({ theme }) => theme.typography.lg};
    }
    p {
        ${({ theme }) => theme.typography.sm_2};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.8;
        line-height: 1.3;
    }
`;

const GridTwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 100%;

    /* Mobile */
    ${media.mobile`grid-template-columns: 1fr;`}
`;

const GridCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    padding: 2.4rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h4 {
        ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.ng};
        margin-bottom: 0;
    }
    p {
        ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.8;
        line-height: 1.3;
    }
`;

const GridThreeColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;

    /* Mobile, Tablet */
    ${media.mobile`grid-template-columns: 1fr;`}
    ${media.tablet`grid-template-columns: repeat(2, 1fr);`}
`;

const VisionCard = styled(GridCard)`
    h5 {
        ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.ng};
        margin-bottom: 0rem;
    }
    p {
        ${({ theme }) => theme.typography.sm_2};
    }
`;

const EthosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`;

const EthosBlock = styled.div`
    text-align: left;
    background: rgba(2, 2, 2, 0.6);
    padding: 3rem;
    border-left: 3px solid ${({ theme }) => theme.colors.ng};
    border-radius: 0 1.2rem 1.2rem 0;
    width: 100%;

    ul {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
    li {
        ${({ theme }) => theme.typography.sm_2};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.8;
        line-height: 1.3;

        strong {
            color: ${({ theme }) => theme.colors.ng};
            font-weight: bold;
            margin-right: 0.5rem;
        }
    }
`;

const EthosTitle = styled.h4`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    margin-bottom: 0;
`;

const EthosDesc = styled.p`
    ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ngW};
    margin-top: 0.4rem;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
`;

const ActionItem = styled.div`
    text-align: left;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;

    &:last-child {
        border-bottom: none;
    }

    p {
        ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.8;
        line-height: 1.3;
    }
`;

const ActionHeader = styled.h4`
    ${({ theme }) => theme.typography.xl_1};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 1rem;
`;

const TokenDetailBox = styled.div`
    width: 100%;
    background: rgba(5, 208, 155, 0.05);
    border-radius: 1.2rem;
    padding: 0 2rem;
    margin-bottom: 4rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.ng_Alpha};
`;

const DetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 0;
    border-bottom: 0.1rem solid rgba(5, 208, 155, 0.2);

    &:last-child {
        border-bottom: none;
    }

    span {
        ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.7;
    }
    strong {
        ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.ng};
        text-align: right;
    }
`;

const ChartImageWrapper = styled.div`
    width: 60%;
    margin: 2rem auto 0;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    /* Mobile */
    ${media.mobile`
        width: 100%;
    `}
`;

const DisclaimerSection = styled.div`
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 6rem;
    text-align: left;

    h4 {
        ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.ngW};
        margin-bottom: 2rem;
        opacity: 0.5;
    }
`;

const DisclaimerList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;

    li {
        ${({ theme }) => theme.typography.xs};
        color: ${({ theme }) => theme.colors.ngW};
        opacity: 0.4;
        margin-bottom: 1.2rem;
        line-height: 1.3;
        text-align: justify;
    }
`;
