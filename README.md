# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

**Try running some of the following tasks:**

```shell
npx hardhat compile
npx hardhat clean
npx hardhat node
npx hardhat run scripts/greeter.deploy.js --network arbitrum
npx hardhat test test/greeter.test.js
```

**Automatically execute tests on file change:**

```shell
nodemon --watch test/greeter.test.js --exec "hpx hardhat test"
```
