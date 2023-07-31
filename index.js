function receivesAFunction(callback) {
    callback();
  }
  receivesAFunction(myCallbackFunction);
  function returnsANamedFunction() {
    function myNamedFunction() {
      console.log("Hello, I am the named function!");
    }
    return myNamedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello, I am an anonymous function!");
    };
  }
