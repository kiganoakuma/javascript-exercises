const fibonacci = function (index) {
  let intIndex = +index;
  if (intIndex < 0) return "OOPS";
  if (intIndex === 0) return 0;
  if (intIndex === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= intIndex; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
