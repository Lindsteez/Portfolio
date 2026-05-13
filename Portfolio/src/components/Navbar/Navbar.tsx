import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
}