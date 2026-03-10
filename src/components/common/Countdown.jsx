import React from "react";
import styled from "styled-components";
import useCountdown from "../../hooks/useCountdown";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Countdown 공통 컴포넌트
 *
 * Props:
 *   target {Date|string|number} - 카운트다운 목표 시각
 *   endText {string}            - 카운트다운 종료 후 표시할 문구 (기본값: "On Sale Now!")
 *   className {string}          - 외부에서 styled-components로 스타일 확장 시 사용
 */
const Countdown = ({ target, endText = "On Sale Now!", className }) => {
    const { days, hours, minutes, seconds } = useCountdown(
        target instanceof Date ? target : new Date(target)
    );
    const isEnded = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

    return (
        <Wrapper className={className}>
            {isEnded ? (
                <EndText>{endText}</EndText>
            ) : (
                `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
            )}
        </Wrapper>
    );
};

export default Countdown;

const Wrapper = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.ng};
    font-weight: 500;
    letter-spacing: 0.05em;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    display: flex;
    align-items: center;
`;

const EndText = styled.span`
    color: ${({ theme }) => theme.colors.ngW_Alpha};
`;
