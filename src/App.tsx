import { ReactNode } from "react";
import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage.tsx"
import LoginPage from "./pages/LoginPage.tsx";
import ShoppingPage from "./pages/ShoppingPage.tsx";
import TricktionaryPage from "./pages/TricktionaryPage.tsx";

export default function App(): ReactNode {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/shop" element={<ShoppingPage />} />
            <Route path="/tricktionary" element={<TricktionaryPage />} />
        </Routes>
    );
};
