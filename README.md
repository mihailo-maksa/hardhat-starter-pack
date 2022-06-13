# Hardhat Starter Pack

Pre-configured hardhat project with sample contract, test & deployment script, ideal for those who want to bootstrap their projects in a quick & efficient way.

**Try running some of the following tasks:**

```shell
npx hardhat accounts
npx hardhat balance --account 0x_address
npx hardhat clean
npx hardhat compile
npx hardhat console
npx hardhat coverage
npx hardhat help
npx hardhat node
npx hardhat node --fork RPC_URL (fork of the mainnet or testnet)
npx hardhat run scripts/contract_name.deploy.js --network network_name
npx hardhat test test/contract_name.test.js
npx hardhat verify contract_address --network network_name
```

**Automatically execute tests on file change:**

```shell
nodemon --watch test/contract_name.test.js --exec "npx hardhat test"
```
