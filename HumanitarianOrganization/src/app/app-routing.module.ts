import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClothesComponent } from './components/all-clothes/all-clothes.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { VolunteeringsComponent } from './components/volunteerings/volunteerings.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'clothes', component: AllClothesComponent},
  {path: 'food', component: FoodComponent},
  {path: 'volunteering', component: VolunteeringsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
