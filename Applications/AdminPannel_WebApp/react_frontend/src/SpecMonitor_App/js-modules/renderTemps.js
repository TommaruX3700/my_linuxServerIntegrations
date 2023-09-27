/*
    Use this to render Temperature sections of the final HTML
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

function render () {
    return (
        <div>
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
        </div>
    );
}

export default render;