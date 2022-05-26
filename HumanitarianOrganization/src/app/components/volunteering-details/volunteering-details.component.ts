import { Component, Input, OnInit } from '@angular/core';
import { Volunteering } from 'src/app/models/volunteering';

@Component({
  selector: 'app-volunteering-details',
  templateUrl: './volunteering-details.component.html',
  styleUrls: ['./volunteering-details.component.scss']
})
export class VolunteeringDetailsComponent implements OnInit {
  @Input() volunteering: Volunteering | null =null;

  constructor() { }

  ngOnInit(): void {
  }

}
