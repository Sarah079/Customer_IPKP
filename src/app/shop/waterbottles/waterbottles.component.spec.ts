import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterbottlesComponent } from './waterbottles.component';

describe('WaterbottlesComponent', () => {
  let component: WaterbottlesComponent;
  let fixture: ComponentFixture<WaterbottlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterbottlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterbottlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
