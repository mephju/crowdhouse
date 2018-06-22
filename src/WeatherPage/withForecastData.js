import React, {Component} from 'react'

const withForecastData = (Wrappee) => {

  class WithForecastData extends Component {

    constructor(props) {
      super(props)

      this.state = {
        loading: false,
        entries: [],
        error: null,
      }
    }

    render() {
      const {loading, entries, error} = this.state

      if(error) {
        return <pre> {JSON.stringify(error)} </pre>
      }

      if(loading) {
        return <div> loading 7 day weather forecast </div>
      }

      return <Wrappee {...this.props} entries={entries} />
    }
  }

  return WithForecastData
}

export default withForecastData