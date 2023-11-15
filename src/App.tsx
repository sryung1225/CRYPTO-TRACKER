import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  line-height: 1;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  color: inherit;
  text-decoration:none;
}
button {
  cursor: pointer;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
        />
      </Helmet>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
