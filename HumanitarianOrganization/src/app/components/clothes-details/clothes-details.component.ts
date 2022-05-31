import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Clothes } from 'src/app/models/clothes';
import { AppState } from 'src/app/store/app.state';
import { deleteClothes, incrementLikes } from 'src/app/store/clothes.action';
import { selectClickedClothes } from 'src/app/store/clothes.selector';


@Component({
  selector: 'app-clothes-details',
  templateUrl: './clothes-details.component.html',
  styleUrls: ['./clothes-details.component.scss']
})
export class ClothesDetailsComponent implements OnInit {

  @Input() clothes: Clothes | null = null;
  count : number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectClickedClothes).subscribe((clothes) =>{
      if(clothes){
        this.clothes = clothes;
      }
    }
    );
  }

  like(){ 
    if(this.clothes){
       if(!this.clothes.like){
      this.count=0;
    }
    else if(this.clothes.like>0){
        this.count=this.clothes.like;
      }
      console.log("Like: "+this.clothes.like);
      console.log("/count: "+this.count);
      console.log("ID: "+this.clothes.id);
      this.count++;
    
      this.store.dispatch(
        incrementLikes({
          clothesId: this.clothes.id,
          like: this.count,
        })
      );
    }
  }

  askForClothes(){
    if(this.clothes){
      this.store.dispatch(deleteClothes({id: this.clothes.id}));
    }
  }
}
