var Red = Red || {};

Red.PaintArea = (function ()
{
    function PaintArea()
    {
        this.graphic = null;
        this.thickness = 1;
        this.isWrite = false;
        this.isFinish = false;
        this.finishCall = null;
    }


    PaintArea.prototype = {
        create : function ( x, y, width, height, thickness, par, isMask )
        {
            this.thickness = thickness || 2;

            this.graphic = new PIXI.Graphics();
            this.graphic.width = width;
            this.graphic.height = height;
            this.graphic.x = x;
            this.graphic.y = y;
            par.addChild( this.graphic );

            this.graphic.lineStyle(thickness, 0x000000, 1);
            this.graphic.beginFill(0x000000);

            this.graphic.hitArea = new PIXI.Rectangle( 0, 0, width, height );
            this.graphic.interactive = true;

            if( isMask )
            {
                var mask = new PIXI.Graphics();
                mask.beginFill(0x000000);
                mask.drawRect( 0,0,width, height );
                this.graphic.addChild( mask );
                this.graphic.mask = mask;
            }

            var self = this;

            this.graphic.on('pointerdown', (function (e)
            {
                this.inSide = true;
                this.isdown = true;
                self.isWrite = true;
                this.prePosition = e.data.getLocalPosition(this);
                this.drawCircle(this.prePosition.x, this.prePosition.y, 1);
            }).bind( this.graphic )  )
            .on('pointerup', (function ()
            {
                this.isdown = false;
                if(!self.isFinish && self.isWrite)
                {
                    self.isFinish = true;
                    self.finishCall && self.finishCall();
                }
            }).bind( this.graphic ))
            .on('pointerupoutside', (function ()
            {
                this.isdown = false;
                if(!self.isFinish && self.isWrite)
                {
                    self.isFinish = true;
                    self.finishCall && self.finishCall();
                }
            }).bind( this.graphic ))
            .on('pointerover', (function ()
            {
                if(this.isdown)
                {
                    this.inSide = true;
                }
            }).bind( this.graphic )  )
            .on('pointerout', (function ()
            {
                this.inSide = false;

            }).bind( this.graphic )  )
            .on('pointermove', (function (e)
            {
                if( !this.isdown ) return;

                var point = e.data.getLocalPosition(this);

                if( this.inSide )
                {
                    this.moveTo(this.prePosition.x, this.prePosition.y);
                    this.lineTo(point.x, point.y);
                }

                this.prePosition = point;

            }).bind( this.graphic ));
        },

        setActive : function (active)
        {
            this.graphic.interactive = active;
        },

        clear : function ()
        {
            this.graphic.clear();
            this.graphic.lineStyle(this.thickness, 0x000000, 1);
            this.graphic.beginFill(0x000000);
            this.isWrite = false;
            this.isFinish = false;
        },

        setFinishCall : function (call)
        {
            this.finishCall = call;
        }
    };

    return PaintArea;
})();