import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from './father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponent]
    });
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
