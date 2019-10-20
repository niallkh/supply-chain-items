const HDWallet = require('truffle-hdwallet-provider');
const keys = require('./env.json');
const infuraKey = keys.apiKey;
const mnemonic = keys.wallet;

// address: 0x5C3554E31DA34091ECcC85f2C616b8371BC687AD
// tx: 0xc7130313f9c946d8185af0cf08b3717f4446fab0f782190686be17ea75e06bb5

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
