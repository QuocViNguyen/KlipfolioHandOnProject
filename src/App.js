import './App.css';
import MyHeader from './components/MyHeader';
import ServiceSection from './components/ServiceSection';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataSourceSection from './components/DataSourceSection';
import DataSource from './components/DataSource';
import MetricSection from './components/MetricSection';

function App() {

  useEffect(() => {
    // console.log("NEW SERVICE SELECTED")
  }, [useSelector(state => state.selectedService)]);

  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll bg-gray-200'>
      <MyHeader/>
      <br/>
      <MetricSection/>
      <br/>
      <ServiceSection/>
      <br/><br/>
      <DataSourceSection/>
    </div>
  );
}

export default App;
