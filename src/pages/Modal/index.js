// import React, { useEffect, useRef, useState } from 'react'


// import s from './index.module.css';



// const handleCheckElemInArr = (currentEl, elems) => {
    
//     for (let i = 0; i < elems.length; i++) {
        
//         if (elems[i].id === currentEl.id) {
//             return true
//         }
//     }
//     return false
// }


// const IMG = (img, animEnd) => {
//     return (
//         <img onAnimationEnd={(e) => animEnd(e, 'img')} className={s.img} src={img} alt="" />
//     )
// }

// export const Modal = ({vis, setVis, imgs}) => {
    
//     const overlay = useRef()
//     const currentImg = useRef()
//     const [ counter, setCounter ] = useState(0)

    
//     const [ elems, setElems ] = useState(imgs.map(item => {
//         return <IMG img={item} animEnd={animEnd} />
//     }))


    
//     if (!vis) return null

    

//     const handleClick = () => {
//         overlay.current && overlay.current.classList.add(s['modal-end'])
//     }
    

//     document.addEventListener('keyup', (e) => {
//         if (e.code === 'Escape') {
//             handleClick()
//         }
//     })
    



//     const animEnd = (e, type) => {
        
        
//         switch (type) {
//             case 'overlay':
//                 for (let i = 0; i < e.target.classList.length; i++) {
            
//                     if (e.target.classList[i] === s['modal-end']) {
//                         e.target.classList.remove(s['modal-end'])
//                         setVis(false)
//                     }
//                 }
//                 break;
//             case 'img':
//                 if (e.animationName === 'img-end') {
//                     console.log('img-end')
//                 }
//                 break;
//             default:
//                 return null;
//         }
        
//     }

    

//     const switchBtn = (swBtn) => {
        
//         switch (swBtn) {
//             case 'l':
                
//                 if (counter > 0) {
//                     setCounter(counter - 1)
//                 }
//                 break;
//             case 'r':
//                 if (counter < imgs.length - 1) {
//                     setCounter(counter + 1)
//                 }
//                 break;
//             default:
//                 return null;
//         }
//     }


    
//     return (
//         <div ref={overlay} onAnimationEnd={(e) => animEnd(e, 'overlay')} className={s.overlay}  >

//             <div className={s.modal}>
//                 <div className={s.modalHeader}>
//                     <button className='close-btn' onClick={handleClick}> <p>Закрыть</p> </button>
//                 </div>
//                 <div className={s.modalContent}>
//                     <div className="slider">
//                         <img onAnimationEnd={(e) => animEnd(e, 'img')} className={s.img} src={imgs[counter]} alt="" />
//                     </div>
//                 </div>
//                 <div className={s.modalFooter}></div>

//             </div>

        
//             <div onClick={() => switchBtn('l')} className='parent-switch-btn parent-left-btn'>
//                 <div className="switch-btn left__btn"></div>
//             </div>
            

//             <div onClick={() => switchBtn('r')} className='parent-switch-btn parent-right-btn'>
//                 <div className="switch-btn right__btn"></div>
//             </div>


//         </div>
//     )
// }
