import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherServiceService {
  baseurl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}
  getCurrentWeatherFromName(postdata: any): Observable<any> {
    return this.http.get(
      this.baseurl +
        'weather?q=' +
        postdata +
        '&appid=d050b62558752c20cab078834b745228'
    );
  }
}
