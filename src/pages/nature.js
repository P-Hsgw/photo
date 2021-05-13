import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NaturePage = () => (
  <Layout>
    <Seo title="Nature Photography" />
    <div className="pt-20 mx-4 mb-4">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage
          src="../images/nature/DSC07273.jpg"
          alt="Photo of Mount Fuji in the clouds"
          className="md:col-span-2"
        />
        <StaticImage src="../images/nature/DSC01639.jpg" alt="Blooming, pink sakura" />
        <StaticImage src="../images/nature/DSC01737.jpg" alt="Blooming sakura with blue background" />
        <StaticImage
          src="../images/nature/DSC07233.jpg"
          alt="Majestic Mount Fuji"
          className="md:col-span-2"
        />
        <StaticImage
          src="../images/nature/DSC01778.jpg"
          alt="Street full of cherry blossom"
          className="md:col-span-2"
        />
        <StaticImage src="../images/nature/DSC05062.jpg" alt="Deer in Japan" />
      </div>
    </div>
  </Layout>
)

export default NaturePage
