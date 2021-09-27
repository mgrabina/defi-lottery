const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'couch buddy mixed betray there erosion zebra jungle battle man payment unaware loan evoke crush velvet random wealth stone shrimp banner jungle maple fade', 
    'https://ropsten.infura.io/v3/640fe7e8258f438abe306c1421b8412e',
    1
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    const contract = await new web3.eth.Contract(JSON.parse(interface), 
                                                "0xBD43Af44158a9CE58D8B8beb082d8bb2B6261dE0"); 
    const manager = await contract.methods.manager().call();
    
    console.log('Contract manager', manager);

    await contract.methods.enter().send({value: 200000001, gas: "1000000", gasPrice: '5000000000', from: accounts[0]});

};

deploy();
