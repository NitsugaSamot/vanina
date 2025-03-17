import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/views/landingpage/LandingPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
