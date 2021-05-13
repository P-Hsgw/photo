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
      swipeToSlide: true,
    }
    return (
      <div>
        <Slider {...settings}>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center drop-shadow-2xl">
              <Link to="/street" className="text-gray-50 text-5xl">
                Street
              </Link>
            </div>
            <StaticImage
              src="../images/street/DSC06408.jpg"
              alt="Empty streets of Shinjuku"
              className="h-screen w-screen z-10"
              placeholder="blurred"
            />
          </div>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center drop-shadow-2xl">
              <Link to="/portrait" className="text-gray-50 text-5xl">
                Portrait
              </Link>
            </div>
            <StaticImage
              src="../images/portrait/mari.jpg"
              alt="Japanese girl in hot springs"
              className="h-screen w-screen z-10"
              placeholder="blurred"

            />
          </div>
          <div className="uppercase">
            <div className="absolute text-red-500 z-50 w-screen h-screen flex items-center justify-center drop-shadow-2xl">
              <Link to="/nature" className="text-gray-50 text-5xl">
                Nature
              </Link>
            </div>
            <StaticImage
              src="../images/nature/DSC07273.jpg"
              alt="Photo of Mount Fuji in the clouds"
              className="h-screen w-screen z-10"
              placeholder="blurred"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
