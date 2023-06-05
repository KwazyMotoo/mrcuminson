var Red = Red || {};

Red.Gauge_circle = (function ()
{
    function Gauge_circle()
    {
        this.isActive = true;
        this.sprite = null;
        this.mask = null;

        this.width = 0;
    }


    Gauge_circle.prototype = {
        create : function ( x, y, tex, par )
        {
            this.sprite = new PIXI.Sprite( PIXI.Texture.fromImage( tex ));
            this.sprite.position.set( x,y );
            this.sprite.anchor.set(0.5);
            par.addChild(this.sprite);

            this.mask = new PIXI.Graphics();
            this.sprite.addChild(this.mask);
            this.sprite.mask = this.mask;

            this.width = this.sprite.texture.width;

            this.sprite.mask = this.mask;


        },

        setActive : function (active)
        {
            if( this.isActive === active ) return;

            this.isActive = active;
            if( active )
            {
                this.sprite.visible = true;
            }
            else
            {
                this.sprite.visible = false;
            }
        },
        
        setVlue : function (crt, max)
        {
            if( crt < 0 ) crt = 0;

            this.mask.clear();
            this.mask.lineStyle(20, 0xff0000);
            var rad = Math.PI / 180;
            var s = 270 * rad;
            var e = s + ( 360 - 360 * ( crt / max  )) * rad;

            if( crt >= max )
            {
                this.mask.beginFill(0xff0000, 1);
                this.mask.arc(0, 0, (this.width/2) - (20/2) + 1, 0, 100, true); // cx, cy, radius, startAngle, endAngle
            }
            else
            {
                this.mask.arc(0, 0, (this.width/2) - (20/2) + 1, s, e, true); // cx, cy, radius, startAngle, endAngle
            }


        },
    };

    return Gauge_circle;
})();