var Red = Red || {};

Red.InGameScene = (function ()
{
    var _playerId = [
        4,0,3,1,2,2,1,3,0,4
    ];

    var _game = null;
    function InGameScene(game)
    {
        _game = game;
        this.goalPost = [];
        this.ball = null;
        this.bg = null;
        this.player = [];
        this.controller = null;
        this.aiContoller = null;
        this.lineTrace = null;
        this.scoreBoard = null;
        this.goalEffect = null;

        this.goalController = null;
        this.timeController = null;

        this.isClick = false;

        this.gameMode = null;
        this.pointEffect = null;
    }

    InGameScene.prototype = {
        create : function ()
        {
            var goalCon = _game.containerManager.getContaner("goalpost");

            this.pointEffect = new Red.PointEffect(_game);
            this.pointEffect.create();

            this.goalPost[0] = new Red.GoalPost(_game, 0);
            this.goalPost[0].create();
            this.goalPost[0].gameObject.setParent( goalCon );

            this.goalPost[1] = new Red.GoalPost(_game, 1);
            this.goalPost[1].create();
            this.goalPost[1].gameObject.setParent( goalCon );

            this.ball = new Red.Ball( _game );
            this.ball.create();

            for( var i = 0;i < 10; i++ )
            {
                this.player[i] = new Red.Player( _game );
                this.player[i].create( (i) % 2 , _playerId[i]);
                this.player[i].setPosition(129 + i * 78, 471);
            }

            _game.networkManager.ball = this.ball;

            this.lineTrace = new Red.LineTrace(_game);
            this.lineTrace.create( );

            this.controller = new Red.BallController(_game);
            this.controller.create(this.ball, this.lineTrace);

            this.aiContoller = new Red.AiController(_game);
            this.aiContoller.create( this.ball, this.goalPost  );

            this.scoreBoard = new Red.ScoreBoard(_game);
            this.scoreBoard.create();

            this.goalController = new Red.GoalController(_game);
            this.goalController.create( this.ball, this.goalPost );

            this.timeController = new Red.TimeController(_game);
            this.timeController.create();

            this.goalEffect = new Red.GoalEffect(_game);
            this.goalEffect.create( _game.containerManager.getContaner("fixedui") );

            this.fps = _game.factory.text( 960/2, 32, "", _game.containerManager.getContaner("fixedui") );
            this.fps.anchor.set(0.5,0);
            this.fps.visible = false;

            this.bg = _game.pointerManager.getPointer("bg");

            this.finish();
        },

        start : function ()
        {
            var i = 0;

            switch ( Red.GAME_DATA.gameMode )
            {
                case Red.GameMode.single:
                    this.gameMode = new Red.SingleMode(_game);
                    this.gameMode.playerTeamID = 0;
                    this.gameMode.aiTeamID = 1;
                    for( i = 0;i < 10; i++ )
                    {
                        this.player[i].setTeam( i % 2 );
                    }
                    this.goalPost[0].setTri(false);
                    this.goalPost[1].setTri(false);
                    break;
                case Red.GameMode.double:
                    this.gameMode = new Red.DoubleMode(_game);
                    for( i = 0;i < 10; i++ )
                    {
                        this.player[i].setTeam( i % 2 );
                    }
                    this.goalPost[0].setTri(false);
                    this.goalPost[1].setTri(false);
                    break;
                case Red.GameMode.challenge :
                    this.gameMode = new Red.ChallengeMode(_game);
                    for( i = 0;i < 10; i++ )
                    {
                        this.player[i].setTeam( 0 );
                    }
                    this.goalPost[0].setTri(true);
                    this.goalPost[1].setTri(false);
                    break;
            }

            this.gameMode.create(this.scoreBoard, this.player, this.controller, this.timeController, this.aiContoller, this.goalPost, this.goalEffect);
            this.gameMode.start();

            this.goalEffect.start();

            //this.goalPost[0].setActive( true );
            //this.goalPost[1].setActive( true );
            this.ball.setActive(true);
            this.scoreBoard.setActive(true);
            //this.bgCover.visible = true;
            this.isClick = false;
            for( i = 0;i < 10; i++ )
            {
                //this.player[i].setButton( false );
                this.player[i].setActive( true );
            }
            //this.bgCover.visible = true;
            //this.controller.setActive( true );
            this.bg.start();

            _game.signalManager.getSignal(EVENT_SIGNAL.onStartGame).dispatch();
        },

        finish : function ()
        {
            //this.goalPost[0].setActive( false );
            //this.goalPost[1].setActive( false );
            if( this.gameMode )
            {
                this.gameMode.finish();
                this.gameMode.dispose();
            }

            this.ball.setActive(false);
            this.scoreBoard.setActive(false);

            for( var i = 0;i < 10; i++ )
            {
                //this.player[i].setButton( true );
                this.player[i].setActive( false );
            }
            this.controller.setActive( false );

            this.bg.finish();
        },

        onMouseDown : function (e)
        {
            this.controller.onMouseDown(e)

            //  this.isClick = true;
            // //
            //  this.ball.body.setType( Red.RusBody.KINETIC );
            //  this.ball.body.setVelocity( 0, 0 , 0 );
        },

        onMouseUp : function (e)
        {
            this.controller.onMouseUp(e)
        },

        //
        onMouseMove : function (e)
        {
            // if( this.isClick )
            // {
            //     var xRate = 960 / parseInt( _game.renderer.width );
            //     var yRate = 540 / parseInt( _game.renderer.height );
            //     this.ball.gameObject.transform.setWorldPosition( e.clientX * xRate , e.clientY * yRate);
            //     this.ball.body.initTransform();
            // }
        },
        //
        // onMouseUp : function (e)
        // {
        //
        //     if( this.isClick )
        //     {
        //         var xRate = 960 / parseInt( _game.pixi.view.style.width );
        //         var yRate = 540 / parseInt( _game.pixi.view.style.height );
        //         this.ball.gameObject.transform.setWorldPosition( e.clientX * xRate , e.clientY * yRate);
        //         this.ball.body.initTransform();
        //         this.ball.body.setType( Red.RusBody.DYNAMIC );
        //         this.ball.shoot();
        //         this.isClick = false;
        //     }
        // },
        //

        onKeyDown : function (e)
        {
            this.goalPost[0].onKeyDown(e);
            this.goalPost[1].onKeyDown(e);
        },

        fixedUpdate : function (delta)
        {
            this.fps.text = _game.time.fps;
            this.goalPost[0].update(delta);
            this.goalPost[1].update(delta);
            this.ball.update(delta);
            this.controller.update(delta);
            this.timeController.update(delta);
            this.goalController.update(delta);

            this.bg.update(delta);
        },
    };

    return InGameScene;
})();