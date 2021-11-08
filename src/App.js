import './App.css';
import MyHeader from './components/MyHeader';
import ServiceSection from './components/ServiceSection';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {

  useEffect(() => {
    console.log("NEW SERVICE SELECTED")
  }, [useSelector(state => state.selectedService)]);

  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll bg-gray-200'>
      <MyHeader/>
      <ServiceSection/>
    </div>
  );
}

export default App;
