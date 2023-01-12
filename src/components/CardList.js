import Card from './Card';
import React, { useState } from 'react';


const CardList = ({ cards }) => {

    const [showMore, setShowMore] = useState(false);

    const firstCards = showMore ? cards : cards.slice(0,3);

    return (
        <div className="section" id="works">
            <p className="above-section"><span>&#8212;</span>my works</p>
            <h3 className="section-title">Featured portfolios</h3>
            <section className="section__box">
                <div className="section__grid">
                    {firstCards.map((card, index) => {
                        return <Card 
                            key={index}
                            image={card.image}
                            title={card.title}
                            tools={card.tools}
                            link={card.link}
                            text={card.text}
                        />
                    })}
                </div>
            </section>
            <button className="btn btn--show" onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button>
        </div>
    )
};

export default CardList;