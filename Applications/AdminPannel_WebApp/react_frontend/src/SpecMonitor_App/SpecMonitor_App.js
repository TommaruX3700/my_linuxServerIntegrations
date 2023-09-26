import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

import Temps from './js-modules/renderTemps.js'
import Performance from './js-modules/renderPerformance.js'
import Network from './js-modules/renderNetwork.js'
import Infos from './js-modules/renderInfos.js'

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">

      <section class= "monitor-header">
        <img src={logo} class="monitor-header-icon testLogo" alt="logo"/>
        <p class="monitor-header-text">Specs Monitor</p>
      </section>

      <div class="divider"></div>
      
      <p>Temps</p>
        <Temps/>
      
      <p>Status & Performance</p>
        <Performance/>

      <p>Network</p>
        <Network/>

      <p>Infos</p>
        <Infos/>

    </div>
  );
}

export default SpecMonitorApp;

/*TODO: 
        -Network interfaces currently up
        -sent packages
        -received packages
        -static IP
        -localhost name
        
        - If more than one disk is present, add info for each one of em, but evaluate how to do this
        - If present, add GPU infos
        */
        