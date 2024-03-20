import React, { useContext } from "react";
import "./SideBar.css";

import BookMarkIcon from "../../assets/icon-nav-bookmark.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MoviesIcon from "../../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../../assets/icon-nav-tv-series.svg";
import LogoIcon from "../../assets/logo.svg";
import { SelectedCategory } from "../../App"
import Avatar from "../../assets/loginavatr.svg"
import Login from "../login";

const SideBar = () => {
  const SelectedCategoryContext = useContext(SelectedCategory)
  const HandleColorChange = (e) => {
    const Icons = Array.from(document.getElementById("SideBarMenuWrapper").getElementsByTagName("img"))
    Icons.forEach((icon) => {
      icon.className = ""
    })
    e.target.className = "ActiveIcon"
  }
  return (
    <div id="SideBar">
      <div id="LogoWrapper">
        <img src={LogoIcon} alt=""></img>
      </div>
      <div id="SideBarMenuWrapper">
        <img className="ActiveIcon" src={HomeIcon} onClick={(e) => { SelectedCategoryContext.CategoryHandler("Recommended for you"); HandleColorChange(e) }} alt=""></img>
        <img src={MoviesIcon} onClick={(e) => { SelectedCategoryContext.CategoryHandler("Movies"); HandleColorChange(e) }} alt=""></img>
        <img src={TvSeriesIcon} onClick={(e) => { SelectedCategoryContext.CategoryHandler("Tv Series"); HandleColorChange(e) }} alt=""></img>
        <img src={BookMarkIcon} onClick={(e) => { SelectedCategoryContext.CategoryHandler("Bookmarked Movies"); HandleColorChange(e) }} alt=""></img>
        <img style={{
          "marginTop": "65px",
        }} src={Avatar} onClick={() => {
          document.body.innerHTML =
            console.log("ahha")
          window.reload()
        }} alt=""></img>
      </div >
    </div >
  );
};

export default SideBar;
