import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { ClothesComponent } from './components/clothes/clothes.component';
import { FoodComponent } from './components/food/food.component';
import { PagesComponent } from './components/pages/pages.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
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
import { VolunteeringListComponent } from './components/volunteering-list/volunteering-list.component';
import { VolunteeringDetailsComponent } from './components/volunteering-details/volunteering-details.component';
import { VolunteeringsComponent } from './components/volunteerings/volunteerings.component';
import { clothesReducer } from './store/clothes.reducer';
import { foodReducer } from './store/food.reducer';
import { volunteeringReducer } from './store/volunteering.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ClothesEffects } from './store/clothes.effects';
import { FoodEffects } from './store/food.effect';
import { VolunteeringEffects } from './store/volunteering.effects';
import { ClothesService } from './services/clothes.service';
import { FoodService } from './services/food.service';
import { VolunteeringService } from './services/volunteering.service';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
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
    VolunteeringListComponent,
    VolunteeringDetailsComponent,
    VolunteeringsComponent,
   
    
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
    MatDividerModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
   
    StoreModule.forRoot({clothes: clothesReducer, food: foodReducer, volunteering: volunteeringReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ClothesEffects, FoodEffects, VolunteeringEffects]),
  ],
  providers: [ClothesService, FoodService, VolunteeringService],
  bootstrap: [AppComponent],
})
export class AppModule { }
