var Red = Red || {};

Red.Component = (function ()
{
    var _instanceCount = 0;
    function Component(gameObject)
    {
        this.isActive = true;
        this.instanceID = _instanceCount++;
        this.gameObject = gameObject;
    }

    Component.ComponentKey = "Component";
    Component.Create = function (gameObject)
    {
        return new Component(gameObject);
    };

    Component.prototype = {
        setActive : function (active)
        {
            if (this.isActive === active)
            {
                return;
            }
            this.isActive = active;
        },

        //boot : function (){},
        //setActive : function(active){},
        //onEnable : function (){},
        //onDisable : function (){},
        //dispose : function (){},
    };

    Component.prototype.constructor = Component;

    return Component;
})();