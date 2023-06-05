var Red = Red || {};

Red.ChallengeMode = (function ()
{
    var _maxChance = 3;

    var _playerRedTeamIdx = [
        1,3,5,7,9
    ];

    var _playerBlueTeamIdx = [
        8,6,4,2,0
    ];

    var _teamArr = [
        _playerBlueTeamIdx,
        _playerRedTeamIdx
    ];


    function ChallengeMode(game)
    {
        this.game = game;
        this.score = null;

        this.scoreBoard = null;
        this.players = null;
        this.goalPosts = null;
        this.aiController = null;
        this.timeController = null;
        this.goalEffect = null;

        this.turn = 0;
        this.chance = _maxChance;

        this.catchBallTeamID = 0;
        this.catchPlayerScore = 0;
        this.catchBallPlayerID = 0;

        this.offenceTeamID = 0;
        this.offencePlayerID = 0;

        this.ballController = null;
        this.finishedGame = false;

        this.isUpsideDown = false;
        this.isGoal = false;

        this.scoreArr = [
            9, 8, 7, 6, 5, 4, 3, 2, 1, 0
        ];
    }

    ChallengeMode.prototype = {

        create : function (scoreBoard, players, ballCtrl, timeController, aiController, goalPosts, goalEffect )
        {
            this.scoreBoard = scoreBoard;
            this.players = players;
            this.ballController = ballCtrl;
            this.timeController = timeController;
            this.goalPosts = goalPosts;
            this.aiController = aiController;
            this.goalEffect = goalEffect

            this.aiController.setMode( this );
        },

        start : function ()
        {
            this.finishedGame = false;

            this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).add(this._goal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).add(this._goal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.catchBall).add(this._catchBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballSleep).add(this._sleepBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOutOfBound).add(this._onBallOutOfBound,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onFinishGame).add(this._onFinishedGame,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).add(this._onUpsideDown, this);

            for (var i = 0; i < this.players.length; i++)
            {
                this.players[ i ].setScore( this.scoreArr[i] );
                this.players[ i].setTriangle( false );
            }

            this.turn = 0;
            this.chance = _maxChance;
            this.score = 0;
            this.scoreBoard.setMode( Red.GameMode.challenge );
            this.scoreBoard.score[2].setText("0");
            this.scoreBoard.startScaleUpDown(2);
            this.scoreBoard.setLife(2, 3);
            //this.scoreBoard.score1.setText( this.score.toString() );
            //this.scoreBoard.turnText.setText(this.turn.toString() );
        },

        finish : function ()
        {
            this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).remove(this._goal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).remove(this._goal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.catchBall).remove(this._catchBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballSleep).remove(this._sleepBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOutOfBound).remove(this._onBallOutOfBound,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onFinishGame).remove(this._onFinishedGame,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).remove(this._onUpsideDown, this);


            this.aiController.finish();
            this.timeController.stopTime();
        },

        dispose : function ()
        {
            this.game = null;
            this.scoreBoard = null;
            this.players = null;
            this.ballController = null;
            this.goalPosts = null;
            this.aiController = null;
            this.timeController = null;
        },


        _goal : function ()
        {
            if( this.finishedGame || this.isUpsideDown || this.isGoal)
            {
                return;
            }

            this.score += this.catchPlayerScore;
            this.scoreBoard.score[2].setText(this.score.toString());
            this.scoreBoard.startScaleUpDown( 2 );
            this.goalEffect._onRedGoal();
            this.isGoal = true;

            //this._mixScoreArr(this.scoreArr);
            // for (var i = 0; i < this.players.length; i++)
            // {
            //     this.players[ i ].setScore( this.scoreArr[i] );
            // }

            this.goalPosts[1].playEffect( this.catchPlayerScore );

            //this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]].setAnimationSuccess();

            for(var i = 0 ; i < this.players.length; i++)
            {
                this.players[i].setAnimationSuccess();
            }

            this.turn++;
            this.chance = _maxChance;
            this._lifeUpdate();
            //this.scoreBoard.turnText.setText(this.turn.toString() );
            this._checkLevel();
        },


        _checkLevel : function ()
        {
            if(this.turn === 4)
            {
                this.goalPosts[1].isMoveTop = true;
            }
        },

        _onFinishedGame : function ()
        {
            this.finishedGame = true;
        },

        _mixScoreArr : function (arr, max)
        {
            max = max || 50;
            for( var i = 0; i < max; i++ )
            {
                var srcIdx = Red.Math.RandomInt( 0, arr.length - 1 );
                var desIdx = Red.Math.RandomInt( 0, arr.length - 1 );

                var temp = arr[ srcIdx ];
                arr[ srcIdx ] = arr[ desIdx ];
                arr[ desIdx ] = temp;
            }
        },

        _catchBall : function (teamID, score, playerID)
        {
            this.catchBallTeamID = teamID;
            this.catchPlayerScore = score;
            this.catchBallPlayerID = playerID;
        },

        _sleepBall : function ()
        {
            if( this.finishedGame )
            {
                return;
            }

            this.isUpsideDown = false;
            this.isGoal = false;

            if( this.catchBallTeamID === 1 &&  this.catchBallPlayerID === 4)
            {

                this.ballController.longPass(this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]]);
                return;
            }

            if( this.chance === 0 )
            {
                //gameover
                //this.game.signalManager.getSignal( EVENT_SIGNAL.onRedWin ).dispatch();
                this.finishedGame = true;
                this.goalEffect._onGameover();
                this.scoreBoard.startScaleUp(2);
                console.log("chance === 0");
                for (var i = 0; i < this.players.length; i++)
                {
                    this.players[ i ].setAnimationLose();
                }
            }
            else
            {

                this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]].setAnimationIdle3();
                this.ballController.setBall(null, this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]]);
                //this.aiController.startAI( this.catchBallTeamID, this.catchBallPlayerID, this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]] );
                this.timeController.startTimeDown( 5, this._timeCall.bind(this), this.goalPosts[1] );
                this.game.signalManager.getSignal( EVENT_SIGNAL.selectPlayer_ +  this.catchBallTeamID + this.catchBallPlayerID).dispatch(true);
            }

            this.chance--;
            this._lifeUpdate();
        },

        _onUpsideDown : function ()
        {
            this.isUpsideDown = true;
        },

        _onBallOutOfBound : function ()
        {
            if( this.finishedGame )
            {
                return;
            }

            //this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]].setAnimationFail();

            //gameover
            //this.game.signalManager.getSignal( EVENT_SIGNAL.onRedWin ).dispatch();
            this.finishedGame = true;
            for (var i = 0; i < this.players.length; i++)
            {
                this.players[ i ].setAnimationLose();
            }
            this.goalEffect._onGameover();
            this.scoreBoard.startScaleUp(2);
            console.log("_onBallOutOfBound");
        },

        _timeCall : function (time)
        {
            if( time <= 0 )
            {
                if( this.ballController.isActive )
                {
                    this.ballController.changeTurn();
                    this.ballController.setActive(false);

                    var idx = _teamArr[this.catchBallTeamID][this.catchBallPlayerID];

                    this.players[idx].setAnimationFail();

                    // if( idx > 0 )
                    // {
                    //     this.players[idx-1].setAnimationIdle2();
                    // }

                    // if( idx < 9)
                    // {
                    //     this.players[idx+1].setAnimationIdle2();
                    // }

                    for(var i = 0 ; i < this.players.length; i++)
                    {
                        if( idx === i ) continue;
                        this.players[i].setAnimationIdle2();
                    }

                    //this.finishedGame = true;
                    //this.goalEffect._onGameover();
                    //console.log("_timeCall");
                }
                time = 0;
            }

            this.goalPosts[ 0 ].shotTimeText.text = time.toFixed(1).toString();
            this.goalPosts[ 1 ].shotTimeText.text = time.toFixed(1).toString();
        },

        _lifeUpdate : function ()
        {
            this.scoreBoard.setLife(2, this.chance + 1);
        }
    };

    return ChallengeMode;
})();