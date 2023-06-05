var Red = Red || {};

Red.TimeEffect = (function ()
{
    function TimeEffect(game)
    {
        this.game = game;
        this.rootContainer = null;
        this.gauge = null;
        this.gaugeBG = null;
        this.arrow = null;

        this.time = 0;
    }

    TimeEffect.prototype = {
        create : function ()
        {
            this.rootContainer = new PIXI.Container();
            this.game.containerManager.getContaner("ui").addChild( this.rootContainer );

            this.gaugeBG = this.game.factory.sprite( 0,-33, "gauge_time_base", this.rootContainer);
            this.gaugeBG.anchor.set( 0.5, 0.5 );

            this.gauge = new Red.Gauge_circle();
            this.gauge.create( 0,-33, "gauge_time_bar", this.rootContainer );
            //this.gauge.sprite.anchor.set( 0.5, 1 );

            this.arrow = this.game.factory.sprite( 0,0,"gauge_point", this.rootContainer );
            this.arrow.anchor.set( 0.5, 0 );

            this.game.pointerManager.addPointer( "timeEffect", this );

            this.finish();
        },

         update : function (delta)
         {
             this.time += delta * 2;
             var s = Math.abs(Math.sin( this.time ));
             this.arrow.y = Red.Math.Lerp( 0, 10, s );
         },

        setPosition : function (x, y, par)
        {
            if( par )
            {
                par.addChild( this.rootContainer );
                this.rootContainer.position.set(0, - 75);
            }
            else
            {
                this.rootContainer.position.set(x,y - 75);
            }
        },

        setValue : function (crt, max)
        {
            this.gauge.setVlue(crt, max);
        },

        start : function ()
        {
            this.rootContainer.visible = true;
            this.time = 0;
        },

        finish : function ()
        {
            this.rootContainer.visible = false;
        },
    };

    return TimeEffect;
})();