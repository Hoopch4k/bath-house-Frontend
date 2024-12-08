import { useEffect, useState } from "react"
import React from 'react'
import xmlRequests from "reqServer"
import { CardItem } from "./News"

export const Venics = () => {

    const [ cards, setCards ] = useState([])

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
        <h1 className="contacts__title">Банные Веники</h1>
        <div className="nov__inner">
          
          {
            cards.map((card, i) => {
                if (card.type === "venic") {
                    return (
                        <CardItem key={i} card={card} />
                    )
                }
                return null
            })
          }
          

        </div>
      </div>
    </section>
    
  )
}
