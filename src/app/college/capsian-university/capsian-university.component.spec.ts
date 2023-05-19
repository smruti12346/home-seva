import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsianUniversityComponent } from './capsian-university.component';

describe('CapsianUniversityComponent', () => {
  let component: CapsianUniversityComponent;
  let fixture: ComponentFixture<CapsianUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsianUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsianUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
