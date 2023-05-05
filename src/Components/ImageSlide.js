import React, { Component } from "react";

export default class ImageSlide extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.w3schools.com/w3css/img_la.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Chicago</h5>
                <p>Thank you Chicago, the night we won't forget</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.w3schools.com/w3images/ny.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>New York</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
