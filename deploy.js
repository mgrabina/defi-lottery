const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "couch buddy mixed betray there erosion zebra jungle battle man payment unaware loan evoke crush velvet random wealth stone shrimp banner jungle maple fade",
  "https://ropsten.infura.io/v3/640fe7e8258f438abe306c1421b8412e"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", gasPrice: '5000000000', from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
