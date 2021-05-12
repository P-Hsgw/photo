import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Modal = ({picture}) => {

return (  <div>
    <StaticImage src={picture} />
  </div>)
}

const StreetPage = () => (
  <Layout>
    <Seo title="Street Photography" />
    <div className="pt-20">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-4">
        <StaticImage src="../images/1.jpg" alt="Street photo" className="row-span-2 col-span-2"/>
        <StaticImage src="../images/2.jpg" alt="Street photo" />
        <StaticImage src="../images/3.jpg" alt="Street photo" />
        <StaticImage src="../images/3.jpg" alt="Street photo" />
        <StaticImage src="../images/2.jpg" alt="Street photo" />
        <StaticImage src="../images/1.jpg" alt="Street photo" />
        <StaticImage src="../images/1.jpg" alt="Street photo" />
        <StaticImage src="../images/1.jpg" alt="Street photo" />
        <StaticImage src="../images/1.jpg" alt="Street photo" />
        <StaticImage src="../images/1.jpg" alt="Street photo" className="row-span-3 col-span-3"/>
      </div>
    </div>
  </Layout>
)

export default StreetPage
