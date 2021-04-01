import { DailyWeather } from './../core/models/daily_weather';
import { Component, Input, OnInit } from '@angular/core';

import { DailyWeatherService } from './daily-weather.service';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
})
export class DailyWeatherComponent implements OnInit {
  listDailyAR: Array<DailyWeather> = [];
  listDailyWeather: Array<Date> = [];
  @Input()
  lat?: any;
  @Input()
  lon?: any;
  @Input()
  map?: any;
  page: any = 1;
  directionsLinks: boolean = true;

  constructor(public service: DailyWeatherService) {}
  ngOnChanges() {
    console.log('la' + this.lat);
    this.service
      .getDayFromLng(this.lat, this.lon)
      .subscribe((data: DailyWeather) => {
        for (let i = 0; i < data.hourly.length; i++) {
          this.listDailyAR.push(data);
          console.log('har' + data.hourly[0].weather[0].description);
          this.listDailyWeather.push(data.hourly[i].dt);
          i += 1;
        }
        console.log(this.listDailyAR[0].hourly[0].dt);
      });
  }
  ngOnInit(): void {}
}
