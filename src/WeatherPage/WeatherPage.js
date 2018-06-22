import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import withForecastData from './withForecastData'
import WeatherPageView from './WeatherPageView'

const Gradient = styled.div`
  flex-grow: 1;
`



class WeatherPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {error, loading, forecastData} = this.props

    if(error) {
      return <pre> {JSON.stringify(error)} </pre>
    }

    if(loading) {
      return <div> loading 7 day weather forecast </div>
    }

    return <Gradient>
      <WeatherPageView forecastData={forecastData} />
    </Gradient>
  }
}

WeatherPage.propTypes = {
  forecastData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

export default withForecastData(WeatherPage)