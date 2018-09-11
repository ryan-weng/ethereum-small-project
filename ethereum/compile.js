const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// clear the delete folder (just to make sure if we clear the old one)
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// read the campaign contract file and get the contract abi
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// make build path
fs.ensureDirSync(buildPath);

// put the contract abi into the build path
// output will return abi of CampaignFactory and Campaign
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract+'.json'),
    output[contract]
  );
}
