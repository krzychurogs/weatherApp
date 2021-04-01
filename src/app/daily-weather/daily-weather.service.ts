import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DailyWeatherService {
  baseurl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}

  getDayFromLng(lat: any, lon: any): Observable<any> {
    return this.http.get(
      this.baseurl +
        'onecall?lat=' +
        lat +
        '&lon=' +
        lon +
        '&exclude=daily&appid=d050b62558752c20cab078834b745228'
    );
  }
}
