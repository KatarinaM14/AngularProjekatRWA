import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringsComponent } from './volunteerings.component';

describe('VolunteeringsComponent', () => {
  let component: VolunteeringsComponent;
  let fixture: ComponentFixture<VolunteeringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteeringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
