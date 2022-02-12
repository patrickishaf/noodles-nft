const contract = require("../artifacts/contracts/Noodles.sol/Noodles.json");
require('dotenv').config();
const API_URL = process.env.API_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const { createAlchemyWeb3 } = require('@alc/alchemy-web3');
const web3 = createAlchemyWeb3(API_URL);


const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
