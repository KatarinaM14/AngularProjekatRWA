import { Component, OnInit,Input, Output,  EventEmitter } from '@angular/core';
import { Clothes } from 'src/app/models/clothes';


@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {

  @Input() clothes: Clothes | null = null;
  @Output() onClick: EventEmitter<Clothes> = new EventEmitter<Clothes>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.clothes){
      this.onClick.emit(this.clothes);
    }
  }
}
