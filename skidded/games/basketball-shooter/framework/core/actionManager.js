var Red = Red || {};

Red.ActionManager = (function ()
{
    function ActionManager()
    {
        this.actions = [];
        this.fixedActions = [];
    }

    ActionManager.prototype = {
        boot: function (game)
        {
            game.update.normalUpdate.push( this.update.bind( this ) );
            game.update.fixedUpdate.push( this.fixedUpdate.bind( this ) );
        },

        addAction : function (action)
        {
            action.time = 0;
            var bind = action.update.bind( action );
            this.actions.push( bind );
        },

        addLoopAction : function (action)
        {
            this.actions.push( action );
        },

        addFixedLoopAction : function (action)
        {
            this.fixedActions.push( action );
        },

        removeAction : function (index)
        {
            this.actions.splice(index,1);
        },

        update : function (delta)
        {
            var len = this.actions.length;
            for(var i = 0; i < len;)
            {
                if( this.actions[i](delta) )
                {
                    i++;
                }
                else
                {
                    this.removeAction( i );
                    len = this.actions.length;
                }
            }
        },

        addFixedAction : function (action)
        {
            this.fixedActions.push( action.update.bind( action ) );
        },

        removeFixedAction : function (index)
        {
            this.fixedActions.splice(index,1);
        },

        fixedUpdate : function (delta)
        {
            var len = this.fixedActions.length;
            for(var i = 0; i < len;)
            {
                if( this.fixedActions[i](delta) )
                {
                    i++;
                }
                else
                {
                    this.removeFixedAction( i );
                    len = this.fixedActions.length;
                }
            }
        },
    };

    return ActionManager;
})();