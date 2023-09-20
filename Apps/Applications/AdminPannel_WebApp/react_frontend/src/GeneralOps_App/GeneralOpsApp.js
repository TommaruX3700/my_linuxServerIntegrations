import logo from '../media/logo.svg';
import './GeneralOpsApp.css';

function GeneralOpsApp() {
  return (
    <div className="pannelGlassBackground GeneralOpsApp">
      <div className="App-header">
        <img src={logo} className="testLogo" alt="logo" />
        <p>GeneralOps_WebApp</p>
      </div>
    </div>
  );
}

export default GeneralOpsApp;
