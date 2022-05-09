import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import styled from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
