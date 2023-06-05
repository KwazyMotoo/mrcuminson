var Red = Red || {};

Red.ActionData = (function ()
{
    function ActionData(  maxTime, action, finishCall )
    {
        this.time = 0;
        this.maxTime = maxTime;
        this.action = action;
        this.finishCall = finishCall;
    }

    ActionData.prototype = {
        update : function (delta)
        {
            this.time += delta;

            if( this.time >= this.maxTime )
            {
                this.time = this.maxTime;
                this.action( delta, this, this.time, this.maxTime);
                if( this.finishCall )
                {
                    this.finishCall();
                }
                return false;
            }
            else
            {
                this.action( delta, this, this.time, this.maxTime);
                return true;
            }
        },
    };

    return ActionData;
})();