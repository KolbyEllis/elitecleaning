import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Housekeeping from './components/pages/housekeeping/Housekeeping';
import Maintenance from './components/pages/maintenance/Maintenance';
import Messages from './components/pages/messages/Messages';
import Settings from './components/pages/settings/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
