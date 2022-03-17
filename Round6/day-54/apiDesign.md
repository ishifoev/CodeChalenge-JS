## API Design

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round6/day-64/apiDesign.PNG?raw=true"/>

**HTTP**
The HyperText Transfer Protocol is a very common network protocol implemented on top
of TCP. Clients make HTTP requests, and servers respond with a response.
Requests typically have the following schema:

`host: string (example: algoexpert.io)
port: integer (example: 80 or 443)
method: string (example: GET, PUT, POST, DELETE, OPTIONS or PATCH)
headers: pair list (example: "Content-Type" => "application/json")
body: opaque sequence of bytes
Responses typically have the following schema:
status code: integer (example: 200, 401)
headers: pair list (example: "Content-Length" => 1238)
body: opaque sequence of bytes`

**JSON**
A file format heavily used in APIs and configuration. Stands for JavaScript Object Notation.
Example:

````json
{
 "version": 1.0,
 "name": "AlgoExpert Configuration"
}
````

**YAML**
A file format mostly used in configuration. Example:
````yaml
version: 1.0
name: AlgoExpert Configuration
`````
**ACL**
Short for Access-Control List. This term is often used to refer to a permissioning model:
which users in a system can perform which operations. For instance, APIs often come with

**Pagination**
When a network request potentially warrants a really large response, the relevant API
might be designed to return only a single page of that response (i.e., a limited portion of
the response), accompanied by an identifier or token for the client to request the next
page if desired.
Pagination is often used when designing List endpoints. For instance, an endpoint to list
videos on the YouTube Trending page could return a huge list of videos. This wouldn't
perform very well on mobile devices due to the lower network speeds and simply wouldn't
be optimal, since most users will only ever scroll through the first ten or twenty videos. So,
the API could be designed to respond with only the first few videos of that list; in this case,
we would say that the API response is paginated.

**CRUD Operations**
Stands for Create, Read, Update, Delete Operations. These four operations often serve
as the bedrock of a functioning system and therefore find themselves at the core of many
APIs. The term CRUD is very likely to come up during an API-design interview.
