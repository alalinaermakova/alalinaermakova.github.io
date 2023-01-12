import logo from "../images/logo.svg";
import gitHub from "../images/Gihub.svg";
import linkedin from "../images/Linkedin.svg";
import insta from "../images/Instagram.svg";
import profile from "../images/photoprof.svg";
import { createPortal } from "react-dom";

var Main = function Main() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            { className: "header" },
            React.createElement(
                "div",
                { className: "header__logo-box" },
                React.createElement("img", { src: logo, alt: "logo", className: "header__logo" }),
                React.createElement(
                    "p",
                    { className: "header__logo--name" },
                    "Alina."
                )
            ),
            React.createElement(
                "nav",
                { className: "nav-bar" },
                React.createElement(
                    "ul",
                    { className: "nav-bar__list" },
                    React.createElement(
                        "li",
                        { className: "nav-bar__item" },
                        React.createElement(
                            "a",
                            { className: "nav-bar__link", href: "#" },
                            "services"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "nav-bar__item" },
                        React.createElement(
                            "a",
                            { className: "nav-bar__link", href: "#" },
                            "my works"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "nav-bar__item" },
                        React.createElement(
                            "a",
                            { className: "nav-bar__link", href: "#" },
                            "experince"
                        )
                    )
                )
            )
        ),
        React.createElement(
            "main",
            { className: "main" },
            React.createElement(
                "div",
                { className: "name-section" },
                React.createElement(
                    "p",
                    { className: "above-section" },
                    React.createElement(
                        "span",
                        null,
                        "\u2014"
                    ),
                    "my name is"
                ),
                React.createElement(
                    "h1",
                    { className: "name-section__title" },
                    "Alina ",
                    React.createElement(
                        "span",
                        { className: "name-section__title--span" },
                        "Ermakova."
                    )
                ),
                React.createElement(
                    "p",
                    { className: "name-section__description" },
                    "Creative front-end developer with 2 years experience in web development. Proficient in JavaScript, and React."
                ),
                React.createElement(
                    "ul",
                    { className: "socials__list" },
                    React.createElement(
                        "li",
                        { className: "socials__item" },
                        React.createElement(
                            "a",
                            { href: "https://www.linkedin.com/in/alina-ermakova-91289b1a9/" },
                            React.createElement("img", { src: "", className: "socials__item--img", alt: "likedin-pic" })
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "socials__item" },
                        React.createElement(
                            "a",
                            { href: "https://github.com/alalinaermakova" },
                            React.createElement("img", { src: gitHub, className: "socials__item--img", alt: "git-pic" })
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "socials__item" },
                        React.createElement(
                            "a",
                            { href: "https://www.instagram.com/yermakovka_/" },
                            React.createElement("img", { src: insta, className: "socials__item--img", alt: "insta-pic" })
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "main__photo-box" },
                React.createElement("img", { className: "main__photo", src: profile })
            )
        ),
        React.createElement(
            "section",
            { className: "services" },
            React.createElement(
                "p",
                { className: "above-section" },
                React.createElement(
                    "span",
                    null,
                    "\u2014"
                ),
                "services"
            ),
            React.createElement(
                "h3",
                { className: "section-title" },
                "Specialized in"
            ),
            React.createElement(
                "div",
                { className: "services__box" },
                React.createElement(
                    "div",
                    { className: "services__item" },
                    React.createElement("img", { src: "", alt: "" }),
                    React.createElement(
                        "h4",
                        { className: "services__title" },
                        "React"
                    ),
                    React.createElement(
                        "p",
                        { className: "services__text" },
                        "jeghekjgbruoghrtuneibgnreitg. yueigreuigrerg."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "services__item" },
                    React.createElement("img", { src: "", alt: "" }),
                    React.createElement(
                        "h4",
                        { className: "services__title" },
                        "Css/Sass"
                    ),
                    React.createElement(
                        "p",
                        { className: "services__text" },
                        "jeghekjgbruoghrtuneibgnreitg. yueigreuigrerg. kljrnbvkjhterg"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "services__item" },
                    React.createElement("img", { src: "", alt: "" }),
                    React.createElement(
                        "h4",
                        { className: "services__title" },
                        "JavaScript"
                    ),
                    React.createElement(
                        "p",
                        { className: "services__text" },
                        "jeghekjgbruoghrtuneibgnreitg. yueigreuigrerg. kljrnbvkjhterg"
                    )
                )
            )
        )
    );
};

export default Main;