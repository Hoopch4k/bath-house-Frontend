import React, { useEffect, useState } from 'react'
import xmlRequests from 'reqServer'
import { ModalImg } from './Modal/ModalImg'




const TemplVideo = ({card}) => {

  const [ video, setVideo ] = useState()

  useEffect(() => {
    let xhr = new xmlRequests("get", `/galery/video/${card.id}`)
    xhr.handleRequests((data) => {
      setVideo(data.responseURL)
    })

  }, [])


  

  return (
    
    <div className='galery-card'>
      
      <video controls src={video}>
        <p>
          Ваш браузер не поддерживает HTML5 видео. Используйте
          <a href={video}>ссылку на видео</a> для доступа.
        </p>
      </video>
      <p>{card.name}</p>
    </div>
  )
}



const TemplImage = ({card, cards, setModal, setAllCards, setCrCard}) => {

  const [ img, setImg ] = useState()
  

  useEffect(() => {
    let xhr = new xmlRequests("get", `/galery/image/${card.id}`)
    xhr.handleRequests((data) => {
      setImg(data.responseURL)
      cards.map((item, i) => item.id === card.id ? cards[i].img = data.responseURL : item)
      setAllCards(cards)
    })
  }, [])


  return (
    <>
      
      <div onClick={() => {
        setModal(true)
        setCrCard(card)
      }} className="galery-card">
        <img src={img} alt="" />
        <p>{card.name}</p>
      </div>

    </>
  )
}



export const Galery = () => {

  const [ allCards, setAllCards ] = useState([])
  const [ crCard, setCrCard ] = useState()
  const [ modal, setModal ] = useState(false)


  useEffect(() => {
    

    let xhr = new xmlRequests("get", "/galery/all-videos")
    xhr.handleRequests((data) => {
      data = JSON.parse(data.response)
      //-----------
      const xhr1 = new xmlRequests("get", "/galery/all-images")
      xhr1.handleRequests((res) => {
        res = JSON.parse(res.response)
        const arr = [...data, ...res].sort(() => Math.random() - 0.5)

        setAllCards(arr)
      })
      //-----------
    }, (e) => {
      // console.log(e)
    })

  }, [])



  return (
    <div className='galery'>
        
        {modal && <ModalImg currentCard={crCard} cards={allCards.filter(item => item.type === "img")} setModal={setModal} />}

        <h2>ГАЛЕРЕЯ</h2>

        <section className='galery-content'>
        {
          allCards.length === 0 ?
          <div className='loading'>Загрузка...</div>
          :
          <>
            {
              allCards.map((card, i) => {
                if (card.type === "img") return <TemplImage card={card} cards={allCards} modal={modal} setModal={setModal} setAllCards={setAllCards} setCrCard={setCrCard} key={i} />
                else if (card.type === "video") return <TemplVideo card={card} key={i}/>
                else return null;
              })
            }
            {}
          </>
        }
        </section>

    </div>
  )
}
