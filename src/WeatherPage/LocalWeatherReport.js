import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReportView from './ReportView'
import toWeekday from '../utils/toWeekday'
import WeatherIcon from './WeatherIcon'
import {Small} from '../views/Title'
import Temperature from './Temperature'
import Row from '../views/Row'
import styled from 'styled-components'

const Fill = styled.div`
  flex: 1 0 0;
`

const LocalWeatherReport = props => {

  const {day} = props

  return <ReportView title='Local Weather Report'>
    <Row>
      <WeatherIcon name={day.weather.icon} />



      <Fill>
        {toWeekday(day.datetime)}
        <Small> {day.weather.description} </Small>
        <Temperature temperature={day.max_temp} />
      </Fill>
    </Row>

  </ReportView>


}

LocalWeatherReport.propTypes = {
  day: PropTypes.object.isRequired,
}

export default LocalWeatherReport