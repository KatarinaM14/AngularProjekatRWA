import { Component } from '@angular/core';
import { AppState } from './store/app.state';
import { loadClothes } from './store/clothes.action';
import { loadFood } from './store/food.action';
import { loadVolunteering } from './store/volunteering.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HumanitarianOrganization';

  sideBarOpen = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadClothes());
    this.store.dispatch(loadFood());
    this.store.dispatch(loadVolunteering());
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
