import React from "react";
import "../styles/styles.css";

function Header() {
    return (
        <header>
    <a href="index.html" class="logo">
        <img src="logo1.png" alt="Code Sikho" width="200px" class="logo12" />
    </a>
    <nav class="hod">
        <ul>
            <li><button class="contact-us-btn">About Us</button></li>
            {/* <li> <button id="modeToggle" class="toggle-button">
                <span class="icon sun">&#9728;</span>
                <span class="icon moon">&#9790;</span>
            </button></li> */}
            <li>
                <button class="loginbutton1" onclick="document.getElementById('id01').style.display='block'">
                    Login
                </button>
            </li>
        </ul>
    </nav>
</header>
    );
}

export default Header;
