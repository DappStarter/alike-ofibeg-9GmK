require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski street rebel pitch erosion grunt light army gaze'; 
let testAccounts = [
"0x818e17b8a9187dd0e00e89d699b077c35442ffedbd15a87382e8207acb62ad20",
"0x15083b18741cf25cf6c3782da67b7414f0abd35e91098dc5686218b207597c24",
"0x7d948f8dd5ea03d49f92fabdcc5b0030bb503b2620660316f6940bcbb5616bb0",
"0x9ce7830704da83d35c7e4ec1f7c42134b9b427b2e11ddec73b339c1b9cc162f7",
"0x07a98d27a0b3ff9ed7a4342ba0ce44a3753e661ab51a8754110950912119dbc2",
"0x4445b00363114f6fa74a90e598a9b0bbaa0e8905f6c5844767964249a8fba52d",
"0x5219ccdea1dcd0612380b86d3a2ef45219c02c54f2f63464a62d5ca7391004ca",
"0xcdbf07fe6a6ba3abc47cf3853c50236ee40893ac1523916cc6b5c05646257c12",
"0xad65ccfec009418007c035554b482aa9b9fc7597d5c4b7eb1aa11eb94f667dfc",
"0x11e50d6b0613c7ba48e6c5ca87ea57e37cd3d8a7afc78be9dd09d007b97394e0"
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

