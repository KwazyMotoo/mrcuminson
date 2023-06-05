var Red = Red || {};

Red.PointerManager = (function ()
{
    function PointerManager()
    {
        this.pointers = {};
    }

    PointerManager.prototype = {
        addPointer : function (key, pointer)
        {
            this.pointers[key] = pointer;
        },
        
        getPointer : function (key)
        {
            return this.pointers[key];
        }
    };

    return PointerManager;
})();