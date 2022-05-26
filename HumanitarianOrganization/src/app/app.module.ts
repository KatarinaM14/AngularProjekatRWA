import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
import { DonatesComponent } from './components/donates/donates.component';

import { ClothesComponent } from './components/clothes/clothes.component';
import { FoodComponent } from './components/food/food.component';
import { PagesComponent } from './components/pages/pages.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ClothesDetailsComponent } from './components/clothes-details/clothes-details.component';
import { ClothesListComponent } from './components/clothes-list/clothes-list.component';
import { AllClothesComponent } from './components/all-clothes/all-clothes.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { SingleFoodComponent } from './components/single-food/single-food.component';


@NgModule({
  declarations: [
    AppComponent,
   // NavbarComponent,
    DonatesComponent,
   
    ClothesComponent,
    FoodComponent,
    PagesComponent,
    VolunteeringComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    ClothesDetailsComponent,
    ClothesListComponent,
    AllClothesComponent,
    FoodDetailsComponent,
    FoodListComponent,
    SingleFoodComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatSliderModule,
     MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
