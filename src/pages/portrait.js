import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"

const PortraitPage = () => (
  <Layout>
    <Seo title="Portrait Photography" />
    <div className="pt-20 mx-4 mb-4">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/portrait/DSC00789.jpg" alt="Japanese girl with a face mask" />
        <StaticImage src="../images/portrait/DSC00614.jpg" alt="Running Japanese girl" />
        <StaticImage src="../images/portrait/DSC04616.jpg" alt="Japanese girl in winter" />
        <StaticImage src="../images/portrait/mari.jpg" alt="Japanese girl in hot springs" />
        <StaticImage
          src="../images/portrait/DSC06077.jpg"
          alt="Sleeping Japanese girl"
          className="md:col-span-2"
        />
      </div>
    </div>
    <Footer />
  </Layout>
)

export default PortraitPage
