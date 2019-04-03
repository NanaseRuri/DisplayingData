import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpComponent_v1 } from './keyup.component';

describe('KeyupComponent', () => {
  let component: KeyUpComponent_v1;
  let fixture: ComponentFixture<KeyUpComponent_v1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpComponent_v1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpComponent_v1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
