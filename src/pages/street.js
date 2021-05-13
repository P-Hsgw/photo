import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"

const StreetPage = () => (
  <Layout>
    <Seo title="Street Photography" />
    <div className="pt-20 mx-4 mb-4">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/street/DSC01444.jpg" alt="Umbrella on the rainy street" />
        <StaticImage src="../images/street/DSC01445.jpg" alt="Japaense guys walking on a street" />
        <StaticImage src="../images/street/DSC01804.jpg" alt="Crowded Shibuya" />
        <StaticImage src="../images/street/IMG_6989.jpg" alt="People in Kabukicho at night" />
        <StaticImage src="../images/street/DSC06448.jpg" alt="Rainy Shibuya crossing" />
        <StaticImage src="../images/street/DSC07675.jpg" alt="Walking man in Japan" />
        <StaticImage src="../images/street/DSC01449.jpg" alt="Moman in kimono in the rain" />
        <StaticImage
          src="../images/street/DSC01811.jpg"
          alt="Train in Shibuya"
          className="md:col-span-2"
        />
        <StaticImage src="../images/street/DSC04413.jpg" alt="Woman in Japan cleaning her windows" />
        <StaticImage src="../images/street/DSC07912.jpg" alt="Monk in the city center" />
        <StaticImage src="../images/street/DSC06408.jpg" alt="Empty streets of Shinjuku" />
        <StaticImage src="../images/street/DSC04445.jpg" alt="Japanese students in school uniforms" />
        <StaticImage src="../images/street/DSC04447.jpg" alt="Japanese students in school uniforms" />
        <StaticImage src="../images/street/DSC04470.jpg" alt="Rainy day in Shibuya" />
      </div>
    </div>
    <Footer />
  </Layout>
)

export default StreetPage
