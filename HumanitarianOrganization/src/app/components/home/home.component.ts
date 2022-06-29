import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Emitters } from '../emitters/emitters';
//import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //@Output() authEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  videoUrl: SafeUrl = {};
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/I5UBikauIQM'
    );
   }

  ngOnInit(): void {


    ///ZA NESTJS
    /////////////////////////////////////////
    // this.http.get(`${environment.apiURL}/user/currentUser`,   {withCredentials: true}).subscribe(
    //   next=>{
    //     console.log(next);
    //     Emitters.authEmitter.emit(true);
    //   },
    //   error => {
    //     console.log(error);
    //     Emitters.authEmitter.emit(false);
    //   }
    // );
  }

}
