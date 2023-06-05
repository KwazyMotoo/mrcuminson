var Red = Red || {};

Red.PlayerScoreUI = (function ()
{
    var _bgName = [
        "point_num_base_b",
        "point_num_base_r",
        "point_num_base_c",
    ];

    var _numTextName = [
        "point_num_1",
        "point_num_1",
        "point_num_2",
        "point_num_3",
        "point_num_4",
        "point_num_5",
        "point_num_6",
        "point_num_7",
        "point_num_8",
        "point_num_9",
        "point_num_10",
    ];

    var _colorInfo = [
        // {off:0x8CEBFF,on:0x0000ff},
        // {off:0xFFC8C8,on:0xff0000}
        {off:0xffffff,on:0xffffff},
        {off:0xffffff,on:0xffffff}
    ];

    function PlayerScoreUI(game)
    {
        this.game = game;
        this.teamID = 0;
        this.playerID = 0;


        this.rootSprite = null;
        this.numSprite = null;

        if( !this.numTex[0] )
        {
            this.numTex[0] = PIXI.Texture.fromImage(_numTextName[0]);
            this.numTex[1] = PIXI.Texture.fromImage(_numTextName[1]);
            this.numTex[2] = PIXI.Texture.fromImage(_numTextName[2]);
            this.numTex[3] = PIXI.Texture.fromImage(_numTextName[3]);
            this.numTex[4] = PIXI.Texture.fromImage(_numTextName[4]);
            this.numTex[5] = PIXI.Texture.fromImage(_numTextName[5]);
            this.numTex[6] = PIXI.Texture.fromImage(_numTextName[6]);
            this.numTex[7] = PIXI.Texture.fromImage(_numTextName[7]);
            this.numTex[8] = PIXI.Texture.fromImage(_numTextName[8]);
            this.numTex[9] = PIXI.Texture.fromImage(_numTextName[9]);
            this.numTex[10] = PIXI.Texture.fromImage(_numTextName[10]);
        }

        if( !this.bgTex[0] )
        {
            this.bgTex[0] = PIXI.Texture.fromImage(_bgName[0]);
            this.bgTex[1] = PIXI.Texture.fromImage(_bgName[1]);
            this.bgTex[2] = PIXI.Texture.fromImage(_bgName[2]);
        }
    }

    PlayerScoreUI.prototype = {
        numTex : [],
        bgTex : [],

        create: function (teamID, playerID, par)
        {
            this.teamID = teamID;
            this.playerID = playerID;

            this.rootSprite = this.game.factory.sprite( 0, 37, this.bgTex[0], par  );
            this.rootSprite.anchor.set(0.5);
            this.rootSprite.visible = false;

            this.numSprite = this.game.factory.sprite( 0, 37, this.numTex[1], par  );
            this.numSprite.anchor.set(0.5);
            //this.numSprite.scale.set( 0.8 );
            this.numSprite.tint = _colorInfo[ this.teamID ].off;

            this.game.signalManager.getSignal( EVENT_SIGNAL.selectPlayer_ +  teamID + playerID).add( this._onSelect, this);
            this.game.signalManager.getSignal( EVENT_SIGNAL.shotBall).add( this._onShotBall, this );
        },

        setActive: function (active)
        {
            this.rootSprite.visible = false;
            //this.numSprite.visible = active;
        },

        setSelect : function (isSelect)
        {
            if( isSelect )
            {
                this.rootSprite.texture = this.bgTex[this.teamID];
                this.rootSprite.visible = true;
                //this.numSprite.scale.set( 1 );
                //this.numSprite.tint = _colorInfo[ this.teamID ].on;
            }
            else
            {
                this.rootSprite.visible = false;
                //this.numSprite.scale.set( 0.8 );
                //this.numSprite.tint = _colorInfo[ this.teamID ].off;
            }
        },

        setSelect_chall : function (isSelect)
        {
            if( isSelect )
            {
                this.rootSprite.texture = this.bgTex[2];
                this.rootSprite.visible = true;
                //this.numSprite.scale.set( 1 );
                //this.numSprite.tint = _colorInfo[ this.teamID ].on;
            }
        },


        _onSelect : function (isChall)
        {
            if(isChall)
            {
                this.setSelect_chall(true);
            }
            else
            {
                this.setSelect( true );
            }
        },

        _onShotBall : function ()
        {
            this.setSelect( false );
        },

        setScore : function (score)
        {
            if( score === 0)
            {
                this.numSprite.visible = false;
            }
            else
            {
                this.numSprite.visible = true;
                this.numSprite.texture = this.numTex[score];
            }

        },
    };

    return PlayerScoreUI;
})();