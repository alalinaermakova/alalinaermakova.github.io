import gitHub from "../images/Github.svg";
import linkedin from "../images/Linkedin.svg";
import insta from "../images/Instagram.svg";
import logo from "../images/logo.svg";
import logoDark from "../images/logo-dark-2.svg";
import gitHubDark from "../images/Github-dark.svg";
import instaDark from "../images/Insta-dark.svg";
import linkedinDark from '../images/Linkedin-dark.svg';

const Footer = ({ dark, themeName }) => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={themeName === dark ? logoDark : logo} alt="logo" className="footer__logo" />
                <p className="footer__copyright">Copyright &copy; by Alina Ermakova. Credits for the original author.</p>
            </div>
            <div className="footer__socials">
                <ul className="socials__list">
                        <li className="socials__item">
                            <a href="https://www.linkedin.com/in/alina-ermakova-91289b1a9/"><img src={themeName === dark ? linkedinDark : linkedin} className="socials__footer-img" alt="likedin-pic" /></a>
                        </li>
                        <li className="socials__item">
                            <a href="https://github.com/alalinaermakova"><img src={themeName === dark ? gitHubDark : gitHub} className="socials__footer-img" alt="git-pic" /></a>
                        </li>
                        <li className="socials__item">
                            <a href="https://www.instagram.com/yermakovka_/"><img src={themeName === dark ? instaDark : insta}  className="socials__footer-img" alt="insta-pic" /></a>
                        </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;