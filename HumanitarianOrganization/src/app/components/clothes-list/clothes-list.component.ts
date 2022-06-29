import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothes } from 'src/app/models/clothes';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectAllClothes } from 'src/app/store/clothes.selector';
import { selectClothes } from 'src/app/store/clothes.action';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClothesListComponent implements OnInit {

  allClothes: Observable<readonly Clothes[]> = of([]);

  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.allClothes = this.store.select(selectAllClothes);
  }

  selectedClothes(clothes: Clothes){
    this.store.dispatch(selectClothes({clothesId: clothes.id}));
  }

}
