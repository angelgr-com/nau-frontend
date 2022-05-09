import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
