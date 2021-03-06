import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothes } from 'src/app/models/clothes';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectClickedClothes } from 'src/app/store/clothes.selector';
import { DialogClothesComponent } from '../dialog-clothes/dialog-clothes.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-clothes',
  templateUrl: './all-clothes.component.html',
  styleUrls: ['./all-clothes.component.scss']
})
export class AllClothesComponent implements OnInit {

  tittle = 'ng-all-clothes';
  selectedClothes: Observable<Clothes | null> = of(null);

  constructor(private store: Store<AppState>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedClothes = this.store.select(selectClickedClothes);
  }
  openDialog() {
    this.dialog.open(DialogClothesComponent, {
        width: '30%'
    });
  }

}
