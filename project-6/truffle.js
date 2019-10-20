const HDWallet = require('truffle-hdwallet-provider');
const keys = require('./env.json');
const infuraKey = keys.apiKey;
const mnemonic = keys.wallet;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 9545,
      network_id: 20,
      accounts: 10,
      defaultEtherBalance: 100000
    },
    rinkeby: {
      provider: () => new HDWallet(
        mnemonic,
        `https://rinkeby.infura.io/v3/${infuraKey}`
      ),
      network_id: 4,
    },
  }
};
