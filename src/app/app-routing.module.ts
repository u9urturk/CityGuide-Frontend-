import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityComponent } from './components/city/city.component';
import { RegisterComponent } from './components/register/register.component';
import { ValueComponent } from './components/value/value.component';

const routes: Routes = [
  {path:"city",component:CityComponent},
  {path:"register",component:RegisterComponent},
  {path:"cityadd",component:CityAddComponent},
  {path:"value",component:ValueComponent},
  {path:"cityDetail/:cityId",component:CityDetailComponent},
  
  {path:"**",redirectTo:"city",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
