const hre = require('hardhat')

async function main() {
  const Greeter = await hre.ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy('Hello, world!')
  await greeter.deployed()
  console.log(`Deployed Greeter.sol at ${greeter.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
