const makeConstant = function(constant){
  return function(text){
    return constant;
  };
}

const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(oldDelta){
  let currentDelta=0;
  let newDelta=oldDelta;
  return function(delta=0){
    oldDelta = newDelta;
    currentDelta = delta;
    newDelta = delta+oldDelta;
    return deltaTracker={old:oldDelta,delta:currentDelta,new:newDelta};
  }
}


const makeFiboGenerator = function(number1=1,number2=0){
  let fiboTracker = {fibo:0,first:Math.min(number1,number2),second:Math.max(number1,number2)};
  return function(){
    fiboTracker.fibo = fiboTracker.first;
    fiboTracker.first =fiboTracker.second;
    fiboTracker.second = fiboTracker.fibo+fiboTracker.first;
    return fiboTracker.fibo;
  }
}


const identity = function(element){
  return element;
}

const makeCycler = function(record){
  let newRecord = record.map(identity);
  let number = -1;
  let length = newRecord.length;
  return function(){
    number++;
    return newRecord[number%length];
  }
}

const curry = function(functions,input1){
  return function(input2,input3){
    return functions(input1,input2,input3);
  }
}

const compose = function(outerfunction,innerfunction){
  return function(input1,input2){
    return outerfunction(innerfunction(input1,input2));
  }
}


exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
