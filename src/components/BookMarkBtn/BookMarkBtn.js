import React from 'react'
import "./BookMarkBtn.css"
import BookMarkIcon from "../../assets/icon-bookmark-empty.svg"

const BookMarkBtn = (props) => {
  return (
    <div className={props.CardType+"BookMarkIconWrapper"}>
    <img className="BookMarkIcon" src={BookMarkIcon}></img>
    </div>
  )
}

export default BookMarkBtn