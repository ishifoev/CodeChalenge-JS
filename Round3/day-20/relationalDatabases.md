## Relational Databases

A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round3/day-20/relational_databases.PNG?raw=true"/>

**Databases** Database are programms that using disk or memory to do 2 core things; record data and query data. In general they are themselves servers that are long lived and interact with the rest of your application through network protocols with protocol on top of TCP or even HTTP.

Some Databases only keep record in memory and the users of such databases are aware the fact of those records may be lost forever if machine or process dies.

**Relation Database** A type of structured database in which data stored following in a tabular format often powerful quering using SQL.

**Non-Relational Database** In contrast with relational database(SQL databases) a type of database that is free imposed tabular like a structure. Non-relational databases are often refered to as NoSQL databases.

**SQL** Structure Query Language. Relational Databases can be used using a deritraive of SQL such as PostgresSQL in the case of Postgres.

**SQL Database** Any Database that supports SQL. This terms often used synonimously with "Relational Database" though in practice not every relational database supports SQL.

**NoSQL Database** Any Database that not SQL-compatible is called NoSQL.

**ACID Transaction** A type of transaction has four important properties:

- Atomicity: The operation that constitute the transaction will succeed or all fail. There is no in-between state.
- Consistency: The transaction can't bring database to an invalid state. After transaction is committed or rolled back the rules for each record still apply, and all furture transactions will see the effect of the transaction.
- Isolation: The execution of multiple transactions concurrently will have the same effect as if they had been executed sequentially.
- Durability Any committed transaction is written to non-volatile storage. It will be not undone by a crash, power loss, or network partition.

**Database Index** A special auxilary data structure allows your database to perform ceratin queries much faster. Indexes can typically only exist to reference structured data like a data stored in relational databases. In practice you create index an one or multiple columns in your database to greatly speed up read queries that you run often queries with downside of slighly longer writes to your database, since writes have to also take place in the relevant index.  
