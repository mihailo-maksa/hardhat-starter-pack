require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-web3')
require('dotenv').config()
require('solidity-coverage')
require('hardhat-gas-reporter')

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

task('balance', "Prints an account's ether balance")
  .addParam('account', 'The account to get the ether balance of')
  .setAction(async (taskArgs, hre) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account)
    const balance = await web3.eth.getBalance(account)
    console.log(`${web3.utils.fromWei(balance, 'ether')} ETH`)
    console.log({ balance })
  })

module.exports = {
  solidity: '0.8.4',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {},
    ethereum_mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    arbitrum_mainnet: {
      url: process.env.ARBITRUM_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    arbitrum_testnet: {
      url: process.env.ARBITRUM_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    optimism_mainnet: {
      url: process.env.OPTIMISM_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    optimism_testnet: {
      url: process.env.OPTIMISM_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    polygon_mainnet: {
      url: process.env.POLYGON_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
    polygon_mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_RESERVE],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: 'USD',
    gasPrice: 50, // in gwei
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
}
