/*
*
*
*       Complete the handler logic below
*       
*       
*/

const INVALID_NUM = "invalid number";
const INVALID_UNIT = "invalid unit";

const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

const unitLookup = switchcase({
    'gal': 'L',
    'L': 'gal',
    'lbs': 'Kg',
    'Kg': 'lbs',
    'mi': 'Km',
    'Km': 'mi'
  })(INVALID_UNIT)

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    //look for any alphabet character
    var regex = /[a-zA-Z]/g;
    
    result = input.substr(0, input.search(regex));
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    //look for any alphabet character
    var regex = /[a-zA-Z]/g;
    
    result = input.substr(input.search(regex));
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    result = unitLookup(initUnit);
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case "mi":
        result = "miles";
        break;
      case "gal":
        result ="gallons";
        break;
      case "L":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "Kg":
        result = "kilograms";
        break;
      case "Km":
        result = "kilometres";
        break;
      default:
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if(isNaN(initNum)) return INVALID_NUM;
    
    switch(initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = INVALID_UNIT; 
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if (returnNum == INVALID_NUM && returnUnit == INVALID_UNIT) result = "invalid number and unit";
    else if (returnNum == INVALID_NUM) result = returnNum;
    else if (returnUnit == INVALID_UNIT) result = returnNum;
    else {
      result = `initNum: ${initNum}, initUnit: '${initUnit}', returnNum: ${returnNum}, returnUnit: '${returnUnit}', string: '${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}'`; 
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
