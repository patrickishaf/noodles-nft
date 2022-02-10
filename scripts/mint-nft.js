const contract = require("../artifacts/contracts/Noodles.sol/Noodles.json");
require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require('@alc/alchemy-web3');
const web3 = createAlchemyWeb3(API_URL);



