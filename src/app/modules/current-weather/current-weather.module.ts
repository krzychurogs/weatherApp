import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [CurrentWeatherComponent, DailyWeatherComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,

    NgxPaginationModule,
    MatToolbarModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBl-m5oTTXoj9cT4cx-CGXt23CJI8rVPhU',
    }),
  ],
  exports: [CurrentWeatherComponent],
})
export class CurrentWeatherModule {}
