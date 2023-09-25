## IDEA: 

### FrontEnd:
React: 
- pagina che si apre ad un certo indirizzo specifico
- richiesto login
- pagina con parametri generali riguardo allo stato fisico del server (temperature, periferiche collegate) e uso risorse (memoria e applicazioni aperte o che usano più di un tot)
- nella stessa pagina, bottoni che permettono esecuzione e lancio di comandi ssh (passando in caso anche dei parametri) per esecuzione di script e programmi vari ed eventuali, oppure automatizzazioni etc
- pagina per programmare la pagina principale, programmare gli scripts e posizione degli elementi.
- richiede tramite http requests CRIPTATE informazioni alle BACKEND correlate
- POLLING: per aggiornare ogni tot secondi i valori sulla pagina (in alternativa guardare come effettuare WebSocket o SSE (server-sent Events))
``` js
// Example using setInterval for polling
import React, { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setValue(data.value); // Update the state with the new value
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 10000); // Poll every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
}

export default App;

```


### BackEnd
Node.js: 
- comunica con il DB di rete per info come controllo psw di login alla pagina, recupero altre informazioni, etc
- gestisce http requests
- lancia comandi tramite ssh
- lancia script tramite pulsanti 
- è programmabile (interfaccia con pulsantoni per automatizzare il lancio di script etc, per fase di testing)
- MongoDB: database per raccogliere le informazioni dalle quali poi il backend potrà andare a recupere per risolvere le richieste HTTP

