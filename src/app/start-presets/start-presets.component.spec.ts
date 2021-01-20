import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPresetsComponent } from './start-presets.component';

describe('StartPresetsComponent', () => {
  let component: StartPresetsComponent;
  let fixture: ComponentFixture<StartPresetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPresetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPresetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
