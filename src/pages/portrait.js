import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortraitPage = () => (
  <Layout>
    <Seo title="Portrait Photography" />
    <div className="pt-20 mx-4 mb-4">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/portrait/DSC00789.jpg" alt="Street photo" />
        <StaticImage src="../images/portrait/DSC00614.jpg" alt="Street photo" />
        <StaticImage src="../images/portrait/DSC04616.jpg" alt="Street photo" />
        <StaticImage
          src="../images/portrait/DSC06077.jpg"
          alt="Street photo"
          className="md:col-span-2"
        />
        <StaticImage src="../images/portrait/mari.jpg" alt="Street photo" />
      </div>
    </div>
  </Layout>
)

export default PortraitPage
