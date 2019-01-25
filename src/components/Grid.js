import React from "react";
import "./Grid.css";

export default class MyGrid extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-left">Hi there</div>

        <div className="container-right">
          <div className="item-1">1</div>
          <div className="item-2">2</div>
          <div className="item-3">3</div>
          <div className="item-4">4</div>
        </div>
      </div>
    );
  }
}
