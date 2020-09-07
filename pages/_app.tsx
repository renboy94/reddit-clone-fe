import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../styles.css";
import { useState } from "react";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";

const GlobalStyle = createGlobalStyle`
	body{
		background: ${(p) => p.theme.bodyBackgroundColor};
		/* min-height: 100vh; */
		/* margin: 0; */
		color: ${(p) => p.theme.bodyFontColor};
		/* font-family: 'Kaushan Script' */
	}
`;

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
