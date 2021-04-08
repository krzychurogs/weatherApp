import { MainModule } from './modules/main.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './modules/current-weather/current-weather/current-weather.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
