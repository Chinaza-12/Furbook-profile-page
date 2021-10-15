import React, { Component } from "react";
import PetNav from "./components/pet-nav";
import PictureBox from "./components/picture-box";
import "./App.css";

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <PetNav />
        <div class="container">
          <div class="row">
            <PictureBox />
          </div>
          <div class="row"></div>
        </div>
      </div>
    );
  };

  return component;
};

export default App;
