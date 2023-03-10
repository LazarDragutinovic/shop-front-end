import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { themeClassModifierSelector } from './shared/theme/store/theme.selectors';
import { AppStateInterface } from './shared/types/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  themeClassModifier$ = this.store.select(themeClassModifierSelector)

  constructor(private store: Store<AppStateInterface>) {

  }

}
