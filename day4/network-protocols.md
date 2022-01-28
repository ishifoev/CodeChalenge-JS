## Network Protocols


A network protocol is an established set of rules that determine how data is transmitted between different devices in the same network. Essentially, it allows connected devices to communicate with each other, regardless of any differences in their internal processes, structure or design.

**IP** Standard for the ***Internet Protocol***. This network protocol outlines how almost all machine to machine comunications should happen in the world. Other protocols like ***TCP**, ***UDP***, ***HTTP***
are build on top of IP


**TCP** Network protocol built top of the Internet Protocol(IP). Allowed for ordered reliable data delivery over the public internet by creating a connection.
TCP usually is implemented in the kernel, which exposes sockets to applications that they can use stream data through an open connections

***HTTP** HypperText Transfer protocol is very common protocol network protocol implemented on top of the TCP. Client makes HTTP requests and servers respond with response. 

Request typically have a following schema.
````
host: string(exmaple: algoexpert.io)
port: integer(example: 80 or 443)
method: string(example: GET, PUT, POST, DELETE, OPTIONS,or PATCH)
headers: pair list (example: "Content-Type": "application/json")
body: opaque sequence of bytes
````

Response typically have a following schema

````
status code: integer(example: 200, 401)
headers: pair list(example: "Content-Lenght":1238)
body: opaques sequence of bytes
````

**Client** A machine or process Data request from server.

**Server** A machine or process that provides data for client usually by listening for incoming network calls.

**IP Address** An address given to each machine connected to the public internet

* **127.0.0.1**  Your own local machine. Also refered as a **localhost**.
* **192.168.x.x** Your private network. For instance machine or all machine on your wi fi network with usually have **192.168** prefix.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/day4/network-protocols.jpg?raw=true"/>