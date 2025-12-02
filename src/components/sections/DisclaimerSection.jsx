import React from "react";
import styled from "styled-components";
import { media } from "../../styles/media";

const DisclaimerSection = () => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <Title>Risks and Legal Disclaimers</Title>
                <Paragraph>
                    LAMB276 operates as a Decentralized Autonomous Organization
                    and is not a registered corporate entity or financial
                    institution. The Gold Paper, website, and smart contracts
                    are provided on an “as is” basis without warranties of any
                    kind. Participation involves significant risks, including
                    extreme market volatility, technical vulnerabilities, and
                    the potential total loss of funds. You acknowledge that you
                    have sufficient technical knowledge to understand these
                    risks and are solely responsible for compliance with local
                    laws.
                </Paragraph>
                <Paragraph>
                    Tokens associated with LAMB276 are strictly for governance
                    and utility purposes. They do not represent equity, shares,
                    debt, or ownership interests in any enterprise. Holding
                    these tokens does not entitle you to dividends, revenue
                    shares, or investment returns. The value of the token is
                    derived solely from market forces and community utility,
                    with no guarantee of liquidity.
                </Paragraph>
                <Paragraph>
                    Nothing in this document should be interpreted as financial,
                    investment, legal, or tax advice. No statements in this Gold
                    Paper should be considered a guarantee, promise, or
                    representation regarding the future performance or value of
                    any tokens or any components of the ecosystem.
                </Paragraph>
                <Paragraph>
                    Smart contracts may contain bugs or security risks.
                    Blockchain transactions are immutable and cannot be reversed
                    by the DAO or any contributor in the event of theft, loss of
                    keys, or interaction with malicious addresses.
                </Paragraph>
                <Paragraph>
                    Dr. YoungHoon Kim's affiliations with external organizations
                    such as World Liberty Finance or Pudgy Penguins do not imply
                    any commercial partnership or shared liability.
                </Paragraph>
                <Paragraph>
                    The goals mentioned in this Gold Paper depend entirely on
                    community consensus and governance approval. There is no
                    guarantee that these objectives will be realized as
                    described.
                </Paragraph>
                <Paragraph>
                    Participants are responsible for understanding and complying
                    with the laws and regulations applicable in their own
                    jurisdictions.
                </Paragraph>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default DisclaimerSection;

const SectionContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    padding: 0 2rem 8rem;

    /* Tablet, PC */
    ${media.tablet`
    padding: 0 8rem 16rem;
    `}
    ${media.pc`
    padding: 2rem 16rem 16rem 16rem;
    `}
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.3;
    text-align: justify;
    letter-spacing: -0.04em;

    /* Tablet, PC */
    ${media.tablet`
        text-align: left;
    `}
    ${media.pc`
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-align: left;
    `}
`;

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm_2};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.2;
    text-align: justify;
    letter-spacing: -0.04em;

    /* Tablet, PC */
    ${media.tablet`
        text-align: left;
    `}
    ${media.pc`
        font-size: ${({ theme }) => theme.fontSizes.sm_2};
        text-align: left;
    `}
`;
