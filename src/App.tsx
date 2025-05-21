import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";

export default function App(): ReactNode {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
