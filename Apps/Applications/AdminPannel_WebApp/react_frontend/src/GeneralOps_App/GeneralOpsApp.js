import logo from '../media/logo.svg';
import './GeneralOpsApp.css';

function GeneralOpsApp() {
  return (
    <div className="pannelGlassBackground GeneralOpsApp">

      <section class= "ops-header">
        <img src={logo} class="ops-header-icon testLogo" alt="logo" />
        <p class="ops-header-text">General Operations</p>
      </section>

      <div class="divider"></div>

      <div className="App-body">
        
      </div>

    </div>
  );
}

export default GeneralOpsApp;
