import { Weather } from './weather';

export interface Hourly {
  temp?: any;
  feels_like: any;
  dt: any;
  pressure: any;
  humidity: any;
  wind_speed: any;
  wind_gust: any;
  visibility: any;
  weather: Array<Weather>;
  clouds: any;
}
