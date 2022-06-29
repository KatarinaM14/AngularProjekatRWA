import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Emitters } from '../emitters/emitters';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter(); 

  korisnici$: Observable<User[]> = of([]);
  authenticated = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean)=>{
        this.authenticated = auth;
      }
    );
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
  
  //logIn(korisnici: User[]){

 // }

 logout(){
    this.http.post(`${environment.apiURL}/auth/logout`, {} , {withCredentials: true})
    .subscribe(() => this.authenticated = false);
 }
}
