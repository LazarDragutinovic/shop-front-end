import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinksComponent } from './components/navbar-links/navbar-links.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { RouterModule } from '@angular/router';
import { NavbarThemeButtonComponent } from './components/navbar-theme-button/navbar-theme-button.component';
import { ThemeModule } from '../shared/theme/theme.module';


@NgModule({
  declarations: [
    NavbarComponent,
    NavbarLinksComponent,
    NavbarLinkComponent,
    NavbarThemeButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ThemeModule
  ],
  exports:[NavbarComponent]
})
export class NavigationModule { }
