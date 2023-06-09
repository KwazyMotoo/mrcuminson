var __extends = this && this.__extends || function(k, a) {
        function m() {
            this.constructor = k
        }
        for (var n in a) a.hasOwnProperty(n) && (k[n] = a[n]);
        k.prototype = null === a ? Object.create(a) : (m.prototype = a.prototype, new m)
    },
    Photon;
(function(k) {
    k.ConnectionProtocol = {
        Ws: 0,
        Wss: 1
    };
    var a = function() {
        function a(n, b, h) {
            void 0 === b && (b = "");
            void 0 === h && (h = "");
            this.url = n;
            this.subprotocol = b;
            this.keepAliveTimeoutMs = 3E3;
            this._frame = "~m~";
            this._isClosing = this._isConnected = this._isConnecting = !1;
            this._peerStatusListeners = {};
            this._eventListeners = {};
            this._responseListeners = {};
            this.keepAliveTimer = 0;
            this._logger = new Exitgames.Common.Logger(h && "" != h ? h + ":" : "")
        }
        a.prototype.isConnecting = function() {
            return this._isConnecting
        };
        a.prototype.isConnected =
            function() {
                return this._isConnected
            };
        a.prototype.isClosing = function() {
            return this._isClosing
        };
        a.prototype.connect = function() {
            var a = this;
            this._sessionid = void 0;
            this._socket = "" == this.subprotocol ? new WebSocket(this.url, "Json") : new WebSocket(this.url, this.subprotocol);
            this._onConnecting();
            this._socket.onopen = function(a) {};
            this._socket.onmessage = function(b) {
                b = a._decode(b.data);
                a._onMessage(b.toString())
            };
            this._socket.onclose = function(b) {
                a._logger.debug("onclose: wasClean =", b.wasClean, ", code=", b.code,
                    ", reason =", b.reason);
                a._isConnecting ? a._onConnectFailed(b) : (1006 == b.code && a._onTimeout(), a._onDisconnect())
            };
            this._socket.onerror = function(b) {
                a._onError(b)
            }
        };
        a.prototype.disconnect = function() {
            this._isClosing = !0;
            this._socket.close()
        };
        a.prototype.sendOperation = function(a, b, h, g) {
            a = {
                req: a,
                vals: []
            };
            if (Exitgames.Common.Util.isArray(b)) a.vals = b;
            else if (void 0 === b) a.vals = [];
            else throw Error(this._logger.format("PhotonPeer[sendOperation] - Trying to send non array data:", b));
            this._send(a);
            this._logger.debug("PhotonPeer[sendOperation] - Sending request:",
                a)
        };
        a.prototype.addPeerStatusListener = function(a, b) {
            this._addListener(this._peerStatusListeners, a, b)
        };
        a.prototype.addEventListener = function(a, b) {
            this._addListener(this._eventListeners, a.toString(), b)
        };
        a.prototype.addResponseListener = function(a, b) {
            this._addListener(this._responseListeners, a.toString(), b)
        };
        a.prototype.removePeerStatusListener = function(a, b) {
            this._removeListener(this._peerStatusListeners, a, b)
        };
        a.prototype.removeEventListener = function(a, b) {
            this._removeListener(this._eventListeners, a.toString(),
                b)
        };
        a.prototype.removeResponseListener = function(a, b) {
            this._removeListener(this._responseListeners, a.toString(), b)
        };
        a.prototype.removePeerStatusListenersForCode = function(a) {
            this._removeListenersForCode(this._peerStatusListeners, a)
        };
        a.prototype.removeEventListenersForCode = function(a) {
            this._removeListenersForCode(this._eventListeners, a.toString())
        };
        a.prototype.removeResponseListenersForCode = function(a) {
            this._removeListenersForCode(this._responseListeners, a.toString())
        };
        a.prototype.setLogLevel = function(a) {
            this._logger.setLevel(a)
        };
        a.prototype.onUnhandledEvent = function(a, b) {
            this._logger.warn("PhotonPeer: No handler for event", a, "registered.")
        };
        a.prototype.onUnhandledResponse = function(a, b) {
            this._logger.warn("PhotonPeer: No handler for response", a, "registered.")
        };
        a.prototype._dispatchEvent = function(a, b) {
            if (!this._dispatch(this._eventListeners, a.toString(), b, "event")) this.onUnhandledEvent(a, b)
        };
        a.prototype._dispatchResponse = function(a, b) {
            if (!this._dispatch(this._responseListeners, a.toString(), b, "response")) this.onUnhandledResponse(a,
                b)
        };
        a.prototype._stringify = function(a) {
            if ("[object Object]" == Object.prototype.toString.call(a)) {
                if (!JSON) throw Error("PhotonPeer[_stringify] - Trying to encode as JSON, but JSON.stringify is missing.");
                return "~j~" + JSON.stringify(a)
            }
            return String(a)
        };
        a.prototype._encode = function(a) {
            var b = "",
                h;
            a = Exitgames.Common.Util.isArray(a) ? a : [a];
            for (var g = 0, l = a.length; g < l; g++) h = null === a[g] || void 0 === a[g] ? "" : this._stringify(a[g]), b += this._frame + h.length + this._frame + h;
            return b
        };
        a.prototype._decode = function(a) {
            var b = [],
                h, g;
            h = a; - 1 !== a.indexOf("\x00") && (h = a.replace(/[\0]/g, ""));
            a = h;
            do {
                if (a.substr(0, 3) !== this._frame) break;
                a = a.substr(3);
                h = "";
                for (var l = 0, k = a.length; l < k; l++)
                    if (g = Number(a.substr(l, 1)), a.substr(l, 1) == g) h += g;
                    else {
                        a = a.substr(h.length + this._frame.length);
                        h = Number(h);
                        break
                    } b.push(a.substr(0, h));
                a = a.substr(h)
            } while ("" !== a);
            return b
        };
        a.prototype._onMessage = function(a) {
            "~j~" == a.substr(0, 3) ? this._onMessageReceived(JSON.parse(a.substr(3))) : this._sessionid ? this._onMessageReceived(a) : (this._sessionid = a, this._onConnect())
        };
        a.prototype.resetKeepAlive = function() {
            var a = this;
            clearTimeout(this.keepAliveTimer);
            1E3 <= this.keepAliveTimeoutMs && (this.keepAliveTimer = setTimeout(function() {
                return a._send({
                    irq: 1,
                    vals: [1, Date.now()]
                }, !0)
            }, this.keepAliveTimeoutMs))
        };
        a.prototype._send = function(a, b) {
            void 0 === b && (b = !1);
            var h = this._encode(a);
            if (this._isConnected && !this._isClosing) this.resetKeepAlive(), this._socket.send(h);
        };
        a.prototype._onMessageReceived = function(a) {
            if ("object" === typeof a)
                if (this._logger.debug("PhotonPeer[_onMessageReceived] - Socket received message:", a), a.vals = void 0 !== a.vals ? a.vals : [], 0 < a.vals.length && (a.vals = this._parseMessageValuesArrayToJSON(a.vals)), void 0 !== a.res) {
                    var b = parseInt(a.res);
                    this._parseResponse(b, a)
                } else if (void 0 !== a.evt) b = parseInt(a.evt), this._parseEvent(b, a);
            else if (void 0 !== a.irs) b = parseInt(a.irs), this._parseInternalResponse(b, a);
            else throw Error(this._logger.format("PhotonPeer[_onMessageReceived] - Received undefined message type:",
                a));
        };
        a.prototype._parseMessageValuesArrayToJSON = function(a) {
            var b = {};
            if (Exitgames.Common.Util.isArray(a))
                if (0 == a.length % 2)
                    for (var h, g; 0 < a.length;) h = a.shift() + "", g = a.shift(), b[h] = g;
                else throw Error(this._logger.format("PhotonPeer[_parseMessageValuesToJSON] - Received invalid values array:", a));
            return b
        };
        a.prototype._parseEvent = function(a, b) {
            switch (a) {
                default:
                    this._dispatchEvent(a, {
                        vals: b.vals
                    })
            }
        };
        a.prototype._parseResponse = function(a, b) {
            switch (a) {
                default:
                    this._dispatchResponse(a, {
                        errCode: b.err,
                        errMsg: b.msg,
                        vals: b.vals
                    })
            }
        };
        a.prototype._parseInternalResponse = function(a, b) {
            this._logger.debug("internal response:", b)
        };
        a.prototype._onConnecting = function() {
            this._logger.debug("PhotonPeer[_onConnecting] - Starts connecting", this.url, '..., raising "connecting" event ...');
            this._isConnecting = !0;
            this._dispatchPeerStatus(a.StatusCodes.connecting);
            this.resetKeepAlive()
        };
        a.prototype._onConnect = function() {
            this._logger.debug('PhotonPeer[_onConnect] - Connected successfully! Raising "connect" event ...');
            this._isConnecting = !1;
            this._isConnected = !0;
            this._dispatchPeerStatus(a.StatusCodes.connect);
            this.resetKeepAlive()
        };
        a.prototype._onConnectFailed = function(n) {
            this._logger.error("PhotonPeer[_onConnectFailed] - Socket connection could not be created:", this.url, this.subprotocol, 'Wrong host or port?\n Raising "connectFailed event ...');
            this._isConnecting = this._isConnected = !1;
            this._dispatchPeerStatus(a.StatusCodes.connectFailed)
        };
        a.prototype._onDisconnect = function() {
            var n = this._isConnected,
                b = this._isClosing;
            this._logger.debug('PhotonPeer[_onDisconnect] - Socket closed, raising "disconnect" event ...');
            this._isClosing = this._isConnected = this._isConnecting = !1;
            n && (b ? this._dispatchPeerStatus(a.StatusCodes.disconnect) : this._dispatchPeerStatus(a.StatusCodes.connectClosed))
        };
        a.prototype._onTimeout = function() {
            this._logger.debug('PhotonPeer[_onTimeout] - Client timed out! Raising "timeout" event ...');
            this._dispatchPeerStatus(a.StatusCodes.timeout)
        };
        a.prototype._onError = function(n) {
            this._logger.error("PhotonPeer[_onError] - Connection error:", n);
            this._isConnecting = this._isConnected = this._isClosing = !1;
            this._dispatchPeerStatus(a.StatusCodes.error)
        };
        a.prototype._addListener = function(a, b, h) {
            b in a || (a[b] = []);
            h && "function" === typeof h ? (this._logger.debug("PhotonPeer[_addListener] - Adding listener for event", b), a[b].push(h)) : this._logger.error("PhotonPeer[_addListener] - Listener", b, "is not a function but of type", typeof h, ". No listener added!");
            return this
        };
        a.prototype._dispatch = function(a, b, h, g) {
            if (b in a) {
                a = a[b];
                b = 0;
                for (g = a.length; b < g; b++) Exitgames.Common.Util.isArray(h) || (h = [h]), a[b].apply(this, void 0 === h ? [] : h);
                return !0
            }
            return !1
        };
        a.prototype._dispatchPeerStatus =
            function(a) {
                this._dispatch(this._peerStatusListeners, a, void 0, "peerStatus") || this._logger.warn("PhotonPeer[_dispatchPeerStatus] - No handler for ", a, "registered.")
            };
        a.prototype._removeListener = function(a, b, h) {
            if (b in a) {
                var g = a[b].length;
                a[b] = a[b].filter(function(a) {
                    return a != h
                });
                this._logger.debug("PhotonPeer[_removeListener] - Removing listener for event", b, "removed:", g - a[b].length)
            }
            return this
        };
        a.prototype._removeListenersForCode = function(a, b) {
            this._logger.debug("PhotonPeer[_removeListenersForCode] - Removing all listeners for event",
                b);
            b in a && (a[b] = []);
            return this
        };
        a.StatusCodes = {
            connecting: "connecting",
            connect: "connect",
            connectFailed: "connectFailed",
            disconnect: "disconnect",
            connectClosed: "connectClosed",
            error: "error",
            timeout: "timeout"
        };
        return a
    }();
    k.PhotonPeer = a
})(Photon || (Photon = {}));
var Exitgames;
(function(k) {
    (function(a) {
        var k = function() {
            function a(b, h) {
                void 0 === b && (b = "");
                void 0 === h && (h = a.Level.INFO);
                this.prefix = b;
                this.level = h
            }
            a.prototype.setLevel = function(b) {
                b = Math.max(b, a.Level.DEBUG);
                this.level = b = Math.min(b, a.Level.OFF)
            };
            a.prototype.isLevelEnabled = function(a) {
                return a >= this.level
            };
            a.prototype.getLevel = function() {
                return this.level
            };
            a.prototype.debug = function(b) {
                for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
                this.log(a.Level.DEBUG, b, h)
            };
            a.prototype.info = function(b) {
                for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
                this.log(a.Level.INFO, b, h)
            };
            a.prototype.warn = function(b) {
                for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
                this.log(a.Level.WARN, b, h)
            };
            a.prototype.error = function(b) {
                for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
                this.log(a.Level.ERROR, b, h)
            };
            a.prototype.format = function(a) {
                for (var h = [], g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
                return this.format0(a, h)
            };
            a.prototype.formatArr = function(a, h) {
                return this.format0(a, h)
            };
            a.prototype.log =
                function(b, h, g) {
                    if (b >= this.level && "undefined" !== typeof console && void 0 !== h) try {
                        var l = console[a.log_types[b]];
                        l || (l = console.log);
                        l && (l.call ? l.call(console, this.format0(h, g)) : l(console, this.format0(h, g)))
                    } catch (k) {}
                };
            a.prototype.format0 = function(a, h) {
                return ("" == this.prefix ? "" : this.prefix + " ") + a + " " + h.map(function(a) {
                    if (void 0 !== a) switch (typeof a) {
                        case "object":
                            try {
                                return JSON.stringify(a)
                            } catch (h) {
                                return a.toString() + "(" + h + ")"
                            }
                            default:
                                return a.toString()
                    }
                }).join(" ")
            };
            a.Level = {
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                OFF: 6
            };
            a.log_types = ["debug", "debug", "info", "warn", "error"];
            return a
        }();
        a.Logger = k;
        k = function() {
            function a() {}
            a.indexOf = function(a, h, g) {
                var l = a.length;
                for (g = 0 > g ? Math.max(0, l + g) : g || 0; g < l; g++)
                    if (a[g] === h) return g;
                return -1
            };
            a.isArray = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
            a.merge = function(a, h) {
                for (var g in h) h.hasOwnProperty(g) && (a[g] = h[g])
            };
            a.getPropertyOrElse = function(a, h, g) {
                return a.hasOwnProperty(h) ? a[h] : g
            };
            a.enumValueToName = function(a, h) {
                for (var g in a)
                    if (h ==
                        a[g]) return g;
                return "undefined"
            };
            a.getEnumKeyByValue = function(a, h) {
                for (var g in a)
                    if (h == a[g]) return g
            };
            return a
        }();
        a.Util = k
    })(k.Common || (k.Common = {}))
})(Exitgames || (Exitgames = {}));
(function(k) {
    k = k.Lite || (k.Lite = {});
    k = k.Constants || (k.Constants = {});
    k.LiteOpKey = {
        ActorList: 252,
        ActorNr: 254,
        ActorProperties: 249,
        Add: 238,
        Broadcast: 250,
        Cache: 247,
        Code: 244,
        Data: 245,
        GameId: 255,
        GameProperties: 248,
        Group: 240,
        Properties: 251,
        ReceiverGroup: 246,
        Remove: 239,
        TargetActorNr: 253,
        EmptyRoomLiveTime: 236
    };
    k.LiteEventCode = {
        Join: 255,
        Leave: 254,
        PropertiesChanged: 253
    };
    k.LiteOpCode = {
        ChangeGroups: 248,
        GetProperties: 251,
        Join: 255,
        Leave: 254,
        RaiseEvent: 253,
        SetProperties: 252
    }
})(Photon || (Photon = {}));
(function(k) {
    (function(a) {
        var m = function(m) {
            function b(a, g) {
                var b = this;
                void 0 === g && (g = "");
                m.call(this, a, g);
                this.isJoined = !1;
                this.roomName = "";
                this.room = {
                    properties: {}
                };
                this.actors = {};
                this._myActor = {
                    photonId: 0,
                    properties: {}
                };
                this.addPeerStatusListener(k.PhotonPeer.StatusCodes.disconnect, function() {
                    b.isJoined = !1
                })
            }
            __extends(b, m);
            b.prototype.myActor = function() {
                return this._myActor
            };
            b.prototype.join = function(h, g, b, k) {
                if (void 0 !== h && this.isConnected() && !this.isJoined) {
                    this._logger.info("PhotonPeer.Lite[join] - Joining roomName:",
                        h);
                    this._logger.debug("PhotonPeer.Lite[join] - actorProperties:", b, ", roomProperties:", g, ", broadcast:", k);
                    var p = [];
                    p.push(a.Constants.LiteOpKey.GameId);
                    p.push(h + "");
                    "object" === typeof g && (p.push(a.Constants.LiteOpKey.GameProperties), p.push(g));
                    "object" === typeof b && (p.push(a.Constants.LiteOpKey.ActorProperties), p.push(b));
                    p.push(a.Constants.LiteOpKey.Broadcast);
                    p.push(k || !1);
                    this.sendOperation(a.Constants.LiteOpCode.Join, p)
                } else {
                    if (void 0 === h) throw Error("PhotonPeer.Lite[join] - Trying to join with undefined roomName!");
                    if (this.isJoined) throw Error("PhotonPeer.Lite[join] - you have already joined!");
                    throw Error("PhotonPeer.Lite[join] - Not connected!");
                }
            };
            b.prototype.leave = function() {
                if (this.isJoined) this._logger.debug("PhotonPeer.Lite[leave] - Leaving ..."), this.sendOperation(a.Constants.LiteOpCode.Leave);
                else throw Error("PhotonPeer.Lite[leave] - Not joined!");
            };
            b.prototype.raiseEvent = function(h, g) {
                if (this.isJoined)
                    if (void 0 !== g) this._logger.debug("PhotonPeer.Lite[raiseEvent] - Event", h, ":", g), this.sendOperation(a.Constants.LiteOpCode.RaiseEvent,
                        [a.Constants.LiteOpKey.Code, h, a.Constants.LiteOpKey.Data, g]);
                    else throw Error(this._logger.format("PhotonPeer.Lite[raiseEvent] - Event", h, "- data not passed in as object!"));
                else throw Error("PhotonPeer.Lite[raiseEvent] - Not joined!");
            };
            b.prototype.setActorProperties = function(h, g, b) {
                if (this.isJoined) this._logger.debug("PhotonPeer.Lite[setActorProperties] - actorNumber:" + h + ", broadcast:" + b + ", data:", g), this.sendOperation(a.Constants.LiteOpCode.SetProperties, [a.Constants.LiteOpKey.Broadcast, b, a.Constants.LiteOpKey.Properties,
                    g, a.Constants.LiteOpKey.ActorNr, h
                ]);
                else throw Error("PhotonPeer.Lite[setActorProperties] - Not joined!");
            };
            b.prototype.getActorProperties = function(h, g) {
                if (this.isJoined) {
                    var b = [];
                    b.push(a.Constants.LiteOpKey.ActorProperties);
                    void 0 !== h && Exitgames.Common.Util.isArray(h) && 0 < h.length && b.push(h);
                    2 !== b.length && b.push(null);
                    b.push(a.Constants.LiteOpKey.ActorList);
                    void 0 !== g && Exitgames.Common.Util.isArray(g) && 0 < g.length && b.push(g);
                    4 !== b.length && b.push(null);
                    b.push(a.Constants.LiteOpKey.Properties);
                    b.push(2);
                    this._logger.debug("PhotonPeer.Lite[getActorProperties] -", b);
                    this.sendOperation(a.Constants.LiteOpCode.GetProperties, b)
                } else throw Error("PhotonPeer.Lite[getProperties] - Not joined!");
            };
            b.prototype.setRoomProperties = function(h, g) {
                if (this.isJoined) this._logger.debug("PhotonPeer.Lite[setRoomProperties] - broadcast:" + g + ", data:", h), this.sendOperation(a.Constants.LiteOpCode.SetProperties, [a.Constants.LiteOpKey.Broadcast, g, a.Constants.LiteOpKey.Properties, h]);
                else throw Error("PhotonPeer.Lite[setRoomProperties] - Not joined!");
            };
            b.prototype.getRoomProperties = function(h) {
                if (this.isJoined) {
                    var g = [];
                    g.push(a.Constants.LiteOpKey.GameProperties);
                    void 0 !== h ? Exitgames.Common.Util.isArray(h) && 0 < h.length && g.push(h) : g.push(null);
                    this._logger.debug("PhotonPeer.Lite[getRoomProperties] -", g);
                    this.sendOperation(a.Constants.LiteOpCode.GetProperties, g)
                } else throw Error("PhotonPeer.Lite[getRoomProperties] - Not joined!");
            };
            b.prototype._addActor = function(a) {
                this.actors[a] = {
                    photonId: a
                };
                this._logger.debug("PhotonPeer.Lite[_addActor] - Added actorNr",
                    a, "actors known are now ", this.actors);
                return this.actors[a]
            };
            b.prototype._removeActor = function(a) {
                delete this.actors[a];
                this._logger.debug("PhotonPeer.Lite[_removeActor] - Removed actorNr", a, ", actors known are now", this.actors);
                return this
            };
            b.prototype.actorNrFromVals = function(a) {
                a = a[k.Lite.Constants.LiteOpKey.ActorNr];
                return void 0 !== a ? parseInt(a) : -1
            };
            b.prototype._parseEvent = function(b, g) {
                var l = this.actorNrFromVals(g.vals);
                switch (b) {
                    case a.Constants.LiteEventCode.Join:
                        this._onEventJoin(g, l);
                        break;
                    case a.Constants.LiteEventCode.Leave:
                        this._onEventLeave(l);
                        break;
                    case a.Constants.LiteEventCode.PropertiesChanged:
                        this._onEventSetProperties(g, l);
                        break;
                    default:
                        this._logger.info("PhotonPeer.Lite[_parseEvent] - Unknown event code", b, "with JSON:", g), this._dispatchEvent(b, {
                            vals: g.vals,
                            actorNr: l
                        })
                }
            };
            b.prototype._onEventJoin = function(b, g) {
                if (g !== this._myActor.photonId) this._logger.debug("PhotonPeer.Lite[_onEventJoin] - ActorNr", g, "joined."), this._addActor(g), this._dispatchEvent(a.Constants.LiteEventCode.Join, {
                    newActors: [g]
                });
                else {
                    var l = b.vals[a.Constants.LiteOpKey.ActorList],
                        k = [],
                        p;
                    for (p in l) g = parseInt(l[p]), g !== this._myActor.photonId && void 0 === this.actors[g] && (this._logger.debug("PhotonPeer.Lite[_onEventJoin] - ActorNr", g, "registered as already joined"), this._addActor(g), k.push(g));
                    this._dispatchEvent(a.Constants.LiteEventCode.Join, {
                        newActors: k
                    })
                }
            };
            b.prototype._onEventLeave = function(b) {
                this._logger.debug("PhotonPeer.Lite[_onEventLeave] - ActorNr", b, "left");
                this._removeActor(b);
                this._dispatchEvent(a.Constants.LiteEventCode.Leave, {
                    actorNr: b
                })
            };
            b.prototype._onEventSetProperties = function(a, b) {};
            b.prototype._parseResponse = function(b, g) {
                var l = this.actorNrFromVals(g.vals);
                switch (b) {
                    case a.Constants.LiteOpCode.Join:
                        this._onResponseJoin(l);
                        break;
                    case a.Constants.LiteOpCode.Leave:
                        this._onResponseLeave(l);
                        break;
                    case a.Constants.LiteOpCode.RaiseEvent:
                        break;
                    case a.Constants.LiteOpCode.GetProperties:
                        this._onResponseGetProperties(g);
                        break;
                    case a.Constants.LiteOpCode.SetProperties:
                        this._onResponseSetProperties(g, l);
                        break;
                    default:
                        this._logger.debug("PhotonPeer.Lite[_parseResponse] - Unknown response code",
                            b, g, "actorNr", l), this._dispatchResponse(b, {
                            errCode: g.err,
                            errMsg: g.msg,
                            vals: g.vals,
                            actorNr: l
                        })
                }
            };
            b.prototype._onResponseGetProperties = function(b) {
                this._logger.debug("PhotonPeer.Lite[_onResponseGetProperties] - getProperties response:", b);
                if (void 0 !== b.vals[a.Constants.LiteOpKey.ActorProperties]) {
                    var g = b.vals[a.Constants.LiteOpKey.ActorProperties],
                        l;
                    for (l in g) this.actors[l].properties = g[l]
                }
                void 0 !== b.vals[a.Constants.LiteOpKey.GameProperties] && (this.room.properties = b.vals[a.Constants.LiteOpKey.GameProperties]);
                this._dispatchResponse(a.Constants.LiteOpCode.GetProperties, {
                    vals: b.vals
                })
            };
            b.prototype._onResponseJoin = function(b) {
                this.isJoined = !0;
                "object" === typeof this._myActor && (this._myActor = this._addActor(b), this._logger.debug("PhotonPeer.Lite[_onResponseJoin] - You joined as actor number / myActor.photonId has been set to:", this._myActor.photonId));
                this._dispatchResponse(a.Constants.LiteOpCode.Join, {
                    actorNr: b
                })
            };
            b.prototype._onResponseLeave = function(b) {
                this.isJoined = !1;
                this._removeActor(this._myActor.photonId);
                this._logger.debug("PhotonPeer.Lite[_onResponseLeave] - You left the room", this.roomName);
                this.roomName = "";
                this.room = {
                    properties: {}
                };
                this._dispatchResponse(a.Constants.LiteOpCode.Leave, {
                    actorNr: b
                })
            };
            b.prototype._onResponseSetProperties = function(b, g) {
                this._logger.debug("PhotonPeer.Lite[_onResponseSetProperties] - setProperties response:", b, "actorNr", g);
                this._dispatchResponse(a.Constants.LiteOpCode.SetProperties, {
                    vals: b.vals,
                    actorNr: g
                })
            };
            return b
        }(k.PhotonPeer);
        a.LitePeer = m
    })(k.Lite || (k.Lite = {}))
})(Photon ||
    (Photon = {}));
(function(k) {
    var a = k.LoadBalancing || (k.LoadBalancing = {}),
        a = a.Constants || (a.Constants = {}),
        m = k.Lite.Constants.LiteOpKey,
        n = k.Lite.Constants.LiteOpCode;
    k = k.Lite.Constants.LiteEventCode;
    a.ErrorCode = {
        Ok: 0,
        OperationNotAllowedInCurrentState: -3,
        InvalidOperationCode: -2,
        InternalServerError: -1,
        InvalidAuthentication: 32767,
        GameIdAlreadyExists: 32766,
        GameFull: 32765,
        GameClosed: 32764,
        NoRandomMatchFound: 32760,
        GameDoesNotExist: 32758,
        MaxCcuReached: 32757,
        InvalidRegion: 32756
    };
    a.ActorProperties = {
        PlayerName: 255
    };
    a.GameProperties = {
        MaxPlayers: 255,
        IsVisible: 254,
        IsOpen: 253,
        PlayerCount: 252,
        Removed: 251,
        PropsListedInLobby: 250,
        CleanupCacheOnLeave: 249,
        MasterClientId: 248
    };
    a.EventCode = {
        GameList: 230,
        GameListUpdate: 229,
        QueueState: 228,
        AppStats: 226,
        AzureNodeInfo: 210,
        Join: k.Join,
        Leave: k.Leave,
        PropertiesChanged: k.PropertiesChanged,
        Disconnect: 252,
        LobbyStats: 224
    };
    a.ParameterCode = {
        Address: 230,
        PeerCount: 229,
        GameCount: 228,
        MasterPeerCount: 227,
        UserId: 225,
        ApplicationId: 224,
        Position: 223,
        MatchMakingType: 223,
        GameList: 222,
        Secret: 221,
        AppVersion: 220,
        AzureNodeInfo: 210,
        AzureLocalNodeId: 209,
        AzureMasterNodeId: 208,
        RoomName: m.GameId,
        Broadcast: m.Broadcast,
        ActorList: m.ActorList,
        ActorNr: m.ActorNr,
        PlayerProperties: m.ActorProperties,
        CustomEventContent: m.Data,
        Data: m.Data,
        Code: m.Code,
        GameProperties: m.GameProperties,
        Properties: m.Properties,
        TargetActorNr: m.TargetActorNr,
        ReceiverGroup: m.ReceiverGroup,
        Cache: m.Cache,
        CleanupCacheOnLeave: 241,
        Group: m.Group,
        Remove: m.Remove,
        Add: m.Add,
        EmptyRoomTTL: m.EmptyRoomLiveTime,
        PlayerTTL: 235,
        ClientAuthenticationType: 217,
        ClientAuthenticationParams: 216,
        ClientAuthenticationData: 214,
        JoinMode: 215,
        MasterClientId: 203,
        FindFriendsRequestList: 1,
        FindFriendsResponseOnlineList: 1,
        FindFriendsResponseRoomIdList: 2,
        LobbyName: 213,
        LobbyType: 212,
        LobbyStats: 211,
        Region: 210,
        IsInactive: 233,
        CheckUserOnJoin: 232,
        ExpectedValues: 231,
        UriPath: 209,
        RpcCallParams: 208,
        RpcCallRetCode: 207,
        RpcCallRetMessage: 206,
        RpcCallRetData: 208,
        Forward: 234,
        Nickname: 202
    };
    a.OperationCode = {
        Authenticate: 230,
        JoinLobby: 229,
        LeaveLobby: 228,
        CreateGame: 227,
        JoinGame: 226,
        JoinRandomGame: 225,
        Leave: n.Leave,
        RaiseEvent: n.RaiseEvent,
        SetProperties: n.SetProperties,
        GetProperties: n.GetProperties,
        ChangeGroups: n.ChangeGroups,
        FindFriends: 222,
        LobbyStats: 221,
        GetRegions: 220,
        Rpc: 219
    };
    a.MatchmakingMode = {
        FillRoom: 0,
        SerialMatching: 1,
        RandomMatching: 2
    };
    a.EventCaching = {
        DoNotCache: 0,
        MergeCache: 1,
        ReplaceCache: 2,
        RemoveCache: 3,
        AddToRoomCache: 4,
        AddToRoomCacheGlobal: 5,
        RemoveFromRoomCache: 6,
        RemoveFromRoomCacheForActorsLeft: 7
    };
    a.ReceiverGroup = {
        Others: 0,
        All: 1,
        MasterClient: 2
    };
    a.CustomAuthenticationType = {
        Custom: 0,
        Steam: 1,
        Facebook: 2,
        None: 255
    };
    a.LobbyType = {
        Default: 0,
        SqlLobby: 2
    }
})(Photon || (Photon = {}));
(function(k) {
    (function(a) {
        function m(a, f) {
            for (var c in n)
                if (0 == a.indexOf(n[c])) return a;
            switch (f) {
                case k.ConnectionProtocol.Ws:
                    return n.ws + a;
                case k.ConnectionProtocol.Wss:
                    return n.wss + a;
                default:
                    return n.ws + a
            }
        }
        var n = {
                ws: "ws://",
                wss: "wss://"
            },
            b = function() {
                function d(a, c, e) {
                    this.name = a;
                    this.actorNr = c;
                    this.isLocal = e;
                    this.customProperties = {};
                    this.suspended = !1
                }
                d.prototype.getRoom = function() {
                    return this.loadBalancingClient.myRoom()
                };
                d.prototype.raiseEvent = function(a, c, e) {
                    this.loadBalancingClient && this.loadBalancingClient.raiseEvent(a,
                        c, e)
                };
                d.prototype.setName = function(a) {
                    this.name = a
                };
                d.prototype.onPropertiesChange = function(a, c) {};
                d.prototype.getCustomProperty = function(a) {
                    return this.customProperties[a]
                };
                d.prototype.getCustomPropertyOrElse = function(a, c) {
                    return Exitgames.Common.Util.getPropertyOrElse(this.customProperties, a, c)
                };
                d.prototype.setCustomProperty = function(a, c, e, d) {
                    void 0 === e && (e = !1);
                    this.customProperties[a] = c;
                    var b = {};
                    b[a] = c;
                    var g;
                    void 0 != d && (g = (h = {}, h[a] = d, h));
                    this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom() &&
                        this.loadBalancingClient._setPropertiesOfActor(this.actorNr, b, e, g);
                    this.onPropertiesChange(b, !0);
                    var h
                };
                d.prototype.setCustomProperties = function(a, c, e) {
                    void 0 === c && (c = !1);
                    var d = {},
                        b;
                    for (b in a) this.customProperties[b] = a[b], d[b] = a[b];
                    this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom() && this.loadBalancingClient._setPropertiesOfActor(this.actorNr, d, c, e);
                    this.onPropertiesChange(d, !0)
                };
                d.prototype.getJoinToken = function() {
                    return this.joinToken
                };
                d.prototype.isSuspended = function() {
                    return this.suspended
                };
                d.prototype._getAllProperties = function() {
                    var f = {};
                    f[a.Constants.ActorProperties.PlayerName] = this.name;
                    for (var c in this.customProperties) f[c] = this.customProperties[c];
                    return f
                };
                d.prototype._setLBC = function(a) {
                    this.loadBalancingClient = a
                };
                d.prototype._updateFromResponse = function(f) {
                    this.actorNr = f[a.Constants.ParameterCode.ActorNr];
                    f = f[a.Constants.ParameterCode.PlayerProperties];
                    if (void 0 !== f) {
                        var c = f[a.Constants.ActorProperties.PlayerName];
                        void 0 !== c && (this.name = c);
                        this._updateCustomProperties(f)
                    }
                };
                d.prototype._updateMyActorFromResponse = function(f) {
                    this.joinToken = (this.actorNr = f[a.Constants.ParameterCode.ActorNr]) ? this.actorNr.toString() : null
                };
                d.prototype._updateCustomProperties = function(a) {
                    for (var c in a) this.customProperties[c] = a[c];
                    this.onPropertiesChange(a, !1)
                };
                d.prototype._setSuspended = function(a) {
                    this.suspended = a
                };
                d._getActorNrFromResponse = function(f) {
                    return f[a.Constants.ParameterCode.ActorNr]
                };
                return d
            }();
        a.Actor = b;
        var h = function() {
            function d(a) {
                this.address = this.name = "";
                this.maxPlayers =
                    0;
                this.isOpen = this.isVisible = !0;
                this.suspendedPlayerLiveTime = this.emptyRoomLiveTime = this.playerCount = 0;
                this.cleanupCacheOnLeave = this.removed = this.uniqueUserId = !1;
                this.masterClientId = 0;
                this._customProperties = {};
                this._propsListedInLobby = [];
                this.name = a
            }
            d.prototype.onPropertiesChange = function(a, c) {};
            d.prototype.getCustomProperty = function(a) {
                return this._customProperties[a]
            };
            d.prototype.getCustomPropertyOrElse = function(a, c) {
                return Exitgames.Common.Util.getPropertyOrElse(this._customProperties, a, c)
            };
            d.prototype._updateFromMasterResponse =
                function(f) {
                    this.address = f[a.Constants.ParameterCode.Address];
                    if (f = f[a.Constants.ParameterCode.RoomName]) this.name = f
                };
            d.prototype._updateFromProps = function(f) {
                if (f) {
                    this.maxPlayers = this.updateIfExists(this.maxPlayers, a.Constants.GameProperties.MaxPlayers, f);
                    this.isVisible = this.updateIfExists(this.isVisible, a.Constants.GameProperties.IsVisible, f);
                    this.isOpen = this.updateIfExists(this.isOpen, a.Constants.GameProperties.IsOpen, f);
                    this.playerCount = this.updateIfExists(this.playerCount, a.Constants.GameProperties.PlayerCount,
                        f);
                    this.removed = this.updateIfExists(this.removed, a.Constants.GameProperties.Removed, f);
                    this._propsListedInLobby = this.updateIfExists(this._propsListedInLobby, a.Constants.GameProperties.PropsListedInLobby, f);
                    this.cleanupCacheOnLeave = this.updateIfExists(this.cleanupCacheOnLeave, a.Constants.GameProperties.CleanupCacheOnLeave, f);
                    this.masterClientId = this.updateIfExists(this.masterClientId, a.Constants.GameProperties.MasterClientId, f);
                    var c = {},
                        e;
                    for (e in f) parseInt(e).toString() != e && this._customProperties[e] !==
                        f[e] && (this._customProperties[e] = f[e], c[e] = f[e]);
                    this.onPropertiesChange(c, !1)
                }
            };
            d.prototype._updateFromEvent = function(f) {
                f && (this.masterClientId = this.updateIfExists(this.masterClientId, a.Constants.ParameterCode.MasterClientId, f))
            };
            d.prototype.updateIfExists = function(a, c, e) {
                return e.hasOwnProperty(c) ? e[c] : a
            };
            return d
        }();
        a.RoomInfo = h;
        var g = function(d) {
            function f(a) {
                d.call(this, a)
            }
            __extends(f, d);
            f.prototype.setCustomProperty = function(a, f, d, b) {
                void 0 === d && (d = !1);
                this._customProperties[a] = f;
                var g = {};
                g[a] = f;
                var h;
                void 0 != b && (h = (l = {}, l[a] = b, l));
                this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom() && this.loadBalancingClient._setPropertiesOfRoom(g, d, h);
                this.onPropertiesChange(g, !0);
                var l
            };
            f.prototype.setCustomProperties = function(a, f, d) {
                void 0 === f && (f = !1);
                var b = {},
                    g;
                for (g in a) this._customProperties[g] = a[g], b[g] = a[g];
                this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom() && this.loadBalancingClient._setPropertiesOfRoom(b, f, d);
                this.onPropertiesChange(b, !0)
            };
            f.prototype.setProp =
                function(a, f) {
                    if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
                        var d = {};
                        d[a] = f;
                        this.loadBalancingClient._setPropertiesOfRoom(d, !1, void 0)
                    }
                };
            f.prototype.setIsVisible = function(f) {
                this.isVisible != f && (this.isVisible = f, this.setProp(a.Constants.GameProperties.IsVisible, f))
            };
            f.prototype.setIsOpen = function(f) {
                this.isOpen != f && (this.isOpen = f, this.setProp(a.Constants.GameProperties.IsOpen, f))
            };
            f.prototype.setMaxPlayers = function(f) {
                this.maxPlayers != f && (this.maxPlayers = f, this.setProp(a.Constants.GameProperties.MaxPlayers,
                    f))
            };
            f.prototype.setEmptyRoomLiveTime = function(a) {
                this.emptyRoomLiveTime = a
            };
            f.prototype.setSuspendedPlayerLiveTime = function(a) {
                this.suspendedPlayerLiveTime = a
            };
            f.prototype.setUniqueUserId = function(a) {
                this.uniqueUserId = a
            };
            f.prototype.setPropsListedInLobby = function(a) {
                this._propsListedInLobby = a
            };
            f.prototype._setLBC = function(a) {
                this.loadBalancingClient = a
            };
            return f
        }(h);
        a.Room = g;
        var l = function() {
            function d(f, c, e) {
                this.appId = c;
                this.appVersion = e;
                this.autoJoinLobby = !0;
                this.connectOptions = {};
                this.createRoomOptions = {};
                this.joinRoomOptions = {};
                this.roomInfos = [];
                this.roomInfosDict = {};
                this.actors = {};
                this.actorsArray = [];
                this.lowestActorId = 0;
                this.userAuthType = a.Constants.CustomAuthenticationType.None;
                this.userAuthData = this.userAuthParameters = "";
                this.lobbyStatsRequestList = [];
                this.state = d.State.Uninitialized;
                this.logger = new Exitgames.Common.Logger("Client:");
                this.validNextState = {};
                if ("number" == typeof f) switch (this.connectionProtocol = f, f) {
                    case k.ConnectionProtocol.Ws:
                        this.masterServerAddress = "ws://app-eu.exitgamescloud.com:9090";
                        this.nameServerAddress = "ws://ns.exitgames.com:9093";
                        break;
                    case k.ConnectionProtocol.Wss:
                        this.masterServerAddress = "wss://app-eu.exitgamescloud.com:19090";
                        this.nameServerAddress = "wss://ns.exitgames.com:19093";
                        break;
                    default:
                        this.nameServerAddress = this.masterServerAddress = "wrong_protocol_error", this.logger.error("Wrong protocol: ", f)
                } else "string" == typeof f ? (this.connectionProtocol = k.ConnectionProtocol.Ws, this.nameServerAddress = this.masterServerAddress = f) : (this.connectionProtocol = k.ConnectionProtocol.Ws,
                    this.nameServerAddress = this.masterServerAddress = "wrong_protocol_type_error", this.logger.error("Wrong protocol type: ", typeof f));
                this.initValidNextState();
                this.currentRoom = this.roomFactoryInternal("");
                this._myActor = this.actorFactoryInternal("", -1, !0);
                this.addActor(this._myActor)
            }
            d.prototype.onStateChange = function(a) {};
            d.prototype.onError = function(a, c) {};
            d.prototype.onOperationResponse = function(a, c, e, d) {};
            d.prototype.onEvent = function(a, c, e) {};
            d.prototype.onRoomList = function(a) {};
            d.prototype.onRoomListUpdate =
                function(a, c, e, d) {};
            d.prototype.onMyRoomPropertiesChange = function() {};
            d.prototype.onActorPropertiesChange = function(a) {};
            d.prototype.onJoinRoom = function(a) {};
            d.prototype.onActorJoin = function(a) {};
            d.prototype.onActorLeave = function(a, c) {};
            d.prototype.onActorSuspend = function(a) {};
            d.prototype.onFindFriendsResult = function(a, c, e) {};
            d.prototype.onLobbyStats = function(a, c, e) {};
            d.prototype.onAppStats = function(a, c, e) {};
            d.prototype.onGetRegionsResult = function(a, c, e) {};
            d.prototype.onWebRpcResult = function(a, c, e,
                d, b) {};
            d.prototype.roomFactory = function(a) {
                return new g(a)
            };
            d.prototype.actorFactory = function(a, c, e) {
                return new b(a, c, e)
            };
            d.prototype.myActor = function() {
                return this._myActor
            };
            d.prototype.myRoom = function() {
                return this.currentRoom
            };
            d.prototype.myRoomActors = function() {
                return this.actors
            };
            d.prototype.myRoomActorCount = function() {
                return this.actorsArray.length
            };
            d.prototype.myRoomActorsArray = function() {
                return this.actorsArray
            };
            d.prototype.myRoomMasterActorNr = function() {
                return this.myRoom().masterClientId ?
                    this.myRoom().masterClientId : this.lowestActorId
            };
            d.prototype.roomFactoryInternal = function(a) {
                void 0 === a && (a = "");
                a = this.roomFactory(a);
                a._setLBC(this);
                return a
            };
            d.prototype.actorFactoryInternal = function(a, c, e) {
                void 0 === a && (a = "");
                void 0 === c && (c = -1);
                void 0 === e && (e = !1);
                a = this.actorFactory(a, c, e);
                a._setLBC(this);
                return a
            };
            d.prototype.setNameServerAddress = function(a) {
                this.nameServerAddress = a
            };
            d.prototype.getNameServerAddress = function() {
                return this.nameServerAddress
            };
            d.prototype.setMasterServerAddress = function(a) {
                this.masterServerAddress =
                    a
            };
            d.prototype.getMasterServerAddress = function() {
                return this.nameServerAddress
            };
            d.prototype.setUserId = function(a) {
                this.userId = a
            };
            d.prototype.getUserId = function() {
                return this.userId
            };
            d.prototype.setCustomAuthentication = function(a, c, e) {
                void 0 === c && (c = k.LoadBalancing.Constants.CustomAuthenticationType.Custom);
                this.userAuthType = c;
                this.userAuthParameters = a;
                this.userAuthData = e
            };
            d.prototype.connect = function(a) {
                "boolean" === typeof a && (a = a ? {
                    keepMasterConnection: !0
                } : {
                    keepMasterConnection: !1
                });
                a || (a = {});
                if (this.checkNextState(d.State.ConnectingToMasterserver,
                        !0)) {
                    this.changeState(d.State.ConnectingToMasterserver);
                    this.logger.info("Connecting to Master", this.masterServerAddress);
                    this.connectOptions = {};
                    for (var c in a) this.connectOptions[c] = a[c];
                    this.masterPeer = new p(this, m(this.masterServerAddress, this.connectionProtocol), "");
                    this.initMasterPeer(this.masterPeer);
                    this.masterPeer.connect();
                    return !0
                }
                return !1
            };
            d.prototype.connectToNameServer = function(a) {
                a || (a = {});
                if (this.checkNextState(d.State.ConnectingToNameServer, !0)) {
                    this.changeState(d.State.ConnectingToNameServer);
                    this.logger.info("Connecting to NameServer", this.nameServerAddress);
                    this.connectOptions = {};
                    for (var c in a) this.connectOptions[c] = a[c];
                    this.nameServerPeer = new r(this, m(this.nameServerAddress, this.connectionProtocol), "");
                    this.initNameServerPeer(this.nameServerPeer);
                    this.nameServerPeer.connect();
                    return !0
                }
                return !1
            };
            d.prototype.fillCreateRoomOptions = function(f, c) {
                c = c || {};
                var e = {};
                void 0 !== c.isVisible && (e[a.Constants.GameProperties.IsVisible] = c.isVisible);
                void 0 !== c.isOpen && (e[a.Constants.GameProperties.IsOpen] =
                    c.isOpen);
                void 0 !== c.maxPlayers && (e[a.Constants.GameProperties.MaxPlayers] = c.maxPlayers);
                void 0 !== c.propsListedInLobby && (e[a.Constants.GameProperties.PropsListedInLobby] = c.propsListedInLobby);
                if (void 0 !== c.customGameProperties)
                    for (var d in c.customGameProperties) e[d] = c.customGameProperties[d];
                f.push(a.Constants.ParameterCode.GameProperties, e);
                f.push(a.Constants.ParameterCode.CleanupCacheOnLeave, !0);
                f.push(a.Constants.ParameterCode.Broadcast, !0);
                void 0 !== c.emptyRoomLiveTime && f.push(a.Constants.ParameterCode.EmptyRoomTTL,
                    c.emptyRoomLiveTime);
                void 0 !== c.suspendedPlayerLiveTime && f.push(a.Constants.ParameterCode.PlayerTTL, c.suspendedPlayerLiveTime);
                void 0 !== c.uniqueUserId && f.push(a.Constants.ParameterCode.CheckUserOnJoin, c.uniqueUserId);
                c.lobbyName && (f.push(a.Constants.ParameterCode.LobbyName), f.push(c.lobbyName), void 0 != c.lobbyType && (f.push(a.Constants.ParameterCode.LobbyType), f.push(c.lobbyType)))
            };
            d.prototype.createRoomFromMy = function(a, c) {
                this.currentRoom.name = a ? a : "";
                c = this.copyCreateOptionsFromMyRoom(c);
                return this.createRoomInternal(this.masterPeer,
                    c)
            };
            d.prototype.copyCreateOptionsFromMyRoom = function(a) {
                a = a || {};
                a.isVisible = this.currentRoom.isVisible;
                a.isOpen = this.currentRoom.isOpen;
                a.maxPlayers = this.currentRoom.maxPlayers;
                a.customGameProperties = this.currentRoom._customProperties;
                a.propsListedInLobby = this.currentRoom._propsListedInLobby;
                a.emptyRoomLiveTime = this.currentRoom.emptyRoomLiveTime;
                a.suspendedPlayerLiveTime = this.currentRoom.suspendedPlayerLiveTime;
                a.uniqueUserId = this.currentRoom.uniqueUserId;
                return a
            };
            d.prototype.createRoom = function(a,
                c) {
                this.currentRoom = this.roomFactoryInternal(a ? a : "");
                return this.createRoomInternal(this.masterPeer, c)
            };
            d.prototype.joinRoom = function(f, c, e) {
                var b = [];
                c && (c.createIfNotExists && (b.push(a.Constants.ParameterCode.JoinMode, d.JoinMode.CreateIfNotExists), this.fillCreateRoomOptions(b, e)), c.joinToken && (b.push(a.Constants.ParameterCode.ActorNr, parseInt(c.joinToken)), b.push(a.Constants.ParameterCode.JoinMode, d.JoinMode.Rejoin)));
                this.currentRoom = this.roomFactoryInternal(f);
                b.push(a.Constants.ParameterCode.RoomName,
                    f);
                this.joinRoomOptions = c || {};
                this.createRoomOptions = e || {};
                this.logger.info("Join Room", f, c, e, "...");
                this.masterPeer.sendOperation(a.Constants.OperationCode.JoinGame, b);
                return !0
            };
            d.prototype.joinRandomRoom = function(f) {
                var c = [];
                if (f) {
                    void 0 != f.matchingType && f.matchingType != a.Constants.MatchmakingMode.FillRoom && (c.push(a.Constants.ParameterCode.MatchMakingType), c.push(f.matchingType));
                    var e = {},
                        d = !1;
                    if (void 0 != f.expectedCustomRoomProperties)
                        for (var b in f.expectedCustomRoomProperties) e[b] = f.expectedCustomRoomProperties[b],
                            d = !0;
                    void 0 != f.expectedMaxPlayers && 0 < f.expectedMaxPlayers && (e[a.Constants.GameProperties.MaxPlayers] = f.expectedMaxPlayers, d = !0);
                    d && (c.push(a.Constants.ParameterCode.GameProperties), c.push(e));
                    f.lobbyName && (c.push(a.Constants.ParameterCode.LobbyName), c.push(f.lobbyName), void 0 != f.lobbyType && (c.push(a.Constants.ParameterCode.LobbyType), c.push(f.lobbyType)));
                    f.sqlLobbyFilter && (c.push(a.Constants.ParameterCode.Data), c.push(f.sqlLobbyFilter))
                }
                this.logger.info("Join Random Room", f && f.lobbyName, f && f.lobbyType,
                    "...");
                this.masterPeer.sendOperation(a.Constants.OperationCode.JoinRandomGame, c);
                return !0
            };
            d.prototype._setPropertiesOfRoom = function(f, c, e) {
                var d = [];
                d.push(a.Constants.ParameterCode.Properties);
                d.push(f);
                d.push(a.Constants.ParameterCode.Broadcast);
                d.push(!0);
                c && (d.push(a.Constants.ParameterCode.Forward), d.push(!0));
                e && (d.push(a.Constants.ParameterCode.ExpectedValues), d.push(e));
                this.gamePeer.sendOperation(a.Constants.OperationCode.SetProperties, d)
            };
            d.prototype._setPropertiesOfActor = function(f, c, e,
                d) {
                var b = [];
                b.push(a.Constants.ParameterCode.ActorNr);
                b.push(f);
                b.push(a.Constants.ParameterCode.Properties);
                b.push(c);
                b.push(a.Constants.ParameterCode.Broadcast);
                b.push(!0);
                e && (b.push(a.Constants.ParameterCode.Forward), b.push(!0));
                d && (b.push(a.Constants.ParameterCode.ExpectedValues), b.push(d));
                this.gamePeer.sendOperation(a.Constants.OperationCode.SetProperties, b)
            };
            d.prototype.disconnect = function() {
                this.nameServerPeer && this.nameServerPeer.disconnect();
                this._cleanupNameServerPeerData();
                this.masterPeer &&
                    this.masterPeer.disconnect();
                this._cleanupMasterPeerData();
                this.gamePeer && this.gamePeer.disconnect();
                this._cleanupGamePeerData();
                this.changeState(d.State.Disconnected)
            };
            d.prototype.suspendRoom = function() {
                this.isJoinedToRoom() && (this.gamePeer && this.gamePeer.disconnect(), this._cleanupGamePeerData(), this.isConnectedToMaster() ? this.changeState(d.State.JoinedLobby) : (this.changeState(d.State.Disconnected), this.connect(this.connectOptions)))
            };
            d.prototype.leaveRoom = function() {
                this.isJoinedToRoom() && (this.gamePeer &&
                    (this.gamePeer.sendOperation(a.Constants.OperationCode.Leave), this.gamePeerWaitingForDisconnect = !0), this._cleanupGamePeerData(), this.isConnectedToMaster() ? this.changeState(d.State.JoinedLobby) : (this.changeState(d.State.Disconnected), this.connect(this.connectOptions)))
            };
            d.prototype.raiseEvent = function(a, c, e) {
                this.isJoinedToRoom() && this.gamePeer.raiseEvent(a, c, e)
            };
            d.prototype.changeGroups = function(a, c) {
                this.isJoinedToRoom() && (this.logger.debug("Group change:", a, c), this.gamePeer.changeGroups(a, c))
            };
            d.prototype.findFriends = function(a) {
                if (this.isConnectedToMaster())
                    if (a && "object" == typeof a) {
                        this.findFriendsRequestList = [];
                        for (var c = 0; c < a.length; ++c)
                            if ("string" == typeof a[c]) this.findFriendsRequestList[c] = a[c];
                            else {
                                this.logger.error("FindFriends request error:", "Friend name is not a string", c);
                                this.onFindFriendsResult(1101, "Friend name is not a string " + c, {});
                                return
                            } this.logger.debug("Find friends:", a);
                        this.masterPeer.findFriends(this.findFriendsRequestList)
                    } else this.logger.error("FindFriends request error:",
                        "Parameter is not an array"), this.onFindFriendsResult(1101, "Parameter is not an array", {});
                else this.logger.error("FindFriends request error:", "Not connected to Master"), this.onFindFriendsResult(1001, "Not connected to Master", {})
            };
            d.prototype.requestLobbyStats = function(f) {
                if (this.isConnectedToMaster()) {
                    this.lobbyStatsRequestList = [];
                    if (f)
                        if ("object" == typeof f)
                            for (var c = 0; c < f.length; ++c) {
                                var e = f[c];
                                if ("object" == typeof e) {
                                    var d = e[0];
                                    if (d) {
                                        if (void 0 === e[1]) e = a.Constants.LobbyType.Default;
                                        else if ("number" ==
                                            typeof e[1]) e = e[1];
                                        else {
                                            this.requestLobbyStatsErr("Lobby type is invalid", c);
                                            return
                                        }
                                        this.lobbyStatsRequestList[c] = [d.toString(), e]
                                    } else {
                                        this.requestLobbyStatsErr("Lobby name is empty", c);
                                        return
                                    }
                                } else {
                                    this.requestLobbyStatsErr("Lobby id is not an array", c);
                                    return
                                }
                            } else {
                                this.requestLobbyStatsErr("Parameter is not an array");
                                return
                            }
                    this.masterPeer.requestLobbyStats(this.lobbyStatsRequestList)
                } else this.logger.error("LobbyState request error:", "Not connected to Master"), this.onLobbyStats(1001, "Not connected to Master",
                    [])
            };
            d.prototype.requestLobbyStatsErr = function(a, c) {
                void 0 === c && (c = "");
                this.logger.error("LobbyState request error:", a, c);
                this.onLobbyStats(1101, a + " " + c, [])
            };
            d.prototype.getRegions = function() {
                this.isConnectedToNameServer() ? (this.logger.debug("GetRegions..."), this.nameServerPeer.getRegions(this.appId)) : (this.logger.error("GetRegions request error:", "Not connected to NameServer"), this.onGetRegionsResult(3001, "Not connected to NameServer", {}))
            };
            d.prototype.webRpc = function(a, c) {
                this.isConnectedToMaster() ?
                    (this.logger.debug("WebRpc..."), this.masterPeer.webRpc(a, c)) : this.isJoinedToRoom() ? (this.logger.debug("WebRpc..."), this.gamePeer.webRpc(a, c)) : (this.logger.error("WebRpc request error:", "Connected to neither Master nor Game server"), this.onWebRpcResult(1001, "Connected to neither Master nor Game server", a, 0, {}))
            };
            d.prototype.connectToRegionMaster = function(a) {
                if (this.isConnectedToNameServer()) return this.logger.debug("Connecting to Region Master", a, "..."), this.nameServerPeer.opAuth(this.appId, this.appVersion,
                    this.userAuthType, this.userAuthParameters, this.userAuthData, this.userId, a), !0;
                if (this.connectToNameServer({
                        region: a
                    })) return !0;
                this.logger.error("Connecting to Region Master error:", "Not connected to NameServer");
                return !1
            };
            d.prototype.isConnectedToMaster = function() {
                return this.masterPeer && this.masterPeer.isConnected()
            };
            d.prototype.isConnectedToNameServer = function() {
                return this.nameServerPeer && this.nameServerPeer.isConnected()
            };
            d.prototype.isInLobby = function() {
                return this.state == d.State.JoinedLobby
            };
            d.prototype.isJoinedToRoom = function() {
                return this.state == d.State.Joined
            };
            d.prototype.isConnectedToGame = function() {
                return this.isJoinedToRoom()
            };
            d.prototype.availableRooms = function() {
                return this.roomInfos
            };
            d.prototype.setLogLevel = function(a) {
                this.logger.setLevel(a);
                this.nameServerPeer && this.nameServerPeer.setLogLevel(a);
                this.masterPeer && this.masterPeer.setLogLevel(a);
                this.gamePeer && this.gamePeer.setLogLevel(a)
            };
            d.prototype.addRoom = function(a) {
                this.roomInfos.push(a);
                this.roomInfosDict[a.name] = a
            };
            d.prototype.clearRooms =
                function() {
                    this.roomInfos = [];
                    this.roomInfosDict = {}
                };
            d.prototype.purgeRemovedRooms = function() {
                this.roomInfos = this.roomInfos.filter(function(a) {
                    return !a.removed
                });
                for (var a in this.roomInfosDict) this.roomInfosDict[a].removed && delete this.roomInfosDict[a]
            };
            d.prototype.addActor = function(a) {
                this.actors[a.actorNr] = a;
                this.actorsArray.push(a);
                this.currentRoom.playerCount = this.actorsArray.length;
                if (0 == this.lowestActorId || this.lowestActorId > a.actorNr) this.lowestActorId = a.actorNr
            };
            d.prototype.removeActor = function(a) {
                delete this.actors[a];
                this.actorsArray = this.actorsArray.filter(function(c) {
                    return c.actorNr != a
                });
                this.currentRoom.playerCount = this.actorsArray.length;
                this.lowestActorId == a && (this.lowestActorId = 0 < this.actorsArray.length ? this.actorsArray.reduce(function(a, e) {
                    return a.actorNr < e.actorNr ? a : e
                }).actorNr : 0)
            };
            d.prototype.clearActors = function() {
                this.actors = {};
                this.actorsArray = [];
                this.lowestActorId = this.currentRoom.playerCount = 0
            };
            d.prototype.changeState = function(a) {
                this.logger.info("State:", d.StateToName(this.state), "->", d.StateToName(a));
                this.state = a;
                this.onStateChange(a)
            };
            d.prototype.createRoomInternal = function(f, c) {
                var e = [];
                this.currentRoom.name && e.push(a.Constants.ParameterCode.RoomName, this.currentRoom.name);
                this.fillCreateRoomOptions(e, c);
                f === this.masterPeer && (this.createRoomOptions = c);
                f === this.gamePeer && (e.push(a.Constants.ParameterCode.PlayerProperties), e.push(this._myActor._getAllProperties()));
                (f == this.gamePeer ? this.gamePeer._logger : this.masterPeer._logger).info("Create Room", c && c.lobbyName, c && c.lobbyType, "...");
                f.sendOperation(a.Constants.OperationCode.CreateGame,
                    e)
            };
            d.prototype.updateUserIdAndNickname = function(f, c) {
                var e = f[a.Constants.ParameterCode.UserId];
                void 0 != e && (this.setUserId(e), c.info("Setting userId sent by server:", e));
                e = f[a.Constants.ParameterCode.Nickname];
                void 0 != e && (this.myActor().setName(e), c.info("Setting nickname sent by server:", e))
            };
            d.prototype.initNameServerPeer = function(f) {
                var c = this;
                f.setLogLevel(this.logger.getLevel());
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.error, function() {
                    c.changeState(d.State.Error);
                    c._onErrorInternal(d.PeerErrorCode.NameServerError,
                        "NameServer peer error")
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectFailed, function() {
                    c.changeState(d.State.Error);
                    c._onErrorInternal(d.PeerErrorCode.NameServerConnectFailed, "NameServer peer connect failed. " + c.nameServerAddress)
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.timeout, function() {
                    c.changeState(d.State.Error);
                    c._onErrorInternal(d.PeerErrorCode.NameServerTimeout, "NameServer peer timeout")
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connecting, function() {});
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connect,
                    function() {
                        f._logger.info("Connected");
                        c.changeState(d.State.ConnectedToNameServer);
                        void 0 != c.connectOptions.region && f.opAuth(c.appId, c.appVersion, c.userAuthType, c.userAuthParameters, c.userAuthData, c.userId, c.connectOptions.region)
                    });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.disconnect, function() {
                    f == c.nameServerPeer && (c._cleanupNameServerPeerData(), f._logger.info("Disconnected"))
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectClosed, function() {
                    f._logger.info("Server closed connection");
                    c.changeState(d.State.Error);
                    c._onErrorInternal(d.PeerErrorCode.NameServerConnectClosed, "NameServer server closed connection")
                });
                f.addResponseListener(a.Constants.OperationCode.GetRegions, function(e) {
                    f._logger.debug("resp GetRegions", e);
                    var d = {};
                    if (0 == e.errCode) {
                        var b = e.vals[a.Constants.ParameterCode.Region],
                            g = e.vals[a.Constants.ParameterCode.Address],
                            h;
                        for (h in b) d[b[h]] = g[h]
                    } else f._logger.error("GetRegions request error.", e.errCode);
                    c.onGetRegionsResult(e.errCode, e.errMsg, d)
                });
                f.addResponseListener(a.Constants.OperationCode.Authenticate,
                    function(e) {
                        f._logger.debug("resp Authenticate", e);
                        0 == e.errCode ? (f._logger.info("Authenticated"), f.disconnect(), c.updateUserIdAndNickname(e.vals, f._logger), c.masterServerAddress = e.vals[a.Constants.ParameterCode.Address], f._logger.info("Connecting to Master server", c.masterServerAddress, "..."), c.connect({
                            userAuthSecret: e.vals[a.Constants.ParameterCode.Secret]
                        })) : (c.changeState(d.State.Error), c._onErrorInternal(d.PeerErrorCode.NameServerAuthenticationFailed, "NameServer authentication failed"))
                    })
            };
            d.prototype.initMasterPeer =
                function(f) {
                    var c = this;
                    f.setLogLevel(this.logger.getLevel());
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.error, function() {
                        c.changeState(d.State.Error);
                        c._onErrorInternal(d.PeerErrorCode.MasterError, "Master peer error")
                    });
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectFailed, function() {
                        c.changeState(d.State.Error);
                        c._onErrorInternal(d.PeerErrorCode.MasterConnectFailed, "Master peer connect failed: " + c.masterServerAddress)
                    });
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.timeout, function() {
                        c.changeState(d.State.Error);
                        c._onErrorInternal(d.PeerErrorCode.MasterTimeout, "Master peer error timeout")
                    });
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connecting, function() {});
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connect, function() {
                        f._logger.info("Connected");
                        var e = [];
                        c.connectOptions.userAuthSecret ? (e.push(a.Constants.ParameterCode.Secret, c.connectOptions.userAuthSecret), f.sendOperation(a.Constants.OperationCode.Authenticate, e), f._logger.info("Authenticate with secret...")) : (e.push(a.Constants.ParameterCode.ApplicationId),
                            e.push(c.appId), e.push(a.Constants.ParameterCode.AppVersion), e.push(c.appVersion), c.userAuthType != a.Constants.CustomAuthenticationType.None && (e.push(a.Constants.ParameterCode.ClientAuthenticationType, c.userAuthType), e.push(a.Constants.ParameterCode.ClientAuthenticationParams, c.userAuthParameters), c.userAuthData && e.push(a.Constants.ParameterCode.ClientAuthenticationData, c.userAuthData)), c.userId && e.push(a.Constants.ParameterCode.UserId, c.userId), c.connectOptions.lobbyStats && e.push(a.Constants.ParameterCode.LobbyStats,
                                !0), f.sendOperation(a.Constants.OperationCode.Authenticate, e), f._logger.info("Authenticate..."))
                    });
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.disconnect, function() {
                        f == c.masterPeer && (c._cleanupMasterPeerData(), f._logger.info("Disconnected"))
                    });
                    f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectClosed, function() {
                        f._logger.info("Server closed connection");
                        c.changeState(d.State.Error);
                        c._onErrorInternal(d.PeerErrorCode.MasterConnectClosed, "Master server closed connection")
                    });
                    f.addEventListener(a.Constants.EventCode.GameList,
                        function(e) {
                            e = e.vals[a.Constants.ParameterCode.GameList];
                            c.clearRooms();
                            for (var d in e) {
                                var b = new h(d);
                                b._updateFromProps(e[d]);
                                c.addRoom(b)
                            }
                            c.onRoomList(c.roomInfos);
                            f._logger.debug("ev GameList", c.roomInfos, e)
                        });
                    f.addEventListener(a.Constants.EventCode.GameListUpdate, function(e) {
                        e = e.vals[a.Constants.ParameterCode.GameList];
                        var d = [],
                            b = [],
                            g = [],
                            l;
                        for (l in e) {
                            var k = c.roomInfos.filter(function(a) {
                                return a.name == l
                            });
                            if (0 < k.length) {
                                var p = k[0];
                                p._updateFromProps(e[l]);
                                p.removed ? g.push(p) : d.push(p)
                            } else k =
                                new h(l), k._updateFromProps(e[l]), c.addRoom(k), b.push(p)
                        }
                        c.purgeRemovedRooms();
                        c.onRoomListUpdate(c.roomInfos, d, b, g);
                        f._logger.debug("ev GameListUpdate:", c.roomInfos, "u:", d, "a:", b, "r:", g, e)
                    });
                    f.addResponseListener(a.Constants.OperationCode.Authenticate, function(e) {
                        f._logger.debug("resp Authenticate", e);
                        e.errCode ? (c.changeState(d.State.Error), c._onErrorInternal(d.PeerErrorCode.MasterAuthenticationFailed, "Master authentication failed")) : (f._logger.info("Authenticated"), c.updateUserIdAndNickname(e.vals,
                            f._logger), void 0 != e.vals[a.Constants.ParameterCode.Secret] && (c.connectOptions.userAuthSecret = e.vals[a.Constants.ParameterCode.Secret]), c.changeState(d.State.ConnectedToMaster), e = [], c.connectOptions.lobbyName && (e.push(a.Constants.ParameterCode.LobbyName), e.push(c.connectOptions.lobbyName), void 0 != c.connectOptions.lobbyType && (e.push(a.Constants.ParameterCode.LobbyType), e.push(c.connectOptions.lobbyType))), c.autoJoinLobby && (f.sendOperation(a.Constants.OperationCode.JoinLobby, e), f._logger.info("Join Lobby",
                            c.connectOptions.lobbyName, c.connectOptions.lobbyType, "...")))
                    });
                    f.addResponseListener(a.Constants.OperationCode.JoinLobby, function(e) {
                        f._logger.debug("resp JoinLobby", e);
                        e.errCode || (f._logger.info("Joined to Lobby"), c.changeState(d.State.JoinedLobby));
                        c._onOperationResponseInternal2(a.Constants.OperationCode.JoinLobby, e)
                    });
                    f.addResponseListener(a.Constants.OperationCode.CreateGame, function(e) {
                        f._logger.debug("resp CreateGame", e);
                        e.errCode || (c.currentRoom._updateFromMasterResponse(e.vals), f._logger.debug("Created/Joined " +
                            c.currentRoom.name), c.connectToGameServer(a.Constants.OperationCode.CreateGame));
                        c._onOperationResponseInternal2(a.Constants.OperationCode.CreateGame, e)
                    });
                    f.addResponseListener(a.Constants.OperationCode.JoinGame, function(e) {
                        f._logger.debug("resp JoinGame", e);
                        e.errCode || (c.currentRoom._updateFromMasterResponse(e.vals), f._logger.debug("Joined " + c.currentRoom.name), c.connectToGameServer(a.Constants.OperationCode.JoinGame));
                        c._onOperationResponseInternal2(a.Constants.OperationCode.JoinGame, e)
                    });
                    f.addResponseListener(a.Constants.OperationCode.JoinRandomGame,
                        function(e) {
                            f._logger.debug("resp JoinRandomGame", e);
                            e.errCode || (c.currentRoom._updateFromMasterResponse(e.vals), f._logger.debug("Joined " + c.currentRoom.name), c.connectToGameServer(a.Constants.OperationCode.JoinRandomGame));
                            c._onOperationResponseInternal2(a.Constants.OperationCode.JoinRandomGame, e)
                        });
                    f.addResponseListener(a.Constants.OperationCode.FindFriends, function(e) {
                        f._logger.debug("resp FindFriends", e);
                        var d = {};
                        if (e.errCode) f._logger.error("FindFriends request error:", e.errCode);
                        else
                            for (var b =
                                    e.vals[a.Constants.ParameterCode.FindFriendsResponseOnlineList] || {}, g = e.vals[a.Constants.ParameterCode.FindFriendsResponseRoomIdList] || {}, h = 0; h < c.findFriendsRequestList.length; ++h) {
                                var l = c.findFriendsRequestList[h];
                                l && (d[l] = {
                                    online: b[h],
                                    roomId: g[h]
                                })
                            }
                        c.onFindFriendsResult(e.errCode, e.errMsg, d)
                    });
                    f.addResponseListener(a.Constants.OperationCode.LobbyStats, function(e) {
                        f._logger.debug("resp LobbyStats", e);
                        var d = [];
                        if (e.errCode) f._logger.error("LobbyStats request error:", e.errCode);
                        else {
                            var b = e.vals[a.Constants.ParameterCode.LobbyName],
                                g = e.vals[a.Constants.ParameterCode.LobbyType] || {},
                                h = e.vals[a.Constants.ParameterCode.PeerCount] || {},
                                l = e.vals[a.Constants.ParameterCode.GameCount] || {};
                            if (b)
                                for (var k = 0; k < b.length; ++k) d[k] = {
                                    lobbyName: b[k],
                                    lobbyType: g[k],
                                    peerCount: h[k],
                                    gameCount: l[k]
                                };
                            else
                                for (k = 0; k < c.lobbyStatsRequestList.length; ++k) b = c.lobbyStatsRequestList[k], d[k] = {
                                    lobbyName: b[0],
                                    lobbyType: b[1],
                                    peerCount: h[k],
                                    gameCount: l[k]
                                }
                        }
                        c.onLobbyStats(e.errCode, e.errMsg, d)
                    });
                    f.addEventListener(a.Constants.EventCode.LobbyStats, function(e) {
                        f._logger.debug("ev LobbyStats",
                            e);
                        var d = [],
                            b = e.vals[a.Constants.ParameterCode.LobbyName],
                            g = e.vals[a.Constants.ParameterCode.LobbyType] || {},
                            h = e.vals[a.Constants.ParameterCode.PeerCount] || {};
                        e = e.vals[a.Constants.ParameterCode.GameCount] || {};
                        if (b)
                            for (var l = 0; l < b.length; ++l) d[l] = {
                                lobbyName: b[l],
                                lobbyType: g[l],
                                peerCount: h[l],
                                gameCount: e[l]
                            };
                        c.onLobbyStats(0, "", d)
                    });
                    f.addEventListener(a.Constants.EventCode.AppStats, function(e) {
                        f._logger.debug("ev AppStats", e);
                        c.onAppStats(0, "", {
                            peerCount: e.vals[a.Constants.ParameterCode.PeerCount],
                            masterPeerCount: e.vals[a.Constants.ParameterCode.MasterPeerCount],
                            gameCount: e.vals[a.Constants.ParameterCode.GameCount]
                        })
                    });
                    f.addResponseListener(a.Constants.OperationCode.Rpc, f.webRpcHandler(this))
                };
            d.prototype.connectToGameServer = function(a) {
                this.connectOptions.keepMasterConnection || this.masterPeer.disconnect();
                return this.checkNextState(d.State.ConnectingToGameserver, !0) ? (this.logger.info("Connecting to Game", this.currentRoom.address), this.gamePeer = new q(this, m(this.currentRoom.address, this.connectionProtocol), ""), this.gamePeerWaitingForDisconnect = !1, this.initGamePeer(this.gamePeer,
                    a), this.gamePeer.connect(), this.changeState(d.State.ConnectingToGameserver), !0) : !1
            };
            d.prototype.initGamePeer = function(f, c) {
                var e = this;
                f.setLogLevel(this.logger.getLevel());
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.error, function() {
                    e.changeState(d.State.Error);
                    e._onErrorInternal(d.PeerErrorCode.GameError, "Game peer error")
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectFailed, function() {
                    e.changeState(d.State.Error);
                    e._onErrorInternal(d.PeerErrorCode.GameConnectFailed, "Game peer connect failed: " +
                        e.currentRoom.address)
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.timeout, function() {
                    e.changeState(d.State.Error);
                    e._onErrorInternal(d.PeerErrorCode.GameTimeout, "Game peer timeout")
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connect, function() {
                    f._logger.info("Connected");
                    var c = [];
                    c.push(a.Constants.ParameterCode.ApplicationId);
                    c.push(e.appId);
                    c.push(a.Constants.ParameterCode.AppVersion);
                    c.push(e.appVersion);
                    void 0 != e.connectOptions.userAuthSecret && (c.push(a.Constants.ParameterCode.Secret),
                        c.push(e.connectOptions.userAuthSecret));
                    e.userAuthType != a.Constants.CustomAuthenticationType.None && (c.push(a.Constants.ParameterCode.ClientAuthenticationType), c.push(e.userAuthType));
                    e.userId && c.push(a.Constants.ParameterCode.UserId, e.userId);
                    f.sendOperation(a.Constants.OperationCode.Authenticate, c);
                    f._logger.info("Authenticate...")
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.disconnect, function() {
                    f == e.gamePeer && (e._cleanupGamePeerData(), f._logger.info("Disconnected"))
                });
                f.addPeerStatusListener(k.PhotonPeer.StatusCodes.connectClosed,
                    function() {
                        f._logger.info("Server closed connection");
                        e.gamePeerWaitingForDisconnect || (e.changeState(d.State.Error), e._onErrorInternal(d.PeerErrorCode.MasterConnectClosed, "Game server closed connection"))
                    });
                f.addResponseListener(a.Constants.OperationCode.Authenticate, function(b) {
                    f._logger.debug("resp Authenticate", b);
                    b.errCode ? (e.changeState(d.State.Error), e._onErrorInternal(d.PeerErrorCode.GameAuthenticationFailed, "Game authentication failed")) : (f._logger.info("Authenticated"), f._logger.info("Connected"),
                        c == a.Constants.OperationCode.CreateGame ? e.createRoomInternal(f, e.createRoomOptions) : (b = [], b.push(a.Constants.ParameterCode.RoomName), b.push(e.currentRoom.name), b.push(a.Constants.ParameterCode.Broadcast), b.push(!0), b.push(a.Constants.ParameterCode.PlayerProperties), b.push(e._myActor._getAllProperties()), c == a.Constants.OperationCode.JoinGame && (e.joinRoomOptions.createIfNotExists && (b.push(a.Constants.ParameterCode.JoinMode, d.JoinMode.CreateIfNotExists), e.fillCreateRoomOptions(b, e.createRoomOptions)),
                            e.joinRoomOptions.joinToken && (b.push(a.Constants.ParameterCode.ActorNr, parseInt(e.joinRoomOptions.joinToken)), b.push(a.Constants.ParameterCode.JoinMode, d.JoinMode.Rejoin))), f.sendOperation(a.Constants.OperationCode.JoinGame, b)), e.changeState(d.State.ConnectedToGameserver))
                });
                f.addResponseListener(a.Constants.OperationCode.CreateGame, function(c) {
                    f._logger.debug("resp CreateGame", c);
                    c.errCode || (e._myActor._updateMyActorFromResponse(c.vals), f._logger.info("myActor: ", e._myActor), e.currentRoom._updateFromProps(c.vals[a.Constants.ParameterCode.GameProperties]),
                        e.clearActors(), e.addActor(e._myActor), e.changeState(d.State.Joined), e.onJoinRoom(!0));
                    e._onOperationResponseInternal2(a.Constants.OperationCode.CreateGame, c)
                });
                f.addResponseListener(a.Constants.OperationCode.JoinGame, function(c) {
                    f._logger.debug("resp JoinGame", c);
                    if (!c.errCode) {
                        e._myActor._updateMyActorFromResponse(c.vals);
                        f._logger.info("myActor: ", e._myActor);
                        e.clearActors();
                        e.addActor(e._myActor);
                        var b = c.vals[a.Constants.ParameterCode.ActorList],
                            g = c.vals[a.Constants.ParameterCode.PlayerProperties];
                        if (void 0 !== b)
                            for (var h in b) {
                                var l = b[h],
                                    k;
                                void 0 !== g && (k = g[l]);
                                var p;
                                void 0 !== k && (p = k[a.Constants.ActorProperties.PlayerName]);
                                l == e._myActor.actorNr ? l = e._myActor : (l = e.actorFactoryInternal(p, l), e.addActor(l));
                                void 0 !== k && l._updateCustomProperties(k)
                            }
                        e.currentRoom._updateFromProps(c.vals[a.Constants.ParameterCode.GameProperties]);
                        e.changeState(d.State.Joined);
                        e.onJoinRoom(!1)
                    }
                    e._onOperationResponseInternal2(a.Constants.OperationCode.JoinGame, c)
                });
                f.addResponseListener(a.Constants.OperationCode.SetProperties,
                    function(c) {
                        f._logger.debug("resp SetProperties", c);
                        e._onOperationResponseInternal2(a.Constants.OperationCode.SetProperties, c)
                    });
                f.addResponseListener(a.Constants.OperationCode.Leave, function(c) {
                    f._logger.debug("resp Leave", c);
                    f.disconnect();
                    e._onOperationResponseInternal2(a.Constants.OperationCode.Leave, c)
                });
                f.addResponseListener(a.Constants.OperationCode.Rpc, f.webRpcHandler(this));
                f.addEventListener(a.Constants.EventCode.Join, function(a) {
                    f._logger.debug("ev Join", a);
                    if (b._getActorNrFromResponse(a.vals) ===
                        e._myActor.actorNr) e._myActor._updateFromResponse(a.vals), e.onActorJoin(e._myActor);
                    else {
                        var c = e.actorFactoryInternal();
                        c._updateFromResponse(a.vals);
                        e.addActor(c);
                        e.onActorJoin(c)
                    }
                });
                f.addEventListener(a.Constants.EventCode.Leave, function(c) {
                    f._logger.debug("ev Leave", c);
                    e.myRoom()._updateFromEvent(c.vals);
                    var d = b._getActorNrFromResponse(c.vals);
                    if (d && e.actors[d]) {
                        var g = e.actors[d];
                        c.vals[a.Constants.ParameterCode.IsInactive] ? (g._setSuspended(!0), e.onActorSuspend(g)) : (e.removeActor(d), e.onActorLeave(g,
                            !1))
                    }
                });
                f.addEventListener(a.Constants.EventCode.Disconnect, function(a) {
                    f._logger.debug("ev Disconnect", a);
                    (a = b._getActorNrFromResponse(a.vals)) && e.actors[a] && (a = e.actors[a], a._setSuspended(!0), e.onActorSuspend(a))
                });
                f.addEventListener(a.Constants.EventCode.PropertiesChanged, function(c) {
                    f._logger.debug("ev PropertiesChanged", c);
                    var d = c.vals[a.Constants.ParameterCode.TargetActorNr];
                    void 0 !== d && 0 < d ? void 0 !== e.actors[d] && (d = e.actors[d], d._updateCustomProperties(c.vals[a.Constants.ParameterCode.Properties]),
                        e.onActorPropertiesChange(d)) : (e.currentRoom._updateFromProps(c.vals[a.Constants.ParameterCode.Properties]), e.onMyRoomPropertiesChange())
                })
            };
            d.prototype._cleanupNameServerPeerData = function() {};
            d.prototype._cleanupMasterPeerData = function() {};
            d.prototype._cleanupGamePeerData = function() {
                for (var a in this.actors) this.onActorLeave(this.actors[a], !0);
                this.clearActors();
                this.addActor(this._myActor)
            };
            d.prototype._onOperationResponseInternal2 = function(a, c) {
                c.errCode && this.logger.warn("Operation", a, "error:",
                    c.errMsg, "(" + c.errCode + ")");
                this.onOperationResponse(c.errCode, c.errMsg, a, c.vals)
            };
            d.prototype._onErrorInternal = function(a, c) {
                this.logger.error("Error:", a, c);
                this.onError(a, c)
            };
            d.prototype.initValidNextState = function() {
                this.validNextState[d.State.Error] = [d.State.ConnectingToMasterserver, d.State.ConnectingToNameServer];
                this.validNextState[d.State.Uninitialized] = [d.State.ConnectingToMasterserver, d.State.ConnectingToNameServer];
                this.validNextState[d.State.ConnectedToNameServer] = [d.State.ConnectingToMasterserver];
                this.validNextState[d.State.Disconnected] = [d.State.ConnectingToMasterserver, d.State.ConnectingToNameServer];
                this.validNextState[d.State.ConnectedToMaster] = [d.State.JoinedLobby];
                this.validNextState[d.State.JoinedLobby] = [d.State.ConnectingToGameserver];
                this.validNextState[d.State.ConnectingToGameserver] = [d.State.ConnectedToGameserver];
                this.validNextState[d.State.ConnectedToGameserver] = [d.State.Joined]
            };
            d.prototype.checkNextState = function(a, c) {
                void 0 === c && (c = !1);
                var e = this.validNextState[this.state],
                    e = e && 0 <= e.indexOf(a);
                if (!e)
                    if (c) this.logger.error("LoadBalancingPeer checkNextState fail: " + d.StateToName(this.state) + " -> " + d.StateToName(a));
                    else throw Error("LoadBalancingPeer checkNextState fail: " + d.StateToName(this.state) + " -> " + d.StateToName(a));
                return e
            };
            d.StateToName = function(a) {
                return Exitgames.Common.Util.getEnumKeyByValue(d.State, a)
            };
            d.JoinMode = {
                Default: 0,
                CreateIfNotExists: 1,
                Rejoin: 2
            };
            d.PeerErrorCode = {
                Ok: 0,
                MasterError: 1001,
                MasterConnectFailed: 1002,
                MasterConnectClosed: 1003,
                MasterTimeout: 1004,
                MasterEncryptionEstablishError: 1005,
                MasterAuthenticationFailed: 1101,
                GameError: 2001,
                GameConnectFailed: 2002,
                GameConnectClosed: 2003,
                GameTimeout: 2004,
                GameEncryptionEstablishError: 2005,
                GameAuthenticationFailed: 2101,
                NameServerError: 3001,
                NameServerConnectFailed: 3002,
                NameServerConnectClosed: 3003,
                NameServerTimeout: 3004,
                NameServerEncryptionEstablishError: 300,
                NameServerAuthenticationFailed: 3101
            };
            d.State = {
                Error: -1,
                Uninitialized: 0,
                ConnectingToNameServer: 1,
                ConnectedToNameServer: 2,
                ConnectingToMasterserver: 3,
                ConnectedToMaster: 4,
                JoinedLobby: 5,
                ConnectingToGameserver: 6,
                ConnectedToGameserver: 7,
                Joined: 8,
                Disconnected: 10
            };
            return d
        }();
        a.LoadBalancingClient = l;
        l = function(d) {
            function f() {
                d.apply(this, arguments)
            }
            __extends(f, d);
            f.prototype.webRpc = function(c, e) {
                var d = [];
                d.push(a.Constants.ParameterCode.UriPath, c);
                d.push(a.Constants.ParameterCode.RpcCallParams, e);
                this.sendOperation(a.Constants.OperationCode.Rpc, d)
            };
            f.prototype.webRpcHandler = function(c) {
                var e = this;
                return function(d) {
                    e._logger.debug("resp Rpc", d);
                    var f, b, g;
                    0 == d.errCode ?
                        (f = d.vals[a.Constants.ParameterCode.UriPath], b = d.vals[a.Constants.ParameterCode.RpcCallRetData], g = d.vals[a.Constants.ParameterCode.RpcCallRetCode]) : e._logger.error("WebRpc request error:", d.errCode);
                    c.onWebRpcResult(d.errCode, d.errMsg, f, g, b)
                }
            };
            return f
        }(k.PhotonPeer);
        a.LbcPeer = l;
        var r = function(d) {
            function f(a, e, f) {
                d.call(this, e, f, "NameServer");
                this.client = a
            }
            __extends(f, d);
            f.prototype.onUnhandledEvent = function(c, e) {
                this.client.onEvent(c, e.vals[a.Constants.ParameterCode.CustomEventContent], e.vals[a.Constants.ParameterCode.ActorNr])
            };
            f.prototype.onUnhandledResponse = function(a, e) {
                this.client.onOperationResponse(e.errCode, e.errMsg, a, e.vals)
            };
            f.prototype.getRegions = function(c) {
                var e = [];
                e.push(a.Constants.ParameterCode.ApplicationId, c);
                this.sendOperation(a.Constants.OperationCode.GetRegions, e, !0, 0)
            };
            f.prototype.opAuth = function(c, e, d, f, b, g, h) {
                var l = [];
                l.push(a.Constants.ParameterCode.ApplicationId, c);
                l.push(a.Constants.ParameterCode.AppVersion, e);
                d != a.Constants.CustomAuthenticationType.None && (l.push(a.Constants.ParameterCode.ClientAuthenticationType,
                    d), l.push(a.Constants.ParameterCode.ClientAuthenticationParams, f), b && l.push(a.Constants.ParameterCode.ClientAuthenticationData, b));
                g && l.push(a.Constants.ParameterCode.UserId, g);
                l.push(a.Constants.ParameterCode.Region, h);
                this.sendOperation(a.Constants.OperationCode.Authenticate, l, !0, 0);
                this._logger.info("Authenticate...")
            };
            return f
        }(l);
        a.NameServerPeer = r;
        var p = function(d) {
            function f(a, e, f) {
                d.call(this, e, f, "Master");
                this.client = a
            }
            __extends(f, d);
            f.prototype.onUnhandledEvent = function(c, e) {
                this.client.onEvent(c,
                    e.vals[a.Constants.ParameterCode.CustomEventContent], e.vals[a.Constants.ParameterCode.ActorNr])
            };
            f.prototype.onUnhandledResponse = function(a, e) {
                this.client.onOperationResponse(e.errCode, e.errMsg, a, e.vals)
            };
            f.prototype.findFriends = function(c) {
                var e = [];
                e.push(a.Constants.ParameterCode.FindFriendsRequestList);
                e.push(c);
                this.sendOperation(a.Constants.OperationCode.FindFriends, e)
            };
            f.prototype.requestLobbyStats = function(c) {
                var e = [];
                if (c && 0 < c.length) {
                    for (var d = [], f = [], b = 0; b < c.length; ++b) d[b] = c[b][0], f[b] =
                        c[b][1];
                    e.push(a.Constants.ParameterCode.LobbyName);
                    e.push(d);
                    e.push(a.Constants.ParameterCode.LobbyType);
                    e.push(f)
                }
                this.sendOperation(a.Constants.OperationCode.LobbyStats, e)
            };
            return f
        }(l);
        a.MasterPeer = p;
        var q = function(d) {
            function f(a, e, f) {
                d.call(this, e, f, "Game");
                this.client = a
            }
            __extends(f, d);
            f.prototype.onUnhandledEvent = function(c, e) {
                this.client.onEvent(c, e.vals[a.Constants.ParameterCode.CustomEventContent], e.vals[a.Constants.ParameterCode.ActorNr])
            };
            f.prototype.onUnhandledResponse = function(a, e) {
                this.client.onOperationResponse(e.errCode,
                    e.errMsg, a, e.vals)
            };
            f.prototype.raiseEvent = function(c, e, d) {
                if (this.client.isJoinedToRoom()) {
                    this._logger.debug("raiseEvent", c, e, d);
                    c = [a.Constants.ParameterCode.Code, c, a.Constants.ParameterCode.Data, e];
                    if (d) {
                        void 0 != d.receivers && d.receivers !== a.Constants.ReceiverGroup.Others && (c.push(a.Constants.ParameterCode.ReceiverGroup), c.push(d.receivers));
                        void 0 != d.cache && d.cache !== a.Constants.EventCaching.DoNotCache && (c.push(a.Constants.ParameterCode.Cache), c.push(d.cache));
                        if (void 0 != d.interestGroup)
                            if (this.checkGroupNumber(d.interestGroup)) c.push(a.Constants.ParameterCode.Group),
                                c.push(d.interestGroup);
                            else throw Error("raiseEvent - Group not a number: " + d.interestGroup);
                        void 0 != d.targetActors && (c.push(a.Constants.ParameterCode.ActorList), c.push(d.targetActors));
                        d.webForward && (c.push(a.Constants.ParameterCode.Forward), c.push(!0))
                    }
                    this.sendOperation(a.Constants.OperationCode.RaiseEvent, c)
                } else throw Error("raiseEvent - Not joined!");
            };
            f.prototype.changeGroups = function(c, e) {
                var d = [];
                null != c && void 0 != c && (this.checkGroupArray(c, "groupsToRemove"), d.push(a.Constants.ParameterCode.Remove),
                    d.push(c));
                null != e && void 0 != e && (this.checkGroupArray(e, "groupsToAdd"), d.push(a.Constants.ParameterCode.Add), d.push(e));
                this.sendOperation(a.Constants.OperationCode.ChangeGroups, d)
            };
            f.prototype.checkGroupNumber = function(a) {
                return !("number" != typeof a || isNaN(a) || Infinity === a || -Infinity === a)
            };
            f.prototype.checkGroupArray = function(a, d) {
                if (Exitgames.Common.Util.isArray(a))
                    for (var f = 0; f < a.length; ++f) {
                        var b = a[f];
                        if (!this.checkGroupNumber(b)) throw Error("changeGroups - " + d + " (" + a + ") not an array of numbers: element " +
                            f + " = " + b);
                    } else throw Error("changeGroups - groupsToRemove not an array: " + a);
            };
            return f
        }(l);
        a.GamePeer = q
    })(k.LoadBalancing || (k.LoadBalancing = {}))
})(Photon || (Photon = {}));
(function(k) {
    (function(a) {
        (function(a) {
            a.ParameterCode = {
                Channels: 0,
                Channel: 1,
                Messages: 2,
                Message: 3,
                Senders: 4,
                Sender: 5,
                ChannelUserCount: 6,
                UserId: 225,
                MsgId: 8,
                MsgIds: 9,
                SubscribeResults: 15,
                Status: 10,
                Friends: 11,
                SkipMessage: 12,
                HistoryLength: 14
            };
            a.OperationCode = {
                Subscribe: 0,
                Unsubscribe: 1,
                Publish: 2,
                SendPrivate: 3,
                ChannelHistory: 4,
                UpdateStatus: 5,
                AddFriendds: 6,
                RemoveFriends: 7
            };
            a.EventCode = {
                ChatMessages: 0,
                Users: 1,
                PrivateMessage: 2,
                FriendsList: 3,
                StatusUpdate: 4,
                Subscribe: 5,
                Unsubscribe: 6
            };
            a.UserStatus = {
                Offline: 0,
                Invisible: 1,
                Online: 2,
                Away: 3,
                Dnd: 4,
                Lfg: 5,
                Playing: 6
            };
            a.UserStatusToName = function(k) {
                return Exitgames.Common.Util.getEnumKeyByValue(a.UserStatus, k)
            }
        })(a.Constants || (a.Constants = {}))
    })(k.Chat || (k.Chat = {}))
})(Photon || (Photon = {}));
(function(k) {
    (function(a) {
        var m = function() {
            function a(b, h) {
                this.sender = b;
                this.content = h
            }
            a.prototype.getSender = function() {
                return this.sender
            };
            a.prototype.getContent = function() {
                return this.content
            };
            return a
        }();
        a.Message = m;
        var n = function() {
            function a(b, h) {
                this.name = b;
                this.isPrivat = h;
                this.messages = []
            }
            a.prototype.getName = function() {
                return this.name
            };
            a.prototype.isPrivate = function() {
                return this.isPrivat
            };
            a.prototype.getMessages = function() {
                return this.messages
            };
            a.prototype.clearMessages = function() {
                this.messages.splice(0)
            };
            a.prototype.addMessage = function(a) {
                this.messages.push(a)
            };
            a.prototype.addMessages = function(a, b) {
                var h = [],
                    k;
                for (k in a)
                    if (parseInt(k) < b.length) {
                        var q = new m(a[k], b[k]);
                        this.addMessage(q);
                        h.push(q)
                    } return h
            };
            return a
        }();
        a.Channel = n;
        var b = function(b) {
            function g(a, g, k) {
                b.call(this, a, g, k);
                this.publicChannels = {};
                this.privateChannels = {};
                this.subscribeRequests = [];
                this.unsubscribeRequests = [];
                this.autoJoinLobby = !1
            }
            __extends(g, b);
            g.prototype.onStateChange = function(a) {};
            g.prototype.onError = function(a, b) {};
            g.prototype.onSubscribeResult =
                function(a) {};
            g.prototype.onUnsubscribeResult = function(a) {};
            g.prototype.onChatMessages = function(a, b) {};
            g.prototype.onPrivateMessage = function(a, b) {};
            g.prototype.onUserStatusUpdate = function(a, b, g, h) {};
            g.prototype.connectToRegionFrontEnd = function(a) {
                return this.connectToRegionMaster(a)
            };
            g.prototype.isConnectedToFrontEnd = function() {
                return this.state == g.ChatState.ConnectedToFrontEnd
            };
            g.prototype.subscribe = function(b, g) {
                void 0 === g && (g = 0);
                if (this.isConnectedToFrontEnd()) {
                    this.logger.debug("Subscribe channels:",
                        b);
                    var h = [];
                    h.push(a.Constants.ParameterCode.Channels, b);
                    void 0 != g && 0 != g && h.push(a.Constants.ParameterCode.HistoryLength, g);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.Subscribe, h);
                    return !0
                }
                this.logger.error("subscribe request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.unsubscribe = function(b) {
                if (this.isConnectedToFrontEnd()) {
                    this.logger.debug("Unsubscribe channels:", b);
                    var g = [];
                    g.push(a.Constants.ParameterCode.Channels, b);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.Unsubscribe,
                        g);
                    return !0
                }
                this.logger.error("unsubscribe request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.publishMessage = function(b, g) {
                if (this.isConnectedToFrontEnd()) {
                    var h = [];
                    h.push(a.Constants.ParameterCode.Channel, b);
                    h.push(a.Constants.ParameterCode.Message, g);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.Publish, h);
                    return !0
                }
                this.logger.error("publishMessage request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.sendPrivateMessage = function(b, g) {
                if (this.isConnectedToFrontEnd()) {
                    var h = [];
                    h.push(a.Constants.ParameterCode.UserId, b);
                    h.push(a.Constants.ParameterCode.Message, g);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.SendPrivate, h);
                    return !0
                }
                this.logger.error("sendPrivateMessage request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.setUserStatus = function(b, g, h) {
                void 0 === g && (g = null);
                void 0 === h && (h = !1);
                if (this.isConnectedToFrontEnd()) {
                    var k = [];
                    k.push(a.Constants.ParameterCode.Status, b);
                    h ? k.push(a.Constants.ParameterCode.SkipMessage, !0) : k.push(a.Constants.ParameterCode.Message,
                        g);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.UpdateStatus, k);
                    return !0
                }
                this.logger.error("setUserStatus request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.addFriends = function(b) {
                if (this.isConnectedToFrontEnd()) {
                    var g = [];
                    g.push(a.Constants.ParameterCode.Friends, b);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.AddFriendds, g);
                    return !0
                }
                this.logger.error("addFriends request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.removeFriends = function(b) {
                if (this.isConnectedToFrontEnd()) {
                    var g = [];
                    g.push(a.Constants.ParameterCode.Friends, b);
                    this.masterPeer.sendOperation(a.Constants.OperationCode.RemoveFriends, g);
                    return !0
                }
                this.logger.error("removeFriends request error:", "Not connected to Front End");
                return !1
            };
            g.prototype.getPublicChannels = function() {
                return this.publicChannels
            };
            g.prototype.getPrivateChannels = function() {
                return this.privateChannels
            };
            g.prototype.getOrAddChannel = function(a, b, g) {
                void 0 == a[b] && (a[b] = new n(b, g));
                return a[b]
            };
            g.prototype.initMasterPeer = function(g) {
                var k = this;
                b.prototype.initMasterPeer.call(this,
                    g);
                g.addEventListener(a.Constants.EventCode.ChatMessages, function(b) {
                    var h = b.vals[a.Constants.ParameterCode.Senders],
                        d = b.vals[a.Constants.ParameterCode.Messages];
                    b = b.vals[a.Constants.ParameterCode.Channel];
                    var f = k.publicChannels[b];
                    f ? (h = f.addMessages(h, d), k.onChatMessages(b, h)) : g._logger.warn("ev ChatMessages: Got message from unsubscribed channel ", b)
                });
                g.addEventListener(a.Constants.EventCode.PrivateMessage, function(b) {
                    var g = b.vals[a.Constants.ParameterCode.Sender],
                        d = b.vals[a.Constants.ParameterCode.Message];
                    b = b.vals[a.Constants.ParameterCode.UserId];
                    var f = "",
                        f = k.getUserId() == g ? b : g;
                    k.getOrAddChannel(k.privateChannels, f, !0);
                    k.onPrivateMessage(f, new m(g, d))
                });
                g.addEventListener(a.Constants.EventCode.StatusUpdate, function(b) {
                    var g = b.vals[a.Constants.ParameterCode.Message];
                    k.onUserStatusUpdate(b.vals[a.Constants.ParameterCode.Sender], b.vals[a.Constants.ParameterCode.Status], void 0 !== g, g)
                });
                g.addEventListener(a.Constants.EventCode.Subscribe, function(b) {
                    g._logger.debug("ev Subscribe", b);
                    var h = {},
                        d = b.vals[a.Constants.ParameterCode.Channels] || [];
                    b = b.vals[a.Constants.ParameterCode.SubscribeResults] || [];
                    for (var f in d) {
                        var c = d[f];
                        h[c] = !1;
                        f < b.length && b[f] && (k.getOrAddChannel(k.publicChannels, c, !1), h[c] = !0)
                    }
                    k.onSubscribeResult(h)
                });
                g.addEventListener(a.Constants.EventCode.Unsubscribe, function(b) {
                    g._logger.debug("ev Unsubscribe", b);
                    var h = {};
                    b = b.vals[a.Constants.ParameterCode.Channels] || [];
                    for (var d in b) {
                        var f = b[d];
                        delete k.publicChannels[f];
                        h[f] = !0
                    }
                    k.onUnsubscribeResult(h)
                })
            };
            g.StateToName = function(a) {
                var b = Exitgames.Common.Util.getEnumKeyByValue(g.ChatState,
                    a);
                return void 0 === b ? Exitgames.Common.Util.getEnumKeyByValue(g.State, a) : b
            };
            g.ChatPeerErrorCode = {
                Ok: 0,
                FrontEndError: 1001,
                FrontEndConnectFailed: 1002,
                FrontEndConnectClosed: 1003,
                FrontEndTimeout: 1004,
                FrontEndEncryptionEstablishError: 1005,
                FrontEndAuthenticationFailed: 1101,
                NameServerError: 3001,
                NameServerConnectFailed: 3002,
                NameServerConnectClosed: 3003,
                NameServerTimeout: 3004,
                NameServerEncryptionEstablishError: 300,
                NameServerAuthenticationFailed: 3101
            };
            g.ChatState = {
                Error: -1,
                Uninitialized: 0,
                ConnectingToNameServer: 1,
                ConnectedToNameServer: 2,
                ConnectingToFrontEnd: 3,
                ConnectedToFrontEnd: 4,
                Disconnected: 10
            };
            return g
        }(k.LoadBalancing.LoadBalancingClient);
        a.ChatClient = b
    })(k.Chat || (k.Chat = {}))
})(Photon || (Photon = {}));