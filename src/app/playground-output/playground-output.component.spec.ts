import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundOutputComponent } from './playground-output.component';

describe('PlaygroundOutputComponent', () => {
  let component: PlaygroundOutputComponent;
  let fixture: ComponentFixture<PlaygroundOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
