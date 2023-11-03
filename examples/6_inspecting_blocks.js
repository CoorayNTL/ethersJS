const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
    const block = await provider.getBlockNumber(); //get the block number of the latest block

    console.log(`\nBlock Number: ${block}\n`);

    const blockInfo = await provider.getBlock(block); //get the block info of the latest block

    console.log(blockInfo);

    //get the block with transactions
    const { transactions } = await provider.getBlockWithTransactions(block); //https://docs.ethers.org/v5/api/providers/provider/

    console.log(`\nLogging first transaction in block:\n`);
    console.log(transactions[0]);
};

main();
