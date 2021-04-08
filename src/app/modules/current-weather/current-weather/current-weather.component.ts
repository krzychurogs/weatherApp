import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrentWeather } from 'src/app/core/models/current_weather';

import { CurrentWeatherServiceService } from './current-weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  searchTerm: string = '';
  date = new Date();
  test = new Date();

  temp: any;
  icon: any;
  listWithCityNames = [
    'Lublin',
    'Kraków',
    'Warszawa',
    'Gdansk',
    'Wrocław',
    'Szczecin',
  ];
  sunriseDate = new Date();
  sunsetDate = new Date();
  weather: CurrentWeather = { main: {}, sys: {} } as CurrentWeather;
  map = new Map<string, string>();
  mapWind = new Map<string, string>();

  constructor(private service: CurrentWeatherServiceService) {
    this.service
      .getCurrentWeatherFromName('Rzeszów')
      .subscribe((data: CurrentWeather) => {
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }
  public lat = 50.0413;
  public lon = 21.999;
  ngOnInit() {}

  onChoseLocation(lat: number, lng: number) {
    console.log(lat);
    this.lat = lat;
    this.lon = lng;
    this.service
      .getCurrentWeatherFromCord(this.lat, this.lon)
      .subscribe((data: CurrentWeather) => {
        console.log('cor' + data);
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }

  sendNameOfCity() {
    // console.log(this.searchTerm);
    this.service
      .getCurrentWeatherFromName(this.searchTerm)
      .subscribe((data: CurrentWeather) => {
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }
  displayInformation(data: CurrentWeather) {
    this.weather = data;
    // console.log(data);
    this.icon = data.weather[0].icon;
    console.log('ic', data.weather[0].icon);
    this.temp = data.main.temp - 273.15;
    console.log('temp' + this.temp);
    this.test.setTime(1616724000 * 1000);
    console.log(this.test);
    this.sunriseDate.setTime(data.sys.sunrise * 1000);
    this.sunsetDate.setTime(data.sys.sunset * 1000);
    this.date.setTime(data.dt * 1000); // javascript timestamps are in milliseconds
    this.map.set('01d', 'wi wi-day-sunny');
    this.map.set('01n', 'wi wi-day-sunny');
    this.map.set('02d', 'wi wi-day-cloudy');
    this.map.set('02n', 'wi wi-day-cloudy');
    this.map.set('03d', 'wi wi-day-cloudy-high');
    this.map.set('03n', 'wi wi-day-cloudy-high');
    this.map.set('04d', 'wi wi-cloudy');
    this.map.set('04n', 'wi wi-cloudy');
    this.map.set('09d', 'wi wi-day-showers');
    this.map.set('09n', 'wi wi-day-showers');
    this.map.set('10d', 'wi wi-day-rain');
    this.map.set('10n', 'wi wi-day-rain');
    this.map.set('11d', 'wi wi-day-cloudy');
    this.map.set('11n', 'wi wi-day-cloudy');
    this.mapWind.set('20', 'from-90-deg');
  }
  displayCityOnMap(lat: any, lon: any) {
    this.lat = lat;
    this.lon = lon;
    console.log(lat);
  }
  itemclick(item: any) {
    console.log(item);
    this.service
      .getCurrentWeatherFromName(item)
      .subscribe((data: CurrentWeather) => {
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }
}
