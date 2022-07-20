import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsComponent } from './property-details.component';

describe('PropertyDetialsComponent', () => {
  let component: PropertyDetailsComponent;
  let fixture: ComponentFixture<PropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
