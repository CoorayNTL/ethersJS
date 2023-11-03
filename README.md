# ethersJS

***Ethers.js is a compact library designed to enable developers to interact with the Ethereum blockchain***. Since its inception, the Ethers JavaScript library has provided features that permit developers to enhance their development.<br>

Available to use with JavaScript and TypeScript,<br> this tiny 284 kb (uncompressed) library provides classes that structure the Application Programming Interface (API) and serve as abstractions for specific components that interact with the blockchain.<br> This includes three important concepts:
<br><br>
**Provider** - a node provider that grants read and write access to the blockchain.<br>
**Signer** - an Ethereum account that allows for transactions to be signed.<br>
**Contract** - an Ethers.js object that represents a specific deployed on-chain contract.<br>
Each class of the API plays a vital role in the overall functionality of Ethers.js, so let’s understand and break down how each one works.<br>

***[What is Ethers.js?](https://docs.alchemy.com/docs/what-is-ethers-js)***

***[Ethers.js Cheatsheet](https://www.testingchain.xyz/posts/cheatsheets/ethers-js)***<br><br><br>
![Ethersjs](https://github.com/CoorayNTL/ethersJS/assets/96631498/ebced0c9-9e8e-4251-97be-b59ff153868f)

## ERC-20 TOKEN STANDARD ***[Link](https://eips.ethereum.org/EIPS/eip-20)***

#### What is ERC-20?<br>
The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) as another Token.<br> For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.<br><br>
**Example functionalities ERC-20 provides:**<br>
* transfer tokens from one account to another<br>
* get the current token balance of an account<br>
* get the total supply of the token available on the network<br>
* whether an amount of token from an account can be spent by a third-party account<br><br>
##### Methods<be>
```
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)

```
br>
##### Events<br>
```
event Transfer(address indexed _from, address indexed _to, uint256 _value)<br>
event Approval(address indexed _owner, address indexed _spender, uint256 _value)<br>
```<br>
