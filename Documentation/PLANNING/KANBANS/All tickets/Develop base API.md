## 09/09/2023: 
Attualmente è stata implementeta una base di API che permette di effettuare GET request per recupereare info di debug e base, nonchè lettura della version del file e sistema rudimentale (da testare) di log.

Ora rimane da capire come permettere a Node.js di usare "imports": caricando lo script si ha questo errore: 
``` Shell
Uncaught:
SyntaxError: Cannot use import statement inside the Node.js REPL, alternatively use dynamic import
>
```

cercare di risolvere capendo come fare Dynamic import.

ChatGPT consiglia questo:
```bash
node --experimental-modules myModule.mjs
```
