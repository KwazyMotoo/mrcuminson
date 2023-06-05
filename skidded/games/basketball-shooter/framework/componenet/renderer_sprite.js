var Red = Red || {};

Red.Sprite = (function ()
{
    var _base = Red.Renderer;
    function Sprite(gameObject)
    {
        _base.call( this, gameObject );
        this.sprite = null;

    }

    Sprite.ComponentKey = "Renderer";
    Sprite.Create = function (gameObject, texture)
    {
        var spr = new Sprite(gameObject);
        spr.sprite = gameObject.game.factory.sprite( 0, 0, texture || "", gameObject.container );
        return spr;
    };

    Sprite.prototype = new _base();
    Sprite.prototype.constructor = Sprite;

    Sprite.prototype.setActive = function (active)
    {
        if( this.isActive === active )
        {
            return;
        }

        this.isActive = active;



        if( active )
        {
            this.sprite.visible = true;
        }
        else
        {
            this.sprite.visible = false;
        }
    };

    Sprite.prototype.setPosition = function ( x, y )
    {
        this.sprite.position.set( x, y );
    };

    Sprite.prototype.setPivot = function ( x, y)
    {
        this.sprite.anchor.set( x, y );
    };

    Sprite.prototype.setTexture = function (key)
    {
        this.sprite.texture =  PIXI.Texture.fromImage(key);
    };

    Sprite.prototype.dispose = function ()
    {
        this.sprite.destroy();
    };

    return Sprite;
})();