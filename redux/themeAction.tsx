export const SWITCH_THEME = "SWITCH_THEME"

export const switchTheme   = (theme : ITheme) => {
    return(
        {
            type: SWITCH_THEME,
            theme: theme,
        })
    }
