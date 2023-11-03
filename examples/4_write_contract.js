const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '' // my account address 1
const account2 = '' // sender account address 2

const privateKey1 = '' // my key of account 1 basically metamask provoded key don't put in your real key(ETH availebele key) 
//don't use this private key any one catch owner passwaord 

const wallet = new ethers.Wallet(privateKey1, provider) //https://docs.ethers.org/v4/api-wallet.html


const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)", // this is the function we want to call , this tx happen one wallet to another wallet
];

const address = ''
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()