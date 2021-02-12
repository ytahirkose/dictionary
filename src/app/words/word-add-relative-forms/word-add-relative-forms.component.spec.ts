import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAddRelativeFormsComponent } from './word-add-relative-forms.component';

describe('WordAddRelativeFormsComponent', () => {
  let component: WordAddRelativeFormsComponent;
  let fixture: ComponentFixture<WordAddRelativeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordAddRelativeFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAddRelativeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
