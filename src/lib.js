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
  deltaTracker = {old:oldDelta,delta:0,new:oldDelta};
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

const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
