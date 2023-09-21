import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">
      <div className="App-body">
        <img src={logo} className="testLogo" alt="testLogo" />
        <p>SpecMonitor_WebApp</p>
      </div>
    </div>
  );
}

export default SpecMonitorApp;
