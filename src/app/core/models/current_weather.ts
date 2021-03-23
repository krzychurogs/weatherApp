import { Coord } from './coord';
import { Main } from './main';
import { Sys } from './sys';
import { Weather } from './weather';
import { Wind } from './wind';
export interface CurrentWeather {
  id: number;
  main: Main;
  coord: Coord;
  sys: Sys;
  timestamp: Date;
  wind: Wind;
  dt: any;
  weather: Weather;
  name: string;
}
