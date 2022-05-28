import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothes } from 'src/app/models/clothes';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectClickedClothes } from 'src/app/store/clothes.selector';

@Component({
  selector: 'app-all-clothes',
  templateUrl: './all-clothes.component.html',
  styleUrls: ['./all-clothes.component.scss']
})
export class AllClothesComponent implements OnInit {

  tittle = 'ng-clothes';
  selectedClothes: Observable<Clothes | null> = of(null);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedClothes = this.store.select(selectClickedClothes);
  }

}
