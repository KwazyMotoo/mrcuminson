var Red = Red || {};

Red.DebugManager = (function ()
{
    function DebugManager()
    {
        this.game = null;
        this.parent = null;
        this.graphics = null;
        this.gameObjectDebugs = [];
    }

    DebugManager.prototype = {
        boot : function (game)
        {
            this.game = game;
            this.graphics = new PIXI.Graphics();
            this.parent = this.game.world.debugContainer;
            this.parent.addChild( this.graphics );
        },

        clear : function ()
        {
            this.graphics.clear();
            var parent = this.graphics.parent;
            this.graphics.parent.removeChild( this.graphics );
            parent.addChild( this.graphics );
        },
        
        drawLine : function (x1, y1, x2, y2, color)
        {
            color = color || 0xffffff;
            this.graphics.lineStyle(4, color, 1);
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        },

        /**
         *
         * @param x top_left
         * @param y top_left
         * @param w
         * @param h
         * @param color
         * @param alpha
         */
        drawFillRect : function (x, y, w, h, color, alpha)
        {
            color = color || 0xffffff;
            alpha = alpha || 1;
            this.graphics.lineStyle(0);
            this.graphics.beginFill(color, alpha);
            this.graphics.drawRect(x, y, w, h);
            this.graphics.endFill();
        },

        drawFillCircle : function (x, y, r, color, alpha)
        {
            color = color || 0xffffff;
            alpha = alpha || 1;
            this.graphics.lineStyle(0);
            this.graphics.beginFill(color, alpha);
            this.graphics.drawCircle(x, y, r);
            this.graphics.endFill();

        },

        drawFillPolygon : function (verts, color, alpha)
        {
            color = color || 0xffffff;
            alpha = alpha || 1;

            this.graphics.lineStyle(0);
            this.graphics.beginFill(color, alpha);

            this.graphics.moveTo(verts[0].x, verts[0].y);

            for( var i = 1; i < verts.length; i++ )
            {
                this.graphics.lineTo(verts[i].x, verts[i].y);
            }
        },
    };

    return DebugManager;
})();