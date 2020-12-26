import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundInputComponent } from './playground-input.component';

describe('PlaygroundInputComponent', () => {
  let component: PlaygroundInputComponent;
  let fixture: ComponentFixture<PlaygroundInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
