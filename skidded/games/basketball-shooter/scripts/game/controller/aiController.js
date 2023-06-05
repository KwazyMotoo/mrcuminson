var Red = Red || {};

Red.AiController = (function ()
{
    var _rad = (Math.PI/180);
    var _90rad = 90 * _rad;
    var _180rad = 180 * _rad;

    var _playerAIData = [
        {targetAngle : 87},
        {targetAngle : 80},
        {targetAngle : 72},
        {targetAngle : 72},
        {targetAngle : 67},
    ];

    function AiController(game)
    {
        this.game = game;
        this.ball = null;
        this.goalPost = null;
        this.mode = null;

        this.count = 0;
        this.maxCount = 10;

        this.gravity = 980;
    }

    AiController.prototype = {

        create : function (ball, goalPost)
        {
            this.ball = ball;
            this.goalPost = goalPost;
        },

        start : function ()
        {
            this.gravity = game.physicsManager.rusPhysics.space.gravity.y;
        },

        finish : function ()
        {
            this.mode = null;
        },

        setMode : function (mode)
        {
            this.mode = mode;
        },

        /**
         * @param teamID
         * @param playerID  0 ~ 4 골대에서 멀어질수록 높은 숫자
         */
        startAI : function (teamID, playerID, player)
        {
            this.count = 0;

            if(player)
            {
                player.setAnimationReady();
            }

            var rnd = Red.Math.RandomFloat(1,2);
            console.log( rnd );
            this.game.factory.waitCall(rnd, (function ()
            {
                this._ai(teamID, playerID, player);
            }).bind(this) );
        },

        _ai : function (teamID, playerID, player)
        {
            this.gravity = this.game.physicsManager.rusPhysics.space.gravity.y;

            //중력 980
            this.count++;
            var oriPos = this.ball.gameObject.transform.getWorldPosition();
            var target = this.goalPost[(teamID) % 2].netGos[1].transform.getWorldPosition();
            // var radAngle = Red.Math.RandomInt( 65, 89 ) * _rad;
            var radAngle = _playerAIData[ playerID ].targetAngle * _rad;


            var x = Math.abs(target.x - oriPos.x);
            var y = target.y - oriPos.y;
            var a = radAngle;
            var dir = -1;

            if( target.x < oriPos.x )
            {
                a = _180rad - radAngle;
                dir = 1;
            }

            var dx = Math.cos(a);
            var dy = Math.sin(a) * dir;

            var g = this.gravity;

            var t2 = (x * dy - y * dx) / (0.5 * g * dx);
            var t = Math.sqrt( Math.abs(t2) );
            var power = x / (dx * t);

            power = Math.abs(power);

            var v = (Math.sqrt(g) * Math.sqrt(x) * Math.sqrt((Math.tan(a)*Math.tan(a))+1)) / Math.sqrt(2 * Math.tan(a) - (2 * g * y) / x);

            // console.log( x / dx );
            // console.log( y / dy );
            // console.log( power );
            // console.log( v );

            //v = (sqrt(g) * sqrt(x) * sqrt((tan(o)*tan(o))+1)) / sqrt(2 * tan(o) - (2 * g * y) / x);

            // if( power < Red.CONFIG.controllerPowerMin || power > Red.CONFIG.controllerPowerMax)
            // {
            //     if( this.count < this.maxCount )
            //     {
            //         this._ai( teamID );
            //         return;
            //     }
            //     //power = Red.Math.RandomInt(Red.CONFIG.controllerPowerMin, Red.CONFIG.controllerPowerMax);
            // }

            //if( power < Red.CONFIG.controllerPowerMin ) power = Red.CONFIG.controllerPowerMin;
            //else if( power > Red.CONFIG.controllerPowerMax ) power = Red.CONFIG.controllerPowerMax;

            var errorAngle = Red.Math.RandomInt( -3,3) * _rad;
            var errorPower = 0;

            var sub = this.mode.redScore - this.mode.blueScore;
            if( sub >= 5 )
            {
                errorPower= Red.Math.RandomInt( -60, 60 );
            }
            else if( sub <= -5 )
            {
                errorAngle = 0;
            }

            if(player)
            {
                player.setAnimationTing();
            }
            this.ball.shoot( _90rad - a  + errorAngle,  power + errorPower);

        },
    };

    return AiController;
})();