var Red = Red || {};

Red.GoalController = (function ()
{

    function GoalController(game)
    {
        this.game = game;
        this.ball = null;
        this.goalSegment = [];

        this.preBallPos = null;
        this.preGoalPost1 = [];
        this.preGoalPost2 = [];

        this.time = 0;
        this.goalDelay = 0.5;
    }

    GoalController.prototype = {

        create : function (ball, goalPosts)
        {
            this.goalSegment.length = 0;
            this.ball = ball;
            this.goalSegment.push( goalPosts[0].goalSegment );
            this.goalSegment.push( goalPosts[1].goalSegment );

            this.game.debugManager.gameObjectDebugs.push(this);


            this.game.signalManager.getSignal( EVENT_SIGNAL.ballReset ).add( this._onBallReset.bind(this) );
        },

        update : function (delta)
        {
            if( this.time > 0  )
            {
                this.time -= delta;
            }
            else
            {
                var point1 = this.goalSegment[1].getPoint1().transform.getWorldPosition();
                var point2 = this.goalSegment[1].getPoint2().transform.getWorldPosition();

                var point3 = this.goalSegment[0].getPoint1().transform.getWorldPosition();
                var point4 = this.goalSegment[0].getPoint2().transform.getWorldPosition();

                var ballPos = this.ball.gameObject.transform.getWorldPosition();

                var col1 = Red.Math.SegmentCollision( point1, point2, this.preBallPos, ballPos );
                var col2 = Red.Math.SegmentCollision( point3, point4, this.preBallPos, ballPos );

                if( col1 !== 0)
                {
                    if( col1 > 0 )
                    {
                        console.log( " 골 " );
                        this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).dispatch();
                        this.time = this.goalDelay;
                    }
                    else
                    {
                        //console.log( " 거꾸로 " );
                        //this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
                        this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).dispatch();
                    }
                }
                else if( col2 !==0)
                {
                    if( col2 > 0 )
                    {
                        console.log( " 골 " );
                        this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).dispatch();
                        this.time = this.goalDelay;
                    }
                    else
                    {
                        //console.log( " 거꾸로 " );
                        //this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
                        this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).dispatch();
                    }
                }
                else
                {
                    var col3 = Red.Math.SegmentCollision( this.preGoalPost1[0], this.preGoalPost1[1], this.preBallPos, ballPos );
                    var col4 = Red.Math.SegmentCollision( this.preGoalPost2[0], this.preGoalPost2[1], this.preBallPos, ballPos );

                    if( col3 !== 0)
                    {
                        if( col3 > 0 )
                        {
                            console.log( " 골 " );
                            this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).dispatch();
                            this.time = this.goalDelay;
                        }
                        else
                        {
                            //console.log( " 거꾸로 " );
                            //this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
                            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).dispatch();
                        }
                    }
                    else if( col4 !==0)
                    {
                        if( col4 > 0 )
                        {
                            console.log( " 골 " );
                            this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).dispatch();
                            this.time = this.goalDelay;
                        }
                        else
                        {
                            //console.log( " 거꾸로 " );
                            //this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
                            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).dispatch();
                        }
                    }
                }

                this.preBallPos = ballPos;
                this.preGoalPost1[0] = point1;
                this.preGoalPost1[1] = point2;
                this.preGoalPost2[0] = point3;
                this.preGoalPost2[1] = point4;
            }
        },

        draw : function ()
        {
            var point1 = this.goalSegment[0].getPoint1().transform.getWorldPosition();
            var point2 = this.goalSegment[0].getPoint2().transform.getWorldPosition();

            var point3 = this.goalSegment[1].getPoint1().transform.getWorldPosition();
            var point4 = this.goalSegment[1].getPoint2().transform.getWorldPosition();

            var ballPos = this.ball.gameObject.transform.getWorldPosition();

            this.game.debugManager.drawLine(point1.x, point1.y, point2.x, point2.y, 0x00ff00 );
            this.game.debugManager.drawLine(point3.x, point3.y, point4.x, point4.y, 0x00ff00 );
            this.game.debugManager.drawFillCircle(ballPos.x, ballPos.y, 4, 0x00ff00 );
        },

        _onBallReset : function ()
        {
            this.preBallPos = this.ball.gameObject.transform.getWorldPosition();

            this.preGoalPost1[0] = this.goalSegment[1].getPoint1().transform.getWorldPosition();
            this.preGoalPost1[1] = this.goalSegment[1].getPoint2().transform.getWorldPosition();
            this.preGoalPost2[0] = this.goalSegment[0].getPoint1().transform.getWorldPosition();
            this.preGoalPost2[1] = this.goalSegment[0].getPoint2().transform.getWorldPosition();

            //console.log( " this.preBallPos " + this.preBallPos.x + " " + this.preBallPos.y );
        },
    };

    return GoalController;
})();