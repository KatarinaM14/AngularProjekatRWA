import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Volunteering } from 'src/app/models/volunteering';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectClickedVolunteering } from 'src/app/store/volunteering.selector';

@Component({
  selector: 'app-volunteerings',
  templateUrl: './volunteerings.component.html',
  styleUrls: ['./volunteerings.component.scss']
})
export class VolunteeringsComponent implements OnInit {

  title = 'ng-volunteerings';
  selectedVolunteering: Observable<Volunteering | null> = of(null);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedVolunteering = this.store.select(selectClickedVolunteering);
  }

}
