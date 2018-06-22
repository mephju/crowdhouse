 import React from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'

const WeatherImg = styled.img`
  width: 100%;
`


const WeatherIcon = (props) => {
  const src = `/icons/${props.name}.png`
  return <WeatherImg src={src} />
}


WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default WeatherIcon