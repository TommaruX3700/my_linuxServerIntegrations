Gestisce il traffico di rete dall'ISP ai dispositivi collegati, fa address reservation e distribuisce la rete wifi. (+ probabile routing ma controllare) 
 
---
### Configurazione attuale:
#### WAN: 
- **IPV4:** 192.168.8.2
- **Subnet:** 255.255.255.252 (/31) ( #net-devices-network )
- **Gateway:** 192.168.8.1
- **DNS Server:**
	- 8.8.8.8
	- 8.8.4.4
#### LAN:
- **IPV4:** 192.168.0.1
- **Subnet:** 255.255.255.0 (/24) ( #clients-network )
#### DHCP Server ON: 
- from 192.168.0.100 to 192.168.0.254
- **Address Reservation**:
	- [[p1 - VPN and manager]] ~ 192.168.0.201 
#### Forwarding: 
- **Virtual Server**: OFF (used to public on the internet services presents on my LAN, usefull for services bootcamp etc..)
- **Port Triggering**: OFF (used to open ports, give rules on 'em, like to grant a tunnel of communication for services etc, usefull for services bootcamp etc..)
- **DMZ:** OFF

- H_Guest cant access local network devices
- H_Guest clients are isolated from each others
- H_Guest grants connection only from 9:00AM to 22:00PM
---

Links to:
- [[p3 - PrinterPi]]
- [[p4 - SmartTv]]
- [[p5 - HomeAssistant]]
- [[p1 - VPN and manager]]
- [[Home ~ 2,4GHz]]
- [[Home ~ 5.0GHz]]
- [[Guest ~ 2.4GHz]]
