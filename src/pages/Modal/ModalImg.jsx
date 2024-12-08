import React, { useState } from 'react'
import { motion } from "motion/react";

import s from "./ModalImg.module.css"
import { transform } from 'motion';









const variants = {
    initial: {
        scale: 0,
        rotateX: "50deg",
        transformPerspective: 400
    },
    animate: {
        scale: 1,
        rotateX: "0",
        transformPerspective: 400
    },
}

const transition = {
    duration: .5,
    ease: "easeInOut"
}

const TemplPhoto = ({crImg}) => {
    
    return (
        <div className={s.scene}>
            <motion.img
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
            className={s.currentImg}
            src={crImg.img}
            alt={crImg.name}
            />
        </div>
    )
}

const TemplPhoto1 = ({crImg}) => {
    return (
        <div className={s.scene}>
            <motion.img
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
            className={s.currentImg}
            src={crImg.img}
            alt={crImg.name}
            />
        </div>
    )
}







export const ModalImg = ({currentCard, cards, setModal}) => {

    const [ crImg, setCrImg ] = useState(currentCard)
    const [c, setC ] = useState(0)

    const handleClick = (t) => {
        c ? setC(0) : setC(1)

        switch (t) {
            case 'l':
                let prev = cards.findIndex(item => item.id === crImg.id)
                
                setCrImg(cards[prev === 0 ? cards.length - 1 : prev - 1 ])
                
                break;
            case 'r':
                let next = cards.findIndex(item => item.id === crImg.id)
                
                setCrImg(cards[next === cards.length - 1 ? 0 : next + 1 ])
                break;
            default:
                break;
        }
    }

  return (
    <div className={s.modal}>

        <button onClick={() => setModal(false)} className={s.closeBtn}>Закрыть</button>

        {c ? <TemplPhoto crImg={crImg}/> : <TemplPhoto1 crImg={crImg}/>}
        

        <div onClick={() => handleClick("l")} className={s.left}>
            <div className={s.leftBtn}></div>
        </div>
        <div onClick={() => handleClick("r")} className={s.right}>
            <div className={s.rightBtn}></div>
        </div>

        <div className={s.pagination}>
          {cards.map((card, index) => {
            if (card.id === crImg.id) {
                return <img key={index} className={s.paginationCurrent} src={card.img} alt={card.name} />
            }

            return <img
                key={index}
                src={card.img}
                alt={card.name}
                onClick={() => {
                    c ? setC(0) : setC(1)
                    setCrImg(card)
                }}
          />
          })}
        </div>
    </div>
  )
}
