import React from "react";
import styled from "styled-components";

const InfoSection = () => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <Paragraph>
                    1. This service is provided to wallet holders by Uniswap, a
                    third party. Neither of Uniswap or this service is offered,
                    managed, or controlled in any way by WLF. By using Uniswap
                    to exchange $WLFI, you expressly agree that you have read,
                    understand, and accept all the applicable terms, conditions,
                    and risks that may apply to your use of Uniswap.
                </Paragraph>
                <Paragraph>
                    2. Bridge service is a third party service provided solely
                    by Chainlink CCIP directly between wallet holders and
                    Chainlink CCIP.
                </Paragraph>
                <Paragraph>
                    No legal, tax, investment, or other advice is provided by
                    any entity. Please consult your legal, tax and investment
                    professionals for questions about your specific
                    circumstances. Digital assets are subject to several risks,
                    including price volatility. Transacting in digital assets
                    could result in significant losses and may not be suitable
                    for some persons. Digital asset markets and exchanges are
                    not necessarily regulated with the same controls or customer
                    protections available with other forms of financial products
                    and are subject to an evolving regulatory environment.
                    Digital assets do not have legal tender status and are not
                    covered by deposit protection insurance. The past
                    performance of a digital asset is not a guide to future
                    performance, nor is it a reliable indicator of future
                    results or performance. Information is provided for
                    informational purposes only and is not investment advice or
                    a recommendation to buy, sell, hold, stake or otherwise
                    transact in any digital asset.
                </Paragraph>
                <Paragraph>
                    Access to the services described on this website may be
                    restricted by laws and regulations in certain jurisdictions.
                    Applicable legal requirements may prevent certain visitors
                    from being solicited or offered certain services. Please
                    note that the services described on this website are
                    intended to inform eligible customers and do not constitute
                    an offer to transact business with any person in any
                    jurisdiction where such an offer would be considered
                    unlawful. If you choose to access this website, you do so at
                    your own initiative and risk and confirm your understanding
                    that services described herein are only intended to be
                    offered to eligible customers.
                </Paragraph>
                <Paragraph>
                    Third party applications may be accessed through the
                    website. Third party applications are not offered, managed,
                    or controlled in any way by World Liberty Financial, Inc. or
                    affiliated entities. By using third party applications
                    through this website, you expressly agree that you have
                    read, understand, and accept all the applicable terms,
                    conditions and risks that may apply to your use of those
                    third party applications.
                </Paragraph>
                <Paragraph>
                    Any purchases may have the effect on the market price of
                    tokens and may stabilize, maintain or otherwise affect the
                    market price of the tokens. As a result, the market price of
                    the tokens may be higher than the price that otherwise might
                    exist. From time to time, World Liberty Financial, Inc., its
                    affiliates, persons engaged by World Liberty Financial, Inc.
                    or its affiliates or others, may purchase or sell tokens but
                    are under no obligation to do so. If any purchases occur in
                    the future, any such activity may be initiated, suspended,
                    modified, or discontinued at any time, with or without
                    notice. No token purchaser, holder or seller should rely on
                    past purchases as an indication of future token purchases.
                </Paragraph>
                <Paragraph>
                    DT Marks DEFI LLC, an entity affiliated with Donald J. Trump
                    and certain of his family members, owns approximately 38% of
                    the equity interests in WLF Holdco LLC, which holds the only
                    membership interest in World Liberty Financial, Inc., a
                    Delaware non-stock corporation and developer of the WLF
                    protocol and operates the WLF governance platform. WLF
                    Holdco LLC holds all of the rights to net protocol revenues
                    from the WLF protocol (other than net proceeds from the sale
                    of $WLFI tokens) pursuant to the terms of agreements with
                    World Liberty Financial, Inc. None of Donald J. Trump, his
                    family members or any director, officer or employee of Trump
                    Organization or of DT Marks LLC is an officer, director or
                    employee of, WLF Holdco LLC or World Liberty Financial, Inc.
                    DT Marks DEFI LLC along with certain family members of
                    Donald J. Trump also holds 22.5 billion $WLFI tokens, and DT
                    Marks DEFI LLC is entitled to receive fees from World
                    Liberty Financial, Inc. pursuant to a service agreement,
                    equal to 75% of $WLFI token sale proceeds after deduction of
                    agreed reserves, expenses and other amounts. Any references
                    to or quotes or imagery attributed to or associated with
                    Donald J. Trump or his family members should not be
                    construed as an endorsement or representation or warranty
                    with respect to any product or service offering. $WLFI
                    tokens and use of the WLF protocol and governance platform
                    are initially offered and sold solely by World Liberty
                    Financial, Inc. or its affiliates. WLF Holdco LLC, DT Marks
                    DEFI LLC, World Liberty Financial, Inc., the WLF protocol,
                    the WLF governance platform and $WLFI tokens are not
                    political or associated with any political campaign.
                </Paragraph>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default InfoSection;

const SectionContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
    padding: 8rem 16rem 16rem 16rem;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.4;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: left;
    }
`;
