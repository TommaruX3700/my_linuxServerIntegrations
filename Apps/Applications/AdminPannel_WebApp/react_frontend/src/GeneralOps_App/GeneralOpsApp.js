import logo from '../media/logo.svg';
import './GeneralOpsApp.css';

function GeneralOpsApp() {
  return (
    <div className="pannelGlassBackground GeneralOpsApp">
      <div className="App-body">
        <img src={logo} className="testLogo" alt="testLogo" />
        <p>GeneralOps_WebApp</p>
      </div>
    </div>
  );
}

export default GeneralOpsApp;
