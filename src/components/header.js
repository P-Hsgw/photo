import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"



const Header = ({ siteTitle }) => (
  <div className="absolute z-50 inset-x-0 top-2">
      <ul className="flex items-center justify-center h-10 space-x-8 text-4xl uppercase">
        <li>
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
