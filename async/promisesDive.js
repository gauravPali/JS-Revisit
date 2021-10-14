// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// Thanks to Nolan Lawson

function doSomething() {
    console.log('doSomething(): start');
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('doSomething(): end');
        resolve();
      }, 1000);
    });
  }
  
  function doSomethingElse() {
    console.log('doSomethingElse(): start');
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('doSomethingElse(): end');
        resolve();
      }, 1000);
    });
  }
  
  function finalHandler() {
    console.log('finalHandler(): start');
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('finalHandler(): end');
        resolve();
      }, 1000);
    });
  }
  
  function example1() {
    doSomething().then(function () {
      return doSomethingElse();
    }).then(finalHandler);
  }
  
  function example2() {
     doSomething().then(function () {
      doSomethingElse();
    }).then(finalHandler); 
  }
  
  function example3() {
    doSomething().then(doSomethingElse())
      .then(finalHandler);
  }
  
  function example4() {
    doSomething().then(doSomethingElse)
      .then(finalHandler);
  }
  