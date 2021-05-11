import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {

  return (
    <div className="h-screen">
      <StaticImage src="../images/1.jpg" alt="A city" className="h-screen" />
    </div>
  )
}

export default Hero