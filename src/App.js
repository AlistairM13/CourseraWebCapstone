import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import TableBookingPage from './pages/table-booking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<TableBookingPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
