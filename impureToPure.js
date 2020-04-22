//How to turn an impure function into a pure function:

const impureFunction = (x) => {
  y++;
  z = x * y;
}

var y = 5, z;

impureFunction(20);

z;
// 120

impureFunction(25);
// 175


//Pure function that works:

function bar(x, y) {
  var z;
  foo(x);
  return [y, z]

  function foo(x) {
    y++;
    z = x * y;
  }
}

bar(20, 5); //[6, 120]
bar(20, 5); //[6, 120]



//__________________


function foo(x, y) {
  return function () {
    return x + y
  }
}

let x = foo(3, 4)

x()
x()


//

function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

var z = mult(3, 4);
z = sum(z, 5);



//This is an impure program because there are side effects here.

//Applying composition by call:

sum(mult(3, 4), 5)

//Applying composition by making a wrapper function that includes both:

function multAndSum(x, y, z) {
  return sum(mult(x, y), z)
}
multAndSum(3, 4, 5);

//Composition is a way of reducing the amount of side effects we have.




//CLOSURE

function foo() {
  var count = 0

  return function () {
    return count++;
  };
}

var x = foo();

x(); //0
x(); //1
x(); //2

//Another way to apply closure:

function sumX(x) {
  return function (y) {
    return x + y;
  }
}

var add10 = sumX(10);  // x now is always going to be 10

add10(3) // 13
add10(14) //24

var add20 = sumX(20); // here is always gonna be 20.
