import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather/current-weather.component';
import { DailyWeatherComponent } from './current-weather/daily-weather/daily-weather.component';

/**
 * Main routes
 */

const routes: Routes = [
  { path: '*', redirectTo: 'current-weather', pathMatch: 'full' },
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'daily-weather', component: DailyWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
