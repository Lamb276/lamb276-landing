import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media";

const partnerLogosModules = import.meta.glob(
    "../../assets/images/partner/*.svg",
    { eager: true, import: "default" }
);

const PARTNER_LOGOS = Object.values(partnerLogosModules);

const MarqueeContent = () => (
    <LogoGroup>
        {Array.from({ length: 10 }).map((_, loopIndex) => (
            <React.Fragment key={loopIndex}>
                {PARTNER_LOGOS.map((logo, index) => (
                    <LogoItem key={`${loopIndex}-${index}`}>
                        <img src={logo} alt={`Partner ${index + 1}`} />
                    </LogoItem>
                ))}
            </React.Fragment>
        ))}
    </LogoGroup>
);

const LogoMarquee = () => {
    return (
        <MarqueeContainer>
            <Track>
                <MarqueeContent />
                <MarqueeContent />
            </Track>
        </MarqueeContainer>
    );
};

export default LogoMarquee;

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeContainer = styled.div`
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    background-color: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;

    mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
    );

    /* 모바일 */
    padding: 6rem 0 8rem;

    /* Tablet */
    ${media.tablet`
        padding: 14rem 0 0;
    `}

    /* PC */
    ${media.pc`
        padding: 16rem 0 0;
    `}
`;

const Track = styled.div`
    display: flex;
    width: fit-content;
    animation: ${scrollAnimation} 180s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;

const LogoGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 4.8rem;
    padding-right: 4.8rem;
`;

const LogoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 3.2rem;
        width: auto;
        object-fit: contain;

        opacity: 1;
        filter: grayscale(100%);
        transition: all 0.3s ease;
    }
`;
