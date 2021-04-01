import { Coord } from './coord';
import { Hourly } from './hourly';
import { Main } from './main';
import { Sys } from './sys';
import { Weather } from './weather';
import { Wind } from './wind';
export interface DailyWeather {
  id: number;
  current: any;
  hourly: Array<Hourly>;
}
