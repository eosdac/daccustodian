var assert = require('assert');
var Eos = require('eosjs');

eos = Eos({
    keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',// private key
    httpEndpoint: 'http://127.0.0.1:8888',
    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
});

describe('Basic mocha test', function () {
    it('should return a number', function () {
        assert.equal("hellow".length, 6);
    });
});