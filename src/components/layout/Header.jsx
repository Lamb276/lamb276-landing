import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/menu";
import HamburgerMenu from "./HamburgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import lambLogo from "../../assets/icons/lamb276-logo.svg";
import Button from "../common/Button";
import { useModal } from "../../context/ModalContext";
import {
    LambModalContent,
    AboutModalContent,
    ContactModalContent,
} from "../layout/ModalContents";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const { openModal } = useModal();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogoClick = () => {
        navigate("/"); // Home('/') 경로로 이동
        window.scrollTo({ top: 0, behavior: "smooth" }); // 스크롤 최상단으로
    };

    const handleMenuClick = (e, item) => {
        if (item.id === "about") {
            e.preventDefault();
            openModal(<AboutModalContent />);
        } else if (item.id === "contact") {
            e.preventDefault();
            openModal(<ContactModalContent />);
        }
    };

    return (
        <>
            <HeaderWrapper $isScrolled={isScrolled}>
                <HeaderInner>
                    <LeftSection>
                        <MobileMenuBtn onClick={() => setIsMenuOpen(true)}>
                            <RxHamburgerMenu />
                        </MobileMenuBtn>
                        <Logo onClick={handleLogoClick}>
                            <img src={lambLogo} alt="Logo" />
                        </Logo>
                    </LeftSection>

                    <Nav>
                        {MENU_ITEMS.map((item) => {
                            if (item.children) {
                                return (
                                    <NavGroup
                                        key={item.id}
                                        onMouseEnter={() =>
                                            setHoveredItem(item.id)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredItem(null)
                                        }
                                    >
                                        <NavItem to={item.path}>
                                            {item.label}
                                            <ArrowIcon
                                                animate={{
                                                    rotate:
                                                        hoveredItem === item.id
                                                            ? 180
                                                            : 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <IoIosArrowDown />
                                            </ArrowIcon>
                                        </NavItem>

                                        <AnimatePresence>
                                            {hoveredItem === item.id && (
                                                <DropdownMenu
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <DropdownContent>
                                                        {item.children.map(
                                                            (subItem) => (
                                                                <DropdownItem
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                    href={
                                                                        subItem.path
                                                                    }
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
                                                                >
                                                                    {
                                                                        subItem.label
                                                                    }
                                                                </DropdownItem>
                                                            )
                                                        )}
                                                    </DropdownContent>
                                                </DropdownMenu>
                                            )}
                                        </AnimatePresence>
                                    </NavGroup>
                                );
                            }

                            return (
                                <NavItem
                                    key={item.id}
                                    to={item.path}
                                    onClick={(e) => handleMenuClick(e, item)}
                                >
                                    {item.label}
                                </NavItem>
                            );
                        })}
                    </Nav>

                    <Button
                        size="sm"
                        variant="token"
                        onClick={() => openModal(<LambModalContent />)}
                    >
                        $LAMB
                    </Button>
                </HeaderInner>
            </HeaderWrapper>

            <HamburgerMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem; /* PC 기준 (모바일은 아래 Inner나 패딩으로 조절) */
    z-index: 1000;
    display: flex;
    justify-content: center;

    background: linear-gradient(
        180deg,
        rgba(2, 2, 2, 1) 0%,
        rgba(2, 2, 2, 0) 100%
    );
    backdrop-filter: none;
    pointer-events: none;

    padding: 0 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 4rem;
    }

    /* PC 패딩 제거 (InnerMaxWidth로 제어) 또는 유지 */
    @media (min-width: ${({ theme }) => theme.breakpoints.pc}) {
        padding: 0 16rem;
        /* height는 유지하거나 필요시 줄임 */
    }
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 128rem; /* [핵심] 컨텐츠 최대 너비 제한 */
    height: 100%;

    /* Flex 레이아웃 담당 */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 자식 요소 클릭 가능하게 */
    & > * {
        pointer-events: auto;
    }
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const MobileMenuBtn = styled.button`
    display: flex;
    align-items: center;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    padding: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.ngW};
    cursor: pointer;

    img {
        width: auto;
        height: 3.2rem;
    }
`;

const Nav = styled.nav`
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        gap: 4rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
    }
`;

const NavGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    cursor: pointer;
    padding: 1rem 0;
`;

const NavItem = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.sm_1};
    color: ${({ theme }) => theme.colors.ngW};
    font-weight: 500;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.ng};
        text-shadow: 0 0 0.8rem ${({ theme }) => theme.colors.ng_Alpha};
    }
`;

const ArrowIcon = styled(motion.span)`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
`;

const DropdownMenu = styled(motion.div)`
    position: absolute;
    top: 100%;
    left: -35%;
    transform: translateX(-50%);
    margin-top: 0rem;
    min-width: 8.8rem;
    display: flex;
    flex-direction: column;
`;

const DropdownContent = styled.div`
    padding: 1.6rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    border-radius: 0.8rem;
    backdrop-filter: blur(1.2rem);
    overflow: hidden;
    background: linear-gradient(rgba(2, 2, 2, 1), rgba(2, 2, 2, 1)) padding-box,
        linear-gradient(
                180deg,
                ${({ theme }) => theme.colors.ng} 0%,
                rgba(5, 208, 155, 0) 100%
            )
            border-box;
    border: 0.1rem solid transparent;
    box-shadow: 0 0 0.8rem rgba(5, 208, 155, 0.25), 0 0 1rem rgba(0, 0, 0, 1);
`;

const DropdownItem = styled.a`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm_1};
    color: ${({ theme }) => theme.colors.ngW_Alpha};
    border-radius: 0rem;
    transition: all 0.2s ease;
    text-align: center;

    &:hover {
        color: ${({ theme }) => theme.colors.ngW};
    }
`;
