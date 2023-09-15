## Concept: 
---
Suite che permette di controllare costantemente una branch (es: production), recuperare le modifiche e asseconda del software che aumenta di versione, applicare procedure necessarie per eseguire l'update automatizzato delle soluzioni.

###### Lista dei software da mantenere aggiornati:
- Specific software (check Version file)
- local DBs (mantain updated)
- local DBs data update (encrypted traffic from and to main DB and this local one)
- common files to have
- check for overall software updates and do them

## NB:
---
- Aggiungere log 
- NECESSITA DI UNA PIPELINE CRIPTATA PER RACCOLTA DATI DA DB PRINCIPALE/ALTRI PC
- Aggiungere console di monitoraggio con pochi comandi 
- Gestire le soluzioni con un approccio di versioning uguale (stessa base)
- Avere un modo di inserie una "programmazione" da ssh, tramite file o simil script per impostare la procedura di aggiornamento delle diverse applicazioni (istruzioni per recuperare dal branch di dev i files, ordinarli ed effettuare su di essi le operazioni corrette (es: compilare etc.))

## Possibili approcci:
---
- utilizzare files di "configurazione", come dei .txt, .json (o formato mio) per ottenere svariate informazioni come percorso di installazione, che operazioni eseguire, etch, possibilmente CRIPTARE

## Links:
---
- KANBAN: [[Versioning Deployment Software - KANBAN]]

