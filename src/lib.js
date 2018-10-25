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
  let countNumber = makeCounterFromN(0);
  let deltaTracker = {old:oldDelta,delta:0,new:oldDelta};
  return function(delta){
    if(delta){
      deltaTracker.old = deltaTracker.new;
      deltaTracker.delta = delta;
      deltaTracker.new = delta+deltaTracker.old;
      return deltaTracker;
    }
    return deltaTracker;
  }
}


const makeFiboGenerator = function(number1,number2){
  let object = {fibo:0,first:number1,second:number2};
  if(!number2){
  object = {fibo:0,first:0,second:number1};
  }
  if(!number1){
  object = {fibo:0,first:0,second:1};
  }
  return function(){
    object.fibo = object.first;
    object.first =object.second;
    object.second = object.fibo+object.first;
    return object.fibo;
  }
}


const makeCycler = function(array){
  let number = -1;
  return function(){
    number++;
    if(number==array.length){
      number =0;
    }
    return array[number];
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
