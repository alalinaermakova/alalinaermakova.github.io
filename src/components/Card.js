import linkPic from '../images/Link.svg'

const Card = ({ id, image, title, tools, link, text }) => {
    return (
        <div className="card" key={id}>
            <div className="card__side card__side--front">
                <img src={image} alt="website-scr-shot" className="card__img" />
                <div className="card__text-box">
                    <h4 className="card__title">{title}</h4>
                    <p className="card__span">{tools}</p>
                </div>
            </div>
            <div className="card__side card__side--back">
                <div className="card__text-box">
                    <p className="card__back-text">{text}</p>
                    <a className="card__link" href={link}><img src={linkPic} /></a>
                </div>
            </div>
        </div>
    )
};

export default Card;