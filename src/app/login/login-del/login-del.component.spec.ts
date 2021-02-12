import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDelComponent } from './login-del.component';

describe('LoginDelComponent', () => {
  let component: LoginDelComponent;
  let fixture: ComponentFixture<LoginDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
