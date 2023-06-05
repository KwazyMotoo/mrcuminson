var Red = Red || {};

Red.PointEffect = (function ()
{
    var _scoreArr = [
        "1p",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "8p",
        "9p",
        "10p",
    ];

    function PointEffect(game)
    {
        this.game = game;
        this.sprite = null;
    }

    PointEffect.prototype = {
        create : function ()
        {
            this.sprite =  new PIXI.spine.Spine(this.game.resources["get_point"].spineData);
            this.sprite.state.setAnimation(0, _scoreArr[0], false);
            //this.sprite.state.addListener({ complete: this._onFinishCall.bind(this) });
            this.game.containerManager.getContaner("ui").addChild( this.sprite );

            this.game.pointerManager.addPointer("pointEffect", this);
            this.finish();
        },

        setPoint : function (x,y,score)
        {
            this.sprite.x = x;
            this.sprite.y = y;
            this.start();
            this.sprite.state.setAnimation(0, _scoreArr[score], false,0);
            //this.sprite.state.update(0);
            //this.rootSpine.state.setAnimation(0, "talk", false);
        },

        // _onFinishCall : function ()
        // {
        //     console.log( "_onFinishCall" )
        //     //this.finish();
        // },

        start : function ()
        {
            this.sprite.visible = true;
        },

        finish : function ()
        {
            this.sprite.visible = false;
        },
    };

    return PointEffect;

})();