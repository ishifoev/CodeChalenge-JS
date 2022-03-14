## Security and HTTPS

While network security is of critical importance to virtually any system, it's beyond the scope of most system design interviews.
That being said, having even a cursory understanding of a few key concepts could very well materialize into the edge you need to ace your interview and secure—pun perhaps intended—a job offer.

<img src="https://github.com/ishifoev/CodeChalenge-JS/blob/main/Round6/day-51/https.PNG?raw=true"/>

**Man-In-The-Middle Attack**
An attack in which the attacker intercepts a line of communication that is thought to be
private by its two communicating parties.
If a malicious actor intercepted and mutated an IP packet on its way from a client to a
server, that would be a man-in-the-middle attack.
MITM attacks are the primary threat that encryption and HTTPS aim to defend against.

**Symmetric Encryption**
A type of encryption that relies on only a single key to both encrypt and decrypt data. The
key must be known to all parties involved in communication and must therefore typically
be shared between the parties at one point or another.
Symmetric-key algorithms tend to be faster than their asymmetric counterparts.
The most widely used symmetric-key algorithms are part of the Advanced Encryption
Standard (AES).


**Asymmetric Encryption**
Also known as public-key encryption, asymmetric encryption relies on two keys—a public
key and a private key—to encrypt and decrypt data. The keys are generated using
cryptographic algorithms and are mathematically connected such that data encrypted with
the public key can only be decrypted with the private key.
While the private key must be kept secure to maintain the fidelity of this encryption
paradigm, the public key can be openly shared.
Asymmetric-key algorithms tend to be slower than their symmetric counterparts.

**AES**
Stands for Advanced Encryption Standard. AES is a widely used encryption standard that
has three symmetric-key algorithms (AES-128, AES-192, and AES-256).
