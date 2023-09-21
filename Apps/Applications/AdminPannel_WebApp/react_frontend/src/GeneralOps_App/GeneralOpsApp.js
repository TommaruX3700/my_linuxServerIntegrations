import logo from '../media/logo.svg';
import './GeneralOpsApp.css';

function GeneralOpsApp() {
  return (
    <div className="pannelGlassBackground GeneralOpsApp">

      <section class= "ops-header">
        <img src={logo} class="ops-header-icon testLogo" alt="testLogo" />
        <p class="ops-header-text">GeneralOps_WebApp</p>
      </section>

    </div>
  );
}

export default GeneralOpsApp;
