import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { ModalProvider } from "./context/ModalContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Modal from "./components/common/Modal";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import GoldPaper from "./pages/GoldPaper";
import Tokenomics from "./pages/Tokenomics";
import Business from "./pages/Business";
import { SALE_URL } from "./constants/sale";

const fromSale =
    new URLSearchParams(window.location.search).get("from") === "sale";
const shouldRedirect = !fromSale;

// ?from=sale 파라미터를 URL에서 제거
if (fromSale) {
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState(null, "", cleanUrl);
}

// 세일 기간 중 & sale에서 온 게 아니면 → 안내 후 리다이렉트
if (shouldRedirect) {
    setTimeout(() => window.location.replace(SALE_URL), 1500);
}

function RedirectScreen() {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setDots((d) => (d + 1) % 4), 400);
        return () => clearInterval(id);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "#020202",
                color: "#05D09B",
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
            }}
        >
            Redirecting to Sale Page&nbsp;&nbsp;
            <span
                style={{
                    display: "inline-block",
                    width: "4rem",
                    textAlign: "left",
                }}
            >
                {["·", "·", "·"].slice(0, dots).join(" ")}
            </span>
        </div>
    );
}

function App() {
    if (shouldRedirect) {
        return <RedirectScreen />;
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ModalProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/gold-paper" element={<GoldPaper />} />
                        <Route path="/tokenomics" element={<Tokenomics />} />
                        <Route path="/business" element={<Business />} />
                    </Routes>
                    <Footer />
                    <Modal />
                </BrowserRouter>
            </ModalProvider>
        </ThemeProvider>
    );
}

export default App;
