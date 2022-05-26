import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringListComponent } from './volunteering-list.component';

describe('VolunteeringListComponent', () => {
  let component: VolunteeringListComponent;
  let fixture: ComponentFixture<VolunteeringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteeringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
