import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { selectAllUsers, selectLoggedInUser } from 'src/app/store/user/user.selector';
import { environment } from 'src/environments/environment';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm !: FormGroup;

  //@Input() user: User | null = null;
  
  constructor( 
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  hide = true;
  
  ngOnInit(): void {
    // this.store.select(selectLoggedInUser).subscribe((user) =>{
    //   if(user){
    //     console.log(user);
    //     this.user = user;
    //   }
    // });

    // console.log(this.user);
   
    this.userForm = this.formBuilder.group({
       email:'',
       password: '',
    });
  }

  ///////////////////////////////////////////////////
  /////ZA JSON////////////////////////////////////////
  async submit(){
    console.log("submit");
    console.log("Email: " + this.userForm.getRawValue().email);
    console.log("pasword: " + this.userForm.getRawValue().password);

    console.log("Login:" + this.userForm.getRawValue());

    

  this.http.get<any>(`${environment.apiURL}/user/`)
    .subscribe(res=>{
      const user = res.find((a:any) => {
        return a.email === this.userForm.value.email &&
                  a.password === this.userForm.value.password
      });
      if(user){
        alert("Login success!");
        this.userForm.reset();
        Emitters.authEmitter.emit(true);
        this.router.navigate(["home"]); 
      }else{
        alert("User not found");
        Emitters.authEmitter.emit(false);
      }
    }, err=>{
      alert("Something went wrong!");
      Emitters.authEmitter.emit(false);
    }
    )
  }


  ///ZA NESTJS
    //////////////////////////////////////////////
  //  submit(){
  //   console.log("submit");
  //   console.log("Email: " + this.userForm.getRawValue().email);
  //   console.log("pasword: " + this.userForm.getRawValue().password);

  //   console.log("Login:" + this.userForm.getRawValue());

  //  // console.log(this.user);

    
  //   this.http.post(`${environment.apiURL}/auth/login`, this.userForm.getRawValue(), 
  //   {withCredentials: true}
  //   ).subscribe( );
     
         
  //           alert("Login success!");
  //           this.userForm.reset();
  //           Emitters.authEmitter.emit(true);
  //           this.router.navigate(["home"]); 
        
  // }
}
