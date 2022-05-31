import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClothesComponent } from './dialog-clothes.component';

describe('DialogClothesComponent', () => {
  let component: DialogClothesComponent;
  let fixture: ComponentFixture<DialogClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
