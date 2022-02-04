## Load Balancer 

Relentlessly distributing network requests across multiple servers, these digital traffic cops act as watchful guardians for your system, ensuring that it operates at peak performance day and night.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/day14/loadBalancer.PNG?raw=true"/>

**Load Balancer** A type of ***reverse proxy*** that distributes traffic accross the servers. Load Balancers can be found in many parts of the system, from the DNS layer all the way to the database layer.


**Server Selection Strategy** How load balancer chooses servers when distrubuting traffic amongst the servers. Commonly use the stragegies include round-robin, random selection, perfomance based selection(choosing the server with the best perfomance metrics like the fastest response time or at least amount of traffic) and IP based routing.

**Hot Spot** When distubuting accross set of the servers that workload might be spread unevenly. This happen even if your sharding key of your hasing function are suboptimal, or if your workload is naturally skewed: some servers will receive a lot more traffic than others, than creating hot spot.

**Nginx** Nginx is very popular webserver that often used ***reverse proxy*** and ***load balancer***