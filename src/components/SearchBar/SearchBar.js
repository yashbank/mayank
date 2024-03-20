import React, { useContext } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/icon-search.svg";
import { DataContext, SelectedCategory } from "../../App";

const SearchBar = () => {
  const DataObject = useContext(DataContext);

  const OnChangeHandler = (e) => {
    const SearchInput = e.target.value.toLowerCase();
    debugger
    const filteredData = DataObject.OriginalData.filter((record) => {
      //if no input the return the original
      if (SearchInput === "") {
        return record;
      } else {
        console.log(record.title.toLowerCase().includes(SearchInput))
        return record.title.toLowerCase().includes(SearchInput);
      }
    });
    DataObject.SetDataHandler(filteredData)
  };
  return (
    <div id="SearchBar">
      <img src={SearchIcon} id="SearchIcon"></img>
      <input
        id="SearchInputField"
        placeholder="Search for Movies or TV series or News"
        onChange={OnChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBar;
