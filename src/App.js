import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';
import Store from './store/Store';

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
