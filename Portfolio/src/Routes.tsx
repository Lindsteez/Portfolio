import HomePage from "./pages/HomePage/Homepage";
import AboutPage from "./pages/AboutPage/Aboutpage";
import ProjectsPage from "./pages/ProjectsPage/Projectspage";
import ContactPage from "./pages/ContactPage/Contactpage";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}