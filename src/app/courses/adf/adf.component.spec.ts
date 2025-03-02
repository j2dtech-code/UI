import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADFComponent } from './adf.component';

describe('ADFComponent', () => {
  let component: ADFComponent;
  let fixture: ComponentFixture<ADFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ADFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
