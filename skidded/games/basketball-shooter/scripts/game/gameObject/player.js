var Red = Red || {};

Red.Player = (function ()
{
    var _poly = [
        [
            new Red.Vector2(-38, -51),     //몸통
            new Red.Vector2(-38, -89),
            new Red.Vector2(38, -89),
            new Red.Vector2(38, -51),
        ],
        [
            new Red.Vector2(-38, -89),     //왼쪽귀
            new Red.Vector2(-38, -118),
            new Red.Vector2(-10, -89),
        ],
        [
            new Red.Vector2(10, -89),    //오른쪽귀
            new Red.Vector2(38, -118),
            new Red.Vector2(38, -89),
        ],
        [
            new Red.Vector2(0, -138),      //삼각형
            new Red.Vector2(38, -118),
            new Red.Vector2(-38, -118)
        ],
        [
            new Red.Vector2(-38, -118),      //오른쪽 삼각형
            new Red.Vector2(79, -170),
            new Red.Vector2(79, -118)
        ],
        [
            new Red.Vector2(38, -118),     //왼쪽 삼각형
            new Red.Vector2(-79, -118),
            new Red.Vector2(-79, -170)
        ]
    ];

    var playerSprtie = [
        "player_01",
        "player_02",
    ];

    var animState = {
        idle_01 : "idle_01",
        idoe_02 : "idoe_02",
        idle_03 : "idle_03",
        rest : "rest",
        result_lose : "result_lose",
        result_win : "result_win",
        shoot_fail : "shoot_fail",
        shoot_ready : "shoot_ready",
        shoot_success : "shoot_success",
        shoot_ting : "shoot_ting",
    };

    var _colIdxInfo = [
        [
            0,0,0,0,2
        ],
        [
            0,0,0,0,1
        ],
    ];

    var _colInfo = [
        {name : "cover_player_s", pos : {x:0,y:-128}, col : 3},
        {name : "cover_player_l", pos : {x:24,y:-148}, col : 4},
        {name : "cover_player_l2", pos : {x:-24,y:-148}, col : 5},
    ];

    function Player(game)
    {
        this.game = game;
        this.teamID = 0;
        this.playerID = 0;
        this.tag = "player_";

        this.gameObject = null;
        this.body = null;
        this.sprite = [];
        this.crtSprite = null;
        this.trigger = null;


        this.scroeNum = 2;
        this.score = null;
        //this.scoreText = null;

        this.ears = [];
        this.triangle = null;
        this.triSpr = null;

        // if( !this.numTex[0] )
        // {
        //     this.numTex[0] = PIXI.Texture.fromImage(numTextName[0]);
        //     this.numTex[1] = PIXI.Texture.fromImage(numTextName[1]);
        //     this.numTex[2] = PIXI.Texture.fromImage(numTextName[2]);
        //     this.numTex[3] = PIXI.Texture.fromImage(numTextName[3]);
        //     this.numTex[4] = PIXI.Texture.fromImage(numTextName[4]);
        //     this.numTex[5] = PIXI.Texture.fromImage(numTextName[5]);
        //     this.numTex[6] = PIXI.Texture.fromImage(numTextName[6]);
        //     this.numTex[7] = PIXI.Texture.fromImage(numTextName[7]);
        //     this.numTex[8] = PIXI.Texture.fromImage(numTextName[8]);
        //     this.numTex[9] = PIXI.Texture.fromImage(numTextName[9]);
        //     this.numTex[10] = PIXI.Texture.fromImage(numTextName[10]);
        // }
    }

    Player.prototype = {
        //numTex : [],

        create: function (teamID, playerID)
        {
            this.teamID = teamID;
            this.playerID = playerID;

            var cont = this.game.containerManager.getContaner("player");
            this.gameObject = new Red.GameObject(this.game);


            this.gameObject.setParent(cont);
            // this.sprite = this.gameObject.addComponet(Red.Sprite, playerSprtie[this.teamID]);
            // this.sprite.sprite.anchor.set( 0.5,0.9 );

            this.sprite[0] =  new PIXI.spine.Spine(this.game.resources[playerSprtie[0]].spineData);
            this.gameObject.container.addChild( this.sprite[0] );
            this.sprite[0].state.addAnimation(0, animState.idle_01, true, 0);

            this.sprite[1] =  new PIXI.spine.Spine(this.game.resources[playerSprtie[1]].spineData);
            this.gameObject.container.addChild( this.sprite[1] );
            this.sprite[1].state.addAnimation(0, animState.idle_01, true, 0);

            //this.score = this.game.factory.sprite( 41,88,  this.numTex[ this.scroeNum ], this.gameObject.container);
            //this.score.anchor.set(0.5);
            //this.score.scale.set(0.5);

            this.score = new Red.PlayerScoreUI(this.game);
            this.score.create( this.teamID, this.playerID, this.gameObject.container );

            //this.scoreText = new Red.BitmapText( "board_score_num_", this.gameObject.container  );
            //this.scoreText.setPosition( 0,0 );
            //this.scoreText.setPivot( 0.5,0.5 );
            //this.scoreText.setText( "1" );
            //this.scoreText.container.scale.set( 0.5 );


            this.gameObject.transform.setWorldPosition(70, 347);

            this.body = this.gameObject.addComponet(Red.RusBody);
            this.body.setCategoryBits(Red.BIT_NET_PLAYER);
            this.body.removeMaskBit();
            this.body.addMaskBit(Red.BIT_BALL);

            this.ears[0] = new PhysicsRus.ShapePoly(_poly[1]);
            this.ears[1] = new PhysicsRus.ShapePoly(_poly[2]);

            var tryColInfo = _colInfo[_colIdxInfo[teamID][playerID]];
            this.triangle = new PhysicsRus.ShapePoly( _poly[ tryColInfo.col ] );

            this.body.addShape(new PhysicsRus.ShapePoly(_poly[0])).setCoefficient(0, 1, 10);
            this.body.addShape(this.ears[0]).setCoefficient(0, 1, 10);
            this.body.addShape(this.ears[1]).setCoefficient(0, 1, 10);
            this.body.addShape(this.triangle).setCoefficient(0, 1, 10);

            this.body.resetMassData();
            this.body.cacheData();

            this.game.signalManager.getSignal(EVENT_SIGNAL.ballSleep).add(function ()
            {
                this.ears[0].isActive = false;
                this.ears[1].isActive = false;
            }, this);

            this.game.signalManager.getSignal(EVENT_SIGNAL.earsActive).add(function ()
            {
                this.ears[0].isActive = true;
                this.ears[1].isActive = true;
            }, this);

            this.game.signalManager.getSignal(EVENT_SIGNAL.onStartGame).add(function ()
            {
                this.ears[0].isActive = true;
                this.ears[1].isActive = true;
            }, this);

            this.gameObject.tag = "player_" + this.teamID;
            this.trigger = this.gameObject.addComponet(Red.TriggerBody);
            this.trigger.isAwake = true;
            this.trigger.createCircle( 0, -86, 15 );

            this.trigger.startCall = (function (col)
            {
                if( col.gameObject.tag === "ball"  )
                {
                    this.game.signalManager.getSignal(EVENT_SIGNAL.catchBall).dispatch(this.teamID, this.scroeNum, this.playerID);
                }
            }).bind(this);

            //this.triSpr =  new PIXI.spine.Spine(this.game.resources["black_cloud"].spineData);
            this.triSpr = this.game.factory.sprite( 0,0,  tryColInfo.name, this.game.containerManager.getContaner("cloud"));
            this.triSpr.anchor.set(0.5);
            //this.game.containerManager.getContaner("cloud").addChild( this.triSpr );
            //this.triSpr.state.addAnimation(0, tryColInfo.name, true, 0);


            //this.triSpr = this.game.factory.sprite(tryColInfo.pos.x,tryColInfo.pos.y, tryColInfo.name, this.gameObject.container);
            //this.triSpr.anchor.set(0.5,1);
        },

        setTeam : function (teamId)
        {
            this.sprite[ teamId ].visible = true;
            this.sprite[ (teamId + 1) % 2 ].visible = false;

            this.crtSprite = this.sprite[ teamId ];
            this.setAnimationIdle();
        },

        _onButtonDown : function (e)
        {
            this.isClick = true;
            this.eventData = e.data;
            this.offsetY = this.eventData.global.y - this.gameObject.container.position.y;
        },

        _onButtonUp : function ()
        {
            this.isClick = false;
        },

        _onButtonMove : function ()
        {
            if( this.isClick )
            {
                var newPosition = this.eventData.global;
                var y = newPosition.y - this.offsetY;

                if( y < 347 )
                {
                    this.gameObject.container.position.y = y;
                    this.body.initTransform();
                }
                else
                {
                    this.gameObject.container.position.y = 347;
                    this.body.initTransform();
                }
            }
        },

        setAnimationSuccess : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.shoot_success, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },

        setAnimationFail  : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.shoot_fail, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },

        setAnimationRestOnce  : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.rest, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },

        setAnimationRest : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.rest, true);
        },

        setAnimationIdle : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.idle_01, true);
        },

        setAnimationIdle2 : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.idoe_02, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },

        setAnimationIdle3 : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.idle_03, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },

        setAnimationWin : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.result_win, true);
        },

        setAnimationLose : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.result_lose, true);
        },

        setAnimationReady : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.shoot_ready, false);
        },

        setAnimationTing : function ()
        {
            this.crtSprite.state.setAnimation(0, animState.shoot_ting, false);
            this.crtSprite.state.addAnimation(0, animState.idle_01, true,0);
        },





        // idle_01 : "idle_01",
        // idoe_02 : "idoe_02",
        // idle_03 : "idle_03",

        // rest : "rest",

        // result_lose : "result_lose",
        // result_win : "result_win",

        // shoot_fail : "shoot_fail",

        // shoot_success : "shoot_success",

        // shoot_ready : "shoot_ready",
        // shoot_ting : "shoot_ting",

        setTriangle : function (active)
        {
            this.triangle.isActive = active;
            this.triSpr.visible = active;
        },

        // setButton : function (active)
        // {
        //     this.sprite.sprite.interactive = active;
        //     this.click = false;
        // },

        setActive: function (active)
        {
            if (this.isActive === active) return;

            this.isActive = active;

            this.gameObject.setActive(active);

            if( !active )
            {
                this.setTriangle(false);
                //this.scoreText.setActive(false);
                //this.score.visible = false
            }
            else
            {

                //this.score.visible = true;
                //this.scoreText.setActive(true);
            }

            this.score.setActive(active);
            this.body.awake(true);
        },

        setPosition : function (x, y)
        {
            this.gameObject.transform.setWorldPosition(x, y);
            this.body.initTransform();
            this.body.resetMassData();
            this.body.cacheData();


            var tryColInfo = _colInfo[_colIdxInfo[this.teamID][this.playerID]];
            this.triSpr.x = x + tryColInfo.pos.x;
            this.triSpr.y = y + tryColInfo.pos.y;
        },

        update: function (delta)
        {

        },

        setScore : function (score)
        {
            this.scroeNum = score;
            //this.score.texture = this.numTex[ this.scroeNum ];
            //this.scoreText.setText( score.toString() );
            this.score.setScore(score);
        },
    };

    return Player;
})();