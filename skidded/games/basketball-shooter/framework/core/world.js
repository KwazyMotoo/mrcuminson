var Red = Red || {};

Red.World = (function ()
{
    function World()
    {
        this.worldContainer = new PIXI.Container();
        this.debugContainer = new PIXI.Container();
    }

    World.prototype = {
        boot:function (game)
        {
            game.stage.addChild( this.worldContainer );
            game.stage.addChild( this.debugContainer );
        },
    };

    return World;
})();