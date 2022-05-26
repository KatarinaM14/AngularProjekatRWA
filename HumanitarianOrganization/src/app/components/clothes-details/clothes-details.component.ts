import { Component, OnInit, Input } from '@angular/core';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Clothes } from 'src/app/models/clothes';

@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrls: ['./clothes-details.component.scss']
})
export class ClothesDetailsComponent implements OnInit {

  @Input() clothes: Clothes | null = null;

  //public icon_star = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
