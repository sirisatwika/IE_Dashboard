import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './components/overview/overview';
import SideNav from './components/sidenav/sidenav';
import TopNav from './components/topnav/topnav';
import Configuration from './components/configuration/Configuration';
import Datacollection from './components/datacollection/datacollection';
import Analytics from './components/analytics/analytics';
import Monitoring from './components/monitoring/Monitoring';
import Security from './components/security/security';
import './App.css';
import DeviceConfiguration from './components/device-configuration/deviceconfig';
import OverviewTablepage from './components/overview/Overviewtablepage';
import DatacollectionTablepage from './components/datacollection/datacollectiontablepage';
import Login from './components/login/login';

function App() {

  return (
    <div>
    <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
      </Routes>
      <div className='wrapper'>
        {window.location.pathname !== '/' && <SideNav />}
        <main className='mainBlock'>
          {window.location.pathname !== '/' && <TopNav />}
          <div className='main_content'>
            <Routes>
              <Route path="/dashboard" element={<Overview />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/deviceconfig" element={<DeviceConfiguration />} />
              <Route path="/datacollection" element={<Datacollection />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/security" element={<Security />} />
              <Route path="/gatewaydata" element={<OverviewTablepage />} />
              <Route path="/iotdata" element={<DatacollectionTablepage />} />
            </Routes>
          </div>
        </main>
      </div>
      </Router>
    </div>
  );
}
export default App;