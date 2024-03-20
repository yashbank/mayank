import React from 'react'
import './PlayBtn.css'
import PlayBtnIcon from "../../assets/icon-play.svg"

const PlayBtn = () => {
  return (
    <div className="PlayBtnWrapper">
    <img alt="" src={PlayBtnIcon}></img>
    <span>Play</span>
  </div>
  )
}

export default PlayBtn