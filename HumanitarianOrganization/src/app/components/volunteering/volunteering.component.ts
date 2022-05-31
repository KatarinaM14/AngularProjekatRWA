import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Volunteering } from 'src/app/models/volunteering';
import { AppState } from 'src/app/store/app.state';
import { incrementVolunteers } from 'src/app/store/volunteering.action';


@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent implements OnInit {

  @Input() volunteering : Volunteering | null = null;
  //@Output() onClick: EventEmitter<Volunteering> = new EventEmitter<Volunteering>();
  constructor(private store: Store<AppState>) { }

  count : number = 0;
  ngOnInit(): void {
  }

  // clicked(){
  //   if(this.volunteering){
  //     //this.onClick.emit(this.volunteering);
  //   }
  // }
  volunteers(){
    if(this.volunteering){
      if(!this.volunteering.volunteers){
     this.count=0;
   }
   else if(this.volunteering.volunteers>0){
       this.count=this.volunteering.volunteers;
     }
     console.log("Like: "+this.volunteering.volunteers);
     console.log("/count: "+this.count);
     console.log("ID: "+this.volunteering.id);
     this.count++;
   
     this.store.dispatch(
       incrementVolunteers({
         volunteeringId: this.volunteering.id,
         volunteers: this.count,
       })
     );
   }
  }
}
