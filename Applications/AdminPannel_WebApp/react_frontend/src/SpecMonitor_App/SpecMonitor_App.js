import logo from '../media/logo.svg';
import './SpecMonitor_App.css';

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
          <div class="monitor-field-value">123</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">GPU</div>
          <div class="monitor-field-value">123</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Ambient</div>
          <div class="monitor-field-value">123</div>
      </section>

      <p>Status & Performance</p>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">Power IN</div>
          <div class="monitor-field-value">123</div>
      </section>

      <section class="monitor-field pannelGlassContentBackground">
          <div class="monitor-field-label">CPU</div>
          <div class="monitor-field-value">123</div>
      </section>
      
    </div>
  );
}

export default SpecMonitorApp;

/*TODO: 
        - CPU name, cores and base speed
        - CPU utilization
        - CPU speed
        - n of process running
        - collassable process list (if possible)

        - RAM name, dimensions and speed
        - RAM utilization
        - Free RAM

        -Network interfaces currently up
        -sent packages
        -received packages
        -static IP
        -localhost name
        
        - If more than one disk is present, add info for each one of em, but evaluate how to do this
        - If present, add GPU infos
        */
        