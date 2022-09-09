import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import Store from './store/Store';
import ProductDetails from './components/product-details/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
