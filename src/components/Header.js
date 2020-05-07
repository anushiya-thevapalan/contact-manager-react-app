import React from 'react'
import PropTypes from 'prop-types'


function Header(props) {
  const {branding} = props;
  return (
    <div>
      <h1> {props.branding} </h1>
    </div>
  )
}

Header.defaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: PropTypes.bool.isRequired
}

export default Header;
