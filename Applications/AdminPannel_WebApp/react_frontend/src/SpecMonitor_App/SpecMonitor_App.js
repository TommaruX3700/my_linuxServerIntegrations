import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

/*TODO:
  put these functions in external files:
  - one for cryptografy
  - one for http requests (choose how to handle requests)
  - one for SPEC_Monitor data handling (info packages handling wrapping and unwrapping, when to do requests, how to the page based on results,
    add dynamically html code)
  - one for General Operations data handling (same as before)
   */

let cpuTemperature = (unit) => {
  let temp = 0.0;
  
  if ( unit === "c") 
  {
    //http request for temp in Celsius
    return ( String(temp) + " C"); 
  } 
  else
  {
    //http request for temp in fahrenheit
    return ( String(temp) + " F"); 
  }

}; 

function SpecMonitorApp() {
  return (
    <div className="pannelGlassBackground SpecMonitorApp">

      <section class= "monitor-header">
        <img src={logo} class="monitor-header-icon testLogo" alt="logo"/>
        <p class="monitor-header-text">Specs Monitor</p>
      </section>

      <div class="divider"></div>
      
      <p>Temps</p>

      <select id="tempComboBox" name="temps">
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
      </select>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">CPU</div>
          <div class="monitor-field-value">{cpuTemperature()}</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Mobo</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">GPU</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Ambient</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <p>Status & Performance</p>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Power IN</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">CPU details</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">CPU %</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">CPU Speed</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Process n.</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Process List</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>
      
      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">RAM details</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Used RAM</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Free RAM</div>
          <div class="monitor-field-value">[TODO]</div>
      </section>

      {/*
        TODO: 
          - add here function to SPEC_Monitor to add all other kind of infos based upon the received json.
      */}

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
        