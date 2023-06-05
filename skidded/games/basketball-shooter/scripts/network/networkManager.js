var Red = Red || {};

Red.NetworkManager = (function ()
{
    function NetworkManager(game)
    {
        this.game = game;
        this.isCreate = false;
        this.client = null;
        this.adress = Red.AdressData.game_ws;
        this.ball = null;
        this.token = null;
    }

    NetworkManager.prototype = {

        create : function ( isSingle )
        {
            this.clear();
            if(this.isCreate ) return;

            if ( isSingle )
            {
                this.client = {};
                var self = this;
                this.client.send = function (message)
                {
                    var sendMsg = {};
                    sendMsg.data = message;
                    self.onMessage(sendMsg);
                };

                this.client.disconnect = function ()
                {

                };
            }
            else
            {
                var id ;
                this.token = localStorage.getItem("h4token");

                //if( this.token === null )
                {
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open( "GET", Red.AdressData.guestLogin, false );
                    xmlHttp.send( null );

                    if( xmlHttp.responseText)
                    {
                        var loginData = JSON.parse(xmlHttp.responseText);
                        id = loginData.data.userId;
                        this.token = loginData.data.token;
                        if( this.token )
                        {
                            localStorage.setItem("h4token", this.token);
                        }
                    }
                }

                this.client = new Red.Client( this.adress, this.onMessage.bind(this) );
                var self = this;
                this.client.connect( function ()
                {
                    self.sendMessage({name:Red.MESSAGE_TYPE.CS_ENTER});
                } );
            }
            this.isCreate =  true;
        },

        clear : function ()
        {
            this.isCreate = false;
            if( this.client !== null )
            {
                this.client.disconnect();
            }
            this.client = null;
        },

        onMessage : function (message)
        {
            var msg = JSON.parse(message.data);
            console.log( msg );
            switch ( msg.name )
            {
                case Red.MESSAGE_TYPE.CS_SHOT:
                    this.ball.shoot( msg.angle, msg.power );
                    break;
            }
        },

        sendMessage_shot : function ( angle, power )
        {
            this.sendMessage( { name:Red.MESSAGE_TYPE.CS_SHOT, angle : angle, power : power } );
        },

        sendMessage : function (message)
        {
            message.token = this.token;
            this.client.send(JSON.stringify(message));
        },


    };

    return NetworkManager;
})();
