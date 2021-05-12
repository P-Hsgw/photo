import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StreetPage = () => (
  <Layout>
    <Seo title="Street Photography" />
    <div className="pt-20 mx-4 mb-4">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/street/DSC01444.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC01445.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC01804.jpg" alt="Street photo" />
        <StaticImage src="../images/street/IMG_6989.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC06448.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC07675.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC01449.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC01811.jpg" alt="Street photo" className="col-span-2" />
        <StaticImage src="../images/street/DSC04413.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC07912.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC06408.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC04445.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC04447.jpg" alt="Street photo" />
        <StaticImage src="../images/street/DSC04470.jpg" alt="Street photo" />
      </div>
    </div>
  </Layout>
)

export default StreetPage
