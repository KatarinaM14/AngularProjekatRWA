import { Component } from '@angular/core';
import { AppState } from './store/app.state';
import { loadClothes } from './store/clothes.action';
import { loadFood } from './store/food.action';
import { loadVolunteering } from './store/volunteering.action';
import { Store } from '@ngrx/store';
import { loadUser, loadUsers, logInUser } from './store/user/user.actions';
import { Emitters } from './components/emitters/emitters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HumanitarianOrganization';

  sideBarOpen = false;
  //auth = Emitters.authenticated;


  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadClothes());
    this.store.dispatch(loadFood());
    this.store.dispatch(loadVolunteering());
    this.store.dispatch(loadUser());
    
    //   Emitters.authEmitter.subscribe(()=> {
    //     this.auth =Emitters.authenticated;
    //   } );
      
    
    // console.log(this.auth);
  }



  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
    //console.log(this.auth);
  }
}
