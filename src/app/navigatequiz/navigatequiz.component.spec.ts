import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatequizComponent } from './navigatequiz.component';

describe('NavigatequizComponent', () => {
  let component: NavigatequizComponent;
  let fixture: ComponentFixture<NavigatequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
