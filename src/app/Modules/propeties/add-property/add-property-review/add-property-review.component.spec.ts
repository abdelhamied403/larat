import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyReviewComponent } from './add-property-review.component';

describe('AddPropertyReviewComponent', () => {
  let component: AddPropertyReviewComponent;
  let fixture: ComponentFixture<AddPropertyReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
