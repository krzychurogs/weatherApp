import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrentWeather } from '../core/models/current_weather';

import { CurrentWeatherServiceService } from './current-weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  searchTerm: string = '';
  date = new Date();
  temp: any;
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

  constructor(private service: CurrentWeatherServiceService) {
    this.service
      .getCurrentWeatherFromName('Rzeszów')
      .subscribe((data: CurrentWeather) => {
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }
  lat = 51.678418;
  lon = 7.809007;
  ngOnInit() {}

  onChoseLocation(event: any) {
    console.log(event);
  }

  sendNameOfCity() {
    console.log(this.searchTerm);
    this.service
      .getCurrentWeatherFromName(this.searchTerm)
      .subscribe((data: CurrentWeather) => {
        this.displayInformation(data);
        this.displayCityOnMap(data.coord.lat, data.coord.lon);
      });
  }
  displayInformation(data: CurrentWeather) {
    this.weather = data;
    console.log(data);
    console.log(data.sys.sunrise);
    console.log(data.sys.sunset);
    this.temp = data.main.temp - 273.15;
    console.log('temp' + this.temp);
    this.sunriseDate.setTime(data.sys.sunrise * 1000);
    this.sunsetDate.setTime(data.sys.sunset * 1000);
    this.date.setTime(data.dt * 1000); // javascript timestamps are in milliseconds
  }
  displayCityOnMap(lat: any, lon: any) {
    this.lat = lat;
    this.lon = lon;
    console.log(lat);
  }
}
