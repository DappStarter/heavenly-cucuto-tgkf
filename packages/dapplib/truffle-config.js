require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain huge gloom produce bridge gaze'; 
let testAccounts = [
"0x0186c2244c8aa62b5012bf51752139971333c2f4601c7af79dddb575d1140650",
"0x38fcc9f5fab013b1768bbcb8973859f4b2850ee422d741f0cf32468b57271b55",
"0x9f3a489e1567ede92f411291ad9acfe8a640f83adf9137db29872b403a7ede21",
"0xc00f12d5b7a4cc4549e2f74f7171928fb977f6f8f6c633d75d42463c8683ae5c",
"0xb306fdd8c7252a8b7dd6b6af4361865c0c77b1e3d4ec0811ffa7da142482689a",
"0x140d404752983c490def7685019658c1603b32064826a4153eeda710c578b4fc",
"0x2e0039437ab745c30a32bd4026319c583704ce99a07101cd3540d615e770aed2",
"0xe212612d9eb97df7c1c82cc308e2f2a8ecab7a5b0cc6153685eae37d2a41e1ce",
"0x235ea31853b9b65ab6d8e9a3ebfa59363dd8abbb30d4f0eca00ff3b637e00414",
"0x3dcdc41b6e966f6f45f720dd063854a295aa6a85769b361db793547a398279d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

