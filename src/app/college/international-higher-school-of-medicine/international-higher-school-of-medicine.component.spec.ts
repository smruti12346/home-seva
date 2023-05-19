import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalHigherSchoolOfMedicineComponent } from './international-higher-school-of-medicine.component';

describe('InternationalHigherSchoolOfMedicineComponent', () => {
  let component: InternationalHigherSchoolOfMedicineComponent;
  let fixture: ComponentFixture<InternationalHigherSchoolOfMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalHigherSchoolOfMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalHigherSchoolOfMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
