import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import fecha from 'fecha'

const WeatherImg = styled.img`


`


const WeatherIcon = (props) => {
  const src = `/icons/${props.name}.png`
  return <WeatherImg
    src={src}
  />
}


WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default WeatherIcon