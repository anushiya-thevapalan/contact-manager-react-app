import React from 'react'
import PropTypes from 'prop-types'


function Header(props) {
  const {branding} = props;
  return (
    <div>
      {/* <h1 style={{color: 'cyan', fontSize: '40px'}}> {props.branding} </h1> */}
      <h1 style={headerStyle}> {props.branding} </h1>
    </div>
  )
}

Header.defaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: PropTypes.bool.isRequired
}

const headerStyle = {
  color: 'purple',
  fontSize: '40px'
}

export default Header;
