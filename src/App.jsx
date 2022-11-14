import Router from 'cores/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme, mixins } from 'styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, ...mixins }}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
