const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcBatchProvider(
    `https://mainnet.infura.io/v3/c847c0b8b34f46c2bb40ccb459ecf687`
);

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(
        `\nETH Balance of ${address} --> ${ethers.utils.formatEther(
            balance
        )} ETH\n`
    );
};

main();
