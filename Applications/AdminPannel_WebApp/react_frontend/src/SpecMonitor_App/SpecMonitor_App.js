import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">

      <section class= "monitor-header">
        <img src={logo} class="monitor-header-icon testLogo" alt="logo"/>
        <p class="monitor-header-text">Specs Monitor</p>
      </section>

      <div class="divider"></div>
      
      <div className="App-body">
        <section class= "monitor-field">
          <div class="monitor-field-label">CPU:</div>
          <div class="monitor-field-value"></div>
        </section>
      </div>
      
    </div>
  );
}

export default SpecMonitorApp;
