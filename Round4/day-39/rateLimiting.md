## Rate Limiting

**Rate limiting** is generally put in place as a defensive measure for services. Shared services need to protect themselves from excessive use—whether intended or unintended—to maintain service availability. Even highly scalable systems should have 
limits on consumption at some level. For the system to perform well, clients must also be designed with rate limiting in mind to reduce the chances of cascading 
failure. Rate limiting on both the client side and the server side is crucial for maximizing throughput and minimizing end-to-end latency across large distributed systems.

The most common reason for rate limiting is to improve the availability of API-based services by avoiding resource starvation. Many load-based denial-of-service incidents in large systems are unintentional—caused by errors in software or configurations 
in some other part of the system—not malicious attacks (such as network-based distributed denial of service attacks).

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round4/day-39/rateLimiting.PNG?raw=true"/>