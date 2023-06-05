var Red = Red || {};

Red.SignalManager = (function ()
{
    var Signal = Red.Signal;

    function SignalManager()
    {
        this.signals = [];

        if( !Signal )
        {
            Signal = Red.Signal;
        }
    }

    SignalManager.prototype = {
        addSignal : function (key)
        {
            var signal = this.signals[key];
            if( !signal )
            {
                signal = new Signal(key.toString());
                this.signals[key] = signal;
            }

            return signal;
        },

        getSignal : function (key)
        {
            var signal = this.signals[key];
            if( signal )
            {
                return signal;
            }
            else
            {
                return this.addSignal(key);
            }
        },
    };

    return SignalManager;
})();