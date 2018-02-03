import Web3 from 'web3'

var web3;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log(web3)
web3.eth.getAccounts().then(console.log)

export default () => (
  <div>
    <p>This is the about page</p>
  </div>
)
