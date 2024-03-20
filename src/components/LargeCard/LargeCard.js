import React from "react";
import PlayBtn from "../PlayBtn/PlayBtn";
import "./LargeCard.css";
import BookMarkBtn from "../BookMarkBtn/BookMarkBtn";
const LargeCard = (props) => {
  return (
    <div className="Card">
      <BookMarkBtn CardType="Large"></BookMarkBtn>
      <img
        alt=""
        className="LargeThumbnails"
        src={props.movieRecord.thumbnail.trending.large}
      ></img>
      <PlayBtn></PlayBtn>
      <div className="MovieInfo">
        <div className="innerMovieWrapper">
          <span>{props.movieRecord.year}</span>
          <span>{props.movieRecord.category}</span>
          <span>{props.movieRecord.rating}</span>
        </div>
        <h1>{props.movieRecord.title}</h1>
      </div>
    </div>
  );
};

export default LargeCard;
