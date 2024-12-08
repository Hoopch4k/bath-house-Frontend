import React, { useEffect, useState } from "react";



import xmlRequests from "../reqServer";
import { NavLink } from "react-router-dom";

export const CardItem = ({ card }) => {
  
  const [ img, setImg ] = useState()

  useEffect(() => {
    const xhr_img = new xmlRequests("get", `/venic/${card.path}`)
    xhr_img.handleRequests(dataImg => {
    
      setImg(dataImg.responseURL)
      
    });
  }, [])

  

  return (
    <div className="cran">
      <div className="cran__content">
        <article style={{color: "#fff"}}>
          <img className="cran__img" src={img} alt="" />

          <p>{card.name} {card.premium && "| " + card.premium}</p>
          <div className="buy__inner">
            
              
            <a href={card.buy_ozon} target="blank" className="buy">Купить на Ozon</a>
            <a href={card.buy_wb} target="blank" className="buy buy1">Купить на Мегамаркет</a>
          
            
          </div>
        </article>
      </div>
    </div>
  );
};

export const News = ({max}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    
    const xhr_data = new xmlRequests("get", "/all-venics-data")
    xhr_data.handleRequests(dataCard => {
      dataCard = JSON.parse(dataCard.response)
      setCards(dataCard)
    });
    
  }, [])

  

  return (
    <section className="nov">
      <div className="container">
        <h1 className="contacts__title">Новинки</h1>
        <div className="nov__inner">
          
          { max ? 
            cards.slice(0, max).map((card, ind) => <CardItem key={ind} card={card}/>)
            :
            cards.map((card, ind) => <CardItem key={ind} card={card} />)
          }
          

        </div>
      </div>
      {max && <NavLink to="/news">
        <article className="article__default_style" style={{textAlign: "center", color: "#000", fontWeight: "900"}}>УВИДЕТЬ БОЛЬШЕ...</article>
      </NavLink>}
    </section>
  );
};
