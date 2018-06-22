import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import fecha from 'fecha'

const TempWrapper = styled.span`
  text-align: center;

`
const TempNumber = styled.div`
  display: block;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 5px;
`

const Temperature = props => {

  const celsius = parseFloat(props.temperature)
  const fahrenheit = (celsius * 1.8 + 32).toFixed(2)

  return <TempWrapper>
    <TempNumber> {celsius} °C </TempNumber>
    <TempNumber> {fahrenheit} °F </TempNumber>
  </TempWrapper>
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
}

export default Temperature