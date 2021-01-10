import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsTabComponent } from './colors-tab.component';

describe('ColorsTabComponent', () => {
  let component: ColorsTabComponent;
  let fixture: ComponentFixture<ColorsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
