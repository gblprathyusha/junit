var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
const sinon = require('sinon');
var expect = require('chai').expect;

const getFunction = require('./app')

describe('weatherAPI', function () {
    it('getdatafromRedis  should return promise', function () {
        let result = getFunction.getdatafromRedis()
        assert.typeOf(result, 'promise');
    })

    it('getDatafromAPI should be called once',function(){
        var spy=sinon.spy( getFunction,"getDatafromAPI")    
        getFunction.getDatafromAPI('delhi')
        sinon.assert.calledOnce(spy)
       

    })

})



