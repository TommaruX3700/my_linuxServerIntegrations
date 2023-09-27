
import './SpecMonitor_App.css';

import Header from './js-modules/renderHeader.js'
import Temps from './js-modules/renderTemps.js'
import Performance from './js-modules/renderPerformance.js'
import Network from './js-modules/renderNetwork.js'
import Infos from './js-modules/renderInfos.js'

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">

      <Header/>

      <div class="divider"></div>
      
      <Temps/>
      <Performance/>
      <Network/>
      <Infos/>
      
    </div>
  );
}

export default SpecMonitorApp;

        