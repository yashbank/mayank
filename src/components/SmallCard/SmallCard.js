import React from 'react'
import PlayBtn from '../PlayBtn/PlayBtn'
import './SmallCard.css'
import BookMarkBtn from "../BookMarkBtn/BookMarkBtn";

const SmallCard = (props) => {
    return (
    <div className="SmallCard">
      <BookMarkBtn CardType="Small"></BookMarkBtn>
    <img alt='' className='SmallThumbnails' src={props.FilmRecord.thumbnail.regular.medium}></img>
    <PlayBtn></PlayBtn>

    <div className="SmallCardInfo">
      <div className="SmallCardInnerInfo">
        <span>{props.FilmRecord.year}</span>
        <span>{props.FilmRecord.category}</span>
        <span>{props.FilmRecord.rating}</span>
      </div>
      <h1 className="SmallCardInfoTittle">{props.FilmRecord.title}</h1>
    </div>
  </div>
  )
}

export default SmallCard