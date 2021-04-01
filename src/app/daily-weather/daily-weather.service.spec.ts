/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DailyWeatherService } from './daily-weather.service';

describe('Service: DailyWeather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyWeatherService]
    });
  });

  it('should ...', inject([DailyWeatherService], (service: DailyWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
