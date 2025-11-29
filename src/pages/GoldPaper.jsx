import React from "react";
import styled from "styled-components";

const GoldPaper = () => {
    return (
        <>
            <PageContainer>
                <ContentWrapper>
                    <Title>Gold Paper</Title>
                    <Description>Comming Soon...</Description>
                </ContentWrapper>
            </PageContainer>
        </>
    );
};

export default GoldPaper;

const PageContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    padding-top: 20rem;
    background-color: ${({ theme }) => theme.colors.ngB};
    display: flex;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.xxl};
    color: ${({ theme }) => theme.colors.ng};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xl_1};
    color: ${({ theme }) => theme.colors.ngW};
    opacity: 0.7;
`;
