import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiyCardComponent } from './modiy-card.component';

describe('ModiyCardComponent', () => {
  let component: ModiyCardComponent;
  let fixture: ComponentFixture<ModiyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModiyCardComponent]
    });
    fixture = TestBed.createComponent(ModiyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
