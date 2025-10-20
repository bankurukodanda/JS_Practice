function MyPromise(executor){
  let state = 'pending';
  let value = null;
  const handlers = [];

  const fulfill = result => {

    /**
        Called when resolve() is used in the executor.

        Sets the state to 'fulfilled', stores the result.
        
        Calls all waiting .then()/.finally() handlers.
    **/
    if (state !== 'pending') return;
    state = 'fulfilled';
    value = result;
    handlers.forEach(h => h());
  };

  const reject = error => {

    /**
        Called when reject() is used in the executor.
        
        Sets state to 'rejected', stores the error.
        
        Calls all registered handlers (including catch, finally).
    **/
    if (state !== 'pending') return;
    state = 'rejected';
    value = error;
    handlers.forEach(h => h());
  };


    /**
        then() returns a new MyPromise, so you can chain.
        
        When .then() is called:
        
        It creates a handle() function.
        
        handle() runs your success/failure callback using queueMicrotask() (to ensure async).
        
        If the promise is already settled (fulfilled or rejected), handle() runs immediately.
        
        If it's still pending, it saves handle() to run later.
    **/
  const then = (onFulfilled, onRejected) =>
    MyPromise((resolve, reject) => {
      const handle = () => {
        queueMicrotask(() => { //queueMicrotask is a browser (and Node.js) API that schedules a function to run after the current JavaScript call stack, but before the next rendering or setTimeout/setImmediate call.
          try {
            if (state === 'fulfilled') {
              const result = onFulfilled ? onFulfilled(value) : value;
              resolve(result);
            } else if (state === 'rejected') {
              if (onRejected) {
                const result = onRejected(value);
                resolve(result);
              } else {
                reject(value);
              }
            }
          } catch (err) {
            reject(err);
          }
        });
      };

      if (state === 'pending') {
        handlers.push(handle);
      } else {
        handle();
      }
    });

  const _catch = onRejected => then(null, onRejected);

    /**
        finally() runs no matter what — success or failure.
        
        It doesn’t affect the result; it passes the original value/error forward.
        
        It lets you clean up resources like a real finally block.
    **/
  const _finally = callback =>
    then(
      val => {
        callback();
        return val;
      },
      err => {
        callback();
        throw err;
      }
    );

  try {
    executor(fulfill, reject);
  } catch (e) {
    reject(e);
  }

  // return an object with .then, .catch, .finally
  return { then, catch: _catch, finally: _finally };
};

var test  = new MyPromise((resolve, reject)=>{
    console.log(this);
    setTimeout(()=>{
        resolve("CusPromise")    
    }, 500)    
    
})
// test.then(()=>{
//     console.log("Test Then");
// },()=>{
//     console.log("reject")
// })
test.then((value)=>{
    console.log("Success Handler");
})
test.catch((value)=>{
    console.log("Error Handler");
})
test.finally((value)=>{
    console.log("Finally");
})
