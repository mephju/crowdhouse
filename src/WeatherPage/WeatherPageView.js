import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import DayView from './DayView'
import LocalWeatherReport from './LocalWeatherReport'
import SeaForecastReport from './SeaForecastReport'
import Row from '../views/Row'

const TransBox = styled.div`
  background:  rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  margin:0px 30px 30px  0;
  &:last-child {
    margin-right: 0;
  }
`

const City = styled.div`
  font-size: 3rem;
`
const Area = styled.div`
  color: #ffffffaa;
  margin-bottom: 30px;
`

class WeatherPageView extends Component {

  constructor(props) {
    super(props)
    this.onSelectDay = this.onSelectDay.bind(this)
    this.state = {
      currentDayIndex: 0
    }
  }

  onSelectDay(currentDayIndex) {
    this.setState({ currentDayIndex })
  }

  render() {

    const {forecastData: data} = this.props
    const days = data.data
    const day = days[this.state.currentDayIndex]

    return <Fragment>
      <City> {data.city_name} </City>
      <Area> {data.country_code} </Area>

      <Row>
        <TransBox>
          <LocalWeatherReport day={day} />
        </TransBox>

        <TransBox>
          <SeaForecastReport day={day} />
        </TransBox>

      </Row>

      <TransBox>
        {days.map((day, i) =>
          <DayView
            key={i}
            dayIndex={i}
            day={day}
            onSelectDay={this.onSelectDay}
          />
        )}
      </TransBox>

    </Fragment>
  }
}

WeatherPageView.propTypes = {
  forecastData: PropTypes.object.isRequired,
}

export default WeatherPageView