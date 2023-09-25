## Concept: 
---
Sviluppare una API in grado di soddisfare richieste di modifica al DB hostato sul raspy di DB.

Questo serve per tutte quelle operazioni di: 
- registrazione dati (log etc)
- lettura delle psw salvate, chiavi di criptografia oppure semplicemente login e autenticazione di applicazioni sviluppate da me e che scambiano dati sensibili tra dispositivi
	- esempio: richiesta di chiave di criptografia giornaliera, il dispositivo deve effettuare una richiesta http alla api con le credenziali impostate (criptografate a loro volta).
	- Se credenziali giuste, chiave di criptografia giornaliera viene data in risposta
	- Altrimenti errore.
- altri usi di sviluppo


## NB:
---
- it is recommended to use SSH key pairs for authentication instead of passwords for security reasons;
- 

## Possibili approcci:
---


### Front-end:
--- 

## Links:
---
- KANBAN: [[myRaspyDatabaseAPI - KANBAN]]

