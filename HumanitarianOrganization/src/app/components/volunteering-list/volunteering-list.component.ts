import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Volunteering } from 'src/app/models/volunteering';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectVolunteering } from 'src/app/store/volunteering.action';
import { selectAllVolunteerings } from 'src/app/store/volunteering.selector';

@Component({
  selector: 'app-volunteering-list',
  templateUrl: './volunteering-list.component.html',
  styleUrls: ['./volunteering-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolunteeringListComponent implements OnInit {

  volunteerings: Observable<readonly Volunteering[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.volunteerings = this.store.select(selectAllVolunteerings);
  }

  selectedVolunteering(volunteering: Volunteering){
    this.store.dispatch(selectVolunteering({volunteeringId: volunteering.id}));
  }

}
