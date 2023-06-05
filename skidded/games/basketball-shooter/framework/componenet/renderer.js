var Red = Red || {};

Red.Renderer = (function ()
{
    var _base = Red.Component;
    function Renderer(gameObject)
    {
        _base.call( this, gameObject );
    }

    Renderer.ComponentKey = "Renderer";
    Renderer.Create = function (gameObject)
    {
        return new Renderer(gameObject);
    };

    Renderer.prototype = new _base();
    Renderer.prototype.constructor = Renderer;
    return Renderer;
})();