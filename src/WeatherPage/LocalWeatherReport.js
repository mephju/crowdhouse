import React from 'react'
import PropTypes from 'prop-types'
import ReportView from './ReportView'
import toWeekday from '../utils/toWeekday'
import WeatherIcon from './WeatherIcon'
import {Small as SmallTitle, Middle as MiddleTitle} from '../views/Title'
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

      <Fill>
        <WeatherIcon name={day.weather.icon} />
      </Fill>



      <Fill>
        <MiddleTitle> {toWeekday(day.datetime)} </MiddleTitle>
        <SmallTitle> {day.weather.description} </SmallTitle>
        <Temperature temperature={day.max_temp} />
      </Fill>
    </Row>

  </ReportView>


}

LocalWeatherReport.propTypes = {
  day: PropTypes.object.isRequired,
}

export default LocalWeatherReport