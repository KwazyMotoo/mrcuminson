var Red = Red || {};

Red.Background = (function ()
{
    var _speed1 = 10;
    var _speed2 = 5;
    var _speed3 = 2;

    function Background(game)
    {
        this.game = game;
        this.bgSprite = null;
        this.camera = null;

        this.cloud1 = null;
        this.cloud2 = null;
        this.cloud3 = null;

        this.texture = [];
    }

    Background.prototype = {
        create: function (par, camera)
        {
            this.bgSprite = this.game.factory.sprite( 0, -420, "bg_base_01", par );
            this.camera = camera;

            this.texture[0] = PIXI.Texture.fromImage("bg_base_01");
            this.texture[1] = PIXI.Texture.fromImage("bg_base_02");

            this.cloud1 = this.game.factory.sprite( 0,0,"bg_base_01_cloude01", par );
            this.cloud1.y = -100;
            this.cloud2 = this.game.factory.sprite( 0,0,"bg_base_01_cloude01", par );
            this.cloud2.scale.set(0.75);
            this.cloud2.y = 100;
            this.cloud3 = this.game.factory.sprite( 0,0,"bg_base_01_cloude01", par );
            this.cloud3.scale.set(0.5);
            this.cloud3.y = 220;
        },

        init : function ()
        {
            this.camera.position.y = -420;
            this.cloud1.x = 580;
            this.cloud2.x = -50;
            this.cloud3.x = 520;
            this.bgSprite.texture = this.texture[ Red.Math.RandomInt(0, this.texture.length) ];
        },

        start : function ()
        {
            this.cloud1.visible = true;
            this.cloud2.visible = true;
            this.cloud3.visible = true;
        },

        finish : function ()
        {
            this.cloud1.visible = false;
            this.cloud2.visible = false;
            this.cloud3.visible = false;
        },

        update : function (delta)
        {
            this.cloud1.x -= delta * _speed1;
            this.cloud2.x -= delta * _speed2;
            this.cloud3.x -= delta * _speed3;

            if( this.cloud1.x <= - 320 ) this.cloud1.x = 960;
            if( this.cloud2.x <= - 240 ) this.cloud2.x = 960;
            if( this.cloud3.x <= - 160 ) this.cloud3.x = 960;
        },
    };

    return Background;
})();