var Red = Red || {};

Red.TimeController = (function ()
{
    function TimeController(game)
    {
        this.game = game;
        this.time = 0;
        this.maxTime = 5;
        this.isActive = false;
        this.timeCall = null;
        this.dir = 1;
        this.timeEffect = null;

        //this.finishCall = null;
    }

    TimeController.prototype = {

        create : function ()
        {
            this.timeEffect = new Red.TimeEffect(this.game);
            this.timeEffect.create();

            this.game.signalManager.getSignal( EVENT_SIGNAL.shotBall).add( this.stopTime.bind(this) );

        },
        
        startTimeUp : function (maxTime, timeCall, finishCall)
        {
            this.time = 0;
            this.maxTime = maxTime;
            this.timeCall = timeCall;
            this.dir = 1;
            this.isActive = true;
            //this.finishCall = finishCall;
        },

        startTimeDown : function (maxTime, timeCall, target)
        {
            this.time = maxTime;
            this.maxTime = maxTime;
            this.timeCall = timeCall;
            this.dir = -1;
            this.isActive = true;

            //var pos = target.netBodys[1].transform.getWorldPosition();
            this.timeEffect.setPosition( 0,0,target.netBodys[1].gameObject.container );
            this.timeEffect.setValue( 1, 1 );
            this.timeEffect.start();


            //this.finishCall = finishCall;
        },

        stopTime : function ()
        {
            this.isActive = false;
            this.timeEffect.finish();
        },

        update : function (delta)
        {
            if(!this.isActive) return;

            this.time += delta * this.dir;
            this.timeCall && this.timeCall( this.time );

            this.timeEffect.setValue( this.time, this.maxTime );
            this.timeEffect.update( delta );

            if( this.time >= this.maxTime || this.time <= 0)
            {
                this.isActive = false;
                //this.finishCall && this.finishCall();
                //this.finishCall = null;
                this.timeCall = null;
            }
        },
    };

    return TimeController;
})();