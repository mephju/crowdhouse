import React from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import withForecastData from './withForecastData'
import WeatherPageView from './WeatherPageView'

const Page = styled.div`
  margin: 50px;
  max-width: 1600px;
`

const WeatherPage = props => {

  const {error, loading, forecastData} = props

  if(error) {
    return <pre> {JSON.stringify(error)} </pre>
  }

  if(loading) {
    return <div> loading 7 day weather forecast </div>
  }

  return <Page>
    <WeatherPageView forecastData={forecastData} />
  </Page>
}

WeatherPage.propTypes = {
  forecastData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

export default withForecastData(WeatherPage)