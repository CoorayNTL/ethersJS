const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '' // my account address 1
const account2 = '' // sender account address 2

const privateKey1 = '' // my key of account 1 basically metamask provoded key don't put in your real key(ETH availebele key) 
//don't use this private key any one catch owner passwaord 

const wallet = new ethers.Wallet(privateKey1, provider) //https://docs.ethers.org/v4/api-wallet.html

const main = async () => {

   //showing balance before the transection
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    // send 0.025 ETH from account 1 to account 2
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait() // this is wait for the transection to be mined beacuse it happent with blockchains so it take some time
    console.log(tx) // this is the transection object

    //showing balance after the transection
    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()