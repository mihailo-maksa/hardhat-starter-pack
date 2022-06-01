# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

**Try running some of the following tasks:**

```shell
npx hardhat compile
npx hardhat clean
npx hardhat node
npx hardhat node --fork RPC_URL
npx hardhat run scripts/contract_name.deploy.js --network network_name
npx hardhat test test/contract_name.test.js
npx hardhat verify contract_address --network network_name
```

**Automatically execute tests on file change:**

```shell
nodemon --watch test/greeter.test.js --exec "hpx hardhat test"
```
