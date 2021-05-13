import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const MobileHeader = () => {
  const [clicked, setClicked] = React.useState(false)

  const isClicked = () => {
    setClicked(!clicked)
  }

  const unclick = () => {
    setClicked(false)
  }

  return (
    <>
      <div
        className={`absolute inset-0 md:hidden z-10 h-screen ${
          clicked ? "block" : "hidden"
        } bee`}
        onClick={isClicked}
       />
      <div className="z-40 absolute inset-x-0 top-0">
        <ul className="md:hidden flex flex-col items-center justify-center space-y-5 text-4xl uppercase drop-shadow-2xl text-gray-50">
          <li
            onClick={isClicked}
            className={`cursor-pointer ${
              clicked ? "underline" : "no-underline"
            } pt-4`}
          >
            Menu
          </li>
          <li className={`${clicked ? "list-item" : "hidden"}`}>
            <Link to="/" className="text-gray-50 z-40">
              Home
            </Link>
          </li>
          <li className={`${clicked ? "list-item" : "hidden"}`}>
            <Link to="/street" className="text-gray-50 ">
              Street
            </Link>
          </li>
          <li className={`${clicked ? "list-item" : "hidden"}`}>
            <Link to="/portrait" className="text-gray-50">
              Portrait
            </Link>
          </li>
          <li className={`${clicked ? "list-item" : "hidden"}`}>
            <Link to="/nature" className="text-gray-50">
              Nature
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

const Header = ({ siteTitle }) => (
  <div className="absolute z-50 inset-x-0 top-0">
    <MobileHeader />

    <ul className="hidden md:flex items-center justify-center h-10 space-x-8 text-4xl uppercase drop-shadow-2xl mt-4">
      <li className="md:list-item hidden">
        {" "}
        <Link to="/" className="text-gray-50">
          Home
        </Link>
      </li>
      <li className="md:list-item hidden">
        {" "}
        <Link to="/street" className="text-gray-50 ">
          Street
        </Link>
      </li>
      <li className="md:list-item hidden ">
        {" "}
        <Link to="/portrait" className="text-gray-50">
          Portrait
        </Link>
      </li>
      <li className="md:list-item hidden">
        {" "}
        <Link to="/nature" className="text-gray-50">
          Nature
        </Link>
      </li>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
