var Red = Red || {};

Red.ContainerManager = (function ()
{
    function ContainerManager()
    {
        this.game = null;
        this.containers = [];
    }

    ContainerManager.prototype = {
        boot : function (game)
        {
            this.game = game;
        },

        addContainer : function (key, container)
        {
            this.containers[key] = container;
        },

        getContaner : function (key)
        {
            return this.containers[key];
        },
    };

    return ContainerManager;
})();