function produceDrivingRange(blockNum){
  return function (arg1, arg2){
      let x = arg1.replace('th', '');
      let y = arg2.replace('th', '');
      let z = Math.abs(x - y);
      if (z >= blockNum) {
        return `${z - blockNum} blocks out of range`;
      } else {
        return `within range by ${blockNum - z}`;
      };
  };
};

function produceTipCalculator(num){
  return function(sum){
    return sum * num;
  };
}

function createDriver(name){
  let id = 1
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = id++;
    }
  }
}
