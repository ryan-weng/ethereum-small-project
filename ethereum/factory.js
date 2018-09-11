import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE263655AA443Ad6Da2fAcE5E26106E10ba7D335E'
);

export default instance;
