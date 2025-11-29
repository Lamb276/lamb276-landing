import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";
// import { IoClose } from "react-icons/io5";

const Modal = () => {
    const { isOpen, closeModal, modalContent } = useModal();

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // onClick={closeModal}
                >
                    <ModalContainer
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* <CloseButton onClick={closeModal}>
                            <IoClose />
                        </CloseButton> */}

                        {/* 모달 내용 */}
                        {modalContent}
                    </ModalContainer>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Modal;

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(0.4rem);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

const ModalContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: 40rem;
    padding: 2.4rem;
    background: #020202;
    border: 0.1rem solid ${({ theme }) => theme.colors.ng};
    border-radius: 2.4rem;
    box-shadow: 0 0 3rem rgba(5, 208, 155, 0.15);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.6rem;
`;

// const CloseButton = styled.button`
//     position: absolute;
//     top: 1.5rem;
//     right: 1.5rem;
//     font-size: 2.4rem;
//     color: ${({ theme }) => theme.colors.ngW};
//     opacity: 0.5;
//     transition: all 0.2s;
//     padding: 0.5rem;

//     &:hover {
//         opacity: 1;
//         color: ${({ theme }) => theme.colors.ng};
//         transform: rotate(90deg);
//     }
// `;
