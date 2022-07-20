import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetiesComponent } from './propeties.component';

describe('PropetiesComponent', () => {
  let component: PropetiesComponent;
  let fixture: ComponentFixture<PropetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropetiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
