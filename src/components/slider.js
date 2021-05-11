import React, { Component } from "react"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      <div>
        <Slider {...settings}>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center">
              <Link to="/" className="text-gray-50 text-5xl">
                Street
              </Link>
            </div>
            <StaticImage
              src="../images/1.jpg"
              alt="Street photo"
              className="h-screen w-screen"
            />
          </div>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center">
              <Link to="/" className="text-gray-50 text-5xl">
                Portrait
              </Link>
            </div>
            <StaticImage
              src="../images/2.jpg"
              alt="Portrait photo"
              className="h-screen w-screen"
            />
          </div>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center">
              <Link to="/" className="text-gray-50 text-5xl">
                Nature
              </Link>
            </div>
            <StaticImage
              src="../images/3.jpg"
              alt="Nature photo"
              className="h-screen w-screen"
            />
          </div>
        
        </Slider>
      </div>
    )
  }
}
