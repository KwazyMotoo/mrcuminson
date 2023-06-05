var Red = Red || {};

Red.SelectScene = (function ()
{
    var _game = null;
    var _turnList = [10,20,30,40,50,60];
    var _pointList = [10,15,20,25,30,40];

    function SelectScene(game)
    {
        _game = game;
        this.rootContainer = null;

        this.debugSelectText = null;
        this.debugSelect = null;

        this.modeSeelectText = null;
        this.modeSeelect = null;

        this.targetSelect = null;
        this.pointSelect = null;
        this.turnSelect = null;

        this.pointIdx = 0;
        this.turnIdx = 0;

        this.startBtn = null;
    }

    SelectScene.prototype = {
        create : function ()
        {
            this.rootContainer = new PIXI.Container();
            _game.containerManager.getContaner("ui").addChild( this.rootContainer );

            this.debugSelectText = _game.factory.text( 150, 100, "Debug", this.rootContainer );
            this.debugSelect = _game.factory.text( 300, 100, "", this.rootContainer );
            this.debugSelect.interactive = true;
            this.debugSelect.on('pointerdown', (function ()
            {
                _game.isDebug = !_game.isDebug;
                this.debugSelect.text = _game.isDebug;
            }).bind(this) );

            // this.modeSeelectText = _game.factory.text( 150,200, "Mode", this.rootContainer );
            // this.modeSeelect = _game.factory.text( 300, 200, "", this.rootContainer );
            // this.modeSeelect.interactive = true;
            // this.modeSeelect.on('pointerdown', (function ()
            // {
            //     Red.GAME_DATA.gameMode = (Red.GAME_DATA.gameMode + 1) % Red.GameMode.count;
            //     this._onChangedSelect();
            // }).bind(this) );

            this.startBtn = _game.factory.text( _game.halfWidth, 450, "Start", this.rootContainer );
            this.startBtn.anchor.set(0.5);
            this.startBtn.style.fill = 0xFF7200;
            this.startBtn.interactive = true;
            this.startBtn.on('pointerdown', (function ()
            {
                _game.sceneManager.changeScene( "lobby" );
            }).bind(this) );

            // this.targetSelect = _game.factory.text( 500, 200, "" , this.rootContainer );
            // this.targetSelect.interactive = true;
            // this.targetSelect.on('pointerdown', (function ()
            // {
            //     Red.GAME_DATA.target = (Red.GAME_DATA.target + 1) % Red.GameTarget.count;
            //     this._onChangedSelect();
            // }).bind(this) );
            //
            //
            // this.turnSelect = _game.factory.text( 700, 200, "", this.rootContainer );
            // this.turnSelect.interactive = true;
            // this.turnSelect.on('pointerdown', (function ()
            // {
            //     this.turnIdx++;
            //     this.turnIdx %= _turnList.length;
            //     Red.GAME_DATA.maxTurn = _turnList[this.turnIdx];
            //     this._onChangedSelect();
            // }).bind(this) );
            //
            // this.pointSelect = _game.factory.text( 700, 200, "", this.rootContainer );
            // this.pointSelect.interactive = true;
            // this.pointSelect.on('pointerdown', (function ()
            // {
            //     this.pointIdx++;
            //     this.pointIdx %= _pointList.length;
            //     Red.GAME_DATA.maxPoint = _pointList[this.pointIdx];
            //     this._onChangedSelect();
            // }).bind(this) );

            this.finish();
        },

        start : function ()
        {
            this.rootContainer.visible = true;
            this.debugSelect.text = _game.isDebug;
            this._onChangedSelect();
        },

        _onChangedSelect : function ()
        {
            // this.modeSeelect.text = Red.GameMode[ Red.GAME_DATA.gameMode ];
            // this.targetSelect.text = Red.GameTarget[ Red.GAME_DATA.target ];
            // this.pointSelect.text = Red.GAME_DATA.maxPoint;
            // this.turnSelect.text = Red.GAME_DATA.maxTurn;
            //
            // if( Red.GAME_DATA.gameMode === Red.GameMode.single || Red.GAME_DATA.gameMode === Red.GameMode.double )
            // {
            //     this.targetSelect.visible = true;
            //     if( Red.GAME_DATA.target === Red.GameTarget.point )
            //     {
            //         this.pointSelect.visible = true;
            //         this.turnSelect.visible = false;
            //     }
            //     else if( Red.GAME_DATA.target === Red.GameTarget.turn )
            //     {
            //         this.pointSelect.visible = false;
            //         this.turnSelect.visible = true;
            //     }
            //     else
            //     {
            //         this.pointSelect.visible = false;
            //         this.turnSelect.visible = false;
            //     }
            // }
            // else
            // {
            //     this.targetSelect.visible = false;
            //     this.pointSelect.visible = false;
            //     this.turnSelect.visible = false;
            // }
        },

        finish : function ()
        {
            this.rootContainer.visible = false;
        },

        update : function (delta)
        {

        },
    };

    return SelectScene;
})();