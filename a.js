function f1(a, b) {
  return a + b;
}

const f2 = function(a, b) {
  return a + b;
}

const f3 = (a, b) => {
  return a + b;
}

const f4 = (a, b) => a + b;


let arr = [1, 2, 3];


let squared = arr.map((function(n)) {
  return n ** 2;
});

arr.map(n => n ** 2);