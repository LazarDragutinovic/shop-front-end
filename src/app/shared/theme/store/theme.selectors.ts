import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";
import { themes, ThemeStateInterface } from "./theme.interface";



const themeFeatureSelector = createFeatureSelector<AppStateInterface, ThemeStateInterface>("theme")

const themeSelector = createSelector(themeFeatureSelector, (state: ThemeStateInterface)=> state.theme)


const themeButtonOnSelector = createSelector(themeSelector, (theme:themes) => theme == "light" )

const themeClassModifierSelector = createSelector(themeSelector, (theme: themes) => 'app-root--'.concat(theme))

export { themeSelector, themeButtonOnSelector, themeClassModifierSelector }
