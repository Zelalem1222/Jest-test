

function stringLength(a) {
    const length =  a.split('').reduce((length) => length + 1 , 0);
    if(!(length === 0) && !(length < 10)){
      console.log('error');
    }

    return length;
  }
  module.exports = stringLength;