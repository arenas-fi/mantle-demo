import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const Implementation = await ethers.getContractFactory(
    "CreditDelegationVault"
  );
  const impl = await Implementation.deploy();
  await impl.deployed();

  const CDVFactory = await ethers.getContractFactory(
    "CreditDelegationVaultFactory"
  );
  const cdvFactory = await CDVFactory.deploy(
    impl.address,
    // Atomica Risk Pool Controller on Sepolia
    // atomicaRpc
  );
  await cdvFactory.deployed();

  console.log(
    `Implementation deployed to ${impl.address} and CDVFactory deployed to ${cdvFactory.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
