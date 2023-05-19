import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KokshetauStateUniversityComponent } from './kokshetau-state-university.component';

describe('KokshetauStateUniversityComponent', () => {
  let component: KokshetauStateUniversityComponent;
  let fixture: ComponentFixture<KokshetauStateUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KokshetauStateUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KokshetauStateUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
