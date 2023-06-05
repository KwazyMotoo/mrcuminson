var Red = Red || {};

Red.BallController = (function ()
{
    function BallController(game)
    {
        this.game = game;
        this.gameObject = null;
        this.currentID = 0;
        this.ball = null;
        this.anglespr = null;
        this.isActive = true;
        this.angleDir = 1;
        this.power = 0;
        this.powerDir = 1;
        this.lineTrace = null;
        this.catchPlayer = null;

        this.isClick = false;
    }

    BallController.prototype = {

        create : function (ball, lineTrace)
        {
            this.ball = ball;
            this.lineTrace = lineTrace;
            this.gameObject = new Red.GameObject(this.game);
            this.anglespr = this.gameObject.addComponet(Red.Sprite, "ball_angle");
            this.anglespr.sprite.anchor.set( 0.5 , 1 );
            this.anglespr.sprite.position.set( 0, 50 );

            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOut).add((function ()
            {
                this.setActive( false );
            }).bind(this));

            this.game.signalManager.getSignal( EVENT_SIGNAL.onChangeTurn ).add( this._onChangeTurn.bind(this) );

            this.setActive( false );

        },

        setBall : function (ball, player)
        {
            this.ball =  ball || this.ball;
            this.catchPlayer = player || null;
            var ballPos = this.ball.gameObject.transform.getWorldPosition();
            this.gameObject.transform.setWorldPosition(ballPos.x, ballPos.y  );
            this.setActive(true);

            this.gameObject.transform.setRotation(0);
            this.angleDir = Red.Math.RandomInt(0,2) === 0 ? 1 : -1;
        },

        setActive : function (active)
        {
            if( this.isActive === active ) return;

            this.isActive = active;
            this.gameObject.setActive( active );
            this.isClick = false;
            this.lineTrace.clear();
        },

        update : function (delta)
        {
            if( this.currentID !== Red.GAME_DATA.userID || !this.isActive) return;

            if( this.isClick )
            {
                this.power += this.powerDir * Red.CONFIG.controllerPowerSpeed * delta;
                if( this.power <= Red.CONFIG.controllerPowerMin || this.power >= Red.CONFIG.controllerPowerMax)
                {
                    this.powerDir *= -1;
                }

                var pos = this.gameObject.transform.getWorldPosition();
                this.lineTrace.draw( pos.x, pos.y, this.gameObject.transform.getRotaion(), this.power );

            }
            else
            {
                this.gameObject.transform.addRotation( Red.CONFIG.controllerAngleSpeed * delta  * this.angleDir);
                var rad = this.gameObject.transform.getRotaion();

                if( Math.abs( rad ) >= Red.CONFIG.controllerAngleLimit )
                {
                    this.angleDir = this.angleDir * -1;
                }
            }
        },

        onMouseDown : function (e)
        {
            if( !this.isActive  ) return;

            this.isClick = true;
            this.power = Red.CONFIG.controllerPowerMin;
            this.powerDir = 1;

            if(this.catchPlayer)
            {
                this.catchPlayer.setAnimationReady();
            }

            //this.powerDir = Red.Math.RandomInt(0,2) === 0 ? 1 : -1;
            //this.power = Red.Math.RandomInt( Red.CONFIG.controllerPowerMin, Red.CONFIG.controllerPowerMax);
        },

        onMouseUp : function (e)
        {
            if( !this.isActive  ) return;

            if( this.isClick )
            {
                this.setActive(false);
                if(this.catchPlayer)
                {
                    this.catchPlayer.setAnimationTing();
                }

                var rot = this.gameObject.transform.getRotaion();

                var rotDeg = rot * (180/Math.PI);

                if( rotDeg <= 3 &&  rotDeg >= -3)
                {
                    if( rotDeg < 1 &&  rotDeg > -1  )
                    {
                        rot = this.angleDir * (Math.PI/180) * 3;
                    }
                    else if( rotDeg > 0 && rotDeg <= 3 )
                    {
                        rot = 3 * (Math.PI/180);
                    }
                    else if( rotDeg < 0 &&rotDeg >= -3 )
                    {
                        rot = -3 * (Math.PI/180);
                    }
                }

                this.game.networkManager.sendMessage_shot( rot, this.power );
                //this.ball.shoot(this.gameObject.transform.getRotaion(), this.power);
                this.lineTrace.clear();
            }
            else
            {

            }

            this.isClick = false;
        },


        _onChangeTurn : function (call)
        {
            if( !this.isActive ) return;

            this.setActive(false);
            var rndAngle = Red.Math.RandomInt( 10,12 );
            rndAngle = Red.Math.RandomInt(0,2) === 0 ? rndAngle : rndAngle * -1;

            this.game.networkManager.sendMessage_shot( rndAngle * Red.Math.DEG_TO_RAD, Red.CONFIG.controllerPowerMin );
            this.lineTrace.clear();

            call && call();
        },

        changeTurn : function (call)
        {
            var rndAngle = Red.Math.RandomInt( 10,12 );
            rndAngle = Red.Math.RandomInt(0,2) === 0 ? rndAngle : rndAngle * -1;
            this.ball.minShoot( rndAngle * Red.Math.DEG_TO_RAD, Red.CONFIG.controllerPowerMin );
            call && call();
        },

        longPass : function (player)
        {
            var rndAngle = Red.Math.RandomInt( 30,50 );
            var rndPower = Red.Math.RandomInt( Red.CONFIG.controllerPowerMin,Red.CONFIG.controllerPowerMax - 100 );

            this.game.factory.waitCall(0.1, (function ()
            {
                if(player)
                {
                    player.setAnimationTing();
                }
                this.ball.shoot( -rndAngle * Red.Math.DEG_TO_RAD, rndPower );
            }).bind(this));
        }
    };

    return BallController;
})();