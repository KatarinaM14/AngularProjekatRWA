import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothes } from 'src/app/models/clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClothesListComponent implements OnInit {

  clothes: Observable<readonly Clothes[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.clothes = this.store.select(selectAllClothes);
  }

  selectedClothes(clothes: Clothes){
    this.store.dispatch(selectClothes({clothesId: clothes.id}));
  }

}
