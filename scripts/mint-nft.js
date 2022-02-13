require('dotenv').config();
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');

const web3 = createAlchemyWeb3(process.env.API_URL);
const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const contractJSON = require("../artifacts/contracts/Noodles.sol/Noodles.json");
const nftContract = new web3.eth.Contract(contractJSON.abi, contractAddress);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(publicKey, 'latest');

    const transactionObject = {
        'from': publicKey,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 2999999987,
        'data': nftContract.methods.mintNFT(publicKey, tokenURI).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(transactionObject, privateKey);
    const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('YOUR TRANSACTION RECEIPT IS:::::::::', JSON.stringify(transactionReceipt));
}

async function mintNFTs(tokenURI, numberOfNFTs=1) {
    for (let i = 1 ; i <= numberOfNFTs ; i++) {
        await mintNFT(tokenURI);
    }
}

mintNFTs('https://gateway.pinata.cloud/ipfs/Qmb1zavAocAzu6bJSJwWmxXbvoTnciS9Bmqty4PTAqV6Tp');
