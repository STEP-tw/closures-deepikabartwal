const makeConstant = function(input){
  return function(text){
    return input;
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
  return function(delta){
    if(delta){
      oldDelta = newDelta;
      currentDelta = delta;
      newDelta = delta+oldDelta;
      return deltaTracker={old:oldDelta,delta:currentDelta,new:newDelta};
    }
    return deltaTracker={old:oldDelta,delta:currentDelta,new:newDelta};
  }
}


const makeFiboGenerator = function(number1,number2){
  let fiboTracker = {fibo:0,first:number1,second:number2};
  if(!number2){
    fiboTracker = {fibo:0,first:0,second:number1};
  }
  if(!number1){
    fiboTracker = {fibo:0,first:0,second:1};
  }
  return function(){
    fiboTracker.fibo = fiboTracker.first;
    fiboTracker.first =fiboTracker.second;
    fiboTracker.second = fiboTracker.fibo+fiboTracker.first;
    return fiboTracker.fibo;
  }
}


const returnElement = function(element){
  return element;
}

const makeCycler = function(record){
  let newRecord = record.map(returnElement);
  let number = -1;
  return function(){
    number++;
    if(number==newRecord.length){
      number =0;
    }
    return newRecord[number];
  }
}

const curry = function(functions,input1){
  return function(input2,input3){
    return functions(input1,input2,input3);
  }
}

const compose = function(function1,function2){
  return function(input1,input2){
    return function1(function2(input1,input2));
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
