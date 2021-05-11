import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="absolute z-50  w-screen">
      <ul className="flex items-center justify-center h-10 space-x-8 text-2xl">
        <li>
          {" "}
          <Link to="/" className="text-gray-50">
            {siteTitle}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/" className="text-gray-50">
            {siteTitle}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/" className="text-gray-50">
            {siteTitle}
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
