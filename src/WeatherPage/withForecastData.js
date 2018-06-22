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
          return this.state({
            loading: false,
            forecastData: [],
            error: data,
          })
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

const exampleData = {
  "data": [
    {
      "wind_cdir": "NNW",
      "app_min_temp": 10.5,
      "wind_gust_spd": 9.86274,
      "rh": 56,
      "wind_spd": 3.69586,
      "pop": 0,
      "wind_cdir_full": "north-northwest",
      "app_max_temp": 18.1,
      "slp": 1030.54,
      "clouds_mid": 2,
      "snow_depth": 0,
      "valid_date": "2018-06-22",
      "pres": 1013.47,
      "clouds_low": 0,
      "dewpt": 6.2,
      "snow": 0,
      "uv": 9.21392,
      "wind_dir": 328,
      "ozone": 329.646,
      "weather": {
        "icon": "c02d",
        "code": 801,
        "description": "Few clouds"
      },
      "clouds_hi": 1,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 18.5,
      "ts": 1529622060,
      "datetime": "2018-06-22",
      "temp": 15.7,
      "min_temp": 10.5,
      "clouds": 2,
      "vis": 0
    },
    {
      "wind_cdir": "NW",
      "app_min_temp": 8.9,
      "wind_gust_spd": 9.69712,
      "rh": 62,
      "wind_spd": 3.19607,
      "pop": 0,
      "wind_cdir_full": "northwest",
      "app_max_temp": 18.8,
      "slp": 1028.48,
      "clouds_mid": 20,
      "snow_depth": 0,
      "valid_date": "2018-06-23",
      "pres": 1011.34,
      "clouds_low": 0,
      "dewpt": 6.2,
      "snow": 0,
      "uv": 4.58717,
      "wind_dir": 319,
      "ozone": 324.003,
      "weather": {
        "icon": "c04d",
        "code": 804,
        "description": "Overcast clouds"
      },
      "clouds_hi": 71,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 19.6,
      "ts": 1529708460,
      "datetime": "2018-06-23",
      "temp": 14.1,
      "min_temp": 8.9,
      "clouds": 75,
      "vis": 0
    },
    {
      "wind_cdir": "W",
      "app_min_temp": 8.4,
      "wind_gust_spd": 5.82766,
      "rh": 65,
      "wind_spd": 1.58874,
      "pop": 0,
      "wind_cdir_full": "west",
      "app_max_temp": 22.4,
      "slp": 1025.16,
      "clouds_mid": 0,
      "snow_depth": 0,
      "valid_date": "2018-06-24",
      "pres": 1008.18,
      "clouds_low": 0,
      "dewpt": 8.6,
      "snow": 0,
      "uv": 5.77496,
      "wind_dir": 271,
      "ozone": 314.021,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "clouds_hi": 57,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 23.1,
      "ts": 1529794860,
      "datetime": "2018-06-24",
      "temp": 16,
      "min_temp": 8.4,
      "clouds": 57,
      "vis": 0
    },
    {
      "wind_cdir": "WNW",
      "app_min_temp": 11.1,
      "wind_gust_spd": 7.73711,
      "rh": 56,
      "wind_spd": 1.79795,
      "pop": 0,
      "wind_cdir_full": "west-northwest",
      "app_max_temp": 24.9,
      "slp": 1024.54,
      "clouds_mid": 0,
      "snow_depth": 0,
      "valid_date": "2018-06-25",
      "pres": 1007.62,
      "clouds_low": 0,
      "dewpt": 7.6,
      "snow": 0,
      "uv": 9.39849,
      "wind_dir": 301,
      "ozone": 317.449,
      "weather": {
        "icon": "c02d",
        "code": 801,
        "description": "Few clouds"
      },
      "clouds_hi": 2,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 25.5,
      "ts": 1529881260,
      "datetime": "2018-06-25",
      "temp": 17.1,
      "min_temp": 11.1,
      "clouds": 2,
      "vis": 0
    },
    {
      "wind_cdir": "ENE",
      "app_min_temp": 13.8,
      "wind_gust_spd": 7.85918,
      "rh": 47,
      "wind_spd": 2.32863,
      "pop": 0,
      "wind_cdir_full": "east-northeast",
      "app_max_temp": 25.5,
      "slp": 1026.61,
      "clouds_mid": 0,
      "snow_depth": 0,
      "valid_date": "2018-06-26",
      "pres": 1009.86,
      "clouds_low": 0,
      "dewpt": 7.4,
      "snow": 0,
      "uv": 6.57182,
      "wind_dir": 77,
      "ozone": 324.026,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "clouds_hi": 45,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 26.2,
      "ts": 1529967660,
      "datetime": "2018-06-26",
      "temp": 20,
      "min_temp": 13.8,
      "clouds": 45,
      "vis": 0
    },
    {
      "wind_cdir": "E",
      "app_min_temp": 13.7,
      "wind_gust_spd": 9.72851,
      "rh": 56,
      "wind_spd": 3.94937,
      "pop": 0,
      "wind_cdir_full": "east",
      "app_max_temp": 24.9,
      "slp": 1024.98,
      "clouds_mid": 0,
      "snow_depth": 0,
      "valid_date": "2018-06-27",
      "pres": 1007.7,
      "clouds_low": 0,
      "dewpt": 9.9,
      "snow": 0,
      "uv": 9.50411,
      "wind_dir": 85,
      "ozone": 323.192,
      "weather": {
        "icon": "c01d",
        "code": 800,
        "description": "Clear Sky"
      },
      "clouds_hi": 0,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 25.2,
      "ts": 1530054060,
      "datetime": "2018-06-27",
      "temp": 19.1,
      "min_temp": 13.7,
      "clouds": 0,
      "vis": 24.1
    },
    {
      "wind_cdir": "E",
      "app_min_temp": 14.5,
      "wind_gust_spd": 9.11702,
      "rh": 63,
      "wind_spd": 3.4552,
      "pop": 0,
      "wind_cdir_full": "east",
      "app_max_temp": 28.8,
      "slp": 1023.1,
      "clouds_mid": 0,
      "snow_depth": 0,
      "valid_date": "2018-06-28",
      "pres": 1005.87,
      "clouds_low": 3,
      "dewpt": 14,
      "snow": 0,
      "uv": 9.49827,
      "wind_dir": 101,
      "ozone": 321.487,
      "weather": {
        "icon": "c02d",
        "code": 801,
        "description": "Few clouds"
      },
      "clouds_hi": 0,
      "precip": 0,
      "max_dhi": null,
      "max_temp": 28.7,
      "ts": 1530140460,
      "datetime": "2018-06-28",
      "temp": 21.7,
      "min_temp": 13.9,
      "clouds": 3,
      "vis": 24.1
    }
  ],
  "city_name": "Wolverhampton",
  "lon": "-2.12296",
  "timezone": "Europe/London",
  "lat": "52.58547",
  "country_code": "GB",
  "state_code": "ENG"
}

export default withForecastData