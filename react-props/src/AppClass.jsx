import React, { Component } from "react";
import "./App.css";
import imageData from "./components/DataComponent";

export default class AppClass extends Component {
  render() {
    const imgData = imageData();
    return (
      <div>
        <h1>Kalvium gallery</h1>
        {imgData.map((image) => (
          <div className="grid" key={image.id}>
            <img src={image.img} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
