// import React from "react";
import "../style/Header.css";

function Header() {
    const handleLoginClick = () => {
        const modal = document.getElementById('id01');
        if (modal) {
            modal.style.display = 'block';
        }
    };

    return (
        <header>
            <a href="index.html" className="logo">
                <img src="logo1.png" alt="Code Sikho Logo" width="200px" className="logo12" />
            </a>
            <nav className="hod">
                <ul>
                    <li><button className="contact-us-btn">About Us</button></li>
                    <li>
                        <button className="loginbutton1" onClick={handleLoginClick}>
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
