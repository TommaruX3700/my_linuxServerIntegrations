import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">

      <section class= "monitor-header">
        <img src={logo} class="monitor-header-icon testLogo" alt="testLogo" />
        <p class="monitor-header-text">SpecMonitor</p>
      </section>

      <div class="divider"></div>
      
      <div className="App-body">
        
      </div>
      
    </div>
  );
}

export default SpecMonitorApp;
