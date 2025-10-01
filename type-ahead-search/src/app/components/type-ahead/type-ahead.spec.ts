import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAhead } from './type-ahead';

describe('TypeAhead', () => {
  let component: TypeAhead;
  let fixture: ComponentFixture<TypeAhead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeAhead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeAhead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
