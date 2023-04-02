import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlasksComponent } from './flasks.component';

describe('FlasksComponent', () => {
  let component: FlasksComponent;
  let fixture: ComponentFixture<FlasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
