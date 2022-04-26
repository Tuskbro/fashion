
import { lightTheme, darkTheme }  from "../assets/Theme";
import { SWITCH_THEME } from "./themeAction";



const initialState   =  {
    theme: darkTheme
};

const themeReducer    = (state = initialState, action: ThemeAction) =>{
    switch (action.type) {
        case SWITCH_THEME:
            return {theme: action.theme}
        default:
            return state;    
    }
};

export default themeReducer ;