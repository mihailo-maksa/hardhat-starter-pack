require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  solidity: '0.8.4',
  networks: {
    arbitrum: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}
