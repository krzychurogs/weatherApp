import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'daily-weather', component: DailyWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
