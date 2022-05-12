import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import styled from 'styled-components';
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
`;

export default App;
