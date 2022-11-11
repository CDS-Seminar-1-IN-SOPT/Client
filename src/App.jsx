import Router from 'cores/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
