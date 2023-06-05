var Red = Red || {};

Red.Factory = (function ()
{
    var Texture = PIXI.Texture;
    var Sprite = PIXI.Sprite;
    var Text = PIXI.Text;
    var Container = PIXI.Container;
    var Action = Red.ActionData;

    function Factory()
    {
        this.game = null;
        this.worldContainer = null;
        this.getContaner = null;
    }

    Factory.prototype = {
        boot : function (game)
        {
            this.game = game;
            this.worldContainer = game.world.worldContainer;
            this.getContaner = game.containerManager.getContaner.bind(game.containerManager);
        },

        sprite : function (x, y, tex, container)
        {
            var texture;
            if( tex instanceof Texture)
            {
                texture = tex;
            }
            else
            {
                texture = Texture.fromImage(tex);
            }
            var sprite = new Sprite(texture);

            if( x )
            {
                sprite.x = x;
            }

            if( y )
            {
                sprite.y = y;
            }

            if( container)
            {
                if( container instanceof Container)
                {
                    container.addChild( sprite );
                }
                else
                {
                    this.getContaner( container ).addChild( sprite );
                }
            }
            else
            {
                this.worldContainer.addChild( sprite );
            }

            return sprite;
        },



        text : function (x, y, str, container)
        {
            var text = new Text(str);
            text.x = x;
            text.y = y;

            if( container !== null && container !== undefined )
            {
                if( container instanceof Container)
                {
                    container.addChild( text );
                }
                else
                {
                    this.getContaner( container ).addChild( text );
                }
            }
            else
            {
                this.worldContainer.addChild( text );
            }
            return text;
        },

        button : function (x, y, normalTex, overTex, pushTex, action, container)
        {
            var texture;
            if( normalTex instanceof Texture)
            {
                texture = normalTex;
            }
            else
            {
                texture = Texture.fromImage(normalTex);
            }

            var sprite = new Sprite(texture);

            if( x )
            {
                sprite.x = x;
            }

            if( y )
            {
                sprite.y = y;
            }

            if( container)
            {
                if( container instanceof Container)
                {
                    container.addChild( sprite );
                }
                else
                {
                    this.getContaner( container ).addChild( sprite );
                }
            }
            else
            {
                this.worldContainer.addChild( sprite );
            }

            return new Red.Button( sprite, action, normalTex, overTex, pushTex  );
        },

        container : function (key, isfollowCamera)
        {
            var container = new Container();
            if( !isfollowCamera )
            {
                this.game.world.worldContainer.addChild( container );
            }
            else
            {
                this.game.stage.addChild( container );
            }

            if( key )
            {
                this.game.containerManager.addContainer( key, container );
            }
            return container;
        },

        action : function ( maxTime, action, finishCall, isFixed )
        {
            if( !isFixed )
            {
                isFixed = false;
            }
            var action = new Action( maxTime, action, finishCall );

            if( isFixed )
            {
                this.game.actionsManager.addFixedAction( action );
            }
            else
            {
                this.game.actionsManager.addAction( action );
            }
        },

        waitCall : function (waitTime, call)
        {
            this.action( waitTime,function (){}, call );
        },

        loopAtion : function ( action, isFixed )
        {
            isFixed = isFixed || false;

            if( isFixed )
            {
                this.game.actionsManager.addFixedLoopAction( action );
            }
            else
            {
                this.game.actionsManager.addLoopAction( action );
            }
        },
    };

    return Factory;
})();