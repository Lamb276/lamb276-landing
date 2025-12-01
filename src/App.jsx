import React from "react";
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

function App() {
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
                    </Routes>
                    <Footer />
                    <Modal />
                </BrowserRouter>
            </ModalProvider>
        </ThemeProvider>
    );
}

export default App;
