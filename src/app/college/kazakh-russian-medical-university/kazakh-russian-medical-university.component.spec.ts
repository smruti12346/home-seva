import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazakhRussianMedicalUniversityComponent } from './kazakh-russian-medical-university.component';

describe('KazakhRussianMedicalUniversityComponent', () => {
  let component: KazakhRussianMedicalUniversityComponent;
  let fixture: ComponentFixture<KazakhRussianMedicalUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KazakhRussianMedicalUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KazakhRussianMedicalUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
