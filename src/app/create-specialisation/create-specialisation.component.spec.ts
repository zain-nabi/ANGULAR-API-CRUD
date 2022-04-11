import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialisationComponent } from './create-specialisation.component';

describe('CreateSpecialisationComponent', () => {
  let component: CreateSpecialisationComponent;
  let fixture: ComponentFixture<CreateSpecialisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecialisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpecialisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
