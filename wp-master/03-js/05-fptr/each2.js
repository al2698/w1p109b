function each(a, f) {
  for (var x of a) {
    f(x);
  }
}

each([3,4,5,6], console.log);

function sinPrint(x) {
  console.log("sin(%f)=%f", x, Math.sin(x));
}

each([3,4,5,6], sinPrint);