import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderStyleSelectComponent } from './border-style-select.component';

describe('BorderStyleSelectComponent', () => {
  let component: BorderStyleSelectComponent;
  let fixture: ComponentFixture<BorderStyleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderStyleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderStyleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
