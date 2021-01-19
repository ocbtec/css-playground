import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCodeTabComponent } from './css-code-tab.component';

describe('CssCodeTabComponent', () => {
  let component: CssCodeTabComponent;
  let fixture: ComponentFixture<CssCodeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCodeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssCodeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
