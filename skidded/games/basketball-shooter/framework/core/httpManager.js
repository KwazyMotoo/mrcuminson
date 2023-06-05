var Red = Red || {};

Red.HttpManager = (function ()
{
    function HttpRequest()
    {
        this.httpRequest = null;
        this.returnCall = null;
        this.sendTime = 0;
        this.requestCall = null;
        this.key = undefined;

        if (window.XMLHttpRequest)
        { // 모질라, 사파리등 그외 브라우저, ...
            this.httpRequest = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        { // IE 8 이상
            this.httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        this.httpRequest.onreadystatechange = this._onReadyStateChange.bind(this);
    }

    HttpRequest.prototype = {

        /**
         *
         * @param url
         * @param async true 비동기, false 동기
         * @param user
         * @param password
         * @param call
         * @private
         */
        _get : function ( url, async, user, password, call)
        {
            if( typeof async === "function" )
            {
                call = async;
            }
            else if( typeof user === "function" )
            {
                call = user;
            }

            if(!async && typeof async !== "boolean" )
            {
                async = false;
            }


            if( call )
            {
                this.requestCall = call;
            }

            this.httpRequest.open('GET', url, async, user, password );
            this.sendTime = Date.now()
            this.httpRequest.send(null);
        },

        _onReadyStateChange : function ()
        {
            if (this.httpRequest.readyState === 4)
            {
                var tt = Date.now() - this.sendTime;
                console.log("응답 시간 : " + tt + " ms");
                if (this.httpRequest.status === 200)
                {
                    this.requestCall && this.requestCall( this.httpRequest.responseText );
                    this.requestCall = null;
                }
                else
                {
                    console.log('There was a problem with the request.');
                }
                this.returnCall(this);
            }
        },
    };


    function HttpManager()
    {
        this.pool = [];
        this.useObject = [];
        this.requests = {};
        this.allRequestComplateCall = null;     //인자로 this.requests 넘겨줌.
    }

    HttpManager.prototype = {

        //개별적으로 리퀘스트 요청
        getRequest : function (url, async, user, password, call)
        {
            if( this.pool.length <= 0 )
            {
                this.pool.push( new HttpRequest());
            }

            var request = this.pool.shift();
            request.requestCall = this._returnRequest.bind(this);
            request._get( url, async, user, password, call );
            this.useObject.push( request );
        },

        //리퀘스트를 추가만하고 요청은 안함.
        addRequest : function (key, url, async, user, password)
        {
            this.requests[key] = ( { url:url, async:async, user:user, password:password, text:undefined, } );
        },


        //addRequest 함수로 추가했던 모든 리퀘스트를 동시에 요청. 끝나면 call 호출함.
        startRequest : function (call)
        {
            this.allRequestComplateCall = call;

            var self = this;
            Object.keys(this.requests).forEach(function (key) {

                if( self.pool.length <= 0 )
                {
                    self.pool.push( new HttpRequest());
                }

                var data =  self.requests[key];
                var request = self.pool.shift();
                request.returnCall = self._returnRequest_all.bind(self);
                request.key = key;
                request._get( data.url, data.async, data.user, data.password );
                self.useObject.push( request );
            });
        },

        _returnRequest : function (request)
        {
            this.useObject.splice( this.useObject.indexOf(request), 1 );
            this.pool.push( request );
        },

        _returnRequest_all : function (request)
        {
            this.useObject.splice( this.useObject.indexOf(request), 1 );
            this.pool.push( request );
            this.requests[ request.key ].text = request.httpRequest.responseText;
            if( this.useObject.length <= 0 )
            {
                this.allRequestComplateCall && this.allRequestComplateCall(this.requests);
            }
        },
    };

    return HttpManager;
})();