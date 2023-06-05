(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.h5ads = global.h5ads || {})));
}(this, (function (exports) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var eventemitter3 = createCommonjsModule(function (module) {

    var has = Object.prototype.hasOwnProperty
      , prefix = '~';

    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */
    function Events() {}

    //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //
    if (Object.create) {
      Events.prototype = Object.create(null);

      //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //
      if (!new Events().__proto__) prefix = false;
    }

    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once)
        , evt = prefix ? prefix + event : event;

      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];

      return emitter;
    }

    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }

    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = []
        , events
        , name;

      if (this._eventsCount === 0) return names;

      for (name in (events = this._events)) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };

    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event
        , handlers = this._events[evt];

      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };

    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event
        , listeners = this._events[evt];

      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };

    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return false;

      var listeners = this._events[evt]
        , len = arguments.length
        , args
        , i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1: return listeners.fn.call(listeners.context), true;
          case 2: return listeners.fn.call(listeners.context, a1), true;
          case 3: return listeners.fn.call(listeners.context, a1, a2), true;
          case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len -1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length
          , j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1: listeners[i].fn.call(listeners[i].context); break;
            case 2: listeners[i].fn.call(listeners[i].context, a1); break;
            case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
            case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
            default:
              if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
                args[j - 1] = arguments[j];
              }

              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };

    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };

    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };

    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (
          listeners.fn === fn &&
          (!once || listeners.once) &&
          (!context || listeners.context === context)
        ) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (
            listeners[i].fn !== fn ||
            (once && !listeners[i].once) ||
            (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }

      return this;
    };

    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    };

    //
    // Alias methods names because people roll like that.
    //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    //
    // Expose the prefix.
    //
    EventEmitter.prefixed = prefix;

    //
    // Allow `EventEmitter` to be imported as module namespace.
    //
    EventEmitter.EventEmitter = EventEmitter;

    //
    // Expose the module.
    //
    {
      module.exports = EventEmitter;
    }
    });

    /// <reference path='../../vendor/cocoon.d.ts'/>
    var CocoonProvider;
    (function (CocoonProvider) {
        CocoonProvider[CocoonProvider["AdMob"] = 0] = "AdMob";
        CocoonProvider[CocoonProvider["MoPub"] = 1] = "MoPub";
        CocoonProvider[CocoonProvider["Chartboost"] = 2] = "Chartboost";
        CocoonProvider[CocoonProvider["Heyzap"] = 3] = "Heyzap";
    })(CocoonProvider || (CocoonProvider = {}));
    var CocoonAds$$1 = /** @class */ (function () {
        function CocoonAds$$1(provider, config) {
            this.adsEnabled = false;
            this.bannerShowable = false;
            this.interstitialShowable = false;
            this.insentiveShowable = false;
            // TODO: Add cordova check
            if (!Cocoon || !Cocoon.Ad) {
                return;
            }
            this.adsEnabled = true;
            switch (provider) {
                default:
                case CocoonProvider.AdMob:
                    this.cocoonProvider = Cocoon.Ad.AdMob;
                    break;
                case CocoonProvider.Chartboost:
                    this.cocoonProvider = Cocoon.Ad.Chartboost;
                    break;
                case CocoonProvider.Heyzap:
                    this.cocoonProvider = Cocoon.Ad.Heyzap;
                    break;
                case CocoonProvider.MoPub:
                    this.cocoonProvider = Cocoon.Ad.MoPub;
                    break;
            }
            this.cocoonProvider.configure(config);
        }
        CocoonAds$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        CocoonAds$$1.prototype.showAd = function (adType) {
            if (!this.adsEnabled) {
                if (!(adType === exports.AdType.banner)) {
                    this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                }
                return;
            }
            if (adType === exports.AdType.banner) {
                if (!this.bannerShowable || null === this.banner) {
                    // No banner ad available, skipping
                    // this.adManager.onContentResumed.dispatch(CocoonAdType.banner);
                    return;
                }
                this.adManager.emit(exports.AdEvents.BANNER_SHOWN, this.banner.width, this.banner.height);
                this.adManager.bannerActive = true;
                this.banner.show();
            }
            if (adType === exports.AdType.interstitial) {
                if (!this.interstitialShowable || null === this.interstitial) {
                    // No banner ad available, skipping
                    this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, exports.AdType.interstitial);
                    return;
                }
                this.interstitial.show();
            }
            if (adType === exports.AdType.rewarded) {
                if (!this.insentiveShowable || null === this.insentive) {
                    // No banner ad available, skipping
                    this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, exports.AdType.rewarded);
                    return;
                }
                this.insentive.show();
            }
        };
        CocoonAds$$1.prototype.adAvailable = function (adType) {
            return true;
        };
        CocoonAds$$1.prototype.preloadAd = function (adType, adId, bannerPosition) {
            var _this = this;
            if (!this.adsEnabled) {
                return;
            }
            // Some cleanup before preloading a new ad
            this.destroyAd(adType);
            if (adType === exports.AdType.banner) {
                this.banner = this.cocoonProvider.createBanner(adId);
                if (bannerPosition) {
                    this.banner.setLayout(bannerPosition);
                }
                this.banner.on('load', function () {
                    _this.bannerShowable = true;
                });
                this.banner.on('fail', function () {
                    _this.bannerShowable = false;
                    _this.banner = null;
                });
                this.banner.on('click', function () {
                    _this.adManager.emit(exports.AdEvents.AD_CLICKED, exports.AdType.banner);
                });
                // Banner don't pause or resume content
                this.banner.on('show', function () {
                    /*this.adManager.onBannerShown.dispatch(this.banner.width, this.banner.height);
                     this.adManager.bannerActive = true;*/
                    // this.adManager.onContentPaused.dispatch(CocoonAdType.banner);
                });
                this.banner.on('dismiss', function () {
                    /*this.adManager.bannerActive = false;
                     this.adManager.onBannerHidden.dispatch(this.banner.width, this.banner.height);*/
                    // this.adManager.onContentResumed.dispatch(CocoonAdType.banner);
                    // this.bannerShowable = false;
                    // this.banner = null;
                });
                this.banner.load();
            }
            if (adType === exports.AdType.interstitial) {
                this.interstitial = this.cocoonProvider.createInterstitial(adId);
                this.interstitial.on('load', function () {
                    _this.interstitialShowable = true;
                });
                this.interstitial.on('fail', function () {
                    _this.interstitialShowable = false;
                    _this.interstitial = null;
                });
                this.interstitial.on('click', function () {
                    _this.adManager.emit(exports.AdEvents.AD_CLICKED, exports.AdType.interstitial);
                });
                this.interstitial.on('show', function () {
                    _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED, exports.AdType.interstitial);
                });
                this.interstitial.on('dismiss', function () {
                    _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, exports.AdType.interstitial);
                    _this.interstitialShowable = false;
                    _this.interstitial = null;
                });
                this.interstitial.load();
            }
            if (adType === exports.AdType.rewarded) {
                this.insentive = this.cocoonProvider.createRewardedVideo(adId);
                this.insentive.on('load', function () {
                    _this.insentiveShowable = true;
                });
                this.insentive.on('fail', function () {
                    _this.insentiveShowable = false;
                    _this.insentive = null;
                });
                this.insentive.on('click', function () {
                    _this.adManager.emit(exports.AdEvents.AD_CLICKED, exports.AdType.rewarded);
                });
                this.insentive.on('show', function () {
                    _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED, exports.AdType.rewarded);
                });
                this.insentive.on('dismiss', function () {
                    _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, exports.AdType.rewarded);
                    _this.insentiveShowable = false;
                    _this.insentive = null;
                });
                this.insentive.on('reward', function () {
                    _this.adManager.emit(exports.AdEvents.AD_REWARDED, exports.AdType.rewarded);
                    _this.insentiveShowable = false;
                    _this.insentive = null;
                });
                this.insentive.load();
            }
        };
        CocoonAds$$1.prototype.destroyAd = function (adType) {
            if (!this.adsEnabled) {
                return;
            }
            if (adType === exports.AdType.banner && null !== this.banner) {
                // Releasing banners will fail on cocoon due to:
                // https://github.com/ludei/atomic-plugins-ads/pull/12
                try {
                    this.cocoonProvider.releaseBanner(this.banner);
                }
                catch (e) {
                    // silently ignore
                }
                this.banner = null;
                this.bannerShowable = false;
            }
            if (adType === exports.AdType.interstitial && null !== this.interstitial) {
                this.cocoonProvider.releaseInterstitial(this.interstitial);
                this.interstitial = null;
                this.interstitialShowable = false;
            }
        };
        CocoonAds$$1.prototype.hideAd = function (adType) {
            if (!this.adsEnabled) {
                return;
            }
            if (adType === exports.AdType.interstitial && null !== this.interstitial) {
                this.interstitial.hide();
                // this.adManager.onContentResumed.dispatch(CocoonAdType.interstitial);
            }
            if (adType === exports.AdType.banner && null !== this.banner) {
                if (this.adManager.bannerActive) {
                    this.adManager.bannerActive = false;
                    this.adManager.emit(exports.AdEvents.BANNER_HIDDEN, this.banner.width, this.banner.height);
                }
                this.banner.hide();
                // this.adManager.onContentResumed.dispatch(CocoonAdType.banner);
            }
            if (adType === exports.AdType.rewarded && null !== this.insentive) {
                this.insentive.hide();
                // this.adManager.onContentResumed.dispatch(CocoonAdType.insentive);
            }
        };
        return CocoonAds$$1;
    }());

    /// <reference path='../../vendor/cordova-gamedistribution.d.ts'/>
    var CordovaGamedistribution$$1 = /** @class */ (function () {
        function CordovaGamedistribution$$1(gameId, userId, debug) {
            if (debug === void 0) { debug = false; }
            this.adsEnabled = false;
            if (cordova.plugins === undefined ||
                (cordova.plugins !== undefined && cordova.plugins.gdApi === undefined)) {
                console.log('gdApi not available!');
                return;
            }
            if (debug) {
                cordova.plugins.gdApi.enableTestAds();
            }
            this.setAdListeners();
            cordova.plugins.gdApi.init([gameId, userId], function (data) {
                console.log('API init success!', data);
            }, function (error) {
                console.log('API init error!', error);
            });
        }
        CordovaGamedistribution$$1.prototype.setAdListeners = function () {
            var _this = this;
            cordova.plugins.gdApi.setAdListener(function (data) {
                console.log('banner reply, data.event', data.event, data);
                switch (data.event) {
                    case 'BANNER_STARTED':
                        _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                        break;
                    case 'API_IS_READY':
                        // Send post init
                        _this.adsEnabled = true;
                        break;
                    case 'API_ALREADY_INITIALIZED':
                        break;
                    case 'BANNER_CLOSED':
                    case 'API_NOT_READY':
                    case 'BANNER_FAILED':
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                        break;
                }
            }, function (error) {
                console.log('Set listener error:', error);
                _this.adsEnabled = false;
            });
        };
        CordovaGamedistribution$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        CordovaGamedistribution$$1.prototype.showAd = function (adType) {
            var _this = this;
            if (this.adsEnabled) {
                console.log('show banner called');
                cordova.plugins.gdApi.showBanner(function (data) {
                    console.log('Show banner worked', data);
                }, function (data) {
                    console.log('Could not show banner:', data);
                    _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                });
            }
            else {
                console.log('Ads not enabled, resuming');
                this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
            }
        };
        CordovaGamedistribution$$1.prototype.adAvailable = function (adType) {
            return true;
        };
        // Does nothing, but needed for Provider interface
        CordovaGamedistribution$$1.prototype.preloadAd = function (adType) {
            return;
        };
        // Does nothing, but needed for Provider interface
        CordovaGamedistribution$$1.prototype.destroyAd = function (adType) {
            return;
        };
        // Does nothing, but needed for Provider interface
        CordovaGamedistribution$$1.prototype.hideAd = function (adType) {
            return;
        };
        return CordovaGamedistribution$$1;
    }());

    /// <reference path='../../vendor/cordova-gamedock.d.ts'/>
    /**
     * The cordova gamedock ad provider requires the gamedock-sdk-cordova plugin to be setup within your cordova app.
     */
    var CordovaGamedock$$1 = /** @class */ (function () {
        /**
         * Creates an instance of CordovaGamedock.
         * Initializes the gamedockSDK and adds listeners for events.
         */
        function CordovaGamedock$$1() {
            var _this = this;
            this.adsEnabled = false;
            /**
             * Flag for if an rewarded ad is loaded or not.
             */
            this.rewardedLoaded = false;
            if (typeof gamedockSDK === 'undefined') {
                return;
            }
            // Variables the gamedockSDK requires to be initialized.
            var withAgeGate = false;
            var ageGateOptions = { shouldBlock: true, requiredAge: 12 };
            var withPrivacyPolicy = true;
            var environment = 'PRODUCTION';
            var externalIds = [];
            // Calls AD_PROVIDER_LOADED on PrivacyPolicyStatus with flag accepted.
            gamedockSDK.on('PrivacyPolicyStatus', function (data) {
                _this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
            });
            // Initialize the gamedockSDK.
            gamedockSDK.initialise(withAgeGate, ageGateOptions, withPrivacyPolicy, environment, externalIds);
            // Called whenever there is an ad available via the requestInterstitial and reqeuestRewardVideo methods.
            gamedockSDK.on('AdAvailable', function (data) {
                switch (data.type) {
                    case 'interstitial':
                        _this.interstitalAvailable();
                        break;
                    case 'rewardVideo':
                        _this.rewardedChanged(true);
                        break;
                    case 'banner':
                        throw new Error('Not yet implemented.');
                }
            });
            // Called whenever there is no ad available (for now just resumes gameplay).
            gamedockSDK.on('AdNotAvailable', function (data) {
                switch (data.type) {
                    case 'interstitial':
                        _this.resumeGameplay();
                        break;
                    case 'rewardVideo':
                        _this.resumeGameplay();
                        break;
                    case 'banner':
                        throw new Error('Not yet implemented.');
                }
            });
            // Called whenever the shown ad is finished or closed for given reason.
            gamedockSDK.on('AdFinished', function (data) {
                switch (data.type) {
                    case 'interstitial':
                        _this.resumeGameplay();
                        break;
                    case 'rewardVideo':
                        _this.rewardVideoFinished(data.reason);
                        break;
                    case 'banner':
                        throw new Error('Not yet implemented.');
                }
            });
        }
        CordovaGamedock$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
        };
        /**
         * Show ad of type AdType
         * @param {AdType} [adType=AdType.interstitial]
         */
        CordovaGamedock$$1.prototype.showAd = function (adType) {
            if (adType === void 0) { adType = exports.AdType.interstitial; }
            if (typeof gamedockSDK === 'undefined') {
                return;
            }
            switch (adType) {
                case exports.AdType.interstitial:
                    this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    // requestInterstitial is called because playInstestitial will not check ad timeout.
                    // playInstestitial will be called on AdAvailable.
                    gamedockSDK.requestInterstitial();
                    break;
                case exports.AdType.rewarded:
                    if (!this.adAvailable(exports.AdType.rewarded)) {
                        this.resumeGameplay();
                        break;
                    }
                    this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    this.rewardedChanged(false);
                    gamedockSDK.playRewardVideo();
                    break;
                default:
                    this.resumeGameplay();
                    break;
            }
        };
        /**
         * Called when the gamedockSDK event AdAvailable is called with typeof interstitial.
         */
        CordovaGamedock$$1.prototype.interstitalAvailable = function () {
            if (typeof gamedockSDK === 'undefined') {
                return;
            }
            gamedockSDK.playInterstitial();
        };
        /**
         * Called when the gamedockSDK event AdFinished is called with typeof rewardVideo.
         * Will handle dismiss and close reason.
         * @param {string} reason
         */
        CordovaGamedock$$1.prototype.rewardVideoFinished = function (reason) {
            switch (reason) {
                case 'dismiss':
                    // If rewardVideo is dismissed (closed before finished), resume the gameplay.
                    this.resumeGameplay();
                    break;
                case 'close':
                    // If rewardVideo is closed (player saw video until end), emit AD_REWARDED event.
                    this.adManager.emit(exports.AdEvents.AD_REWARDED);
                    break;
            }
        };
        /**
         * Emits event CONTENT_RESUMED
         */
        CordovaGamedock$$1.prototype.resumeGameplay = function () {
            this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
        };
        /**
         * Preloads ad of type AdType
         * @param {AdType} [adType=AdType.interstitial]
         */
        CordovaGamedock$$1.prototype.preloadAd = function (adType) {
            if (adType === void 0) { adType = exports.AdType.interstitial; }
            if (typeof gamedockSDK === 'undefined') {
                return;
            }
            switch (adType) {
                case exports.AdType.rewarded:
                    if (this.rewardedLoaded) {
                        return;
                    }
                    gamedockSDK.requestRewardVideo();
                    break;
            }
        };
        CordovaGamedock$$1.prototype.destroyAd = function () {
            return;
        };
        CordovaGamedock$$1.prototype.hideAd = function () {
            return;
        };
        /**
         * Returns if ad is available of type AdType
         * @param {AdType} adType
         * @returns {boolean}
         */
        CordovaGamedock$$1.prototype.adAvailable = function (adType) {
            switch (adType) {
                case exports.AdType.rewarded:
                    return this.rewardedLoaded;
            }
            return false;
        };
        /**
         * Sets the rewardedLoaded flag to given boolean "available".
         * @param {boolean} available
         */
        CordovaGamedock$$1.prototype.rewardedChanged = function (available) {
            this.rewardedLoaded = available;
        };
        return CordovaGamedock$$1;
    }());

    /// <reference path='../../vendor/cordova-heyzap.d.ts'/>
    var CordovaHeyzap$$1 = /** @class */ (function () {
        function CordovaHeyzap$$1(publisherId) {
            var _this = this;
            this.adsEnabled = false;
            // TODO: Add cordova check
            this.adsEnabled = true;
            HeyzapAds.start(publisherId).then(function () {
                // Native call successful.
            }, function (e) {
                // Failed to start heyzap, disabling ads
                _this.adsEnabled = false;
            });
        }
        CordovaHeyzap$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        CordovaHeyzap$$1.prototype.showAd = function (adType, bannerAdPositions) {
            var _this = this;
            if (!this.adsEnabled) {
                this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
            }
            switch (adType) {
                case exports.AdType.interstitial:
                    // Register event listeners
                    HeyzapAds.InterstitialAd.addEventListener(HeyzapAds.InterstitialAd.Events.HIDE, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.InterstitialAd.Events.HIDE);
                    });
                    HeyzapAds.InterstitialAd.addEventListener(HeyzapAds.InterstitialAd.Events.SHOW_FAILED, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.InterstitialAd.Events.SHOW_FAILED);
                    });
                    HeyzapAds.InterstitialAd.addEventListener(HeyzapAds.InterstitialAd.Events.CLICKED, function () {
                        _this.adManager.emit(exports.AdEvents.AD_CLICKED, HeyzapAds.InterstitialAd.Events.CLICKED);
                    });
                    HeyzapAds.InterstitialAd.show().then(function () {
                        // Native call successful.
                        _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    }, function (e) {
                        // Failed to show insentive ad, continue operations
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                    });
                    break;
                case exports.AdType.interstitial:
                    HeyzapAds.VideoAd.addEventListener(HeyzapAds.VideoAd.Events.HIDE, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.VideoAd.Events.HIDE);
                    });
                    HeyzapAds.VideoAd.addEventListener(HeyzapAds.VideoAd.Events.SHOW_FAILED, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.VideoAd.Events.SHOW_FAILED);
                    });
                    HeyzapAds.VideoAd.addEventListener(HeyzapAds.VideoAd.Events.CLICKED, function () {
                        _this.adManager.emit(exports.AdEvents.AD_CLICKED, HeyzapAds.VideoAd.Events.CLICKED);
                    });
                    HeyzapAds.VideoAd.show().then(function () {
                        // Native call successful.
                        _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    }, function (e) {
                        // Failed to show insentive ad, continue operations
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                    });
                    break;
                case exports.AdType.rewarded:
                    HeyzapAds.IncentivizedAd.addEventListener(HeyzapAds.IncentivizedAd.Events.HIDE, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.IncentivizedAd.Events.HIDE);
                    });
                    HeyzapAds.IncentivizedAd.addEventListener(HeyzapAds.IncentivizedAd.Events.SHOW_FAILED, function () {
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED, HeyzapAds.IncentivizedAd.Events.SHOW_FAILED);
                    });
                    HeyzapAds.IncentivizedAd.addEventListener(HeyzapAds.IncentivizedAd.Events.CLICKED, function () {
                        _this.adManager.emit(exports.AdEvents.AD_CLICKED, HeyzapAds.IncentivizedAd.Events.CLICKED);
                    });
                    HeyzapAds.IncentivizedAd.show().then(function () {
                        // Native call successful.
                        _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    }, function (e) {
                        // Failed to show insentive ad, continue operations
                        _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                    });
                    break;
                case exports.AdType.banner:
                    if (undefined === bannerAdPositions) {
                        return;
                    }
                    HeyzapAds.BannerAd.show(bannerAdPositions).then(function () {
                        // Native call successful.
                    }, function (e) {
                        // Handle Error
                    });
                    break;
            }
        };
        CordovaHeyzap$$1.prototype.adAvailable = function (adType) {
            return true;
        };
        CordovaHeyzap$$1.prototype.preloadAd = function (adType) {
            if (!this.adsEnabled) {
                return;
            }
            if (adType === exports.AdType.rewarded) {
                HeyzapAds.IncentivizedAd.fetch().then(function () {
                    // Native call successful.
                }, function (e) {
                    // Handle Error
                });
            }
            return;
        };
        CordovaHeyzap$$1.prototype.destroyAd = function (adType) {
            if (!this.adsEnabled) {
                return;
            }
            if (adType === exports.AdType.banner) {
                HeyzapAds.BannerAd.destroy().then(function () {
                    // Native call successful.
                }, function (e) {
                    // Handle Error
                });
            }
            return;
        };
        CordovaHeyzap$$1.prototype.hideAd = function (adType) {
            if (!this.adsEnabled) {
                return;
            }
            if (adType === exports.AdType.banner) {
                HeyzapAds.BannerAd.hide().then(function () {
                    // Native call successful.
                }, function (e) {
                    // Handle Error
                });
            }
            return;
        };
        return CordovaHeyzap$$1;
    }());

    /**
     * The cordova Ironsource ad provider requires the cordova-plugin-ironsource-ads plugin to be setup within your cordova app.
     *
     * TODO:
     * - Look at better ironsource plugin
     */
    var CordovaIronSource$$1 = /** @class */ (function () {
        function CordovaIronSource$$1(appKey) {
            var _this = this;
            this.adsEnabled = false;
            this.interstitialLoaded = false;
            this.rewardedLoaded = false;
            if (typeof IronSourceAds === 'undefined') {
                return;
            }
            IronSourceAds.init({
                appKey: appKey
            });
            var resume = function () { return _this.resumeGameplay(); };
            // Listen for interstitial
            window.addEventListener('interstitialClosed', resume);
            window.addEventListener('interstitialShowFailed', resume);
            window.addEventListener('interstitialLoaded', function () { return _this.interstitialChanged(true); });
            // Listen for rewarded
            window.addEventListener('rewardedVideoClosed', resume);
            window.addEventListener('rewardedVideoFailed', resume);
            IronSourceAds.hasRewardedVideo({
                onSuccess: this.rewardedChanged.bind(this)
            });
            window.addEventListener('rewardedVideoAvailabilityChanged', function (event) {
                return _this.rewardedChanged(event.available);
            });
        }
        CordovaIronSource$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        CordovaIronSource$$1.prototype.showAd = function (adType) {
            if (adType === void 0) { adType = exports.AdType.interstitial; }
            switch (adType) {
                case exports.AdType.interstitial:
                    if (!this.interstitialLoaded) {
                        this.resumeGameplay();
                        break;
                    }
                    this.interstitialChanged(false);
                    this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    IronSourceAds.showInterstitial();
                    break;
                case exports.AdType.rewarded:
                    if (!this.rewardedLoaded) {
                        this.resumeGameplay();
                        break;
                    }
                    this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                    IronSourceAds.showRewardedVideo();
                    break;
                default:
                    this.resumeGameplay();
                    break;
            }
        };
        CordovaIronSource$$1.prototype.resumeGameplay = function () {
            this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
        };
        CordovaIronSource$$1.prototype.preloadAd = function (adType) {
            if (adType === void 0) { adType = exports.AdType.interstitial; }
            if (adType === exports.AdType.interstitial) {
                IronSourceAds.loadInterstitial();
            }
        };
        CordovaIronSource$$1.prototype.destroyAd = function () {
            return;
        };
        CordovaIronSource$$1.prototype.hideAd = function () {
            return;
        };
        CordovaIronSource$$1.prototype.adAvailable = function (adType) {
            switch (adType) {
                case exports.AdType.interstitial:
                    return this.interstitialLoaded;
                case exports.AdType.rewarded:
                    return this.rewardedLoaded;
            }
            return false;
        };
        CordovaIronSource$$1.prototype.interstitialChanged = function (available) {
            this.interstitialLoaded = available;
        };
        CordovaIronSource$$1.prototype.rewardedChanged = function (available) {
            this.rewardedLoaded = available;
        };
        return CordovaIronSource$$1;
    }());

    /// <reference path='../../vendor/game-distribution.d.ts'/>
    var GameDistributionAdType;
    (function (GameDistributionAdType) {
        GameDistributionAdType["interstitial"] = "interstitial";
        GameDistributionAdType["rewarded"] = "rewarded";
        GameDistributionAdType["display"] = "display";
    })(GameDistributionAdType || (GameDistributionAdType = {}));
    (function (GameDistributionBannerSize) {
        GameDistributionBannerSize[GameDistributionBannerSize["LargeRectangle"] = 0] = "LargeRectangle";
        GameDistributionBannerSize[GameDistributionBannerSize["MediumRectangle"] = 1] = "MediumRectangle";
        GameDistributionBannerSize[GameDistributionBannerSize["Billboard"] = 2] = "Billboard";
        GameDistributionBannerSize[GameDistributionBannerSize["Leaderboard"] = 3] = "Leaderboard";
        GameDistributionBannerSize[GameDistributionBannerSize["Skyscraper"] = 4] = "Skyscraper";
        GameDistributionBannerSize[GameDistributionBannerSize["WideSkyscraper"] = 5] = "WideSkyscraper"; // 160x600
    })(exports.GameDistributionBannerSize || (exports.GameDistributionBannerSize = {}));
    (function (GameDistributionAlignment) {
        GameDistributionAlignment[GameDistributionAlignment["TopLeft"] = 0] = "TopLeft";
        GameDistributionAlignment[GameDistributionAlignment["TopCenter"] = 1] = "TopCenter";
        GameDistributionAlignment[GameDistributionAlignment["TopRight"] = 2] = "TopRight";
        GameDistributionAlignment[GameDistributionAlignment["CenterLeft"] = 3] = "CenterLeft";
        GameDistributionAlignment[GameDistributionAlignment["Center"] = 4] = "Center";
        GameDistributionAlignment[GameDistributionAlignment["CenterRight"] = 5] = "CenterRight";
        GameDistributionAlignment[GameDistributionAlignment["BottomLeft"] = 6] = "BottomLeft";
        GameDistributionAlignment[GameDistributionAlignment["BottomCenter"] = 7] = "BottomCenter";
        GameDistributionAlignment[GameDistributionAlignment["BottomRight"] = 8] = "BottomRight";
    })(exports.GameDistributionAlignment || (exports.GameDistributionAlignment = {}));
    var GameDistributionBanner$$1 = /** @class */ (function () {
        function GameDistributionBanner$$1() {
            this.scaleFactor = 1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.element = document.createElement('div');
            this.element.style.position = 'absolute';
            this.element.style.top = "0px";
            this.element.style.left = "0px";
            this.element.id = "banner-" + Date.now() + ((Math.random() * 10000000) | 0);
            document.body.appendChild(this.element);
        }
        GameDistributionBanner$$1.prototype.loadBanner = function () {
            if (typeof gdsdk === 'undefined') {
                return Promise.reject('GD Sdk not available, probably due to adblocker');
            }
            return gdsdk.showAd(GameDistributionAdType.display, {
                containerId: this.element.id
            });
        };
        GameDistributionBanner$$1.prototype.destroy = function () {
            document.body.removeChild(this.element);
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
            }
            delete this.element;
            delete this.parent;
            delete this.alignment;
        };
        GameDistributionBanner$$1.prototype.alignIn = function (element, position) {
            var _this = this;
            if (this.parent) {
                console.warn('Banner already aligned, ignoring...');
                return;
            }
            this.parent = element;
            this.alignment = position;
            this.resizeListener = function () { return _this.resize(); };
            window.addEventListener('resize', this.resizeListener);
            this.resize();
        };
        GameDistributionBanner$$1.prototype.setOffset = function (x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.offsetX = x;
            this.offsetY = y;
            this.resize();
        };
        GameDistributionBanner$$1.prototype.resize = function () {
            if (!this.parent) {
                return;
            }
            var parentBoundingRect = this.parent.getBoundingClientRect();
            switch (this.alignment) {
                case exports.GameDistributionAlignment.TopLeft:
                    this.position(parentBoundingRect.left, parentBoundingRect.top);
                    break;
                case exports.GameDistributionAlignment.TopCenter:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width / 2 -
                        (this.width * this.scaleFactor) / 2, parentBoundingRect.top);
                    break;
                case exports.GameDistributionAlignment.TopRight:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width -
                        this.width * this.scaleFactor, parentBoundingRect.top);
                    break;
                case exports.GameDistributionAlignment.CenterLeft:
                    this.position(parentBoundingRect.left, parentBoundingRect.top +
                        parentBoundingRect.height / 2 -
                        (this.height * this.scaleFactor) / 2);
                    break;
                case exports.GameDistributionAlignment.Center:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width / 2 -
                        (this.width * this.scaleFactor) / 2, parentBoundingRect.top +
                        parentBoundingRect.height / 2 -
                        (this.height * this.scaleFactor) / 2);
                    break;
                case exports.GameDistributionAlignment.CenterRight:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width -
                        this.width * this.scaleFactor, parentBoundingRect.top +
                        parentBoundingRect.height / 2 -
                        (this.height * this.scaleFactor) / 2);
                    break;
                case exports.GameDistributionAlignment.BottomLeft:
                    this.position(parentBoundingRect.left, parentBoundingRect.top +
                        parentBoundingRect.height -
                        this.height * this.scaleFactor);
                    break;
                case exports.GameDistributionAlignment.BottomCenter:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width / 2 -
                        (this.width * this.scaleFactor) / 2, parentBoundingRect.top +
                        parentBoundingRect.height -
                        this.height * this.scaleFactor);
                    break;
                case exports.GameDistributionAlignment.BottomRight:
                    this.position(parentBoundingRect.left +
                        parentBoundingRect.width -
                        this.width * this.scaleFactor, parentBoundingRect.top +
                        parentBoundingRect.height -
                        this.height * this.scaleFactor);
                    break;
            }
        };
        GameDistributionBanner$$1.prototype.setSize = function (size) {
            var width;
            var height;
            switch (size) {
                default:
                case exports.GameDistributionBannerSize.LargeRectangle:
                    width = 336;
                    height = 280;
                    break;
                case exports.GameDistributionBannerSize.MediumRectangle:
                    width = 300;
                    height = 250;
                    break;
                case exports.GameDistributionBannerSize.Billboard:
                    width = 970;
                    height = 250;
                    break;
                case exports.GameDistributionBannerSize.Leaderboard:
                    width = 728;
                    height = 90;
                    break;
                case exports.GameDistributionBannerSize.Skyscraper:
                    width = 120;
                    height = 600;
                    break;
                case exports.GameDistributionBannerSize.WideSkyscraper:
                    width = 160;
                    height = 600;
                    break;
            }
            this.width = width;
            this.height = height;
            this.element.style.width = width + "px";
            this.element.style.height = height + "px";
        };
        GameDistributionBanner$$1.prototype.position = function (x, y) {
            this.element.style.left = x + this.offsetX + "px";
            this.element.style.top = y + this.offsetY + "px";
        };
        GameDistributionBanner$$1.prototype.scale = function (factor) {
            this.element.style.transformOrigin = 'left top';
            this.scaleFactor = factor;
            this.element.style.transform = "scale(" + factor + ")";
        };
        return GameDistributionBanner$$1;
    }());
    var GameDistribution$$1 = /** @class */ (function () {
        function GameDistribution$$1(gameId) {
            var _this = this;
            this.adsEnabled = false;
            this.hasRewarded = false;
            this.adShowing = false;
            this.areAdsEnabled();
            window.GD_OPTIONS = {
                gameId: gameId,
                advertisementSettings: {
                    autoplay: false
                },
                onEvent: function (event) {
                    switch (event.name) {
                        case 'SDK_GAME_PAUSE':
                            // pause game logic / mute audio
                            _this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
                            break;
                        case 'SDK_READY':
                            _this.sdkLoaded();
                            break;
                        default:
                            break;
                    }
                }
            };
            (function (d, s, id) {
                var js;
                var fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = '//lablockedgames.com/gd_1_5_2.js';
                if (fjs.parentNode) {
                    fjs.parentNode.insertBefore(js, fjs);
                }
            })(document, 'script', 'gamedistribution-jssdk');
        }
        GameDistribution$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        GameDistribution$$1.prototype.sdkLoaded = function () {
            var _this = this;
            this.areAdsEnabled().then(function (enabled) {
                if (enabled) {
                    _this.adsEnabled = true;
                }
            });
        };
        GameDistribution$$1.prototype.showAd = function (adType) {
            var _this = this;
            if (!this.adsEnabled) {
                this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
            }
            else {
                if (typeof gdsdk === 'undefined' || (gdsdk && typeof gdsdk.showAd === 'undefined')) {
                    //So gdsdk isn't available OR
                    //gdsdk is available, but showBanner is not there (weird but can happen)
                    this.adsEnabled = false;
                    this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                    return;
                }
                gdsdk
                    .showAd(adType === exports.AdType.rewarded
                    ? GameDistributionAdType.rewarded
                    : GameDistributionAdType.interstitial)
                    .then(function () {
                    if (adType === exports.AdType.rewarded) {
                        _this.adManager.emit(exports.AdEvents.AD_REWARDED);
                        _this.hasRewarded = false;
                    }
                    _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                })
                    .catch(function () {
                    if (adType === exports.AdType.rewarded && _this.hasRewarded) {
                        _this.hasRewarded = false;
                    }
                    _this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                });
            }
        };
        GameDistribution$$1.prototype.createBanner = function (size) {
            if (!this.adsEnabled) {
                return;
            }
            var banner = new GameDistributionBanner$$1();
            banner.setSize(size);
            return banner;
        };
        GameDistribution$$1.prototype.loadBanner = function (size) {
            if (!this.adsEnabled) {
                return;
            }
            var banner = new GameDistributionBanner$$1();
            banner.setSize(size);
            banner.loadBanner();
            return banner;
        };
        //Does nothing, but needed for Provider interface
        GameDistribution$$1.prototype.preloadAd = function (adType) {
            var _this = this;
            if (this.hasRewarded || !this.adsEnabled || adType !== exports.AdType.rewarded) {
                return;
            }
            console.log('preloading ad');
            gdsdk.preloadAd(GameDistributionAdType.rewarded).then(function () {
                _this.hasRewarded = true;
                _this.adManager.emit(exports.AdEvents.AD_LOADED, adType);
            });
        };
        GameDistribution$$1.prototype.adAvailable = function (adType) {
            if (adType === exports.AdType.rewarded) {
                return this.hasRewarded;
            }
            return true;
        };
        //Does nothing, but needed for Provider interface
        GameDistribution$$1.prototype.destroyAd = function () {
            return;
        };
        //Does nothing, but needed for Provider interface
        GameDistribution$$1.prototype.hideAd = function () {
            return;
        };
        /**
         * Checks if the ads are enabled (e.g; adblock is enabled or not)
         * @returns {boolean}
         */
        GameDistribution$$1.prototype.areAdsEnabled = function () {
            var test = document.createElement('div');
            test.innerHTML = '&nbsp;';
            test.className = 'adsbox';
            test.style.position = 'absolute';
            test.style.fontSize = '10px';
            document.body.appendChild(test);
            // let adsEnabled: boolean;
            var isEnabled = function () {
                var enabled = true;
                if (test.offsetHeight === 0) {
                    enabled = false;
                }
                if (test.parentNode) {
                    test.parentNode.removeChild(test);
                }
                return enabled;
            };
            return new Promise(function (resolve) {
                window.setTimeout(function () {
                    resolve(isEnabled());
                }, 100);
            });
        };
        return GameDistribution$$1;
    }());

    /// <reference path='../../vendor/google-ima3-sdk.d.ts'/>
    var GoogleAdEvent;
    (function (GoogleAdEvent) {
        GoogleAdEvent[GoogleAdEvent["start"] = 0] = "start";
        GoogleAdEvent[GoogleAdEvent["firstQuartile"] = 1] = "firstQuartile";
        GoogleAdEvent[GoogleAdEvent["midPoint"] = 2] = "midPoint";
        GoogleAdEvent[GoogleAdEvent["thirdQuartile"] = 3] = "thirdQuartile";
        GoogleAdEvent[GoogleAdEvent["complete"] = 4] = "complete";
    })(GoogleAdEvent || (GoogleAdEvent = {}));
    var Ima3$$1 = /** @class */ (function () {
        function Ima3$$1(canvas, adTagUrl) {
            this.googleEnabled = false;
            this.adsEnabled = true;
            this.adTagUrl = '';
            this.adRequested = false;
            this.areAdsEnabled();
            if (typeof google === 'undefined') {
                return;
            }
            this.googleEnabled = true;
            this.gameContent =
                typeof canvas.parentElement === 'string'
                    ? document.getElementById(canvas.parentElement)
                    : canvas.parentElement;
            // this.gameContent.currentTime = 100;
            this.gameContent.style.position = 'absolute';
            this.gameContent.style.width = '100%';
            this.adContent = this.gameContent.parentNode.appendChild(document.createElement('div'));
            this.adContent.id = 'phaser-ad-container';
            this.adContent.style.position = 'absolute';
            this.adContent.style.zIndex = '9999';
            this.adContent.style.display = 'none';
            this.adContent.style.top = '0';
            this.adContent.style.left = '0';
            this.adContent.style.width = '100%';
            this.adContent.style.height = '100%';
            this.adContent.style.overflow = 'hidden';
            this.adTagUrl = adTagUrl;
            // Create the ad display container.
            this.adDisplay = new google.ima.AdDisplayContainer(this.adContent);
            google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
            google.ima.settings.setLocale('nl');
            // Create ads loader, and register events
            this.adLoader = new google.ima.AdsLoader(this.adDisplay);
            this.adLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdManagerLoader, false, this);
            this.adLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, false, this);
        }
        Ima3$$1.prototype.setManager = function (manager) {
            this.adManager = manager;
            this.adManager.emit(exports.AdEvents.AD_PROVIDER_LOADED);
        };
        /**
         * Doing an ad request, if anything is wrong with the lib (missing ima3, failed request) we just dispatch the contentResumed event
         * Otherwise we display an ad
         */
        Ima3$$1.prototype.showAd = function (adType, customParams) {
            console.log('Ad Requested');
            if (this.adRequested) {
                return;
            }
            if (!this.adsEnabled) {
                this.adManager.emit(exports.AdEvents.AD_DISABLED, true);
            }
            if (!this.googleEnabled) {
                this.onContentResumeRequested();
                return;
            }
            // For mobile this ad request needs to be handled post user click
            this.adDisplay.initialize();
            // Request video ads.
            var adsRequest = new google.ima.AdsRequest();
            adsRequest.adTagUrl = this.adTagUrl + this.parseCustomParams(customParams);
            var width = window.innerWidth; // parseInt(<string>(!this.game.canvas.style.width ? this.game.canvas.width : this.game.canvas.style.width), 10);
            var height = window.innerHeight; // parseInt(<string>(!this.game.canvas.style.height ? this.game.canvas.height : this.game.canvas.style.height), 10);
            // Here we check if phaser is fullscreen or not, if we are fullscreen, we subtract some of the width and height, to counter for the resize (
            // Fullscreen should be disabled for the ad, (onContentPaused) and requested for again when the game resumes
            if (document.body.clientHeight < window.innerHeight) {
                height = document.body.clientHeight;
                width = document.body.clientWidth;
            }
            // Specify the linear and nonlinear slot sizes. This helps the SDK to
            // select the correct creative if multiple are returned.
            adsRequest.linearAdSlotWidth = width;
            adsRequest.linearAdSlotHeight = height;
            adsRequest.nonLinearAdSlotWidth = width;
            adsRequest.nonLinearAdSlotHeight = height;
            // Required for games, see:
            // http://googleadsdeveloper.blogspot.nl/2015/10/important-changes-for-gaming-publishers.html
            adsRequest.forceNonLinearFullSlot = true;
            try {
                this.adRequested = true;
                this.adLoader.requestAds(adsRequest);
            }
            catch (e) {
                console.log(e);
                this.onContentResumeRequested();
            }
        };
        Ima3$$1.prototype.adAvailable = function (adType) {
            return true;
        };
        // Does nothing, but needed for Provider interface
        Ima3$$1.prototype.preloadAd = function () {
            return;
        };
        // Does nothing, but needed for Provider interface
        Ima3$$1.prototype.destroyAd = function () {
            return;
        };
        // Does nothing, but needed for Provider interface
        Ima3$$1.prototype.hideAd = function () {
            return;
        };
        /**
         * Called when the ads manager was loaded.
         * We register all ad related events here, and initialize the manager with the game width/height
         *
         * @param adsManagerLoadedEvent
         */
        Ima3$$1.prototype.onAdManagerLoader = function (adsManagerLoadedEvent) {
            var _this = this;
            console.log('AdsManager loaded');
            // Get the ads manager.
            var adsRenderingSettings = new google.ima.AdsRenderingSettings();
            adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
            // videoContent should be set to the content video element.
            var adsManager = adsManagerLoadedEvent.getAdsManager(this.gameContent, adsRenderingSettings);
            this.adsManager = adsManager;
            console.log(adsManager.isCustomClickTrackingUsed());
            // Add listeners to the required events.
            adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested, false, this);
            adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested, false, this);
            adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, false, this);
            [
                google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                google.ima.AdEvent.Type.CLICK,
                google.ima.AdEvent.Type.COMPLETE,
                google.ima.AdEvent.Type.FIRST_QUARTILE,
                google.ima.AdEvent.Type.LOADED,
                google.ima.AdEvent.Type.MIDPOINT,
                google.ima.AdEvent.Type.PAUSED,
                google.ima.AdEvent.Type.STARTED,
                google.ima.AdEvent.Type.THIRD_QUARTILE
            ].forEach(function (event) {
                adsManager.addEventListener(event, _this.onAdEvent, false, _this);
            });
            try {
                // Show the ad elements, we only need to show the faux videoelement on iOS, because the ad is displayed in there.
                this.adContent.style.display = 'block';
                // Initialize the ads manager. Ad rules playlist will start at this time.
                var width = window.innerWidth; // parseInt(<string>(!this.game.canvas.style.width ? this.game.canvas.width : this.game.canvas.style.width), 10);
                var height = window.innerHeight; // parseInt(<string>(!this.game.canvas.style.height ? this.game.canvas.height : this.game.canvas.style.height), 10);
                this.adsManager.init(width, height, google.ima.ViewMode.NORMAL);
                // Call play to start showing the ad. Single video and overlay ads will
                // start at this time; the call will be ignored for ad rules.
                this.adsManager.start();
                this.resizeListener = function () {
                    if (_this.adsManager === null) {
                        return;
                    }
                    // Window was resized, so expect something similar
                    console.log('Resizing ad size');
                    _this.adsManager.resize(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);
                };
                window.addEventListener('resize', this.resizeListener);
            }
            catch (adError) {
                console.log('Adsmanager error:', adError);
                this.onAdError(adError);
            }
        };
        /**
         * Generic ad events are handled here
         * @param adEvent
         */
        Ima3$$1.prototype.onAdEvent = function (adEvent) {
            console.log('onAdEvent', adEvent);
            switch (adEvent.type) {
                case google.ima.AdEvent.Type.CLICK:
                    this.adManager.emit(exports.AdEvents.AD_CLICKED);
                    break;
                case google.ima.AdEvent.Type.LOADED:
                    this.adRequested = false;
                    var ad = adEvent.getAd();
                    console.log('is ad linear?', ad.isLinear());
                    if (!ad.isLinear()) {
                        this.onContentResumeRequested();
                    }
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.adManager.emit(exports.AdEvents.AD_PROGRESSION, GoogleAdEvent.start);
                    break;
                case google.ima.AdEvent.Type.FIRST_QUARTILE:
                    this.adManager.emit(exports.AdEvents.AD_PROGRESSION, GoogleAdEvent.firstQuartile);
                    break;
                case google.ima.AdEvent.Type.MIDPOINT:
                    this.adManager.emit(exports.AdEvents.AD_PROGRESSION, GoogleAdEvent.midPoint);
                    break;
                case google.ima.AdEvent.Type.THIRD_QUARTILE:
                    this.adManager.emit(exports.AdEvents.AD_PROGRESSION, GoogleAdEvent.thirdQuartile);
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    this.adManager.emit(exports.AdEvents.AD_PROGRESSION, GoogleAdEvent.complete);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.onContentResumeRequested();
                    break;
            }
        };
        Ima3$$1.prototype.onAdError = function (error) {
            console.log('gneric ad error', error);
            if (null !== this.adsManager) {
                this.adsManager.destroy();
                if (null !== this.resizeListener) {
                    window.removeEventListener('resize', this.resizeListener);
                }
            }
            if (this.adRequested) {
                this.adRequested = false;
            }
            // We silently ignore adLoader errors, it just means there is no ad available
            this.onContentResumeRequested();
        };
        /**
         * When the ad starts playing, and the game should be paused
         */
        Ima3$$1.prototype.onContentPauseRequested = function () {
            console.log('onContentPauseRequested', arguments);
            this.adManager.emit(exports.AdEvents.CONTENT_PAUSED);
        };
        /**
         * When the ad is finished and the game should be resumed
         */
        Ima3$$1.prototype.onContentResumeRequested = function () {
            console.log('onContentResumeRequested', arguments);
            if (typeof google === 'undefined') {
                this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
                return;
            }
            this.adContent.style.display = 'none';
            this.adManager.emit(exports.AdEvents.CONTENT_RESUMED);
        };
        Ima3$$1.prototype.parseCustomParams = function (customParams) {
            if (undefined !== customParams) {
                var customDataString = '';
                for (var key in customParams) {
                    if (customParams.hasOwnProperty(key)) {
                        if (customDataString.length > 0) {
                            customDataString += '' + '&';
                        }
                        var param = Array.isArray(customParams[key])
                            ? customParams[key].join(',')
                            : customParams[key];
                        customDataString += key + '=' + param;
                    }
                }
                return '&cust_params=' + encodeURIComponent(customDataString);
            }
            return '';
        };
        /**
         * Checks if the ads are enabled (e.g; adblock is enabled or not)
         * @returns {boolean}
         */
        Ima3$$1.prototype.areAdsEnabled = function () {
            var _this = this;
            var test = document.createElement('div');
            test.innerHTML = '&nbsp;';
            test.className = 'adsbox';
            test.style.position = 'absolute';
            test.style.fontSize = '10px';
            document.body.appendChild(test);
            // let adsEnabled: boolean;
            var isEnabled = function () {
                var enabled = true;
                if (test.offsetHeight === 0) {
                    enabled = false;
                }
                if (test.parentNode) {
                    test.parentNode.removeChild(test);
                }
                return enabled;
            };
            window.setTimeout(function () {
                _this.adsEnabled = isEnabled();
            }, 100);
        };
        return Ima3$$1;
    }());

    (function (AdEvents) {
        AdEvents["CONTENT_PAUSED"] = "onContentPaused";
        AdEvents["CONTENT_RESUMED"] = "onContentResumed";
        AdEvents["AD_PROGRESSION"] = "onAdProgression";
        AdEvents["AD_DISABLED"] = "onAdsDisabled";
        AdEvents["AD_CLICKED"] = "onAdClicked";
        AdEvents["AD_REWARDED"] = "onAdRewardGranted";
        AdEvents["BANNER_SHOWN"] = "onBannerShown";
        AdEvents["BANNER_HIDDEN"] = "onBannerHidden";
        AdEvents["AD_LOADED"] = "onAdLoaded";
        AdEvents["AD_PROVIDER_LOADED"] = "onAdProviderLoaded";
    })(exports.AdEvents || (exports.AdEvents = {}));
    (function (AdType) {
        AdType[AdType["interstitial"] = 0] = "interstitial";
        AdType[AdType["rewarded"] = 1] = "rewarded";
        AdType[AdType["banner"] = 2] = "banner";
    })(exports.AdType || (exports.AdType = {}));
    var H5AdWrapper = /** @class */ (function (_super) {
        __extends(H5AdWrapper, _super);
        function H5AdWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bannerActive = false;
            _this.provider = null;
            return _this;
        }
        /**
         * Here we set an adprovider, any can be given as long as it implements the IProvider interface
         *
         * @param provider
         */
        H5AdWrapper.prototype.setAdProvider = function (provider) {
            this.provider = provider;
            this.provider.setManager(this);
        };
        /**
         * Here we request an ad, the arguments passed depend on the provider used!
         * @param adType
         * @param args
         */
        H5AdWrapper.prototype.showAd = function (adType) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (null === this.provider) {
                throw new Error('Can not request an ad without an provider, please attach an ad provider!');
            }
            args.unshift(adType);
            this.provider.showAd.apply(this.provider, args);
        };
        H5AdWrapper.prototype.createBanner = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.provider.loadBanner.apply(this.provider, args);
        };
        H5AdWrapper.prototype.loadBanner = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof this.provider.loadBanner === 'function') {
                return this.provider.loadBanner.apply(this.provider, args);
            }
            return null;
        };
        /**
         * Some providers might require you to preload an ad before showing it, that can be done here
         *
         * @param adType
         * @param args
         */
        H5AdWrapper.prototype.preloadAd = function (adType) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (null === this.provider) {
                throw new Error('Can not preload an ad without an provider, please attach an ad provider!');
            }
            args.unshift(adType);
            this.provider.preloadAd.apply(this.provider, args);
        };
        /**
         * Some providers require you to destroy an add after it was shown, that can be done here.
         *
         * @param adType
         * @param args
         */
        H5AdWrapper.prototype.destroyAd = function (adType) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (null === this.provider) {
                throw new Error('Can not destroy an ad without an provider, please attach an ad provider!');
            }
            args.unshift(adType);
            this.provider.destroyAd.apply(this.provider, args);
        };
        /**
         * Some providers allow you to hide an ad, you might think of an banner ad that is shown in show cases
         *
         * @param adType
         * @param args
         */
        H5AdWrapper.prototype.hideAd = function (adType) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (null === this.provider) {
                throw new Error('Can not hide an ad without an provider, please attach an ad provider!');
            }
            args.unshift(adType);
            this.provider.hideAd.apply(this.provider, args);
        };
        /**
         * Checks if ads are enabled or blocked
         */
        H5AdWrapper.prototype.adsEnabled = function () {
            if (null === this.provider) {
                throw new Error('Can not hide an ad without an provider, please attach an ad provider!');
            }
            return this.provider.adsEnabled;
        };
        /**
         * Checks if ads are enabled or blocked
         *
         * @param adType
         * @param args
         */
        H5AdWrapper.prototype.adAvailable = function (adType) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (null === this.provider) {
                throw new Error('Can not hide an ad without an provider, please attach an ad provider!');
            }
            args.unshift(adType);
            return this.provider.adAvailable.apply(this.provider, args);
        };
        return H5AdWrapper;
    }(eventemitter3));
    var adWrapper = new H5AdWrapper();

    exports.H5AdWrapper = H5AdWrapper;
    exports.adWrapper = adWrapper;
    exports.CocoonAds = CocoonAds$$1;
    exports.CordovaGamedistribution = CordovaGamedistribution$$1;
    exports.CordovaGamedock = CordovaGamedock$$1;
    exports.CordovaHeyzap = CordovaHeyzap$$1;
    exports.CordovaIronSource = CordovaIronSource$$1;
    exports.GameDistribution = GameDistribution$$1;
    exports.GameDistributionBanner = GameDistributionBanner$$1;
    exports.Ima3 = Ima3$$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=h5-ad-wrapper.umd.js.map
