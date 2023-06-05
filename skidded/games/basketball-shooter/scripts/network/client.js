var Red = Red || {};

Red.Client = (function ()
{
    function Client( ad, messageAction )
    {
        this.adress = ad;
        this.onMessageAction = messageAction;
        this.ws = null;
        this.isConnected = false;
        this.onConnectionCall = null;
    }

    Client.prototype = {
        connect : function (connectionCall)
        {
            this.ws = new WebSocket( this.adress );
            this.isConnected = false;

            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onerror = this.onError.bind(this);
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onclose = this.onDisconnect.bind(this);
            this.onConnectionCall = connectionCall;
        },

        disconnect : function ()
        {
            if( this.isConnected )
            {
                this.ws.close();
                this.isConnected = false;
            }
        },

        onOpen : function (data)
        {
            this.isConnected = true;

            if( this.onConnectionCall )
            {
                this.onConnectionCall();
            }
        },

        onMessage : function (message)
        {
            console.log( message);
            this.onMessageAction( message );
        },

        send : function (message)
        {
            this.ws.send( message );
        },

        onError : function (err)
        {
            console.log("Websocketerror: "  + err);
        },

        onDisconnect : function ()
        {
            this.isConnected = false;
            console.log("disconnected");
        },
    };

    return Client;
})();
