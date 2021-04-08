import { MatButtonModule } from '@angular/material/button';
import { MainRoutingModule } from './main-routing.module';
import { CurrentWeatherComponent } from './current-weather/current-weather/current-weather.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrentWeatherModule } from './current-weather/current-weather.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    CurrentWeatherModule,
    MatButtonModule,
    NgxPaginationModule,
    CurrentWeatherModule,
    FormsModule,
  ],
  providers: [],
})
export class MainModule {}
