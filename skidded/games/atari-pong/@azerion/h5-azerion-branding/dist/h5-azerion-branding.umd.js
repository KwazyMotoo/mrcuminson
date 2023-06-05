(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.h5branding = global.h5branding || {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var es6Promise = createCommonjsModule(function (module, exports) {
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.8+1e68dce6
	 */

	(function (global, factory) {
		module.exports = factory();
	}(commonjsGlobal, (function () {
	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}



	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;


	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(2);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    var then$$1 = void 0;
	    try {
	      then$$1 = value.then;
	    } catch (error) {
	      reject(promise, error);
	      return;
	    }
	    handleMaybeThenable(promise, value, then$$1);
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;


	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = true;

	  if (hasCallback) {
	    try {
	      value = callback(detail);
	    } catch (e) {
	      succeeded = false;
	      error = e;
	    }

	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	  }

	  if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (succeeded === false) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}

	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }

	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;


	    if (resolve$$1 === resolve$1) {
	      var _then = void 0;
	      var error = void 0;
	      var didError = false;
	      try {
	        _then = entry.then;
	      } catch (e) {
	        didError = true;
	        error = e;
	      }

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        if (didError) {
	          reject(promise, error);
	        } else {
	          handleMaybeThenable(promise, entry, _then);
	        }
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;


	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  return Enumerator;
	}();

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/

	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */

	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */


	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };

	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */


	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;

	    if (isFunction(callback)) {
	      return promise.then(function (value) {
	        return constructor.resolve(callback()).then(function () {
	          return value;
	        });
	      }, function (reason) {
	        return constructor.resolve(callback()).then(function () {
	          throw reason;
	        });
	      });
	    }

	    return promise.then(callback, callback);
	  };

	  return Promise;
	}();

	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;

	/*global self*/
	function polyfill() {
	  var local = void 0;

	  if (typeof commonjsGlobal !== 'undefined') {
	    local = commonjsGlobal;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }

	  var P = local.Promise;

	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }

	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }

	  local.Promise = Promise$1;
	}

	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;

	return Promise$1;

	})));




	});

	var auto = es6Promise.polyfill();

	(function (BrandingDomain) {
	    BrandingDomain[BrandingDomain["Neutral"] = 0] = "Neutral";
	    BrandingDomain[BrandingDomain["Yepi"] = 1] = "Yepi";
	    BrandingDomain[BrandingDomain["Spele"] = 2] = "Spele";
	    BrandingDomain[BrandingDomain["Funnygames"] = 3] = "Funnygames";
	    BrandingDomain[BrandingDomain["Kizi"] = 4] = "Kizi";
	    BrandingDomain[BrandingDomain["PlayCell"] = 5] = "PlayCell";
	    BrandingDomain[BrandingDomain["GameCell"] = 6] = "GameCell";
	    BrandingDomain[BrandingDomain["Bild"] = 7] = "Bild";
	    BrandingDomain[BrandingDomain["AGame"] = 8] = "AGame";
	    BrandingDomain[BrandingDomain["Admeen"] = 9] = "Admeen";
	    BrandingDomain[BrandingDomain["PlayTime"] = 10] = "PlayTime";
	    BrandingDomain[BrandingDomain["Zigiz"] = 11] = "Zigiz";
	})(exports.BrandingDomain || (exports.BrandingDomain = {}));

	// From https://github.com/medialize/URI.js/blob/gh-pages/src/SecondLevelDomains.js
	var list;
	var Sld = /** @class */ (function () {
	    function Sld() {
	    }
	    Sld.has = function (domain) {
	        var tldOffset = domain.lastIndexOf('.');
	        if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
	            return false;
	        }
	        var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
	        if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
	            return false;
	        }
	        var sldList = list[domain.slice(tldOffset + 1)];
	        if (!sldList) {
	            return false;
	        }
	        return sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') >= 0;
	    };
	    Sld.is = function (domain) {
	        var tldOffset = domain.lastIndexOf('.');
	        if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
	            return false;
	        }
	        var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
	        if (sldOffset >= 0) {
	            return false;
	        }
	        var sldList = list[domain.slice(tldOffset + 1)];
	        if (!sldList) {
	            return false;
	        }
	        return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
	    };
	    Sld.get = function (domain) {
	        var tldOffset = domain.lastIndexOf('.');
	        if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
	            return null;
	        }
	        var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
	        if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
	            return null;
	        }
	        var sldList = list[domain.slice(tldOffset + 1)];
	        if (!sldList) {
	            return null;
	        }
	        if (sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') < 0) {
	            return null;
	        }
	        return domain.slice(sldOffset + 1);
	    };
	    return Sld;
	}());
	var Domain = /** @class */ (function () {
	    function Domain() {
	    }
	    Domain.setList = function (newList) {
	        list = newList || {};
	    };
	    Domain.getDomain = function (host) {
	        if (!list) {
	            return null;
	        }
	        // if hostname consists of 1 or 2 segments, it must be the domain
	        var t = host.match(/\./g);
	        if (t && t.length < 2) {
	            return host;
	        }
	        // grab tld and add another segment
	        var tld = this.getTld(host);
	        if (!tld) {
	            return null;
	        }
	        var end = host.length - tld.length - 1;
	        end = host.lastIndexOf('.', end - 1) + 1;
	        return host.substring(end) || '';
	    };
	    Domain.getTld = function (host) {
	        if (!list) {
	            return '';
	        }
	        var pos = host.lastIndexOf('.');
	        var tld = host.substring(pos + 1);
	        if (list[tld.toLowerCase()]) {
	            return Sld.get(host) || tld;
	        }
	        return tld;
	    };
	    Domain.KEY = 'Domains';
	    return Domain;
	}());

	var Loader = /** @class */ (function () {
	    function Loader() {
	        this.cache = {};
	    }
	    Object.defineProperty(Loader, "instance", {
	        get: function () {
	            if (Loader.classInstance === undefined) {
	                Loader.classInstance = new Loader();
	            }
	            return Loader.classInstance;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Loader.prototype.load = function (key, url, contentType) {
	        var _this = this;
	        if (this.contains(key)) {
	            return Promise.reject('Already in cache.');
	        }
	        this.cache[key] = { url: url, data: null };
	        return this.requestXhr(url, contentType)
	            .then(function (data) { return _this.loadComplete(key, data); })
	            .catch(function (e) {
	            _this.remove(key);
	            return Promise.reject(e);
	        });
	    };
	    Loader.prototype.loadComplete = function (key, data) {
	        if (!this.contains(key)) {
	            return Promise.reject('Item was removed from cache before loading was complete.');
	        }
	        try {
	            var json = JSON.parse(data);
	            this.cache[key].data = json;
	            return Promise.resolve(json);
	        }
	        catch (error) {
	            return Promise.reject('There was an error parsing JSON file.');
	        }
	    };
	    Loader.prototype.remove = function (key) {
	        if (this.contains(key)) {
	            delete this.cache[key];
	        }
	    };
	    Loader.prototype.get = function (key) {
	        if (!this.contains(key)) {
	            return null;
	        }
	        return this.cache[key].data;
	    };
	    Loader.prototype.contains = function (key) {
	        return this.cache.hasOwnProperty(key);
	    };
	    Loader.prototype.isLoading = function (key) {
	        return this.contains(key) && this.cache[key].data === null;
	    };
	    Loader.prototype.isLoaded = function (key) {
	        return this.contains(key) && this.cache[key].data !== null;
	    };
	    Loader.prototype.loadScript = function (url, deferred, callback) {
	        if (deferred === void 0) { deferred = true; }
	        return new Promise(function (resolve, reject) {
	            var tag = document.createElement('script');
	            tag.src = url;
	            tag.async = false;
	            tag.onload = function () {
	                if (typeof callback === 'function') {
	                    callback();
	                }
	                resolve();
	            };
	            document.head.appendChild(tag);
	        });
	    };
	    Loader.prototype.requestXhr = function (url, contentType) {
	        if (contentType === void 0) { contentType = 'application/json'; }
	        var xhr;
	        if (window.XMLHttpRequest) {
	            xhr = new XMLHttpRequest();
	        }
	        else {
	            return Promise.reject('Unable to send request, XMLHttpRequest not supported.');
	        }
	        return new Promise(function (resolve, reject) {
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState === 4) {
	                    if (xhr.status === 200) {
	                        resolve(xhr.responseText);
	                        xhr.onreadystatechange = null;
	                    }
	                    else if (xhr.status > 0) {
	                        reject("There was a problem with the request: status " + xhr.status);
	                        xhr.onreadystatechange = null;
	                    }
	                }
	            };
	            try {
	                xhr.open('GET', url, true);
	                xhr.setRequestHeader('Content-Type', contentType);
	                xhr.send();
	            }
	            catch (e) {
	                reject('Error: Unable to send request, CORS not allowed.');
	            }
	        });
	    };
	    return Loader;
	}());

	/**
	 * These are all the valid targets we have for UTM campaign links
	 */
	(function (UtmTargets) {
	    UtmTargets[UtmTargets["splashscreen"] = 0] = "splashscreen";
	    UtmTargets[UtmTargets["logo"] = 1] = "logo";
	    UtmTargets[UtmTargets["facebook"] = 2] = "facebook";
	    UtmTargets[UtmTargets["twitter"] = 3] = "twitter";
	    UtmTargets[UtmTargets["playstore"] = 4] = "playstore";
	    UtmTargets[UtmTargets["appstore"] = 5] = "appstore";
	    UtmTargets[UtmTargets["more_games"] = 6] = "more_games";
	    UtmTargets[UtmTargets["download_game"] = 7] = "download_game";
	    UtmTargets[UtmTargets["walkthrough"] = 8] = "walkthrough";
	    UtmTargets[UtmTargets["disclaimer"] = 9] = "disclaimer";
	    UtmTargets[UtmTargets["highscores"] = 10] = "highscores";
	})(exports.UtmTargets || (exports.UtmTargets = {}));

	// This all here is for cache busting;
	function addScript(src, buster, callback) {
	    var s = document.createElement('script');
	    s.setAttribute('src', src + '?v=' + buster);
	    if (typeof callback === 'function') {
	        s.onload = callback;
	    }
	    document.body.appendChild(s);
	}
	var PortalScripts = /** @class */ (function () {
	    function PortalScripts() {
	    }
	    PortalScripts.loadPortalScript = function (siteLockList) {
	        if (siteLockList &&
	            siteLockList.hasOwnProperty('minijuegos') &&
	            siteLockList['minijuegos'].indexOf(Utils.getSourceSite()) !== -1) {
	            if (window.mpConfig !== undefined) {
	                window.mpConfig.partner = 'orange-games';
	            }
	            else {
	                window.mpConfig = {
	                    partner: 'orange-games'
	                };
	            }
	            // Abuse addScript that is in each game, or if it isn't there, do nothing
	            addScript('https://ext.minijuegosgratis.com/external-host/main.js', Date.now() / 1000);
	        }
	        if (siteLockList &&
	            siteLockList.hasOwnProperty('kongregate') &&
	            siteLockList['kongregate'].indexOf(Utils.getSourceSite()) !== -1) {
	            // Abuse addScript that is in each game, or if it isn't there, do nothing
	            addScript('https://cdn1.kongregate.com/javascripts/kongregate_api.js', Date.now() / 1000, function () {
	                if (typeof kongregateAPI !== 'undefined') {
	                    kongregateAPI.loadAPI(function () {
	                        window.kongregate = kongregateAPI.getAPI();
	                    });
	                }
	            });
	        }
	        if (siteLockList &&
	            siteLockList.hasOwnProperty('newgrounds') &&
	            siteLockList['newgrounds'].indexOf(Utils.getSourceSite()) !== -1) {
	            // Abuse addScript that is in each game, or if it isn't there, do nothing
	            addScript('https://cdn.fbrq.io/@azerion/splash/assets/scripts/newgroundsio.min.js', Date.now() / 1000);
	        }
	    };
	    return PortalScripts;
	}());

	var Branding$$1 = /** @class */ (function () {
	    function Branding$$1() {
	    }
	    Branding$$1.preload = function (version) {
	        var promise = Promise.all([
	            Loader.instance.load(Domain.KEY, Utils.ASSET_LOCATION + "json/domains.json?v=" + version, 'text/plain'),
	            Loader.instance.load(Branding$$1.SITELOCK_PORTALS, Utils.ASSET_LOCATION + "json/sitelock.json?v=" + version, 'text/plain')
	        ]);
	        Promise.all([
	            Loader.instance.load(Branding$$1.INTERNAL_PORTALS_KEY, Utils.ASSET_LOCATION + "json/internal.json?v=" + version, 'text/plain'),
	            Loader.instance.load(Branding$$1.CONTRACTED_PORTALS_KEY, Utils.ASSET_LOCATION + "json/contracted.json?v=" + version, 'text/plain'),
	            Loader.instance.load(Branding$$1.SPECIAL_PORTALS_KEY, Utils.ASSET_LOCATION + "json/special.json?v=" + version, 'text/plain')
	        ]);
	        return promise
	            .then(function (data) {
	            var domains = data[0];
	            var sitelock = data[1];
	            Domain.setList(domains);
	            PortalScripts.loadPortalScript(sitelock);
	            Branding$$1.setSiteLock(sitelock);
	        })
	            .catch(function () {
	            console.warn('Unable to parse json');
	        });
	    };
	    Branding$$1.setSiteLock = function (data) {
	        Branding$$1.siteLocks = data;
	    };
	    Object.defineProperty(Branding$$1, "brandingLogoUrl", {
	        /**
	         * Gets the url of the image needed for the branding logo.
	         *
	         * @returns {string} Endpoint url for the image to load.
	         */
	        get: function () {
	            var imageName;
	            if (Utils.isOnDevice() || Branding$$1.isAirfi()) {
	                Utils.ASSET_LOCATION = 'assets/';
	            }
	            else if (Utils.getSourceSite(true) === 'fbrq.io') {
	                Utils.ASSET_LOCATION = 'https://' + window.location.host + '/@azerion/splash/assets/';
	            }
	            // If you are testing the splash screen locally with new assets that aren't uploaded yet, you need to make sure that Utils.ASSET_LOCATION is always set to 'assets/'.
	            // Please uncomment the next line if testing locally. Please do so in the Preloader.ts as well.
	            // Utils.ASSET_LOCATION = 'assets/';
	            switch (Utils.getBrandingDomain()) {
	                case exports.BrandingDomain.Spele:
	                    imageName = 'spele';
	                    break;
	                case exports.BrandingDomain.PlayCell:
	                    imageName = 'playcell';
	                    break;
	                case exports.BrandingDomain.GameCell:
	                    imageName = 'gamecell';
	                    break;
	                case exports.BrandingDomain.Yepi:
	                    imageName = 'yepi';
	                    break;
	                case exports.BrandingDomain.Admeen:
	                    imageName = 'admeen';
	                    break;
	                case exports.BrandingDomain.Bild:
	                    imageName = 'bild';
	                    break;
	                case exports.BrandingDomain.Kizi:
	                    imageName = 'kizi';
	                    break;
	                case exports.BrandingDomain.Funnygames:
	                    imageName = 'funnygames';
	                    break;
	                case exports.BrandingDomain.PlayTime:
	                    imageName = 'playtime';
	                    break;
	                default:
	                case exports.BrandingDomain.AGame:
	                    imageName = 'agame';
	                    break;
	                case exports.BrandingDomain.Zigiz:
	                    imageName = 'zigiz';
	                    break;
	            }
	            return Utils.ASSET_LOCATION + 'images/branding_logo_' + imageName + '_small.png';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Branding$$1, "brandingBackgroundColor", {
	        get: function () {
	            var bgColor;
	            switch (Utils.getBrandingDomain()) {
	                case exports.BrandingDomain.Spele:
	                    bgColor = '#4a72ad';
	                    break;
	                case exports.BrandingDomain.PlayCell:
	                    bgColor = '#52a1e1';
	                    break;
	                case exports.BrandingDomain.GameCell:
	                    bgColor = '#c600b2';
	                    break;
	                case exports.BrandingDomain.Yepi:
	                    bgColor = '#0573a7';
	                    break;
	                case exports.BrandingDomain.AGame:
	                    bgColor = '#0C486C';
	                    break;
	                case exports.BrandingDomain.Admeen:
	                    bgColor = '#4267B2';
	                    break;
	                case exports.BrandingDomain.Bild:
	                    bgColor = '#de0000';
	                    break;
	                default:
	                case exports.BrandingDomain.Kizi:
	                    bgColor = '#012f50';
	                    break;
	                case exports.BrandingDomain.Funnygames:
	                    bgColor = '#33b0ff';
	                    break;
	                case exports.BrandingDomain.PlayTime:
	                    bgColor = '#023a63';
	                    break;
	                case exports.BrandingDomain.Zigiz:
	                    bgColor = '#023a63';
	                    break;
	            }
	            return bgColor;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Fetches a UTM campaign link based on the website the game is loaded from
	     *
	     * @param gameTitle
	     * @param type
	     */
	    Branding$$1.openCampaignLink = function (gameTitle, type) {
	        if (Utils.isOnDevice() || Branding$$1.isSpecial() || !Branding$$1.outGoingLinksAllowed()) {
	            return;
	        }
	        var host = Utils.getSourceSite();
	        var url;
	        var win;
	        var protocol = Utils.isOnDevice() ? 'https://' : '//';
	        switch (Utils.getBrandingDomain()) {
	            case exports.BrandingDomain.Spele:
	                url = protocol + 'www.spele.nl';
	                break;
	            case exports.BrandingDomain.Yepi:
	                url = protocol + 'www.yepi.com';
	                break;
	            case exports.BrandingDomain.Admeen:
	                url = 'https://media.admeen.com/branding/link.php';
	                win = window.open(url, '_blank');
	                if (win && win.focus) {
	                    win.focus();
	                }
	                return;
	            case exports.BrandingDomain.PlayCell:
	                url = protocol + 'www.playcell.com';
	                break;
	            case exports.BrandingDomain.GameCell:
	                url = protocol + 'www.gamecell.com';
	                break;
	            case exports.BrandingDomain.Kizi:
	                url = protocol + 'www.kizi.com';
	                break;
	            case exports.BrandingDomain.Bild:
	                win = window.open(protocol + 'www.bildspielt.de', '_blank');
	                if (win && win.focus) {
	                    win.focus();
	                }
	                return;
	            case exports.BrandingDomain.Funnygames:
	                url = protocol + 'www.funnygames.nu';
	                break;
	            case exports.BrandingDomain.PlayTime:
	                url = protocol + 'playtime.nl';
	                break;
	            default:
	            case exports.BrandingDomain.AGame:
	                url = protocol + 'www.agame.com';
	                break;
	            case exports.BrandingDomain.Zigiz:
	                url = protocol + 'm.zigiz.com';
	                break;
	        }
	        var utmContent = typeof type === 'string' ? type : exports.UtmTargets[type];
	        win = window.open(url +
	            '/?utm_source=' +
	            host +
	            '&utm_medium=html5&utm_term=' +
	            gameTitle +
	            '&utm_content=' +
	            utmContent +
	            '&utm_campaign=Gamedistribution', '_blank');
	        if (win && win.focus) {
	            win.focus();
	        }
	    };
	    /**
	     * Check if the game is loaded on a host we have internally whitelisted here at azerion
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isInternal = function () {
	        return Branding$$1.hostMatchesList(Loader.instance.get(Branding$$1.INTERNAL_PORTALS_KEY));
	    };
	    /**
	     * Check if the game is loaded on a partner we have internally whitelisted here at azerion
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isContracted = function () {
	        return Branding$$1.hostMatchesList(Loader.instance.get(Branding$$1.CONTRACTED_PORTALS_KEY));
	    };
	    /**
	     * Check if the game is loaded on a partner we have internally whitelisted here at azerion
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isSpecial = function () {
	        return Branding$$1.hostMatchesList(Loader.instance.get(Branding$$1.SPECIAL_PORTALS_KEY));
	    };
	    Branding$$1.isAdmeen = function () {
	        if (!Branding$$1.siteLocks || !Branding$$1.siteLocks.hasOwnProperty('admeen')) {
	            return false;
	        }
	        var admeen = Branding$$1.siteLocks['admeen'];
	        return Branding$$1.hostMatchesList(admeen);
	    };
	    /**
	     *  Special check for Kongregate so we can implement a special API
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isKongregate = function () {
	        if (!Branding$$1.siteLocks || !Branding$$1.siteLocks.hasOwnProperty('kongregate')) {
	            return false;
	        }
	        var kongregate = Branding$$1.siteLocks['kongregate'];
	        return Branding$$1.hostMatchesList(kongregate);
	    };
	    /**
	     *  Special check for Kongregate so we can implement a special API
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isNewgrounds = function () {
	        if (!Branding$$1.siteLocks || !Branding$$1.siteLocks.hasOwnProperty('newgrounds')) {
	            return false;
	        }
	        var newgrounds = Branding$$1.siteLocks['newgrounds'];
	        return Branding$$1.hostMatchesList(newgrounds);
	    };
	    /**
	     * Bild is a special case where we have a custom preloader, but also some test domains
	     * @returns {boolean}
	     */
	    Branding$$1.isBild = function () {
	        // Official domain, for which we don't need an extra check:
	        // Utils.getSourceSite() === 'bildspielt.de'
	        if (window.location.host === 'bild.fbrq.io' ||
	            window.location.host.indexOf('contentfleet.com') !== -1) {
	            return true;
	        }
	        return false;
	    };
	    /**
	     * For playtime we might want specific features like webrtc multiplayer
	     * @returns {boolean}
	     */
	    Branding$$1.isPlaytime = function () {
	        return window.location.host.indexOf('playtime.nl') !== -1;
	    };
	    /**
	     * Bip is a similar setup to bild where it also has a custom test environment on fbrq
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isBip = function () {
	        // Official domain, for which we don't need an extra check:
	        if (window.location.search.indexOf('bipgaming') !== -1 ||
	            window.location.host === 'bip.fbrq.io') {
	            return true;
	        }
	        return false;
	    };
	    Branding$$1.isPlaycellApp = function () {
	        if (window.location.search.indexOf('playcellApp') !== -1) {
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Check if the portal is agame.com (Spil)
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isAGame = function () {
	        return window.location.search.indexOf('agame') !== -1;
	    };
	    /**
	     * Simple check if we are on an Airfi device
	     *
	     * @returns {boolean}
	     */
	    Branding$$1.isAirfi = function () {
	        return window.hasOwnProperty('airfi') ? window.airfi : false;
	    };
	    Branding$$1.outGoingLinksAllowed = function () {
	        if (Branding$$1.isAirfi() || Branding$$1.isSpecial() || Branding$$1.isContracted()) {
	            return false;
	        }
	        if (window.hasOwnProperty('fbrqLA')) {
	            return window.fbrqLA;
	        }
	        return true;
	    };
	    /**
	     * Helper method for checking if a host is in a list
	     *
	     * @param list
	     * @returns {boolean}
	     */
	    Branding$$1.hostMatchesList = function (portals) {
	        portals = portals || [];
	        var host = Utils.getSourceSite();
	        for (var id = 0; id < portals.length; id++) {
	            if (host === portals[id]) {
	                return true;
	            }
	        }
	        return false;
	    };
	    // The image key for the logo we load
	    Branding$$1.LOGO_KEY = 'branding_logo';
	    // The key for the json document that contains a list of all whitelisted portals
	    Branding$$1.INTERNAL_PORTALS_KEY = 'branding_portals';
	    Branding$$1.CONTRACTED_PORTALS_KEY = 'branding_contracted';
	    Branding$$1.SPECIAL_PORTALS_KEY = 'branding_special';
	    Branding$$1.SITELOCK_PORTALS = 'sitelock_portals';
	    Branding$$1.DOMAIN_OVERWRITE = null;
	    Branding$$1.analyticsEnabled = true;
	    return Branding$$1;
	}());

	var Utils = /** @class */ (function () {
	    function Utils() {
	    }
	    /**
	     * detects if website is in iframe. if yes, returns only domain name
	     *
	     * @returns {string}
	     */
	    Utils.getSourceSite = function (forceLocal) {
	        if (forceLocal === void 0) { forceLocal = false; }
	        var host = document.referrer || window.location.host;
	        if (forceLocal) {
	            host = window.location.host;
	        }
	        if (host.indexOf('embed.gamedistribution.com') !== -1 &&
	            window.location.search.indexOf('gd_sdk_referrer_url') !== -1) {
	            host = Utils.getUrlParameter('gd_sdk_referrer_url') || host;
	        }
	        host = decodeURIComponent(host);
	        // So here we check any exceptions regarding host matching, usually this is for test environments
	        if (Branding$$1.isBild()) {
	            return 'bildspielt.de';
	        }
	        if (Branding$$1.isBip()) {
	            return 'bipgaming.com';
	        }
	        // find & remove protocol (http, ftp, etc.) and get domain
	        if (host.indexOf('://') > -1) {
	            host = host.split('/')[2];
	        }
	        else {
	            host = host.split('/')[0];
	        }
	        // find & remove port number
	        host = host.split(':')[0];
	        var newHost = Domain.getDomain(host);
	        if (newHost !== null) {
	            return newHost;
	        }
	        // find and remove subdomains
	        if (host.split('.').length === 3) {
	            host = host.substr(host.indexOf('.') + 1);
	        }
	        return host;
	    };
	    /**
	     * Special method that is used to check for current branding inorder to load the correct splash screen.
	     *
	     * Notable exception: Bip
	     * Eventhough bipgaming has a special entry for testing, it does not have it's own splashscreen/branding
	     *
	     * @returns {any}
	     */
	    Utils.getBrandingDomain = function () {
	        if (window.hasOwnProperty('fbrqBD') && window.fbrqBD in exports.BrandingDomain) {
	            return window.fbrqBD;
	        }
	        if (Branding$$1.DOMAIN_OVERWRITE) {
	            return Branding$$1.DOMAIN_OVERWRITE;
	        }
	        var source = Utils.getSourceSite();
	        if (Branding$$1.isAdmeen()) {
	            return exports.BrandingDomain.Admeen;
	        }
	        if (Branding$$1.isPlaycellApp() || Branding$$1.isBip()) {
	            return exports.BrandingDomain.PlayCell;
	        }
	        switch (source) {
	            case 'spele.nl':
	                return exports.BrandingDomain.Spele;
	            case 'yepi.com':
	                return exports.BrandingDomain.Yepi;
	            case 'oyunskor.com':
	            case 'barbioyunu.com.tr':
	            case 'bebekoyunu.com.tr':
	            case 'oyunkolu.com':
	            case 'oyungemisi.com':
	            case 'oyunlar1.com':
	            case 'oyunkuzusu.com':
	            case 'kraloyun.com':
	            case 'rekoroyun.com':
	            case 'oyundedem.com':
	            case 'oyunoyna.com':
	            case 'pastaoyunu.com.tr':
	            case 'playcell.com':
	                return exports.BrandingDomain.PlayCell;
	            case 'gamecell.com':
	                return exports.BrandingDomain.GameCell;
	            case 'playxl.com':
	                return exports.BrandingDomain.Admeen;
	            case 'kizi.com':
	                return exports.BrandingDomain.Kizi;
	            case 'bildspielt.de':
	                return exports.BrandingDomain.Bild;
	            case 'funnygames.nl':
	                return exports.BrandingDomain.Funnygames;
	            case 'playtime.nl':
	                return exports.BrandingDomain.PlayTime;
	            default:
	            case 'agame.com':
	                return exports.BrandingDomain.AGame;
	            case 'zigiz.com':
	                return exports.BrandingDomain.Zigiz;
	        }
	    };
	    Utils.getReferrer = function (host) {
	        if (host.indexOf('?ref=') !== -1) {
	            return host.substr(host.indexOf('?ref=') + 5);
	        }
	        return host;
	    };
	    /**
	     * Checks if the site is loaded in an iFrame or not
	     *
	     * @returns {boolean}
	     */
	    Utils.inIframe = function () {
	        try {
	            return window.self !== window.top;
	        }
	        catch (e) {
	            return true;
	        }
	    };
	    Utils.inGDGameZone = function () {
	        return document.referrer.indexOf('html5.gamedistribution.com') !== -1;
	    };
	    /**
	     * Nicely returns the domain + protocol of any given URI
	     *
	     * @param uri
	     * @returns {string|number}
	     */
	    Utils.getDomain = function (uri) {
	        var parser = document.createElement('a');
	        parser.href = uri;
	        return parser.origin;
	    };
	    /**
	     * Funky check for AppStore website loaders
	     *
	     * @param game
	     * @returns {boolean}
	     */
	    Utils.isOnDevice = function () {
	        // TODO: do device check here
	        if (typeof window.cordova !== 'undefined') {
	            return !/(gamedistribution\.com)/.test(window.location.hostname);
	        }
	        return false;
	    };
	    /**
	     * Horrible check for local infra, but otherwise I have no idea how to funky funky authentication issues
	     *
	     * @returns {boolean}
	     */
	    Utils.isTc = function () {
	        return /(teamcity\.azerdev\.com)/.test(window.location.host);
	    };
	    /**
	     * Fetches a random number between Min and Max
	     *
	     * @param min
	     * @param max
	     * @returns {number}
	     */
	    Utils.getRandomRange = function (min, max) {
	        return (Math.random() * (max - min) + min) | 0;
	    };
	    Utils.getUrlParameter = function (name) {
	        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	        var results = regex.exec(location.search);
	        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	    };
	    /**
	     * Converts the time in seconds to a textable string
	     *
	     * @param time
	     */
	    Utils.intTimeToString = function (time) {
	        var hours = Math.floor(time / 3600);
	        var minutes = Math.floor((time % 3600) / 60);
	        var seconds = time % 60;
	        var sHours = hours < 10 ? '0' + hours : hours.toString();
	        var sMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
	        var sSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
	        return sHours + ':' + sMinutes + ':' + sSeconds;
	    };
	    Utils.LANGUAGE = 'en';
	    Utils.ASSET_LOCATION = window.hasOwnProperty('fbrqSA') && window['fbrqSA'] === true
	        ? 'assets/'
	        : 'https://cdn.fbrq.io/@azerion/splash/assets/';
	    return Utils;
	}());

	var GoogleAnalytics = /** @class */ (function () {
	    function GoogleAnalytics() {
	        this.fbrqId = 'UA-60359297-50';
	    }
	    GoogleAnalytics.addScript = function () {
	        if (Branding$$1.analyticsEnabled) {
	            return new Promise(function (resolve, reject) {
	                var s = document.createElement('script');
	                var src = "https://www.googletagmanager.com/gtag/js?id=" + GoogleAnalytics.GAMeasurementId;
	                s.setAttribute('src', src);
	                s.async = true;
	                s.onload = function () {
	                    resolve({ loaded: true });
	                };
	                document.head.appendChild(s);
	            });
	        }
	        return Promise.resolve();
	    };
	    GoogleAnalytics.preload = function () {
	        if (Branding$$1.analyticsEnabled) {
	            GoogleAnalytics.addScript().then(function (result, error) {
	                return new Promise(function (resolve, reject) {
	                    if (result.loaded) {
	                        if (window.hasOwnProperty('dataLayer')) {
	                            window.dataLayer = window.dataLayer || [];
	                        }
	                        gtag = function () {
	                            if (window.hasOwnProperty('dataLayer')) {
	                                window.dataLayer.push(arguments);
	                            }
	                        };
	                    }
	                    resolve();
	                });
	            });
	        }
	        return Promise.resolve();
	    };
	    GoogleAnalytics.prototype.setup = function (analyticsId, appName, appVersion, trackerWrapper, sampleRate) {
	        if (appName === void 0) { appName = 'none'; }
	        if (appVersion === void 0) { appVersion = 'none'; }
	        if (trackerWrapper === void 0) { trackerWrapper = 'auto'; }
	        if (sampleRate === void 0) { sampleRate = 100; }
	        if (!Branding$$1.analyticsEnabled) {
	            var disableID = "ga-disable-" + analyticsId;
	            if (window.hasOwnProperty(disableID)) {
	                window.disableID = !Branding$$1.analyticsEnabled;
	            }
	            return null;
	        }
	        var referrer = 'none';
	        if (Branding$$1.isAGame()) {
	            referrer = Utils.getReferrer(decodeURIComponent(document.referrer));
	        }
	        gtag('js', new Date());
	        gtag('set', 'user_properties', {
	            app_name: appName,
	            app_version: appVersion,
	            referrer: referrer
	        });
	        gtag('config', analyticsId, {
	            sample_rate: sampleRate
	        });
	        var settings = {
	            name: 'fbrq',
	            sample_rate: 1,
	            referrer: referrer,
	            app_name: 'All'
	        };
	        if (trackerWrapper !== 'auto') {
	            for (var key in trackerWrapper) {
	                // clone
	                if (trackerWrapper.hasOwnProperty(key)) {
	                    settings[key] = trackerWrapper[key];
	                }
	            }
	        }
	        gtag('config', this.fbrqId, settings);
	        return gtag;
	    };
	    GoogleAnalytics.prototype.sendScreenView = function (screenName) {
	        if (!Branding$$1.analyticsEnabled) {
	            return;
	        }
	        gtag('event', 'screen_view', { screen_name: screenName });
	        gtag('event', 'screen_view', {
	            send_to: this.fbrqId,
	            screen_name: screenName
	        });
	    };
	    GoogleAnalytics.prototype.sendGenericEvent = function (category, action, label) {
	        if (!Branding$$1.analyticsEnabled) {
	            return;
	        }
	        gtag('event', action, {
	            event_category: category,
	            event_label: label
	        });
	        gtag('event', action, {
	            send_to: this.fbrqId,
	            event_category: category,
	            event_label: label
	        });
	    };
	    GoogleAnalytics.GAMeasurementId = 'none';
	    return GoogleAnalytics;
	}());

	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	var CryptoJS = CryptoJS || function(h, s) {
	    var f = {},
	        g = f.lib = {},
	        q = function() {},
	        m = g.Base = {
	            extend: function(a) {
	                q.prototype = this;
	                var c = new q;
	                a && c.mixIn(a);
	                c.hasOwnProperty("init") || (c.init = function() {
	                    c.$super.init.apply(this, arguments);
	                });
	                c.init.prototype = c;
	                c.$super = this;
	                return c
	            },
	            create: function() {
	                var a = this.extend();
	                a.init.apply(a, arguments);
	                return a
	            },
	            init: function() {},
	            mixIn: function(a) {
	                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
	                a.hasOwnProperty("toString") && (this.toString = a.toString);
	            },
	            clone: function() {
	                return this.init.prototype.extend(this)
	            }
	        },
	        r = g.WordArray = m.extend({
	            init: function(a, c) {
	                a = this.words = a || [];
	                this.sigBytes = c != s ? c : 4 * a.length;
	            },
	            toString: function(a) {
	                return (a || k).stringify(this)
	            },
	            concat: function(a) {
	                var c = this.words,
	                    d = a.words,
	                    b = this.sigBytes;
	                a = a.sigBytes;
	                this.clamp();
	                if (b % 4)
	                    for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
	                else if (65535 < d.length)
	                    for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];
	                else c.push.apply(c, d);
	                this.sigBytes += a;
	                return this
	            },
	            clamp: function() {
	                var a = this.words,
	                    c = this.sigBytes;
	                a[c >>> 2] &= 4294967295 <<
	                    32 - 8 * (c % 4);
	                a.length = h.ceil(c / 4);
	            },
	            clone: function() {
	                var a = m.clone.call(this);
	                a.words = this.words.slice(0);
	                return a
	            },
	            random: function(a) {
	                for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
	                return new r.init(c, a)
	            }
	        }),
	        l = f.enc = {},
	        k = l.Hex = {
	            stringify: function(a) {
	                var c = a.words;
	                a = a.sigBytes;
	                for (var d = [], b = 0; b < a; b++) {
	                    var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
	                    d.push((e >>> 4).toString(16));
	                    d.push((e & 15).toString(16));
	                }
	                return d.join("")
	            },
	            parse: function(a) {
	                for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
	                    2), 16) << 24 - 4 * (b % 8);
	                return new r.init(d, c / 2)
	            }
	        },
	        n = l.Latin1 = {
	            stringify: function(a) {
	                var c = a.words;
	                a = a.sigBytes;
	                for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
	                return d.join("")
	            },
	            parse: function(a) {
	                for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
	                return new r.init(d, c)
	            }
	        },
	        j = l.Utf8 = {
	            stringify: function(a) {
	                try {
	                    return decodeURIComponent(escape(n.stringify(a)))
	                } catch (c) {
	                    throw Error("Malformed UTF-8 data");
	                }
	            },
	            parse: function(a) {
	                return n.parse(unescape(encodeURIComponent(a)))
	            }
	        },
	        u = g.BufferedBlockAlgorithm = m.extend({
	            reset: function() {
	                this._data = new r.init;
	                this._nDataBytes = 0;
	            },
	            _append: function(a) {
	                "string" == typeof a && (a = j.parse(a));
	                this._data.concat(a);
	                this._nDataBytes += a.sigBytes;
	            },
	            _process: function(a) {
	                var c = this._data,
	                    d = c.words,
	                    b = c.sigBytes,
	                    e = this.blockSize,
	                    f = b / (4 * e),
	                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
	                a = f * e;
	                b = h.min(4 * a, b);
	                if (a) {
	                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
	                    g = d.splice(0, a);
	                    c.sigBytes -= b;
	                }
	                return new r.init(g, b)
	            },
	            clone: function() {
	                var a = m.clone.call(this);
	                a._data = this._data.clone();
	                return a
	            },
	            _minBufferSize: 0
	        });
	    g.Hasher = u.extend({
	        cfg: m.extend(),
	        init: function(a) {
	            this.cfg = this.cfg.extend(a);
	            this.reset();
	        },
	        reset: function() {
	            u.reset.call(this);
	            this._doReset();
	        },
	        update: function(a) {
	            this._append(a);
	            this._process();
	            return this
	        },
	        finalize: function(a) {
	            a && this._append(a);
	            return this._doFinalize()
	        },
	        blockSize: 16,
	        _createHelper: function(a) {
	            return function(c, d) {
	                return (new a.init(d)).finalize(c)
	            }
	        },
	        _createHmacHelper: function(a) {
	            return function(c, d) {
	                return (new t.HMAC.init(a,
	                    d)).finalize(c)
	            }
	        }
	    });
	    var t = f.algo = {};
	    return f
	}(Math);
	(function(h) {
	    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function(a) {
	            return 4294967296 * (a - (a | 0)) | 0
	        }, k = 2, n = 0; 64 > n;) {
	        var j;
	        a: {
	            j = k;
	            for (var u = h.sqrt(j), t = 2; t <= u; t++)
	                if (!(j % t)) {
	                    j = !1;
	                    break a
	                }
	            j = !0;
	        }
	        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
	        k++;
	    }
	    var a = [],
	        f = f.SHA256 = q.extend({
	            _doReset: function() {
	                this._hash = new g.init(m.slice(0));
	            },
	            _doProcessBlock: function(c, d) {
	                for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
	                    if (16 > p) a[p] =
	                        c[d + p] | 0;
	                    else {
	                        var k = a[p - 15],
	                            l = a[p - 2];
	                        a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
	                    }
	                    k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
	                    l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
	                    q = n;
	                    n = m;
	                    m = h;
	                    h = j + k | 0;
	                    j = g;
	                    g = f;
	                    f = e;
	                    e = k + l | 0;
	                }
	                b[0] = b[0] + e | 0;
	                b[1] = b[1] + f | 0;
	                b[2] = b[2] + g | 0;
	                b[3] = b[3] + j | 0;
	                b[4] = b[4] + h | 0;
	                b[5] = b[5] + m | 0;
	                b[6] = b[6] + n | 0;
	                b[7] = b[7] + q | 0;
	            },
	            _doFinalize: function() {
	                var a = this._data,
	                    d = a.words,
	                    b = 8 * this._nDataBytes,
	                    e = 8 * a.sigBytes;
	                d[e >>> 5] |= 128 << 24 - e % 32;
	                d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
	                d[(e + 64 >>> 9 << 4) + 15] = b;
	                a.sigBytes = 4 * d.length;
	                this._process();
	                return this._hash
	            },
	            clone: function() {
	                var a = q.clone.call(this);
	                a._hash = this._hash.clone();
	                return a
	            }
	        });
	    s.SHA256 = q._createHelper(f);
	    s.HmacSHA256 = q._createHmacHelper(f);
	})(Math);
	(function() {
	    var h = CryptoJS,
	        s = h.enc.Utf8;
	    h.algo.HMAC = h.lib.Base.extend({
	        init: function(f, g) {
	            f = this._hasher = new f.init;
	            "string" == typeof g && (g = s.parse(g));
	            var h = f.blockSize,
	                m = 4 * h;
	            g.sigBytes > m && (g = f.finalize(g));
	            g.clamp();
	            for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
	            r.sigBytes = l.sigBytes = m;
	            this.reset();
	        },
	        reset: function() {
	            var f = this._hasher;
	            f.reset();
	            f.update(this._iKey);
	        },
	        update: function(f) {
	            this._hasher.update(f);
	            return this
	        },
	        finalize: function(f) {
	            var g =
	                this._hasher;
	            f = g.finalize(f);
	            g.reset();
	            return g.finalize(this._oKey.clone().concat(f))
	        }
	    });
	})();

	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function() {
	    var h = CryptoJS,
	        j = h.lib.WordArray;
	    h.enc.Base64 = {
	        stringify: function(b) {
	            var e = b.words,
	                f = b.sigBytes,
	                c = this._map;
	            b.clamp();
	            b = [];
	            for (var a = 0; a < f; a += 3)
	                for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));
	            if (e = c.charAt(64))
	                for (; b.length % 4;) b.push(e);
	            return b.join("")
	        },
	        parse: function(b) {
	            var e = b.length,
	                f = this._map,
	                c = f.charAt(64);
	            c && (c = b.indexOf(c), -1 != c && (e = c));
	            for (var c = [], a = 0, d = 0; d <
	                e; d++)
	                if (d % 4) {
	                    var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4),
	                        h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
	                    c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4);
	                    a++;
	                }
	            return j.create(c, a)
	        },
	        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	    };
	})();

	var gameanalytics;
	(function (gameanalytics) {
	    var EGAErrorSeverity;
	    (function (EGAErrorSeverity) {
	        EGAErrorSeverity[EGAErrorSeverity["Undefined"] = 0] = "Undefined";
	        EGAErrorSeverity[EGAErrorSeverity["Debug"] = 1] = "Debug";
	        EGAErrorSeverity[EGAErrorSeverity["Info"] = 2] = "Info";
	        EGAErrorSeverity[EGAErrorSeverity["Warning"] = 3] = "Warning";
	        EGAErrorSeverity[EGAErrorSeverity["Error"] = 4] = "Error";
	        EGAErrorSeverity[EGAErrorSeverity["Critical"] = 5] = "Critical";
	    })(EGAErrorSeverity = gameanalytics.EGAErrorSeverity || (gameanalytics.EGAErrorSeverity = {}));
	    var EGAGender;
	    (function (EGAGender) {
	        EGAGender[EGAGender["Undefined"] = 0] = "Undefined";
	        EGAGender[EGAGender["Male"] = 1] = "Male";
	        EGAGender[EGAGender["Female"] = 2] = "Female";
	    })(EGAGender = gameanalytics.EGAGender || (gameanalytics.EGAGender = {}));
	    var EGAProgressionStatus;
	    (function (EGAProgressionStatus) {
	        EGAProgressionStatus[EGAProgressionStatus["Undefined"] = 0] = "Undefined";
	        EGAProgressionStatus[EGAProgressionStatus["Start"] = 1] = "Start";
	        EGAProgressionStatus[EGAProgressionStatus["Complete"] = 2] = "Complete";
	        EGAProgressionStatus[EGAProgressionStatus["Fail"] = 3] = "Fail";
	    })(EGAProgressionStatus = gameanalytics.EGAProgressionStatus || (gameanalytics.EGAProgressionStatus = {}));
	    var EGAResourceFlowType;
	    (function (EGAResourceFlowType) {
	        EGAResourceFlowType[EGAResourceFlowType["Undefined"] = 0] = "Undefined";
	        EGAResourceFlowType[EGAResourceFlowType["Source"] = 1] = "Source";
	        EGAResourceFlowType[EGAResourceFlowType["Sink"] = 2] = "Sink";
	    })(EGAResourceFlowType = gameanalytics.EGAResourceFlowType || (gameanalytics.EGAResourceFlowType = {}));
	    var http;
	    (function (http) {
	        var EGASdkErrorType;
	        (function (EGASdkErrorType) {
	            EGASdkErrorType[EGASdkErrorType["Undefined"] = 0] = "Undefined";
	            EGASdkErrorType[EGASdkErrorType["Rejected"] = 1] = "Rejected";
	        })(EGASdkErrorType = http.EGASdkErrorType || (http.EGASdkErrorType = {}));
	        var EGAHTTPApiResponse;
	        (function (EGAHTTPApiResponse) {
	            EGAHTTPApiResponse[EGAHTTPApiResponse["NoResponse"] = 0] = "NoResponse";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["BadResponse"] = 1] = "BadResponse";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["RequestTimeout"] = 2] = "RequestTimeout";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["JsonEncodeFailed"] = 3] = "JsonEncodeFailed";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["JsonDecodeFailed"] = 4] = "JsonDecodeFailed";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["InternalServerError"] = 5] = "InternalServerError";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["BadRequest"] = 6] = "BadRequest";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["Unauthorized"] = 7] = "Unauthorized";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["UnknownResponseCode"] = 8] = "UnknownResponseCode";
	            EGAHTTPApiResponse[EGAHTTPApiResponse["Ok"] = 9] = "Ok";
	        })(EGAHTTPApiResponse = http.EGAHTTPApiResponse || (http.EGAHTTPApiResponse = {}));
	    })(http = gameanalytics.http || (gameanalytics.http = {}));
	})(gameanalytics || (gameanalytics = {}));
	var EGAErrorSeverity = gameanalytics.EGAErrorSeverity;
	var EGAGender = gameanalytics.EGAGender;
	var EGAProgressionStatus = gameanalytics.EGAProgressionStatus;
	var EGAResourceFlowType = gameanalytics.EGAResourceFlowType;
	var gameanalytics;
	(function (gameanalytics) {
	    var logging;
	    (function (logging) {
	        var EGALoggerMessageType;
	        (function (EGALoggerMessageType) {
	            EGALoggerMessageType[EGALoggerMessageType["Error"] = 0] = "Error";
	            EGALoggerMessageType[EGALoggerMessageType["Warning"] = 1] = "Warning";
	            EGALoggerMessageType[EGALoggerMessageType["Info"] = 2] = "Info";
	            EGALoggerMessageType[EGALoggerMessageType["Debug"] = 3] = "Debug";
	        })(EGALoggerMessageType || (EGALoggerMessageType = {}));
	        var GALogger = (function () {
	            function GALogger() {
	                GALogger.debugEnabled = false;
	            }
	            GALogger.setInfoLog = function (value) {
	                GALogger.instance.infoLogEnabled = value;
	            };
	            GALogger.setVerboseLog = function (value) {
	                GALogger.instance.infoLogVerboseEnabled = value;
	            };
	            GALogger.i = function (format) {
	                if (!GALogger.instance.infoLogEnabled) {
	                    return;
	                }
	                var message = "Info/" + GALogger.Tag + ": " + format;
	                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
	            };
	            GALogger.w = function (format) {
	                var message = "Warning/" + GALogger.Tag + ": " + format;
	                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Warning);
	            };
	            GALogger.e = function (format) {
	                var message = "Error/" + GALogger.Tag + ": " + format;
	                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Error);
	            };
	            GALogger.ii = function (format) {
	                if (!GALogger.instance.infoLogVerboseEnabled) {
	                    return;
	                }
	                var message = "Verbose/" + GALogger.Tag + ": " + format;
	                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
	            };
	            GALogger.d = function (format) {
	                if (!GALogger.debugEnabled) {
	                    return;
	                }
	                var message = "Debug/" + GALogger.Tag + ": " + format;
	                GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Debug);
	            };
	            GALogger.prototype.sendNotificationMessage = function (message, type) {
	                switch (type) {
	                    case EGALoggerMessageType.Error:
	                        {
	                            console.error(message);
	                        }
	                        break;
	                    case EGALoggerMessageType.Warning:
	                        {
	                            console.warn(message);
	                        }
	                        break;
	                    case EGALoggerMessageType.Debug:
	                        {
	                            if (typeof console.debug === "function") {
	                                console.debug(message);
	                            }
	                            else {
	                                console.log(message);
	                            }
	                        }
	                        break;
	                    case EGALoggerMessageType.Info:
	                        {
	                            console.log(message);
	                        }
	                        break;
	                }
	            };
	            GALogger.instance = new GALogger();
	            GALogger.Tag = "GameAnalytics";
	            return GALogger;
	        }());
	        logging.GALogger = GALogger;
	    })(logging = gameanalytics.logging || (gameanalytics.logging = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var utilities;
	    (function (utilities) {
	        var GALogger = gameanalytics.logging.GALogger;
	        var GAUtilities = (function () {
	            function GAUtilities() {
	            }
	            GAUtilities.getHmac = function (key, data) {
	                var encryptedMessage = CryptoJS.HmacSHA256(data, key);
	                return CryptoJS.enc.Base64.stringify(encryptedMessage);
	            };
	            GAUtilities.stringMatch = function (s, pattern) {
	                if (!s || !pattern) {
	                    return false;
	                }
	                return pattern.test(s);
	            };
	            GAUtilities.joinStringArray = function (v, delimiter) {
	                var result = "";
	                for (var i = 0, il = v.length; i < il; i++) {
	                    if (i > 0) {
	                        result += delimiter;
	                    }
	                    result += v[i];
	                }
	                return result;
	            };
	            GAUtilities.stringArrayContainsString = function (array, search) {
	                if (array.length === 0) {
	                    return false;
	                }
	                for (var s in array) {
	                    if (array[s] === search) {
	                        return true;
	                    }
	                }
	                return false;
	            };
	            GAUtilities.encode64 = function (input) {
	                input = encodeURI(input);
	                var output = "";
	                var chr1, chr2, chr3 = 0;
	                var enc1, enc2, enc3, enc4 = 0;
	                var i = 0;
	                do {
	                    chr1 = input.charCodeAt(i++);
	                    chr2 = input.charCodeAt(i++);
	                    chr3 = input.charCodeAt(i++);
	                    enc1 = chr1 >> 2;
	                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	                    enc4 = chr3 & 63;
	                    if (isNaN(chr2)) {
	                        enc3 = enc4 = 64;
	                    }
	                    else if (isNaN(chr3)) {
	                        enc4 = 64;
	                    }
	                    output = output +
	                        GAUtilities.keyStr.charAt(enc1) +
	                        GAUtilities.keyStr.charAt(enc2) +
	                        GAUtilities.keyStr.charAt(enc3) +
	                        GAUtilities.keyStr.charAt(enc4);
	                    chr1 = chr2 = chr3 = 0;
	                    enc1 = enc2 = enc3 = enc4 = 0;
	                } while (i < input.length);
	                return output;
	            };
	            GAUtilities.decode64 = function (input) {
	                var output = "";
	                var chr1, chr2, chr3 = 0;
	                var enc1, enc2, enc3, enc4 = 0;
	                var i = 0;
	                var base64test = /[^A-Za-z0-9\+\/\=]/g;
	                if (base64test.exec(input)) {
	                    GALogger.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding.");
	                }
	                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	                do {
	                    enc1 = GAUtilities.keyStr.indexOf(input.charAt(i++));
	                    enc2 = GAUtilities.keyStr.indexOf(input.charAt(i++));
	                    enc3 = GAUtilities.keyStr.indexOf(input.charAt(i++));
	                    enc4 = GAUtilities.keyStr.indexOf(input.charAt(i++));
	                    chr1 = (enc1 << 2) | (enc2 >> 4);
	                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	                    chr3 = ((enc3 & 3) << 6) | enc4;
	                    output = output + String.fromCharCode(chr1);
	                    if (enc3 != 64) {
	                        output = output + String.fromCharCode(chr2);
	                    }
	                    if (enc4 != 64) {
	                        output = output + String.fromCharCode(chr3);
	                    }
	                    chr1 = chr2 = chr3 = 0;
	                    enc1 = enc2 = enc3 = enc4 = 0;
	                } while (i < input.length);
	                return decodeURI(output);
	            };
	            GAUtilities.timeIntervalSince1970 = function () {
	                var date = new Date();
	                return Math.round(date.getTime() / 1000);
	            };
	            GAUtilities.createGuid = function () {
	                return (GAUtilities.s4() + GAUtilities.s4() + "-" + GAUtilities.s4() + "-4" + GAUtilities.s4().substr(0, 3) + "-" + GAUtilities.s4() + "-" + GAUtilities.s4() + GAUtilities.s4() + GAUtilities.s4()).toLowerCase();
	            };
	            GAUtilities.s4 = function () {
	                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	            };
	            GAUtilities.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	            return GAUtilities;
	        }());
	        utilities.GAUtilities = GAUtilities;
	    })(utilities = gameanalytics.utilities || (gameanalytics.utilities = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var validators;
	    (function (validators) {
	        var GALogger = gameanalytics.logging.GALogger;
	        var EGASdkErrorType = gameanalytics.http.EGASdkErrorType;
	        var GAUtilities = gameanalytics.utilities.GAUtilities;
	        var GAValidator = (function () {
	            function GAValidator() {
	            }
	            GAValidator.validateBusinessEvent = function (currency, amount, cartType, itemType, itemId) {
	                if (!GAValidator.validateCurrency(currency)) {
	                    GALogger.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + currency);
	                    return false;
	                }
	                if (amount < 0) {
	                    GALogger.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + amount);
	                    return false;
	                }
	                if (!GAValidator.validateShortString(cartType, true)) {
	                    GALogger.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + cartType);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartLength(itemType, false)) {
	                    GALogger.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartCharacters(itemType)) {
	                    GALogger.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartLength(itemId, false)) {
	                    GALogger.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + itemId);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartCharacters(itemId)) {
	                    GALogger.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateResourceEvent = function (flowType, currency, amount, itemType, itemId, availableCurrencies, availableItemTypes) {
	                if (flowType == gameanalytics.EGAResourceFlowType.Undefined) {
	                    GALogger.w("Validation fail - resource event - flowType: Invalid flow type.");
	                    return false;
	                }
	                if (!currency) {
	                    GALogger.w("Validation fail - resource event - currency: Cannot be (null)");
	                    return false;
	                }
	                if (!GAUtilities.stringArrayContainsString(availableCurrencies, currency)) {
	                    GALogger.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + currency);
	                    return false;
	                }
	                if (!(amount > 0)) {
	                    GALogger.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + amount);
	                    return false;
	                }
	                if (!itemType) {
	                    GALogger.w("Validation fail - resource event - itemType: Cannot be (null)");
	                    return false;
	                }
	                if (!GAValidator.validateEventPartLength(itemType, false)) {
	                    GALogger.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartCharacters(itemType)) {
	                    GALogger.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
	                    return false;
	                }
	                if (!GAUtilities.stringArrayContainsString(availableItemTypes, itemType)) {
	                    GALogger.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + itemType);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartLength(itemId, false)) {
	                    GALogger.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + itemId);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartCharacters(itemId)) {
	                    GALogger.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateProgressionEvent = function (progressionStatus, progression01, progression02, progression03) {
	                if (progressionStatus == gameanalytics.EGAProgressionStatus.Undefined) {
	                    GALogger.w("Validation fail - progression event: Invalid progression status.");
	                    return false;
	                }
	                if (progression03 && !(progression02 || !progression01)) {
	                    GALogger.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03.");
	                    return false;
	                }
	                else if (progression02 && !progression01) {
	                    GALogger.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03");
	                    return false;
	                }
	                else if (!progression01) {
	                    GALogger.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03");
	                    return false;
	                }
	                if (!GAValidator.validateEventPartLength(progression01, false)) {
	                    GALogger.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + progression01);
	                    return false;
	                }
	                if (!GAValidator.validateEventPartCharacters(progression01)) {
	                    GALogger.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression01);
	                    return false;
	                }
	                if (progression02) {
	                    if (!GAValidator.validateEventPartLength(progression02, true)) {
	                        GALogger.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + progression02);
	                        return false;
	                    }
	                    if (!GAValidator.validateEventPartCharacters(progression02)) {
	                        GALogger.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression02);
	                        return false;
	                    }
	                }
	                if (progression03) {
	                    if (!GAValidator.validateEventPartLength(progression03, true)) {
	                        GALogger.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + progression03);
	                        return false;
	                    }
	                    if (!GAValidator.validateEventPartCharacters(progression03)) {
	                        GALogger.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression03);
	                        return false;
	                    }
	                }
	                return true;
	            };
	            GAValidator.validateDesignEvent = function (eventId, value) {
	                if (!GAValidator.validateEventIdLength(eventId)) {
	                    GALogger.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 32 characters or less. String: " + eventId);
	                    return false;
	                }
	                if (!GAValidator.validateEventIdCharacters(eventId)) {
	                    GALogger.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + eventId);
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateErrorEvent = function (severity, message) {
	                if (severity == gameanalytics.EGAErrorSeverity.Undefined) {
	                    GALogger.w("Validation fail - error event - severity: Severity was unsupported value.");
	                    return false;
	                }
	                if (!GAValidator.validateLongString(message, true)) {
	                    GALogger.w("Validation fail - error event - message: Message cannot be above 8192 characters.");
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateSdkErrorEvent = function (gameKey, gameSecret, type) {
	                if (!GAValidator.validateKeys(gameKey, gameSecret)) {
	                    return false;
	                }
	                if (type === EGASdkErrorType.Undefined) {
	                    GALogger.w("Validation fail - sdk error event - type: Type was unsupported value.");
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateKeys = function (gameKey, gameSecret) {
	                if (GAUtilities.stringMatch(gameKey, /^[A-z0-9]{32}$/)) {
	                    if (GAUtilities.stringMatch(gameSecret, /^[A-z0-9]{40}$/)) {
	                        return true;
	                    }
	                }
	                return false;
	            };
	            GAValidator.validateCurrency = function (currency) {
	                if (!currency) {
	                    return false;
	                }
	                if (!GAUtilities.stringMatch(currency, /^[A-Z]{3}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateEventPartLength = function (eventPart, allowNull) {
	                if (allowNull && !eventPart) {
	                    return true;
	                }
	                if (!eventPart) {
	                    return false;
	                }
	                if (eventPart.length > 64) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateEventPartCharacters = function (eventPart) {
	                if (!GAUtilities.stringMatch(eventPart, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateEventIdLength = function (eventId) {
	                if (!eventId) {
	                    return false;
	                }
	                if (!GAUtilities.stringMatch(eventId, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateEventIdCharacters = function (eventId) {
	                if (!eventId) {
	                    return false;
	                }
	                if (!GAUtilities.stringMatch(eventId, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateAndCleanInitRequestResponse = function (initResponse) {
	                if (initResponse == null) {
	                    GALogger.w("validateInitRequestResponse failed - no response dictionary.");
	                    return null;
	                }
	                var validatedDict = {};
	                try {
	                    validatedDict["enabled"] = initResponse["enabled"];
	                }
	                catch (e) {
	                    GALogger.w("validateInitRequestResponse failed - invalid type in 'enabled' field.");
	                    return null;
	                }
	                try {
	                    var serverTsNumber = initResponse["server_ts"];
	                    if (serverTsNumber > 0) {
	                        validatedDict["server_ts"] = serverTsNumber;
	                    }
	                    else {
	                        GALogger.w("validateInitRequestResponse failed - invalid value in 'server_ts' field.");
	                        return null;
	                    }
	                }
	                catch (e) {
	                    GALogger.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof initResponse["server_ts"] + ", value=" + initResponse["server_ts"] + ", " + e);
	                    return null;
	                }
	                try {
	                    var configurations = initResponse["configurations"];
	                    validatedDict["configurations"] = configurations;
	                }
	                catch (e) {
	                    GALogger.w("validateInitRequestResponse failed - invalid type in 'configurations' field. type=" + typeof initResponse["configurations"] + ", value=" + initResponse["configurations"] + ", " + e);
	                    return null;
	                }
	                return validatedDict;
	            };
	            GAValidator.validateBuild = function (build) {
	                if (!GAValidator.validateShortString(build, false)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateSdkWrapperVersion = function (wrapperVersion) {
	                if (!GAUtilities.stringMatch(wrapperVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateEngineVersion = function (engineVersion) {
	                if (!engineVersion || !GAUtilities.stringMatch(engineVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateUserId = function (uId) {
	                if (!GAValidator.validateString(uId, false)) {
	                    GALogger.w("Validation fail - user id: id cannot be (null), empty or above 64 characters.");
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateShortString = function (shortString, canBeEmpty) {
	                if (canBeEmpty && !shortString) {
	                    return true;
	                }
	                if (!shortString || shortString.length > 32) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateString = function (s, canBeEmpty) {
	                if (canBeEmpty && !s) {
	                    return true;
	                }
	                if (!s || s.length > 64) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateLongString = function (longString, canBeEmpty) {
	                if (canBeEmpty && !longString) {
	                    return true;
	                }
	                if (!longString || longString.length > 8192) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateConnectionType = function (connectionType) {
	                return GAUtilities.stringMatch(connectionType, /^(wwan|wifi|lan|offline)$/);
	            };
	            GAValidator.validateCustomDimensions = function (customDimensions) {
	                return GAValidator.validateArrayOfStrings(20, 32, false, "custom dimensions", customDimensions);
	            };
	            GAValidator.validateResourceCurrencies = function (resourceCurrencies) {
	                if (!GAValidator.validateArrayOfStrings(20, 64, false, "resource currencies", resourceCurrencies)) {
	                    return false;
	                }
	                for (var i = 0; i < resourceCurrencies.length; ++i) {
	                    if (!GAUtilities.stringMatch(resourceCurrencies[i], /^[A-Za-z]+$/)) {
	                        GALogger.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + resourceCurrencies[i]);
	                        return false;
	                    }
	                }
	                return true;
	            };
	            GAValidator.validateResourceItemTypes = function (resourceItemTypes) {
	                if (!GAValidator.validateArrayOfStrings(20, 32, false, "resource item types", resourceItemTypes)) {
	                    return false;
	                }
	                for (var i = 0; i < resourceItemTypes.length; ++i) {
	                    if (!GAValidator.validateEventPartCharacters(resourceItemTypes[i])) {
	                        GALogger.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + resourceItemTypes[i]);
	                        return false;
	                    }
	                }
	                return true;
	            };
	            GAValidator.validateDimension01 = function (dimension01, availableDimensions) {
	                if (!dimension01) {
	                    return true;
	                }
	                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension01)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateDimension02 = function (dimension02, availableDimensions) {
	                if (!dimension02) {
	                    return true;
	                }
	                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension02)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateDimension03 = function (dimension03, availableDimensions) {
	                if (!dimension03) {
	                    return true;
	                }
	                if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension03)) {
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateArrayOfStrings = function (maxCount, maxStringLength, allowNoValues, logTag, arrayOfStrings) {
	                var arrayTag = logTag;
	                if (!arrayTag) {
	                    arrayTag = "Array";
	                }
	                if (!arrayOfStrings) {
	                    GALogger.w(arrayTag + " validation failed: array cannot be null. ");
	                    return false;
	                }
	                if (allowNoValues == false && arrayOfStrings.length == 0) {
	                    GALogger.w(arrayTag + " validation failed: array cannot be empty. ");
	                    return false;
	                }
	                if (maxCount > 0 && arrayOfStrings.length > maxCount) {
	                    GALogger.w(arrayTag + " validation failed: array cannot exceed " + maxCount + " values. It has " + arrayOfStrings.length + " values.");
	                    return false;
	                }
	                for (var i = 0; i < arrayOfStrings.length; ++i) {
	                    var stringLength = !arrayOfStrings[i] ? 0 : arrayOfStrings[i].length;
	                    if (stringLength === 0) {
	                        GALogger.w(arrayTag + " validation failed: contained an empty string. Array=" + JSON.stringify(arrayOfStrings));
	                        return false;
	                    }
	                    if (maxStringLength > 0 && stringLength > maxStringLength) {
	                        GALogger.w(arrayTag + " validation failed: a string exceeded max allowed length (which is: " + maxStringLength + "). String was: " + arrayOfStrings[i]);
	                        return false;
	                    }
	                }
	                return true;
	            };
	            GAValidator.validateFacebookId = function (facebookId) {
	                if (!GAValidator.validateString(facebookId, false)) {
	                    GALogger.w("Validation fail - facebook id: id cannot be (null), empty or above 64 characters.");
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateGender = function (gender) {
	                if (isNaN(Number(gameanalytics.EGAGender[gender]))) {
	                    if (gender == gameanalytics.EGAGender.Undefined || !(gender == gameanalytics.EGAGender.Male || gender == gameanalytics.EGAGender.Female)) {
	                        GALogger.w("Validation fail - gender: Has to be 'male' or 'female'. Was: " + gender);
	                        return false;
	                    }
	                }
	                else {
	                    if (gender == gameanalytics.EGAGender[gameanalytics.EGAGender.Undefined] || !(gender == gameanalytics.EGAGender[gameanalytics.EGAGender.Male] || gender == gameanalytics.EGAGender[gameanalytics.EGAGender.Female])) {
	                        GALogger.w("Validation fail - gender: Has to be 'male' or 'female'. Was: " + gender);
	                        return false;
	                    }
	                }
	                return true;
	            };
	            GAValidator.validateBirthyear = function (birthYear) {
	                if (birthYear < 0 || birthYear > 9999) {
	                    GALogger.w("Validation fail - birthYear: Cannot be (null) or invalid range.");
	                    return false;
	                }
	                return true;
	            };
	            GAValidator.validateClientTs = function (clientTs) {
	                if (clientTs < (-4294967295 + 1) || clientTs > (4294967295 - 1)) {
	                    return false;
	                }
	                return true;
	            };
	            return GAValidator;
	        }());
	        validators.GAValidator = GAValidator;
	    })(validators = gameanalytics.validators || (gameanalytics.validators = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var device;
	    (function (device) {
	        var NameValueVersion = (function () {
	            function NameValueVersion(name, value, version) {
	                this.name = name;
	                this.value = value;
	                this.version = version;
	            }
	            return NameValueVersion;
	        }());
	        device.NameValueVersion = NameValueVersion;
	        var NameVersion = (function () {
	            function NameVersion(name, version) {
	                this.name = name;
	                this.version = version;
	            }
	            return NameVersion;
	        }());
	        device.NameVersion = NameVersion;
	        var GADevice = (function () {
	            function GADevice() {
	            }
	            GADevice.touch = function () {
	            };
	            GADevice.getRelevantSdkVersion = function () {
	                if (GADevice.sdkGameEngineVersion) {
	                    return GADevice.sdkGameEngineVersion;
	                }
	                return GADevice.sdkWrapperVersion;
	            };
	            GADevice.getConnectionType = function () {
	                return GADevice.connectionType;
	            };
	            GADevice.updateConnectionType = function () {
	                if (navigator.onLine) {
	                    if (GADevice.buildPlatform === "ios" || GADevice.buildPlatform === "android") {
	                        GADevice.connectionType = "wwan";
	                    }
	                    else {
	                        GADevice.connectionType = "lan";
	                    }
	                }
	                else {
	                    GADevice.connectionType = "offline";
	                }
	            };
	            GADevice.getOSVersionString = function () {
	                return GADevice.buildPlatform + " " + GADevice.osVersionPair.version;
	            };
	            GADevice.runtimePlatformToString = function () {
	                return GADevice.osVersionPair.name;
	            };
	            GADevice.getBrowserVersionString = function () {
	                var ua = navigator.userAgent;
	                var tem;
	                var M = ua.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
	                if (M.length == 0) {
	                    if (GADevice.buildPlatform === "ios") {
	                        return "webkit_" + GADevice.osVersion;
	                    }
	                }
	                if (/trident/i.test(M[1])) {
	                    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	                    return 'IE ' + (tem[1] || '');
	                }
	                if (M[1] === 'Chrome') {
	                    tem = ua.match(/\b(OPR|Edge|UBrowser)\/(\d+)/);
	                    if (tem != null) {
	                        return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('UBrowser', 'UC').toLowerCase();
	                    }
	                }
	                if (M[1] && M[1].toLowerCase() === 'fbav') {
	                    M[1] = "facebook";
	                    if (M[2]) {
	                        return "facebook " + M[2];
	                    }
	                }
	                var MString = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	                if ((tem = ua.match(/version\/(\d+)/i)) != null) {
	                    MString.splice(1, 1, tem[1]);
	                }
	                return MString.join(' ').toLowerCase();
	            };
	            GADevice.getDeviceModel = function () {
	                var result = "unknown";
	                return result;
	            };
	            GADevice.getDeviceManufacturer = function () {
	                var result = "unknown";
	                return result;
	            };
	            GADevice.matchItem = function (agent, data) {
	                var result = new NameVersion("unknown", "0.0.0");
	                var i = 0;
	                var j = 0;
	                var regex;
	                var regexv;
	                var match;
	                var matches;
	                var mathcesResult;
	                var version;
	                for (i = 0; i < data.length; i += 1) {
	                    regex = new RegExp(data[i].value, 'i');
	                    match = regex.test(agent);
	                    if (match) {
	                        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
	                        matches = agent.match(regexv);
	                        version = '';
	                        if (matches) {
	                            if (matches[1]) {
	                                mathcesResult = matches[1];
	                            }
	                        }
	                        if (mathcesResult) {
	                            var matchesArray = mathcesResult.split(/[._]+/);
	                            for (j = 0; j < Math.min(matchesArray.length, 3); j += 1) {
	                                version += matchesArray[j] + (j < Math.min(matchesArray.length, 3) - 1 ? '.' : '');
	                            }
	                        }
	                        else {
	                            version = '0.0.0';
	                        }
	                        result.name = data[i].name;
	                        result.version = version;
	                        return result;
	                    }
	                }
	                return result;
	            };
	            GADevice.sdkWrapperVersion = "javascript 3.1.2";
	            GADevice.osVersionPair = GADevice.matchItem([
	                navigator.platform,
	                navigator.userAgent,
	                navigator.appVersion,
	                navigator.vendor
	            ].join(' '), [
	                new NameValueVersion("windows_phone", "Windows Phone", "OS"),
	                new NameValueVersion("windows", "Win", "NT"),
	                new NameValueVersion("ios", "iPhone", "OS"),
	                new NameValueVersion("ios", "iPad", "OS"),
	                new NameValueVersion("ios", "iPod", "OS"),
	                new NameValueVersion("android", "Android", "Android"),
	                new NameValueVersion("blackBerry", "BlackBerry", "/"),
	                new NameValueVersion("mac_osx", "Mac", "OS X"),
	                new NameValueVersion("tizen", "Tizen", "Tizen"),
	                new NameValueVersion("linux", "Linux", "rv")
	            ]);
	            GADevice.buildPlatform = GADevice.runtimePlatformToString();
	            GADevice.deviceModel = GADevice.getDeviceModel();
	            GADevice.deviceManufacturer = GADevice.getDeviceManufacturer();
	            GADevice.osVersion = GADevice.getOSVersionString();
	            GADevice.browserVersion = GADevice.getBrowserVersionString();
	            GADevice.maxSafeInteger = Math.pow(2, 53) - 1;
	            return GADevice;
	        }());
	        device.GADevice = GADevice;
	    })(device = gameanalytics.device || (gameanalytics.device = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var threading;
	    (function (threading) {
	        var TimedBlock = (function () {
	            function TimedBlock(deadline) {
	                this.deadline = deadline;
	                this.ignore = false;
	                this.async = false;
	                this.running = false;
	                this.id = ++TimedBlock.idCounter;
	            }
	            TimedBlock.idCounter = 0;
	            return TimedBlock;
	        }());
	        threading.TimedBlock = TimedBlock;
	    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var threading;
	    (function (threading) {
	        var PriorityQueue = (function () {
	            function PriorityQueue(priorityComparer) {
	                this.comparer = priorityComparer;
	                this._subQueues = {};
	                this._sortedKeys = [];
	            }
	            PriorityQueue.prototype.enqueue = function (priority, item) {
	                if (this._sortedKeys.indexOf(priority) === -1) {
	                    this.addQueueOfPriority(priority);
	                }
	                this._subQueues[priority].push(item);
	            };
	            PriorityQueue.prototype.addQueueOfPriority = function (priority) {
	                var _this = this;
	                this._sortedKeys.push(priority);
	                this._sortedKeys.sort(function (x, y) { return _this.comparer.compare(x, y); });
	                this._subQueues[priority] = [];
	            };
	            PriorityQueue.prototype.peek = function () {
	                if (this.hasItems()) {
	                    return this._subQueues[this._sortedKeys[0]][0];
	                }
	                else {
	                    throw new Error("The queue is empty");
	                }
	            };
	            PriorityQueue.prototype.hasItems = function () {
	                return this._sortedKeys.length > 0;
	            };
	            PriorityQueue.prototype.dequeue = function () {
	                if (this.hasItems()) {
	                    return this.dequeueFromHighPriorityQueue();
	                }
	                else {
	                    throw new Error("The queue is empty");
	                }
	            };
	            PriorityQueue.prototype.dequeueFromHighPriorityQueue = function () {
	                var firstKey = this._sortedKeys[0];
	                var nextItem = this._subQueues[firstKey].shift();
	                if (this._subQueues[firstKey].length === 0) {
	                    this._sortedKeys.shift();
	                    delete this._subQueues[firstKey];
	                }
	                return nextItem;
	            };
	            return PriorityQueue;
	        }());
	        threading.PriorityQueue = PriorityQueue;
	    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var store;
	    (function (store_1) {
	        var GALogger = gameanalytics.logging.GALogger;
	        var EGAStoreArgsOperator;
	        (function (EGAStoreArgsOperator) {
	            EGAStoreArgsOperator[EGAStoreArgsOperator["Equal"] = 0] = "Equal";
	            EGAStoreArgsOperator[EGAStoreArgsOperator["LessOrEqual"] = 1] = "LessOrEqual";
	            EGAStoreArgsOperator[EGAStoreArgsOperator["NotEqual"] = 2] = "NotEqual";
	        })(EGAStoreArgsOperator = store_1.EGAStoreArgsOperator || (store_1.EGAStoreArgsOperator = {}));
	        var EGAStore;
	        (function (EGAStore) {
	            EGAStore[EGAStore["Events"] = 0] = "Events";
	            EGAStore[EGAStore["Sessions"] = 1] = "Sessions";
	            EGAStore[EGAStore["Progression"] = 2] = "Progression";
	        })(EGAStore = store_1.EGAStore || (store_1.EGAStore = {}));
	        var GAStore = (function () {
	            function GAStore() {
	                this.eventsStore = [];
	                this.sessionsStore = [];
	                this.progressionStore = [];
	                this.storeItems = {};
	                try {
	                    if (typeof localStorage === 'object') {
	                        localStorage.setItem('testingLocalStorage', 'yes');
	                        localStorage.removeItem('testingLocalStorage');
	                        GAStore.storageAvailable = true;
	                    }
	                    else {
	                        GAStore.storageAvailable = false;
	                    }
	                }
	                catch (e) {
	                }
	            }
	            GAStore.isStorageAvailable = function () {
	                return GAStore.storageAvailable;
	            };
	            GAStore.isStoreTooLargeForEvents = function () {
	                return GAStore.instance.eventsStore.length + GAStore.instance.sessionsStore.length > GAStore.MaxNumberOfEntries;
	            };
	            GAStore.select = function (store, args, sort, maxCount) {
	                if (args === void 0) { args = []; }
	                if (sort === void 0) { sort = false; }
	                if (maxCount === void 0) { maxCount = 0; }
	                var currentStore = GAStore.getStore(store);
	                if (!currentStore) {
	                    return null;
	                }
	                var result = [];
	                for (var i = 0; i < currentStore.length; ++i) {
	                    var entry = currentStore[i];
	                    var add = true;
	                    for (var j = 0; j < args.length; ++j) {
	                        var argsEntry = args[j];
	                        if (entry[argsEntry[0]]) {
	                            switch (argsEntry[1]) {
	                                case EGAStoreArgsOperator.Equal:
	                                    {
	                                        add = entry[argsEntry[0]] == argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.LessOrEqual:
	                                    {
	                                        add = entry[argsEntry[0]] <= argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.NotEqual:
	                                    {
	                                        add = entry[argsEntry[0]] != argsEntry[2];
	                                    }
	                                    break;
	                                default:
	                                    {
	                                        add = false;
	                                    }
	                                    break;
	                            }
	                        }
	                        else {
	                            add = false;
	                        }
	                        if (!add) {
	                            break;
	                        }
	                    }
	                    if (add) {
	                        result.push(entry);
	                    }
	                }
	                if (sort) {
	                    result.sort(function (a, b) {
	                        return a["client_ts"] - b["client_ts"];
	                    });
	                }
	                if (maxCount > 0 && result.length > maxCount) {
	                    result = result.slice(0, maxCount + 1);
	                }
	                return result;
	            };
	            GAStore.update = function (store, setArgs, whereArgs) {
	                if (whereArgs === void 0) { whereArgs = []; }
	                var currentStore = GAStore.getStore(store);
	                if (!currentStore) {
	                    return false;
	                }
	                for (var i = 0; i < currentStore.length; ++i) {
	                    var entry = currentStore[i];
	                    var update = true;
	                    for (var j = 0; j < whereArgs.length; ++j) {
	                        var argsEntry = whereArgs[j];
	                        if (entry[argsEntry[0]]) {
	                            switch (argsEntry[1]) {
	                                case EGAStoreArgsOperator.Equal:
	                                    {
	                                        update = entry[argsEntry[0]] == argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.LessOrEqual:
	                                    {
	                                        update = entry[argsEntry[0]] <= argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.NotEqual:
	                                    {
	                                        update = entry[argsEntry[0]] != argsEntry[2];
	                                    }
	                                    break;
	                                default:
	                                    {
	                                        update = false;
	                                    }
	                                    break;
	                            }
	                        }
	                        else {
	                            update = false;
	                        }
	                        if (!update) {
	                            break;
	                        }
	                    }
	                    if (update) {
	                        for (var j = 0; j < setArgs.length; ++j) {
	                            var setArgsEntry = setArgs[j];
	                            entry[setArgsEntry[0]] = setArgsEntry[1];
	                        }
	                    }
	                }
	                return true;
	            };
	            GAStore["delete"] = function (store, args) {
	                var currentStore = GAStore.getStore(store);
	                if (!currentStore) {
	                    return;
	                }
	                for (var i = 0; i < currentStore.length; ++i) {
	                    var entry = currentStore[i];
	                    var del = true;
	                    for (var j = 0; j < args.length; ++j) {
	                        var argsEntry = args[j];
	                        if (entry[argsEntry[0]]) {
	                            switch (argsEntry[1]) {
	                                case EGAStoreArgsOperator.Equal:
	                                    {
	                                        del = entry[argsEntry[0]] == argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.LessOrEqual:
	                                    {
	                                        del = entry[argsEntry[0]] <= argsEntry[2];
	                                    }
	                                    break;
	                                case EGAStoreArgsOperator.NotEqual:
	                                    {
	                                        del = entry[argsEntry[0]] != argsEntry[2];
	                                    }
	                                    break;
	                                default:
	                                    {
	                                        del = false;
	                                    }
	                                    break;
	                            }
	                        }
	                        else {
	                            del = false;
	                        }
	                        if (!del) {
	                            break;
	                        }
	                    }
	                    if (del) {
	                        currentStore.splice(i, 1);
	                        --i;
	                    }
	                }
	            };
	            GAStore.insert = function (store, newEntry, replace, replaceKey) {
	                if (replace === void 0) { replace = false; }
	                if (replaceKey === void 0) { replaceKey = null; }
	                var currentStore = GAStore.getStore(store);
	                if (!currentStore) {
	                    return;
	                }
	                if (replace) {
	                    if (!replaceKey) {
	                        return;
	                    }
	                    var replaced = false;
	                    for (var i = 0; i < currentStore.length; ++i) {
	                        var entry = currentStore[i];
	                        if (entry[replaceKey] == newEntry[replaceKey]) {
	                            for (var s in newEntry) {
	                                entry[s] = newEntry[s];
	                            }
	                            replaced = true;
	                            break;
	                        }
	                    }
	                    if (!replaced) {
	                        currentStore.push(newEntry);
	                    }
	                }
	                else {
	                    currentStore.push(newEntry);
	                }
	            };
	            GAStore.save = function () {
	                if (!GAStore.isStorageAvailable()) {
	                    GALogger.w("Storage is not available, cannot save.");
	                    return;
	                }
	                localStorage.setItem(GAStore.KeyPrefix + GAStore.EventsStoreKey, JSON.stringify(GAStore.instance.eventsStore));
	                localStorage.setItem(GAStore.KeyPrefix + GAStore.SessionsStoreKey, JSON.stringify(GAStore.instance.sessionsStore));
	                localStorage.setItem(GAStore.KeyPrefix + GAStore.ProgressionStoreKey, JSON.stringify(GAStore.instance.progressionStore));
	                localStorage.setItem(GAStore.KeyPrefix + GAStore.ItemsStoreKey, JSON.stringify(GAStore.instance.storeItems));
	            };
	            GAStore.load = function () {
	                if (!GAStore.isStorageAvailable()) {
	                    GALogger.w("Storage is not available, cannot load.");
	                    return;
	                }
	                try {
	                    GAStore.instance.eventsStore = JSON.parse(localStorage.getItem(GAStore.KeyPrefix + GAStore.EventsStoreKey));
	                    if (!GAStore.instance.eventsStore) {
	                        GAStore.instance.eventsStore = [];
	                    }
	                }
	                catch (e) {
	                    GALogger.w("Load failed for 'events' store. Using empty store.");
	                    GAStore.instance.eventsStore = [];
	                }
	                try {
	                    GAStore.instance.sessionsStore = JSON.parse(localStorage.getItem(GAStore.KeyPrefix + GAStore.SessionsStoreKey));
	                    if (!GAStore.instance.sessionsStore) {
	                        GAStore.instance.sessionsStore = [];
	                    }
	                }
	                catch (e) {
	                    GALogger.w("Load failed for 'sessions' store. Using empty store.");
	                    GAStore.instance.sessionsStore = [];
	                }
	                try {
	                    GAStore.instance.progressionStore = JSON.parse(localStorage.getItem(GAStore.KeyPrefix + GAStore.ProgressionStoreKey));
	                    if (!GAStore.instance.progressionStore) {
	                        GAStore.instance.progressionStore = [];
	                    }
	                }
	                catch (e) {
	                    GALogger.w("Load failed for 'progression' store. Using empty store.");
	                    GAStore.instance.progressionStore = [];
	                }
	                try {
	                    GAStore.instance.storeItems = JSON.parse(localStorage.getItem(GAStore.KeyPrefix + GAStore.ItemsStoreKey));
	                    if (!GAStore.instance.storeItems) {
	                        GAStore.instance.storeItems = {};
	                    }
	                }
	                catch (e) {
	                    GALogger.w("Load failed for 'items' store. Using empty store.");
	                    GAStore.instance.progressionStore = [];
	                }
	            };
	            GAStore.setItem = function (key, value) {
	                var keyWithPrefix = GAStore.KeyPrefix + key;
	                if (!value) {
	                    if (keyWithPrefix in GAStore.instance.storeItems) {
	                        delete GAStore.instance.storeItems[keyWithPrefix];
	                    }
	                }
	                else {
	                    GAStore.instance.storeItems[keyWithPrefix] = value;
	                }
	            };
	            GAStore.getItem = function (key) {
	                var keyWithPrefix = GAStore.KeyPrefix + key;
	                if (keyWithPrefix in GAStore.instance.storeItems) {
	                    return GAStore.instance.storeItems[keyWithPrefix];
	                }
	                else {
	                    return null;
	                }
	            };
	            GAStore.getStore = function (store) {
	                switch (store) {
	                    case EGAStore.Events:
	                        {
	                            return GAStore.instance.eventsStore;
	                        }
	                    case EGAStore.Sessions:
	                        {
	                            return GAStore.instance.sessionsStore;
	                        }
	                    case EGAStore.Progression:
	                        {
	                            return GAStore.instance.progressionStore;
	                        }
	                    default:
	                        {
	                            GALogger.w("GAStore.getStore(): Cannot find store: " + store);
	                            return null;
	                        }
	                }
	            };
	            GAStore.instance = new GAStore();
	            GAStore.MaxNumberOfEntries = 2000;
	            GAStore.KeyPrefix = "GA::";
	            GAStore.EventsStoreKey = "ga_event";
	            GAStore.SessionsStoreKey = "ga_session";
	            GAStore.ProgressionStoreKey = "ga_progression";
	            GAStore.ItemsStoreKey = "ga_items";
	            return GAStore;
	        }());
	        store_1.GAStore = GAStore;
	    })(store = gameanalytics.store || (gameanalytics.store = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var state;
	    (function (state) {
	        var GAValidator = gameanalytics.validators.GAValidator;
	        var GAUtilities = gameanalytics.utilities.GAUtilities;
	        var GALogger = gameanalytics.logging.GALogger;
	        var GAStore = gameanalytics.store.GAStore;
	        var GADevice = gameanalytics.device.GADevice;
	        var EGAStore = gameanalytics.store.EGAStore;
	        var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
	        var GAState = (function () {
	            function GAState() {
	                this.availableCustomDimensions01 = [];
	                this.availableCustomDimensions02 = [];
	                this.availableCustomDimensions03 = [];
	                this.availableResourceCurrencies = [];
	                this.availableResourceItemTypes = [];
	                this.configurations = {};
	                this.commandCenterListeners = [];
	                this.sdkConfigDefault = {};
	                this.sdkConfig = {};
	                this.progressionTries = {};
	                this._isEventSubmissionEnabled = true;
	            }
	            GAState.setUserId = function (userId) {
	                GAState.instance.userId = userId;
	                GAState.cacheIdentifier();
	            };
	            GAState.getIdentifier = function () {
	                return GAState.instance.identifier;
	            };
	            GAState.isInitialized = function () {
	                return GAState.instance.initialized;
	            };
	            GAState.setInitialized = function (value) {
	                GAState.instance.initialized = value;
	            };
	            GAState.getSessionStart = function () {
	                return GAState.instance.sessionStart;
	            };
	            GAState.getSessionNum = function () {
	                return GAState.instance.sessionNum;
	            };
	            GAState.getTransactionNum = function () {
	                return GAState.instance.transactionNum;
	            };
	            GAState.getSessionId = function () {
	                return GAState.instance.sessionId;
	            };
	            GAState.getCurrentCustomDimension01 = function () {
	                return GAState.instance.currentCustomDimension01;
	            };
	            GAState.getCurrentCustomDimension02 = function () {
	                return GAState.instance.currentCustomDimension02;
	            };
	            GAState.getCurrentCustomDimension03 = function () {
	                return GAState.instance.currentCustomDimension03;
	            };
	            GAState.getGameKey = function () {
	                return GAState.instance.gameKey;
	            };
	            GAState.getGameSecret = function () {
	                return GAState.instance.gameSecret;
	            };
	            GAState.getAvailableCustomDimensions01 = function () {
	                return GAState.instance.availableCustomDimensions01;
	            };
	            GAState.setAvailableCustomDimensions01 = function (value) {
	                if (!GAValidator.validateCustomDimensions(value)) {
	                    return;
	                }
	                GAState.instance.availableCustomDimensions01 = value;
	                GAState.validateAndFixCurrentDimensions();
	                GALogger.i("Set available custom01 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
	            };
	            GAState.getAvailableCustomDimensions02 = function () {
	                return GAState.instance.availableCustomDimensions02;
	            };
	            GAState.setAvailableCustomDimensions02 = function (value) {
	                if (!GAValidator.validateCustomDimensions(value)) {
	                    return;
	                }
	                GAState.instance.availableCustomDimensions02 = value;
	                GAState.validateAndFixCurrentDimensions();
	                GALogger.i("Set available custom02 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
	            };
	            GAState.getAvailableCustomDimensions03 = function () {
	                return GAState.instance.availableCustomDimensions03;
	            };
	            GAState.setAvailableCustomDimensions03 = function (value) {
	                if (!GAValidator.validateCustomDimensions(value)) {
	                    return;
	                }
	                GAState.instance.availableCustomDimensions03 = value;
	                GAState.validateAndFixCurrentDimensions();
	                GALogger.i("Set available custom03 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
	            };
	            GAState.getAvailableResourceCurrencies = function () {
	                return GAState.instance.availableResourceCurrencies;
	            };
	            GAState.setAvailableResourceCurrencies = function (value) {
	                if (!GAValidator.validateResourceCurrencies(value)) {
	                    return;
	                }
	                GAState.instance.availableResourceCurrencies = value;
	                GALogger.i("Set available resource currencies: (" + GAUtilities.joinStringArray(value, ", ") + ")");
	            };
	            GAState.getAvailableResourceItemTypes = function () {
	                return GAState.instance.availableResourceItemTypes;
	            };
	            GAState.setAvailableResourceItemTypes = function (value) {
	                if (!GAValidator.validateResourceItemTypes(value)) {
	                    return;
	                }
	                GAState.instance.availableResourceItemTypes = value;
	                GALogger.i("Set available resource item types: (" + GAUtilities.joinStringArray(value, ", ") + ")");
	            };
	            GAState.getBuild = function () {
	                return GAState.instance.build;
	            };
	            GAState.setBuild = function (value) {
	                GAState.instance.build = value;
	                GALogger.i("Set build version: " + value);
	            };
	            GAState.getUseManualSessionHandling = function () {
	                return GAState.instance.useManualSessionHandling;
	            };
	            GAState.isEventSubmissionEnabled = function () {
	                return GAState.instance._isEventSubmissionEnabled;
	            };
	            GAState.prototype.setDefaultId = function (value) {
	                this.defaultUserId = !value ? "" : value;
	                GAState.cacheIdentifier();
	            };
	            GAState.getDefaultId = function () {
	                return GAState.instance.defaultUserId;
	            };
	            GAState.getSdkConfig = function () {
	                {
	                    var first;
	                    var count = 0;
	                    for (var json in GAState.instance.sdkConfig) {
	                        if (count === 0) {
	                            first = json;
	                        }
	                        ++count;
	                    }
	                    if (first && count > 0) {
	                        return GAState.instance.sdkConfig;
	                    }
	                }
	                {
	                    var first;
	                    var count = 0;
	                    for (var json in GAState.instance.sdkConfigCached) {
	                        if (count === 0) {
	                            first = json;
	                        }
	                        ++count;
	                    }
	                    if (first && count > 0) {
	                        return GAState.instance.sdkConfigCached;
	                    }
	                }
	                return GAState.instance.sdkConfigDefault;
	            };
	            GAState.isEnabled = function () {
	                var currentSdkConfig = GAState.getSdkConfig();
	                if (currentSdkConfig["enabled"] && currentSdkConfig["enabled"] == "false") {
	                    return false;
	                }
	                else if (!GAState.instance.initAuthorized) {
	                    return false;
	                }
	                else {
	                    return true;
	                }
	            };
	            GAState.setCustomDimension01 = function (dimension) {
	                GAState.instance.currentCustomDimension01 = dimension;
	                GAStore.setItem(GAState.Dimension01Key, dimension);
	                GALogger.i("Set custom01 dimension value: " + dimension);
	            };
	            GAState.setCustomDimension02 = function (dimension) {
	                GAState.instance.currentCustomDimension02 = dimension;
	                GAStore.setItem(GAState.Dimension02Key, dimension);
	                GALogger.i("Set custom02 dimension value: " + dimension);
	            };
	            GAState.setCustomDimension03 = function (dimension) {
	                GAState.instance.currentCustomDimension03 = dimension;
	                GAStore.setItem(GAState.Dimension03Key, dimension);
	                GALogger.i("Set custom03 dimension value: " + dimension);
	            };
	            GAState.setFacebookId = function (facebookId) {
	                GAState.instance.facebookId = facebookId;
	                GAStore.setItem(GAState.FacebookIdKey, facebookId);
	                GALogger.i("Set facebook id: " + facebookId);
	            };
	            GAState.setGender = function (gender) {
	                GAState.instance.gender = isNaN(Number(gameanalytics.EGAGender[gender])) ? gameanalytics.EGAGender[gender].toString().toLowerCase() : gameanalytics.EGAGender[gameanalytics.EGAGender[gender]].toString().toLowerCase();
	                GAStore.setItem(GAState.GenderKey, GAState.instance.gender);
	                GALogger.i("Set gender: " + GAState.instance.gender);
	            };
	            GAState.setBirthYear = function (birthYear) {
	                GAState.instance.birthYear = birthYear;
	                GAStore.setItem(GAState.BirthYearKey, birthYear.toString());
	                GALogger.i("Set birth year: " + birthYear);
	            };
	            GAState.incrementSessionNum = function () {
	                var sessionNumInt = GAState.getSessionNum() + 1;
	                GAState.instance.sessionNum = sessionNumInt;
	            };
	            GAState.incrementTransactionNum = function () {
	                var transactionNumInt = GAState.getTransactionNum() + 1;
	                GAState.instance.transactionNum = transactionNumInt;
	            };
	            GAState.incrementProgressionTries = function (progression) {
	                var tries = GAState.getProgressionTries(progression) + 1;
	                GAState.instance.progressionTries[progression] = tries;
	                var values = {};
	                values["progression"] = progression;
	                values["tries"] = tries;
	                GAStore.insert(EGAStore.Progression, values, true, "progression");
	            };
	            GAState.getProgressionTries = function (progression) {
	                if (progression in GAState.instance.progressionTries) {
	                    return GAState.instance.progressionTries[progression];
	                }
	                else {
	                    return 0;
	                }
	            };
	            GAState.clearProgressionTries = function (progression) {
	                if (progression in GAState.instance.progressionTries) {
	                    delete GAState.instance.progressionTries[progression];
	                }
	                var parms = [];
	                parms.push(["progression", EGAStoreArgsOperator.Equal, progression]);
	                GAStore["delete"](EGAStore.Progression, parms);
	            };
	            GAState.setKeys = function (gameKey, gameSecret) {
	                GAState.instance.gameKey = gameKey;
	                GAState.instance.gameSecret = gameSecret;
	            };
	            GAState.setManualSessionHandling = function (flag) {
	                GAState.instance.useManualSessionHandling = flag;
	                GALogger.i("Use manual session handling: " + flag);
	            };
	            GAState.setEnabledEventSubmission = function (flag) {
	                GAState.instance._isEventSubmissionEnabled = flag;
	            };
	            GAState.getEventAnnotations = function () {
	                var annotations = {};
	                annotations["v"] = 2;
	                annotations["user_id"] = GAState.instance.identifier;
	                annotations["client_ts"] = GAState.getClientTsAdjusted();
	                annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
	                annotations["os_version"] = GADevice.osVersion;
	                annotations["manufacturer"] = GADevice.deviceManufacturer;
	                annotations["device"] = GADevice.deviceModel;
	                annotations["browser_version"] = GADevice.browserVersion;
	                annotations["platform"] = GADevice.buildPlatform;
	                annotations["session_id"] = GAState.instance.sessionId;
	                annotations[GAState.SessionNumKey] = GAState.instance.sessionNum;
	                var connection_type = GADevice.getConnectionType();
	                if (GAValidator.validateConnectionType(connection_type)) {
	                    annotations["connection_type"] = connection_type;
	                }
	                if (GADevice.gameEngineVersion) {
	                    annotations["engine_version"] = GADevice.gameEngineVersion;
	                }
	                if (GAState.instance.build) {
	                    annotations["build"] = GAState.instance.build;
	                }
	                if (GAState.instance.facebookId) {
	                    annotations[GAState.FacebookIdKey] = GAState.instance.facebookId;
	                }
	                if (GAState.instance.gender) {
	                    annotations[GAState.GenderKey] = GAState.instance.gender;
	                }
	                if (GAState.instance.birthYear != 0) {
	                    annotations[GAState.BirthYearKey] = GAState.instance.birthYear;
	                }
	                return annotations;
	            };
	            GAState.getSdkErrorEventAnnotations = function () {
	                var annotations = {};
	                annotations["v"] = 2;
	                annotations["category"] = GAState.CategorySdkError;
	                annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
	                annotations["os_version"] = GADevice.osVersion;
	                annotations["manufacturer"] = GADevice.deviceManufacturer;
	                annotations["device"] = GADevice.deviceModel;
	                annotations["platform"] = GADevice.buildPlatform;
	                var connection_type = GADevice.getConnectionType();
	                if (GAValidator.validateConnectionType(connection_type)) {
	                    annotations["connection_type"] = connection_type;
	                }
	                if (GADevice.gameEngineVersion) {
	                    annotations["engine_version"] = GADevice.gameEngineVersion;
	                }
	                return annotations;
	            };
	            GAState.getInitAnnotations = function () {
	                var initAnnotations = {};
	                initAnnotations["user_id"] = GAState.getIdentifier();
	                initAnnotations["sdk_version"] = GADevice.getRelevantSdkVersion();
	                initAnnotations["os_version"] = GADevice.osVersion;
	                initAnnotations["platform"] = GADevice.buildPlatform;
	                return initAnnotations;
	            };
	            GAState.getClientTsAdjusted = function () {
	                var clientTs = GAUtilities.timeIntervalSince1970();
	                var clientTsAdjustedInteger = clientTs + GAState.instance.clientServerTimeOffset;
	                if (GAValidator.validateClientTs(clientTsAdjustedInteger)) {
	                    return clientTsAdjustedInteger;
	                }
	                else {
	                    return clientTs;
	                }
	            };
	            GAState.sessionIsStarted = function () {
	                return GAState.instance.sessionStart != 0;
	            };
	            GAState.cacheIdentifier = function () {
	                if (GAState.instance.userId) {
	                    GAState.instance.identifier = GAState.instance.userId;
	                }
	                else if (GAState.instance.defaultUserId) {
	                    GAState.instance.identifier = GAState.instance.defaultUserId;
	                }
	            };
	            GAState.ensurePersistedStates = function () {
	                if (GAStore.isStorageAvailable()) {
	                    GAStore.load();
	                }
	                var instance = GAState.instance;
	                instance.setDefaultId(GAStore.getItem(GAState.DefaultUserIdKey) != null ? GAStore.getItem(GAState.DefaultUserIdKey) : GAUtilities.createGuid());
	                instance.sessionNum = GAStore.getItem(GAState.SessionNumKey) != null ? Number(GAStore.getItem(GAState.SessionNumKey)) : 0.0;
	                instance.transactionNum = GAStore.getItem(GAState.TransactionNumKey) != null ? Number(GAStore.getItem(GAState.TransactionNumKey)) : 0.0;
	                if (instance.facebookId) {
	                    GAStore.setItem(GAState.FacebookIdKey, instance.facebookId);
	                }
	                else {
	                    instance.facebookId = GAStore.getItem(GAState.FacebookIdKey) != null ? GAStore.getItem(GAState.FacebookIdKey) : "";
	                    if (instance.facebookId) ;
	                }
	                if (instance.gender) {
	                    GAStore.setItem(GAState.GenderKey, instance.gender);
	                }
	                else {
	                    instance.gender = GAStore.getItem(GAState.GenderKey) != null ? GAStore.getItem(GAState.GenderKey) : "";
	                    if (instance.gender) ;
	                }
	                if (instance.birthYear && instance.birthYear != 0) {
	                    GAStore.setItem(GAState.BirthYearKey, instance.birthYear.toString());
	                }
	                else {
	                    instance.birthYear = GAStore.getItem(GAState.BirthYearKey) != null ? Number(GAStore.getItem(GAState.BirthYearKey)) : 0;
	                    if (instance.birthYear != 0) ;
	                }
	                if (instance.currentCustomDimension01) {
	                    GAStore.setItem(GAState.Dimension01Key, instance.currentCustomDimension01);
	                }
	                else {
	                    instance.currentCustomDimension01 = GAStore.getItem(GAState.Dimension01Key) != null ? GAStore.getItem(GAState.Dimension01Key) : "";
	                    if (instance.currentCustomDimension01) ;
	                }
	                if (instance.currentCustomDimension02) {
	                    GAStore.setItem(GAState.Dimension02Key, instance.currentCustomDimension02);
	                }
	                else {
	                    instance.currentCustomDimension02 = GAStore.getItem(GAState.Dimension02Key) != null ? GAStore.getItem(GAState.Dimension02Key) : "";
	                    if (instance.currentCustomDimension02) ;
	                }
	                if (instance.currentCustomDimension03) {
	                    GAStore.setItem(GAState.Dimension03Key, instance.currentCustomDimension03);
	                }
	                else {
	                    instance.currentCustomDimension03 = GAStore.getItem(GAState.Dimension03Key) != null ? GAStore.getItem(GAState.Dimension03Key) : "";
	                    if (instance.currentCustomDimension03) ;
	                }
	                var sdkConfigCachedString = GAStore.getItem(GAState.SdkConfigCachedKey) != null ? GAStore.getItem(GAState.SdkConfigCachedKey) : "";
	                if (sdkConfigCachedString) {
	                    var sdkConfigCached = JSON.parse(GAUtilities.decode64(sdkConfigCachedString));
	                    if (sdkConfigCached) {
	                        instance.sdkConfigCached = sdkConfigCached;
	                    }
	                }
	                var results_ga_progression = GAStore.select(EGAStore.Progression);
	                if (results_ga_progression) {
	                    for (var i = 0; i < results_ga_progression.length; ++i) {
	                        var result = results_ga_progression[i];
	                        if (result) {
	                            instance.progressionTries[result["progression"]] = result["tries"];
	                        }
	                    }
	                }
	            };
	            GAState.calculateServerTimeOffset = function (serverTs) {
	                var clientTs = GAUtilities.timeIntervalSince1970();
	                return serverTs - clientTs;
	            };
	            GAState.validateAndCleanCustomFields = function (fields) {
	                var result = {};
	                if (fields) {
	                    var count = 0;
	                    for (var key in fields) {
	                        var value = fields[key];
	                        if (!key || !value) {
	                            GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value +
	                                " has been omitted because its key or value is null");
	                        }
	                        else if (count < GAState.MAX_CUSTOM_FIELDS_COUNT) {
	                            var regex = new RegExp("^[a-zA-Z0-9_]{1," + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
	                            if (GAUtilities.stringMatch(key, regex)) {
	                                var type = typeof value;
	                                if (type === "string" || value instanceof String) {
	                                    var valueAsString = value;
	                                    if (valueAsString.length <= GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && valueAsString.length > 0) {
	                                        result[key] = valueAsString;
	                                        ++count;
	                                    }
	                                    else {
	                                        GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is an empty string or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")");
	                                    }
	                                }
	                                else if (type === "number" || value instanceof Number) {
	                                    var valueAsNumber = value;
	                                    result[key] = valueAsNumber;
	                                    ++count;
	                                }
	                                else {
	                                    GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is not a string or number");
	                                }
	                            }
	                            else {
	                                GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")");
	                            }
	                        }
	                        else {
	                            GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because it exceeds the max number of custom fields (" + GAState.MAX_CUSTOM_FIELDS_COUNT + ")");
	                        }
	                    }
	                }
	                return result;
	            };
	            GAState.validateAndFixCurrentDimensions = function () {
	                if (!GAValidator.validateDimension01(GAState.getCurrentCustomDimension01(), GAState.getAvailableCustomDimensions01())) {
	                    GAState.setCustomDimension01("");
	                }
	                if (!GAValidator.validateDimension02(GAState.getCurrentCustomDimension02(), GAState.getAvailableCustomDimensions02())) {
	                    GAState.setCustomDimension02("");
	                }
	                if (!GAValidator.validateDimension03(GAState.getCurrentCustomDimension03(), GAState.getAvailableCustomDimensions03())) {
	                    GAState.setCustomDimension03("");
	                }
	            };
	            GAState.getConfigurationStringValue = function (key, defaultValue) {
	                if (GAState.instance.configurations[key]) {
	                    return GAState.instance.configurations[key].toString();
	                }
	                else {
	                    return defaultValue;
	                }
	            };
	            GAState.isCommandCenterReady = function () {
	                return GAState.instance.commandCenterIsReady;
	            };
	            GAState.addCommandCenterListener = function (listener) {
	                if (GAState.instance.commandCenterListeners.indexOf(listener) < 0) {
	                    GAState.instance.commandCenterListeners.push(listener);
	                }
	            };
	            GAState.removeCommandCenterListener = function (listener) {
	                var index = GAState.instance.commandCenterListeners.indexOf(listener);
	                if (index > -1) {
	                    GAState.instance.commandCenterListeners.splice(index, 1);
	                }
	            };
	            GAState.getConfigurationsContentAsString = function () {
	                return JSON.stringify(GAState.instance.configurations);
	            };
	            GAState.populateConfigurations = function (sdkConfig) {
	                var configurations = sdkConfig["configurations"];
	                if (configurations) {
	                    for (var i = 0; i < configurations.length; ++i) {
	                        var configuration = configurations[i];
	                        if (configuration) {
	                            var key = configuration["key"];
	                            var value = configuration["value"];
	                            var start_ts = configuration["start"] ? configuration["start"] : Number.MIN_VALUE;
	                            var end_ts = configuration["end"] ? configuration["end"] : Number.MAX_VALUE;
	                            var client_ts_adjusted = GAState.getClientTsAdjusted();
	                            if (key && value && client_ts_adjusted > start_ts && client_ts_adjusted < end_ts) {
	                                GAState.instance.configurations[key] = value;
	                            }
	                        }
	                    }
	                }
	                GAState.instance.commandCenterIsReady = true;
	                var listeners = GAState.instance.commandCenterListeners;
	                for (var i = 0; i < listeners.length; ++i) {
	                    if (listeners[i]) {
	                        listeners[i].onCommandCenterUpdated();
	                    }
	                }
	            };
	            GAState.CategorySdkError = "sdk_error";
	            GAState.MAX_CUSTOM_FIELDS_COUNT = 50;
	            GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64;
	            GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256;
	            GAState.instance = new GAState();
	            GAState.DefaultUserIdKey = "default_user_id";
	            GAState.SessionNumKey = "session_num";
	            GAState.TransactionNumKey = "transaction_num";
	            GAState.FacebookIdKey = "facebook_id";
	            GAState.GenderKey = "gender";
	            GAState.BirthYearKey = "birth_year";
	            GAState.Dimension01Key = "dimension01";
	            GAState.Dimension02Key = "dimension02";
	            GAState.Dimension03Key = "dimension03";
	            GAState.SdkConfigCachedKey = "sdk_config_cached";
	            return GAState;
	        }());
	        state.GAState = GAState;
	    })(state = gameanalytics.state || (gameanalytics.state = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var tasks;
	    (function (tasks) {
	        var GAUtilities = gameanalytics.utilities.GAUtilities;
	        var GALogger = gameanalytics.logging.GALogger;
	        var SdkErrorTask = (function () {
	            function SdkErrorTask() {
	            }
	            SdkErrorTask.execute = function (url, type, payloadData, secretKey) {
	                if (!SdkErrorTask.countMap[type]) {
	                    SdkErrorTask.countMap[type] = 0;
	                }
	                if (SdkErrorTask.countMap[type] >= SdkErrorTask.MaxCount) {
	                    return;
	                }
	                var hashHmac = GAUtilities.getHmac(secretKey, payloadData);
	                var request = new XMLHttpRequest();
	                request.onreadystatechange = function () {
	                    if (request.readyState === 4) {
	                        if (!request.responseText) {
	                            return;
	                        }
	                        if (request.status != 200) {
	                            GALogger.w("sdk error failed. response code not 200. status code: " + request.status + ", description: " + request.statusText + ", body: " + request.responseText);
	                            return;
	                        }
	                        else {
	                            SdkErrorTask.countMap[type] = SdkErrorTask.countMap[type] + 1;
	                        }
	                    }
	                };
	                request.open("POST", url, true);
	                request.setRequestHeader("Content-Type", "application/json");
	                request.setRequestHeader("Authorization", hashHmac);
	                try {
	                    request.send(payloadData);
	                }
	                catch (e) {
	                    console.error(e);
	                }
	            };
	            SdkErrorTask.MaxCount = 10;
	            SdkErrorTask.countMap = {};
	            return SdkErrorTask;
	        }());
	        tasks.SdkErrorTask = SdkErrorTask;
	    })(tasks = gameanalytics.tasks || (gameanalytics.tasks = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var http;
	    (function (http) {
	        var GAState = gameanalytics.state.GAState;
	        var GALogger = gameanalytics.logging.GALogger;
	        var GAUtilities = gameanalytics.utilities.GAUtilities;
	        var GAValidator = gameanalytics.validators.GAValidator;
	        var SdkErrorTask = gameanalytics.tasks.SdkErrorTask;
	        var GAHTTPApi = (function () {
	            function GAHTTPApi() {
	                this.protocol = "https";
	                this.hostName = "api.gameanalytics.com";
	                this.version = "v2";
	                this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version;
	                this.initializeUrlPath = "init";
	                this.eventsUrlPath = "events";
	                this.useGzip = false;
	            }
	            GAHTTPApi.prototype.requestInit = function (callback) {
	                var gameKey = GAState.getGameKey();
	                var url = this.baseUrl + "/" + gameKey + "/" + this.initializeUrlPath;
	                url = "https://rubick.gameanalytics.com/v2/command_center?game_key=" + gameKey + "&interval_seconds=1000000";
	                var initAnnotations = GAState.getInitAnnotations();
	                var JSONstring = JSON.stringify(initAnnotations);
	                if (!JSONstring) {
	                    callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null);
	                    return;
	                }
	                var payloadData = this.createPayloadData(JSONstring, this.useGzip);
	                var extraArgs = [];
	                extraArgs.push(JSONstring);
	                GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.initRequestCallback, callback);
	            };
	            GAHTTPApi.prototype.sendEventsInArray = function (eventArray, requestId, callback) {
	                if (eventArray.length == 0) {
	                    return;
	                }
	                var gameKey = GAState.getGameKey();
	                var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
	                var JSONstring = JSON.stringify(eventArray);
	                if (!JSONstring) {
	                    callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null, requestId, eventArray.length);
	                    return;
	                }
	                var payloadData = this.createPayloadData(JSONstring, this.useGzip);
	                var extraArgs = [];
	                extraArgs.push(JSONstring);
	                extraArgs.push(requestId);
	                extraArgs.push(eventArray.length.toString());
	                GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.sendEventInArrayRequestCallback, callback);
	            };
	            GAHTTPApi.prototype.sendSdkErrorEvent = function (type) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var gameKey = GAState.getGameKey();
	                var secretKey = GAState.getGameSecret();
	                if (!GAValidator.validateSdkErrorEvent(gameKey, secretKey, type)) {
	                    return;
	                }
	                var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
	                var payloadJSONString = "";
	                var json = GAState.getSdkErrorEventAnnotations();
	                var typeString = GAHTTPApi.sdkErrorTypeToString(type);
	                json["type"] = typeString;
	                var eventArray = [];
	                eventArray.push(json);
	                payloadJSONString = JSON.stringify(eventArray);
	                if (!payloadJSONString) {
	                    GALogger.w("sendSdkErrorEvent: JSON encoding failed.");
	                    return;
	                }
	                SdkErrorTask.execute(url, type, payloadJSONString, secretKey);
	            };
	            GAHTTPApi.sendEventInArrayRequestCallback = function (request, url, callback, extra) {
	                if (extra === void 0) { extra = null; }
	                var authorization = extra[0];
	                var JSONstring = extra[1];
	                var requestId = extra[2];
	                var eventCount = parseInt(extra[3]);
	                var body = "";
	                var responseCode = 0;
	                body = request.responseText;
	                responseCode = request.status;
	                var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Events");
	                if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
	                    callback(requestResponseEnum, null, requestId, eventCount);
	                    return;
	                }
	                var requestJsonDict = body ? JSON.parse(body) : {};
	                if (requestJsonDict == null) {
	                    callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, requestId, eventCount);
	                    return;
	                }
	                if (requestResponseEnum == http.EGAHTTPApiResponse.BadRequest) ;
	                callback(requestResponseEnum, requestJsonDict, requestId, eventCount);
	            };
	            GAHTTPApi.sendRequest = function (url, payloadData, extraArgs, gzip, callback, callback2) {
	                var request = new XMLHttpRequest();
	                var key = GAState.getGameSecret();
	                var authorization = GAUtilities.getHmac(key, payloadData);
	                var args = [];
	                args.push(authorization);
	                for (var s in extraArgs) {
	                    args.push(extraArgs[s]);
	                }
	                request.onreadystatechange = function () {
	                    if (request.readyState === 4) {
	                        callback(request, url, callback2, args);
	                    }
	                };
	                request.open("POST", url, true);
	                request.setRequestHeader("Content-Type", "text/plain");
	                request.setRequestHeader("Authorization", authorization);
	                if (gzip) {
	                    throw new Error("gzip not supported");
	                }
	                try {
	                    request.send(payloadData);
	                }
	                catch (e) {
	                    console.error(e.stack);
	                }
	            };
	            GAHTTPApi.initRequestCallback = function (request, url, callback, extra) {
	                if (extra === void 0) { extra = null; }
	                var authorization = extra[0];
	                var JSONstring = extra[1];
	                var body = "";
	                var responseCode = 0;
	                body = request.responseText;
	                responseCode = request.status;
	                var requestJsonDict = body ? JSON.parse(body) : {};
	                var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Init");
	                if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
	                    callback(requestResponseEnum, null, "", 0);
	                    return;
	                }
	                if (requestJsonDict == null) {
	                    callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0);
	                    return;
	                }
	                if (requestResponseEnum === http.EGAHTTPApiResponse.BadRequest) {
	                    callback(requestResponseEnum, null, "", 0);
	                    return;
	                }
	                var validatedInitValues = GAValidator.validateAndCleanInitRequestResponse(requestJsonDict);
	                if (!validatedInitValues) {
	                    callback(http.EGAHTTPApiResponse.BadResponse, null, "", 0);
	                    return;
	                }
	                callback(http.EGAHTTPApiResponse.Ok, validatedInitValues, "", 0);
	            };
	            GAHTTPApi.prototype.createPayloadData = function (payload, gzip) {
	                var payloadData;
	                if (gzip) {
	                    throw new Error("gzip not supported");
	                }
	                else {
	                    payloadData = payload;
	                }
	                return payloadData;
	            };
	            GAHTTPApi.prototype.processRequestResponse = function (responseCode, responseMessage, body, requestId) {
	                if (!body) {
	                    return http.EGAHTTPApiResponse.NoResponse;
	                }
	                if (responseCode === 200) {
	                    return http.EGAHTTPApiResponse.Ok;
	                }
	                if (responseCode === 0 || responseCode === 401) {
	                    return http.EGAHTTPApiResponse.Unauthorized;
	                }
	                if (responseCode === 400) {
	                    return http.EGAHTTPApiResponse.BadRequest;
	                }
	                if (responseCode === 500) {
	                    return http.EGAHTTPApiResponse.InternalServerError;
	                }
	                return http.EGAHTTPApiResponse.UnknownResponseCode;
	            };
	            GAHTTPApi.sdkErrorTypeToString = function (value) {
	                switch (value) {
	                    case http.EGASdkErrorType.Rejected:
	                        {
	                            return "rejected";
	                        }
	                    default:
	                        {
	                            return "";
	                        }
	                }
	            };
	            GAHTTPApi.instance = new GAHTTPApi();
	            return GAHTTPApi;
	        }());
	        http.GAHTTPApi = GAHTTPApi;
	    })(http = gameanalytics.http || (gameanalytics.http = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var events;
	    (function (events_1) {
	        var GAStore = gameanalytics.store.GAStore;
	        var EGAStore = gameanalytics.store.EGAStore;
	        var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
	        var GAState = gameanalytics.state.GAState;
	        var GALogger = gameanalytics.logging.GALogger;
	        var GAUtilities = gameanalytics.utilities.GAUtilities;
	        var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
	        var GAHTTPApi = gameanalytics.http.GAHTTPApi;
	        var GAValidator = gameanalytics.validators.GAValidator;
	        var EGASdkErrorType = gameanalytics.http.EGASdkErrorType;
	        var GAEvents = (function () {
	            function GAEvents() {
	            }
	            GAEvents.addSessionStartEvent = function () {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var eventDict = {};
	                eventDict["category"] = GAEvents.CategorySessionStart;
	                GAState.incrementSessionNum();
	                GAStore.setItem(GAState.SessionNumKey, GAState.getSessionNum().toString());
	                GAEvents.addDimensionsToEvent(eventDict);
	                GAEvents.addEventToStore(eventDict);
	                GALogger.i("Add SESSION START event");
	                GAEvents.processEvents(GAEvents.CategorySessionStart, false);
	            };
	            GAEvents.addSessionEndEvent = function () {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var session_start_ts = GAState.getSessionStart();
	                var client_ts_adjusted = GAState.getClientTsAdjusted();
	                var sessionLength = client_ts_adjusted - session_start_ts;
	                if (sessionLength < 0) {
	                    GALogger.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0.");
	                    sessionLength = 0;
	                }
	                var eventDict = {};
	                eventDict["category"] = GAEvents.CategorySessionEnd;
	                eventDict["length"] = sessionLength;
	                GAEvents.addDimensionsToEvent(eventDict);
	                GAEvents.addEventToStore(eventDict);
	                GALogger.i("Add SESSION END event.");
	                GAEvents.processEvents("", false);
	            };
	            GAEvents.addBusinessEvent = function (currency, amount, itemType, itemId, cartType, fields) {
	                if (cartType === void 0) { cartType = null; }
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                if (!GAValidator.validateBusinessEvent(currency, amount, cartType, itemType, itemId)) {
	                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorType.Rejected);
	                    return;
	                }
	                var eventDict = {};
	                GAState.incrementTransactionNum();
	                GAStore.setItem(GAState.TransactionNumKey, GAState.getTransactionNum().toString());
	                eventDict["event_id"] = itemType + ":" + itemId;
	                eventDict["category"] = GAEvents.CategoryBusiness;
	                eventDict["currency"] = currency;
	                eventDict["amount"] = amount;
	                eventDict[GAState.TransactionNumKey] = GAState.getTransactionNum();
	                if (cartType) {
	                    eventDict["cart_type"] = cartType;
	                }
	                GAEvents.addDimensionsToEvent(eventDict);
	                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
	                GALogger.i("Add BUSINESS event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + ", cartType:" + cartType + "}");
	                GAEvents.addEventToStore(eventDict);
	            };
	            GAEvents.addResourceEvent = function (flowType, currency, amount, itemType, itemId, fields) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                if (!GAValidator.validateResourceEvent(flowType, currency, amount, itemType, itemId, GAState.getAvailableResourceCurrencies(), GAState.getAvailableResourceItemTypes())) {
	                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorType.Rejected);
	                    return;
	                }
	                if (flowType === gameanalytics.EGAResourceFlowType.Sink) {
	                    amount *= -1;
	                }
	                var eventDict = {};
	                var flowTypeString = GAEvents.resourceFlowTypeToString(flowType);
	                eventDict["event_id"] = flowTypeString + ":" + currency + ":" + itemType + ":" + itemId;
	                eventDict["category"] = GAEvents.CategoryResource;
	                eventDict["amount"] = amount;
	                GAEvents.addDimensionsToEvent(eventDict);
	                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
	                GALogger.i("Add RESOURCE event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + "}");
	                GAEvents.addEventToStore(eventDict);
	            };
	            GAEvents.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score, sendScore, fields) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var progressionStatusString = GAEvents.progressionStatusToString(progressionStatus);
	                if (!GAValidator.validateProgressionEvent(progressionStatus, progression01, progression02, progression03)) {
	                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorType.Rejected);
	                    return;
	                }
	                var eventDict = {};
	                var progressionIdentifier;
	                if (!progression02) {
	                    progressionIdentifier = progression01;
	                }
	                else if (!progression03) {
	                    progressionIdentifier = progression01 + ":" + progression02;
	                }
	                else {
	                    progressionIdentifier = progression01 + ":" + progression02 + ":" + progression03;
	                }
	                eventDict["category"] = GAEvents.CategoryProgression;
	                eventDict["event_id"] = progressionStatusString + ":" + progressionIdentifier;
	                var attempt_num = 0;
	                if (sendScore && progressionStatus != gameanalytics.EGAProgressionStatus.Start) {
	                    eventDict["score"] = score;
	                }
	                if (progressionStatus === gameanalytics.EGAProgressionStatus.Fail) {
	                    GAState.incrementProgressionTries(progressionIdentifier);
	                }
	                if (progressionStatus === gameanalytics.EGAProgressionStatus.Complete) {
	                    GAState.incrementProgressionTries(progressionIdentifier);
	                    attempt_num = GAState.getProgressionTries(progressionIdentifier);
	                    eventDict["attempt_num"] = attempt_num;
	                    GAState.clearProgressionTries(progressionIdentifier);
	                }
	                GAEvents.addDimensionsToEvent(eventDict);
	                GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
	                GALogger.i("Add PROGRESSION event: {status:" + progressionStatusString + ", progression01:" + progression01 + ", progression02:" + progression02 + ", progression03:" + progression03 + ", score:" + score + ", attempt:" + attempt_num + "}");
	                GAEvents.addEventToStore(eventDict);
	            };
	            GAEvents.addDesignEvent = function (eventId, value, sendValue, fields) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                if (!GAValidator.validateDesignEvent(eventId, value)) {
	                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorType.Rejected);
	                    return;
	                }
	                var eventData = {};
	                eventData["category"] = GAEvents.CategoryDesign;
	                eventData["event_id"] = eventId;
	                if (sendValue) {
	                    eventData["value"] = value;
	                }
	                GAEvents.addDimensionsToEvent(eventData);
	                GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
	                GALogger.i("Add DESIGN event: {eventId:" + eventId + ", value:" + value + "}");
	                GAEvents.addEventToStore(eventData);
	            };
	            GAEvents.addErrorEvent = function (severity, message, fields) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var severityString = GAEvents.errorSeverityToString(severity);
	                if (!GAValidator.validateErrorEvent(severity, message)) {
	                    GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorType.Rejected);
	                    return;
	                }
	                var eventData = {};
	                eventData["category"] = GAEvents.CategoryError;
	                eventData["severity"] = severityString;
	                eventData["message"] = message;
	                GAEvents.addDimensionsToEvent(eventData);
	                GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
	                GALogger.i("Add ERROR event: {severity:" + severityString + ", message:" + message + "}");
	                GAEvents.addEventToStore(eventData);
	            };
	            GAEvents.processEvents = function (category, performCleanUp) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                try {
	                    var requestIdentifier = GAUtilities.createGuid();
	                    if (performCleanUp) {
	                        GAEvents.cleanupEvents();
	                        GAEvents.fixMissingSessionEndEvents();
	                    }
	                    var selectArgs = [];
	                    selectArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
	                    var updateWhereArgs = [];
	                    updateWhereArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
	                    if (category) {
	                        selectArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
	                        updateWhereArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
	                    }
	                    var updateSetArgs = [];
	                    updateSetArgs.push(["status", requestIdentifier]);
	                    var events = GAStore.select(EGAStore.Events, selectArgs);
	                    if (!events || events.length == 0) {
	                        GALogger.i("Event queue: No events to send");
	                        GAEvents.updateSessionStore();
	                        return;
	                    }
	                    if (events.length > GAEvents.MaxEventCount) {
	                        events = GAStore.select(EGAStore.Events, selectArgs, true, GAEvents.MaxEventCount);
	                        if (!events) {
	                            return;
	                        }
	                        var lastItem = events[events.length - 1];
	                        var lastTimestamp = lastItem["client_ts"];
	                        selectArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
	                        events = GAStore.select(EGAStore.Events, selectArgs);
	                        if (!events) {
	                            return;
	                        }
	                        updateWhereArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
	                    }
	                    GALogger.i("Event queue: Sending " + events.length + " events.");
	                    if (!GAStore.update(EGAStore.Events, updateSetArgs, updateWhereArgs)) {
	                        return;
	                    }
	                    var payloadArray = [];
	                    for (var i = 0; i < events.length; ++i) {
	                        var ev = events[i];
	                        var eventDict = JSON.parse(GAUtilities.decode64(ev["event"]));
	                        if (eventDict.length != 0) {
	                            payloadArray.push(eventDict);
	                        }
	                    }
	                    GAHTTPApi.instance.sendEventsInArray(payloadArray, requestIdentifier, GAEvents.processEventsCallback);
	                }
	                catch (e) {
	                    GALogger.e("Error during ProcessEvents(): " + e.stack);
	                }
	            };
	            GAEvents.processEventsCallback = function (responseEnum, dataDict, requestId, eventCount) {
	                var requestIdWhereArgs = [];
	                requestIdWhereArgs.push(["status", EGAStoreArgsOperator.Equal, requestId]);
	                if (responseEnum === EGAHTTPApiResponse.Ok) {
	                    GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
	                    GALogger.i("Event queue: " + eventCount + " events sent.");
	                }
	                else {
	                    if (responseEnum === EGAHTTPApiResponse.NoResponse) {
	                        var setArgs = [];
	                        setArgs.push(["status", "new"]);
	                        GALogger.w("Event queue: Failed to send events to collector - Retrying next time");
	                        GAStore.update(EGAStore.Events, setArgs, requestIdWhereArgs);
	                    }
	                    else {
	                        if (dataDict) {
	                            var json;
	                            var count = 0;
	                            for (var j in dataDict) {
	                                if (count == 0) {
	                                    json = dataDict[j];
	                                }
	                                ++count;
	                            }
	                            if (responseEnum === EGAHTTPApiResponse.BadRequest && json.constructor === Array) {
	                                GALogger.w("Event queue: " + eventCount + " events sent. " + count + " events failed GA server validation.");
	                            }
	                            else {
	                                GALogger.w("Event queue: Failed to send events.");
	                            }
	                        }
	                        else {
	                            GALogger.w("Event queue: Failed to send events.");
	                        }
	                        GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
	                    }
	                }
	            };
	            GAEvents.cleanupEvents = function () {
	                GAStore.update(EGAStore.Events, [["status", "new"]]);
	            };
	            GAEvents.fixMissingSessionEndEvents = function () {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                var args = [];
	                args.push(["session_id", EGAStoreArgsOperator.NotEqual, GAState.getSessionId()]);
	                var sessions = GAStore.select(EGAStore.Sessions, args);
	                if (!sessions || sessions.length == 0) {
	                    return;
	                }
	                GALogger.i(sessions.length + " session(s) located with missing session_end event.");
	                for (var i = 0; i < sessions.length; ++i) {
	                    var sessionEndEvent = JSON.parse(GAUtilities.decode64(sessions[i]["event"]));
	                    var event_ts = sessionEndEvent["client_ts"];
	                    var start_ts = sessions[i]["timestamp"];
	                    var length = event_ts - start_ts;
	                    length = Math.max(0, length);
	                    sessionEndEvent["category"] = GAEvents.CategorySessionEnd;
	                    sessionEndEvent["length"] = length;
	                    GAEvents.addEventToStore(sessionEndEvent);
	                }
	            };
	            GAEvents.addEventToStore = function (eventData) {
	                if (!GAState.isEventSubmissionEnabled()) {
	                    return;
	                }
	                if (!GAState.isInitialized()) {
	                    GALogger.w("Could not add event: SDK is not initialized");
	                    return;
	                }
	                try {
	                    if (GAStore.isStoreTooLargeForEvents() && !GAUtilities.stringMatch(eventData["category"], /^(user|session_end|business)$/)) {
	                        GALogger.w("Database too large. Event has been blocked.");
	                        return;
	                    }
	                    var ev = GAState.getEventAnnotations();
	                    var jsonDefaults = GAUtilities.encode64(JSON.stringify(ev));
	                    for (var e in eventData) {
	                        ev[e] = eventData[e];
	                    }
	                    var json = JSON.stringify(ev);
	                    GALogger.ii("Event added to queue: " + json);
	                    var values = {};
	                    values["status"] = "new";
	                    values["category"] = ev["category"];
	                    values["session_id"] = ev["session_id"];
	                    values["client_ts"] = ev["client_ts"];
	                    values["event"] = GAUtilities.encode64(JSON.stringify(ev));
	                    GAStore.insert(EGAStore.Events, values);
	                    if (eventData["category"] == GAEvents.CategorySessionEnd) {
	                        GAStore["delete"](EGAStore.Sessions, [["session_id", EGAStoreArgsOperator.Equal, ev["session_id"]]]);
	                    }
	                    else {
	                        values = {};
	                        values["session_id"] = ev["session_id"];
	                        values["timestamp"] = GAState.getSessionStart();
	                        values["event"] = jsonDefaults;
	                        GAStore.insert(EGAStore.Sessions, values, true, "session_id");
	                    }
	                    if (GAStore.isStorageAvailable()) {
	                        GAStore.save();
	                    }
	                }
	                catch (e) {
	                    GALogger.e("addEventToStore: error");
	                    GALogger.e(e.stack);
	                }
	            };
	            GAEvents.updateSessionStore = function () {
	                if (GAState.sessionIsStarted()) {
	                    var values = {};
	                    values["session_id"] = GAState.instance.sessionId;
	                    values["timestamp"] = GAState.getSessionStart();
	                    values["event"] = GAUtilities.encode64(JSON.stringify(GAState.getEventAnnotations()));
	                    GAStore.insert(EGAStore.Sessions, values, true, "session_id");
	                    if (GAStore.isStorageAvailable()) {
	                        GAStore.save();
	                    }
	                }
	            };
	            GAEvents.addDimensionsToEvent = function (eventData) {
	                if (!eventData) {
	                    return;
	                }
	                if (GAState.getCurrentCustomDimension01()) {
	                    eventData["custom_01"] = GAState.getCurrentCustomDimension01();
	                }
	                if (GAState.getCurrentCustomDimension02()) {
	                    eventData["custom_02"] = GAState.getCurrentCustomDimension02();
	                }
	                if (GAState.getCurrentCustomDimension03()) {
	                    eventData["custom_03"] = GAState.getCurrentCustomDimension03();
	                }
	            };
	            GAEvents.addFieldsToEvent = function (eventData, fields) {
	                if (!eventData) {
	                    return;
	                }
	                if (fields && Object.keys(fields).length > 0) {
	                    eventData["custom_fields"] = fields;
	                }
	            };
	            GAEvents.resourceFlowTypeToString = function (value) {
	                if (value == gameanalytics.EGAResourceFlowType.Source || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Source]) {
	                    return "Source";
	                }
	                else if (value == gameanalytics.EGAResourceFlowType.Sink || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Sink]) {
	                    return "Sink";
	                }
	                else {
	                    return "";
	                }
	            };
	            GAEvents.progressionStatusToString = function (value) {
	                if (value == gameanalytics.EGAProgressionStatus.Start || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Start]) {
	                    return "Start";
	                }
	                else if (value == gameanalytics.EGAProgressionStatus.Complete || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Complete]) {
	                    return "Complete";
	                }
	                else if (value == gameanalytics.EGAProgressionStatus.Fail || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Fail]) {
	                    return "Fail";
	                }
	                else {
	                    return "";
	                }
	            };
	            GAEvents.errorSeverityToString = function (value) {
	                if (value == gameanalytics.EGAErrorSeverity.Debug || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Debug]) {
	                    return "debug";
	                }
	                else if (value == gameanalytics.EGAErrorSeverity.Info || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Info]) {
	                    return "info";
	                }
	                else if (value == gameanalytics.EGAErrorSeverity.Warning || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Warning]) {
	                    return "warning";
	                }
	                else if (value == gameanalytics.EGAErrorSeverity.Error || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Error]) {
	                    return "error";
	                }
	                else if (value == gameanalytics.EGAErrorSeverity.Critical || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Critical]) {
	                    return "critical";
	                }
	                else {
	                    return "";
	                }
	            };
	            GAEvents.instance = new GAEvents();
	            GAEvents.CategorySessionStart = "user";
	            GAEvents.CategorySessionEnd = "session_end";
	            GAEvents.CategoryDesign = "design";
	            GAEvents.CategoryBusiness = "business";
	            GAEvents.CategoryProgression = "progression";
	            GAEvents.CategoryResource = "resource";
	            GAEvents.CategoryError = "error";
	            GAEvents.MaxEventCount = 500;
	            return GAEvents;
	        }());
	        events_1.GAEvents = GAEvents;
	    })(events = gameanalytics.events || (gameanalytics.events = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var threading;
	    (function (threading) {
	        var GALogger = gameanalytics.logging.GALogger;
	        var GAState = gameanalytics.state.GAState;
	        var GAEvents = gameanalytics.events.GAEvents;
	        var GAThreading = (function () {
	            function GAThreading() {
	                this.blocks = new threading.PriorityQueue({
	                    compare: function (x, y) {
	                        return x - y;
	                    }
	                });
	                this.id2TimedBlockMap = {};
	                GAThreading.startThread();
	            }
	            GAThreading.createTimedBlock = function (delayInSeconds) {
	                if (delayInSeconds === void 0) { delayInSeconds = 0; }
	                var time = new Date();
	                time.setSeconds(time.getSeconds() + delayInSeconds);
	                var timedBlock = new threading.TimedBlock(time);
	                return timedBlock;
	            };
	            GAThreading.performTaskOnGAThread = function (taskBlock, delayInSeconds) {
	                if (delayInSeconds === void 0) { delayInSeconds = 0; }
	                var time = new Date();
	                time.setSeconds(time.getSeconds() + delayInSeconds);
	                var timedBlock = new threading.TimedBlock(time);
	                timedBlock.block = taskBlock;
	                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
	                GAThreading.instance.addTimedBlock(timedBlock);
	            };
	            GAThreading.performTimedBlockOnGAThread = function (timedBlock) {
	                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
	                GAThreading.instance.addTimedBlock(timedBlock);
	            };
	            GAThreading.scheduleTimer = function (interval, callback) {
	                var time = new Date();
	                time.setSeconds(time.getSeconds() + interval);
	                var timedBlock = new threading.TimedBlock(time);
	                timedBlock.block = callback;
	                GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
	                GAThreading.instance.addTimedBlock(timedBlock);
	                return timedBlock.id;
	            };
	            GAThreading.getTimedBlockById = function (blockIdentifier) {
	                if (blockIdentifier in GAThreading.instance.id2TimedBlockMap) {
	                    return GAThreading.instance.id2TimedBlockMap[blockIdentifier];
	                }
	                else {
	                    return null;
	                }
	            };
	            GAThreading.ensureEventQueueIsRunning = function () {
	                GAThreading.instance.keepRunning = true;
	                if (!GAThreading.instance.isRunning) {
	                    GAThreading.instance.isRunning = true;
	                    GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
	                }
	            };
	            GAThreading.endSessionAndStopQueue = function () {
	                if (GAState.isInitialized()) {
	                    GALogger.i("Ending session.");
	                    GAThreading.stopEventQueue();
	                    if (GAState.isEnabled() && GAState.sessionIsStarted()) {
	                        GAEvents.addSessionEndEvent();
	                        GAState.instance.sessionStart = 0;
	                    }
	                }
	            };
	            GAThreading.stopEventQueue = function () {
	                GAThreading.instance.keepRunning = false;
	            };
	            GAThreading.ignoreTimer = function (blockIdentifier) {
	                if (blockIdentifier in GAThreading.instance.id2TimedBlockMap) {
	                    GAThreading.instance.id2TimedBlockMap[blockIdentifier].ignore = true;
	                }
	            };
	            GAThreading.setEventProcessInterval = function (interval) {
	                if (interval > 0) {
	                    GAThreading.ProcessEventsIntervalInSeconds = interval;
	                }
	            };
	            GAThreading.prototype.addTimedBlock = function (timedBlock) {
	                this.blocks.enqueue(timedBlock.deadline.getTime(), timedBlock);
	            };
	            GAThreading.run = function () {
	                clearTimeout(GAThreading.runTimeoutId);
	                try {
	                    var timedBlock;
	                    while ((timedBlock = GAThreading.getNextBlock())) {
	                        if (!timedBlock.ignore) {
	                            if (timedBlock.async) {
	                                if (!timedBlock.running) {
	                                    timedBlock.running = true;
	                                    timedBlock.block();
	                                    break;
	                                }
	                            }
	                            else {
	                                timedBlock.block();
	                            }
	                        }
	                    }
	                    GAThreading.runTimeoutId = setTimeout(GAThreading.run, GAThreading.ThreadWaitTimeInMs);
	                    return;
	                }
	                catch (e) {
	                    GALogger.e("Error on GA thread");
	                    GALogger.e(e.stack);
	                }
	            };
	            GAThreading.startThread = function () {
	                GAThreading.runTimeoutId = setTimeout(GAThreading.run, 0);
	            };
	            GAThreading.getNextBlock = function () {
	                var now = new Date();
	                if (GAThreading.instance.blocks.hasItems() && GAThreading.instance.blocks.peek().deadline.getTime() <= now.getTime()) {
	                    if (GAThreading.instance.blocks.peek().async) {
	                        if (GAThreading.instance.blocks.peek().running) {
	                            return GAThreading.instance.blocks.peek();
	                        }
	                        else {
	                            return GAThreading.instance.blocks.dequeue();
	                        }
	                    }
	                    else {
	                        return GAThreading.instance.blocks.dequeue();
	                    }
	                }
	                return null;
	            };
	            GAThreading.processEventQueue = function () {
	                GAEvents.processEvents("", true);
	                if (GAThreading.instance.keepRunning) {
	                    GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
	                }
	                else {
	                    GAThreading.instance.isRunning = false;
	                }
	            };
	            GAThreading.instance = new GAThreading();
	            GAThreading.ThreadWaitTimeInMs = 1000;
	            GAThreading.ProcessEventsIntervalInSeconds = 8.0;
	            return GAThreading;
	        }());
	        threading.GAThreading = GAThreading;
	    })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
	})(gameanalytics || (gameanalytics = {}));
	var gameanalytics;
	(function (gameanalytics) {
	    var GAThreading = gameanalytics.threading.GAThreading;
	    var GALogger = gameanalytics.logging.GALogger;
	    var GAStore = gameanalytics.store.GAStore;
	    var GAState = gameanalytics.state.GAState;
	    var GAHTTPApi = gameanalytics.http.GAHTTPApi;
	    var GADevice = gameanalytics.device.GADevice;
	    var GAValidator = gameanalytics.validators.GAValidator;
	    var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
	    var GAUtilities = gameanalytics.utilities.GAUtilities;
	    var GAEvents = gameanalytics.events.GAEvents;
	    var GameAnalytics = (function () {
	        function GameAnalytics() {
	        }
	        GameAnalytics.init = function () {
	            GADevice.touch();
	            GameAnalytics.methodMap['configureAvailableCustomDimensions01'] = GameAnalytics.configureAvailableCustomDimensions01;
	            GameAnalytics.methodMap['configureAvailableCustomDimensions02'] = GameAnalytics.configureAvailableCustomDimensions02;
	            GameAnalytics.methodMap['configureAvailableCustomDimensions03'] = GameAnalytics.configureAvailableCustomDimensions03;
	            GameAnalytics.methodMap['configureAvailableResourceCurrencies'] = GameAnalytics.configureAvailableResourceCurrencies;
	            GameAnalytics.methodMap['configureAvailableResourceItemTypes'] = GameAnalytics.configureAvailableResourceItemTypes;
	            GameAnalytics.methodMap['configureBuild'] = GameAnalytics.configureBuild;
	            GameAnalytics.methodMap['configureSdkGameEngineVersion'] = GameAnalytics.configureSdkGameEngineVersion;
	            GameAnalytics.methodMap['configureGameEngineVersion'] = GameAnalytics.configureGameEngineVersion;
	            GameAnalytics.methodMap['configureUserId'] = GameAnalytics.configureUserId;
	            GameAnalytics.methodMap['initialize'] = GameAnalytics.initialize;
	            GameAnalytics.methodMap['addBusinessEvent'] = GameAnalytics.addBusinessEvent;
	            GameAnalytics.methodMap['addResourceEvent'] = GameAnalytics.addResourceEvent;
	            GameAnalytics.methodMap['addProgressionEvent'] = GameAnalytics.addProgressionEvent;
	            GameAnalytics.methodMap['addDesignEvent'] = GameAnalytics.addDesignEvent;
	            GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
	            GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
	            GameAnalytics.methodMap['setEnabledInfoLog'] = GameAnalytics.setEnabledInfoLog;
	            GameAnalytics.methodMap['setEnabledVerboseLog'] = GameAnalytics.setEnabledVerboseLog;
	            GameAnalytics.methodMap['setEnabledManualSessionHandling'] = GameAnalytics.setEnabledManualSessionHandling;
	            GameAnalytics.methodMap['setEnabledEventSubmission'] = GameAnalytics.setEnabledEventSubmission;
	            GameAnalytics.methodMap['setCustomDimension01'] = GameAnalytics.setCustomDimension01;
	            GameAnalytics.methodMap['setCustomDimension02'] = GameAnalytics.setCustomDimension02;
	            GameAnalytics.methodMap['setCustomDimension03'] = GameAnalytics.setCustomDimension03;
	            GameAnalytics.methodMap['setFacebookId'] = GameAnalytics.setFacebookId;
	            GameAnalytics.methodMap['setGender'] = GameAnalytics.setGender;
	            GameAnalytics.methodMap['setBirthYear'] = GameAnalytics.setBirthYear;
	            GameAnalytics.methodMap['setEventProcessInterval'] = GameAnalytics.setEventProcessInterval;
	            GameAnalytics.methodMap['startSession'] = GameAnalytics.startSession;
	            GameAnalytics.methodMap['endSession'] = GameAnalytics.endSession;
	            GameAnalytics.methodMap['onStop'] = GameAnalytics.onStop;
	            GameAnalytics.methodMap['onResume'] = GameAnalytics.onResume;
	            GameAnalytics.methodMap['addCommandCenterListener'] = GameAnalytics.addCommandCenterListener;
	            GameAnalytics.methodMap['removeCommandCenterListener'] = GameAnalytics.removeCommandCenterListener;
	            GameAnalytics.methodMap['getCommandCenterValueAsString'] = GameAnalytics.getCommandCenterValueAsString;
	            GameAnalytics.methodMap['isCommandCenterReady'] = GameAnalytics.isCommandCenterReady;
	            GameAnalytics.methodMap['getConfigurationsContentAsString'] = GameAnalytics.getConfigurationsContentAsString;
	            if (typeof window !== 'undefined' && typeof window['GameAnalytics'] !== 'undefined' && typeof window['GameAnalytics']['q'] !== 'undefined') {
	                var q = window['GameAnalytics']['q'];
	                for (var i in q) {
	                    GameAnalytics.gaCommand.apply(null, q[i]);
	                }
	            }
	        };
	        GameAnalytics.gaCommand = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            if (args.length > 0) {
	                if (args[0] in gameanalytics.GameAnalytics.methodMap) {
	                    if (args.length > 1) {
	                        gameanalytics.GameAnalytics.methodMap[args[0]].apply(null, Array.prototype.slice.call(args, 1));
	                    }
	                    else {
	                        gameanalytics.GameAnalytics.methodMap[args[0]]();
	                    }
	                }
	            }
	        };
	        GameAnalytics.configureAvailableCustomDimensions01 = function (customDimensions) {
	            if (customDimensions === void 0) { customDimensions = []; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
	                    return;
	                }
	                GAState.setAvailableCustomDimensions01(customDimensions);
	            });
	        };
	        GameAnalytics.configureAvailableCustomDimensions02 = function (customDimensions) {
	            if (customDimensions === void 0) { customDimensions = []; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
	                    return;
	                }
	                GAState.setAvailableCustomDimensions02(customDimensions);
	            });
	        };
	        GameAnalytics.configureAvailableCustomDimensions03 = function (customDimensions) {
	            if (customDimensions === void 0) { customDimensions = []; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Available custom dimensions must be set before SDK is initialized");
	                    return;
	                }
	                GAState.setAvailableCustomDimensions03(customDimensions);
	            });
	        };
	        GameAnalytics.configureAvailableResourceCurrencies = function (resourceCurrencies) {
	            if (resourceCurrencies === void 0) { resourceCurrencies = []; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Available resource currencies must be set before SDK is initialized");
	                    return;
	                }
	                GAState.setAvailableResourceCurrencies(resourceCurrencies);
	            });
	        };
	        GameAnalytics.configureAvailableResourceItemTypes = function (resourceItemTypes) {
	            if (resourceItemTypes === void 0) { resourceItemTypes = []; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Available resource item types must be set before SDK is initialized");
	                    return;
	                }
	                GAState.setAvailableResourceItemTypes(resourceItemTypes);
	            });
	        };
	        GameAnalytics.configureBuild = function (build) {
	            if (build === void 0) { build = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("Build version must be set before SDK is initialized.");
	                    return;
	                }
	                if (!GAValidator.validateBuild(build)) {
	                    GALogger.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + build);
	                    return;
	                }
	                GAState.setBuild(build);
	            });
	        };
	        GameAnalytics.configureSdkGameEngineVersion = function (sdkGameEngineVersion) {
	            if (sdkGameEngineVersion === void 0) { sdkGameEngineVersion = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    return;
	                }
	                if (!GAValidator.validateSdkWrapperVersion(sdkGameEngineVersion)) {
	                    GALogger.i("Validation fail - configure sdk version: Sdk version not supported. String: " + sdkGameEngineVersion);
	                    return;
	                }
	                GADevice.sdkGameEngineVersion = sdkGameEngineVersion;
	            });
	        };
	        GameAnalytics.configureGameEngineVersion = function (gameEngineVersion) {
	            if (gameEngineVersion === void 0) { gameEngineVersion = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    return;
	                }
	                if (!GAValidator.validateEngineVersion(gameEngineVersion)) {
	                    GALogger.i("Validation fail - configure game engine version: Game engine version not supported. String: " + gameEngineVersion);
	                    return;
	                }
	                GADevice.gameEngineVersion = gameEngineVersion;
	            });
	        };
	        GameAnalytics.configureUserId = function (uId) {
	            if (uId === void 0) { uId = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("A custom user id must be set before SDK is initialized.");
	                    return;
	                }
	                if (!GAValidator.validateUserId(uId)) {
	                    GALogger.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + uId);
	                    return;
	                }
	                GAState.setUserId(uId);
	            });
	        };
	        GameAnalytics.initialize = function (gameKey, gameSecret) {
	            if (gameKey === void 0) { gameKey = ""; }
	            if (gameSecret === void 0) { gameSecret = ""; }
	            GADevice.updateConnectionType();
	            var timedBlock = GAThreading.createTimedBlock();
	            timedBlock.async = true;
	            GameAnalytics.initTimedBlockId = timedBlock.id;
	            timedBlock.block = function () {
	                if (GameAnalytics.isSdkReady(true, false)) {
	                    GALogger.w("SDK already initialized. Can only be called once.");
	                    return;
	                }
	                if (!GAValidator.validateKeys(gameKey, gameSecret)) {
	                    GALogger.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + gameKey + ", secretKey: " + gameSecret);
	                    return;
	                }
	                GAState.setKeys(gameKey, gameSecret);
	                GameAnalytics.internalInitialize();
	            };
	            GAThreading.performTimedBlockOnGAThread(timedBlock);
	        };
	        GameAnalytics.addBusinessEvent = function (currency, amount, itemType, itemId, cartType) {
	            if (currency === void 0) { currency = ""; }
	            if (amount === void 0) { amount = 0; }
	            if (itemType === void 0) { itemType = ""; }
	            if (itemId === void 0) { itemId = ""; }
	            if (cartType === void 0) { cartType = ""; }
	            GADevice.updateConnectionType();
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GameAnalytics.isSdkReady(true, true, "Could not add business event")) {
	                    return;
	                }
	                GAEvents.addBusinessEvent(currency, amount, itemType, itemId, cartType, {});
	            });
	        };
	        GameAnalytics.addResourceEvent = function (flowType, currency, amount, itemType, itemId) {
	            if (flowType === void 0) { flowType = gameanalytics.EGAResourceFlowType.Undefined; }
	            if (currency === void 0) { currency = ""; }
	            if (amount === void 0) { amount = 0; }
	            if (itemType === void 0) { itemType = ""; }
	            if (itemId === void 0) { itemId = ""; }
	            GADevice.updateConnectionType();
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GameAnalytics.isSdkReady(true, true, "Could not add resource event")) {
	                    return;
	                }
	                GAEvents.addResourceEvent(flowType, currency, amount, itemType, itemId, {});
	            });
	        };
	        GameAnalytics.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score) {
	            if (progressionStatus === void 0) { progressionStatus = gameanalytics.EGAProgressionStatus.Undefined; }
	            if (progression01 === void 0) { progression01 = ""; }
	            if (progression02 === void 0) { progression02 = ""; }
	            if (progression03 === void 0) { progression03 = ""; }
	            GADevice.updateConnectionType();
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GameAnalytics.isSdkReady(true, true, "Could not add progression event")) {
	                    return;
	                }
	                var sendScore = typeof score === "number";
	                GAEvents.addProgressionEvent(progressionStatus, progression01, progression02, progression03, sendScore ? score : 0, sendScore, {});
	            });
	        };
	        GameAnalytics.addDesignEvent = function (eventId, value) {
	            GADevice.updateConnectionType();
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GameAnalytics.isSdkReady(true, true, "Could not add design event")) {
	                    return;
	                }
	                var sendValue = typeof value === "number";
	                GAEvents.addDesignEvent(eventId, sendValue ? value : 0, sendValue, {});
	            });
	        };
	        GameAnalytics.addErrorEvent = function (severity, message) {
	            if (severity === void 0) { severity = gameanalytics.EGAErrorSeverity.Undefined; }
	            if (message === void 0) { message = ""; }
	            GADevice.updateConnectionType();
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GameAnalytics.isSdkReady(true, true, "Could not add error event")) {
	                    return;
	                }
	                GAEvents.addErrorEvent(severity, message, {});
	            });
	        };
	        GameAnalytics.setEnabledInfoLog = function (flag) {
	            if (flag === void 0) { flag = false; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (flag) {
	                    GALogger.setInfoLog(flag);
	                    GALogger.i("Info logging enabled");
	                }
	                else {
	                    GALogger.i("Info logging disabled");
	                    GALogger.setInfoLog(flag);
	                }
	            });
	        };
	        GameAnalytics.setEnabledVerboseLog = function (flag) {
	            if (flag === void 0) { flag = false; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (flag) {
	                    GALogger.setVerboseLog(flag);
	                    GALogger.i("Verbose logging enabled");
	                }
	                else {
	                    GALogger.i("Verbose logging disabled");
	                    GALogger.setVerboseLog(flag);
	                }
	            });
	        };
	        GameAnalytics.setEnabledManualSessionHandling = function (flag) {
	            if (flag === void 0) { flag = false; }
	            GAThreading.performTaskOnGAThread(function () {
	                GAState.setManualSessionHandling(flag);
	            });
	        };
	        GameAnalytics.setEnabledEventSubmission = function (flag) {
	            if (flag === void 0) { flag = false; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (flag) {
	                    GAState.setEnabledEventSubmission(flag);
	                    GALogger.i("Event submission enabled");
	                }
	                else {
	                    GALogger.i("Event submission disabled");
	                    GAState.setEnabledEventSubmission(flag);
	                }
	            });
	        };
	        GameAnalytics.setCustomDimension01 = function (dimension) {
	            if (dimension === void 0) { dimension = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GAValidator.validateDimension01(dimension, GAState.getAvailableCustomDimensions01())) {
	                    GALogger.w("Could not set custom01 dimension value to '" + dimension + "'. Value not found in available custom01 dimension values");
	                    return;
	                }
	                GAState.setCustomDimension01(dimension);
	            });
	        };
	        GameAnalytics.setCustomDimension02 = function (dimension) {
	            if (dimension === void 0) { dimension = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GAValidator.validateDimension02(dimension, GAState.getAvailableCustomDimensions02())) {
	                    GALogger.w("Could not set custom02 dimension value to '" + dimension + "'. Value not found in available custom02 dimension values");
	                    return;
	                }
	                GAState.setCustomDimension02(dimension);
	            });
	        };
	        GameAnalytics.setCustomDimension03 = function (dimension) {
	            if (dimension === void 0) { dimension = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (!GAValidator.validateDimension03(dimension, GAState.getAvailableCustomDimensions03())) {
	                    GALogger.w("Could not set custom03 dimension value to '" + dimension + "'. Value not found in available custom03 dimension values");
	                    return;
	                }
	                GAState.setCustomDimension03(dimension);
	            });
	        };
	        GameAnalytics.setFacebookId = function (facebookId) {
	            if (facebookId === void 0) { facebookId = ""; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GAValidator.validateFacebookId(facebookId)) {
	                    GAState.setFacebookId(facebookId);
	                }
	            });
	        };
	        GameAnalytics.setGender = function (gender) {
	            if (gender === void 0) { gender = gameanalytics.EGAGender.Undefined; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GAValidator.validateGender(gender)) {
	                    GAState.setGender(gender);
	                }
	            });
	        };
	        GameAnalytics.setBirthYear = function (birthYear) {
	            if (birthYear === void 0) { birthYear = 0; }
	            GAThreading.performTaskOnGAThread(function () {
	                if (GAValidator.validateBirthyear(birthYear)) {
	                    GAState.setBirthYear(birthYear);
	                }
	            });
	        };
	        GameAnalytics.setEventProcessInterval = function (intervalInSeconds) {
	            GAThreading.performTaskOnGAThread(function () {
	                GAThreading.setEventProcessInterval(intervalInSeconds);
	            });
	        };
	        GameAnalytics.startSession = function () {
	            {
	                if (!GAState.isInitialized()) {
	                    return;
	                }
	                var timedBlock = GAThreading.createTimedBlock();
	                timedBlock.async = true;
	                GameAnalytics.initTimedBlockId = timedBlock.id;
	                timedBlock.block = function () {
	                    if (GAState.isEnabled() && GAState.sessionIsStarted()) {
	                        GAThreading.endSessionAndStopQueue();
	                    }
	                    GameAnalytics.resumeSessionAndStartQueue();
	                };
	                GAThreading.performTimedBlockOnGAThread(timedBlock);
	            }
	        };
	        GameAnalytics.endSession = function () {
	            {
	                GameAnalytics.onStop();
	            }
	        };
	        GameAnalytics.onStop = function () {
	            GAThreading.performTaskOnGAThread(function () {
	                try {
	                    GAThreading.endSessionAndStopQueue();
	                }
	                catch (Exception) {
	                }
	            });
	        };
	        GameAnalytics.onResume = function () {
	            var timedBlock = GAThreading.createTimedBlock();
	            timedBlock.async = true;
	            GameAnalytics.initTimedBlockId = timedBlock.id;
	            timedBlock.block = function () {
	                GameAnalytics.resumeSessionAndStartQueue();
	            };
	            GAThreading.performTimedBlockOnGAThread(timedBlock);
	        };
	        GameAnalytics.getCommandCenterValueAsString = function (key, defaultValue) {
	            if (defaultValue === void 0) { defaultValue = null; }
	            return GAState.getConfigurationStringValue(key, defaultValue);
	        };
	        GameAnalytics.isCommandCenterReady = function () {
	            return GAState.isCommandCenterReady();
	        };
	        GameAnalytics.addCommandCenterListener = function (listener) {
	            GAState.addCommandCenterListener(listener);
	        };
	        GameAnalytics.removeCommandCenterListener = function (listener) {
	            GAState.removeCommandCenterListener(listener);
	        };
	        GameAnalytics.getConfigurationsContentAsString = function () {
	            return GAState.getConfigurationsContentAsString();
	        };
	        GameAnalytics.internalInitialize = function () {
	            GAState.ensurePersistedStates();
	            GAStore.setItem(GAState.DefaultUserIdKey, GAState.getDefaultId());
	            GAState.setInitialized(true);
	            GameAnalytics.newSession();
	            if (GAState.isEnabled()) {
	                GAThreading.ensureEventQueueIsRunning();
	            }
	        };
	        GameAnalytics.newSession = function () {
	            GALogger.i("Starting a new session.");
	            GAState.validateAndFixCurrentDimensions();
	            GAHTTPApi.instance.requestInit(GameAnalytics.startNewSessionCallback);
	        };
	        GameAnalytics.startNewSessionCallback = function (initResponse, initResponseDict) {
	            if (initResponse === EGAHTTPApiResponse.Ok && initResponseDict) {
	                var timeOffsetSeconds = 0;
	                if (initResponseDict["server_ts"]) {
	                    var serverTs = initResponseDict["server_ts"];
	                    timeOffsetSeconds = GAState.calculateServerTimeOffset(serverTs);
	                }
	                initResponseDict["time_offset"] = timeOffsetSeconds;
	                GAStore.setItem(GAState.SdkConfigCachedKey, GAUtilities.encode64(JSON.stringify(initResponseDict)));
	                GAState.instance.sdkConfigCached = initResponseDict;
	                GAState.instance.sdkConfig = initResponseDict;
	                GAState.instance.initAuthorized = true;
	            }
	            else if (initResponse == EGAHTTPApiResponse.Unauthorized) {
	                GALogger.w("Initialize SDK failed - Unauthorized");
	                GAState.instance.initAuthorized = false;
	            }
	            else {
	                if (initResponse === EGAHTTPApiResponse.NoResponse || initResponse === EGAHTTPApiResponse.RequestTimeout) {
	                    GALogger.i("Init call (session start) failed - no response. Could be offline or timeout.");
	                }
	                else if (initResponse === EGAHTTPApiResponse.BadResponse || initResponse === EGAHTTPApiResponse.JsonEncodeFailed || initResponse === EGAHTTPApiResponse.JsonDecodeFailed) {
	                    GALogger.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.");
	                }
	                else if (initResponse === EGAHTTPApiResponse.BadRequest || initResponse === EGAHTTPApiResponse.UnknownResponseCode) {
	                    GALogger.i("Init call (session start) failed - bad request or unknown response.");
	                }
	                if (GAState.instance.sdkConfig == null) {
	                    if (GAState.instance.sdkConfigCached != null) {
	                        GALogger.i("Init call (session start) failed - using cached init values.");
	                        GAState.instance.sdkConfig = GAState.instance.sdkConfigCached;
	                    }
	                    else {
	                        GALogger.i("Init call (session start) failed - using default init values.");
	                        GAState.instance.sdkConfig = GAState.instance.sdkConfigDefault;
	                    }
	                }
	                else {
	                    GALogger.i("Init call (session start) failed - using cached init values.");
	                }
	                GAState.instance.initAuthorized = true;
	            }
	            GAState.instance.clientServerTimeOffset = GAState.getSdkConfig()["time_offset"] ? GAState.getSdkConfig()["time_offset"] : 0;
	            GAState.populateConfigurations(GAState.getSdkConfig());
	            if (!GAState.isEnabled()) {
	                GALogger.w("Could not start session: SDK is disabled.");
	                GAThreading.stopEventQueue();
	                return;
	            }
	            else {
	                GAThreading.ensureEventQueueIsRunning();
	            }
	            var newSessionId = GAUtilities.createGuid();
	            GAState.instance.sessionId = newSessionId;
	            GAState.instance.sessionStart = GAState.getClientTsAdjusted();
	            GAEvents.addSessionStartEvent();
	            var timedBlock = GAThreading.getTimedBlockById(GameAnalytics.initTimedBlockId);
	            if (timedBlock != null) {
	                timedBlock.running = false;
	            }
	            GameAnalytics.initTimedBlockId = -1;
	        };
	        GameAnalytics.resumeSessionAndStartQueue = function () {
	            if (!GAState.isInitialized()) {
	                return;
	            }
	            GALogger.i("Resuming session.");
	            if (!GAState.sessionIsStarted()) {
	                GameAnalytics.newSession();
	            }
	        };
	        GameAnalytics.isSdkReady = function (needsInitialized, warn, message) {
	            if (warn === void 0) { warn = true; }
	            if (message === void 0) { message = ""; }
	            if (message) {
	                message = message + ": ";
	            }
	            if (needsInitialized && !GAState.isInitialized()) {
	                if (warn) {
	                    GALogger.w(message + "SDK is not initialized");
	                }
	                return false;
	            }
	            if (needsInitialized && !GAState.isEnabled()) {
	                if (warn) {
	                    GALogger.w(message + "SDK is disabled");
	                }
	                return false;
	            }
	            if (needsInitialized && !GAState.sessionIsStarted()) {
	                if (warn) {
	                    GALogger.w(message + "Session has not started yet");
	                }
	                return false;
	            }
	            return true;
	        };
	        GameAnalytics.initTimedBlockId = -1;
	        GameAnalytics.methodMap = {};
	        return GameAnalytics;
	    }());
	    gameanalytics.GameAnalytics = GameAnalytics;
	})(gameanalytics || (gameanalytics = {}));
	gameanalytics.GameAnalytics.init();
	var GameAnalytics = gameanalytics.GameAnalytics.gaCommand;
	var GameAnalytics_node = gameanalytics;

	var GameAnalytics$1 = /** @class */ (function () {
	    function GameAnalytics() {
	    }
	    GameAnalytics.prototype.setup = function (key, secret, version) {
	        if (!Branding$$1.analyticsEnabled) {
	            return;
	        }
	        // @ts-ignore
	        GameAnalytics_node.GameAnalytics.initialize(key, secret);
	        // @ts-ignore
	        GameAnalytics_node.GameAnalytics.configureBuild(version);
	        // @ts-ignore
	        GameAnalytics_node.GameAnalytics.startSession();
	        window.addEventListener('beforeunload', function () {
	            // @ts-ignore
	            GameAnalytics_node.GameAnalytics.endSession();
	        });
	    };
	    GameAnalytics.prototype.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score) {
	        if (!Branding$$1.analyticsEnabled) {
	            return;
	        }
	        // @ts-ignore
	        GameAnalytics_node.GameAnalytics.addProgressionEvent(progressionStatus, progression01, progression02, progression03, score);
	    };
	    GameAnalytics.prototype.addDesignEvent = function (eventId, value) {
	        if (!Branding$$1.analyticsEnabled) {
	            return;
	        }
	        // @ts-ignore
	        GameAnalytics_node.GameAnalytics.addDesignEvent(eventId, value);
	    };
	    return GameAnalytics;
	}());

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */

	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	var progressbar = createCommonjsModule(function (module, exports) {
	(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function () {
	  var root = this || Function('return this')();

	/**
	 * Shifty Core
	 * By Jeremy Kahn - jeremyckahn@gmail.com
	 */

	var Tweenable = (function () {

	  // Aliases that get defined later in this function
	  var formula;

	  // CONSTANTS
	  var DEFAULT_SCHEDULE_FUNCTION;
	  var DEFAULT_EASING = 'linear';
	  var DEFAULT_DURATION = 500;
	  var UPDATE_TIME = 1000 / 60;

	  var _now = Date.now
	       ? Date.now
	       : function () {return +new Date();};

	  var now = typeof SHIFTY_DEBUG_NOW !== 'undefined' ? SHIFTY_DEBUG_NOW : _now;

	  if (typeof window !== 'undefined') {
	    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
	       || window.webkitRequestAnimationFrame
	       || window.oRequestAnimationFrame
	       || window.msRequestAnimationFrame
	       || (window.mozCancelRequestAnimationFrame
	       && window.mozRequestAnimationFrame)
	       || setTimeout;
	  } else {
	    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
	  }

	  function noop () {
	    // NOOP!
	  }

	  /**
	   * Handy shortcut for doing a for-in loop. This is not a "normal" each
	   * function, it is optimized for Shifty.  The iterator function only receives
	   * the property name, not the value.
	   * @param {Object} obj
	   * @param {Function(string)} fn
	   * @private
	   */
	  function each (obj, fn) {
	    var key;
	    for (key in obj) {
	      if (Object.hasOwnProperty.call(obj, key)) {
	        fn(key);
	      }
	    }
	  }

	  /**
	   * Perform a shallow copy of Object properties.
	   * @param {Object} targetObject The object to copy into
	   * @param {Object} srcObject The object to copy from
	   * @return {Object} A reference to the augmented `targetObj` Object
	   * @private
	   */
	  function shallowCopy (targetObj, srcObj) {
	    each(srcObj, function (prop) {
	      targetObj[prop] = srcObj[prop];
	    });

	    return targetObj;
	  }

	  /**
	   * Copies each property from src onto target, but only if the property to
	   * copy to target is undefined.
	   * @param {Object} target Missing properties in this Object are filled in
	   * @param {Object} src
	   * @private
	   */
	  function defaults (target, src) {
	    each(src, function (prop) {
	      if (typeof target[prop] === 'undefined') {
	        target[prop] = src[prop];
	      }
	    });
	  }

	  /**
	   * Calculates the interpolated tween values of an Object for a given
	   * timestamp.
	   * @param {Number} forPosition The position to compute the state for.
	   * @param {Object} currentState Current state properties.
	   * @param {Object} originalState: The original state properties the Object is
	   * tweening from.
	   * @param {Object} targetState: The destination state properties the Object
	   * is tweening to.
	   * @param {number} duration: The length of the tween in milliseconds.
	   * @param {number} timestamp: The UNIX epoch time at which the tween began.
	   * @param {Object} easing: This Object's keys must correspond to the keys in
	   * targetState.
	   * @private
	   */
	  function tweenProps (forPosition, currentState, originalState, targetState,
	    duration, timestamp, easing) {
	    var normalizedPosition =
	        forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;


	    var prop;
	    var easingObjectProp;
	    var easingFn;
	    for (prop in currentState) {
	      if (currentState.hasOwnProperty(prop)) {
	        easingObjectProp = easing[prop];
	        easingFn = typeof easingObjectProp === 'function'
	          ? easingObjectProp
	          : formula[easingObjectProp];

	        currentState[prop] = tweenProp(
	          originalState[prop],
	          targetState[prop],
	          easingFn,
	          normalizedPosition
	        );
	      }
	    }

	    return currentState;
	  }

	  /**
	   * Tweens a single property.
	   * @param {number} start The value that the tween started from.
	   * @param {number} end The value that the tween should end at.
	   * @param {Function} easingFunc The easing curve to apply to the tween.
	   * @param {number} position The normalized position (between 0.0 and 1.0) to
	   * calculate the midpoint of 'start' and 'end' against.
	   * @return {number} The tweened value.
	   * @private
	   */
	  function tweenProp (start, end, easingFunc, position) {
	    return start + (end - start) * easingFunc(position);
	  }

	  /**
	   * Applies a filter to Tweenable instance.
	   * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
	   * upon.
	   * @param {String} filterName The name of the filter to apply.
	   * @private
	   */
	  function applyFilter (tweenable, filterName) {
	    var filters = Tweenable.prototype.filter;
	    var args = tweenable._filterArgs;

	    each(filters, function (name) {
	      if (typeof filters[name][filterName] !== 'undefined') {
	        filters[name][filterName].apply(tweenable, args);
	      }
	    });
	  }

	  var timeoutHandler_endTime;
	  var timeoutHandler_currentTime;
	  var timeoutHandler_isEnded;
	  var timeoutHandler_offset;
	  /**
	   * Handles the update logic for one step of a tween.
	   * @param {Tweenable} tweenable
	   * @param {number} timestamp
	   * @param {number} delay
	   * @param {number} duration
	   * @param {Object} currentState
	   * @param {Object} originalState
	   * @param {Object} targetState
	   * @param {Object} easing
	   * @param {Function(Object, *, number)} step
	   * @param {Function(Function,number)}} schedule
	   * @param {number=} opt_currentTimeOverride Needed for accurate timestamp in
	   * Tweenable#seek.
	   * @private
	   */
	  function timeoutHandler (tweenable, timestamp, delay, duration, currentState,
	    originalState, targetState, easing, step, schedule,
	    opt_currentTimeOverride) {

	    timeoutHandler_endTime = timestamp + delay + duration;

	    timeoutHandler_currentTime =
	    Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);

	    timeoutHandler_isEnded =
	      timeoutHandler_currentTime >= timeoutHandler_endTime;

	    timeoutHandler_offset = duration - (
	      timeoutHandler_endTime - timeoutHandler_currentTime);

	    if (tweenable.isPlaying()) {
	      if (timeoutHandler_isEnded) {
	        step(targetState, tweenable._attachment, timeoutHandler_offset);
	        tweenable.stop(true);
	      } else {
	        tweenable._scheduleId =
	          schedule(tweenable._timeoutHandler, UPDATE_TIME);

	        applyFilter(tweenable, 'beforeTween');

	        // If the animation has not yet reached the start point (e.g., there was
	        // delay that has not yet completed), just interpolate the starting
	        // position of the tween.
	        if (timeoutHandler_currentTime < (timestamp + delay)) {
	          tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
	        } else {
	          tweenProps(timeoutHandler_currentTime, currentState, originalState,
	            targetState, duration, timestamp + delay, easing);
	        }

	        applyFilter(tweenable, 'afterTween');

	        step(currentState, tweenable._attachment, timeoutHandler_offset);
	      }
	    }
	  }


	  /**
	   * Creates a usable easing Object from a string, a function or another easing
	   * Object.  If `easing` is an Object, then this function clones it and fills
	   * in the missing properties with `"linear"`.
	   * @param {Object.<string|Function>} fromTweenParams
	   * @param {Object|string|Function} easing
	   * @return {Object.<string|Function>}
	   * @private
	   */
	  function composeEasingObject (fromTweenParams, easing) {
	    var composedEasing = {};
	    var typeofEasing = typeof easing;

	    if (typeofEasing === 'string' || typeofEasing === 'function') {
	      each(fromTweenParams, function (prop) {
	        composedEasing[prop] = easing;
	      });
	    } else {
	      each(fromTweenParams, function (prop) {
	        if (!composedEasing[prop]) {
	          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
	        }
	      });
	    }

	    return composedEasing;
	  }

	  /**
	   * Tweenable constructor.
	   * @class Tweenable
	   * @param {Object=} opt_initialState The values that the initial tween should
	   * start at if a `from` object is not provided to `{{#crossLink
	   * "Tweenable/tween:method"}}{{/crossLink}}` or `{{#crossLink
	   * "Tweenable/setConfig:method"}}{{/crossLink}}`.
	   * @param {Object=} opt_config Configuration object to be passed to
	   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
	   * @module Tweenable
	   * @constructor
	   */
	  function Tweenable (opt_initialState, opt_config) {
	    this._currentState = opt_initialState || {};
	    this._configured = false;
	    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

	    // To prevent unnecessary calls to setConfig do not set default
	    // configuration here.  Only set default configuration immediately before
	    // tweening if none has been set.
	    if (typeof opt_config !== 'undefined') {
	      this.setConfig(opt_config);
	    }
	  }

	  /**
	   * Configure and start a tween.
	   * @method tween
	   * @param {Object=} opt_config Configuration object to be passed to
	   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
	   * @chainable
	   */
	  Tweenable.prototype.tween = function (opt_config) {
	    if (this._isTweening) {
	      return this;
	    }

	    // Only set default config if no configuration has been set previously and
	    // none is provided now.
	    if (opt_config !== undefined || !this._configured) {
	      this.setConfig(opt_config);
	    }

	    this._timestamp = now();
	    this._start(this.get(), this._attachment);
	    return this.resume();
	  };

	  /**
	   * Configure a tween that will start at some point in the future.
	   *
	   * @method setConfig
	   * @param {Object} config The following values are valid:
	   * - __from__ (_Object=_): Starting position.  If omitted, `{{#crossLink
	   *   "Tweenable/get:method"}}get(){{/crossLink}}` is used.
	   * - __to__ (_Object=_): Ending position.
	   * - __duration__ (_number=_): How many milliseconds to animate for.
	   * - __delay__ (_delay=_): How many milliseconds to wait before starting the
	   *   tween.
	   * - __start__ (_Function(Object, *)_): Function to execute when the tween
	   *   begins.  Receives the state of the tween as the first parameter and
	   *   `attachment` as the second parameter.
	   * - __step__ (_Function(Object, *, number)_): Function to execute on every
	   *   tick.  Receives `{{#crossLink
	   *   "Tweenable/get:method"}}get(){{/crossLink}}` as the first parameter,
	   *   `attachment` as the second parameter, and the time elapsed since the
	   *   start of the tween as the third. This function is not called on the
	   *   final step of the animation, but `finish` is.
	   * - __finish__ (_Function(Object, *)_): Function to execute upon tween
	   *   completion.  Receives the state of the tween as the first parameter and
	   *   `attachment` as the second parameter.
	   * - __easing__ (_Object.<string|Function>|string|Function=_): Easing curve
	   *   name(s) or function(s) to use for the tween.
	   * - __attachment__ (_*_): Cached value that is passed to the
	   *   `step`/`start`/`finish` methods.
	   * @chainable
	   */
	  Tweenable.prototype.setConfig = function (config) {
	    config = config || {};
	    this._configured = true;

	    // Attach something to this Tweenable instance (e.g.: a DOM element, an
	    // object, a string, etc.);
	    this._attachment = config.attachment;

	    // Init the internal state
	    this._pausedAtTime = null;
	    this._scheduleId = null;
	    this._delay = config.delay || 0;
	    this._start = config.start || noop;
	    this._step = config.step || noop;
	    this._finish = config.finish || noop;
	    this._duration = config.duration || DEFAULT_DURATION;
	    this._currentState = shallowCopy({}, config.from || this.get());
	    this._originalState = this.get();
	    this._targetState = shallowCopy({}, config.to || this.get());

	    var self = this;
	    this._timeoutHandler = function () {
	      timeoutHandler(self,
	        self._timestamp,
	        self._delay,
	        self._duration,
	        self._currentState,
	        self._originalState,
	        self._targetState,
	        self._easing,
	        self._step,
	        self._scheduleFunction
	      );
	    };

	    // Aliases used below
	    var currentState = this._currentState;
	    var targetState = this._targetState;

	    // Ensure that there is always something to tween to.
	    defaults(targetState, currentState);

	    this._easing = composeEasingObject(
	      currentState, config.easing || DEFAULT_EASING);

	    this._filterArgs =
	      [currentState, this._originalState, targetState, this._easing];

	    applyFilter(this, 'tweenCreated');
	    return this;
	  };

	  /**
	   * @method get
	   * @return {Object} The current state.
	   */
	  Tweenable.prototype.get = function () {
	    return shallowCopy({}, this._currentState);
	  };

	  /**
	   * @method set
	   * @param {Object} state The current state.
	   */
	  Tweenable.prototype.set = function (state) {
	    this._currentState = state;
	  };

	  /**
	   * Pause a tween.  Paused tweens can be resumed from the point at which they
	   * were paused.  This is different from `{{#crossLink
	   * "Tweenable/stop:method"}}{{/crossLink}}`, as that method
	   * causes a tween to start over when it is resumed.
	   * @method pause
	   * @chainable
	   */
	  Tweenable.prototype.pause = function () {
	    this._pausedAtTime = now();
	    this._isPaused = true;
	    return this;
	  };

	  /**
	   * Resume a paused tween.
	   * @method resume
	   * @chainable
	   */
	  Tweenable.prototype.resume = function () {
	    if (this._isPaused) {
	      this._timestamp += now() - this._pausedAtTime;
	    }

	    this._isPaused = false;
	    this._isTweening = true;

	    this._timeoutHandler();

	    return this;
	  };

	  /**
	   * Move the state of the animation to a specific point in the tween's
	   * timeline.  If the animation is not running, this will cause the `step`
	   * handlers to be called.
	   * @method seek
	   * @param {millisecond} millisecond The millisecond of the animation to seek
	   * to.  This must not be less than `0`.
	   * @chainable
	   */
	  Tweenable.prototype.seek = function (millisecond) {
	    millisecond = Math.max(millisecond, 0);
	    var currentTime = now();

	    if ((this._timestamp + millisecond) === 0) {
	      return this;
	    }

	    this._timestamp = currentTime - millisecond;

	    if (!this.isPlaying()) {
	      this._isTweening = true;
	      this._isPaused = false;

	      // If the animation is not running, call timeoutHandler to make sure that
	      // any step handlers are run.
	      timeoutHandler(this,
	        this._timestamp,
	        this._delay,
	        this._duration,
	        this._currentState,
	        this._originalState,
	        this._targetState,
	        this._easing,
	        this._step,
	        this._scheduleFunction,
	        currentTime
	      );

	      this.pause();
	    }

	    return this;
	  };

	  /**
	   * Stops and cancels a tween.
	   * @param {boolean=} gotoEnd If `false` or omitted, the tween just stops at
	   * its current state, and the `finish` handler is not invoked.  If `true`,
	   * the tweened object's values are instantly set to the target values, and
	   * `finish` is invoked.
	   * @method stop
	   * @chainable
	   */
	  Tweenable.prototype.stop = function (gotoEnd) {
	    this._isTweening = false;
	    this._isPaused = false;
	    this._timeoutHandler = noop;

	    (root.cancelAnimationFrame            ||
	    root.webkitCancelAnimationFrame     ||
	    root.oCancelAnimationFrame          ||
	    root.msCancelAnimationFrame         ||
	    root.mozCancelRequestAnimationFrame ||
	    root.clearTimeout)(this._scheduleId);

	    if (gotoEnd) {
	      applyFilter(this, 'beforeTween');
	      tweenProps(
	        1,
	        this._currentState,
	        this._originalState,
	        this._targetState,
	        1,
	        0,
	        this._easing
	      );
	      applyFilter(this, 'afterTween');
	      applyFilter(this, 'afterTweenEnd');
	      this._finish.call(this, this._currentState, this._attachment);
	    }

	    return this;
	  };

	  /**
	   * @method isPlaying
	   * @return {boolean} Whether or not a tween is running.
	   */
	  Tweenable.prototype.isPlaying = function () {
	    return this._isTweening && !this._isPaused;
	  };

	  /**
	   * Set a custom schedule function.
	   *
	   * If a custom function is not set,
	   * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
	   * is used if available, otherwise
	   * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
	   * is used.
	   * @method setScheduleFunction
	   * @param {Function(Function,number)} scheduleFunction The function to be
	   * used to schedule the next frame to be rendered.
	   */
	  Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
	    this._scheduleFunction = scheduleFunction;
	  };

	  /**
	   * `delete` all "own" properties.  Call this when the `Tweenable` instance
	   * is no longer needed to free memory.
	   * @method dispose
	   */
	  Tweenable.prototype.dispose = function () {
	    var prop;
	    for (prop in this) {
	      if (this.hasOwnProperty(prop)) {
	        delete this[prop];
	      }
	    }
	  };

	  /**
	   * Filters are used for transforming the properties of a tween at various
	   * points in a Tweenable's life cycle.  See the README for more info on this.
	   * @private
	   */
	  Tweenable.prototype.filter = {};

	  /**
	   * This object contains all of the tweens available to Shifty.  It is
	   * extensible - simply attach properties to the `Tweenable.prototype.formula`
	   * Object following the same format as `linear`.
	   *
	   * `pos` should be a normalized `number` (between 0 and 1).
	   * @property formula
	   * @type {Object(function)}
	   */
	  Tweenable.prototype.formula = {
	    linear: function (pos) {
	      return pos;
	    }
	  };

	  formula = Tweenable.prototype.formula;

	  shallowCopy(Tweenable, {
	    'now': now
	    ,'each': each
	    ,'tweenProps': tweenProps
	    ,'tweenProp': tweenProp
	    ,'applyFilter': applyFilter
	    ,'shallowCopy': shallowCopy
	    ,'defaults': defaults
	    ,'composeEasingObject': composeEasingObject
	  });

	  // `root` is provided in the intro/outro files.

	  // A hook used for unit testing.
	  if (typeof SHIFTY_DEBUG_NOW === 'function') {
	    root.timeoutHandler = timeoutHandler;
	  }

	  // Bootstrap Tweenable appropriately for the environment.
	  if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = Tweenable;
	  } else if (typeof root.Tweenable === 'undefined') {
	    // Browser: Make `Tweenable` globally accessible.
	    root.Tweenable = Tweenable;
	  }

	  return Tweenable;

	} ());
	(function () {

	  Tweenable.shallowCopy(Tweenable.prototype.formula, {
	    easeInQuad: function (pos) {
	      return Math.pow(pos, 2);
	    },

	    easeOutQuad: function (pos) {
	      return -(Math.pow((pos - 1), 2) - 1);
	    },

	    easeInOutQuad: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
	      return -0.5 * ((pos -= 2) * pos - 2);
	    },

	    easeInCubic: function (pos) {
	      return Math.pow(pos, 3);
	    },

	    easeOutCubic: function (pos) {
	      return (Math.pow((pos - 1), 3) + 1);
	    },

	    easeInOutCubic: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
	      return 0.5 * (Math.pow((pos - 2),3) + 2);
	    },

	    easeInQuart: function (pos) {
	      return Math.pow(pos, 4);
	    },

	    easeOutQuart: function (pos) {
	      return -(Math.pow((pos - 1), 4) - 1);
	    },

	    easeInOutQuart: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
	      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
	    },

	    easeInQuint: function (pos) {
	      return Math.pow(pos, 5);
	    },

	    easeOutQuint: function (pos) {
	      return (Math.pow((pos - 1), 5) + 1);
	    },

	    easeInOutQuint: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
	      return 0.5 * (Math.pow((pos - 2),5) + 2);
	    },

	    easeInSine: function (pos) {
	      return -Math.cos(pos * (Math.PI / 2)) + 1;
	    },

	    easeOutSine: function (pos) {
	      return Math.sin(pos * (Math.PI / 2));
	    },

	    easeInOutSine: function (pos) {
	      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
	    },

	    easeInExpo: function (pos) {
	      return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
	    },

	    easeOutExpo: function (pos) {
	      return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
	    },

	    easeInOutExpo: function (pos) {
	      if (pos === 0) {return 0;}
	      if (pos === 1) {return 1;}
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
	      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
	    },

	    easeInCirc: function (pos) {
	      return -(Math.sqrt(1 - (pos * pos)) - 1);
	    },

	    easeOutCirc: function (pos) {
	      return Math.sqrt(1 - Math.pow((pos - 1), 2));
	    },

	    easeInOutCirc: function (pos) {
	      if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
	      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
	    },

	    easeOutBounce: function (pos) {
	      if ((pos) < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },

	    easeInBack: function (pos) {
	      var s = 1.70158;
	      return (pos) * pos * ((s + 1) * pos - s);
	    },

	    easeOutBack: function (pos) {
	      var s = 1.70158;
	      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
	    },

	    easeInOutBack: function (pos) {
	      var s = 1.70158;
	      if ((pos /= 0.5) < 1) {
	        return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
	      }
	      return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	    },

	    elastic: function (pos) {
	      // jshint maxlen:90
	      return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
	    },

	    swingFromTo: function (pos) {
	      var s = 1.70158;
	      return ((pos /= 0.5) < 1) ?
	          0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
	          0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	    },

	    swingFrom: function (pos) {
	      var s = 1.70158;
	      return pos * pos * ((s + 1) * pos - s);
	    },

	    swingTo: function (pos) {
	      var s = 1.70158;
	      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
	    },

	    bounce: function (pos) {
	      if (pos < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },

	    bouncePast: function (pos) {
	      if (pos < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },

	    easeFromTo: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
	      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
	    },

	    easeFrom: function (pos) {
	      return Math.pow(pos,4);
	    },

	    easeTo: function (pos) {
	      return Math.pow(pos,0.25);
	    }
	  });

	}());
	(function () {
	  // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
	  function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
	    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
	    function sampleCurveX(t) {
	      return ((ax * t + bx) * t + cx) * t;
	    }
	    function sampleCurveY(t) {
	      return ((ay * t + by) * t + cy) * t;
	    }
	    function sampleCurveDerivativeX(t) {
	      return (3.0 * ax * t + 2.0 * bx) * t + cx;
	    }
	    function solveEpsilon(duration) {
	      return 1.0 / (200.0 * duration);
	    }
	    function solve(x,epsilon) {
	      return sampleCurveY(solveCurveX(x, epsilon));
	    }
	    function fabs(n) {
	      if (n >= 0) {
	        return n;
	      } else {
	        return 0 - n;
	      }
	    }
	    function solveCurveX(x, epsilon) {
	      var t0,t1,t2,x2,d2,i;
	      for (t2 = x, i = 0; i < 8; i++) {
	        x2 = sampleCurveX(t2) - x;
	        if (fabs(x2) < epsilon) {
	          return t2;
	        }
	        d2 = sampleCurveDerivativeX(t2);
	        if (fabs(d2) < 1e-6) {
	          break;
	        }
	        t2 = t2 - x2 / d2;
	      }
	      t0 = 0.0;
	      t1 = 1.0;
	      t2 = x;
	      if (t2 < t0) {
	        return t0;
	      }
	      if (t2 > t1) {
	        return t1;
	      }
	      while (t0 < t1) {
	        x2 = sampleCurveX(t2);
	        if (fabs(x2 - x) < epsilon) {
	          return t2;
	        }
	        if (x > x2) {
	          t0 = t2;
	        }else {
	          t1 = t2;
	        }
	        t2 = (t1 - t0) * 0.5 + t0;
	      }
	      return t2; // Failure.
	    }
	    cx = 3.0 * p1x;
	    bx = 3.0 * (p2x - p1x) - cx;
	    ax = 1.0 - cx - bx;
	    cy = 3.0 * p1y;
	    by = 3.0 * (p2y - p1y) - cy;
	    ay = 1.0 - cy - by;
	    return solve(t, solveEpsilon(duration));
	  }
	  /**
	   *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
	   *
	   *  Generates a transition easing function that is compatible
	   *  with WebKit's CSS transitions `-webkit-transition-timing-function`
	   *  CSS property.
	   *
	   *  The W3C has more information about CSS3 transition timing functions:
	   *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
	   *
	   *  @param {number} x1
	   *  @param {number} y1
	   *  @param {number} x2
	   *  @param {number} y2
	   *  @return {function}
	   *  @private
	   */
	  function getCubicBezierTransition (x1, y1, x2, y2) {
	    return function (pos) {
	      return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
	    };
	  }
	  // End ported code

	  /**
	   * Create a Bezier easing function and attach it to `{{#crossLink
	   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  This
	   * function gives you total control over the easing curve.  Matthew Lein's
	   * [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing
	   * the curves you can make with this function.
	   * @method setBezierFunction
	   * @param {string} name The name of the easing curve.  Overwrites the old
	   * easing function on `{{#crossLink
	   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}` if it
	   * exists.
	   * @param {number} x1
	   * @param {number} y1
	   * @param {number} x2
	   * @param {number} y2
	   * @return {function} The easing function that was attached to
	   * Tweenable.prototype.formula.
	   */
	  Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
	    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
	    cubicBezierTransition.displayName = name;
	    cubicBezierTransition.x1 = x1;
	    cubicBezierTransition.y1 = y1;
	    cubicBezierTransition.x2 = x2;
	    cubicBezierTransition.y2 = y2;

	    return Tweenable.prototype.formula[name] = cubicBezierTransition;
	  };


	  /**
	   * `delete` an easing function from `{{#crossLink
	   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  Be
	   * careful with this method, as it `delete`s whatever easing formula matches
	   * `name` (which means you can delete standard Shifty easing functions).
	   * @method unsetBezierFunction
	   * @param {string} name The name of the easing function to delete.
	   * @return {function}
	   */
	  Tweenable.unsetBezierFunction = function (name) {
	    delete Tweenable.prototype.formula[name];
	  };

	})();
	(function () {

	  function getInterpolatedValues (
	    from, current, targetState, position, easing, delay) {
	    return Tweenable.tweenProps(
	      position, current, from, targetState, 1, delay, easing);
	  }

	  // Fake a Tweenable and patch some internals.  This approach allows us to
	  // skip uneccessary processing and object recreation, cutting down on garbage
	  // collection pauses.
	  var mockTweenable = new Tweenable();
	  mockTweenable._filterArgs = [];

	  /**
	   * Compute the midpoint of two Objects.  This method effectively calculates a
	   * specific frame of animation that `{{#crossLink
	   * "Tweenable/tween:method"}}{{/crossLink}}` does many times over the course
	   * of a full tween.
	   *
	   *     var interpolatedValues = Tweenable.interpolate({
	   *       width: '100px',
	   *       opacity: 0,
	   *       color: '#fff'
	   *     }, {
	   *       width: '200px',
	   *       opacity: 1,
	   *       color: '#000'
	   *     }, 0.5);
	   *
	   *     console.log(interpolatedValues);
	   *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
	   *
	   * @static
	   * @method interpolate
	   * @param {Object} from The starting values to tween from.
	   * @param {Object} targetState The ending values to tween to.
	   * @param {number} position The normalized position value (between `0.0` and
	   * `1.0`) to interpolate the values between `from` and `to` for.  `from`
	   * represents `0` and `to` represents `1`.
	   * @param {Object.<string|Function>|string|Function} easing The easing
	   * curve(s) to calculate the midpoint against.  You can reference any easing
	   * function attached to `Tweenable.prototype.formula`, or provide the easing
	   * function(s) directly.  If omitted, this defaults to "linear".
	   * @param {number=} opt_delay Optional delay to pad the beginning of the
	   * interpolated tween with.  This increases the range of `position` from (`0`
	   * through `1`) to (`0` through `1 + opt_delay`).  So, a delay of `0.5` would
	   * increase all valid values of `position` to numbers between `0` and `1.5`.
	   * @return {Object}
	   */
	  Tweenable.interpolate = function (
	    from, targetState, position, easing, opt_delay) {

	    var current = Tweenable.shallowCopy({}, from);
	    var delay = opt_delay || 0;
	    var easingObject = Tweenable.composeEasingObject(
	      from, easing || 'linear');

	    mockTweenable.set({});

	    // Alias and reuse the _filterArgs array instead of recreating it.
	    var filterArgs = mockTweenable._filterArgs;
	    filterArgs.length = 0;
	    filterArgs[0] = current;
	    filterArgs[1] = from;
	    filterArgs[2] = targetState;
	    filterArgs[3] = easingObject;

	    // Any defined value transformation must be applied
	    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
	    Tweenable.applyFilter(mockTweenable, 'beforeTween');

	    var interpolatedValues = getInterpolatedValues(
	      from, current, targetState, position, easingObject, delay);

	    // Transform values back into their original format
	    Tweenable.applyFilter(mockTweenable, 'afterTween');

	    return interpolatedValues;
	  };

	}());
	(function (Tweenable) {

	  // CONSTANTS

	  var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
	  var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
	  var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
	  var R_RGB = new RegExp(
	    'rgb\\(' + R_UNFORMATTED_VALUES.source +
	    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
	    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
	  var R_RGB_PREFIX = /^.*\(/;
	  var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
	  var VALUE_PLACEHOLDER = 'VAL';

	  // HELPERS

	  /**
	   * @param {Array.number} rawValues
	   * @param {string} prefix
	   *
	   * @return {Array.<string>}
	   * @private
	   */
	  function getFormatChunksFrom (rawValues, prefix) {
	    var accumulator = [];

	    var rawValuesLength = rawValues.length;
	    var i;

	    for (i = 0; i < rawValuesLength; i++) {
	      accumulator.push('_' + prefix + '_' + i);
	    }

	    return accumulator;
	  }

	  /**
	   * @param {string} formattedString
	   *
	   * @return {string}
	   * @private
	   */
	  function getFormatStringFrom (formattedString) {
	    var chunks = formattedString.match(R_FORMAT_CHUNKS);

	    if (!chunks) {
	      // chunks will be null if there were no tokens to parse in
	      // formattedString (for example, if formattedString is '2').  Coerce
	      // chunks to be useful here.
	      chunks = ['', ''];

	      // If there is only one chunk, assume that the string is a number
	      // followed by a token...
	      // NOTE: This may be an unwise assumption.
	    } else if (chunks.length === 1 ||
	      // ...or if the string starts with a number component (".", "-", or a
	      // digit)...
	    formattedString.charAt(0).match(R_NUMBER_COMPONENT)) {
	      // ...prepend an empty string here to make sure that the formatted number
	      // is properly replaced by VALUE_PLACEHOLDER
	      chunks.unshift('');
	    }

	    return chunks.join(VALUE_PLACEHOLDER);
	  }

	  /**
	   * Convert all hex color values within a string to an rgb string.
	   *
	   * @param {Object} stateObject
	   *
	   * @return {Object} The modified obj
	   * @private
	   */
	  function sanitizeObjectForHexProps (stateObject) {
	    Tweenable.each(stateObject, function (prop) {
	      var currentProp = stateObject[prop];

	      if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
	        stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
	      }
	    });
	  }

	  /**
	   * @param {string} str
	   *
	   * @return {string}
	   * @private
	   */
	  function  sanitizeHexChunksToRGB (str) {
	    return filterStringChunks(R_HEX, str, convertHexToRGB);
	  }

	  /**
	   * @param {string} hexString
	   *
	   * @return {string}
	   * @private
	   */
	  function convertHexToRGB (hexString) {
	    var rgbArr = hexToRGBArray(hexString);
	    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
	  }

	  var hexToRGBArray_returnArray = [];
	  /**
	   * Convert a hexadecimal string to an array with three items, one each for
	   * the red, blue, and green decimal values.
	   *
	   * @param {string} hex A hexadecimal string.
	   *
	   * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
	   * valid string, or an Array of three 0's.
	   * @private
	   */
	  function hexToRGBArray (hex) {

	    hex = hex.replace(/#/, '');

	    // If the string is a shorthand three digit hex notation, normalize it to
	    // the standard six digit notation
	    if (hex.length === 3) {
	      hex = hex.split('');
	      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	    }

	    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
	    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
	    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

	    return hexToRGBArray_returnArray;
	  }

	  /**
	   * Convert a base-16 number to base-10.
	   *
	   * @param {Number|String} hex The value to convert
	   *
	   * @returns {Number} The base-10 equivalent of `hex`.
	   * @private
	   */
	  function hexToDec (hex) {
	    return parseInt(hex, 16);
	  }

	  /**
	   * Runs a filter operation on all chunks of a string that match a RegExp
	   *
	   * @param {RegExp} pattern
	   * @param {string} unfilteredString
	   * @param {function(string)} filter
	   *
	   * @return {string}
	   * @private
	   */
	  function filterStringChunks (pattern, unfilteredString, filter) {
	    var pattenMatches = unfilteredString.match(pattern);
	    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

	    if (pattenMatches) {
	      var pattenMatchesLength = pattenMatches.length;
	      var currentChunk;

	      for (var i = 0; i < pattenMatchesLength; i++) {
	        currentChunk = pattenMatches.shift();
	        filteredString = filteredString.replace(
	          VALUE_PLACEHOLDER, filter(currentChunk));
	      }
	    }

	    return filteredString;
	  }

	  /**
	   * Check for floating point values within rgb strings and rounds them.
	   *
	   * @param {string} formattedString
	   *
	   * @return {string}
	   * @private
	   */
	  function sanitizeRGBChunks (formattedString) {
	    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
	  }

	  /**
	   * @param {string} rgbChunk
	   *
	   * @return {string}
	   * @private
	   */
	  function sanitizeRGBChunk (rgbChunk) {
	    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
	    var numbersLength = numbers.length;
	    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

	    for (var i = 0; i < numbersLength; i++) {
	      sanitizedString += parseInt(numbers[i], 10) + ',';
	    }

	    sanitizedString = sanitizedString.slice(0, -1) + ')';

	    return sanitizedString;
	  }

	  /**
	   * @param {Object} stateObject
	   *
	   * @return {Object} An Object of formatManifests that correspond to
	   * the string properties of stateObject
	   * @private
	   */
	  function getFormatManifests (stateObject) {
	    var manifestAccumulator = {};

	    Tweenable.each(stateObject, function (prop) {
	      var currentProp = stateObject[prop];

	      if (typeof currentProp === 'string') {
	        var rawValues = getValuesFrom(currentProp);

	        manifestAccumulator[prop] = {
	          'formatString': getFormatStringFrom(currentProp)
	          ,'chunkNames': getFormatChunksFrom(rawValues, prop)
	        };
	      }
	    });

	    return manifestAccumulator;
	  }

	  /**
	   * @param {Object} stateObject
	   * @param {Object} formatManifests
	   * @private
	   */
	  function expandFormattedProperties (stateObject, formatManifests) {
	    Tweenable.each(formatManifests, function (prop) {
	      var currentProp = stateObject[prop];
	      var rawValues = getValuesFrom(currentProp);
	      var rawValuesLength = rawValues.length;

	      for (var i = 0; i < rawValuesLength; i++) {
	        stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
	      }

	      delete stateObject[prop];
	    });
	  }

	  /**
	   * @param {Object} stateObject
	   * @param {Object} formatManifests
	   * @private
	   */
	  function collapseFormattedProperties (stateObject, formatManifests) {
	    Tweenable.each(formatManifests, function (prop) {
	      var currentProp = stateObject[prop];
	      var formatChunks = extractPropertyChunks(
	        stateObject, formatManifests[prop].chunkNames);
	      var valuesList = getValuesList(
	        formatChunks, formatManifests[prop].chunkNames);
	      currentProp = getFormattedValues(
	        formatManifests[prop].formatString, valuesList);
	      stateObject[prop] = sanitizeRGBChunks(currentProp);
	    });
	  }

	  /**
	   * @param {Object} stateObject
	   * @param {Array.<string>} chunkNames
	   *
	   * @return {Object} The extracted value chunks.
	   * @private
	   */
	  function extractPropertyChunks (stateObject, chunkNames) {
	    var extractedValues = {};
	    var currentChunkName, chunkNamesLength = chunkNames.length;

	    for (var i = 0; i < chunkNamesLength; i++) {
	      currentChunkName = chunkNames[i];
	      extractedValues[currentChunkName] = stateObject[currentChunkName];
	      delete stateObject[currentChunkName];
	    }

	    return extractedValues;
	  }

	  var getValuesList_accumulator = [];
	  /**
	   * @param {Object} stateObject
	   * @param {Array.<string>} chunkNames
	   *
	   * @return {Array.<number>}
	   * @private
	   */
	  function getValuesList (stateObject, chunkNames) {
	    getValuesList_accumulator.length = 0;
	    var chunkNamesLength = chunkNames.length;

	    for (var i = 0; i < chunkNamesLength; i++) {
	      getValuesList_accumulator.push(stateObject[chunkNames[i]]);
	    }

	    return getValuesList_accumulator;
	  }

	  /**
	   * @param {string} formatString
	   * @param {Array.<number>} rawValues
	   *
	   * @return {string}
	   * @private
	   */
	  function getFormattedValues (formatString, rawValues) {
	    var formattedValueString = formatString;
	    var rawValuesLength = rawValues.length;

	    for (var i = 0; i < rawValuesLength; i++) {
	      formattedValueString = formattedValueString.replace(
	        VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
	    }

	    return formattedValueString;
	  }

	  /**
	   * Note: It's the duty of the caller to convert the Array elements of the
	   * return value into numbers.  This is a performance optimization.
	   *
	   * @param {string} formattedString
	   *
	   * @return {Array.<string>|null}
	   * @private
	   */
	  function getValuesFrom (formattedString) {
	    return formattedString.match(R_UNFORMATTED_VALUES);
	  }

	  /**
	   * @param {Object} easingObject
	   * @param {Object} tokenData
	   * @private
	   */
	  function expandEasingObject (easingObject, tokenData) {
	    Tweenable.each(tokenData, function (prop) {
	      var currentProp = tokenData[prop];
	      var chunkNames = currentProp.chunkNames;
	      var chunkLength = chunkNames.length;

	      var easing = easingObject[prop];
	      var i;

	      if (typeof easing === 'string') {
	        var easingChunks = easing.split(' ');
	        var lastEasingChunk = easingChunks[easingChunks.length - 1];

	        for (i = 0; i < chunkLength; i++) {
	          easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
	        }

	      } else {
	        for (i = 0; i < chunkLength; i++) {
	          easingObject[chunkNames[i]] = easing;
	        }
	      }

	      delete easingObject[prop];
	    });
	  }

	  /**
	   * @param {Object} easingObject
	   * @param {Object} tokenData
	   * @private
	   */
	  function collapseEasingObject (easingObject, tokenData) {
	    Tweenable.each(tokenData, function (prop) {
	      var currentProp = tokenData[prop];
	      var chunkNames = currentProp.chunkNames;
	      var chunkLength = chunkNames.length;

	      var firstEasing = easingObject[chunkNames[0]];
	      var typeofEasings = typeof firstEasing;

	      if (typeofEasings === 'string') {
	        var composedEasingString = '';

	        for (var i = 0; i < chunkLength; i++) {
	          composedEasingString += ' ' + easingObject[chunkNames[i]];
	          delete easingObject[chunkNames[i]];
	        }

	        easingObject[prop] = composedEasingString.substr(1);
	      } else {
	        easingObject[prop] = firstEasing;
	      }
	    });
	  }

	  Tweenable.prototype.filter.token = {
	    'tweenCreated': function (currentState, fromState, toState, easingObject) {
	      sanitizeObjectForHexProps(currentState);
	      sanitizeObjectForHexProps(fromState);
	      sanitizeObjectForHexProps(toState);
	      this._tokenData = getFormatManifests(currentState);
	    },

	    'beforeTween': function (currentState, fromState, toState, easingObject) {
	      expandEasingObject(easingObject, this._tokenData);
	      expandFormattedProperties(currentState, this._tokenData);
	      expandFormattedProperties(fromState, this._tokenData);
	      expandFormattedProperties(toState, this._tokenData);
	    },

	    'afterTween': function (currentState, fromState, toState, easingObject) {
	      collapseFormattedProperties(currentState, this._tokenData);
	      collapseFormattedProperties(fromState, this._tokenData);
	      collapseFormattedProperties(toState, this._tokenData);
	      collapseEasingObject(easingObject, this._tokenData);
	    }
	  };

	} (Tweenable));

	}).call(null);

	},{}],2:[function(require,module,exports){
	// Circle shaped progress bar

	var Shape = require('./shape');
	var utils = require('./utils');

	var Circle = function Circle(container, options) {
	    // Use two arcs to form a circle
	    // See this answer http://stackoverflow.com/a/10477334/1446092
	    this._pathTemplate =
	        'M 50,50 m 0,-{radius}' +
	        ' a {radius},{radius} 0 1 1 0,{2radius}' +
	        ' a {radius},{radius} 0 1 1 0,-{2radius}';

	    this.containerAspectRatio = 1;

	    Shape.apply(this, arguments);
	};

	Circle.prototype = new Shape();
	Circle.prototype.constructor = Circle;

	Circle.prototype._pathString = function _pathString(opts) {
	    var widthOfWider = opts.strokeWidth;
	    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
	        widthOfWider = opts.trailWidth;
	    }

	    var r = 50 - widthOfWider / 2;

	    return utils.render(this._pathTemplate, {
	        radius: r,
	        '2radius': r * 2
	    });
	};

	Circle.prototype._trailString = function _trailString(opts) {
	    return this._pathString(opts);
	};

	module.exports = Circle;

	},{"./shape":7,"./utils":9}],3:[function(require,module,exports){
	// Line shaped progress bar

	var Shape = require('./shape');
	var utils = require('./utils');

	var Line = function Line(container, options) {
	    this._pathTemplate = 'M 0,{center} L 100,{center}';
	    Shape.apply(this, arguments);
	};

	Line.prototype = new Shape();
	Line.prototype.constructor = Line;

	Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
	    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
	    svg.setAttribute('preserveAspectRatio', 'none');
	};

	Line.prototype._pathString = function _pathString(opts) {
	    return utils.render(this._pathTemplate, {
	        center: opts.strokeWidth / 2
	    });
	};

	Line.prototype._trailString = function _trailString(opts) {
	    return this._pathString(opts);
	};

	module.exports = Line;

	},{"./shape":7,"./utils":9}],4:[function(require,module,exports){
	module.exports = {
	    // Higher level API, different shaped progress bars
	    Line: require('./line'),
	    Circle: require('./circle'),
	    SemiCircle: require('./semicircle'),
	    Square: require('./square'),

	    // Lower level API to use any SVG path
	    Path: require('./path'),

	    // Base-class for creating new custom shapes
	    // to be in line with the API of built-in shapes
	    // Undocumented.
	    Shape: require('./shape'),

	    // Internal utils, undocumented.
	    utils: require('./utils')
	};

	},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./square":8,"./utils":9}],5:[function(require,module,exports){
	// Lower level API to animate any kind of svg path

	var Tweenable = require('shifty');
	var utils = require('./utils');

	var EASING_ALIASES = {
	    easeIn: 'easeInCubic',
	    easeOut: 'easeOutCubic',
	    easeInOut: 'easeInOutCubic'
	};

	var Path = function Path(path, opts) {
	    // Throw a better error if not initialized with `new` keyword
	    if (!(this instanceof Path)) {
	        throw new Error('Constructor was called without new keyword');
	    }

	    // Default parameters for animation
	    opts = utils.extend({
	        duration: 800,
	        easing: 'linear',
	        from: {},
	        to: {},
	        step: function() {}
	    }, opts);

	    var element;
	    if (utils.isString(path)) {
	        element = document.querySelector(path);
	    } else {
	        element = path;
	    }

	    // Reveal .path as public attribute
	    this.path = element;
	    this._opts = opts;
	    this._tweenable = null;

	    // Set up the starting positions
	    var length = this.path.getTotalLength();
	    this.path.style.strokeDasharray = length + ' ' + length;
	    this.set(0);
	};

	Path.prototype.value = function value() {
	    var offset = this._getComputedDashOffset();
	    var length = this.path.getTotalLength();

	    var progress = 1 - offset / length;
	    // Round number to prevent returning very small number like 1e-30, which
	    // is practically 0
	    return parseFloat(progress.toFixed(6), 10);
	};

	Path.prototype.set = function set(progress) {
	    this.stop();

	    this.path.style.strokeDashoffset = this._progressToOffset(progress);

	    var step = this._opts.step;
	    if (utils.isFunction(step)) {
	        var easing = this._easing(this._opts.easing);
	        var values = this._calculateTo(progress, easing);
	        var reference = this._opts.shape || this;
	        step(values, reference, this._opts.attachment);
	    }
	};

	Path.prototype.stop = function stop() {
	    this._stopTween();
	    this.path.style.strokeDashoffset = this._getComputedDashOffset();
	};

	// Method introduced here:
	// http://jakearchibald.com/2013/animated-line-drawing-svg/
	Path.prototype.animate = function animate(progress, opts, cb) {
	    opts = opts || {};

	    if (utils.isFunction(opts)) {
	        cb = opts;
	        opts = {};
	    }

	    var passedOpts = utils.extend({}, opts);

	    // Copy default opts to new object so defaults are not modified
	    var defaultOpts = utils.extend({}, this._opts);
	    opts = utils.extend(defaultOpts, opts);

	    var shiftyEasing = this._easing(opts.easing);
	    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

	    this.stop();

	    // Trigger a layout so styles are calculated & the browser
	    // picks up the starting position before animating
	    this.path.getBoundingClientRect();

	    var offset = this._getComputedDashOffset();
	    var newOffset = this._progressToOffset(progress);

	    var self = this;
	    this._tweenable = new Tweenable();
	    this._tweenable.tween({
	        from: utils.extend({ offset: offset }, values.from),
	        to: utils.extend({ offset: newOffset }, values.to),
	        duration: opts.duration,
	        easing: shiftyEasing,
	        step: function(state) {
	            self.path.style.strokeDashoffset = state.offset;
	            var reference = opts.shape || self;
	            opts.step(state, reference, opts.attachment);
	        },
	        finish: function(state) {
	            if (utils.isFunction(cb)) {
	                cb();
	            }
	        }
	    });
	};

	Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
	    var computedStyle = window.getComputedStyle(this.path, null);
	    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
	};

	Path.prototype._progressToOffset = function _progressToOffset(progress) {
	    var length = this.path.getTotalLength();
	    return length - progress * length;
	};

	// Resolves from and to values for animation.
	Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
	    if (opts.from && opts.to) {
	        return {
	            from: opts.from,
	            to: opts.to
	        };
	    }

	    return {
	        from: this._calculateFrom(easing),
	        to: this._calculateTo(progress, easing)
	    };
	};

	// Calculate `from` values from options passed at initialization
	Path.prototype._calculateFrom = function _calculateFrom(easing) {
	    return Tweenable.interpolate(this._opts.from, this._opts.to, this.value(), easing);
	};

	// Calculate `to` values from options passed at initialization
	Path.prototype._calculateTo = function _calculateTo(progress, easing) {
	    return Tweenable.interpolate(this._opts.from, this._opts.to, progress, easing);
	};

	Path.prototype._stopTween = function _stopTween() {
	    if (this._tweenable !== null) {
	        this._tweenable.stop();
	        this._tweenable = null;
	    }
	};

	Path.prototype._easing = function _easing(easing) {
	    if (EASING_ALIASES.hasOwnProperty(easing)) {
	        return EASING_ALIASES[easing];
	    }

	    return easing;
	};

	module.exports = Path;

	},{"./utils":9,"shifty":1}],6:[function(require,module,exports){
	// Semi-SemiCircle shaped progress bar

	var Shape = require('./shape');
	var Circle = require('./circle');
	var utils = require('./utils');

	var SemiCircle = function SemiCircle(container, options) {
	    // Use one arc to form a SemiCircle
	    // See this answer http://stackoverflow.com/a/10477334/1446092
	    this._pathTemplate =
	        'M 50,50 m -{radius},0' +
	        ' a {radius},{radius} 0 1 1 {2radius},0';

	    this.containerAspectRatio = 2;

	    Shape.apply(this, arguments);
	};

	SemiCircle.prototype = new Shape();
	SemiCircle.prototype.constructor = SemiCircle;

	SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
	    svg.setAttribute('viewBox', '0 0 100 50');
	};

	SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
	    opts,
	    container,
	    textContainer
	) {
	    if (opts.text.style) {
	        // Reset top style
	        textContainer.style.top = 'auto';
	        textContainer.style.bottom = '0';

	        if (opts.text.alignToBottom) {
	            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
	        } else {
	            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
	        }
	    }
	};

	// Share functionality with Circle, just have different path
	SemiCircle.prototype._pathString = Circle.prototype._pathString;
	SemiCircle.prototype._trailString = Circle.prototype._trailString;

	module.exports = SemiCircle;

	},{"./circle":2,"./shape":7,"./utils":9}],7:[function(require,module,exports){
	// Base object for different progress bar shapes

	var Path = require('./path');
	var utils = require('./utils');

	var DESTROYED_ERROR = 'Object is destroyed';

	var Shape = function Shape(container, opts) {
	    // Throw a better error if progress bars are not initialized with `new`
	    // keyword
	    if (!(this instanceof Shape)) {
	        throw new Error('Constructor was called without new keyword');
	    }

	    // Prevent calling constructor without parameters so inheritance
	    // works correctly. To understand, this is how Shape is inherited:
	    //
	    //   Line.prototype = new Shape();
	    //
	    // We just want to set the prototype for Line.
	    if (arguments.length === 0) {
	        return;
	    }

	    // Default parameters for progress bar creation
	    this._opts = utils.extend({
	        color: '#555',
	        strokeWidth: 1.0,
	        trailColor: null,
	        trailWidth: null,
	        fill: null,
	        text: {
	            style: {
	                color: null,
	                position: 'absolute',
	                left: '50%',
	                top: '50%',
	                padding: 0,
	                margin: 0,
	                transform: {
	                    prefix: true,
	                    value: 'translate(-50%, -50%)'
	                }
	            },
	            autoStyleContainer: true,
	            alignToBottom: true,
	            value: null,
	            className: 'progressbar-text'
	        },
	        svgStyle: {
	            display: 'block',
	            width: '100%'
	        },
	        warnings: false
	    }, opts, true);  // Use recursive extend

	    // If user specifies e.g. svgStyle or text style, the whole object
	    // should replace the defaults to make working with styles easier
	    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
	        this._opts.svgStyle = opts.svgStyle;
	    }
	    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
	        this._opts.text.style = opts.text.style;
	    }

	    var svgView = this._createSvgView(this._opts);

	    var element;
	    if (utils.isString(container)) {
	        element = document.querySelector(container);
	    } else {
	        element = container;
	    }

	    if (!element) {
	        throw new Error('Container does not exist: ' + container);
	    }

	    this._container = element;
	    this._container.appendChild(svgView.svg);
	    if (this._opts.warnings) {
	        this._warnContainerAspectRatio(this._container);
	    }

	    if (this._opts.svgStyle) {
	        utils.setStyles(svgView.svg, this._opts.svgStyle);
	    }

	    // Expose public attributes before Path initialization
	    this.svg = svgView.svg;
	    this.path = svgView.path;
	    this.trail = svgView.trail;
	    this.text = null;

	    var newOpts = utils.extend({
	        attachment: undefined,
	        shape: this
	    }, this._opts);
	    this._progressPath = new Path(svgView.path, newOpts);

	    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
	        this.setText(this._opts.text.value);
	    }
	};

	Shape.prototype.animate = function animate(progress, opts, cb) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this._progressPath.animate(progress, opts, cb);
	};

	Shape.prototype.stop = function stop() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    // Don't crash if stop is called inside step function
	    if (this._progressPath === undefined) {
	        return;
	    }

	    this._progressPath.stop();
	};

	Shape.prototype.destroy = function destroy() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this.stop();
	    this.svg.parentNode.removeChild(this.svg);
	    this.svg = null;
	    this.path = null;
	    this.trail = null;
	    this._progressPath = null;

	    if (this.text !== null) {
	        this.text.parentNode.removeChild(this.text);
	        this.text = null;
	    }
	};

	Shape.prototype.set = function set(progress) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    this._progressPath.set(progress);
	};

	Shape.prototype.value = function value() {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this._progressPath === undefined) {
	        return 0;
	    }

	    return this._progressPath.value();
	};

	Shape.prototype.setText = function setText(newText) {
	    if (this._progressPath === null) {
	        throw new Error(DESTROYED_ERROR);
	    }

	    if (this.text === null) {
	        // Create new text node
	        this.text = this._createTextContainer(this._opts, this._container);
	        this._container.appendChild(this.text);
	    }

	    // Remove previous text and add new
	    if (utils.isObject(newText)) {
	        utils.removeChildren(this.text);
	        this.text.appendChild(newText);
	    } else {
	        this.text.innerHTML = newText;
	    }
	};

	Shape.prototype._createSvgView = function _createSvgView(opts) {
	    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	    this._initializeSvg(svg, opts);

	    var trailPath = null;
	    // Each option listed in the if condition are 'triggers' for creating
	    // the trail path
	    if (opts.trailColor || opts.trailWidth) {
	        trailPath = this._createTrail(opts);
	        svg.appendChild(trailPath);
	    }

	    var path = this._createPath(opts);
	    svg.appendChild(path);

	    return {
	        svg: svg,
	        path: path,
	        trail: trailPath
	    };
	};

	Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
	    svg.setAttribute('viewBox', '0 0 100 100');
	};

	Shape.prototype._createPath = function _createPath(opts) {
	    var pathString = this._pathString(opts);
	    return this._createPathElement(pathString, opts);
	};

	Shape.prototype._createTrail = function _createTrail(opts) {
	    // Create path string with original passed options
	    var pathString = this._trailString(opts);

	    // Prevent modifying original
	    var newOpts = utils.extend({}, opts);

	    // Defaults for parameters which modify trail path
	    if (!newOpts.trailColor) {
	        newOpts.trailColor = '#eee';
	    }
	    if (!newOpts.trailWidth) {
	        newOpts.trailWidth = newOpts.strokeWidth;
	    }

	    newOpts.color = newOpts.trailColor;
	    newOpts.strokeWidth = newOpts.trailWidth;

	    // When trail path is set, fill must be set for it instead of the
	    // actual path to prevent trail stroke from clipping
	    newOpts.fill = null;

	    return this._createPathElement(pathString, newOpts);
	};

	Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
	    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	    path.setAttribute('d', pathString);
	    path.setAttribute('stroke', opts.color);
	    path.setAttribute('stroke-width', opts.strokeWidth);

	    if (opts.fill) {
	        path.setAttribute('fill', opts.fill);
	    } else {
	        path.setAttribute('fill-opacity', '0');
	    }

	    return path;
	};

	Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
	    var textContainer = document.createElement('div');
	    textContainer.className = opts.text.className;

	    var textStyle = opts.text.style;
	    if (textStyle) {
	        if (opts.text.autoStyleContainer) {
	            container.style.position = 'relative';
	        }

	        utils.setStyles(textContainer, textStyle);
	        // Default text color to progress bar's color
	        if (!textStyle.color) {
	            textContainer.style.color = opts.color;
	        }
	    }

	    this._initializeTextContainer(opts, container, textContainer);
	    return textContainer;
	};

	// Give custom shapes possibility to modify text element
	Shape.prototype._initializeTextContainer = function(opts, container, element) {
	    // By default, no-op
	    // Custom shapes should respect API options, such as text.style
	};

	Shape.prototype._pathString = function _pathString(opts) {
	    throw new Error('Override this function for each progress bar');
	};

	Shape.prototype._trailString = function _trailString(opts) {
	    throw new Error('Override this function for each progress bar');
	};

	Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
	    if (!this.containerAspectRatio) {
	        return;
	    }

	    var computedStyle = window.getComputedStyle(container, null);
	    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
	    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
	    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
	        console.warn(
	            'Incorrect aspect ratio of container',
	            '#' + container.id,
	            'detected:',
	            computedStyle.getPropertyValue('width') + '(width)',
	            '/',
	            computedStyle.getPropertyValue('height') + '(height)',
	            '=',
	            width / height
	        );

	        console.warn(
	            'Aspect ratio of should be',
	            this.containerAspectRatio
	        );
	    }
	};

	module.exports = Shape;

	},{"./path":5,"./utils":9}],8:[function(require,module,exports){
	// Square shaped progress bar
	// Note: Square is not core part of API anymore. It's left here
	//       for reference. square is not included to the progressbar
	//       build anymore

	var Shape = require('./shape');
	var utils = require('./utils');

	var Square = function Square(container, options) {
	    this._pathTemplate =
	        'M 0,{halfOfStrokeWidth}' +
	        ' L {width},{halfOfStrokeWidth}' +
	        ' L {width},{width}' +
	        ' L {halfOfStrokeWidth},{width}' +
	        ' L {halfOfStrokeWidth},{strokeWidth}';

	    this._trailTemplate =
	        'M {startMargin},{halfOfStrokeWidth}' +
	        ' L {width},{halfOfStrokeWidth}' +
	        ' L {width},{width}' +
	        ' L {halfOfStrokeWidth},{width}' +
	        ' L {halfOfStrokeWidth},{halfOfStrokeWidth}';

	    Shape.apply(this, arguments);
	};

	Square.prototype = new Shape();
	Square.prototype.constructor = Square;

	Square.prototype._pathString = function _pathString(opts) {
	    var w = 100 - opts.strokeWidth / 2;

	    return utils.render(this._pathTemplate, {
	        width: w,
	        strokeWidth: opts.strokeWidth,
	        halfOfStrokeWidth: opts.strokeWidth / 2
	    });
	};

	Square.prototype._trailString = function _trailString(opts) {
	    var w = 100 - opts.strokeWidth / 2;

	    return utils.render(this._trailTemplate, {
	        width: w,
	        strokeWidth: opts.strokeWidth,
	        halfOfStrokeWidth: opts.strokeWidth / 2,
	        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
	    });
	};

	module.exports = Square;

	},{"./shape":7,"./utils":9}],9:[function(require,module,exports){
	// Utility functions

	var PREFIXES = 'Webkit Moz O ms'.split(' ');
	var FLOAT_COMPARISON_EPSILON = 0.001;

	// Copy all attributes from source object to destination object.
	// destination object is mutated.
	function extend(destination, source, recursive) {
	    destination = destination || {};
	    source = source || {};
	    recursive = recursive || false;

	    for (var attrName in source) {
	        if (source.hasOwnProperty(attrName)) {
	            var destVal = destination[attrName];
	            var sourceVal = source[attrName];
	            if (recursive && isObject(destVal) && isObject(sourceVal)) {
	                destination[attrName] = extend(destVal, sourceVal, recursive);
	            } else {
	                destination[attrName] = sourceVal;
	            }
	        }
	    }

	    return destination;
	}

	// Renders templates with given variables. Variables must be surrounded with
	// braces without any spaces, e.g. {variable}
	// All instances of variable placeholders will be replaced with given content
	// Example:
	// render('Hello, {message}!', {message: 'world'})
	function render(template, vars) {
	    var rendered = template;

	    for (var key in vars) {
	        if (vars.hasOwnProperty(key)) {
	            var val = vars[key];
	            var regExpString = '\\{' + key + '\\}';
	            var regExp = new RegExp(regExpString, 'g');

	            rendered = rendered.replace(regExp, val);
	        }
	    }

	    return rendered;
	}

	function setStyle(element, style, value) {
	    var elStyle = element.style;  // cache for performance

	    for (var i = 0; i < PREFIXES.length; ++i) {
	        var prefix = PREFIXES[i];
	        elStyle[prefix + capitalize(style)] = value;
	    }

	    elStyle[style] = value;
	}

	function setStyles(element, styles) {
	    forEachObject(styles, function(styleValue, styleName) {
	        // Allow disabling some individual styles by setting them
	        // to null or undefined
	        if (styleValue === null || styleValue === undefined) {
	            return;
	        }

	        // If style's value is {prefix: true, value: '50%'},
	        // Set also browser prefixed styles
	        if (isObject(styleValue) && styleValue.prefix === true) {
	            setStyle(element, styleName, styleValue.value);
	        } else {
	            element.style[styleName] = styleValue;
	        }
	    });
	}

	function capitalize(text) {
	    return text.charAt(0).toUpperCase() + text.slice(1);
	}

	function isString(obj) {
	    return typeof obj === 'string' || obj instanceof String;
	}

	function isFunction(obj) {
	    return typeof obj === 'function';
	}

	function isArray(obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]';
	}

	// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
	// array
	function isObject(obj) {
	    if (isArray(obj)) {
	        return false;
	    }

	    var type = typeof obj;
	    return type === 'object' && !!obj;
	}

	function forEachObject(object, callback) {
	    for (var key in object) {
	        if (object.hasOwnProperty(key)) {
	            var val = object[key];
	            callback(val, key);
	        }
	    }
	}

	function floatEquals(a, b) {
	    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
	}

	// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
	function removeChildren(el) {
	    while (el.firstChild) {
	        el.removeChild(el.firstChild);
	    }
	}

	module.exports = {
	    extend: extend,
	    render: render,
	    setStyle: setStyle,
	    setStyles: setStyles,
	    capitalize: capitalize,
	    isString: isString,
	    isFunction: isFunction,
	    isObject: isObject,
	    forEachObject: forEachObject,
	    floatEquals: floatEquals,
	    removeChildren: removeChildren
	};

	},{}]},{},[4])(4)
	});
	});

	function getCss() {
	    return "\n        #h5branding-center {\n            position: absolute;\n            top: 45%;\n            left: 50%;\n            transform: translate(-50%, -20%);\n            text-align: center;\n            width: 100%;\n        }\n        #h5branding-wrapper {\n            position: relative;\n            z-index: 665;\n            width: 150px;\n            height: 150px;\n            display:inline-block;\n            margin: 35px 40px 96px 40px;\n        }\n\n        #h5branding-wrapper > #h5branding-bar, #h5branding-wrapper > img {\n            box-shadow: inset 10px 10px 20px 5px rgba(0, 0, 0, 0.5);\n            border-radius: 50%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        #h5branding-ad {\n            position: relative;\n            z-index: 667;\n            border-radius: 5px;\n            border: 3px solid white;\n            background: rgba(256, 256, 256, 0.2);\n            width: 336px;\n            height: 280px;\n            display: none;\n            margin: 0px 10px 0px 10px;\n        }\n\n        #h5branding-wrapper > img {\n            /* Needs appropriate vendor prefixes */\n            box-sizing: border-box;\n\n            /* This needs to be equal to strokeWidth */\n            padding: 4%;\n        }\n\n        #h5branding-wrapper > img {\n            border-radius: 50%;\n            box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 5px 5px 7px rgba(0, 0, 0, 0.3);\n        }\n\n        #h5branding-container {\n            box-sizing: border-box;\n            position: absolute;\n            z-index: 664;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: #000;\n            overflow: hidden;\n        }\n        \n        #h5branding-background {\n            position: absolute;\n            top: -25%;\n            left: -25%;\n            width: 150%;\n            height: 150%;\n            background-blend-mode: multiply;\n            background-size: cover;\n            filter: blur(40px) brightness(1.5);\n        }\n        \n        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n             /* IE10+ CSS styles go here */\n             #h5branding-background {\n                background-image: none !important;\n             }\n        }\n\n        #h5branding-logo {\n            position: absolute;\n            margin: 0 auto;\n            left: 0;\n            right: 0;\n            text-align: center;\n            top: 10%;\n        }\n\n        #h5branding-logo > img {\n            height: 150px;\n        }\n\n        #h5branding-title {\n            position: absolute;\n            width: 100%;\n            background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n            color: #fff;\n            text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n            bottom:10%;\n            padding: 15px 0;\n            text-align: center;\n            font-size: 18px;\n            font-family: Helvetica, Arial, sans-serif;\n            font-weight: bold;\n            line-height: 100%;\n        }\n        \n        #h5branding-button {\n            /* border: 0; */\n            padding: 10px 22px;\n            border-radius: 5px;\n            border: 3px solid white;\n            background: linear-gradient(0deg, #dddddd, #ffffff);\n            color: #222;\n            text-transform: uppercase;\n            text-shadow: 0 0 1px #fff;\n            font-family: Helvetica, Arial, sans-serif;\n            font-weight: bold;\n            font-size: 18px;\n            cursor: pointer;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            display: none;\n            width: 150px;\n            position: absolute;\n            top: 170px;\n            margin: 0 auto;\n            left: 0;\n            right: 0;\n        }\n        \n        @media (orientation: portrait) and (max-width: 1080px) {\n            #h5branding-logo > img {\n                height: initial;\n                width:100%;\n            }\n        }\n        \n        @media (orientation: landscape) and (max-height: 640px) {\n            #h5branding-title {\n                display: none;\n            }\n            \n            #h5branding-logo > img {\n                height: 100px;\n            }\n        }\n        \n        @media (orientation: landscape) and (max-height: 460px) {\n            #h5branding-title {\n                display: none;\n            }\n            \n            #h5branding-wrapper {\n                width: 110px;\n                height: 110px;\n                margin: 0;\n            }\n            \n            #h5branding-logo {\n                top: 0;\n                transform: scale(0.7, 0.7);\n            }\n       \n            #h5branding-button {\n                top: initial;\n                width: 110px;\n                font-size: 14px;\n                position: absolute;\n                top: 140px;\n                left: 0;\n                right: 0;\n            }\n            \n            #h5branding-ad {\n               display: none !important;\n            }\n        }\n        \n        @media (orientation: portrait) and (max-width: 250px) {\n            #h5branding-logo {\n                top: 2%;\n            }\n        }\n        \n        @media (orientation: landscape) and (max-width: 330px) {\n             #h5branding-button {\n                top: 120px;\n            }\n            \n            #h5branding-logo > img {\n                height: 70px;\n            }\n        }\n        \n        @media (max-width: 600px) and (max-height: 850px) {\n            #h5branding-ad {\n               display: none !important;\n            }\n        }\n        \n        @media (max-width: 600px) and (max-height: 1100px) {\n            #h5branding-center {\n                top: 40%;\n            }\n\n            #h5branding-title {\n               bottom: 5%\n            }\n        }\n        \n        @media (max-width: 600px) and (max-height: 900px) {\n            #h5branding-title {\n               display: none\n            }\n        }\n        \n        @media (orientation: landscape) and (min-width: 800px) {\n            #h5branding-wrapper {\n                margin-left: 120px;\n                margin-right: 120px;\n            }\n        }\n\n        ";
	}

	function getHtml(gameLogo, gameTitle) {
	    return "\n        <div id=\"h5branding-background\"></div>\n        <div id=\"h5branding-logo\"></div>\n        <div id=\"h5branding-center\">\n            <div id=\"h5branding-ad\"></div>\n            <div id=\"h5branding-wrapper\">\n                <img src=\"" + gameLogo + "\" />\n                <div id=\"h5branding-bar\"></div>\n                <button id=\"h5branding-button\" onclick=\"h5branding.SplashLoader.getInstance().onPlayButtonClick();\">Play</button>\n            </div>\n        </div>\n        <div id=\"h5branding-title\">" + gameTitle + "</div>\n    ";
	}

	var SplashLoader = /** @class */ (function () {
	    function SplashLoader(options) {
	        this.circleLoader = null;
	        this.loaded = false;
	        this.showPlayButton = typeof playBtn !== 'undefined' ? playBtn : true;
	        this.progress = 0;
	        this.options = {
	            gameId: '12346',
	            gameTitle: 'Place Holder',
	            gameName: 'place-holder',
	            libs: [],
	            version: 'dev',
	            barColor: 'white',
	            gaMeasurementId: 'none'
	        };
	        this.options.gameId = options.gameId;
	        this.options.gameTitle = options.gameTitle;
	        this.options.version = options.version;
	        this.options.barColor = options.barColor ? options.barColor : this.options.barColor;
	        this.options.libs = options.libs;
	        this.options.gaMeasurementId = options.gaMeasurementId;
	    }
	    SplashLoader.getInstance = function (options) {
	        if (!SplashLoader.instance) {
	            if (!options) {
	                throw new Error('Can not create new SplashLoader instance without options!');
	            }
	            SplashLoader.instance = new SplashLoader(options);
	        }
	        return SplashLoader.instance;
	    };
	    SplashLoader.prototype.create = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var css, html, head, style, container, body;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        css = getCss();
	                        html = getHtml(this.getGameLogoUrl(this.options.gameId), this.options.gameTitle);
	                        head = document.head || document.getElementsByTagName('head')[0];
	                        style = document.createElement('style');
	                        style.type = 'text/css';
	                        if (style.styleSheet) {
	                            style.styleSheet.cssText = css;
	                        }
	                        else {
	                            style.appendChild(document.createTextNode(css));
	                        }
	                        head.appendChild(style);
	                        container = document.createElement('div');
	                        container.innerHTML = html;
	                        container.id = "h5branding-container";
	                        body = document.body || document.getElementsByTagName('body')[0];
	                        body.insertBefore(container, body.firstChild);
	                        this.circleLoader = new progressbar.Circle('#h5branding-bar', {
	                            strokeWidth: 3,
	                            color: this.options.barColor
	                        });
	                        if (this.options.gaMeasurementId) {
	                            GoogleAnalytics.GAMeasurementId = this.options.gaMeasurementId;
	                        }
	                        return [4 /*yield*/, Promise.all([this.loadBranding(), this.loadLibs(), GoogleAnalytics.preload()])];
	                    case 1:
	                        _a.sent();
	                        this.loaded = true;
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    SplashLoader.prototype.loadBranding = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var background, logoContainer, logo;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, Branding$$1.preload(Date.now().toString())
	                        // Apply background
	                    ];
	                    case 1:
	                        _a.sent();
	                        background = document.getElementById('h5branding-background');
	                        if (background) {
	                            background.style.backgroundImage = "url(" + this.getGameLogoUrl(this.options.gameId) + ")";
	                            background.style.backgroundColor = Branding$$1.brandingBackgroundColor;
	                        }
	                        logoContainer = document.getElementById('h5branding-logo');
	                        if (logoContainer && Utils.getBrandingDomain() !== exports.BrandingDomain.Neutral) {
	                            logo = document.createElement('img');
	                            logo.src = Branding$$1.brandingLogoUrl.replace('_small', '');
	                            logoContainer.appendChild(logo);
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    SplashLoader.prototype.loadLibs = function () {
	        var _this = this;
	        var scripts = this.options.libs.map(function (url, index) {
	            return Loader.instance.loadScript(url, true, function () {
	                _this.setScriptloadProgress(scripts.length, index + 1);
	            });
	        });
	        return Promise.all(scripts);
	    };
	    Object.defineProperty(SplashLoader.prototype, "bannerAllowed", {
	        get: function () {
	            var width = document.body.clientWidth;
	            var height = document.body.clientHeight;
	            return (this.progress < 100 &&
	                !(width > height && height <= 460) &&
	                !(width < 600 && height < 850));
	        },
	        enumerable: false,
	        configurable: true
	    });
	    SplashLoader.prototype.showBanner = function () {
	        if (!this.bannerAllowed) {
	            return null;
	        }
	        var banner = document.getElementById('h5branding-ad');
	        if (!banner) {
	            return null;
	        }
	        banner.style.display = 'inline-flex';
	        // TODO: show/hide ad container
	        return banner;
	    };
	    SplashLoader.prototype.setScriptloadProgress = function (maxScripts, increment) {
	        var progress = (0.3 * increment) / maxScripts;
	        this.circleLoader.animate(progress, null, function () {
	            /**/
	        });
	    };
	    SplashLoader.prototype.setLoadProgress = function (progress) {
	        var _this = this;
	        if (!this.loaded) {
	            return;
	        }
	        progress = 30 + progress * 0.7;
	        this.progress = progress;
	        if (progress === 100) {
	            var button_1 = document.querySelector('#h5branding-button');
	            this.circleLoader.animate(1, null, function () {
	                if (!Utils.inGDGameZone() && button_1 && true === _this.showPlayButton) {
	                    button_1.style.display = 'block';
	                }
	                else if (Utils.inGDGameZone() || false === _this.showPlayButton) {
	                    _this.onPlayButtonClick();
	                }
	            });
	        }
	        else {
	            this.circleLoader.animate(progress / 100, null, function () {
	                /**/
	            });
	        }
	    };
	    SplashLoader.prototype.setButtonCallback = function (cb) {
	        this.buttonCallback = cb;
	    };
	    SplashLoader.prototype.onPlayButtonClick = function () {
	        if (!this.buttonCallback) {
	            return;
	        }
	        this.buttonCallback();
	    };
	    SplashLoader.prototype.destroy = function () {
	        var element = document.querySelector('#h5branding-container');
	        if (element !== null && element.parentNode !== null) {
	            element.parentNode.removeChild(element);
	        }
	    };
	    SplashLoader.prototype.getGameLogoUrl = function (gameId) {
	        var imagePath = gameId + "-512x512.jpeg";
	        return window.hasOwnProperty('fbrqSA') && window['fbrqSA'] === true
	            ? 'assets/' + imagePath
	            : 'https://img.gamedistribution.com/' + imagePath;
	    };
	    return SplashLoader;
	}());

	// @ts-ignore
	// tslint:disable-next-line:no-unused-expression
	var EGAProgressionStatus$1 = GameAnalytics_node.EGAProgressionStatus;
	var google = new GoogleAnalytics();
	var gameanalytics$1 = new GameAnalytics$1();

	exports.EGAProgressionStatus = EGAProgressionStatus$1;
	exports.google = google;
	exports.gameanalytics = gameanalytics$1;
	exports.Utils = Utils;
	exports.Domain = Domain;
	exports.Branding = Branding$$1;
	exports.SplashLoader = SplashLoader;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=h5-azerion-branding.umd.js.map
