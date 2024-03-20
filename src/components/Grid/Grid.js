import React, { useContext} from "react";
import { DataContext, SelectedCategory } from "../../App";
import SmallCard from "../SmallCard/SmallCard";

import "./Grid.css";

const Grid = () => {
  //Get Data From Context

  const DataObject = useContext(DataContext);
  const SelectedCategoryContext = useContext(SelectedCategory);
  
    let result = [];

    switch (SelectedCategoryContext.currentSelected) {
      case "Recommended for you":
        result = DataObject.data.filter(
          (FilmRecord) => FilmRecord.isTrending == false
        );
   
        break;

      case "Movies":
        result = DataObject.data.filter(
          (FilmRecord) => FilmRecord.category == "Movie"
        );
 
        break;

      case "Tv Series":
        result = DataObject.data.filter(
          (FilmRecord) => FilmRecord.category == "TV Series"
        );

        break;

      case "Bookmarked Movies":
        result = DataObject.data.filter(
          (FilmRecord) => FilmRecord.isBookmarked == true
        );

        break;

      default:
        break;
    }


  return (
    <div id="GridOuterWrapper">
      <h1 id="GridTittle">{SelectedCategoryContext.currentSelected}</h1>
      <div id="grid-container">
        {result.map((FilmRecord) => {
          return <SmallCard FilmRecord={FilmRecord}></SmallCard>;
        })}
      </div>
    </div>
  );
};

export default Grid;
