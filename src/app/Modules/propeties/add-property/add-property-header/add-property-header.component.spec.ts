import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyHeaderComponent } from './add-property-header.component';

describe('AddPropertyHeaderComponent', () => {
  let component: AddPropertyHeaderComponent;
  let fixture: ComponentFixture<AddPropertyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
