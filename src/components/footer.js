import * as React from "react"

const Footer = () => {
  const getCurrentYEar = () => {
    return new Date().getFullYear();
  }

  return (
  <div className="w-screen h-5 text-center text-gray-50 mb-1 pb-8">
    © 2019-{getCurrentYEar()} Tsukinode.  All rights reserved.
  </div>)
}

export default Footer