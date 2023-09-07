## Concept: 
---
Script in python (o rust) per andare a controllare parametri principali dei server linux specificati, via connessioni ssh, recupera dal sistema log, files, lancia comandi e restituisce gli outputs in un insieme ordinato e sensato.
Più avanti sviluppare anche un'interfaccia


## NB:
---
- it is recommended to use SSH key pairs for authentication instead of passwords for security reasons;
- 

## Possibili approcci:
---
### Back-end:
#### 1. python: paramiko

``` python
import paramiko 

# Set up SSH client
ssh = paramiko.SSHClient() ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy()) 

# Connect to remote machine 
ssh.connect('remote_host_name_or_ip', username='remote_username', password='remote_password') 

# Execute command on remote machine 
stdin, stdout, stderr = ssh.exec_command('command_to_execute') 

# Print output of command 
print(stdout.read().decode()) 

# Close SSH connection 
ssh.close()
```

#### 2. rust

``` Rust
use ssh2::{Session, Channel};
use std::io::prelude::*; 

fn main() { 
// Connect to remote machine 	
	let tcp = std::net::TcpStream::connect("remote_host_name_or_ip:22").unwrap(); 
	let mut sess = Session::new().unwrap();
	sess.set_tcp_stream(tcp);
	sess.handshake().unwrap();

// Authenticate SSH session 
	sess.userauth_password("remote_username", "remote_password").unwrap();

// Open SSH channel 
	let mut channel = sess.channel_session().unwrap(); 

// Execute command on remote machine 
	channel.exec("command_to_execute").unwrap(); 

// Read output of command 
	let mut output = String::new();
	channel.read_to_string(&mut output).unwrap();
	println!("{}", output);

// Close SSH channel and session 
	channel.close().unwrap();
	sess.disconnect(None).unwrap(); 
}
```

#### 3. create a RESTful API with Python and Flask
Yes, it is possible to implement a Dart and Flutter-based frontend on a Python backend code. One way to achieve this is by creating a RESTful API using Python and Flask, and then using HTTP requests to communicate between the frontend and backend. Here are the general steps to implement a Dart and Flutter-based frontend on a Python backend code:

1. Create a RESTful API using Python and Flask.
2. Define the endpoints for the API, such as `/login`, `/register`, `/get_data`, etc.
3. Implement the logic for each endpoint, such as querying a database or performing some computation.
4. Test the API using a tool such as Postman to ensure that it is working correctly.
5. In your Flutter code, use the `http` package to make HTTP requests to the API endpoints.
6. Parse the response from the API and use it to update the state of your Flutter app.

Here is an example of how to make an HTTP request to a Python Flask API endpoint in Flutter:

```dart
import 'package:http/http.dart' as http;

Future<void> fetchData() async {
  final response = await http.get(Uri.parse('http://localhost:5000/get_data'));
  if (response.statusCode == 200) {
    // Parse the response and update the state of your app
  } else {
    throw Exception('Failed to fetch data');
  }
}
```

Note that you will need to replace `http://localhost:5000/get_data` with the appropriate URL for your Python Flask API endpoint. Also, make sure that your Python Flask API is running and accessible from the network. Additionally, it is recommended to use secure communication protocols such as HTTPS to protect sensitive data.


### Front-end:
--- 
#### 1. Dart + Flutter
#### 2. Qt

## Links:
---
- KANBAN: [[Server_surveillance - KANBAN]]

