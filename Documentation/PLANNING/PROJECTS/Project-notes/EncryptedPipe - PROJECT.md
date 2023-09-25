## Concept:
---
Avere un protocollo di comunicazione che mandi richieste HTTP criptate nella rete locale, per permettere scambio di informazioni e dati sensibili.

NON tutte le HTTP request vanno criptate: è necessario criptare solo le HTTP request usate da codice.

Posso scegliere di criptare solo le request, lato client e lato server.

RICHIESTE e RISPOSTE vanno criptate asseconda delle regole ben precise.

## RECUPERO CHIAVI:
---

![[Pasted image 20230925183332.png]]
![[Pasted image 20230925183343.png]]

#### Quando si innesca il "cambio chiave"?
- ad un det. orario
- dopo un det. evento
- quando il Server manda una "handshake" richiedendo informazioni ai client connessi e ricevendo una risposta valida

## USO CLASSICO
---
![[Pasted image 20230925183354.png]]



## Possibili approcci:
---


## Links:
---

