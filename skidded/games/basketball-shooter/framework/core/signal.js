var Red = Red || {};

Red.Signal = (function ()
{
    function Signal(name)
    {
        this.actions = [];
        this.binds = [];
        this.signalName = name ? name : "";
    }

    Signal.prototype = {
        add: function (action, owner, isOnce)
        {
            if (!owner)
            {
                owner = this;
            }

            if (!isOnce)
            {
                isOnce = false;
            }

            var bind = action.bind(owner);
            bind.isOnce = isOnce;
            this.actions.push(bind);
            this.binds.push( { action : action, owner : owner, bind : bind } );
        },

        remove : function (action, owner)
        {
            if (!owner)
            {
                owner = this;
            }

            var len = this.binds.length;
            var bind = null;
            for (var i = 0; i < len;)
            {
                var temp = this.binds[i];

                if( temp.action === action && temp.owner === owner )
                {
                    bind = temp;
                    break;
                }
                else
                {
                    i++;
                }
            }

            if( bind )
            {
                var index = this.actions.indexOf( bind.bind );
                if( index > -1 )
                {
                    this.actions.splice(index, 1);
                }
            }
        },

        dispatch: function (arg, arg2, arg3, arg4, arg5)
        {
            //console.log( this.signalName );
            var len = this.actions.length;
            for (var i = 0; i < len;)
            {
                var action = this.actions[i];
                action(arg, arg2, arg3, arg4, arg5);
                if (action.isOnce)
                {
                    this.actions.splice(i, 1);
                    len = this.actions.length;
                }
                else
                {
                    i++;
                }
            }
        },

        dispatch_get : function (arg, arg2, arg3, arg4, arg5)
        {
            var len = this.actions.length;
            var arr = [];
            for (var i = 0; i < len;)
            {
                var action = this.actions[i];
                arr.push(action(arg, arg2, arg3, arg4, arg5));
                if (action.isOnce)
                {
                    this.actions.splice(i, 1);
                    len = this.actions.length;
                }
                else
                {
                    i++;
                }
            }
            return arr;
        },

        dispatch_firstGet : function (arg, arg2, arg3, arg4, arg5)
        {
            var len = this.actions.length;
            for (var i = 0; i < len;)
            {
                var action = this.actions[i];
                var value = action(arg, arg2, arg3, arg4, arg5)
                if (action.isOnce)
                {
                    this.actions.splice(i, 1);
                    len = this.actions.length;
                }
                else
                {
                    i++;
                }
                return value;
            }
        },


    };

    return Signal;
})();