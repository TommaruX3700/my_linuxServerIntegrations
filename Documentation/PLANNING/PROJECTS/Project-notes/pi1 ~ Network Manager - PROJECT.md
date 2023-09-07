Questo dispositivo serve a gestire il traffico di rete tra, verso e dai diversi server e servizi presenti sulla rete.
#### Servizi:
- [ ] **dhcp for server-lan**  (/etc/dhcp/dhcpd.conf):  for other servers
- [ ] **OpenVPN (by PiVPN)**: to access services on the network and files by Internet, still has to grant internet connection by connected clients besides local services access
- [ ]  **Samba** (SMB, for communication with shared folders on the network and clients)
- [ ]  **Privoxy (Proxy server):** to filter connections from and to which hosts
- [ ]  **DNSMasq (DNS server):** to answer DNS requests and translate to local network IPs

Custom code:
- [ ] **Server_surveillance** #software-projects 

---
### Configurazione attuale:
- hostname: piNetManager
- address (to configure in dns): netManager.homePI.com
- user: tomx37
- pw: pi8462n3t

#### WIFI net: #clients-network 
ip (static): 192.168.0.201/24

#### LAN: #servers-network
ip (static): 192.168.1.30/24

---

Links: 
- [[pi1 ~ Network Manager - KANBAN]]

 