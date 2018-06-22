import React, { Component } from 'react'
import styled from  'styled-components'

const Gradient = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to right bottom, #476fb6, #008bca, #00a5ce, #00bbc2, #26cfac);
  padding: 40px;
  color: white;
`

const TransBox = styled.div`
  background:  rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
`

class WeatherPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 1,
    }
  }

  render() {
    return <Gradient>
      WeatherPage
      <TransBox> hello </TransBox>
      <TransBox> hello </TransBox>
    </Gradient>
  }
}

export default WeatherPage