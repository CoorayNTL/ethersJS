const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//ERC20 ABI https:
//https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)" //solidity event 
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    //contract.queryFilder is a function that takes in the event name and the block range
    const transferEvents = await contract.queryFilter('Transfer', block - 1, block) //https://docs.ethers.org/v5/api/contract/contract/ 
    
    console.log(transferEvents)
}

main()