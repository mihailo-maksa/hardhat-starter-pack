const hre = require('hardhat')

async function main() {
  const SimpleStorage = await hre.ethers.getContractFactory('SimpleStorage')
  const simpleStorage = await SimpleStorage.deploy('Hello', 0)
  await simpleStorage.deployed()
  console.log(`Deployed SimpleStorage.sol at ${simpleStorage.address}`)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
