import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetButtonsComponent } from './reset-buttons.component';

describe('ResetButtonsComponent', () => {
  let component: ResetButtonsComponent;
  let fixture: ComponentFixture<ResetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
