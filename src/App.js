import React from "react";
import "./App.css";
import DarkButton from "./components/atoms/DarkButton";
import TextField from "./components/atoms/TextField";
import GalleryGrid from "./components/organisms/GalleryGrid";

function App() {
  const [searchFieldValue, setSearchFieldValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  function onChange(event) {
    setSearchFieldValue(event.target.value);
  }

  function onClick() {
    setSearchFieldValue("");
    setSearchValue(searchFieldValue);
  }

  function filter(keyWord) {
    setSearchValue(keyWord);
  }

  return (
    <div className="mainArea">
      <h1 className="appTitle">React Gallery</h1>

      <TextField
        value={searchFieldValue}
        onClick={onClick}
        onChange={onChange}
      />

      <ul className="buttonsList">
        <li className="buttonListItem">
          <DarkButton label="Planets" onClick={() => filter("Planets")} />
        </li>
        <li className="buttonListItem">
          <DarkButton label="Rockets" onClick={() => filter("Rockets")} />
        </li>
        <li className="buttonListItem">
          <DarkButton label="Asteroids" onClick={() => filter("Asteroids")} />
        </li>
        <li className="buttonListItem">
          <DarkButton label="Stars" onClick={() => filter("Stars")} />
        </li>
      </ul>

      <GalleryGrid textToSearch={searchValue} />
    </div>
  );
}

export default App;
