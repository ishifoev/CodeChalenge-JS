### Replication And Sharding

A system's performance is often only as good as its database's; optimize the latter, and watch as the former improves in tandem!
On that note, in this video we'll examine how data redundancy and data partitioning techniques can be used to enhance a system's fault tolerance, throughput, and overall reliability.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round3/day-28/replication.PNG?raw=true"/>


**Replication**: The primary server node copies data onto secondary server nodes. This can help increase data availability and act as a backup, in case if the primary server fails.

**Sharding**: Handles horizontal scaling across servers using a shard key. This means that rather than copying data holistically, sharding copies pieces of the data (or “shards”) across multiple replica sets. These replica sets work together to utilize all of the data.
