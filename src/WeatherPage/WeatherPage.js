import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import withForecastData from './withForecastData'
import DayView from './DayView'
import LocalWeatherReport from './LocalWeatherReport'
import SeaForecastReport from './SeaForecastReport'

const Gradient = styled.div`
  flex-grow: 1;
  background-image: linear-gradient(to right bottom, #476fb6, #008bca, #00a5ce, #00bbc2, #26cfac);
  padding: 40px;
  color: white;
`

const TransBox = styled.div`
  background:  rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /* padding: 20px 0; */
  flex-grow: 1;

  display: flex;

  margin:0px 20px 20px  0;
  &:last-child {
    margin-right: 0;
  }
`
const Row = styled.div`
  display: flex;
`

const City = styled.div`
  font-size: 2rem;
`

const Area = styled.div`
  color: #ffffffaa;
`

class WeatherPage extends Component {

  constructor(props) {
    super(props)
    this.onSelectDay = this.onSelectDay.bind(this)
    this.state = {
      x: 1,
    }
  }

  onSelectDay(currentDayIndex) {
    this.setState({ currentDayIndex })
  }

  render() {
    const {forecastData: data} = this.props
    const days = data.data

    console.log('got data', data)

    return <Gradient>
      <City> {data.city_name} </City>
      <Area> {data.country_code} </Area>

      <Row>
        <TransBox>
          <LocalWeatherReport />
        </TransBox>

        <TransBox>
          <SeaForecastReport />
        </TransBox>

      </Row>

      <div>
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
      </div>
    </Gradient>
  }
}

WeatherPage.propTypes = {
  forecastData: PropTypes.object.isRequired,
}

export default withForecastData(WeatherPage)