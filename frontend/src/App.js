import styled from 'styled-components';
import './App.css';
import Navigation from './component/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profilepage from './page/Profilepage';
import Followers from './page/Followers';
const Container = styled.div``;

function App() {
  return (
    <>
      <div className='dash-container'>
        <Navigation />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Profilepage />} />

          <Route path='/follower' element={<Followers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
