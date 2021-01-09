import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowTabComponent } from './box-shadow-tab.component';

describe('BoxShadowTabComponent', () => {
  let component: BoxShadowTabComponent;
  let fixture: ComponentFixture<BoxShadowTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxShadowTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxShadowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
