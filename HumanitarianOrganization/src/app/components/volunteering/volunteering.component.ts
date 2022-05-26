import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Volunteering } from 'src/app/models/volunteering';


@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent implements OnInit {

  @Input() volunteering : Volunteering | null = null;
  @Output() onClick: EventEmitter<Volunteering> = new EventEmitter<Volunteering>();
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.volunteering){
      this.onClick.emit(this.volunteering);
    }
  }
}
