import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { toggleThemeAction } from 'src/app/shared/theme/store/theme.actions';
import { themeButtonOnSelector } from 'src/app/shared/theme/store/theme.selectors';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'sp-navbar-theme-button',
  templateUrl: './navbar-theme-button.component.html',
  styleUrls: ['./navbar-theme-button.component.scss']
})
export class NavbarThemeButtonComponent {

  buttonOn$ = this.store.select(themeButtonOnSelector)

  buttonClassModifier$ = this.buttonOn$.pipe(map(buttonOn=>buttonOn ? "theme-button__circle--active" : ""))

  constructor(private store: Store<AppStateInterface>) {}

  onToggleTheme() {
    this.store.dispatch(toggleThemeAction())
  }
}
