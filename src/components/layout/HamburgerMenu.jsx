import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "../../constants/menu";
import { IoClose } from "react-icons/io5"; // 닫기 아이콘

const MenuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const HamburgerMenu = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <HeaderRow>
                        {/* 닫기 버튼 */}
                        <IconButton onClick={onClose}>
                            <IoClose />
                        </IconButton>
                    </HeaderRow>

                    <MenuList>
                        {MENU_ITEMS.map((item, index) => (
                            <MenuItem
                                key={item.id}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={MenuVariants}
                                onClick={onClose} // 메뉴 클릭 시 닫힘
                            >
                                {item.label}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default HamburgerMenu;

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.ngB};
    z-index: 2000; /* 헤더보다 높게 */
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const HeaderRow = styled.div`
    display: flex;
    justify-content: flex-start; /* 디자인 시안 기준 왼쪽 정렬 */
    padding: 1rem 0;
    margin-bottom: 4rem;
`;

const IconButton = styled.button`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.ngW};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const MenuItem = styled(motion.li)`
    font-size: ${({ theme }) => theme.fontSizes.xl_1};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.ngW};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.ng};
    }

    /* 활성화된 메뉴(예시) 스타일 */
    &.active {
        color: ${({ theme }) => theme.colors.ng};
        background: ${({ theme }) => theme.colors.ng_Alpha};
        padding: 1rem;
        border-radius: 0.8rem;
        width: fit-content;
    }
`;
