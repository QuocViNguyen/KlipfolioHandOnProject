import './App.css';
import MyHeader from './components/MyHeader';
import ServiceSection from './components/Service/ServiceSection';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataSourceSection from './components/DataSource/DataSourceSection.js';
import MetricSection from './components/Metric/MetricSection';
function App() {

  useEffect(() => {
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
