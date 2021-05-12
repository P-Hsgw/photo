import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const NaturePage = () => (
  <Layout>
    <Seo title="Nature Photography"/>
    <div className="pt-20 mx-4 mb-4">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/nature/DSC07273.jpg" alt="Street photo" className="col-span-2"/>
        <StaticImage src="../images/nature/DSC01639.jpg" alt="Street photo" />
        <StaticImage src="../images/nature/DSC01737.jpg" alt="Street photo" />
        <StaticImage src="../images/nature/DSC07273.jpg" alt="Street photo" className="col-span-2"/>
        <StaticImage src="../images/nature/DSC01778.jpg" alt="Street photo" className="col-span-2"/>
        <StaticImage src="../images/nature/DSC05062.jpg" alt="Street photo" />
      </div>
    </div>
  </Layout>
)

export default NaturePage