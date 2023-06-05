var Red = Red || {};

Red.GoalPost = (function ()
{
    var _redData = {
        topName :   "goal_b_top",
        bottomName : "goal_b_bottom",
        position : {x : 0, y : 490},
        anchor : {x : 0, y : 1},
        topLocalPos : { x: 11, y : -88 },
        topShotTime : {x:50,y:-300},
        topPolys : [
            [   //기둥1
                new Red.Vector2(2, -3),
                new Red.Vector2(2, -228),
                new Red.Vector2(26, -228),
                new Red.Vector2(26, -3)
            ],
            [   //기둥2
                new Red.Vector2(26, -228),
                new Red.Vector2(38, -228),
                new Red.Vector2(38, -209),
                new Red.Vector2(26, -209)
            ],
            [   //백보드
                new Red.Vector2(39, -178),
                new Red.Vector2(39, -309),
                new Red.Vector2(69, -309),
                new Red.Vector2(69, -178)
            ],
            [
                //삼각형
                new Red.Vector2(59, -184),
                new Red.Vector2(59, -213),
                new Red.Vector2(80, -213)

            ],
            [   //림 안쪽
                new Red.Vector2(80, -209),
                4

            ],
            [   //림 바깥쪽
                new Red.Vector2(158, -209),
                4
            ],
        ],

        topTri : [
            new Red.Vector2(155, -217),
            new Red.Vector2(64, -217),
            new Red.Vector2(64, -309)
        ],

        triPos : {x:55, y:-315},
        triName : "cover_player_m2",

        bottomPoly : [
            new Red.Vector2(5, -35),
            new Red.Vector2(5, -196),
            new Red.Vector2(45, -196),
            new Red.Vector2(88, -138),
            new Red.Vector2(88, -35)
        ],
        net : [
            new Red.Vector2(85, -207),
            new Red.Vector2(119, -208),
            new Red.Vector2(155, -207),
            new Red.Vector2(96.65029167706628, -185.3346569007345),
            new Red.Vector2(142.9989457530144, -184.99860983571884),
            new Red.Vector2(100.97947425843324, -170.42584309935444),
            new Red.Vector2(138.905018462504, -170.25808600807196),
            new Red.Vector2(100.97992210281096, -147.40474764051112),
            new Red.Vector2(119.80751477450269, -146.41657217715024),
            new Red.Vector2(138.85285698994957, -147.23641623412243),
            new Red.Vector2(107.00023293629147, -198.99978241994387),
            new Red.Vector2(131.99996567173184, -198.99897010739062),
            new Red.Vector2(119.99976134828998, -189.99873963732762),
            new Red.Vector2(108.27627726307779, -177.72855133877846),
            new Red.Vector2(133.000010328495, -177.99907616862785),
            new Red.Vector2(120.24406782773838, -167.68947281263257),
            new Red.Vector2(111.21918294373191, -158.71434662937656),
            new Red.Vector2(128.8932366578771, -158.35179977690598),
        ],
        trigger : [
            new Red.Vector2(105, -180),
            new Red.Vector2(105, -165),
        ],

    };

    /*
    0   1   2
      10  11
    3   12  4
      13  14
    5   15  6
      16  17
    7   8   9
     */

    var _blueData = {
        topName :   "goal_r_top",
        bottomName : "goal_r_bottom",
        position : {x : 960, y : 490},
        anchor : {x : 1, y : 1},
        topLocalPos : { x: -11, y : -88 },
        topShotTime : {x:-50,y:-300},
        topPolys : [
            [   //기둥1
                new Red.Vector2(-21, -1),
                new Red.Vector2(-21, -232),
                new Red.Vector2(-1, -232),
                new Red.Vector2(-1, -1),
            ],
            [   //기둥2
                new Red.Vector2(-21, -207),
                new Red.Vector2(-39, -207),
                new Red.Vector2(-39, -232),
                new Red.Vector2(-21, -232),
            ],
            [   //백보드
                new Red.Vector2(-69, -178),
                new Red.Vector2(-69, -309),
                new Red.Vector2(-39, -309),
                new Red.Vector2(-39, -178),

            ],
            [
                //삼각형
                new Red.Vector2(-59, -184),
                new Red.Vector2(-59, -213),
                new Red.Vector2(-80, -213),
            ],
            [   //림 안쪽
                new Red.Vector2(-80, -209),
                4

            ],
            [   //림 바깥쪽
                new Red.Vector2(-158, -209),
                4

            ],

        ],
        topTri : [
            new Red.Vector2(-155, -217),
            new Red.Vector2(-64, -217),
            new Red.Vector2(-64, -309)
        ],

        triPos : {x:-164, y:-315},
        triName : "cover_player_m",

        bottomPoly : [
            new Red.Vector2(-88,-35),
            new Red.Vector2(-88,-138),
            new Red.Vector2(-45, -196),
            new Red.Vector2(-5, -196),
            new Red.Vector2(-5, -35),
        ],
        net : [
            new Red.Vector2(-85, -207),
            new Red.Vector2(-119, -208),
            new Red.Vector2(-155, -207),
            new Red.Vector2(-97.00658919849866, -185.5311537383236),
            new Red.Vector2(-142.9994140431695, -184.9992205159387),
            new Red.Vector2(-101.35708892696789, -170.62904532106836),
            new Red.Vector2(-138.97591352214272, -170.23951824437768),
            new Red.Vector2(-101.7527493496068, -147.6111508743008),
            new Red.Vector2(-119.90238479318441, -146.37286353213273),
            new Red.Vector2(-138.92615527623832, -147.21784315074117),
            new Red.Vector2(-107.00008615480704, -199.0001677189534),
            new Red.Vector2(-132.00012832106825, -198.99947525112162),
            new Red.Vector2(-119.99985288891617, -189.99965766481492),
            new Red.Vector2(-108.4131500934318, -177.6001651033549),
            new Red.Vector2(-133.00008621108964, -177.99999707026512),
            new Red.Vector2(-120.36511458046755, -167.5423693250261),
            new Red.Vector2(-111.26921548454175, -158.63930514366245),
            new Red.Vector2(-129.06336918062937, -158.25042073271013),
        ],

        trigger : [
            new Red.Vector2(-105, -180),
            new Red.Vector2(-105, -165),
        ],
    };

    var _data = [
        _redData,
        _blueData
    ];

     // var jointGroups = [
     //     [ 0, 3 ],
     //     [ 0, 6 ],
     //     [ 1, 3 ],
     //     [ 1, 4 ],
     //     [ 2, 4 ],
     //     [ 2, 5 ],
     //     [ 3, 5 ],
     //     [ 3, 9 ],
     //     [ 4, 6 ],
     //     [ 4, 7 ],
     //     [ 5, 7 ],
     //     [ 5, 8 ],
     //     [ 6, 9 ],
     //     [ 6, 8 ],
     // ];

    var jointGroups = [
        [ 0, 3 ],       //0
        [ 0, 10 ],      //1
        [ 1, 10 ],      //2
        [ 1, 11 ],      //3
        [ 2, 11 ],      //4
        [ 2, 4 ],       //5
        [ 3, 5 ],       //6
        [ 3, 13 ],      //7
        [ 4, 14 ],      //8
        [ 4, 6 ],       //9
        [ 5, 7 ],       //10
        [ 5, 16 ],      //11
        [ 6, 17 ],      //12
        [ 6, 9 ],       //13
        [ 6, 9 ],       //14

        [ 10, 3 ],      //15
        [ 10, 12 ],     //16
        [ 11, 12 ],     //17
        [ 11, 4 ],      //18
        [ 12, 13 ],     //19
        [ 12, 14 ],     //20
        [ 13, 5 ],      //21
        [ 13, 15 ],     //22
        [ 14, 15 ],     //23
        [ 14, 6 ],      //24
        [ 15, 16 ],     //25
        [ 15, 17 ],     //26
        [ 16, 7 ],      //27
        [ 16, 8 ],      //28
        [ 17, 8 ],      //29
        [ 17, 9 ],      //30

        // [ 0, 7 ],
        // [ 2, 9 ],
    ];

    var _jointType = [           //0 : rope,  1 : distance
        0,      //0
        0,      //1
        0,      //2
        0,      //3
        0,      //4
        0,      //5
        0,      //6
        0,      //7
        0,      //8
        0,      //9
        0,      //10
        0,      //11
        0,      //12
        0,      //13
        0,      //14

        0,       //15
        0,       //16
        0,       //17
        0,       //18
        0,       //19
        0,       //20
        1,       //21
        0,       //22
        0,       //23
        1,       //24
        0,       //25
        0,       //26
        0,       //27
        0,       //28
        0,       //29
        0,       //30

        // [ 0, 7 ],
        // [ 2, 9 ],
    ];


    function GoalPost(game, teamId)
    {
        this.game = game;
        this.isActive = true;
        this.gameObject = null;
        this.top = null;
        this.topBody = null;
        this.bottom = null;
        this.teamID = teamId || 0;
        this.prePos = null;

        this.finishGame = false;

        this.netGos = [];
        this.netBodys = [];
        this.netJoints = [];

        this.trigger1 = null;
        //105, -184

        this.trigger2 = null;
        //104, -168

        this.goalSegment = null;

        this.netGraphic = null;

        this.topDir = 1;
        this.topSpeed = 50;

        this.isMoveTop = false;

        this.shotTimeText = null;

        this.pointEffect = null;

        this.tri = null;
        this.triSpr = null;
    }

    GoalPost.prototype = {
        create: function ()
        {
            this.gameObject = new Red.GameObject(this.game);
            this.top = new Red.GameObject(this.game);
            this.bottom = new Red.GameObject(this.game);

            this.gameObject.addChild(this.top);
            this.gameObject.addChild(this.bottom);

            var data = _data[this.teamID];

            var topSrt = this.top.addComponet(Red.Sprite, data.topName);
            var bottomSrt = this.bottom.addComponet(Red.Sprite, data.bottomName);

            topSrt.sprite.anchor.set(data.anchor.x, data.anchor.y);
            bottomSrt.sprite.anchor.set(data.anchor.x, data.anchor.y);
            this.top.transform.setLocalPosition(data.topLocalPos.x, data.topLocalPos.y);

            this.gameObject.transform.setWorldPosition(data.position.x, data.position.y);

            this.gameObject.addComponet( Red.GameObjectDebug );
            this.top.addComponet( Red.GameObjectDebug );
            this.bottom.addComponet( Red.GameObjectDebug );

            var topBody = this.top.addComponet( Red.RusBody );
            topBody.setCategoryBits( Red.BIT_ETC );
            topBody.removeMaskBit();
            topBody.addMaskBit( Red.BIT_BALL );

            this.tri = new PhysicsRus.ShapePoly( data.topTri );

            topBody.addShape( new PhysicsRus.ShapePoly( data.topPolys[0] ) );
            topBody.addShape( new PhysicsRus.ShapePoly( data.topPolys[1] ) );
            topBody.addShape( new PhysicsRus.ShapePoly( data.topPolys[2] ) );
            topBody.addShape( new PhysicsRus.ShapePoly( data.topPolys[3] ) );
            topBody.addShape( new PhysicsRus.ShapeCircle( data.topPolys[4][0].x,data.topPolys[4][0].y,data.topPolys[4][1] ) );
            topBody.addShape( new PhysicsRus.ShapeCircle( data.topPolys[5][0].x,data.topPolys[5][0].y,data.topPolys[5][1] ) );
            topBody.addShape( this.tri );
            topBody.setType( Red.RusBody.KINETIC );
            topBody.resetMassData();


            this.topBody = topBody;

            var bottomBody = this.bottom.addComponet( Red.RusBody );
            bottomBody.setCategoryBits( Red.BIT_ETC );
            bottomBody.removeMaskBit();
            bottomBody.addMaskBit( Red.BIT_BALL );
            bottomBody.addShape( new PhysicsRus.ShapePoly( data.bottomPoly ) );
            bottomBody.setType(Red.RusBody.STATIC );
            bottomBody.resetMassData();
            bottomBody.cacheData();


            //그물
            var netPos = data.net;
            for( var i = 0; i <  netPos.length; i++)
            {
                this.netGos[i] = new Red.GameObject( this.game );
                this.netGos[i].setParent( this.top );
                this.netGos[i].transform.setLocalPosition(netPos[i].x, netPos[i].y );
                this.netBodys[i] = this.netGos[i].addComponet( Red.RusBody );
                this.netBodys[i].dontSleep =  true;


                this.netGos[i].addComponet( Red.GameObjectDebug, 1, 0x0000ff );

                if( i === 0 || i === 1 || i === 2 )
                {
                    this.netBodys[i].setType( Red.RusBody.KINETIC );
                    this.netBodys[i].setCategoryBits( Red.BIT_NET_STATIC );
                    this.netBodys[i].removeMaskBit();
                    this.netGos[i].oriLocal = netPos[i];
                }
                else
                {
                    this.netBodys[i].setType( Red.RusBody.DYNAMIC );

                    var circle = new PhysicsRus.ShapeCircle( 0, 0, 3 );
                    circle.setCoefficient( 0, 0.5, 1 );
                    this.netBodys[i].addShape( circle );

                    if( i === 8 )
                    {
                        this.netBodys[i].setCategoryBits( Red.BIT_NET_DONTCOL );
                        this.netBodys[i].removeMaskBit();
                    }
                    else if( i > 9 )
                    {
                        this.netBodys[i].setCategoryBits( Red.BIT_NET_DONTCOL );
                        this.netBodys[i].removeMaskBit();
                    }
                    else
                    {
                        this.netBodys[i].setCategoryBits( Red.BIT_NET_COL );
                        this.netBodys[i].removeMaskBit();
                        this.netBodys[i].addMaskBit( Red.BIT_BALL );
                    }
                }

                this.netBodys[i].resetMassData();
                this.netBodys[i].initTransform();
            }
//
            this.goalSegment = new Red.GoalSegment(this.game);
            this.goalSegment.create( -25, 10, 25, 10, this.netGos[1].container );

            for( i = 0; i <  jointGroups.length; i++)
            {
                var g = jointGroups[i];

                var anchor1;
                var anchor2;

                anchor1 = this.netBodys[g[0]].transform.getWorldPosition();
                anchor2 = this.netBodys[g[1]].transform.getWorldPosition();

                //if( _jointType[i] === 0 )
                {
                    this.netJoints[i] = new PhysicsRus.RopeJoint( this.netBodys[g[0]], this.netBodys[g[1]], anchor1, anchor2 );
                }
                //else
                //{
                //    this.netJoints[i] = new PhysicsRus.DistanceJoint( this.netBodys[g[0]], this.netBodys[g[1]], anchor1, anchor2 );
                //    this.netJoints[i].setSpringFrequencyHz(10);
                //    this.netJoints[i].setSpringDampingRatio(0.1);
                //}
//

                this.netJoints[i].collideConnected = false;
                this.game.physicsManager.addJoint( this.netJoints[i] );
            }

            this.game.signalManager.getSignal( EVENT_SIGNAL.ballSleep ).add(function ()
            {
                this.resetNet();
            }, this, false);

            //this.trigger1 = new Red.GameObject( this.game );
            //this.trigger2 = new Red.GameObject( this.game );
            //this.trigger1.tag = "trigger1_" + this.teamID;
            //this.trigger2.tag = "trigger2_" + this.teamID;
            //this.trigger1.setParent( this.top );
            //this.trigger2.setParent( this.top );
            //this.trigger1.addComponet( Red.TriggerBody ).createCircle( data.trigger[0].x, data.trigger[0].y, 2 );
            //this.trigger2.addComponet( Red.TriggerBody ).createCircle( data.trigger[1].x, data.trigger[1].y, 2 );

            this.netGraphic = new PIXI.Graphics();
            this.game.containerManager.getContaner( "net" ).addChild( this.netGraphic );

            this.shotTimeText = this.game.factory.text( data.topShotTime.x,data.topShotTime.y,"0.0", this.top.container );
            this.shotTimeText.anchor.set(0.5);
            this.shotTimeText.visible = false;

            this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).add( this._onFinishedGame.bind(this) );
            this.game.signalManager.getSignal( EVENT_SIGNAL.onStartGame ).add( this._onStartGame.bind(this) );


            this.pointEffect = this.game.pointerManager.getPointer( "pointEffect" );

            //this.triSpr = new PIXI.spine.Spine(this.game.resources["black_cloud"].spineData);
            //this.top.container.addChild( this.triSpr );
            //this.triSpr.state.addAnimation(0, "black_cloud_big", true, 0);
            //this.triSpr.y = data.triPos.y;
            //this.triSpr.x = data.triPos.x;

            this.triSpr = this.game.factory.sprite( data.triPos.x, data.triPos.y, data.triName, this.top.container);


            // this.netJoints[31].isDraw = false;
            // this.netJoints[32].isDraw = false;
        },

        setActive: function (active)
        {
            if (this.isActive === active) return;

            this.isActive = active;


            this.gameObject.setActive(active);

            if( active )
            {
                var data = _data[this.teamID];

                this.top.transform.setLocalPosition(data.topLocalPos.x, data.topLocalPos.y);
                this.topBody.initTransform();
                this.topBody.cacheData();
                this.bottom.getComponet( Red.RusBody ).cacheData();
                this.resetNet();
            }
        },

        onKeyDown : function (e)
        {
            if(e.keyCode === 32)
            {
                //this.resetNet();

                var str = "";

                for( var i = 0; i <  this.netGos.length; i++)
                {
                    var pos = this.netGos[i].transform.getLocalPosition();
                    str += Red.Utill.stringFormat("new Red.Vector2({0}, {1}),\n", pos.x, pos.y);
                }

                console.log( str );

            }
        },

        resetNet : function ()
        {
            if(this.finishGame) return;

            var netPos = _data[this.teamID].net;
            for( var i = 0; i <  netPos.length; i++)
            {
                this.netGos[i].transform.setLocalPosition(netPos[i].x, netPos[i].y );
                this.netBodys[i].initTransform();
                this.netBodys[i].cacheData();
                this.netBodys[i].awake( false );
                //this.netBodys[i].resetVolocity();
            }
        },

        playEffect : function (score)
        {
            var pos = this.netBodys[1].transform.getWorldPosition();
            this.pointEffect.setPoint( pos.x, pos.y - 20, score );
        },

        setTri : function (active)
        {
            this.tri.isActive = active;
            this.triSpr.visible = active;
        },

        _onFinishedGame : function ()
        {
            this.finishGame = true;
            this.isMoveTop = false;
        },

        _onStartGame : function ()
        {
            this.finishGame = false;
            var data = _data[this.teamID];
            this.top.transform.setLocalPosition(data.topLocalPos.x, data.topLocalPos.y);
            this.topBody.initTransform();
            this.topBody.cacheData();
            this.bottom.getComponet( Red.RusBody ).cacheData();
            this.resetNet();
            this.isMoveTop = false;
        },

        update: function (delta)
        {
            if( !this.isActive ) return;
            //console.log( this.topBody.v );

            if(this.isMoveTop)
            {
                this._topMove(delta);
            }

            this.netGraphic.clear();
            for(var i =0; i < jointGroups.length;i++)
            {
                var g = jointGroups[i];
                var anchor1 = this.netBodys[g[0]].transform.getWorldPosition();
                var anchor2 = this.netBodys[g[1]].transform.getWorldPosition();

                this.netGraphic.lineStyle(2, 0xFFc800, 1);
                this.netGraphic.moveTo(anchor1.x, anchor1.y);
                this.netGraphic.lineTo(anchor2.x, anchor2.y);
            }
        },
        
        _topMove : function (delta)
        {
            var pos = this.top.transform.getLocalPosition();

            if( pos.y <= -150 || pos.y > -50 )
            {
                this.topDir *= -1;
            }

            pos.y += this.topSpeed * this.topDir * delta;

            if(this.prePos)
            {
                var vel = Red.Vector2.Sub(pos, this.prePos );
                vel.scale( 1 / delta );
                // this.topBody.setVelocity( vel.x, vel.y );



                this.topBody.v.x = vel.x;
                this.topBody.v.y = vel.y;
            }
            this.prePos = Red.Vector2.Duplicate(pos);
            this.top.transform.setLocalPosition( pos.x, pos.y );


            this.topBody.initTransform();
            this.topBody.cacheData();

            this._netReset();
        },

        _netReset : function ()
        {
            this.netGos[0].transform.setLocalPosition( this.netGos[0].oriLocal.x,this.netGos[0].oriLocal.y );
            this.netGos[1].transform.setLocalPosition( this.netGos[1].oriLocal.x,this.netGos[1].oriLocal.y );
            this.netGos[2].transform.setLocalPosition( this.netGos[2].oriLocal.x,this.netGos[2].oriLocal.y );
            //this.netBodys[0].initTransform();
            //this.netBodys[1].initTransform();
            //this.netBodys[2].initTransform();

            for( var i = 0; i <  this.netBodys.length; i++){
                this.netBodys[i].initTransform();
            }
        }
    };

    return GoalPost;
})();