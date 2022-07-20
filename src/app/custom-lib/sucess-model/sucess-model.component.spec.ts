import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessModelComponent } from './sucess-model.component';

describe('SucessModelComponent', () => {
  let component: SucessModelComponent;
  let fixture: ComponentFixture<SucessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
