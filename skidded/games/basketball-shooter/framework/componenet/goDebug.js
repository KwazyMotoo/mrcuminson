var Red = Red || {};

Red.GameObjectDebug = (function ()
{
    var _base = Red.Component;
    function GameObjectDebug(gameObject, radius, color)
    {
        _base.call( this, gameObject );
        this.drawCall = null;
        this.debugManager = gameObject.game.debugManager;
        this.debugManager.gameObjectDebugs.push( this );
        this.radius = radius || 4;
        this.color = color || 0x00ff00;
    }

    GameObjectDebug.ComponentKey = "GameObjectDebug";
    GameObjectDebug.Create = function (gameObject,radius, color)
    {
        return new GameObjectDebug(gameObject,radius, color);
    };

    GameObjectDebug.prototype = new _base();
    GameObjectDebug.prototype.constructor = GameObjectDebug;

    GameObjectDebug.prototype.setActive = function (active)
    {
        if( this.isActive === active )
        {
            return;
        }

        this.isActive = active;
        if( active )
        {
            this.debugManager.gameObjectDebugs.push( this );
        }
        else
        {
            var idx = this.debugManager.gameObjectDebugs.indexOf( this );
            idx > -1 && this.debugManager.gameObjectDebugs.splice( idx, 1 );
        }
    };

    GameObjectDebug.prototype.draw = function ()
    {
        var pos = this.gameObject.transform.getWorldPosition();
        this.debugManager.drawFillCircle( pos.x, pos.y, this.radius, this.color, 1 );
        if( this.drawCall )
        {
            this.drawCall();
        }
    };

    GameObjectDebug.prototype.dispose = function ()
    {
        var idx = this.debugManager.gameObjectDebugs.indexOf( this );
        idx > -1 && this.debugManager.gameObjectDebugs.splice( idx, 1 );
    };

    return GameObjectDebug;
})();