var Carousel = function Carousel() {
    return React.createElement(
        "div",
        { className: "works", id: "works" },
        React.createElement(
            "p",
            { className: "above-section" },
            React.createElement(
                "span",
                null,
                "\u2014"
            ),
            "my works"
        ),
        React.createElement(
            "h3",
            { className: "section-title" },
            "Featured portfolios"
        )
    );
};

export default Carousel;

var anotherRootNode = document.getElementById('works');
var anotherRoot = ReactDOM.createRoot(anotherRootNode);
anotherRoot.render(React.createElement(Carousel));