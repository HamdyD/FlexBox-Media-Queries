import React from "react";
import "./Grid.css";

const myImages = {
  "left-image": (
    <img
      src="https://kronos360.com/img/cms/topic-apple-watch-all.png"
      alt="our collection"
      className="img img-left"
    />
  ),
  "smart-watch": (
    <img
      src="http://pngimg.com/uploads/watches/watches_PNG9903.png"
      alt="smart watch 1"
      className="img img-1"
    />
  ),
  phone: (
    <img
      src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/08/21125431/IPhone-PNG-Image-Background-701x1024.png"
      alt="new iPhone"
      className="img img-2"
    />
  ),
  headphones: (
    <img
      src="http://www.pngpix.com/wp-content/uploads/2016/04/Headphone-PNG-image3.png"
      alt="headphones"
      className="img img-3"
    />
  ),
  google: (
    <img
      src="https://bestengine.humanoid.fr/uploads/products/google-home.png"
      alt="google home"
      className="img img-4"
    />
  )
};

export default class MyGrid extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="container-left">{myImages["left-image"]}</div>

        <div className="container-right">
          <div className="item item-1">{myImages["smart-watch"]}</div>
          <div className="item item-2">{myImages["phone"]}</div>
          <div className="item item-3">{myImages["headphones"]}</div>
          <div className="item item-4">{myImages["google"]}</div>
        </div>
      </div>
    );
  }
}
