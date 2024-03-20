import React, { useState, createContext } from "react";
import OriginalData from "./data/data.json";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import SearchBar from "./components/SearchBar/SearchBar";
import SelectedSection from "./components/SelectedSection/SelectedSection";
import Grid from "./components/Grid/Grid";


export const DataContext = createContext(OriginalData);
export const SelectedCategory = createContext(null);

function App() {

  const [currentSelected, setCurrentSelected] = useState('Recommended for you')
  const [data, setData] = useState(OriginalData)

  const CategoryHandler = (CurrentSelected) => {
    setCurrentSelected(CurrentSelected)
  }

  const SetDataHandler = (CurrentData) => {
    setData(CurrentData)
  }

  return (
    <DataContext.Provider value={{ data, OriginalData, SetDataHandler }}>
      <SelectedCategory.Provider value={{ currentSelected, CategoryHandler }}>
        <div className="App">
          <div id="InnerAppWrapper">
            <SideBar></SideBar>
            <div id="MoviesContainer">
              <div id="InnerMoviesContainer">
                <SearchBar></SearchBar>
                {currentSelected === "Recommended for you" ? <SelectedSection></SelectedSection> : <></>}
                <Grid></Grid>


              </div>
            </div>
          </div>
        </div>
      </SelectedCategory.Provider>
    </DataContext.Provider>
  );
}

export default App;
