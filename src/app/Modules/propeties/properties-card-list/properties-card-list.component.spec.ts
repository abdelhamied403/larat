import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCardListComponent } from './properties-card-list.component';

describe('PropertiesCardListComponent', () => {
  let component: PropertiesCardListComponent;
  let fixture: ComponentFixture<PropertiesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
