import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultclothingComponent } from './adultclothing.component';

describe('AdultclothingComponent', () => {
  let component: AdultclothingComponent;
  let fixture: ComponentFixture<AdultclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultclothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
