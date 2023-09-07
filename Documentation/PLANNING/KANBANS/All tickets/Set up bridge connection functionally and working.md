TODO:
	find out how to let certain clients from the network to connect to the other PIs, passing thought this one.

---
## LOGS:

##### 04/09/2023 7:20PM
Funziona tutto: ora sono in grado di pingare dal mio client pc tutti i servers.

##### 04/09/2023 6:42PM:
Ora è possibile per tutti i server comunicare tra di loro ed accedere a internet, tuttavia non è possibile eseguire un ping o accedere da gli altri client della rete alla rete locale dei servers (es: per accedere da un client della rete locale ad un web-service su server data o vm)

#### 04/09/2023 9:00AM:
Ho modificato la routing table, ora è: 
```shell
default via 192.168.0.1 dev wlan0
default via 192.168.0.1 dev wlan0 proto dhcp src 192.168.0.201 metric 303
169.254.0.0/16 dev eth0 scope link src 169.254.39.195 metric 202
192.168.0.0/24 dev wlan0 proto dhcp scope link src 192.168.0.201 metric 303
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.30
```
Ora il device riesce a pingare: 
- 8.8.8.8
- 192.168.0.1
- 192.168.1.1

Mi considero soddisfatto ma è da testare che gli altri dispositivi siano pingabili da qui e che riescano a passare da questo dispositivo a internet.

#### 03/09/2023:
- eth0 and wlan0 are set up correctly but still cant ping 8.8.8.8 (access internet) and cant ping other devices on the server-network
- TODO: resolve this
- TODO: setup static eth0 IPs on other devices
- if i cant resolve, reset this PI and repeat procedure.
- try with the tutorial
---
### Docs:

##### Possible tutorial:
	https://www.youtube.com/watch?v=h0sR7tKuI-U&t=338s 

##### ChatGPT, procedure1:
To enable communication between devices on different networks (wlan0 and eth0) on your Raspberry Pi, you'll need to set up routing and potentially configure Network Address Translation (NAT) if you want devices on one network to access the internet through the Raspberry Pi's wlan0 connection. Here's a step-by-step guide:

1. **Enable IP Forwarding:**
   IP forwarding should be enabled on your Raspberry Pi so that it can act as a router between the two networks. Edit the sysctl.conf file:

   ```bash
   sudo nano /etc/sysctl.conf
   ```

   Uncomment or add the following line to enable IP forwarding:

   ```bash
   net.ipv4.ip_forward=1
   ```

   Save and exit the file, then apply the changes:

   ```bash
   sudo sysctl -p
   ```

2. **Configure Network Interfaces:**
   You need to ensure that your wlan0 and eth0 interfaces are properly configured with IP addresses. You can do this through `/etc/network/interfaces` or your distribution's network configuration tools.

   Example `/etc/network/interfaces` configuration for static IP addresses:

   ```bash
   auto wlan0
   iface wlan0 inet static
       address 192.168.1.1
       netmask 255.255.255.0
       wireless-mode managed
       wireless-essid YourSSID
       wireless-key YourWiFiPassword

   auto eth0
   iface eth0 inet static
       address 192.168.2.1
       netmask 255.255.255.0
   ```

   Adjust the IP addresses and other settings as needed for your network.

3. **Configure Routing:**
   You'll need to add routing rules to ensure that traffic can flow between the two networks. Use the `iptables` command to set up the necessary rules.

   To allow devices on eth0 to access the internet through wlan0 (NAT), use this command:

   ```bash
   sudo iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE
   ```

   To enable routing between wlan0 and eth0:

   ```bash
   sudo iptables -A FORWARD -i wlan0 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
   sudo iptables -A FORWARD -i eth0 -o wlan0 -j ACCEPT
   ```

   Save these rules so they persist across reboots:

   ```bash
   sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
   ```

   Add the following line to `/etc/rc.local` to restore the rules at startup:

   ```bash
   iptables-restore < /etc/iptables.ipv4.nat
   ```

4. **DHCP Server (Optional):**
   If you want to assign IP addresses dynamically to devices on your eth0 network, you can set up a DHCP server like `dnsmasq` or `isc-dhcp-server`. Configure the DHCP server to provide IP addresses on the eth0 network and set the Raspberry Pi as the default gateway.

5. **DNS Configuration (Optional):**
   Ensure that devices on both networks can resolve DNS properly. You can configure your Raspberry Pi to act as a DNS server and specify its IP address as the DNS server for devices on both networks.

6. **Firewall Rules (Optional):**
   Configure any additional firewall rules as needed to control traffic between the networks.

7. **Reboot:**
   Finally, reboot your Raspberry Pi to apply the changes:

   ```bash
   sudo reboot
   ```

After completing these steps, devices on both the wlan0 and eth0 networks should be able to communicate with each other, and devices on the eth0 network should be able to access the internet through the Raspberry Pi's wlan0 connection.

--- 

##### ChatGPT, procedure 2:
To set up your Raspberry Pi to connect to both the 192.168.0.0 network via wlan0 and the 192.168.1.0 network via eth0, while allowing devices on the 192.168.1.0 network to access devices on the 192.168.0.0 network through the Raspberry Pi, you'll need to configure some network settings and enable IP forwarding. Here's a step-by-step guide:

1. **Hardware Connections**:
   - Connect your Raspberry Pi to your Wi-Fi network using the wlan0 interface.
   - Connect your Raspberry Pi to the 192.168.1.0 network using the eth0 interface.

2. **Configure WLAN0 (Wi-Fi) Interface**:
   You'll need to set up your Raspberry Pi to connect to the 192.168.0.0 network via the wlan0 interface. This typically involves configuring Wi-Fi settings. You can do this using the `wpa_supplicant.conf` file:

   ```shell
   sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
   ```

   Add the following lines to the file, replacing `<YourSSID>` and `<YourPassword>` with your actual Wi-Fi network SSID and password:

   ```shell
   network={
       ssid="<YourSSID>"
       psk="<YourPassword>"
   }
   ```

   Save the file and exit.

3. **Static IP Address for ETH0**:
   Configure a static IP address for the eth0 interface to make it a part of the 192.168.1.0 network. Edit the `/etc/dhcpcd.conf` file:

   ```shell
   sudo nano /etc/dhcpcd.conf
   ```

   Add the following lines to the end of the file:

   ```shell
   interface eth0
   static ip_address=192.168.1.X/24
   static routers=192.168.1.1
   ```

   Replace `X` with an available IP address within the 192.168.1.0 network range. Save the file and exit.

4. **Enable IP Forwarding**:
   IP forwarding must be enabled on the Raspberry Pi to allow traffic to pass between the wlan0 (192.168.0.0) and eth0 (192.168.1.0) networks. Edit the `/etc/sysctl.conf` file:

   ```shell
   sudo nano /etc/sysctl.conf
   ```

   Uncomment or add the following line to enable IP forwarding:

   ```shell
   net.ipv4.ip_forward=1
   ```

   Save the file and exit.

5. **Configure NAT (Network Address Translation)**:
   To enable devices on the 192.168.1.0 network to access devices on the 192.168.0.0 network through the Raspberry Pi, you can set up NAT using `iptables`. Run the following commands:

   ```shell
   sudo iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE
   sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT
   sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT
   ```

   To make these rules persistent across reboots, save them:

   ```shell
   sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
   ```

   Then, add the following line to `/etc/rc.local` just above the `exit 0` line:

   ```shell
   iptables-restore < /etc/iptables.ipv4.nat
   ```

   Save the file and exit.

6. **Reboot**:
   Reboot your Raspberry Pi to apply the changes:

   ```shell
   sudo reboot
   ```

Your Raspberry Pi should now be set up to connect to both networks and allow devices on the 192.168.1.0 network to access the 192.168.0.0 network through the Raspberry Pi. Make sure that devices on the 192.168.0.0 network are configured to use the Raspberry Pi as their gateway (192.168.0.X should be set as the default gateway).


---
