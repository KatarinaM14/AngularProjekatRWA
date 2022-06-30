import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserModel } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import * as UserSelector from 'src/app/store/user/user.selector';
import * as UserActions from 'src/app/store/user/user.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Actions from '../../store/user/user.actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form !: FormGroup;

  constructor(private store: Store<AppState>, private http: HttpClient,  private formBuilder: FormBuilder) { }

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
       name : [''],
       email:[''],
       password: ['']
    });
  }

  /////////////////////////////////////////////////////////////////////////
  ///////////////////ZAC JSON////////////////////////////////////////////////////////
  ///////ZA JSON /////////////////////////////////// ZA JSON//////////////////////////////
  registracija()
  {

    console.log(this.form.value);
     
    console.log(this.form.value.name);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    

    // UserModel.name = this.form.value.name;
    // console.log( UserModel.name);
    // console.log(UserModel.name);
    // UserModel.email = this.form.value.email;
    // console.log(UserModel.email);
    // UserModel.password = this.form.value.password;
    

    // console.log("Name " + UserModel.name);
    // console.log("email " + UserModel.email);
    // console.log("password " + UserModel.password);

    this.store.dispatch(
      Actions.registerNewUser({
        name : this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password
      })
    );
    
  }


  /////////////////////////////////////////////////////////////////////////
  ///////////////////ZA NESTJS////////////////////////////////////////////////////////
  ///////ZA NESTJS /////////////////////////////////// ZA NESTJS//////////////////////////////
  // registracija(){

  //     console.log(this.form.value);
     
  //   console.log(this.form.value.name);
  //   console.log(this.form.value.email);
  //   console.log(this.form.value.password);
    

  //   this.store.dispatch(
  //     Actions.registerNewUserNestJS({
  //       name : this.form.value.name,
  //       email: this.form.value.email,
  //       password: this.form.value.password
  //     })
  //   );

   
  // }
     
  
}
