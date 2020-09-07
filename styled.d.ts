import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    primaryColor: string;
    secondaryColor: string;
    voteBackgroundColor: string;
    bodyBackgroundColor: string;
    bodyFontColor: string;
    listActiveBackgroundColor: string;
    setTheme?: () => void;
  }
}
