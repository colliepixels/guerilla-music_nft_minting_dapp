// Import the web3.js library
const Web3 = require('web3');

// Create a new instance of the web3.js library
const web3 = new Web3();

// Set the provider to your Ethereum node
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

// Load the contract ABI
const contractABI = require('./ContractABI.json');

// Get the contract address
const contractAddress = '0xd64303c8fce3254129ffd6854b01ae0241c07bfc';

// Get the contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Encode the constructor arguments in ABI format
const encodedArgs = contract.methods.myConstructor(123, 'hello').encodeABI();

// Deploy the contract with the encoded constructor arguments
contract.deploy({ data: contractABI, arguments: encodedArgs }).send({ from: '0x1234567890', gas: 4700000 }).then(function(newContractInstance) {
  console.log(newContractInstance.options.address);
});
