### Leader Election

***Leader Election** Citizens in a society typically elect a leader by voting for their preferred candidate. But how do servers in a distributed system choose a master node? Via algorithms of course!
This form of algorithmic democracy is known as "leader election", though we personally think "algorithmocracy" sounds way cooler
Leader election is a common pattern in distributed systems because it has some significant advantages: A single leader makes systems easier for humans to think about. 
It puts all the concurrency in the system into a single place, reduces partial failure modes, and adds a single place to look for logs and metrics.

**consensus algorithm** A consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed processes or systems. Consensus algorithms are designed to achieve reliability in a network involving multiple unreliable nodes. ... 
As a result, consensus algorithms must be fault-tolerant.
