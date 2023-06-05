var Red = Red || {};

Red.Ball = (function ()
{
    var _state = {
        none : 0,
        wait : 1,
        move : 2,
        outWait : 3,
    };

    function Ball(game)
    {
        this.game = game;
        this.isActive = true;
        this.gameObject = null;
        this.sprtie = null;
        this.body = null;
        this.trigger = null;
        this.state = _state.wait;
        this.waitAction = null;
        this.finishGame = false;


        this.trigger1 = {};
        this.trigger1._0 = false;
        this.trigger1._1 = false;

        this.trigger2 = {};
        this.trigger2._0 = false;
        this.trigger2._1 = false;

        this.texture = [];
        this.shape = null;
    }

    Ball.prototype = {
        create: function ()
        {
            var cont = this.game.containerManager.getContaner("ball");
            this.gameObject = new Red.GameObject( this.game );
            this.gameObject.tag = "ball";
            this.gameObject.transform.setWorldPosition( 477, 0 );
            this.gameObject.setParent( cont );
            var sprite = this.gameObject.addComponet( Red.Sprite, "ball_01");
            sprite.setPivot( 0.5, 0.5 );
            this.body = this.gameObject.addComponet( Red.RusBody );

            this.sprtie = sprite;
            this.texture[0] = PIXI.Texture.fromImage( "ball_01" );
            this.texture[1] = PIXI.Texture.fromImage( "ball_02" );
            this.texture[2] = PIXI.Texture.fromImage( "ball_03" );


            var pos = this.gameObject.transform.getLocalPosition();
            var shape = new PhysicsRus.ShapeCircle( 0, 0, 20 );
            shape.setCoefficient( Red.CONFIG.ballElasticity, 1.0, 100 );
            this.shape = shape;

            this.body.setCategoryBits( Red.BIT_BALL );
            this.body.removeMaskBit();
            this.body.addMaskBit( Red.BIT_ETC );
            this.body.addMaskBit( Red.BIT_NET_COL );

            this.body.addShape(  shape );
            this.body.setType( Red.RusBody.DYNAMIC );
            this.body.resetMassData();
            this.body.cacheData();

            this.trigger = this.gameObject.addComponet(Red.TriggerBody);
            this.trigger.isAwake = true;
            this.trigger.createCircle( 0, 0, 20 );

            var self = this;

            this.game.signalManager.getSignal( EVENT_SIGNAL.ballOut ).add( this._onBallOut.bind(this) );
            this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).add( this._onFinishedGame.bind(this) );
            this.game.signalManager.getSignal( EVENT_SIGNAL.onStartGame ).add( this._onStartGame.bind(this) );

            // this.trigger.startCall = function (col)
            // {
            //     if( col.gameObject.tag === "trigger1_0" )
            //     {
            //         if( self.trigger2._0 && !self.trigger1._0)
            //         {
            //             //거꾸로..
            //             console.log( "거꾸로" );
            //             self.game.signalManager.getSignal( "ballOutOfBound" ).dispatch();
            //         }
            //         else
            //         {
            //             self.trigger1._0 = true;
            //         }
            //     }
            //     else if( col.gameObject.tag === "trigger1_1" )
            //     {
            //         if( self.trigger2._1 && !self.trigger1._1)
            //         {
            //             //거꾸로..
            //             console.log( "거꾸로" );
            //             self.game.signalManager.getSignal( "ballOutOfBound" ).dispatch();
            //         }
            //         else
            //         {
            //             self.trigger1._1 = true;
            //         }
            //     }
            //     else if( col.gameObject.tag === "trigger2_0" )
            //     {
            //         if( self.trigger1._0 && !self.trigger2._0)
            //         {
            //
            //             //골인
            //             console.log( "레드 골인" );
            //             self.game.signalManager.getSignal("redGoal").dispatch();
            //         }
            //         else
            //         {
            //             self.trigger2._0 = true;
            //         }
            //     }
            //     else if( col.gameObject.tag === "trigger2_1" )
            //     {
            //         if( self.trigger1._1 && !self.trigger2._1)
            //         {
            //             //골인
            //             console.log( "블루 골인" );
            //             self.game.signalManager.getSignal("blueGoal").dispatch();
            //         }
            //         else
            //         {
            //             self.trigger2._1 = true;
            //         }
            //     }
            // };
            // this.trigger.exitCall = function (col)
            // {
            //     if( col.gameObject.tag === "trigger1_0" )
            //     {
            //         self.trigger1._0 = false;
            //     }
            //     else if( col.gameObject.tag === "trigger1_1" )
            //     {
            //         self.trigger1._1 = false;
            //     }
            //     else if( col.gameObject.tag === "trigger2_0" )
            //     {
            //         self.trigger2._0 = false;
            //     }
            //     else if( col.gameObject.tag === "trigger2_1" )
            //     {
            //         self.trigger2._1 = false;
            //     }
            // };


            var self = this;
            this.body.sleepCall = function ()
            {
                if( self.state === _state.move )
                {
                    self.state = _state.wait;

                    if(this.finishGame)
                    {
                        return;
                    }

                    self.body.awake(false);
                    self.game.signalManager.getSignal( EVENT_SIGNAL.ballSleep ).dispatch();
                    {
                        var bodys = self.game.physicsManager.rusPhysics.bodys;
                        for( var i =0; i < bodys.length; i++ )
                        {
                            bodys[i].awake(false);
                        }
                    }
                }
            };

            this.waitAction =  new Red.ActionData( 0.5, function (){},function ()
            {
                self.game.signalManager.getSignal( EVENT_SIGNAL.earsActive ).dispatch();
            }, true );
        },


        setActive: function (active)
        {
            if (this.isActive === active) return;

            this.isActive = active;

            this.gameObject.setActive(active);

            if( active )
            {
                this.game.camera.setTarget( this.gameObject.container, 0, -200 );
                this.startShoot();
            }
            else
            {
                this.game.camera.setTarget(null);
            }
        },

        shoot : function (rad, power)
        {
            if( this.state === _state.move ) return;


            this.state = _state.move;
            power = power || 500;

            {
                //console.log( rad + " " + power + " " + this.body.transform.getWorldPosition().x + "," + this.body.transform.getWorldPosition().y );
               //this.gameObject.transform.setWorldPosition(  276.98463680100934,  355.07043696084065 );
               // power = 1024.6167781315332;
               // rad = 0.3141592653589793;
               // this.body.initTransform();
               // this.body.resetVolocity();

                // this.gameObject.transform.setWorldPosition(  283.173863790117,  355.071438480937 );
                // power = 1019.61348346251;
                // rad = 0.314159265358979;
                // this.body.initTransform();
                // this.body.resetVolocity();
            }


            //this.gameObject.transform.addWorldPosition(0, -1 );
            var dirX = -Math.cos(rad);
            var dirY = Math.sin(rad);

            this.body.setVelocity( dirY * power, dirX * power, rad * 10 );
            this.game.actionsManager.addAction( this.waitAction  );
            this.game.signalManager.getSignal( EVENT_SIGNAL.shotBall).dispatch();;
        },

        minShoot : function (rad, power)
        {
            this.state = _state.move;
            power = power || 500;
            var dirX = -Math.cos(rad);
            var dirY = Math.sin(rad);
            this.body.setVelocity( dirY * power, dirX * power, rad * 10 );
            this.game.actionsManager.addAction( this.waitAction  );
            this.game.signalManager.getSignal( EVENT_SIGNAL.shotBall).dispatch();;
        },

        _onBallOut : function ()
        {
            this.startShoot();
            this.state = _state.outWait;
        },

        _onFinishedGame : function ()
        {
            this.finishGame = true;
        },

        _onStartGame : function ()
        {
            this.finishGame = false;
        },

        startShoot : function ()
        {
            var rnd = Red.Math.RandomInt( 0,  this.texture.length);
            this.sprtie.sprite.texture = this.texture[ rnd ];

             // if( rnd === 0 )
             // {
             //     this.shape.setCoefficient(0.7, 1.0, 100 );
             //     //this.game.physicsManager.rusPhysics.space.gravity.y = 980;
             // }
             // else if( rnd === 1 )
             // {
             //     this.shape.setCoefficient(0.7, 1.0, 100 );
             //     //this.game.physicsManager.rusPhysics.space.gravity.y = 880;
             // }
             // else if( rnd === 2 )
             // {
             //     this.shape.setCoefficient(0.1, 1.0, 100 );
             //     //this.game.physicsManager.rusPhysics.space.gravity.y = 1280;
             // }



            this.state = _state.move;
            var dir = Red.Math.RandomInt(0,2) === 0 ? 1 : -1;
            var toque = Red.Math.RandomInt(1,15);


            this.gameObject.transform.setWorldPosition( 480 + dir * 2, 0);
            this.body.awake(true);
            this.body.initTransform();
            this.body.resetVolocity();
            this.body.setVelocity( 0, 0, toque * dir );

            this.game.signalManager.getSignal( EVENT_SIGNAL.ballReset ).dispatch();
        },

        update: function (delta)
        {
            if( this.gameObject.container.position.x < 0 || this.gameObject.container.position.x > 960 )
            {
                this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
            }

            if( this.state === _state.outWait )
            {
                this.game.signalManager.getSignal(EVENT_SIGNAL.earsActive).dispatch();
                this.body.awake(true);
                this.state = _state.move;
            }
        },
    };

    return Ball;
})();