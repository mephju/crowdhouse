import React, {Component} from 'react'
import config from '../config'

const city = 'Wolverhampton,UK'
const url = `${config.apiEndpoint}?key=${config.apiKey}&city=${city}&days=7`

const withForecastData = (Wrappee) => {

  class WithForecastData extends Component {

    constructor(props) {
      super(props)

      this.state = {
        loading: true,
        forecastData: null,
        error: null,
      }
    }

    componentDidMount() {

      fetch(url)
      .then(res => res.json())
      .then(data => {
        if(data.status_code) {
          throw new Error(data)
        }
        this.setState({
          loading: false,
          forecastData: data,
          error: null,
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error,
        })
      })

    }

    render() {

      return <Wrappee {...this.props} {...this.state} />
    }
  }

  return WithForecastData
}


export default withForecastData