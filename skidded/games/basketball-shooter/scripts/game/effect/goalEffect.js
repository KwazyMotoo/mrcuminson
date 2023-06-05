var Red = Red || {};

Red.GoalEffect = (function ()
{
    var _effectNum = {
        redGoal : 0,
        blueGoal : 1,
        out : 2,
        redWin : 3,
        blueWin : 4,
        draw : 5,
    };

    function GoalEffect(game)
    {
        this.game = game;
        //this.sprite = null;
        this.rootContainer = null;
        this.gameover = null;
        this.winLose = null;
        this.out = null;

        this.homeBtn = null;
        this.retryBtn = null;

        this.wait = false;
    }

    GoalEffect.prototype = {
        create : function (par)
        {
            this.rootContainer = new PIXI.Container();
            par.addChild( this.rootContainer );

            this.gameover =  new PIXI.spine.Spine(this.game.resources["text_gameover"].spineData);
            this.rootContainer.addChild( this.gameover );
            this.gameover.x = this.game.halfWidth;
            this.gameover.y = this.game.halfHeight - 50;


            this.winLose =  new PIXI.spine.Spine(this.game.resources["text_win_n_lose"].spineData);
            this.rootContainer.addChild( this.winLose );
            this.winLose.x = this.game.halfWidth;
            this.winLose.y = this.game.halfHeight - 50;

            this.out =  new PIXI.spine.Spine(this.game.resources["goallineout"].spineData);
            this.rootContainer.addChild( this.out );
            this.out.x = this.game.halfWidth;
            this.out.y = this.game.halfHeight - 50;

            this.homeBtn = this.game.factory.button(this.game.halfWidth - 85, this.game.halfHeight + 125
                , "btn_home_normal", "btn_home_over", "btn_home_push", (function ()
                {
                    this.finish();
                    this.game.sceneManager.changeScene( "lobby" );

                }).bind(this),  this.rootContainer );

            this.homeBtn.sprite.anchor.set( 0.5 );

            this.retryBtn = this.game.factory.button(this.game.halfWidth + 85, this.game.halfHeight + 125
                , "btn_restart_normal", "btn_restart_over", "btn_restart_push", (function ()
                {
                    this.finish();
                    this.game.sceneManager.changeScene( "inGame" );

                }).bind(this),  this.rootContainer );
            this.retryBtn.sprite.anchor.set( 0.5 );

            // this.sprite = this.game.factory.sprite( this.game.halfWidth, this.game.halfHeight - 100, this.texture[0], par  );
            // this.sprite.anchor.set( 0.5 );
            // this.sprite.interactive = true;
            // this.sprite.on('pointerdown', (function ()
            // {
            //     this.finish();
            //     this.game.sceneManager.changeScene( "select" );
            // }).bind(this) );

            this.finish();
        },

        start : function ()
        {
            this.rootContainer.visible = true;
            this.gameover.visible = false;
            this.winLose.visible = false;
            this.out.visible = false;
            this.homeBtn.setActive( false );
            this.retryBtn.setActive( false );
        },

        finish : function ()
        {
            // this.winLose.state.clearTrack(0);
            // this.winLose.skeleton.setToSetupPose();
            //
            // this.gameover.state.clearTrack(0);
            // this.gameover.skeleton.setToSetupPose();


            this.rootContainer.visible = false;
        },

        startVsMode : function ()
        {
            //this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).add( this._onBlueGoal,this );
            //this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).add( this._onRedGoal,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOut).add( this._onOut,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onRedWin).add( this._onRedWin,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onBlueWin).add( this._onBlueWin,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onDraw).add( this._onDraw,this );
        },

        endVsMode : function ()
        {
            //this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).remove( this._onBlueGoal,this );
            //this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).remove( this._onRedGoal,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOut).remove( this._onOut,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onRedWin).remove( this._onRedWin,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onBlueWin).remove( this._onBlueWin,this );
            this.game.signalManager.getSignal(EVENT_SIGNAL.onDraw).remove( this._onDraw,this );
        },

        _onRedGoal : function ()
        {
            // this.setTexture(0);
            // this.wait = false;
            // this.sprite.interactive = false;
            // this.startIn();
            // console.log( "_onRedGoal" );
        },

        _onBlueGoal : function ()
        {
            // this.setTexture(1);
            // this.wait = false;
            // this.sprite.interactive = false;
            // this.startIn();
            // console.log( "_onBlueGoal" );
        },

        _onGoal : function ()
        {
            // this.setTexture(0);
            // this.wait = false;
            // this.sprite.interactive = false;
            // this.startIn();
            // console.log( "_onGoal" );
        },

        _onOut : function ()
        {
            // this.setTexture(2);
            // this.wait = false;
            // this.sprite.interactive = false;
            // this.startIn();
            // console.log( "_onOut" );
            this.out.state.setAnimation(0, "animation", false,0);
            this.out.visible = true;
        },

        _onRedWin : function ()
        {
            // this.setTexture(3);
            // this.startIn();
            // this.wait = true;
            this.winLose.visible = true;
            this.winLose.state.setAnimation(0, "lose", false,0);
            this.game.factory.waitCall( 0.5, this._onResult.bind(this));
        },

        _onBlueWin : function ()
        {
            // this.setTexture(4);
            // this.startIn();
            // this.wait = true;
            // console.log( "_onBlueWin" );
            this.winLose.visible = true;
            this.winLose.state.setAnimation(0, "win", false,0);
            this.game.factory.waitCall( 0.5, this._onResult.bind(this));
        },

        _onDraw : function ()
        {
            // this.setTexture(5);
            // this.startIn();
            // this.wait = true;
            // console.log( "_onDraw" );
        },

        _onGameover : function ()
        {
            this.gameover.state.setAnimation(0, "gameover", false,0);
            this.gameover.visible = true;
            this.game.factory.waitCall( 0.5, this._onResult.bind(this) );
        },

        _onResult : function ()
        {
            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                sdk.showBanner();
            }

            //this.winLose.state.setAnimation(0, "lose", false,0);
            this.homeBtn.setActive( true );
            this.retryBtn.setActive( true );
        },

        setTexture : function (num)
        {
            this.sprite.texture = this.texture[num];
        },

        startIn : function (call)
        {
            if(this.sprite.visible) return;

            this.start();
            var maxTime = 0.5;
            var src = this.game.halfWidth + this.game.halfWidth + 200;
            var dst = this.game.halfWidth;

            this.game.factory.action( maxTime,
                (function (delta, a, t, maxT)
                {
                    var tt = Red.Tween.Back.InOut( t/maxT  );
                    this.sprite.x = Red.Math.Lerp( src, dst, tt );

                }).bind(this),
                (function ()
                {
                    call && call();
                    if(!this.wait )
                    {
                        this.game.factory.waitCall( 0.8, this.startOut.bind(this) );
                    }
                    else
                    {
                        this.sprite.interactive = true;
                    }

                }).bind(this));
        },

        startOut : function (call)
        {
            this.start();
            var maxTime = 0.5;
            var dst = this.game.halfWidth - this.game.halfWidth - 200;
            var src = this.game.halfWidth;

            this.game.factory.action( maxTime,
                (function (delta, a, t, maxT)
                {
                    var tt = Red.Tween.Back.InOut( t/maxT  );
                    this.sprite.x = Red.Math.Lerp( src, dst, tt );

                }).bind(this),
                (function ()
                {
                    this.finish();
                    call && call();
                }).bind(this));
        },
    };

    return GoalEffect;

})();