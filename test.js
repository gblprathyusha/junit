var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
const sinon = require('sinon');
var expect = require('chai').expect;
//var mocha = require('mocha')
//var describe = mocha.describe
const getFunction = require('./app')

describe('weatherAPI', function () {
    it('getdatafromRedis  should return promise', function () {
        let result = getFunction.getdatafromRedis()
       // console.log("getdatafromRedis function returns ", result)
        assert.typeOf(result, 'promise');
    })

    it('getDatafromAPI should be called once',function(){
       //getFunction.getDatafromAPI('tenali',{message:"got the city name"})
        var spy=sinon.spy( getFunction,"getDatafromAPI")    
        getFunction.getDatafromAPI()
        sinon.assert.calledOnce(spy)
       

    })

})



