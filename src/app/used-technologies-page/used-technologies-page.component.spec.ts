import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTechnologiesPageComponent } from './used-technologies-page.component';

describe('UsedTechnologiesPageComponent', () => {
  let component: UsedTechnologiesPageComponent;
  let fixture: ComponentFixture<UsedTechnologiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedTechnologiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedTechnologiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
