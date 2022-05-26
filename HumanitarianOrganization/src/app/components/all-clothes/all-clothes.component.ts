import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothes } from 'src/app/models/clothes';

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
    this.selectedClothes = this.store.select(selectClickClothes);
  }

}
