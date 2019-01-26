import React from "react";
import "./Grid.css";

export default class MyGrid extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="container-left">Hi there</div>

        <div className="container-right">
          <div className="item item-1">1</div>
          <div className="item item-2">2</div>
          <div className="item item-3">3</div>
          <div className="item item-4">4</div>
        </div>
      </div>
    );
  }
}
