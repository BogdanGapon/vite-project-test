import { Link, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Info from './pages/Info';

export const App = () => {
  return (
    <>
      <Main />
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/info">Info</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};
