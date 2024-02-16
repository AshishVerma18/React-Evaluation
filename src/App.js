import './App.css';
import { ThemeProvider } from '@mui/styles';
import { AppContextProvider } from './AppContext';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


function App({ theme }) {
  return (
    <AppContextProvider app={this}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
