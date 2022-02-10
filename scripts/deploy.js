const { ethers } = require("hardhat");

async function main() {
    // Grab the contract factory
    const Noodles = await ethers.getContractFactory("Noodles");

    // Start deployment, returning a promise that resolves to a contract object
    const noodles = await Noodles.deploy();
    console.log('CONTRACT NOODLES HAS BEEN DEPLOYED TO THE ADDRESS: ', noodles.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});