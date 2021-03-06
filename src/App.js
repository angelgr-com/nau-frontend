import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import styled from 'styled-components';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import DeleteProfile from './pages/DeleteProfile';
import TranslateEnEs from './features/TranslateEnEs';
import TranslateEsEn from './features/TranslateEsEn';

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/delete" element={<DeleteProfile />} />
            <Route path="/practice/en-es" element={<TranslateEnEs />} />
            <Route path="/practice/es-en" element={<TranslateEsEn />} />
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
  min-height: calc(100vh - 9em);
  @media only Screen and (max-width: 30em) {
    max-width: 24em;
    width: 24em;
  }
  @media only Screen and (max-width: 20em) {
    min-width: 22em;
  }
`;

export default App;
