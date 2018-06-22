import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReportView from './ReportView'
import styled from 'styled-components'

const EntryTable = styled.table`
  width: 100%;
`

const Entry = ({label, value}) => {
  return <tr>
    <td> {label} </td>
    <EntryValue > {value} </EntryValue >
  </tr>
}

const EntryValue = styled.td`
  text-align: right;
`

const LocalWeatherReport = props => {

  const {day} = props

  return <ReportView title='Sea Forecast Report'>
    <EntryTable>
      <tbody>
        <Entry label='Wind Speed (Knots)' value={day.wind_spd} />
        <Entry label='Wind Gusts (Knots)' value={day.wind_gust_spd} />
        <Entry label='Wind Direction' value={day.wind_cdir} />
        <Entry label='Wave (M)' value='n/a' />
        <Entry label='Wave Period (S)' value='n/a' />
        <Entry label='Wave Direction' value='n/a' />
        <Entry label='Temperature (°C)' value={day.temp} />
        <Entry label='Cloud Cover (%)' value={day.clouds} />
      </tbody>
    </EntryTable>
  </ReportView>


}

LocalWeatherReport.propTypes = {
  day: PropTypes.object.isRequired,
}

export default LocalWeatherReport