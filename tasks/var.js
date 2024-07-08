var a = 15;

function foo() { 
  var a = 25;

  var result = function() {
    console.log(a);
  }

  result.a = 35;

  return result;
}

var bar = foo().bind({a: 45});
bar()
