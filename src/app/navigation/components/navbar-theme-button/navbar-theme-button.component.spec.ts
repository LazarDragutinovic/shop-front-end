import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarThemeButtonComponent } from './navbar-theme-button.component';

describe('NavbarThemeButtonComponent', () => {
  let component: NavbarThemeButtonComponent;
  let fixture: ComponentFixture<NavbarThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarThemeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
