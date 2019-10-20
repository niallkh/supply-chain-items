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
    }
  }
};
