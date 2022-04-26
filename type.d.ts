interface ITheme {
    mode: string,
    backgroundColor: string,
    textColor: string,
    hero: number,
    title: number,
    subtitle: number,
    article: number,
    Bold: string,
    Semibold: string,
    Regular: string,
    BORDER_RADIUS: number,
    buttonBorderRadius: number,
    buttonColor: string,
    buttonTextColor: string,
    PrimaryButtonColor: string,
    PrimaryButtonTextColor: string,
    containerBackgroundColor: string,
  }
  
  type ThemeState = {
    themes: ITheme[]
  }
  
  type ThemeAction = {
    type: string
    theme: ITheme
  }
  
type ThemeReducer = {
    state: ITheme
    action: ThemeAction
}
type DispatchTypeTheme = (args: ThemeAction) => ThemeAction