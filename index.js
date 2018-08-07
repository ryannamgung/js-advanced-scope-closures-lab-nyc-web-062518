function produceDrivingRange(blockRange){
  return function(block1, block2){
    block1 = parseInt(block1);
    block2 = parseInt(block2);
    let difference = Math.abs(block1 - block2)
    if(difference < blockRange){
      return `within range by ${Math.abs(difference - blockRange)}`;
    }
    return `${Math.abs(difference - blockRange)} blocks out of range`;
  }
}

function produceTipCalculator(percentage){
  return function(amount){
    return Math.round(percentage * amount);
  }
}
