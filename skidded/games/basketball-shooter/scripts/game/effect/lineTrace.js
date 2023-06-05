var Red = Red || {};

Red.LineTrace = (function ()
{
    function LineTrace(game)
    {
        this.game = game;
        this.dots = [];
        this.useDots = [];
        this.ballCont = null;
        this.ballTex = null;
        this.gravity = 980;
    }

    LineTrace.prototype = {
        create : function ()
        {
            this.ballCont = this.game.containerManager.getContaner("ball");
            this.ballTex = PIXI.Texture.fromImage("ball_dot");
        },

        start : function ()
        {
            this.gravity = game.physicsManager.rusPhysics.space.gravity.y;
        },

        clear : function ()
        {
            for (var i = 0; i < this.useDots.length; i++)
            {
                this.useDots[i].visible = false;
                this.dots.push(this.useDots[i]);
            }
            this.useDots.length = 0;
            this.gravity = this.game.physicsManager.rusPhysics.space.gravity.y
        },

        draw : function (x, y, rad, power)
        {
            this.clear();

            var crtX = x;
            var crtY = y;

            var vX = Math.sin(rad) * power;
            var vY = -Math.cos(rad) * power;

            var count = 0;
            var delta = this.game.time.fixedTime / 1000;

            while(true)
            {
                if (crtY >= 450 || crtX < 0 || crtX > 960) break;
                count++;

                crtX = crtX + ( vX * delta );
                crtY = crtY + ( vY * delta );

                vY += this.gravity * delta;


                if (count % 2 === 0)
                {
                    var dot;
                    if( this.dots.length === 0 )
                    {
                        dot = this.game.factory.sprite( crtX, crtY, this.ballTex, this.ballCont );
                        dot.anchor.set(0.5,0.5);
                    }
                    else
                    {
                        dot = this.dots.shift();
                    }

                    dot.position.set( crtX, crtY );
                    dot.visible = true;
                    this.useDots.push( dot );
                }
            }
        },
    };



    return LineTrace;
})();