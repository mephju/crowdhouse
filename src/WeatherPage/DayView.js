import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import WeatherIcon from './WeatherIcon'
import Temperature from './Temperature'
import * as Title from '../views/Title'
import toWeekday from '../utils/toWeekday'

const DayViewWrapper = styled.div`
  cursor: pointer;
  margin: 20px 10px;
  flex-grow: 1;
  text-align: center;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  &:last-child {
    border-right: 0px;
  }
`

class DayView extends Component {

  constructor(props) {
    super(props)
    this.onSelectDay = this.onSelectDay.bind(this)
  }

  onSelectDay() {
    this.props.onSelectDay(this.props.dayIndex)
  }

  render() {

    const {day} = this.props
    const weekday = toWeekday(day.datetime)

    return <DayViewWrapper onClick={this.onSelectDay}>
      <Title.Small> {weekday} </Title.Small>
      <WeatherIcon name={day.weather.icon} />
      <Temperature temperature={day.max_temp} />
    </DayViewWrapper>
  }


}

DayView.propTypes = {
  day: PropTypes.object.isRequired,
  dayIndex: PropTypes.number.isRequired,
  onSelectDay: PropTypes.func.isRequired,
}

export default DayView