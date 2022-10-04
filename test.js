var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
const sinon = require('sinon');
var expect = require('chai').expect;

const getFunction = require('./app')

 describe('weatherAPI',  function () {
    it('getdatafromRedis  should return object',  async function () {
         result = await  getFunction.getdatafromRedis('delhi')
         //console.log("result at test-getdatafromRedis in a returntype object",result)
        assert.typeOf(result, 'object');
    })
    it('getdatafromRedis value is been checked',  async function () {
        result = await  getFunction.getdatafromRedis('delhi')
        let valueInResult=Object.values(result)
        //console.log("valueInResult at test-getdatafromRedis",valueInResult)
       assert.deepEqual(valueInResult[0], 305.2 );
   })

    it('getDatafromAPI should be called once',function(){
        var spy=sinon.spy( getFunction,"getDatafromAPI")    
        getFunction.getDatafromAPI('delhi')
        sinon.assert.calledOnce(spy)
       

    })

})



