var Red = Red || {};

Red.LifeBar = (function ()
{

    function LifeBar(game)
    {
        this.game = game;
        this.rootSprite = null;
        this.life = [];

    }

    LifeBar.prototype = {
        create: function (x,y,par)
        {
            this.rootSprite = new this.game.factory.sprite( x, y, "board_ballchance_base", par );
            this.rootSprite.anchor.set( 0.5 );
            this.life[0] = new this.game.factory.sprite( -24, 0, "board_ballchance_ball", this.rootSprite );
            this.life[0].anchor.set(0.5);
            this.life[1] = new this.game.factory.sprite( 0 , 0, "board_ballchance_ball", this.rootSprite );
            this.life[1].anchor.set(0.5);
            this.life[2] = new this.game.factory.sprite( 24, 0, "board_ballchance_ball", this.rootSprite );
            this.life[2].anchor.set(0.5);
        },

        start : function ()
        {

        },

        finish : function ()
        {

        },
        
        setLife : function (life)
        {
            var i;
            for( i = 0; i < life && i < this.life.length; i++ )
            {
                this.life[i].visible = true;
            }

            for( ; i < this.life.length; i++ )
            {
                this.life[i].visible = false;
            }
        }
    };

    return LifeBar;
})();