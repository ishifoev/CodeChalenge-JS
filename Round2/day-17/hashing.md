## Hashing

**Hashing function** A function that makes specific data type(such a string or identifier) and outputs a number. Differents inputs may have the same output, but good hashing function attempts to minimize those hashing collisions which is equivalent to maximizing to uniformity.

**Load Balancer** A type of reverse proxy that distrubutes traffic across servers. Load balancers can be found in many part of the system from the DNS layer all the way to the database layer.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round2/day-17/Hashing.PNG?raw=true"/>

**Consistent Hashing** A type of hasing minimize the number of keys that need to remapped when a hash table get resized. It's often used by load balancers to distribute traffic to servers; it minimize the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down.

**Rendezvous Hashing** A type of hashing also coined ***highest random weight*** hashing. Allows for minimal re-destribution of mappings when a server goes down.

**SHA** Short for "Secure Hash Algoritms", the SHA is a collection of crypctographog hash functions used in the industry. These days, SHA-3 is a popular choice to use in system.