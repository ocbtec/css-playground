import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMessageComponent } from './copy-message.component';

describe('CopyMessageComponent', () => {
  let component: CopyMessageComponent;
  let fixture: ComponentFixture<CopyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
