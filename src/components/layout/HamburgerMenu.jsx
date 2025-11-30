import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/menu";
import { useModal } from "../../context/ModalContext";
import {
    AboutModalContent,
    ContactModalContent,
    LambModalContent,
} from "../layout/ModalContents";
import Button from "../common/Button";

const HamburgerMenu = ({ isOpen, onClose }) => {
    const { openModal } = useModal();
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault();
        onClose();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleLambClick = () => {
        onClose();
        openModal(<LambModalContent />);
    };

    const handleMenuClick = (e, item) => {
        if (item.id === "about") {
            e.preventDefault();
            onClose();
            openModal(<AboutModalContent />);
        } else if (item.id === "contact") {
            e.preventDefault();
            onClose();
            openModal(<ContactModalContent />);
        } else if (item.id === "social") {
            e.preventDefault();
        } else {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <Backdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <MenuContainer
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <MenuList>
                            <MenuItem
                                href="/"
                                onClick={handleHomeClick}
                                className="active"
                            >
                                Home
                            </MenuItem>

                            {MENU_ITEMS.map((item) => (
                                <React.Fragment key={item.id}>
                                    <MenuItem
                                        href={item.path}
                                        onClick={(e) =>
                                            handleMenuClick(e, item)
                                        }
                                    >
                                        {item.label}
                                    </MenuItem>

                                    {item.children && (
                                        <SubMenuList>
                                            {item.children.map((subItem) => (
                                                <SubMenuItem
                                                    key={subItem.id}
                                                    href={subItem.path}
                                                    target={
                                                        subItem.external
                                                            ? "_blank"
                                                            : "_self"
                                                    }
                                                    rel={
                                                        subItem.external
                                                            ? "noopener noreferrer"
                                                            : ""
                                                    }
                                                    onClick={onClose}
                                                >
                                                    {subItem.label}
                                                </SubMenuItem>
                                            ))}
                                        </SubMenuList>
                                    )}
                                </React.Fragment>
                            ))}
                        </MenuList>

                        <ButtonWrapper>
                            <Button
                                size="sm"
                                variant="token"
                                onClick={handleLambClick}
                                style={{ width: "auto" }}
                            >
                                $LAMB
                            </Button>
                        </ButtonWrapper>
                    </MenuContainer>
                </>
            )}
        </AnimatePresence>
    );
};

export default HamburgerMenu;

const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    backdrop-filter: none;
    z-index: 1001;
`;

const MenuContainer = styled(motion.div)`
    position: fixed;
    top: 8rem;
    left: 2rem;
    right: auto;
    width: 75%;
    max-width: 40rem;
    margin: 0;
    z-index: 1002;
    padding: 3.2rem 3.2rem;
    border-radius: 1.2rem;
    overflow: hidden;
    backdrop-filter: blur(1.2rem);
    background: linear-gradient(#000, #000) padding-box,
        linear-gradient(
                180deg,
                ${({ theme }) => theme.colors.ng} 0%,
                rgba(5, 208, 155, 0) 100%
            )
            border-box;
    border: 0.1rem solid transparent;
    box-shadow: 0 0 2rem rgba(5, 208, 155, 0.15), 0 1rem 3rem rgba(0, 0, 0, 0.5);
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.a`
    display: flex;
    align-items: center;
    height: 3.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.ngW};
    text-decoration: none;
    transition: all 0.2s;
    padding: 0 0.8rem;
    border-radius: 0.4rem;

    &:hover {
        color: ${({ theme }) => theme.colors.ng};
        background: rgba(255, 255, 255, 0.05);
    }

    &.active {
        background-color: rgba(5, 208, 155, 0.15);
        color: ${({ theme }) => theme.colors.ng};
    }
`;

const SubMenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-top: -1rem;
    margin-bottom: 1rem;
    padding-left: 2rem;
`;

const SubMenuItem = styled.a`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.ng};
    }
`;
