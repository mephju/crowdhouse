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
        data: null,
        error: null,
      }
    }

    componentDidMount() {

      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          data,
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
      const {loading, data, error} = this.state

      if(error) {
        return <pre> {JSON.stringify(error)} </pre>
      }

      if(loading) {
        return <div> loading 7 day weather forecast </div>
      }

      return <Wrappee {...this.props} forecastData={data} />
    }
  }

  return WithForecastData
}

export default withForecastData