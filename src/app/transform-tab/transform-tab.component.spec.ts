import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformTabComponent } from './transform-tab.component';

describe('TransformTabComponent', () => {
  let component: TransformTabComponent;
  let fixture: ComponentFixture<TransformTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
