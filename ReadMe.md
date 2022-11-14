# NPM Encryption
### MPOP Reverse II

#### Encrypt .encrypt(string_data, [encryption](#a))
***Sample Code***
``` NodeJS
const a = require("mpop-encryptions")

let data = a.encrypt("a", a.BINARY)
console.log(data)
```
#### Sample Output:
```JSON
{
	"data": "01100001 "
}
```
---

#### Decrypt .encrypt(encrypted_data, [encryption](#a))
***Sample Code***
``` NodeJS
const a = require("mpop-encryptions")

let data = a.encrypt("01100001", a.BINARY)
console.log(data)

```
#### Sample Output:
```JSON
{
	"data": "a "
}
```
---

#### Encryption Keys
<label id="a"></label>
* BINARY
* OCTAL
* DECIMAL
* HEX
* BASE64
* MORSECODE