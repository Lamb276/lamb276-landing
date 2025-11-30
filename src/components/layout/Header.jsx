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
import { media } from "../../styles/media";

const mobileLogo = "/favicon.svg";

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
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                    {/* 1. Hamburger (Mobile) */}
                    <MobileMenuBtn onClick={() => setIsMenuOpen(true)}>
                        <RxHamburgerMenu />
                    </MobileMenuBtn>

                    {/* 2. Logo */}
                    <Logo onClick={handleLogoClick}>
                        <DefaultLogo src={lambLogo} alt="Logo" />
                        <MobileLogoImg src={mobileLogo} alt="Logo Symbol" />
                    </Logo>

                    {/* 3. Nav */}
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
                                        <NavItem
                                            as="div"
                                            style={{ cursor: "default" }}
                                        >
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

                    {/* 4. Button */}
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
    right: 0;
    width: auto;
    height: 9.6rem;
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
    padding: 0;

    /* Tablet */
    ${media.tablet`
        height: 14rem;
        background: linear-gradient(
            180deg,
            rgba(2, 2, 2, 1) 0%,
            rgba(2, 2, 2, 0.8) 50%,
            rgba(2, 2, 2, 0) 100%
        );
    `}

    /* PC */
    ${media.pc`
        height: 20rem;
    `}
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 128rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;

    & > * {
        pointer-events: auto;
    }

    /* Mobile */
    ${media.mobile`
        justify-content: flex-start;
        padding: 0 2rem;
        gap: 2rem;
        
        & > :last-child {
            display: none;
        }
    `}

    /* Tablet */
    ${media.tablet`
        padding: 0 8rem;
        flex-wrap: wrap;
        align-content: center;
        gap: 0; 
        justify-content: space-between;

        & > :nth-child(2) { 
            order: 1; 
            width: auto;
        }
        
        & > :nth-child(4) { 
            order: 2; 
            width: auto;
            margin-left: 0;
        }

        & > :nth-child(3) { 
            order: 3; 
            width: 100%;
            justify-content: center; 
            margin-top: 2.4rem;
        }
    `}

    /* PC */
    ${media.pc`
        /* [수정] PC 기본 패딩 (1600px 이상) */
        padding: 0;
        
        /* [추가] 좁은 PC 화면 (1280px ~ 1599px) 패딩 조정 */
        @media (max-width: 1598px) {
            padding: 0 16rem;
        }

        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 0;
        
        & > :nth-child(2) { width: auto; order: 0; margin: 0; }
        & > :nth-child(4) { width: auto; order: 0; margin: 0; }
        & > :nth-child(3) { 
            width: auto; 
            order: 0; 
            margin-top: 0; 
            position: absolute; 
            left: 50%; 
            transform: translateX(-50%); 
        }
    `}
`;

const MobileMenuBtn = styled.button`
    align-items: center;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.ngW};
    padding: 0;
    display: flex;

    /* Tablet, PC */
    ${media.tablet`display: none;`}
    ${media.pc`display: none;`}
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.ngW};
    cursor: pointer;
    height: 3.2rem;
    flex-shrink: 0;
    position: static;
    transform: none;
    left: auto;
`;

const DefaultLogo = styled.img`
    width: auto;
    height: 100%;
    ${media.mobile`display: none;`}
`;

const MobileLogoImg = styled.img`
    width: auto;
    height: 100%;
    display: none;
    ${media.mobile`display: block;`}
`;

const Nav = styled.nav`
    display: flex;
    gap: 4rem;
    align-items: center;
    ${media.mobile`display: none;`}
`;

const NavGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    cursor: pointer;
    padding: 0;
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
    min-width: 8.8rem;
    padding-top: 1.6rem;
    pointer-events: auto;
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
