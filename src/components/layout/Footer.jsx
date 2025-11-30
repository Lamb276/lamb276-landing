import React from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
// import { IoIosArrowBack } from "react-icons/io";

const Footer = () => {
    return (
        <FooterContainer>
            <ContentWrapper>
                {/* <LogoGroup href="/">
                    <IconWrapper>
                        <IoIosArrowBack />
                    </IconWrapper>
                    <TextGroup>
                        <BrandName>BRAND NAME</BrandName>
                        <Slogan>SLOGAN HERE</Slogan>
                    </TextGroup>
                </LogoGroup> */}

                <Copyright>
                    &copy; 2025 LAMB276, Inc. All rights reserved.
                </Copyright>
            </ContentWrapper>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    width: 100%;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    padding: 0 2rem;
    border-top: 0.05rem solid rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;

    /* Tablet, PC */
    ${media.tablet`
    padding: 4rem 8rem;
    `}
    ${media.pc`
    padding: 4rem 16rem;
    `}
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 128rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    /* Tablet */
    ${media.tablet`
        flex-direction: row;
        // justify-content: space-between;
        justify-content: center;
        align-items: center;
        padding: 0 4rem;
    `}
`;

// const LogoGroup = styled.a`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     opacity: 0.5;
//     transition: opacity 0.3s ease;
//     cursor: pointer;
//     text-decoration: none;

//     &:hover {
//         opacity: 1;
//     }
// `;

// const IconWrapper = styled.div`
//     font-size: 2.4rem;
//     color: ${({ theme }) => theme.colors.ngW};
//     display: flex;
//     align-items: center;
// `;

// const TextGroup = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;

// const BrandName = styled.span`
//     font-family: "Golos Text", sans-serif;
//     font-size: 1.6rem;
//     font-weight: 600;
//     color: ${({ theme }) => theme.colors.ngW};
//     letter-spacing: 0.05em;
//     line-height: 1.1;
//     text-transform: uppercase;
// `;

// const Slogan = styled.span`
//     font-family: "Golos Text", sans-serif;
//     font-size: 1rem;
//     color: ${({ theme }) => theme.colors.ngW};
//     opacity: 0.7;
//     letter-spacing: 0.05em;
//     text-transform: uppercase;
// `;

const Copyright = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm_1};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.3;
    text-align: center;
    letter-spacing: -0.02em;

    /* Tablet */
    ${media.tablet`
        text-align: right;
    `}
`;
