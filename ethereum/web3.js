import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and user has metamask running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the nextjs server or the user is not running metamask.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/8db51cca84f04927b2bed5606195cd7b'
  );
  web3 = new Web3(provider);
}

export default web3;
