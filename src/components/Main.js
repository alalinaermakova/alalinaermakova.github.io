import React from 'react';

import logo from "../images/logo.svg";
import logoDark from "../images/logo-dark-2.svg";
import gitHub from "../images/Github.svg";
import linkedin from "../images/Linkedin.svg";
import insta from "../images/Instagram.svg";
import gitHubDark from "../images/Github-dark.svg";
import instaDark from "../images/Insta-dark.svg";
import linkedinDark from '../images/Linkedin-dark.svg';
import profile from "../images/main-photo.jpg";

const Main = ({children, dark, themeName }) => {
    
    return (
        <div>
                <header className="header">
                    <div className="header__logo-box">
                        <img src={themeName === dark ? logoDark : logo} alt="logo" className="header__logo" />
                        <p className="header__logo-name">Alina</p>
                    </div>
                    <nav className="nav-bar">
                        <ul className="nav-bar__list">
                            <li className="nav-bar__item"><a className="nav-bar__link" href="#works">my works</a></li>
                            <li className="nav-bar__item"><a className="nav-bar__link" href="#resume">experience</a></li>
                            <li className="nav-bar__item">{children}</li>
                        </ul>
                    </nav>
                    <div>
                    </div>
                </header>
            <main className="main">
                <div className="name-section">
                    <p className="above-section"><span>&#8212;</span>my name is</p>
                    <h1 className="name-section__title">Alina <span className="name-section__title--span">Ermakova</span></h1>
                    <p className="name-section__description">Creative front-end developer with 2 years experience in web development. Proficient in JavaScript, and React.</p>
                    <ul className="socials__list">
                        <li className="socials__item">
                            <a href="https://www.linkedin.com/in/alina-ermakova-91289b1a9/"><img src={themeName === dark ? linkedinDark : linkedin} alt="likedin-pic" /></a>
                        </li>
                        <li className="socials__item">
                            <a href="https://github.com/alalinaermakova"><img src={themeName === dark ? gitHubDark : gitHub}  alt="git-pic" /></a>
                        </li>
                        <li className="socials__item">
                            <a href="https://www.instagram.com/yermakovka_/"><img src={themeName === dark ? instaDark : insta} alt="insta-pic" /></a>
                        </li>
                    </ul>
                </div>
                <div className="main__photo-box">
                    <img className="main__photo" alt="profile-logo" src={profile} />
                </div>
            </main>
        </div>
    )
};

export default Main;