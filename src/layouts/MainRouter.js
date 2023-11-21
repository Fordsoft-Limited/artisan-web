import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import MainPage from '../components/landing/MainPage';
import Abouts from '../components/landing/About/About';
import MainLayout from '../layouts/MainLayout';

const MainRouter = () => {
    const location = useLocation();
    const { pathname } = location;
    const { id } = useParams();
  return (
    
    <div>
    <MainLayout>
      {/* Your MainLayout content goes here */}
      {pathname === '/main' && <MainPage />}
      {pathname === '/main/about' && <Abouts />}
      {/* Add more conditions for other routes if needed */}
    </MainLayout>
    </div>
  )
}

export default MainRouter