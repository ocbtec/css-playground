import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTabComponent } from './border-tab.component';

describe('BorderTabComponent', () => {
  let component: BorderTabComponent;
  let fixture: ComponentFixture<BorderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
