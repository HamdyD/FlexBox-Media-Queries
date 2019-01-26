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
        <div className="container-left">
          {myImages["left-image"]}
          <div className="text-product">
            <h1>Découverte</h1>
            <p>Découvrez nos nouveautés!</p>
          </div>
        </div>

        <div className="container-right">
          <div className="item item-1">
            <div className="text-product">
              <h2>Smart Watch</h2>
              <p>Votre journée, connectée.</p>
            </div>
            {myImages["smart-watch"]}
          </div>
          <div className="item item-2">
            <div className="text-product">
              <h2>iPhone</h2>
              <p>Plus puissant, plus élégant.</p>
            </div>
            {myImages["phone"]}
          </div>
          <div className="item item-3">
            <div className="text-product">
              <h2>Casque Beats</h2>
              <p>Les fils en moins, la magie en en plus.</p>
            </div>
            {myImages["headphones"]}
          </div>
          <div className="item item-4">
            <div className="text-product">
              <h2>Google Home</h2>
              <p>A votre service.</p>
            </div>
            {myImages["google"]}
          </div>
        </div>
      </div>
    );
  }
}
