import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useModal } from "../../context/ModalContext";

// 공통
const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.lg};
    color: ${({ theme }) => theme.colors.ng};
    display: flex;
    align-items: center;
`;

const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.ngW};
    line-height: 1.6;
    opacity: 0.8;
    white-space: pre-line;
`;

// $LAMB
export const LambModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>$LAMB</Title>
            <Description>
                $LAMB community presale is coming soon. Stay tuned, stay right!
            </Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Ok
            </Button>
        </>
    );
};

// Presale
export const PresaleModalContent = () => {
    const { closeModal } = useModal();

    return (
        <>
            <Title>Presale</Title>
            <Description>Coming soon...</Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Close
            </Button>
        </>
    );
};

// About
export const AboutModalContent = () => {
    const { closeModal } = useModal();

    return (
        <>
            <Title>About Project</Title>
            <Description>Content is needed here.</Description>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    marginTop: "2rem",
                }}
            >
                <Button
                    size="md"
                    variant="secondary"
                    onClick={closeModal}
                    style={{ flex: 1 }}
                >
                    Cancel
                </Button>
                <Button
                    size="md"
                    variant="primary"
                    onClick={() => alert("Confirmed!")}
                    style={{ flex: 1 }}
                >
                    Confirm
                </Button>
            </div>
        </>
    );
};

// Campaign
export const CampaignModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>Campaign</Title>
            <Description>Coming soon...</Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Close
            </Button>
        </>
    );
};

// Contact
export const ContactModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>Contact</Title>
            <Description>
                We only accept contact through the Offer channel in our official
                Discord server.
            </Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Got it
            </Button>
        </>
    );
};

// Discord
export const DiscordModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>Discord</Title>
            <Description>Coming Soon...</Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Close
            </Button>
        </>
    );
};

// Leaderboard
export const LeaderboardModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>Leaderboard</Title>
            <Description>Coming Soon...</Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Close
            </Button>
        </>
    );
};

// Verification
export const VerificationModalContent = () => {
    const { closeModal } = useModal();
    return (
        <>
            <Title>Verification</Title>
            <Description>Coming Soon...</Description>
            <Button
                size="md"
                variant="primary"
                style={{ width: "100%", marginTop: "2rem" }}
                onClick={closeModal}
            >
                Close
            </Button>
        </>
    );
};
