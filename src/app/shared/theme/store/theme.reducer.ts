import { createReducer, on } from "@ngrx/store";
import { toggleThemeAction } from "./theme.actions";
import { themes, ThemeStateInterface } from "./theme.interface";



let initialState: ThemeStateInterface = {
  theme:"dark"
}


const themeReducer = createReducer(
  initialState,
  on(toggleThemeAction, (state: ThemeStateInterface)=>{
    const theme:themes = state.theme === "dark"? "light" : "dark";
    return {...state, theme: theme}
  })
)



export default themeReducer

